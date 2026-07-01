import { Pool } from 'pg';

// Railway/Heroku-style managed Postgres commonly uses self-signed certs, so
// certificate verification stays off by default to avoid breaking existing
// deploys. Set DATABASE_SSL_STRICT=1 once the DB presents a verifiable cert.
const strictSsl = process.env.DATABASE_SSL_STRICT === '1';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? (strictSsl ? true : { rejectUnauthorized: false }) : false,
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

// Creates all tables (if missing) once per server process, instead of issuing
// DDL on every request. All statements are idempotent.
//
// waitlist double opt-in columns:
//   status        'pending'  → email captured, confirmation not clicked yet
//                 'confirmed'→ clicked the confirmation link (real, opted-in)
//   token         one-time secret used in the confirmation link
//   confirmed_at  when they confirmed
let initPromise = null;

export function initTables() {
  if (!initPromise) {
    initPromise = (async () => {
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
      await query(`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id SERIAL PRIMARY KEY,
          name VARCHAR(120) NOT NULL,
          email VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
    })().catch((err) => {
      // Allow a retry on the next request rather than caching the failure.
      initPromise = null;
      throw err;
    });
  }
  return initPromise;
}

// Back-compat alias for existing imports.
export const initWaitlistTable = initTables;
