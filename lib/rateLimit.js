// Small in-memory rate limiter for the public form endpoints. Per-instance
// (resets on deploy, not shared across replicas) — fine for a marketing site
// where the goal is stopping trivial scripted abuse, not precise quotas.
const buckets = new Map();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_BUCKETS = 5000; // hard memory cap

export function rateLimit(request, { limit = 5, windowMs = WINDOW_MS, key = '' } = {}) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';
  const bucketKey = `${key}:${ip}`;
  const now = Date.now();

  // Opportunistic cleanup so the map can't grow unbounded.
  if (buckets.size > MAX_BUCKETS) {
    for (const [k, v] of buckets) {
      if (now - v.start > windowMs) buckets.delete(k);
    }
  }

  const bucket = buckets.get(bucketKey);
  if (!bucket || now - bucket.start > windowMs) {
    buckets.set(bucketKey, { start: now, count: 1 });
    return { allowed: true };
  }

  bucket.count += 1;
  return { allowed: bucket.count <= limit };
}
