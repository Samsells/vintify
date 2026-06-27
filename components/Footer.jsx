import Link from 'next/link';

const FOOTER_LINKS = {
  Product: [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ],
  Company: [
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Get in touch' },
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
      <div className="container-max container-px py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="font-display text-2xl font-extrabold text-brand-600 mb-4 block">
              Vintify
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-ink-500">
              Professional accounting and growth automation for elite Vinted resellers.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-bold text-sm text-ink-900">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-8 sm:flex-row">
          <p className="text-xs text-ink-400">
            &copy; {new Date().getFullYear()} Vintify AI. Professional 3-in-1 suite for elite resellers.
          </p>
          <p className="text-xs text-ink-400">
            Not affiliated with Vinted. Vinted is a trademark of Vinted Limited.
          </p>
        </div>
      </div>
    </footer>
  );
}
