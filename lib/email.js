// Thin wrapper around Resend's REST API. No SDK dependency — we just POST to
// their /emails endpoint. Everything here is INERT until RESEND_API_KEY is set:
// isEmailEnabled() returns false and callers fall back gracefully, so the
// waitlist keeps working (single opt-in) before email is configured and
// upgrades to double opt-in the moment the key lands.

const RESEND_API_KEY = process.env.RESEND_API_KEY;

// A Resend Audience id. When set, confirmed waitlisters are added to this
// audience so you can send a launch email to everyone at once via Resend
// Broadcasts. Inert (skipped) when unset.
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

// The verified sending identity. Defaults to hello@getvintify.com but can be
// overridden per-environment. Must be on a domain verified in Resend.
const FROM = process.env.WAITLIST_FROM_EMAIL || 'Vintify <hello@getvintify.com>';
const REPLY_TO = process.env.WAITLIST_REPLY_TO || 'hello@getvintify.com';

export function isEmailEnabled() {
  return Boolean(RESEND_API_KEY);
}

export function isAudienceEnabled() {
  return Boolean(RESEND_API_KEY && RESEND_AUDIENCE_ID);
}

// Add a confirmed email to the Resend Audience so it's included in launch
// Broadcasts. Best-effort and idempotent: Resend treats a repeat add of the
// same email in an audience as a no-op/update, so calling this twice is safe.
// Returns { skipped: true } when audience sync isn't configured.
export async function addToAudience(email) {
  if (!isAudienceEnabled()) return { skipped: true };
  const res = await fetch(`https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Resend audience add failed (${res.status}): ${detail}`);
  }
  return res.json();
}

async function send({ to, subject, html, text }) {
  if (!RESEND_API_KEY) {
    console.warn('[email] RESEND_API_KEY not set — skipping send to', to);
    return { skipped: true };
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: FROM, reply_to: REPLY_TO, to, subject, html, text }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Resend send failed (${res.status}): ${detail}`);
  }
  return res.json();
}

// A minimal, on-brand HTML shell. Inline styles only — email clients strip
// <style> and external CSS.
function shell({ heading, body, button }) {
  const btn = button
    ? `<tr><td style="padding:8px 0 4px;">
         <a href="${button.href}" style="display:inline-block;background:#6d28d9;color:#ffffff;text-decoration:none;font-weight:700;font-size:16px;padding:14px 28px;border-radius:12px;">${button.label}</a>
       </td></tr>`
    : '';
  return `<!doctype html><html><body style="margin:0;background:#f6f5fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f5fb;padding:32px 16px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border-radius:16px;padding:36px 32px;box-shadow:0 1px 3px rgba(17,12,46,0.08);">
          <tr><td style="font-size:20px;font-weight:800;color:#4c1d95;padding-bottom:16px;">Vintify</td></tr>
          <tr><td style="font-size:22px;font-weight:800;color:#1a1330;padding-bottom:12px;line-height:1.3;">${heading}</td></tr>
          <tr><td style="font-size:15px;color:#4b4560;line-height:1.6;padding-bottom:20px;">${body}</td></tr>
          ${btn}
          <tr><td style="font-size:12px;color:#9b95ac;line-height:1.6;padding-top:28px;border-top:1px solid #eeecf5;margin-top:8px;">You're receiving this because you asked to join the Vintify waitlist. If this wasn't you, just ignore this email — no account is created and you won't hear from us again.</td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`;
}

// "Confirm your spot" — the double opt-in email. Clicking the link verifies the
// address is real and theirs.
export function sendConfirmationEmail(to, confirmUrl) {
  return send({
    to,
    subject: 'Confirm your spot on the Vintify waitlist',
    text: `You're almost on the list. Confirm your spot: ${confirmUrl}\n\nIf this wasn't you, ignore this email.`,
    html: shell({
      heading: 'Confirm your spot',
      body: "You're one click away from the Vintify founding waitlist. Tap the button below to confirm your email — that's it.",
      button: { href: confirmUrl, label: 'Confirm my spot →' },
    }),
  });
}

// The welcome email — sent right after they confirm.
export function sendWelcomeEmail(to) {
  return send({
    to,
    subject: "You're in — welcome to the Vintify founding waitlist 🎉",
    text: "You're on the Vintify founding waitlist. We'll email you the moment early access opens, plus founding-member perks. Reply to this email any time — a real person reads it.",
    html: shell({
      heading: "You're in 🎉",
      body: "You're officially on the Vintify <strong>founding waitlist</strong>. We'll email you the moment early access opens — and founding members get first dibs plus a launch perk we're keeping under wraps for now.<br/><br/>Got a question or a feature you'd love? Just reply to this email — a real person reads every one.",
    }),
  });
}
