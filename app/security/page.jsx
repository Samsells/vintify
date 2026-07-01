import Link from 'next/link';
import { ArrowRight, KeyRound, Lock, Fingerprint, Server, CreditCard, Download, Trash2, ShieldCheck, MailWarning } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/site';

export const metadata = {
  title: 'Security — How Vintify Protects Your Account & Data',
  description:
    'No Vinted password stored, session-based Chrome extension, TLS everywhere, encrypted at rest, Stripe-handled payments, and one-click data export or deletion. How Vintify keeps resellers safe.',
  keywords: ['vintify security', 'vinted bot safe', 'vinted tool password', 'is vintify safe', 'vinted automation security'],
  alternates: {
    canonical: 'https://vintify.co.uk/security',
  },
  openGraph: {
    title: 'Security — How Vintify Protects Your Account & Data',
    description: 'No password stored, TLS everywhere, Stripe payments, one-click data export or deletion.',
    url: 'https://vintify.co.uk/security',
  },
};

const PILLARS = [
  {
    icon: KeyRound,
    title: 'We never touch your password',
    body: 'The Chrome extension works with the Vinted session already open in your browser. Your password is never asked for, sent to us, or stored — remove the extension and access ends instantly.',
  },
  {
    icon: Lock,
    title: 'Encrypted everywhere',
    body: 'Every request runs over TLS, and your data is encrypted at rest by our database provider. Vintify account passwords are stored as salted hashes, never plaintext.',
  },
  {
    icon: CreditCard,
    title: 'Payments live with Stripe',
    body: 'Card details go straight to Stripe (PCI DSS Level 1) and never pass through our servers. We hold only your subscription status.',
  },
  {
    icon: Fingerprint,
    title: 'No trackers on this site',
    body: 'No ad pixels, no third-party analytics cookies, no data resale. The only data we hold is what the product needs to work — see the privacy policy for the full list.',
  },
  {
    icon: Server,
    title: 'Hardened by default',
    body: 'Strict security headers (CSP, HSTS, frame-ancestors), rate-limited APIs, scoped image handling, and least-privilege access to production systems.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to respect Vinted',
    body: 'Automation mirrors actions a seller could do by hand — no scraping other users, no spam, no grey-market credential sharing like some "sniper" bots require.',
  },
];

const RIGHTS = [
  {
    icon: Download,
    title: 'Export everything',
    body: 'One-click CSV export of your full sales, inventory, and expense history from Settings. Your numbers are yours.',
  },
  {
    icon: Trash2,
    title: 'Delete everything',
    body: 'Delete your account from Settings and your data is erased within 30 days. No emails begging you to stay, no retention dark patterns.',
  },
];

export default function SecurityPage() {
  return (
    <div className="flex min-h-dvh flex-col pt-12 sm:pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-white py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid-faint opacity-40" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-glow" />
        <div className="container-max container-px relative z-10">
          <div className="max-w-3xl">
            <p className="section-label mb-6">Security &amp; trust</p>
            <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Your shop, your data.<br />
              <span className="text-gradient">We just do the maths.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-600">
              Most Vinted tools want your password and hope you don&apos;t ask questions. Vintify is built the other way round: session-based access, minimum data, and an easy way out — export or delete everything whenever you like.
            </p>
          </div>
        </div>
      </section>

      {/* How access works — the no-password story, step by step */}
      <section className="border-b border-ink-100 bg-white py-14 sm:py-20">
        <div className="container-max container-px">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-2/5">
              <p className="section-label mb-4">How access works</p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                Connected without credentials.
              </h2>
              <p className="mt-4 text-ink-600">
                This is the part that makes Vintify different from password-hungry bots — and it takes three steps to understand.
              </p>
            </div>
            <ol className="flex-1 space-y-4">
              {[
                { n: '01', t: 'You log in to Vinted as normal', d: 'In your own browser, on vinted.co.uk. Nothing changes about how you sign in.' },
                { n: '02', t: 'The extension joins that session', d: 'It reads listings and sales from the account you are already logged into. Your password never leaves Vinted.' },
                { n: '03', t: 'You stay in control', d: 'Log out of Vinted or remove the extension and Vintify’s access stops on the spot. There are no stored credentials to revoke.' },
              ].map((step) => (
                <li key={step.n} className="flex gap-5 rounded-2xl border border-ink-200 bg-ink-50 p-5 sm:p-6">
                  <span className="font-mono text-sm font-semibold text-brand-600">{step.n}</span>
                  <div>
                    <h3 className="font-bold text-ink-900">{step.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Security pillars */}
      <section className="bg-ink-50 py-14 sm:py-20">
        <div className="container-max container-px">
          <div className="mb-10">
            <p className="section-label mb-4">The details</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              Six commitments, in writing.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-ink-200 bg-white p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                  <p.icon size={20} className="text-brand-600" />
                </div>
                <h3 className="font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your data, your exit */}
      <section className="border-t border-ink-100 bg-white py-14 sm:py-20">
        <div className="container-max container-px">
          <div className="grid gap-6 lg:grid-cols-2">
            {RIGHTS.map((r) => (
              <div key={r.title} className="flex gap-5 rounded-2xl border border-ink-200 bg-ink-50 p-6 sm:p-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10">
                  <r.icon size={20} className="text-brand-600" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Responsible disclosure */}
          <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-ink-200 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
              <MailWarning size={20} className="text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-ink-900">Found a vulnerability?</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">
                Report it to{' '}
                <a href="mailto:hello@vintify.co.uk?subject=Security%20report" className="font-semibold text-brand-600 underline-offset-2 hover:underline">
                  hello@vintify.co.uk
                </a>{' '}
                with &quot;Security report&quot; in the subject. We respond within 48 hours, and we won&apos;t take action against good-faith research.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-ink-400">
            The paperwork to match:{' '}
            <Link href="/privacy" className="font-semibold text-brand-600 underline-offset-2 hover:underline">Privacy policy</Link>
            {' · '}
            <Link href="/terms" className="font-semibold text-brand-600 underline-offset-2 hover:underline">Terms of service</Link>
            {' · '}
            <Link href="/cookies" className="font-semibold text-brand-600 underline-offset-2 hover:underline">Cookie policy</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-900 py-14 sm:py-20">
        <div className="container-max container-px text-center">
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Serious tools shouldn&apos;t need your password.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-300">
            Try Vintify free for 7 days — connect in minutes, walk away with your data any time.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={SIGNUP_URL} className="btn-accent">
              Start your free trial <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
