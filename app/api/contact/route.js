import { query, initTables } from '@/lib/db';
import { rateLimit } from '@/lib/rateLimit';

// Receives the contact form. Previously the form only flipped local state and
// silently discarded the message — now submissions are persisted.
export async function POST(request) {
  try {
    const { allowed } = rateLimit(request, { key: 'contact', limit: 3 });
    if (!allowed) {
      return Response.json({ error: 'Too many messages sent. Please try again later.' }, { status: 429 });
    }

    await initTables();

    const { name, email, message, company } = await request.json();

    // Honeypot field — real users never see or fill it.
    if (company) {
      return Response.json({ message: 'Message sent' }, { status: 200 });
    }

    const cleanName = (name || '').trim();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanMessage = (message || '').trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return Response.json({ error: 'Name, email, and message are all required.' }, { status: 400 });
    }
    if (cleanName.length > 120) {
      return Response.json({ error: 'Name is too long.' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (cleanEmail.length > 254 || !emailRegex.test(cleanEmail)) {
      return Response.json({ error: 'Please enter a valid email.' }, { status: 400 });
    }
    if (cleanMessage.length > 5000) {
      return Response.json({ error: 'Message is too long (5,000 characters max).' }, { status: 400 });
    }

    await query(
      'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
      [cleanName, cleanEmail, cleanMessage]
    );

    return Response.json({ message: 'Message sent' }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return Response.json({ error: 'Something went wrong. Please try again or email hello@vintify.co.uk.' }, { status: 500 });
  }
}
