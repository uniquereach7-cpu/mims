# GoDaddy form deployment

Both forms POST JSON to /api/send-form.php. Recipient and sender are fixed to
queries@mimshospitals.com. Contact enquiries set the validated visitor email as
Reply-To. Appointment requests currently collect a phone number, not an email.

1. Build the website and upload the contents of dist/mims/browser to the domain's
   document root (usually public_html). Include api/send-form.php and .htaccess.
   Enable “Show Hidden Files” in File Manager so .htaccess is visible.
   Back up the existing site and .htaccess first; preserve any cPanel-generated
   PHP handler directives when merging the new routing rules.
   Do not upload the dist folder itself or dist/mims/server.
   Install a valid SSL certificate before deploying the HTTPS redirect.
2. Use PHP 8.x on GoDaddy cPanel. Angular's development server and static-only
   hosts do not execute PHP. Do not expose PHP source as a downloadable file.
3. Keep Titan MX records. If cPanel treats this domain's email as local, set its
   Email Routing to Remote Mail Exchanger, as appropriate for the existing MX.
4. Verify GoDaddy hosting relay permission and SPF configuration with GoDaddy.
   Maintain ONE SPF record that authorizes the actual senders; do not overwrite
   Titan DNS with guessed records.
5. Check that PHP can write to its system temporary directory (rate counters).
   The handler allows 5 requests per IP per 10 minutes and 100 globally per hour.
   These are application limits, separate from GoDaddy's hosting relay limits.
6. After deployment, submit one synthetic contact enquiry and appointment request.
   Confirm both arrive in Titan (including Spam), all fields appear, and replying
   to a contact enquiry addresses the visitor. Test invalid input, rate limits,
   and error feedback. Do not use real medical information for these tests.

HTTP success means the local mail relay accepted the message, NOT guaranteed
delivery. An appointment request is not a confirmed booking. No submissions are
stored by this application; email copies live in the recipient mailbox.
Honeypot and rate limiting reduce spam but do not eliminate determined abuse.
Monitor the mailbox and add a server-verified challenge if abuse occurs.

Official relay guidance:
https://www.godaddy.com/help/send-form-mail-using-an-smtp-relay-server-953
