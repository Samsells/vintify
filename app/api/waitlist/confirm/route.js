import { query, initWaitlistTable } from '@/lib/db';
import { sendWelcomeEmail, addToAudience } from '@/lib/email';

function siteOrigin(request) {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env) return env.replace(/\/$/, '');
  const h = request.headers;
  const proto = h.get('x-forwarded-proto') || 'https';
  const host = h.get('x-forwarded-host') || h.get('host');
  return `${proto}://${host}`;
}

// GET /api/waitlist/confirm?token=… — the link in the confirmation email.
// Marks the row confirmed, fires the welcome email, and redirects to a friendly
// page. Idempotent: clicking twice just lands on the confirmed page.
export async function GET(request) {
  const origin = siteOrigin(request);
  const done = (state) => Response.redirect(`${origin}/waitlist/confirmed?state=${state}`, 302);

  try {
    await initWaitlistTable();
    const token = new URL(request.url).searchParams.get('token');
    if (!token) return done('invalid');

    const found = await query('SELECT email, status FROM waitlist WHERE token = $1', [token]);
    if (found.rows.length === 0) return done('invalid');

    const { email, status } = found.rows[0];
    if (status === 'confirmed') return done('already');

    // Confirm and burn the token so the link can't be reused/farmed.
    await query(
      "UPDATE waitlist SET status = 'confirmed', confirmed_at = CURRENT_TIMESTAMP, token = NULL WHERE token = $1",
      [token]
    );

    // Add to the Resend Audience (for launch Broadcasts) and send the welcome
    // email. Both are best-effort — a failure here must not undo the
    // confirmation the user just completed.
    try {
      await addToAudience(email);
    } catch (audErr) {
      console.error('Audience sync failed (confirmation still saved):', audErr);
    }
    try {
      await sendWelcomeEmail(email);
    } catch (mailErr) {
      console.error('Welcome email failed (confirmation still saved):', mailErr);
    }

    return done('success');
  } catch (err) {
    console.error('Waitlist confirm error:', err);
    return done('error');
  }
}
