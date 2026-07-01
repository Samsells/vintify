'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { LOGIN_URL, SIGNUP_URL } from '@/lib/site';

const NAV_LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200 bg-ink-50/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-ink-50'
      }`}
    >
      <nav className="container-max container-px flex h-12 items-center justify-between sm:h-16 lg:h-20">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo-full.png"
            alt="Vintify"
            width={240}
            height={72}
            priority
className="h-12 w-auto sm:h-16 lg:h-20"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-brand-600 font-semibold'
                  : 'text-ink-500 hover:text-brand-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={SIGNUP_URL} className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-500/30 active:scale-95">
            Sign up
          </a>
        </div>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-ink-700 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-ink-200 bg-ink-50 md:hidden">
          <div className="container-max container-px flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-ink-500 hover:bg-ink-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a href={SIGNUP_URL} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-[1.02] active:scale-95">
                Sign up
              </a>
              <p className="mt-1 text-center text-sm text-ink-500">
                Already have an account?{' '}
                <a href={LOGIN_URL} className="font-semibold text-brand-600 hover:text-brand-700">Log in</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
