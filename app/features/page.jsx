import Link from 'next/link';
import { ArrowRight, Check, Zap, Shield, TrendingUp } from 'lucide-react';
import { FeaturesExplorer, BeforeAfterComparison } from '@/components/FeaturesExplorer';
import { SIGNUP_URL } from '@/lib/site';

export const metadata = {
  title: 'Features — 55+ Tools for Vinted Resellers',
  description: 'Explore every Vintify feature: profit tracking, AI listing writer, auto price drops, HMRC-ready tax reports, bulk editing, Label Hub, Smart Matches, analytics, and more. 55+ features, one subscription.',
  keywords: ['vintify features', 'vinted reseller tools', 'vinted seller software', 'vinted listing automation', 'vinted profit tracking', 'vinted business tools', 'vinted growth tools', 'all in one vinted tool'],
  alternates: {
    canonical: 'https://vintify.co.uk/features',
  },
  openGraph: {
    title: 'Vintify Features — 55+ Tools for Vinted Resellers',
    description: 'Profit tracking, AI listings, auto price drops, HMRC tax reports, bulk editing, analytics, and more. Explore every feature.',
    url: 'https://vintify.co.uk/features',
  },
  twitter: {
    title: 'Vintify Features — 55+ Tools for Vinted Resellers',
    description: 'Profit tracking, AI listings, auto price drops, HMRC tax reports, bulk editing, analytics, and more.',
    card: 'summary_large_image',
  },
};

const STATS = [
  { value: '55+', label: 'Features included' },
  { value: '7', label: 'Categories covered' },
  { value: '£25/mo', label: 'Everything, one price' },
  { value: '7-day', label: 'Free trial' },
];

export default function FeaturesPage() {
  return (
    <div className="flex min-h-dvh flex-col pt-12 sm:pt-16 lg:pt-20">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-white pt-8 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16">
        <div className="absolute inset-0 bg-grid-faint opacity-40" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-glow" />

        <div className="container-max container-px relative z-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">Features</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            55+ features. One platform.<br />
            <span className="text-gradient">Built for Vinted sellers.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-500">
            Accounting, growth automation, sourcing, selling, fulfilment, and analytics — everything you need to run a profitable Vinted business, in one place.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href={SIGNUP_URL} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/40 active:scale-95 sm:w-auto">
              Start free trial
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-8 py-4 text-base font-bold text-ink-900 transition-all hover:bg-ink-100 hover:border-ink-300 sm:w-auto">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b border-ink-100 bg-ink-50 py-8">
        <div className="container-max container-px">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-extrabold text-brand-600 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-ink-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive features explorer ── */}
      <section className="bg-white py-12 sm:py-20 lg:py-28">
        <div className="container-max container-px">
          <div className="mb-8 text-center sm:mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">Explore by category</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Click a category. See it in action.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-500">
              Every category has a live product preview. Switch between them to see exactly what Vintify handles.
            </p>
          </div>
          <FeaturesExplorer />
        </div>
      </section>

      {/* ── Before / After comparison ── */}
      <section className="border-y border-ink-100 bg-ink-50 py-12 sm:py-20 lg:py-28">
        <div className="container-max container-px">
          <div className="mb-8 text-center sm:mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">The difference</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Before Vintify vs <span className="text-gradient">after</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-500">
              Same reselling business. Completely different experience.
            </p>
          </div>
          <BeforeAfterComparison />
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-max container-px">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Shield, title: 'No passwords stored', desc: 'Chrome Extension uses your active browser session. Privacy-first setup.' },
              { icon: Zap, title: 'Set up in 5 minutes', desc: 'Install the extension, connect Vinted, and your data syncs automatically.' },
              { icon: TrendingUp, title: 'Built to scale', desc: 'From 5 items a week to 500. Vintify grows with your business.' },
            ].map((t) => (
              <div key={t.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10">
                  <t.icon size={24} className="text-brand-600" />
                </div>
                <h3 className="font-display text-base font-bold text-ink-900">{t.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink-900 py-16 sm:py-24">
        <div className="container-max container-px text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Try every feature free for 7 days.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-ink-400">
            7-day free trial. Cancel anytime. Set up in under 5 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/pricing" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/40 active:scale-95">
              See pricing
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-700 bg-ink-800 px-8 py-4 text-base font-bold text-white transition-all hover:bg-ink-700 hover:border-ink-600">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
