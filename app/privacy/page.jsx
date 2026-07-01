import { LegalShell } from '@/components/LegalShell';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Vintify collects, uses, and protects your data. We never store your Vinted password, we use essential cookies only, and you can export or delete your data at any time.',
  alternates: {
    canonical: 'https://vintify.co.uk/privacy',
  },
};

const SECTIONS = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    paragraphs: [
      'Vintify ("we", "us") provides accounting, growth automation, and listing tools for Vinted resellers, available at vintify.co.uk and through our Chrome extension. We are based in the United Kingdom and act as the data controller for the personal data described in this policy.',
      'This policy explains what we collect, why we collect it, how long we keep it, and the rights you have over it under UK GDPR and the Data Protection Act 2018.',
    ],
  },
  {
    id: 'data-we-collect',
    title: 'Data we collect',
    paragraphs: ['We collect the minimum we need to run the service:'],
    list: [
      'Account data — your email address and password (stored as a salted hash) when you create a Vintify account.',
      'Reselling data — listings, sales, fees, and shipping information synced from your Vinted account via the Chrome extension, plus purchase costs and expenses you enter yourself.',
      'Waitlist and contact data — your email address if you join the waitlist, and your name, email, and message if you use the contact form.',
      'Billing data — handled by Stripe, our payment processor. We never see or store your full card details; we hold only your subscription status and Stripe customer reference.',
      'Technical data — basic server logs (IP address, timestamp, requested page) kept for security and debugging.',
    ],
  },
  {
    id: 'what-we-never-collect',
    title: 'What we never collect',
    paragraphs: [
      'We never ask for, receive, or store your Vinted password. The Chrome extension works with your existing logged-in Vinted session in your own browser. We do not read your private messages beyond what is needed for features you explicitly enable, and we do not sell or rent personal data to anyone.',
    ],
  },
  {
    id: 'how-we-use-data',
    title: 'How we use your data',
    paragraphs: ['We process your data on the following lawful bases:'],
    list: [
      'To provide the service (contract) — syncing your sales, calculating profit, generating tax reports.',
      'To take payment and manage subscriptions (contract) — via Stripe.',
      'To respond to messages and support requests (legitimate interest).',
      'To send waitlist or product updates you asked for (consent) — every email includes an unsubscribe link.',
      'To keep the service secure and prevent abuse (legitimate interest) — rate limiting, log analysis.',
    ],
  },
  {
    id: 'sharing',
    title: 'Who we share data with',
    paragraphs: [
      'We share data only with the processors we need to operate: our hosting provider (Railway), our payment processor (Stripe), and our database provider. Each processes data under a data processing agreement. We do not use third-party advertising or analytics trackers on this site.',
      'Where a processor stores data outside the UK, transfers are protected by UK-approved safeguards such as the International Data Transfer Agreement or adequacy regulations.',
    ],
  },
  {
    id: 'retention',
    title: 'How long we keep data',
    paragraphs: [
      'Account and reselling data is kept while your account is active and deleted within 30 days of account deletion. Waitlist emails are deleted when you unsubscribe or after launch communications end. Contact messages are kept for up to 12 months. Billing records are kept for 6 years as required by UK tax law. Server logs rotate within 90 days.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    paragraphs: ['Under UK GDPR you can:'],
    list: [
      'Access a copy of the personal data we hold about you.',
      'Export your reselling data at any time from Settings (CSV).',
      'Correct inaccurate data.',
      'Delete your account and data ("right to erasure").',
      'Object to or restrict certain processing.',
      'Withdraw consent for marketing emails at any time.',
      'Complain to the Information Commissioner’s Office (ico.org.uk) if you believe we have mishandled your data.',
    ],
  },
  {
    id: 'security',
    title: 'How we protect data',
    paragraphs: [
      'All traffic is encrypted in transit with TLS, and data is encrypted at rest by our database provider. Passwords are stored as salted hashes, access to production systems is restricted, and payments are handled entirely by Stripe (PCI DSS Level 1). See our Security page for the full picture.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    paragraphs: [
      'If we make material changes, we will update the date at the top of this page and, where the change affects how we use your data, email registered users before it takes effect.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      label="Legal"
      title="Privacy policy"
      intro="The short version: we collect the minimum we need, we never see your Vinted password, we don't sell data, and you can export or delete everything at any time."
      lastUpdated="1 July 2026"
      sections={SECTIONS}
    />
  );
}
