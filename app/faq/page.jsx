import Link from 'next/link';
import { ArrowRight, Shield, Lock, RefreshCw, Chrome } from 'lucide-react';

export const metadata = {
  title: 'FAQ — Common Questions About Vintify',
  description: 'Answers to common questions about Vintify: how it connects to Vinted, pricing (£25/mo or £69 lifetime), security, free trial, tax reports, and more.',
  alternates: {
    canonical: 'https://vintify.co.uk/faq',
  },
  openGraph: {
    title: 'Vintify FAQ — Common Questions Answered',
    description: 'How Vintify connects to Vinted, pricing, security, free trial, tax reports, and more.',
    url: 'https://vintify.co.uk/faq',
  },
};

const FAQS = [
  {
    category: 'Getting started',
    questions: [
      {
        q: 'What is Vintify?',
        a: 'Vintify is an all-in-one platform for Vinted resellers. It tracks your true profit per item, automates listings with AI, generates HMRC-ready tax reports, manages orders, and includes a growth bot that drops prices and handles offers — all in one place.',
      },
      {
        q: 'How does Vintify connect to my Vinted account?',
        a: 'Vintify connects through your logged-in browser session using a Chrome Extension. You don\'t give us your Vinted password, and Vintify is designed to help with actions sellers already do manually, like managing listings, tracking sales, and organising orders.',
      },
      {
        q: 'Is Vintify only for big sellers?',
        a: 'No. Vintify works whether you sell 5 items a week or 500. The profit tracking and AI listings are useful from day one. The growth bot becomes more valuable as your inventory grows.',
      },
      {
        q: 'Do I need to install anything?',
        a: 'Just the Chrome Extension, which connects Vintify to your Vinted account securely. It takes under a minute to install and works with your existing browser session. No passwords required.',
      },
      {
        q: 'What happens after the 7-day free trial?',
        a: 'You automatically move onto your chosen plan (monthly or lifetime) unless you cancel. No charges during the trial — we\'ll remind you before it ends. Cancel anytime from your billing settings with one click.',
      },
    ],
  },
  {
    category: 'Security & data',
    questions: [
      {
        q: 'Is this against Vinted\'s rules?',
        a: 'Vintify is built to support normal seller workflows, such as listing management, price updates, messages, and tracking. You should always use automation responsibly and follow Vinted\'s terms.',
      },
      {
        q: 'Is my data safe?',
        a: 'Yes. Your Vinted password is never asked for or stored. The Chrome Extension uses your active browser session. All data is encrypted in transit and at rest. We are UK-based and privacy-first.',
      },
      {
        q: 'Can Vintify access my Vinted account?',
        a: 'The extension can read your listings, sales, and messages to sync them into Vintify. It cannot post, buy, or make changes to your Vinted account without your explicit action (like clicking "List to Vinted" in the auto-lister).',
      },
      {
        q: 'Can I delete my data?',
        a: 'Yes. You can export or delete all your data at any time from Settings. Deleting your account permanently removes everything.',
      },
    ],
  },
  {
    category: 'Pricing & billing',
    questions: [
      {
        q: 'How much does Vintify cost?',
        a: '£25/month for everything, or £69 lifetime (one-time payment) while we\'re in founding member mode. Both plans include all 55+ features — no tiers, no upsells, no hidden fees.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Yes. You get a 7-day free trial with full access to every feature. You add your card to start, but you are not charged until the trial ends — and you can cancel anytime before then.',
      },
      {
        q: 'What\'s included in the lifetime plan?',
        a: 'Everything. One payment of £69, no recurring charges ever. All current features, all future updates, priority support. You pay once and use Vintify for as long as it exists.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. Cancel from your billing settings at any time. You keep access until the end of your current billing period. No phone calls, no retention emails, no hassle.',
      },
    ],
  },
  {
    category: 'Tax & accounting',
    questions: [
      {
        q: 'Does Vintify file my tax return for me?',
        a: 'No. Vintify generates HMRC-ready reports (CSV and PDF) with all the numbers you need for your self-assessment. You still need to file your return with HMRC, but Vintify makes it easy to fill in the figures.',
      },
      {
        q: 'What tax basis does Vintify support?',
        a: 'Both cash basis and traditional (accruals) basis. You can switch between them in the Tax settings.',
      },
      {
        q: 'Does Vintify track the £1,000 trading allowance?',
        a: 'Yes. Vintify shows your total revenue and profit, and highlights when you cross the £1,000 trading allowance threshold so you know when you need to register for self-assessment.',
      },
    ],
  },
];

const TRUST_SIGNALS = [
  { icon: Lock, label: 'No Vinted password needed' },
  { icon: Chrome, label: 'Browser-based connection' },
  { icon: RefreshCw, label: 'Cancel anytime' },
  { icon: Shield, label: '7-day free trial' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.flatMap((group) =>
    group.questions.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    <div className="flex min-h-screen flex-col pt-12 sm:pt-16 lg:pt-20">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-white pt-8 pb-6 sm:pt-10 sm:pb-8">
        <div className="absolute inset-0 bg-grid-faint opacity-40" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-glow" />

        <div className="container-max container-px relative z-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">FAQ</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Questions before you start?<br />
            <span className="text-gradient">We've answered the important ones.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-500">
            Can't find what you're looking for?{' '}
            <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Trust signals ── */}
      <section className="border-b border-ink-100 bg-ink-50 py-6">
        <div className="container-max container-px">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {TRUST_SIGNALS.map((t) => (
              <div key={t.label} className="flex items-center gap-2">
                <t.icon size={16} className="text-brand-600" />
                <span className="text-sm font-semibold text-ink-700">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ content ── */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-max container-px">
          <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12">
            {FAQS.map((group, gIdx) => (
              <div key={gIdx}>
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-brand-600">{group.category}</p>
                <div className="space-y-3">
                  {group.questions.map((faq, fIdx) => (
                    <details key={fIdx} className="group overflow-hidden rounded-xl border border-ink-200 bg-white transition-all open:border-brand-300 open:shadow-md">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-display text-base font-bold text-ink-900 list-none transition-colors group-open:text-brand-600">
                        {faq.q}
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-400 transition-all group-open:rotate-45 group-open:border-brand-300 group-open:text-brand-600">
                          <span className="text-lg leading-none">+</span>
                        </span>
                      </summary>
                      <div className="px-5 pb-5 text-sm leading-relaxed text-ink-600">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink-900 py-16 sm:py-24">
        <div className="container-max container-px text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-ink-400">
            We're happy to help. Get in touch and we'll get back to you within 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/40 active:scale-95">
              Contact us
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-700 bg-ink-800 px-8 py-4 text-base font-bold text-white transition-all hover:bg-ink-700 hover:border-ink-600">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
