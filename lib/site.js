// Central place for the marketing site's outbound links into the CRM web app.
//
// The CRM (Vintify-CRM) is a separate React SPA that owns authentication via
// Supabase and is served on its own origin. The marketing site never handles
// auth itself — it just sends people to the app's existing /login and /signup
// screens. Point NEXT_PUBLIC_APP_URL at wherever the CRM is deployed; it
// defaults to the live Railway deployment. When the app moves to a custom
// domain (e.g. app.vintify.co.uk), set NEXT_PUBLIC_APP_URL and this default
// is bypassed.
export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL || 'https://vintify-crm-production.up.railway.app'
).replace(/\/$/, '');

// Build a URL into the CRM app for a given path.
const appUrl = (path = '') => `${APP_URL}${path.startsWith('/') ? path : `/${path}`}`;

// Existing CRM auth routes (see Vintify-CRM client/src/App.jsx).
export const LOGIN_URL = appUrl('/login');
export const SIGNUP_URL = appUrl('/signup');
export const DASHBOARD_URL = appUrl('/crm/dashboard');

// Resell Reserve — the Vinted reselling community + toolkit that bundles the
// full Vintify web app into its Ultimate plan. The marketing site links out to
// their pricing page so people getting into reselling can grab Vintify as part
// of the wider ecosystem. Override with NEXT_PUBLIC_RESELL_RESERVE_URL if the
// domain ever changes.
export const RESELL_RESERVE_URL = (
  process.env.NEXT_PUBLIC_RESELL_RESERVE_URL || 'https://resellreserve.co.uk'
).replace(/\/$/, '');

export const RESELL_RESERVE_PRICING_URL = `${RESELL_RESERVE_URL}/pricing`;
