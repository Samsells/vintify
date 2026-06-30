// Central place for the marketing site's outbound links into the CRM web app.
//
// The CRM (Vintify-CRM) is a separate React SPA that owns authentication via
// Supabase and is served on its own origin. The marketing site never handles
// auth itself — it just sends people to the app's existing /login and /signup
// screens. Point NEXT_PUBLIC_APP_URL at wherever the CRM is deployed (Railway
// URL, app.vintify.co.uk, etc.); it defaults to the app subdomain used across
// the site mockups.
export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL || 'https://app.vintify.co.uk'
).replace(/\/$/, '');

// Build a URL into the CRM app for a given path.
const appUrl = (path = '') => `${APP_URL}${path.startsWith('/') ? path : `/${path}`}`;

// Existing CRM auth routes (see Vintify-CRM client/src/App.jsx).
export const LOGIN_URL = appUrl('/login');
export const SIGNUP_URL = appUrl('/signup');
export const DASHBOARD_URL = appUrl('/crm/dashboard');
