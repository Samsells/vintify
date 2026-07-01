'use client';

import { useState } from 'react';
import { Plus, Shield, Lock, RefreshCw, Chrome, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/site';

const FAQS = [
  {
    q: 'Is this against Vinted\'s rules?',
    a: 'Vintify works through your logged-in browser session using the Chrome Extension. It does not store your Vinted password. Automation features are designed to mirror actions a seller could perform manually, such as updating prices, managing listings, and organising sales. You should always use Vintify responsibly and follow Vinted\'s rules.',
  },
  {
    q: 'Do you need my Vinted password?',
    a: 'Never. The Chrome Extension links to your active Vinted session in your browser. We don\'t ask for, store, or see your password. You can revoke access at any time by removing the extension.',
  },
  {
    q: 'How is this different from a spreadsheet?',
    a: 'Spreadsheets need manual entry. Vintify syncs your sales automatically, calculates profit per item (after Vinted fees, postage, and costs), generates HMRC-ready reports, and throws in a growth bot and AI listing writer on top. It\'s everything you do manually, automated.',
  },
  {
    q: 'What if I\'m just starting out?',
    a: 'Vintify works whether you sell 5 items a week or 500. The profit tracking and AI listings are useful from day one. The growth bot becomes more valuable as your inventory grows.',
  },
  {
    q: 'What happens after the 7-day free trial?',
    a: 'You automatically move onto your chosen plan (monthly or lifetime) unless you cancel. No charges during the trial — we\'ll remind you before it ends. Cancel anytime from your billing settings with one click.',
  },
  {
    q: 'What\'s included in the lifetime plan?',
    a: 'Everything. One payment of £69, no recurring charges ever. All current features, all future updates, priority support. You pay once and use Vintify for as long as it exists.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'Just the Chrome Extension, which connects Vintify to your Vinted account securely. It takes under a minute to install and works with your existing browser session. No passwords required.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel from your billing settings with one click. No phone calls, no retention emails, no hassle. You keep access until the end of your billing period.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. All data is encrypted in transit and at rest. We\'re UK-based and privacy-first. You can export or delete all your data at any time from Settings.',
  },
  {
    q: 'Is Vintify part of Resell Reserve?',
    a: 'The full Vintify web app is included in Resell Reserve\'s Ultimate plan, alongside their sourcing monitor, buying automation, guides and community. If you\'re just getting into reselling, that\'s the easiest way to get everything in one place. You can also use Vintify on its own from £25/mo — same tools either way.',
  },
];

const TRUST_SIGNALS = [
  { icon: Lock, label: 'No Vinted password needed' },
  { icon: RefreshCw, label: 'Cancel anytime' },
  { icon: Chrome, label: 'Browser-based connection' },
  { icon: Shield, label: '7-day free trial' },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left — Trust column */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h3 className="font-display text-2xl font-bold tracking-tight text-ink-900">
            Built to be safe, simple and seller-friendly.
          </h3>
          <p className="mt-4 text-ink-500 leading-relaxed">
            Vintify connects to your Vinted account through a secure Chrome Extension. No passwords, no bots that spam, no risky API access. Just the tools you need to run your reselling business properly.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {TRUST_SIGNALS.map((t) => (
              <div key={t.label} className="flex items-center gap-2.5 rounded-xl border border-ink-200 bg-white px-4 py-3">
                <t.icon size={18} className="shrink-0 text-brand-600" />
                <span className="text-xs font-semibold text-ink-800">{t.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-brand-200 bg-brand-500/5 p-5">
            <p className="text-sm font-medium text-ink-700">
              Still have questions?
            </p>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <Link href="/faq" className="font-semibold text-brand-600 hover:text-brand-700">
                See all FAQs →
              </Link>
              <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        {/* Right — FAQ accordion */}
        <div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl border transition-all ${
                  open === i
                    ? 'border-brand-300 bg-white shadow-md'
                    : 'border-ink-200 bg-white hover:border-ink-300'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className={`text-sm font-bold sm:text-base ${open === i ? 'text-brand-600' : 'text-ink-900'}`}>
                    {faq.q}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 transition-all duration-200 ${
                      open === i ? 'rotate-45 text-brand-600' : 'text-ink-400'
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-ink-600">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink-200 bg-white px-8 py-6 sm:flex-row">
        <div>
          <p className="font-display text-lg font-bold text-ink-900">Ready to try Vintify?</p>
          <p className="text-sm text-ink-500">7-day free trial. Cancel anytime.</p>
        </div>
        <a href={SIGNUP_URL} className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-500/40 active:scale-95">
          Start free trial
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
