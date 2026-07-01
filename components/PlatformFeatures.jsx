import Link from 'next/link';
import {
  ArrowRight, Landmark, Bot, Zap, Calculator, Receipt, Target, BarChart3,
  TrendingUp, Sparkles, Tag, MessageCircle, MessageSquare, RefreshCw,
  Printer, Truck, Boxes, Link2, ShoppingBag, Clock, FileText,
} from 'lucide-react';

// Professional, data-dense replacement for the interactive feature journey.
// No mockups, no browser chrome — a lifecycle rail plus three structured
// pillar cards that read like product documentation, not a demo reel.

const LIFECYCLE = [
  { n: '01', label: 'Source', desc: 'Log purchases & split bulk lots' },
  { n: '02', label: 'List', desc: 'AI writes it, one click posts it' },
  { n: '03', label: 'Sell', desc: 'Smart Offers & AI replies' },
  { n: '04', label: 'Ship', desc: 'Labels, carriers, deadlines' },
  { n: '05', label: 'Track', desc: 'True profit & HMRC reports' },
  { n: '06', label: 'Grow', desc: 'Price drops & reposts on autopilot' },
];

const PILLARS = [
  {
    title: 'Accounting',
    href: '/features/accounting',
    icon: Landmark,
    blurb: 'Real numbers on every sale — profit after fees, postage, and costs, ready for self-assessment.',
    count: 18,
    features: [
      { title: 'True profit per item', icon: Calculator },
      { title: 'HMRC-ready tax reports', icon: Landmark },
      { title: 'Expense tracking', icon: Receipt },
      { title: 'Real-time profit dashboard', icon: BarChart3 },
      { title: 'Sell-through rate', icon: TrendingUp },
      { title: 'Goal tracking', icon: Target },
    ],
  },
  {
    title: 'Growth & AI',
    href: '/features/growth-bot',
    icon: Bot,
    blurb: 'Listings written for you, offers negotiated for you, stale stock revived while you sleep.',
    count: 17,
    features: [
      { title: 'AI listing writer', icon: Sparkles },
      { title: 'Auto price drops', icon: TrendingUp },
      { title: 'Smart Offers — auto accept & counter', icon: Tag },
      { title: 'AI reply suggestions', icon: MessageCircle },
      { title: 'Central inbox', icon: MessageSquare },
      { title: 'Engagement analytics', icon: BarChart3 },
    ],
  },
  {
    title: 'Automation & Shipping',
    href: '/features/automation',
    icon: Zap,
    blurb: 'The repetitive work — relisting, repricing, labels, dispatch — handled in bulk or on a schedule.',
    count: 20,
    features: [
      { title: 'Label Hub — every label, one place', icon: Printer },
      { title: 'Scheduled reposts & price drops', icon: Clock },
      { title: 'Bulk price & SKU editing', icon: Tag },
      { title: 'Carrier auto-detection', icon: Truck },
      { title: 'Bulk lot splitting', icon: Boxes },
      { title: 'Smart purchase matching', icon: Link2 },
    ],
  },
];

export function PlatformFeatures() {
  return (
    <div>
      {/* Lifecycle rail */}
      <div className="mb-12 overflow-hidden rounded-2xl border border-ink-200 bg-white">
        <div className="grid grid-cols-2 divide-x divide-y divide-ink-200 sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
          {LIFECYCLE.map((s) => (
            <div key={s.n} className="p-4 sm:p-5">
              <p className="font-mono text-[11px] font-semibold text-brand-600">{s.n}</p>
              <p className="mt-1.5 font-display text-sm font-bold text-ink-900">{s.label}</p>
              <p className="mt-1 text-xs leading-snug text-ink-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pillar cards */}
      <div className="grid gap-4 lg:grid-cols-3">
        {PILLARS.map((p) => (
          <div key={p.title} className="flex flex-col rounded-2xl border border-ink-200 bg-white">
            <div className="border-b border-ink-200 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10">
                  <p.icon size={17} className="text-brand-600" />
                </div>
                <span className="font-mono text-[11px] font-medium text-ink-400">{p.count} features</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{p.blurb}</p>
            </div>
            <ul className="flex-1 p-5 sm:p-6">
              {p.features.map((f) => (
                <li key={f.title} className="flex items-center gap-2.5 py-1.5">
                  <f.icon size={14} className="shrink-0 text-brand-600/80" />
                  <span className="text-sm text-ink-600">{f.title}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-ink-200 p-4 px-5 sm:px-6">
              <Link
                href={p.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                Explore {p.title.toLowerCase()}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-ink-400">
        Every feature is included on every plan —{' '}
        <Link href="/features" className="font-semibold text-brand-600 underline-offset-2 hover:underline">
          see the full list of 55+
        </Link>
        .
      </p>
    </div>
  );
}
