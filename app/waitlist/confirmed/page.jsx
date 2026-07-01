import Link from 'next/link';
import { CheckCircle2, MailCheck, AlertCircle, ArrowRight, Home } from 'lucide-react';

export const metadata = {
  title: 'Waitlist confirmed — Vintify',
  description: "You're on the Vintify founding waitlist.",
  robots: { index: false, follow: true },
};

const STATES = {
  success: {
    icon: CheckCircle2,
    tone: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    title: "You're in! 🎉",
    body: "Your spot on the Vintify founding waitlist is confirmed. We've sent a welcome email — keep an eye out for early access and founding-member perks.",
  },
  already: {
    icon: MailCheck,
    tone: 'text-brand-600',
    bg: 'bg-brand-500/10',
    title: "You're already confirmed",
    body: "This email is already on the founding waitlist — nothing more to do. We'll be in touch the moment early access opens.",
  },
  invalid: {
    icon: AlertCircle,
    tone: 'text-accent-600',
    bg: 'bg-accent-500/10',
    title: 'This link has expired',
    body: "That confirmation link is invalid or has already been used. Head back and join the waitlist again to get a fresh link.",
  },
  error: {
    icon: AlertCircle,
    tone: 'text-accent-600',
    bg: 'bg-accent-500/10',
    title: 'Something went wrong',
    body: "We couldn't confirm your spot just now. Please try the link again in a moment, or re-join from the homepage.",
  },
};

export default async function WaitlistConfirmed({ searchParams }) {
  const params = await searchParams;
  const state = STATES[params?.state] || STATES.success;
  const Icon = state.icon;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-12 sm:pt-16 lg:pt-20">
      <div className="container-max container-px relative z-10 text-center">
        <div className="absolute inset-0 bg-grid-faint opacity-30" />
        <div className="relative z-10">
          <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${state.bg}`}>
            <Icon size={32} className={state.tone} />
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {state.title}
          </h1>

          <p className="mx-auto mt-3 max-w-md text-ink-500">{state.body}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-500/40 active:scale-95 sm:w-auto">
              <Home size={16} />
              Back to home
            </Link>
            <Link href="/features" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-6 py-3.5 text-sm font-bold text-ink-900 transition-all hover:bg-ink-100 hover:border-ink-300 sm:w-auto">
              Explore features
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
