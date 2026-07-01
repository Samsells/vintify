import { LegalShell } from '@/components/LegalShell';

export const metadata = {
  title: 'Terms of Service',
  description:
    'The terms that govern your use of Vintify — subscriptions, the 7-day free trial, the lifetime plan, acceptable use, and your responsibilities as a Vinted seller.',
  alternates: {
    canonical: 'https://vintify.co.uk/terms',
  },
};

const SECTIONS = [
  {
    id: 'the-service',
    title: 'The service',
    paragraphs: [
      'Vintify provides accounting, analytics, listing, and growth automation tools for people who sell on Vinted, delivered through vintify.co.uk, the Vintify web app, and the Vintify Chrome extension. By creating an account you agree to these terms.',
      'Vintify is an independent product. We are not affiliated with, endorsed by, or partnered with Vinted. "Vinted" is a trademark of Vinted Limited.',
    ],
  },
  {
    id: 'your-account',
    title: 'Your account',
    paragraphs: [
      'You must be at least 18 years old and able to enter a contract. You are responsible for keeping your login credentials secure and for all activity under your account. Tell us immediately at hello@vintify.co.uk if you believe your account has been compromised.',
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    paragraphs: ['You agree not to:'],
    list: [
      'Use Vintify in a way that breaches Vinted’s own terms of service — you remain responsible for how you use automation on your Vinted account.',
      'Use the service for anything unlawful, including selling counterfeit or prohibited items.',
      'Attempt to probe, overload, or reverse-engineer our systems, or access another user’s data.',
      'Resell, share, or sublicense your account access.',
    ],
    // Keep this honest: automation on marketplaces always carries some
    // platform risk, and we say so out loud rather than burying it.
  },
  {
    id: 'billing',
    title: 'Plans, trials, and billing',
    paragraphs: [
      'The monthly plan renews automatically each month until cancelled. The lifetime plan is a one-time payment giving access to the service, including future updates, for as long as Vintify operates. Both start with a 7-day free trial — you will not be charged during the trial, and we remind you before it ends.',
      'You can cancel from billing settings at any time. Cancellation stops future renewals; you keep access until the end of the paid period. Payments are processed by Stripe. Prices are shown in GBP and include VAT where applicable.',
    ],
  },
  {
    id: 'refunds',
    title: 'Refunds',
    paragraphs: [
      'The free trial exists so you can evaluate Vintify before paying. Beyond that, if something is broken and we cannot fix it within a reasonable time, contact us within 14 days of a charge and we will put it right — including a refund where appropriate. Statutory rights under UK consumer law are unaffected.',
    ],
  },
  {
    id: 'no-advice',
    title: 'Not financial or tax advice',
    paragraphs: [
      'Vintify calculates figures — profit, fees, and HMRC-ready summaries — from the data available to it. It does not provide financial, legal, or tax advice, and reports should be checked before submission. You are responsible for the accuracy of your tax filings; when in doubt, consult an accountant.',
    ],
  },
  {
    id: 'platform-risk',
    title: 'Third-party platform risk',
    paragraphs: [
      'Vintify depends on Vinted continuing to operate in a way our tools can work with. Vinted may change its site, features, or policies at any time, which can temporarily or permanently affect parts of Vintify. We work to adapt quickly, but we cannot guarantee uninterrupted compatibility, and we are not responsible for actions Vinted takes against accounts that breach Vinted’s terms.',
    ],
  },
  {
    id: 'liability',
    title: 'Liability',
    paragraphs: [
      'We provide Vintify with reasonable skill and care, but the service is provided "as is" and we do not guarantee specific sales, profit, or outcomes. To the extent permitted by law, our total liability for any claim is limited to the amount you paid us in the 12 months before the claim arose. Nothing in these terms limits liability for fraud, or for death or personal injury caused by negligence.',
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    paragraphs: [
      'You can delete your account at any time from Settings. We may suspend or terminate accounts that breach these terms, with notice where reasonable. On termination we delete your data in line with our Privacy Policy.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of England and Wales, and disputes are subject to the exclusive jurisdiction of the courts of England and Wales. If we update these terms materially, we will notify registered users by email before the changes take effect.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalShell
      label="Legal"
      title="Terms of service"
      intro="Plain-English terms: what Vintify does, what you're responsible for, how billing and the free trial work, and where our liability starts and ends."
      lastUpdated="1 July 2026"
      sections={SECTIONS}
    />
  );
}
