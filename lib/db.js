import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

export async function query(text, params) {
  try {
    const res = await pool.query(text, params);
    return res;
  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  }
}

// Creates the waitlist table (if missing) and adds the double opt-in columns to
// any older table that predates them. Safe to run on every request — all
// statements are idempotent.
//
//   status        'pending'  → email captured, confirmation not clicked yet
//                 'confirmed'→ clicked the confirmation link (real, opted-in)
//   token         one-time secret used in the confirmation link
//   confirmed_at  when they confirmed
let schemaReady = false;
export async function initWaitlistTable() {
  if (schemaReady) return;
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    // Add double opt-in columns to pre-existing tables (no-op if present).
    await query(`ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS status VARCHAR(20) NOT NULL DEFAULT 'pending'`);
    await query(`ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS token VARCHAR(64)`);
    await query(`ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS confirmed_at TIMESTAMP`);
    await query(`CREATE INDEX IF NOT EXISTS waitlist_token_idx ON waitlist (token)`);
    schemaReady = true;
  } catch (err) {
    console.error('Failed to init waitlist table:', err);
  }
}
