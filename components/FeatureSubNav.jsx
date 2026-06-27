'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Landmark, Bot, Zap, ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/features/accounting', label: 'Accounting', icon: Landmark },
  { href: '/features/growth-bot', label: 'Growth Bot', icon: Bot },
  { href: '/features/automation', label: 'Automation', icon: Zap },
];

export function FeatureSubNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-16 z-30 border-b border-ink-200 bg-ink-50/90 backdrop-blur-xl lg:top-20">
      <div className="container-max container-px">
        <div className="flex items-center gap-1 overflow-x-auto py-2">
          <Link
            href="/features"
            className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              pathname === '/features'
                ? 'bg-brand-500 text-white'
                : 'text-ink-500 hover:bg-ink-100 hover:text-ink-900'
            }`}
          >
            <LayoutGrid size={15} />
            <span className="hidden sm:inline">All Features</span>
          </Link>
          <div className="mx-1 h-5 w-px shrink-0 bg-ink-200" />
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-ink-500 hover:bg-ink-100 hover:text-ink-900'
                }`}
              >
                <item.icon size={15} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function FeaturePrevNext() {
  const pathname = usePathname();
  const activeIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);
  const prev = activeIndex > 0 ? NAV_ITEMS[activeIndex - 1] : null;
  const next = activeIndex < NAV_ITEMS.length - 1 ? NAV_ITEMS[activeIndex + 1] : null;

  return (
    <div className="border-t border-ink-200 bg-white">
      <div className="container-max container-px py-8">
        <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
          {prev ? (
            <Link
              href={prev.href}
              className="group flex flex-1 items-center gap-3 rounded-xl border border-ink-200 p-4 transition-all hover:border-brand-300 hover:bg-brand-50/30"
            >
              <ArrowLeft size={20} className="shrink-0 text-ink-400 transition-colors group-hover:text-brand-600" />
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Previous</p>
                <p className="font-display text-sm font-bold text-ink-900 group-hover:text-brand-600">{prev.label}</p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <Link
            href="/features"
            className="flex shrink-0 items-center gap-2 rounded-xl border border-ink-200 px-5 py-4 text-sm font-bold text-ink-900 transition-all hover:border-brand-300 hover:bg-brand-50/30"
          >
            <LayoutGrid size={16} className="text-brand-600" />
            All Features
          </Link>

          {next ? (
            <Link
              href={next.href}
              className="group flex flex-1 items-center justify-end gap-3 rounded-xl border border-ink-200 p-4 text-right transition-all hover:border-brand-300 hover:bg-brand-50/30"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Next</p>
                <p className="font-display text-sm font-bold text-ink-900 group-hover:text-brand-600">{next.label}</p>
              </div>
              <ArrowRight size={20} className="shrink-0 text-ink-400 transition-colors group-hover:text-brand-600" />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  );
}
