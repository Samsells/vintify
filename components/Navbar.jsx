'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
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
      <nav className="container-max container-px flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
          Vintify
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

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/contact" className="text-sm font-medium text-ink-500 transition-colors hover:text-ink-900">
            Sign in
          </Link>
          <Link href="/pricing" className="btn-primary">
            Get started
          </Link>
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
              <Link href="/contact" className="btn-secondary w-full">
                Sign in
              </Link>
              <Link href="/pricing" className="btn-primary w-full">
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
