import { query, initWaitlistTable } from '@/lib/db';

export async function POST(request) {
  try {
    // Ensure table exists
    await initWaitlistTable();

    const { email } = await request.json();

    // Validate email
    if (!email || !email.trim()) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalized)) {
      return Response.json({ error: 'Please enter a valid email' }, { status: 400 });
    }

    // Insert — ignore duplicates
    try {
      await query(
        'INSERT INTO waitlist (email) VALUES ($1) ON CONFLICT (email) DO NOTHING',
        [normalized]
      );
    } catch (err) {
      if (err.code === '23505') {
        // duplicate — already on the list
        return Response.json({ message: "You're already on the waitlist!" }, { status: 200 });
      }
      throw err;
    }

    return Response.json({ message: "You're on the list! We'll be in touch soon." }, { status: 200 });
  } catch (err) {
    console.error('Waitlist API error:', err);
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
