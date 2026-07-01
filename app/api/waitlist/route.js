import crypto from 'node:crypto';
import { query, initWaitlistTable } from '@/lib/db';
import { isEmailEnabled, sendConfirmationEmail } from '@/lib/email';

// Build an absolute origin (https://getvintify.com) from the incoming request so
// confirmation links work on any domain/preview without hardcoding.
function originFrom(request) {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env) return env.replace(/\/$/, '');
  const h = request.headers;
  const proto = h.get('x-forwarded-proto') || 'https';
  const host = h.get('x-forwarded-host') || h.get('host');
  return `${proto}://${host}`;
}

export async function POST(request) {
  try {
    await initWaitlistTable();

    const { email } = await request.json();
    if (!email || !email.trim()) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalized)) {
      return Response.json({ error: 'Please enter a valid email' }, { status: 400 });
    }

    const emailOn = isEmailEnabled();
    const token = crypto.randomBytes(32).toString('hex');

    // When email is configured we do double opt-in: store as 'pending' with a
    // fresh token and send a confirmation link. When it's NOT configured we
    // degrade to single opt-in ('confirmed' immediately) so the list still works
    // before Resend is wired up.
    const initialStatus = emailOn ? 'pending' : 'confirmed';

    // Upsert. If they already exist:
    //  - already confirmed  → tell them, don't re-send anything
    //  - still pending      → refresh the token and re-send the confirmation
    const existing = await query('SELECT status FROM waitlist WHERE email = $1', [normalized]);

    if (existing.rows.length > 0) {
      const status = existing.rows[0].status;
      if (status === 'confirmed') {
        return Response.json({ message: "You're already on the list — see you at launch!" }, { status: 200 });
      }
      // Pending: rotate token so old links can't be farmed, then re-send.
      await query('UPDATE waitlist SET token = $1 WHERE email = $2', [token, normalized]);
    } else {
      await query(
        'INSERT INTO waitlist (email, status, token, confirmed_at) VALUES ($1, $2, $3, $4)',
        [normalized, initialStatus, emailOn ? token : null, emailOn ? null : new Date()]
      );
    }

    if (emailOn) {
      const confirmUrl = `${originFrom(request)}/api/waitlist/confirm?token=${token}`;
      try {
        await sendConfirmationEmail(normalized, confirmUrl);
      } catch (mailErr) {
        console.error('Waitlist confirmation email failed:', mailErr);
        return Response.json(
          { error: "We couldn't send your confirmation email. Please try again in a moment." },
          { status: 502 }
        );
      }
      return Response.json(
        { message: 'Check your inbox — click the link to confirm your spot.', pending: true },
        { status: 200 }
      );
    }

    return Response.json({ message: "You're on the list! We'll be in touch soon." }, { status: 200 });
  } catch (err) {
    console.error('Waitlist API error:', err);
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
