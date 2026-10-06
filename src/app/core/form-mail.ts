/** Same-origin PHP endpoint, deployed alongside the static website on cPanel. */
export async function sendForm(type: 'contact' | 'appointment', fields: Record<string, string>): Promise<void> {
  const response = await fetch('/api/send-form.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ type, ...fields }),
    signal: AbortSignal.timeout(30000)
  }).catch(() => {
    throw new Error('We could not confirm your submission. Please call the hospital before trying again.');
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.ok !== true) {
    throw new Error(response.status === 429
      ? 'Too many requests. Please wait a few minutes or call the hospital.'
      : 'We could not confirm your submission. Please call the hospital before trying again.');
  }
}
