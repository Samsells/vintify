import Link from 'next/link';
import { ArrowRight, Landmark, TrendingUp, Bot, ShieldCheck, Clock, CheckCircle2, Lock, AlertCircle } from 'lucide-react';
import { FeatureJourney } from '@/components/FeatureJourney';
import HeroDashboard from '@/components/HeroDashboard';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col pt-16 lg:pt-20">

      {/* ═══════════════════════════════════════════════════
          HERO — Centered headline + dashboard mockup
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-20 pb-28 sm:pt-28 sm:pb-36">
        {/* Background grid + glow */}
        <div className="absolute inset-0 bg-grid-faint opacity-60" />
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-glow" />
        <div className="absolute left-1/2 bottom-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-brand-400/5 blur-glow" />

        <div className="container-max container-px relative z-10 text-center">
          {/* Badge */}
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5"
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
            The all-in-one platform<br className="hidden sm:block" /> built for{' '}
            <span className="text-gradient">serious Vinted sellers</span>
          </h1>

          {/* Sub copy */}
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-ink-500 sm:text-xl"
            style={{ animation: 'fadeUp 0.5s ease-out forwards', animationDelay: '160ms', opacity: 0 }}
          >
            AI writes your listings. A bot drops prices and pings buyers. True profit on every sale. HMRC-ready in one click.{' '}
            <span className="font-semibold text-ink-900">55+ features, one subscription.</span>
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            style={{ animation: 'fadeUp 0.5s ease-out forwards', animationDelay: '240ms', opacity: 0 }}
          >
            <Link href="/pricing" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/40 active:scale-95 sm:w-auto">
              Start 7-day free trial
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
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
          <div className="relative mx-auto mt-14 max-w-5xl">
            <HeroDashboard />
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
      <section className="border-y border-ink-200/30 bg-white py-24">
        <div className="container-max container-px">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            {/* Left — Copy */}
            <div className="lg:w-1/2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">Why Vintify</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Stop paying for<br />
                <span className="text-gradient">three separate tools.</span>
              </h2>
              <p className="mt-6 text-lg text-ink-500">
                Most resellers juggle a spreadsheet for profit, a bot for price drops, and a separate app for listings. Vintify does all of it in one place — and costs less than the bot alone.
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
                    <h4 className="font-bold text-ink-900">Automatic price drops & bumps</h4>
                    <p className="mt-0.5 text-sm text-ink-500">The bot watches your stale listings, drops prices at the right time, and pings buyers who favourited.</p>
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
                      <span className="text-sm text-ink-600">Price-drop bot</span>
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
                    <div className="text-xl font-bold">Everything, one app</div>
                  </div>
                  <div className="text-right text-white">
                    <div className="text-4xl font-black italic tracking-tighter">£25</div>
                    <div className="text-xs opacity-80">per month</div>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-ink-400">or £69 lifetime · cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS — From bought to sold
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-max container-px">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              From bought to sold,<br />
              <span className="text-gradient">Vintify handles the lot.</span>
            </h2>
          </div>
          <FeatureJourney />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOUNDING MEMBER OFFER — urgency + scarcity
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink-100 py-24">
        <div className="container-max container-px">
          <div className="mx-auto max-w-3xl">
            {/* Urgency banner */}
            <div className="mb-6 flex items-center justify-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2">
              <AlertCircle size={16} className="text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">Founding member pricing ends when we launch publicly</span>
            </div>

            <div className="group relative overflow-hidden rounded-[40px] border border-ink-200 bg-white p-12 text-center shadow-xl sm:p-16">
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
                Once Vintify goes public, lifetime pricing disappears and it's £25/month like everything else. Right now you can pay once and use it forever.
              </p>

              {/* Loss aversion framing */}
              <div className="relative z-10 mx-auto mt-8 max-w-md space-y-2 text-left">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  <span className="text-sm text-ink-700">£69 once — no recurring payments, ever</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  <span className="text-sm text-ink-700">All 55+ features included, no upsells</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  <span className="text-sm text-ink-700">7-day free trial — see if it fits before you pay</span>
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

