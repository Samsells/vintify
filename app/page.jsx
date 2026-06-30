import Link from 'next/link';
import { ArrowRight, Landmark, TrendingUp, Bot, ShieldCheck, Clock, CheckCircle2, Lock, AlertCircle, Check, X } from 'lucide-react';
import { FeatureJourney } from '@/components/FeatureJourney';
import HeroDashboard from '@/components/HeroDashboard';
import WaitlistForm from '@/components/WaitlistForm';
import FAQAccordion from '@/components/FAQAccordion';
import { SIGNUP_URL } from '@/lib/site';

export const metadata = {
  title: 'Vintify — Vinted Accounting, Growth Bot & AI Listings for Resellers',
  description: 'The all-in-one platform for serious Vinted sellers. Track true profit per sale, automate listings with AI, drop prices automatically, generate HMRC-ready tax reports. 55+ features, £25/mo. Try free for 7 days.',
  alternates: {
    canonical: 'https://vintify.co.uk',
  },
  openGraph: {
    title: 'Vintify — Vinted Accounting, Growth Bot & AI Listings for Resellers',
    description: 'Track true profit per sale, automate listings with AI, drop prices automatically, and generate HMRC-ready tax reports — 55+ features, one subscription.',
    url: 'https://vintify.co.uk',
  },
  twitter: {
    title: 'Vintify — Vinted Accounting, Growth Bot & AI Listings for Resellers',
    description: 'Track true profit per sale, automate listings with AI, drop prices automatically, and generate HMRC-ready tax reports — 55+ features, one subscription.',
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col pt-12 sm:pt-16 lg:pt-20">

      {/* ═══════════════════════════════════════════════════
          ANNOUNCEMENT BAR — £5 off first month
      ═══════════════════════════════════════════════════ */}
      <div className="bg-brand-400 text-white/95">
        <div className="container-max container-px flex items-center justify-center gap-2 py-1 text-center">
          <span className="text-[13px] font-medium tracking-wide">Get £5 off your first month</span>
          <span className="text-[13px] opacity-70">— use code</span>
          <span className="rounded-md bg-white/15 px-2 py-0.5 text-[13px] font-semibold tracking-wider backdrop-blur-sm">VINTIFY5</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO — Centered headline + dashboard mockup
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-6 pb-12 sm:pt-12 sm:pb-20">
        {/* Background grid + glow */}
        <div className="absolute inset-0 bg-grid-faint opacity-60" />
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-glow" />
        <div className="absolute left-1/2 bottom-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-brand-400/5 blur-glow" />

        <div className="container-max container-px relative z-10 text-center">
          {/* Badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5"
            style={{ animation: 'fadeUp 0.5s ease-out forwards' }}
          >
            <span className="flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">New: AI listing writer is live</span>
          </div>

          {/* Headline */}
          <h1
            className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
            style={{ animation: 'fadeUp 0.5s ease-out forwards', animationDelay: '80ms', opacity: 0 }}
          >
            The all-in-one platform<br /> built for{' '}
            <span className="relative inline-block pb-4">
              <span className="text-gradient">serious Vinted sellers</span>
              <svg
                className="absolute bottom-0 left-0 h-3 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 10C40 9 80 7 120 5C160 3 200 4 240 2C270 1 285 2 298 1"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-brand-400"
                />
              </svg>
            </span>
          </h1>

          {/* Sub copy */}
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-ink-500 sm:text-xl"
            style={{ animation: 'fadeUp 0.5s ease-out forwards', animationDelay: '160ms', opacity: 0 }}
          >
            AI writes your listings, automations revive stale stock, and true profit is tracked on every sale.{' '}
            <span className="font-semibold text-ink-900">HMRC-ready reports, 55+ features, one subscription.</span>
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            style={{ animation: 'fadeUp 0.5s ease-out forwards', animationDelay: '240ms', opacity: 0 }}
          >
            <a href={SIGNUP_URL} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/40 active:scale-95 sm:w-auto">
              Start free trial
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/features" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-8 py-4 text-base font-bold text-ink-900 transition-all hover:bg-ink-100 hover:border-ink-300 sm:w-auto">
              Explore features
            </Link>
          </div>

          {/* Trust signals — risk reversal row */}
          <div
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5"
            style={{ animation: 'fadeUp 0.5s ease-out forwards', animationDelay: '320ms', opacity: 0 }}
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-ink-600">
              <CheckCircle2 size={14} className="text-emerald-500" />
              No credit card required
            </div>
            <div className="hidden h-3.5 w-px bg-ink-200 sm:block" />
            <div className="flex items-center gap-1.5 text-xs font-semibold text-ink-600">
              <ShieldCheck size={14} className="text-emerald-500" />
              Cancel anytime
            </div>
            <div className="hidden h-3.5 w-px bg-ink-200 sm:block" />
            <div className="flex items-center gap-1.5 text-xs font-semibold text-ink-600">
              <Clock size={14} className="text-brand-500" />
              Set up in under 5 minutes
            </div>
          </div>

          {/* ── Product dashboard mockup (scroll parallax) ── */}
          <div className="relative mx-auto mt-8 max-w-5xl">
            <div className="absolute inset-x-8 -top-4 -bottom-4 rounded-[40px] bg-brand-500/8 blur-3xl" />
            <div className="relative">
              <HeroDashboard />
            </div>
          </div>

          {/* ── Founding members avatar stack ── */}
          <div
            className="mx-auto mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            style={{ animation: 'fadeUp 0.5s ease-out forwards', animationDelay: '400ms', opacity: 0 }}
          >
            <div className="flex -space-x-2">
              {['SJ', 'MT', 'RK', 'AL', 'JD'].map((initials, i) => (
                <div key={i} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-500/10 font-display text-[10px] font-bold text-brand-600 shadow-sm" style={{ zIndex: 10 - i }}>
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-500">
              Join as a <span className="font-semibold text-brand-600">founding member</span> — lock in lifetime pricing before we launch publicly
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3-IN-1 BREAKDOWN — Cost comparison
      ═══════════════════════════════════════════════════ */}
      <section className="border-y border-ink-200/30 bg-white py-16 sm:py-24">
        <div className="container-max container-px">
          <div className="flex flex-col items-center gap-10 sm:gap-16 lg:flex-row">
            {/* Left — Copy */}
            <div className="lg:w-1/2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">Why Vintify</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Stop paying for<br />
                <span className="text-gradient">three separate tools.</span>
              </h2>
              <p className="mt-6 text-lg text-ink-500">
                Most resellers juggle spreadsheets for profit, a bot for price drops, and a separate app for listings. Vintify brings it all into one place — for less than most bots alone.
              </p>

              {/* Feature cards — clickable to feature pages */}
              <div className="mt-8 space-y-3">
                <Link href="/features/accounting" className="group flex items-start gap-4 rounded-2xl border border-ink-200/60 bg-white p-4 no-underline transition-all hover:border-brand-300 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 transition-colors group-hover:bg-brand-500">
                    <Landmark size={20} className="text-brand-600 transition-colors group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-ink-900">Profit tracking & tax reports</h4>
                    <p className="mt-0.5 text-sm text-ink-500">See exactly what you make on every sale. HMRC-ready reports in one click — no more spreadsheets.</p>
                  </div>
                  <ArrowRight size={16} className="mt-1 shrink-0 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
                </Link>
                <Link href="/features/growth-bot" className="group flex items-start gap-4 rounded-2xl border border-brand-200 bg-brand-500/5 p-4 no-underline transition-all hover:border-brand-400 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 transition-colors group-hover:bg-brand-500">
                    <TrendingUp size={20} className="text-brand-600 transition-colors group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-ink-900">Automatic price drops & favourite pings</h4>
                    <p className="mt-0.5 text-sm text-ink-500">The bot watches stale listings, drops prices at the right time, and pings buyers who favourited.</p>
                  </div>
                  <ArrowRight size={16} className="mt-1 shrink-0 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
                </Link>
                <Link href="/features/automation" className="group flex items-start gap-4 rounded-2xl border border-ink-200/60 bg-white p-4 no-underline transition-all hover:border-brand-300 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 transition-colors group-hover:bg-brand-500">
                    <Bot size={20} className="text-brand-600 transition-colors group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-ink-900">AI listings & bulk automation</h4>
                    <p className="mt-0.5 text-sm text-ink-500">Write listings from a photo. Relist in bulk. Auto-message buyers. All the repetitive stuff, handled.</p>
                  </div>
                  <ArrowRight size={16} className="mt-1 shrink-0 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
                </Link>
              </div>
            </div>

            {/* Right — Cost comparison card */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl border border-ink-200 bg-ink-100 p-8 md:p-10">
                <div className="absolute -top-3 right-8 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                  Save £540/year
                </div>
                <h3 className="mb-6 text-center font-display text-lg font-semibold text-ink-900">What you're probably paying now</h3>
                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-white/60 p-4">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink-200/60">
                        <Landmark size={14} className="text-ink-400" />
                      </span>
                      <span className="text-sm text-ink-600">Accounting app</span>
                    </div>
                    <span className="font-mono text-sm font-semibold text-ink-900">£25/mo</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/60 p-4">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink-200/60">
                        <TrendingUp size={14} className="text-ink-400" />
                      </span>
                      <span className="text-sm text-ink-600">Growth bot</span>
                    </div>
                    <span className="font-mono text-sm font-semibold text-ink-900">£30/mo</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/60 p-4">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink-200/60">
                        <Bot size={14} className="text-ink-400" />
                      </span>
                      <span className="text-sm text-ink-600">Listing automation</span>
                    </div>
                    <span className="font-mono text-sm font-semibold text-ink-900">£15/mo</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-ink-200 px-4 pt-3">
                    <span className="font-bold text-ink-900">Total</span>
                    <span className="font-mono font-bold text-accent-600">£70/mo</span>
                  </div>
                </div>
                <div className="group flex items-center justify-between rounded-2xl bg-brand-500 p-6 shadow-xl shadow-brand-500/20 transition-transform hover:scale-[1.02]">
                  <div className="text-white">
                    <div className="text-sm font-bold uppercase tracking-wider opacity-80">Vintify</div>
                    <div className="text-xl font-bold">Replaces all three</div>
                  </div>
                  <div className="text-right text-white">
                    <div className="text-4xl font-black italic tracking-tighter">£25</div>
                    <div className="text-xs opacity-80">per month</div>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-ink-400">or £69 lifetime · one-time payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS — 3 step setup
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink-50 py-16 sm:py-24 lg:py-32">
        <div className="container-max container-px">
          <div className="mb-10 text-center sm:mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Up and running in<br />
              <span className="text-gradient">under 5 minutes.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-500">
              No spreadsheets to import. No passwords to share. Just install, connect, and go.
            </p>
          </div>

          <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-stretch md:gap-0">
            {/* Step 1 — Install */}
            <div className="group relative flex flex-1 flex-col items-center rounded-2xl border border-ink-200 bg-white p-6 text-center transition-all hover:border-brand-300 hover:shadow-xl sm:p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1.5 font-mono text-sm font-bold text-white shadow-lg">
                Step 1
              </div>
              <div className="relative mb-6 mt-4 w-full">
                <div className="overflow-hidden rounded-xl border border-ink-200 bg-ink-50 shadow-md">
                  <div className="flex items-center gap-1.5 border-b border-ink-200 bg-white px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-accent-400" />
                    <div className="h-2 w-2 rounded-full bg-amber-400" />
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg">
                      <Bot size={28} className="text-white" />
                    </div>
                    <div className="h-2 w-24 rounded-full bg-ink-200" />
                    <div className="rounded-lg bg-brand-500 px-4 py-2 text-xs font-bold text-white shadow-md">
                      Add to Chrome
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900">Install the Chrome Extension</h3>
              <p className="mt-2 text-sm text-ink-500">
                One click to add to your browser. Works with your existing Vinted session — no passwords needed.
              </p>
            </div>

            {/* Arrow 1 → 2 */}
            <div className="flex shrink-0 items-center justify-center py-1 md:px-2">
              <ArrowRight size={28} className="rotate-90 text-brand-400 md:rotate-0" strokeWidth={2.5} />
            </div>

            {/* Step 2 — Connect */}
            <div className="group relative flex flex-1 flex-col items-center rounded-2xl border border-ink-200 bg-white p-6 text-center transition-all hover:border-brand-300 hover:shadow-xl sm:p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1.5 font-mono text-sm font-bold text-white shadow-lg">
                Step 2
              </div>
              <div className="relative mb-6 mt-4 w-full">
                <div className="overflow-hidden rounded-xl border border-ink-200 bg-ink-50 shadow-md">
                  <div className="flex items-center gap-1.5 border-b border-ink-200 bg-white px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-accent-400" />
                    <div className="h-2 w-2 rounded-full bg-amber-400" />
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                        <Bot size={20} className="text-brand-600" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="h-1.5 w-6 rounded-full bg-brand-500" />
                        <div className="h-1.5 w-6 rounded-full bg-brand-500/40" />
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                        <CheckCircle2 size={20} className="text-emerald-600" />
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-semibold text-emerald-600">Connected</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900">Connect your Vinted account</h3>
              <p className="mt-2 text-sm text-ink-500">
                Open Vinted in your browser and the extension links it automatically. Your listings, sales, and messages start syncing instantly.
              </p>
            </div>

            {/* Arrow 2 → 3 */}
            <div className="flex shrink-0 items-center justify-center py-1 md:px-2">
              <ArrowRight size={28} className="rotate-90 text-brand-400 md:rotate-0" strokeWidth={2.5} />
            </div>

            {/* Step 3 — Let Vintify do the rest */}
            <div className="group relative flex flex-1 flex-col items-center rounded-2xl border-2 border-brand-500 bg-white p-6 text-center shadow-xl shadow-brand-500/10 transition-all hover:shadow-2xl sm:p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1.5 font-mono text-sm font-bold text-white shadow-lg">
                Step 3
              </div>
              <div className="relative mb-6 mt-4 w-full">
                <div className="overflow-hidden rounded-xl border border-ink-200 bg-ink-50 shadow-md">
                  <div className="flex items-center gap-1.5 border-b border-ink-200 bg-white px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-accent-400" />
                    <div className="h-2 w-2 rounded-full bg-amber-400" />
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="p-4">
                    <div className="mb-3 grid grid-cols-2 gap-2">
                      <div className="rounded-lg bg-white p-2.5">
                        <p className="font-mono text-[8px] text-ink-400">PROFIT</p>
                        <p className="font-display text-sm font-bold text-brand-600">£842</p>
                      </div>
                      <div className="rounded-lg bg-white p-2.5">
                        <p className="font-mono text-[8px] text-ink-400">SOLD</p>
                        <p className="font-display text-sm font-bold text-ink-900">37</p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5">
                        <div className="h-4 w-4 rounded bg-brand-500/20" />
                        <div className="h-1.5 flex-1 rounded-full bg-ink-100" />
                        <div className="h-1.5 w-8 rounded-full bg-emerald-400" />
                      </div>
                      <div className="flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5">
                        <div className="h-4 w-4 rounded bg-brand-500/20" />
                        <div className="h-1.5 flex-1 rounded-full bg-ink-100" />
                        <div className="h-1.5 w-6 rounded-full bg-amber-400" />
                      </div>
                      <div className="flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5">
                        <div className="h-4 w-4 rounded bg-brand-500/20" />
                        <div className="h-1.5 flex-1 rounded-full bg-ink-100" />
                        <div className="h-1.5 w-10 rounded-full bg-brand-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900">Let Vintify do the rest</h3>
              <p className="mt-2 text-sm text-ink-500">
                Vintify runs quietly in the background — tracking profits, managing listings, and keeping everything organised. You focus on sourcing, we handle the admin.
              </p>
            </div>
          </div>

          {/* Arrow connector for desktop */}
          <div className="mt-8 hidden items-center justify-center gap-3 md:flex">
            <a href={SIGNUP_URL} className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/30 active:scale-95">
              Start 7-day free trial
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURE JOURNEY — Every tool in the box
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-max container-px">
          <div className="mb-10 text-center sm:mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">Every tool in the box</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              From bought to sold,<br />
              <span className="text-gradient">Vintify handles the lot.</span>
            </h2>
          </div>
          <FeatureJourney />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRICING — Simple, two options
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-max container-px">
          <div className="mb-10 text-center sm:mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">Pricing</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Simple pricing.<br />
              <span className="text-gradient">No surprises.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-500">
              One price, everything included. No tiers, no upsells, no hidden fees.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4 sm:gap-6 md:grid-cols-2">
            {/* Monthly — highlighted, brought forward */}
            <div className="relative flex flex-col rounded-2xl border-2 border-brand-500 bg-white p-6 shadow-xl shadow-brand-500/15 sm:p-10 md:scale-105 md:-translate-y-2">
              <div className="absolute -top-3 left-10 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                Most popular
              </div>
              <h3 className="font-display text-xl font-bold text-ink-900">Monthly</h3>
              <p className="mt-2 text-sm text-ink-500">Everything included, cancel anytime</p>
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold tracking-tight text-brand-600">£20</span>
                  <span className="text-base font-medium text-ink-400">first month</span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink-500">then £25/mo</p>
              </div>
              <p className="mt-2 text-xs font-semibold text-emerald-600">£5 off with code VINTIFY5</p>

              <ul className="mt-8 space-y-4 flex-1">
                {['All 55+ features', 'Unlimited listings tracked', 'AI listing writer', 'HMRC-ready tax reports', 'Growth bot & price drops', 'Chrome extension'].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/10">
                      <Check size={12} className="text-brand-600" />
                    </span>
                    <span className="text-sm font-medium text-ink-800">{f}</span>
                  </li>
                ))}
              </ul>

              <a href={SIGNUP_URL} className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-500/40 active:scale-95">
                Start 7-day free trial
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Lifetime */}
            <div className="relative flex flex-col rounded-2xl border-2 border-emerald-500 bg-white p-6 shadow-xl shadow-emerald-500/15 sm:p-10">
              <div className="absolute -top-3 left-10 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                Best value
              </div>
              <h3 className="font-display text-xl font-bold text-ink-900">Lifetime</h3>
              <p className="mt-2 text-sm text-ink-500">Pay once, use it forever</p>
              <div className="mt-6 flex items-baseline">
                <span className="font-display text-5xl font-bold tracking-tight text-ink-900">£69</span>
                <span className="ml-2 text-base font-medium text-ink-400">one-time payment</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-600">Limited founding member price before public launch</p>

              <ul className="mt-8 space-y-4 flex-1">
                {['Everything in Monthly', 'No recurring payments, ever', 'All future updates included', 'Priority support', 'Locked in price for life', '7-day free trial first'].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                      <Check size={12} className="text-emerald-600" />
                    </span>
                    <span className="text-sm font-medium text-ink-800">{f}</span>
                  </li>
                ))}
              </ul>

              <a href={SIGNUP_URL} className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/40 active:scale-95">
                Lock in lifetime access
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <p className="mt-8 text-center font-mono text-xs text-ink-400">
            All features included · 7-day free trial · No credit card required
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ — Common objections answered
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink-100 py-16 sm:py-24 lg:py-32">
        <div className="container-max container-px">
          <div className="mb-8 text-center sm:mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Still deciding?<br />
              <span className="text-gradient">Here's what sellers ask us most.</span>
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOUNDING MEMBER OFFER — urgency + scarcity
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink-100 py-16 sm:py-24">
        <div className="container-max container-px">
          <div className="mx-auto max-w-3xl">
            {/* Urgency banner */}
            <div className="mb-6 flex items-center justify-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2">
              <AlertCircle size={16} className="text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">Founding member pricing ends when we launch publicly</span>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-6 text-center shadow-xl sm:p-12 sm:rounded-[40px] sm:p-16">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-500/5 blur-glow transition-all group-hover:scale-125"></div>
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-500/5 blur-glow transition-all group-hover:scale-125"></div>

              {/* Lock icon */}
              <div className="relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10">
                <Lock size={24} className="text-brand-600" />
              </div>

              <h2 className="relative z-10 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Lock in <span className="text-gradient">£69 lifetime</span> before launch
              </h2>
              <p className="relative z-10 mx-auto mt-6 max-w-xl text-lg text-ink-500">
                Once Vintify goes public, lifetime access disappears and new members will pay £25/month. Right now, you can pay once and use it forever.
              </p>

              {/* Loss aversion framing */}
              <div className="relative z-10 mx-auto mt-8 max-w-md space-y-2 text-left">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  <span className="text-sm text-ink-700">£69 once — no recurring payments</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  <span className="text-sm text-ink-700">All 55+ features included — no upsells</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  <span className="text-sm text-ink-700">7-day free trial when we launch</span>
                </div>
              </div>

              <p className="relative z-10 mt-6 text-center text-sm text-ink-500">
                Drop your email — we'll let you know when it's ready.
              </p>

              <div className="relative z-10 mt-4">
                <WaitlistForm />
              </div>

              <p className="relative z-10 mt-6 text-xs font-semibold uppercase tracking-widest text-ink-400">
                No spam · unsubscribe anytime · 7-day free trial when we launch
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

