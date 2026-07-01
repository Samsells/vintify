import { query, initWaitlistTable } from '@/lib/db';
import { isAudienceEnabled, addToAudience } from '@/lib/email';

// POST /api/waitlist/sync — one-time backfill that pushes every already-confirmed
// email into the Resend Audience. Use this once after you first set
// RESEND_AUDIENCE_ID so people who confirmed *before* audience-sync existed still
// end up on the launch Broadcast list. New confirmations sync automatically.
//
// Protected by a shared secret so it can't be triggered by the public. Set
// WAITLIST_ADMIN_SECRET in your env, then call with header  x-admin-secret: <secret>
// (or ?secret=<secret>). Idempotent — safe to run more than once.
export async function POST(request) {
  const adminSecret = process.env.WAITLIST_ADMIN_SECRET;
  if (!adminSecret) {
    return Response.json({ error: 'WAITLIST_ADMIN_SECRET not configured' }, { status: 503 });
  }
  const provided = request.headers.get('x-admin-secret')
    || new URL(request.url).searchParams.get('secret');
  if (provided !== adminSecret) {
    return Response.json({ error: 'unauthorized' }, { status: 401 });
  }
  if (!isAudienceEnabled()) {
    return Response.json({ error: 'Audience sync not configured (set RESEND_AUDIENCE_ID)' }, { status: 503 });
  }

  try {
    await initWaitlistTable();
    const { rows } = await query("SELECT email FROM waitlist WHERE status = 'confirmed' ORDER BY id");
    let added = 0;
    const failed = [];
    for (const { email } of rows) {
      try {
        await addToAudience(email);
        added += 1;
      } catch (err) {
        console.error('Sync failed for', email, err.message);
        failed.push(email);
      }
    }
    return Response.json({ total: rows.length, added, failed });
  } catch (err) {
    console.error('Waitlist sync error:', err);
    return Response.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
