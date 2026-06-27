import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About',
  description: 'Vintify is built by resellers, for resellers. Learn about our mission to give Vinted sellers the tools they deserve.',
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col pt-20 lg:pt-24">
      <section className="border-b border-ink-100 py-20 lg:py-28">
        <div className="container-max container-px">
          <p className="section-label mb-6">About</p>
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Built by resellers, for resellers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-600">
            Vintify started as a spreadsheet. Then a script. Then a Chrome extension. Now it's the accounting and growth platform that hundreds of UK Vinted resellers rely on every day.
          </p>
        </div>
      </section>

      <section className="section-padding border-b border-ink-100">
        <div className="container-narrow container-px">
          <div className="space-y-12">
            <div>
              <p className="section-label mb-4">The problem</p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                Spreadsheets don't scale.
              </h2>
              <p className="mt-4 text-lg text-ink-600">
                When you're selling 5 items a month, a spreadsheet works fine. When you're selling 50, 100, 500 — you lose track of what you paid, what you profited, and what you owe HMRC. Most resellers are flying blind.
              </p>
            </div>

            <div className="divider"></div>

            <div>
              <p className="section-label mb-4">The solution</p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                One platform. Every number that matters.
              </h2>
              <p className="mt-4 text-lg text-ink-600">
                Vintify connects directly to your Vinted account, pulls in your sales and listings automatically, and gives you real-time profit tracking, HMRC-ready tax reports, and an AI growth bot that writes listings for you.
              </p>
            </div>

            <div className="divider"></div>

            <div>
              <p className="section-label mb-4">The mission</p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                Give resellers the tools of a real business.
              </h2>
              <p className="mt-4 text-lg text-ink-600">
                You're not just "selling old clothes online." You're running a business. Vintify gives you the same quality of accounting, analytics, and automation that big e-commerce brands have — built specifically for the Vinted ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-900 py-24">
        <div className="container-max container-px text-center">
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to join hundreds of UK resellers?
          </h2>
          <div className="mt-8 flex justify-center">
            <Link href="/pricing" className="btn-accent">
              Start your free trial <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
