import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { LOGIN_URL, SIGNUP_URL } from '@/lib/site';

const FOOTER_LINKS = {
  Product: [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/changelog', label: 'Changelog' },
    { href: '/faq', label: 'FAQ' },
    { href: LOGIN_URL, label: 'Log in', external: true },
  ],
  Company: [
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/security', label: 'Security' },
    { href: '/contact', label: 'Contact' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookie Policy' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-ink-100">
      <div className="container-max container-px py-10 sm:py-14">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-5">
          {/* Brand + CTA */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 block">
              <Image
                src="/logo/logo-full.png"
                alt="Vintify"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-ink-500">
              The all-in-one platform for Vinted resellers. Accounting, growth automation, sourcing, and analytics — 55+ features, one subscription.
            </p>
            <a href={SIGNUP_URL} className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-500/30 active:scale-95">
              Start free trial
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-bold text-sm text-ink-900">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-ink-500 transition-colors hover:text-brand-600"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-ink-500 transition-colors hover:text-brand-600"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-8 sm:flex-row">
          <p className="text-xs text-ink-400">
            &copy; {new Date().getFullYear()} Vintify. Built for Vinted resellers.
          </p>
          <p className="text-xs text-ink-400">
            Not affiliated with Vinted. Vinted is a trademark of Vinted Limited.
          </p>
        </div>
      </div>
    </footer>
  );
}
