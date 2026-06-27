import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'FAQ',
  description: 'Common questions about Vintify — pricing, security, Vinted integration, and more.',
};

const FAQS = [
  {
    category: 'Getting started',
    questions: [
      {
        q: 'What is Vintify?',
        a: 'Vintify is accounting software and a growth bot for Vinted resellers. It tracks your profit margins, automates listings with AI, generates HMRC-ready tax reports, and manages your orders — all in one place.',
      },
      {
        q: 'How does Vintify connect to my Vinted account?',
        a: 'We use a secure Chrome Extension that links your logged-in Vinted session to Vintify. We never ask for or store your Vinted password. The extension reads your sales, listings, and messages so they sync automatically.',
      },
      {
        q: 'Do I need to be a certain size to use Vintify?',
        a: 'No. Vintify works for side-hustlers selling a few items a week and full-time resellers doing hundreds of items a month. Our Starter plan is designed for people just getting organised.',
      },
    ],
  },
  {
    category: 'Security & data',
    questions: [
      {
        q: 'Is my data safe?',
        a: 'Yes. Your Vinted password is never asked for or stored. The Chrome Extension uses your active browser session. All data is encrypted in transit and at rest. We are UK-based and GDPR compliant.',
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
        q: 'Is there a free trial?',
        a: 'Yes. Every plan comes with a 14-day free trial. No credit card required to start. You can explore every feature before deciding.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. Cancel from your billing settings at any time. You keep access until the end of your current billing period.',
      },
      {
        q: 'Do prices include VAT?',
        a: 'No, prices are shown excluding VAT. VAT is added at checkout for UK customers.',
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

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col pt-20 lg:pt-24">
      <section className="border-b border-ink-100 py-20 lg:py-28">
        <div className="container-max container-px">
          <p className="section-label mb-6">FAQ</p>
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Frequently asked questions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-600">
            Can't find what you're looking for? <Link href="/contact" className="text-ink-900 underline underline-offset-4 hover:no-underline">Get in touch</Link>.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow container-px">
          <div className="space-y-16">
            {FAQS.map((group, gIdx) => (
              <div key={gIdx}>
                <p className="section-label mb-8">{group.category}</p>
                <div className="space-y-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200">
                  {group.questions.map((faq, fIdx) => (
                    <details key={fIdx} className="group bg-white">
                      <summary className="flex cursor-pointer items-center justify-between p-6 font-display text-lg font-medium text-ink-900 list-none">
                        {faq.q}
                        <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-400 transition-transform group-open:rotate-45">
                          <span className="text-lg leading-none">+</span>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-ink-600 leading-relaxed">
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

      <section className="bg-ink-900 py-24">
        <div className="container-max container-px text-center">
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Still have questions?
          </h2>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-accent">
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
