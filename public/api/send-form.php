<?php
declare(strict_types=1);
ini_set('display_errors', '0');

// PHP 8.x. This file must execute on cPanel, not be served as a static download.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, bool $ok): void {
    http_response_code($status);
    echo json_encode(['ok' => $ok]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, false);
}

// No cross-origin API access. Browser submissions must come from our website.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, [
    'https://mimshospitals.com', 'https://www.mimshospitals.com'
], true)) {
    respond(403, false);
}
if (strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0])) !== 'application/json') {
    respond(415, false);
}
$raw = file_get_contents('php://input', false, null, 0, 16385);
if ($raw === false || strlen($raw) > 16384) respond(413, false);
$data = json_decode($raw, true);
if (!is_array($data)) respond(400, false);

function field(array $data, string $key, int $max): string {
    $value = $data[$key] ?? '';
    if (!is_string($value) || strlen($value) > $max ||
        preg_match('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', $value)) {
        respond(422, false);
    }
    return trim($value);
}

$type = field($data, 'type', 20);
if (!in_array($type, ['contact', 'appointment'], true)) respond(422, false);
if (field($data, 'website', 200) !== '') respond(200, true);
$name = field($data, 'name', 150);
$message = field($data, 'message', 5000);
if (strlen($name) < 2 || preg_match('/[\r\n]/', $name)) respond(422, false);
$lines = ['Name: ' . $name];
$replyTo = '';
if ($type === 'contact') {
    $replyTo = field($data, 'email', 254);
    if (!filter_var($replyTo, FILTER_VALIDATE_EMAIL) ||
        preg_match('/[\r\n]/', $replyTo) || strlen($message) < 10) respond(422, false);
    $lines[] = 'Email: ' . $replyTo;
} else {
    $phone = field($data, 'phone', 30);
    $department = field($data, 'department', 120);
    $date = field($data, 'date', 10);
    if (!preg_match('/^[+0-9][0-9 ()-]{7,17}$/', $phone) ||
        $department === '' || preg_match('/[\r\n]/', $department)) respond(422, false);
    if ($date !== '') {
        $parsed = DateTimeImmutable::createFromFormat('!Y-m-d', $date);
        if (!$parsed || $parsed->format('Y-m-d') !== $date) respond(422, false);
    }
    $lines[] = 'Phone: ' . $phone;
    $lines[] = 'Department: ' . $department;
    $lines[] = 'Preferred date: ' . ($date ?: 'Not specified');
}

// Locked, bounded rolling-window counters outside the public document root.
// Only hashed IPs and timestamps are stored; no submitted personal information.
$path = sys_get_temp_dir() . '/mims-form-rate-' . hash('sha256', __DIR__) . '.json';
$handle = @fopen($path, 'c+');
if (!$handle || !flock($handle, LOCK_EX)) respond(503, false);
@chmod($path, 0600);
$state = json_decode(stream_get_contents($handle), true);
if (!is_array($state)) $state = [];
$now = time();
foreach ($state as $key => $times) {
    $state[$key] = array_values(array_filter((array) $times, static function ($time) use ($now) {
        return is_int($time) && $time > $now - 3600;
    }));
    if (!$state[$key]) unset($state[$key]);
}
$ip = hash('sha256', __DIR__ . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
$recent = array_filter($state[$ip] ?? [], static function ($time) use ($now) {
    return $time > $now - 600;
});
if (count($recent) >= 5 || count($state['_total'] ?? []) >= 100) {
    flock($handle, LOCK_UN);
    fclose($handle);
    header('Retry-After: 600');
    respond(429, false);
}
$state[$ip][] = $now;
$state['_total'][] = $now;
$encoded = json_encode($state);
rewind($handle);
$written = $encoded !== false && ftruncate($handle, 0) && fwrite($handle, $encoded) === strlen($encoded) && fflush($handle);
flock($handle, LOCK_UN);
fclose($handle);
if (!$written) respond(503, false);

$recipient = 'queries@mimshospitals.com';
$sender = 'queries@mimshospitals.com';
$subject = $type === 'contact' ? 'New Contact Enquiry' : 'New Appointment Request';
$lines[] = '';
$lines[] = 'Message:';
$lines[] = $message ?: 'No additional notes';
$headers = [
    'From: MIMS Website <' . $sender . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64'
];
if ($replyTo !== '') $headers[] = 'Reply-To: ' . $replyTo;
$body = chunk_split(base64_encode(implode("\n", $lines)));
// GoDaddy configures the local mail relay; no mailbox password is needed.
$accepted = function_exists('mail') && @mail($recipient, $subject, $body, implode("\r\n", $headers), '-f' . $sender);
if (!$accepted) error_log('MIMS form: local mail relay rejected submission.');
respond($accepted ? 200 : 503, $accepted);
