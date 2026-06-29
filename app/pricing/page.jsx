import Link from 'next/link';
import { Check, ArrowRight, AlertCircle, Lock, Shield, Zap, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'Pricing — £25/mo or £69 Lifetime | Vintify',
  description: 'Simple pricing for Vinted resellers. £25/month (or £69 lifetime one-time payment) gets you all 55+ features — profit tracking, AI listings, growth bot, HMRC tax reports, and more. No tiers, no upsells. 7-day free trial.',
  alternates: {
    canonical: 'https://vintify.co.uk/pricing',
  },
  openGraph: {
    title: 'Vintify Pricing — £25/mo or £69 Lifetime',
    description: 'All 55+ features, one price. £25/month or £69 lifetime. No tiers, no upsells. 7-day free trial.',
    url: 'https://vintify.co.uk/pricing',
  },
};

const MONTHLY_FEATURES = [
  'All 55+ features',
  'Unlimited listings tracked',
  'AI listing writer',
  'HMRC-ready tax reports',
  'Growth bot & price drops',
  'Smart Offers automation',
  'Label Hub — print all labels',
  'Chrome extension',
];

const LIFETIME_FEATURES = [
  'Everything in Monthly',
  'No recurring payments, ever',
  'All future updates included',
  'Priority support',
  'Locked in price for life',
  '7-day free trial first',
];

const TRUST_BADGES = [
  { icon: Shield, label: 'No password stored' },
  { icon: RefreshCw, label: 'Cancel anytime' },
  { icon: Zap, label: 'Set up in 5 minutes' },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col pt-12 sm:pt-16 lg:pt-20">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-white pt-8 pb-6 sm:pt-10 sm:pb-8">
        <div className="absolute inset-0 bg-grid-faint opacity-40" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-glow" />

        <div className="container-max container-px relative z-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">Pricing</p>
          <h1 className="mx-auto mt-2 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            One price. Everything included.<br />
            <span className="text-gradient">No tiers, no upsells.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-ink-500">
            55+ features, unlimited listings, AI listing writer, growth bot, HMRC-ready reports — all in one subscription.
          </p>
        </div>
      </section>

      {/* ── Pricing cards ── */}
      <section className="bg-white py-6 lg:py-10">
        <div className="container-max container-px">
          {/* Urgency banner */}
          <div className="mx-auto mb-10 flex w-fit items-center justify-center gap-2.5 rounded-full border border-amber-200 bg-amber-50 px-5 py-2.5">
            <AlertCircle size={18} className="text-amber-600" />
            <span className="text-sm font-bold text-amber-700">Lifetime access is only available before public launch</span>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 md:grid-cols-2">
            {/* Monthly */}
            <div className="relative flex flex-col rounded-2xl border-2 border-brand-500 bg-white p-6 shadow-2xl shadow-brand-500/20 sm:p-10 md:scale-105 md:-translate-y-2 md:p-14">
              <div className="absolute -top-4 left-14 rounded-full bg-brand-500 px-5 py-2 text-sm font-bold text-white shadow-lg">
                Most popular
              </div>
              <h3 className="font-display text-2xl font-bold text-ink-900">Monthly</h3>
              <p className="mt-2 text-sm text-ink-500">Everything included, cancel anytime</p>
              <div className="mt-8">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-6xl font-bold tracking-tight text-brand-600">£20</span>
                  <span className="text-lg font-medium text-ink-400">first month</span>
                </div>
                <p className="mt-2 text-base font-medium text-ink-500">then £25/mo</p>
              </div>
              <p className="mt-3 text-sm font-semibold text-emerald-600">£5 off with code VINTIFY5</p>

              <ul className="mt-8 space-y-4 flex-1">
                {MONTHLY_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/10">
                      <Check size={14} className="text-brand-600" />
                    </span>
                    <span className="text-base font-medium text-ink-800">{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/pricing" className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-500/40 active:scale-95">
                Start 7-day free trial
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Lifetime */}
            <div className="relative flex flex-col rounded-2xl border-2 border-emerald-500 bg-white p-6 shadow-2xl shadow-emerald-500/20 sm:p-10 md:p-14">
              <div className="absolute -top-4 left-14 rounded-full bg-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg">
                Best value
              </div>
              <h3 className="font-display text-2xl font-bold text-ink-900">Lifetime</h3>
              <p className="mt-2 text-sm text-ink-500">Pay once, use it forever</p>
              <div className="mt-8 flex items-baseline">
                <span className="font-display text-6xl font-bold tracking-tight text-ink-900">£69</span>
                <span className="ml-3 text-lg font-medium text-ink-400">one-time payment</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-amber-600">Limited founding member price before public launch</p>

              <ul className="mt-8 space-y-4 flex-1">
                {LIFETIME_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                      <Check size={14} className="text-emerald-600" />
                    </span>
                    <span className="text-base font-medium text-ink-800">{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/pricing" className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/40 active:scale-95">
                Lock in lifetime access
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-ink-600">
            <span className="flex items-center gap-2"><Shield size={16} className="text-brand-600" /> No password stored</span>
            <span className="text-ink-200">·</span>
            <span className="flex items-center gap-2"><RefreshCw size={16} className="text-brand-600" /> Cancel anytime</span>
            <span className="text-ink-200">·</span>
            <span className="flex items-center gap-2"><Zap size={16} className="text-brand-600" /> Set up in 5 minutes</span>
            <span className="text-ink-200">·</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-brand-600" /> 7-day free trial</span>
          </div>
        </div>
      </section>

      {/* ── What's included breakdown ── */}
      <section className="border-t border-ink-100 bg-ink-50 py-12 sm:py-16 lg:py-20">
        <div className="container-max container-px">
          <div className="mb-8 text-center sm:mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">Everything included</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              What you get for £25/mo
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-500">
              Both plans include every feature. No tiers, no locked features, no upsells.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 sm:grid-cols-2">
            {[
              { category: 'Accounting', items: ['True profit per item', 'HMRC-ready tax reports', 'Expense tracking', 'Goal tracking', 'Sell-through rate'] },
              { category: 'Growth Bot', items: ['AI listing writer', 'Auto price-drop bot', 'Smart Offers', 'AI reply suggestions', 'Auto repost'] },
              { category: 'Sourcing', items: ['Purchase tracking', 'Bulk lot splitting', 'Smart Matches', 'Auto-match engine', 'CSV export'] },
              { category: 'Fulfilment', items: ['Label Hub', 'Shipping lifecycle', 'Carrier auto-detection', 'Dispatch deadlines', 'Tracking numbers'] },
            ].map((group) => (
              <div key={group.category} className="rounded-2xl border border-ink-200 bg-white p-5 sm:p-8 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5">
                <h3 className="mb-5 font-display text-lg font-bold text-ink-900">{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/10">
                        <Check size={14} className="text-brand-600" />
                      </span>
                      <span className="text-sm font-medium text-ink-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founding member CTA ── */}
      <section className="bg-ink-900 py-16 sm:py-24">
        <div className="container-max container-px text-center">
          <div className="mx-auto mb-6 flex w-fit items-center justify-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2">
            <Lock size={16} className="text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">Founding member pricing ends when we launch publicly</span>
          </div>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Still thinking? Lock in lifetime access before launch.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-ink-400">
            Once Vintify goes public, lifetime access disappears and new members will pay £25/month. Right now, you can pay once and use it forever.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/pricing" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/40 active:scale-95">
              Join founding waitlist
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/features" className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-700 bg-ink-800 px-8 py-4 text-base font-bold text-white transition-all hover:bg-ink-700 hover:border-ink-600">
              Explore features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
