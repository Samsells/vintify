'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, LayoutDashboard, BarChart3, BadgePoundSterling,
  Boxes, Link2, ShoppingBag, Sparkles, MessageSquare,
  Truck, Printer, Target, Receipt, Landmark,
  Bot, TrendingUp, Calculator, FileText, Zap, Settings,
  Check, Tag, MessageCircle, RefreshCw, Shield, Clock,
  Star, X, AlertCircle,
} from 'lucide-react';

/* ── Category data ── */
const CATEGORIES = [
  {
    id: 'accounting',
    label: 'Accounting',
    icon: Landmark,
    color: 'brand',
    title: 'Know your exact profit. Stay HMRC-ready.',
    description: 'True profit per item after fees, shipping, and expenses. HMRC-ready reports in seconds. Goals, expenses, and analytics in one dashboard.',
    features: [
      { title: 'True profit per item', icon: Calculator, hot: true },
      { title: 'HMRC-ready tax reports', icon: Landmark, hot: true },
      { title: 'Expense tracking', icon: Receipt },
      { title: 'Inventory lot tracking', icon: Boxes },
      { title: 'Monthly profit targets', icon: Target },
      { title: 'Other income management', icon: BadgePoundSterling },
    ],
  },
  {
    id: 'growth-bot',
    label: 'Growth Bot',
    icon: Bot,
    color: 'emerald',
    title: 'Automate your listings. Sell more in less time.',
    description: 'AI writes listings, drops prices on stale items, handles offers automatically, rewrites for reposting, and suggests inbox replies.',
    features: [
      { title: 'AI listing writer', icon: Sparkles, hot: true },
      { title: 'Auto price-drop bot', icon: Bot, hot: true },
      { title: 'Smart Offers', icon: Tag, hot: true },
      { title: 'AI listing rewriter', icon: RefreshCw },
      { title: 'AI reply suggestions', icon: MessageCircle },
      { title: 'Pinned items', icon: Target },
    ],
  },
  {
    id: 'sourcing',
    label: 'Sourcing',
    icon: ShoppingBag,
    color: 'amber',
    title: 'From bulk buy to individual sale. Tracked automatically.',
    description: 'Log sourcing trips, split bulk purchases into individual items, and let Smart Matches auto-link each item to its live Vinted listing.',
    features: [
      { title: 'Purchase tracking', icon: ShoppingBag },
      { title: 'Bulk lot splitting', icon: Boxes, hot: true },
      { title: 'Smart Matches', icon: Link2, hot: true },
      { title: 'Auto-match engine', icon: Zap },
      { title: 'Match confidence scoring', icon: Target },
      { title: 'CSV export', icon: FileText },
    ],
  },
  {
    id: 'selling',
    label: 'Selling',
    icon: MessageSquare,
    color: 'brand',
    title: 'Manage every listing. Reply to every message.',
    description: 'Filter live and draft listings, bulk-edit prices and SKUs, relist stale items, handle offers, and manage buyer messages from one inbox.',
    features: [
      { title: 'Central inbox', icon: MessageSquare },
      { title: 'Smart Offers', icon: Tag, hot: true },
      { title: 'AI reply suggestions', icon: MessageCircle, hot: true },
      { title: 'Bulk price editing', icon: Tag },
      { title: 'Stale listing detection', icon: RefreshCw },
      { title: 'Listing engagement stats', icon: BarChart3 },
    ],
  },
  {
    id: 'fulfilment',
    label: 'Fulfilment',
    icon: Truck,
    color: 'amber',
    title: 'From sold to delivered. Tracked every step.',
    description: 'Track orders through every shipping stage, auto-detect carriers, print labels, and never miss a dispatch deadline again.',
    features: [
      { title: 'Label Hub', icon: Printer, hot: true },
      { title: 'Dispatch deadlines', icon: Zap, hot: true },
      { title: 'Shipping lifecycle', icon: Truck },
      { title: 'Carrier auto-detection', icon: Truck },
      { title: 'Tracking numbers', icon: FileText },
      { title: 'Manual status overrides', icon: Settings },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    color: 'brand',
    title: 'Every number that matters. On one screen.',
    description: 'Real-time profit, sell-through rate, sales cadence charts, expense breakdowns, goal progress, and action items — all live.',
    features: [
      { title: 'Real-time profit', icon: BadgePoundSterling, hot: true },
      { title: 'Sell-through rate', icon: TrendingUp, hot: true },
      { title: 'Sales cadence chart', icon: BarChart3 },
      { title: 'Performance analytics', icon: BarChart3 },
      { title: 'Goal tracking', icon: Target },
      { title: 'Action items', icon: Check },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Shield,
    color: 'emerald',
    title: 'Secure, automatic, and built for Vinted.',
    description: 'Chrome Extension syncs your Vinted account securely — no passwords stored. Customise SKUs, packaging costs, and automation rules.',
    features: [
      { title: 'Chrome Extension sync', icon: Shield, hot: true },
      { title: 'Custom SKU patterns', icon: Tag },
      { title: 'Packaging cost defaults', icon: Receipt },
      { title: 'Sync controls', icon: Settings },
      { title: 'Multiple Vinted accounts', icon: RefreshCw },
      { title: 'Blank cost profit mode', icon: Calculator },
    ],
  },
];

/* ── Compact visual previews for each category ── */
function AccountingPreview() {
  return (
    <div className="w-full bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-ink-900">Dashboard</p>
        <span className="font-mono text-[10px] text-ink-400">Last 30 days</span>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2">
        {[
          { label: 'Net profit', value: '£3,412', trend: '+18%' },
          { label: 'Items sold', value: '87', trend: '+12' },
          { label: 'Avg margin', value: '42%', trend: '' },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-ink-200 bg-ink-50 p-3">
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">{s.label}</p>
            <p className="font-display text-lg font-bold text-ink-900">{s.value}</p>
            {s.trend && <p className="font-mono text-[9px] text-brand-600">{s.trend}</p>}
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-ink-200 bg-ink-50 p-3">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-ink-400">Daily profit · 30 days</p>
        <div className="flex h-20 items-end gap-0.5">
          {[40, 55, 30, 70, 45, 60, 35, 80, 50, 65, 42, 90, 55, 70, 48, 75, 60, 85, 50, 95, 68, 72, 55, 88, 62, 78, 45, 92, 70, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-brand-300" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GrowthBotPreview() {
  return (
    <div className="w-full bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500">
            <Bot size={14} className="text-white" />
          </div>
          <p className="font-display text-sm font-bold text-ink-900">Growth Bot</p>
        </div>
        <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Running
        </span>
      </div>
      <div className="space-y-2">
        {[
          { item: 'Nike Tech Fleece Hoodie', from: '£28.00', to: '£25.20', icon: TrendingUp },
          { item: '3 users favourited — notified', icon: MessageCircle },
          { item: 'Zara Oversized Blazer — relisted', icon: RefreshCw },
          { item: 'Adidas Track Jacket', from: '£22.00', to: '£19.80', icon: TrendingUp },
        ].map((a, i) => (
          <div key={i} className="flex items-center gap-2.5 rounded-lg border border-ink-200 bg-ink-50 px-3 py-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-500/10">
              <a.icon size={13} className="text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-ink-900">{a.item}</p>
              {a.from && (
                <p className="font-mono text-[10px] text-ink-400">
                  <span className="line-through">{a.from}</span> → <span className="font-bold text-emerald-600">{a.to}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SourcingPreview() {
  return (
    <div className="w-full bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-ink-900">Purchases</p>
        <div className="rounded-lg bg-brand-500 px-3 py-1.5 font-mono text-[10px] font-bold text-white">+ New</div>
      </div>
      <div className="rounded-xl border border-ink-200 bg-ink-50 p-4">
        <div className="flex items-center justify-between border-b border-ink-200 pb-3">
          <div>
            <p className="text-sm font-semibold text-ink-900">Charity shop haul · BHF</p>
            <p className="font-mono text-[10px] text-ink-400">12 Jun · 15 items · £45.00</p>
          </div>
          <span className="rounded-full bg-brand-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-brand-600">£3.00/item</span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { name: 'Nike Tech Fleece Hoodie', matched: true, conf: 94 },
            { name: 'Adidas Originals Track Jacket', matched: true, conf: 88 },
            { name: 'Levi 501 Jeans W32 L32', matched: true, conf: 91 },
            { name: 'Zara Oversized Blazer M', matched: false, conf: 0 },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-ink-200 bg-white px-3 py-2">
              <span className="text-xs font-medium text-ink-900">{item.name}</span>
              {item.matched ? (
                <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-600">
                  <Check size={9} /> {item.conf}%
                </span>
              ) : (
                <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 font-mono text-[9px] font-bold text-amber-600">
                  Unmatched
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SellingPreview() {
  return (
    <div className="w-full bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-ink-900">Inbox</p>
        <span className="rounded-md bg-brand-500 px-2 py-0.5 font-mono text-[10px] font-bold text-white">Needs reply · 3</span>
      </div>
      <div className="mb-3 rounded-xl border border-brand-300 bg-brand-500/5 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20 font-display text-xs font-bold text-brand-600">JM</div>
            <div>
              <p className="text-xs font-semibold text-ink-900">Jess M.</p>
              <p className="font-mono text-[10px] text-ink-400">Offer on Nike Tech Fleece</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] text-ink-400">Listed £28.00</p>
            <p className="font-display text-lg font-bold text-ink-900">£22.00</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button className="flex-1 rounded-lg bg-emerald-500 px-3 py-1.5 font-mono text-[10px] font-bold text-white">Accept</button>
          <button className="flex-1 rounded-lg bg-brand-500 px-3 py-1.5 font-mono text-[10px] font-bold text-white">Counter £25</button>
          <button className="flex-1 rounded-lg border border-ink-200 px-3 py-1.5 font-mono text-[10px] font-bold text-ink-500">Decline</button>
        </div>
      </div>
      <div className="rounded-xl border border-ink-200 bg-ink-50 p-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-200 font-display text-xs font-bold text-ink-600">TK</div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-ink-900">Tom K.</p>
            <p className="text-xs text-ink-500">Is this still available? Can you do £20?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FulfilmentPreview() {
  return (
    <div className="w-full bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-ink-900">Orders</p>
        <span className="rounded-md bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-600">2 need dispatch</span>
      </div>
      <div className="mb-4 flex items-center gap-1">
        {[
          { label: 'Sold', count: 87 },
          { label: 'Paid', count: 82 },
          { label: 'Send', count: 2, urgent: true },
          { label: 'Transit', count: 14 },
          { label: 'Delivered', count: 66 },
        ].map((step, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1.5 rounded-full ${step.urgent ? 'bg-amber-500' : 'bg-brand-500'}`} />
            <div className="mt-1.5 text-center">
              <p className={`font-mono text-[9px] font-bold ${step.urgent ? 'text-amber-600' : 'text-brand-600'}`}>{step.count}</p>
              <p className="font-mono text-[8px] text-ink-400">{step.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="rounded-xl border border-amber-300 bg-amber-500/5 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
                <Printer size={16} className="text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink-900">#VNT-4821 · Nike Tech Fleece</p>
                <p className="font-mono text-[10px] text-ink-400">Evri · Tracked 48</p>
              </div>
            </div>
            <p className="font-mono text-[10px] font-bold text-amber-600">Dispatch by today</p>
          </div>
        </div>
        <div className="rounded-xl border border-ink-200 bg-ink-50 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/10">
                <Truck size={16} className="text-brand-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink-900">#VNT-4818 · Adidas Track Jacket</p>
                <p className="font-mono text-[10px] text-ink-400">InPost · QR code ready</p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-brand-600">In transit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div className="w-full bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-ink-900">Performance</p>
        <span className="font-mono text-[10px] text-ink-400">All time</span>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-ink-200 bg-ink-50 p-4">
          <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Best brand</p>
          <p className="font-display text-lg font-bold text-ink-900">Nike</p>
          <p className="font-mono text-[9px] text-brand-600">34 sold · £1,890 profit</p>
        </div>
        <div className="rounded-lg border border-ink-200 bg-ink-50 p-4">
          <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Best day to list</p>
          <p className="font-display text-lg font-bold text-ink-900">Sunday</p>
          <p className="font-mono text-[9px] text-brand-600">2.3x more views</p>
        </div>
      </div>
      <div className="rounded-lg border border-ink-200 bg-ink-50 p-4">
        <p className="mb-3 font-mono text-[9px] uppercase tracking-wider text-ink-400">Top selling items</p>
        <div className="space-y-2">
          {[
            { name: 'Nike Tech Fleece Hoodie', sold: 12, revenue: '£336' },
            { name: 'Adidas Track Jacket', sold: 8, revenue: '£176' },
            { name: 'Levi 501 Jeans', sold: 6, revenue: '£132' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="font-medium text-ink-900">{item.name}</span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-ink-500">{item.sold} sold</span>
                <span className="font-mono font-bold text-brand-600">{item.revenue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsPreview() {
  return (
    <div className="w-full bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-ink-900">Sync Settings</p>
        <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Connected
        </span>
      </div>
      <div className="space-y-3">
        {[
          { label: 'Listings sync', on: true },
          { label: 'Sold orders sync', on: true },
          { label: 'Purchases sync', on: true },
          { label: 'Conversations sync', on: true },
          { label: 'Shipping sync', on: true },
        ].map((s, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg border border-ink-200 bg-ink-50 px-4 py-3">
            <span className="text-xs font-medium text-ink-900">{s.label}</span>
            <div className={`flex h-6 w-11 items-center rounded-full p-0.5 transition-colors ${s.on ? 'bg-brand-500' : 'bg-ink-200'}`}>
              <div className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${s.on ? 'translate-x-5' : ''}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-500/5 px-4 py-3">
        <Shield size={16} className="text-emerald-600" />
        <span className="text-xs text-emerald-700">No passwords stored · GDPR compliant</span>
      </div>
    </div>
  );
}

const PREVIEWS = {
  accounting: AccountingPreview,
  'growth-bot': GrowthBotPreview,
  sourcing: SourcingPreview,
  selling: SellingPreview,
  fulfilment: FulfilmentPreview,
  analytics: AnalyticsPreview,
  settings: SettingsPreview,
};

const COLOR_MAP = {
  brand: { bg: 'bg-brand-500', text: 'text-brand-600', light: 'bg-brand-500/10', border: 'border-brand-300', glow: 'bg-brand-500/8' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', light: 'bg-emerald-500/10', border: 'border-emerald-300', glow: 'bg-emerald-500/8' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', light: 'bg-amber-500/10', border: 'border-amber-300', glow: 'bg-amber-500/8' },
};

/* ── Browser frame ── */
function BrowserFrame({ url, children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-2xl">
      <div className="flex items-center gap-2 border-b border-ink-200 bg-ink-100/50 p-3">
        <div className="h-2.5 w-2.5 rounded-full bg-accent-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 flex h-6 flex-1 items-center rounded-full border border-ink-200 bg-white px-3 font-mono text-[10px] text-ink-400">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

/* ── Main component ── */
export function FeaturesExplorer() {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];
  const Preview = PREVIEWS[cat.id];
  const c = COLOR_MAP[cat.color];

  return (
    <div>
      {/* ── Tab bar ── */}
      <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible md:pb-0 scrollbar-hide">
        {CATEGORIES.map((category, idx) => {
          const cc = COLOR_MAP[category.color];
          const isActive = idx === active;
          return (
            <button
              key={category.id}
              onClick={() => setActive(idx)}
              className={`group flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-all ${
                isActive
                  ? `${cc.border} ${cc.light} ${cc.text} scale-105 shadow-md`
                  : 'border-ink-200 bg-white text-ink-500 hover:border-ink-300 hover:text-ink-900'
              }`}
            >
              <category.icon size={16} className={isActive ? cc.text : 'text-ink-400'} />
              {category.label}
            </button>
          );
        })}
      </div>

      {/* ── Active category content ── */}
      <div key={cat.id} className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        {/* Left — Info + features */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} shadow-lg`}>
              <cat.icon size={24} className="text-white" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-400">Category {active + 1} of {CATEGORIES.length}</p>
              <p className={`font-display text-sm font-bold ${c.text}`}>{cat.label} · {cat.features.length} features</p>
            </div>
          </div>

          <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            {cat.title}
          </h3>
          <p className="mt-4 text-ink-500 leading-relaxed">
            {cat.description}
          </p>

          {/* Feature pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {cat.features.map((f, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 transition-all ${
                  f.hot
                    ? `${c.border} ${c.light}`
                    : 'border-ink-200 bg-white'
                }`}
                style={{ animation: 'fadeUp 0.3s ease-out forwards', animationDelay: `${i * 60}ms`, opacity: 0 }}
              >
                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${f.hot ? c.bg : c.light}`}>
                  <f.icon size={13} className={f.hot ? 'text-white' : c.text} />
                </div>
                <span className={`text-xs font-semibold ${f.hot ? 'text-ink-900' : 'text-ink-700'}`}>{f.title}</span>
                {f.hot && (
                  <Star size={10} className={`fill-current ${c.text}`} />
                )}
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="mt-8 flex items-center gap-2">
            {CATEGORIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-2 rounded-full transition-all ${idx === active ? 'w-8 bg-brand-500' : 'w-2 bg-ink-200 hover:bg-ink-300'}`}
                aria-label={`Go to ${CATEGORIES[idx].label}`}
              />
            ))}
          </div>

          {active < CATEGORIES.length - 1 ? (
            <button
              onClick={() => setActive(active + 1)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-all hover:gap-4"
            >
              Next: {CATEGORIES[active + 1].label} <ArrowRight size={16} />
            </button>
          ) : (
            <Link href="/pricing" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-all hover:gap-4">
              See pricing <ArrowRight size={16} />
            </Link>
          )}
        </div>

        {/* Right — Product mockup */}
        <div style={{ animation: 'fadeUp 0.5s ease-out forwards', opacity: 0 }} className="relative">
          <div className={`absolute inset-x-4 -top-4 -bottom-4 rounded-[32px] ${c.glow} blur-3xl`} />
          <div className="relative">
            <BrowserFrame url={`app.vintify.co.uk/${cat.id}`}>
              <Preview />
            </BrowserFrame>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Before / After comparison ── */
export function BeforeAfterComparison() {
  const beforeItems = [
    'Spreadsheet for profit tracking',
    'Manual price drops — if you remember',
    'Copy-paste listings to Vinted',
    'Scroll through Vinted messages',
    'Download labels one by one',
    'Guess which items actually sell',
  ];
  const afterItems = [
    'Automatic profit per item, live',
    'Bot drops prices every 12 minutes',
    'AI writes listings, one click to post',
    'Central inbox with AI reply suggestions',
    'Label Hub — print all labels at once',
    'Analytics show your best brands and days',
  ];

  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
      {/* Before */}
      <div className="rounded-2xl border border-ink-200 bg-ink-50 p-5 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-200">
            <X size={20} className="text-ink-500" />
          </div>
          <h3 className="font-display text-xl font-bold text-ink-500">Without Vintify</h3>
        </div>
        <ul className="space-y-4">
          {beforeItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-200 mt-0.5">
                <X size={12} className="text-ink-500" />
              </span>
              <span className="text-sm text-ink-500 line-through decoration-ink-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* After */}
      <div className="relative rounded-2xl border-2 border-brand-500 bg-white p-5 shadow-xl shadow-brand-500/15 sm:p-8">
        <div className="absolute -top-3 right-8 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
          With Vintify
        </div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500">
            <Check size={20} className="text-white" />
          </div>
          <h3 className="font-display text-xl font-bold text-ink-900">With Vintify</h3>
        </div>
        <ul className="space-y-4">
          {afterItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/10 mt-0.5">
                <Check size={12} className="text-brand-600" />
              </span>
              <span className="text-sm font-medium text-ink-900">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
