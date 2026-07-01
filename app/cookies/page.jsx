import { LegalShell } from '@/components/LegalShell';

export const metadata = {
  title: 'Cookie Policy',
  description:
    'Vintify uses essential cookies only — no advertising trackers, no third-party analytics cookies on this site. Here is exactly what we set and why.',
  alternates: {
    canonical: 'https://vintify.co.uk/cookies',
  },
};

const SECTIONS = [
  {
    id: 'summary',
    title: 'The short version',
    paragraphs: [
      'This marketing site sets no advertising or third-party analytics cookies, which is why you do not see a cookie banner here. The Vintify web app sets essential cookies only — the ones required to keep you logged in and keep your session secure.',
    ],
  },
  {
    id: 'what-are-cookies',
    title: 'What cookies are',
    paragraphs: [
      'Cookies are small text files a website stores in your browser to remember things between pages or visits — like the fact that you are logged in. Similar technologies (localStorage, session storage) are covered by this policy too.',
    ],
  },
  {
    id: 'cookies-we-set',
    title: 'Cookies we set',
    paragraphs: ['In the Vintify web app (app domain):'],
    list: [
      'Session / authentication cookie — keeps you signed in. Essential; expires when your session ends or you log out.',
      'Security tokens (CSRF) — protect forms and API calls from cross-site abuse. Essential.',
      'Preference storage — remembers UI choices such as dashboard layout. Stored locally in your browser; never used for tracking.',
    ],
  },
  {
    id: 'third-parties',
    title: 'Third parties',
    paragraphs: [
      'Stripe sets cookies during checkout to process payments securely and prevent fraud — see Stripe’s cookie policy for details. We do not run Google Analytics, Meta pixels, ad-network tags, or any cross-site tracking on vintify.co.uk.',
    ],
  },
  {
    id: 'managing',
    title: 'Managing cookies',
    paragraphs: [
      'You can clear or block cookies in your browser settings at any time. Blocking essential cookies will prevent the web app from keeping you logged in, but this marketing site will work fine without any cookies at all.',
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalShell
      label="Legal"
      title="Cookie policy"
      intro="No ad trackers, no third-party analytics cookies, no cookie banner theatre. Essential cookies only — here's the full list."
      lastUpdated="1 July 2026"
      sections={SECTIONS}
    />
  );
}
