import Link from 'next/link';
import { ArrowRight, Home, FileQuestion } from 'lucide-react';

export const metadata = {
  title: 'Page not found — Vintify',
  description: 'The page you are looking for does not exist. Explore Vintify features, pricing, or our blog for Vinted reselling tips.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-12 sm:pt-16 lg:pt-20">
      <div className="container-max container-px relative z-10 text-center">
        <div className="absolute inset-0 bg-grid-faint opacity-30" />
        <div className="relative z-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10">
            <FileQuestion size={32} className="text-brand-600" />
          </div>

          <p className="font-mono text-7xl font-bold text-brand-500 sm:text-8xl">404</p>

          <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            This page took a day off.
          </h1>

          <p className="mx-auto mt-3 max-w-md text-ink-500">
            The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/40 active:scale-95 sm:w-auto">
              <Home size={16} />
              Back to home
            </Link>
            <Link href="/blog" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-6 py-3.5 text-sm font-bold text-ink-900 transition-all hover:bg-ink-100 hover:border-ink-300 sm:w-auto">
              Read the blog
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-ink-400">
            <Link href="/features" className="hover:text-brand-600 transition-colors">Features</Link>
            <span className="text-ink-200">·</span>
            <Link href="/pricing" className="hover:text-brand-600 transition-colors">Pricing</Link>
            <span className="text-ink-200">·</span>
            <Link href="/faq" className="hover:text-brand-600 transition-colors">FAQ</Link>
            <span className="text-ink-200">·</span>
            <Link href="/contact" className="hover:text-brand-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
