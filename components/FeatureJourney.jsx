'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShoppingBag, Sparkles, MessageSquare, Truck, Calculator, Bot,
  Boxes, Link2, Tag, Zap, RefreshCw, MessageCircle, BarChart3,
  Printer, FileText, Settings, Landmark, Receipt, Target,
  TrendingUp, Check, ArrowRight, Package, Search, Clock, Star,
} from 'lucide-react';
import { FeatureDetailModal, FEATURE_DETAILS } from './FeatureDetail';

/* ── Stage data ── */
const STAGES = [
  {
    id: 'source',
    label: 'Source',
    icon: ShoppingBag,
    title: 'Find it. Buy it. Log it.',
    description: 'Track every sourcing trip, split bulk lots into individual items, and auto-match purchases to live Vinted listings.',
    features: [
      { title: 'Purchase tracking', icon: ShoppingBag },
      { title: 'Bulk lot splitting', icon: Boxes, highlight: true },
      { title: 'Smart Matches', icon: Link2, highlight: true },
      { title: 'Auto-match engine', icon: Zap },
      { title: 'Match confidence scoring', icon: Target },
      { title: 'CSV export', icon: FileText },
    ],
  },
  {
    id: 'list',
    label: 'List',
    icon: Sparkles,
    title: 'AI writes it. One click posts it.',
    description: 'Type a few words, get a full SEO-optimized listing. Push to Vinted in one click. Bulk edit prices and SKUs across hundreds of listings.',
    features: [
      { title: 'AI listing writer', icon: Sparkles, highlight: true },
      { title: 'One-click Vinted listing', icon: Zap, highlight: true },
      { title: 'Bulk price editing', icon: Tag, highlight: true },
      { title: 'AI listing rewriter', icon: RefreshCw },
      { title: 'Bulk SKU assignment', icon: Tag },
      { title: 'Stale listing detection', icon: RefreshCw },
      { title: 'Bulk Vinted actions', icon: Zap },
      { title: 'Custom SKU patterns', icon: Tag },
    ],
  },
  {
    id: 'sell',
    label: 'Sell',
    icon: MessageSquare,
    title: 'Reply in seconds. Accept offers automatically.',
    description: 'Central inbox for all Vinted messages. AI-drafted replies. Smart Offers auto-accepts, counters, or declines based on your rules.',
    features: [
      { title: 'Smart Offers', icon: Tag, highlight: true },
      { title: 'AI reply suggestions', icon: MessageCircle, highlight: true },
      { title: 'Central inbox', icon: MessageSquare },
      { title: 'Offer management', icon: MessageCircle },
      { title: 'Listing engagement stats', icon: BarChart3 },
    ],
  },
  {
    id: 'ship',
    label: 'Ship',
    icon: Truck,
    title: 'From sold to delivered. Never miss a deadline.',
    description: 'Track every order through the shipping pipeline. Import all Vinted labels into one Label Hub. Auto-detect carriers. Print in one click.',
    features: [
      { title: 'Label Hub — all labels in 1 place', icon: Printer, highlight: true },
      { title: 'Dispatch deadlines', icon: Zap, highlight: true },
      { title: 'Shipping lifecycle', icon: Truck },
      { title: 'Carrier auto-detection', icon: Truck },
      { title: 'Tracking numbers', icon: FileText },
      { title: 'Manual status overrides', icon: Settings },
    ],
  },
  {
    id: 'track',
    label: 'Track',
    icon: Calculator,
    title: 'Know your exact profit. Stay HMRC-ready.',
    description: 'True profit per item after fees, shipping, and expenses. HMRC-ready tax reports in seconds. Goals, expenses, and analytics in one dashboard.',
    features: [
      { title: 'True profit per item', icon: Calculator, highlight: true },
      { title: 'HMRC-ready tax reports', icon: Landmark, highlight: true },
      { title: 'Sell-through rate', icon: TrendingUp, highlight: true },
      { title: 'Expense tracking', icon: Receipt },
      { title: 'Goal tracking', icon: Target },
      { title: 'Sales cadence chart', icon: BarChart3 },
      { title: 'Performance analytics', icon: BarChart3 },
      { title: 'Other income management', icon: Receipt },
    ],
  },
  {
    id: 'grow',
    label: 'Grow',
    icon: Bot,
    title: 'Let the bot do the work while you sleep.',
    description: 'Auto price-drop bot pings users who favourited your items. Schedule reposts and price drops. Auto-repost stale listings. Full audit trail.',
    features: [
      { title: 'Auto price-drop bot', icon: Bot, highlight: true },
      { title: 'Auto repost', icon: RefreshCw, highlight: true },
      { title: 'Scheduled price drops', icon: Clock, highlight: true },
      { title: 'Scheduled reposts', icon: Clock },
      { title: 'Reprice ledger', icon: FileText },
      { title: 'Pinned items', icon: Target },
    ],
  },
];

/* ── Bento grid data — all 55+ features by engine ── */
const BENTO_GROUPS = [
  {
    title: 'Accounting',
    href: '/features/accounting',
    icon: Landmark,
    accent: 'brand',
    features: [
      { title: 'True profit per item', icon: Calculator, highlight: true },
      { title: 'HMRC-ready tax reports', icon: Landmark, highlight: true },
      { title: 'Expense tracking', icon: Receipt },
      { title: 'Inventory lot tracking', icon: Boxes },
      { title: 'Other income management', icon: Receipt },
      { title: 'Monthly profit targets', icon: Target },
      { title: 'Real-time profit dashboard', icon: Calculator, highlight: true },
      { title: 'Sales cadence chart', icon: BarChart3 },
      { title: 'Sell-through rate', icon: TrendingUp, highlight: true },
      { title: 'Pending revenue', icon: Receipt },
      { title: 'Status mix', icon: BarChart3 },
      { title: 'Expense breakdown', icon: Receipt },
      { title: 'Goal tracking widget', icon: Target, highlight: true },
      { title: 'Action items', icon: Check },
      { title: 'Performance analytics', icon: BarChart3 },
      { title: 'Multiple period views', icon: Calculator },
      { title: 'Auto-sync', icon: RefreshCw },
      { title: 'CSV export', icon: FileText },
    ],
  },
  {
    title: 'Growth Bot',
    href: '/features/growth-bot',
    icon: Bot,
    accent: 'emerald',
    features: [
      { title: 'AI listing writer', icon: Sparkles, highlight: true },
      { title: 'One-click Vinted listing', icon: Zap, highlight: true },
      { title: 'Auto price-drop bot', icon: Bot, highlight: true },
      { title: 'Smart relist suggestions', icon: TrendingUp },
      { title: 'Smart Offers (auto accept/counter/decline)', icon: Tag, highlight: true },
      { title: 'AI listing rewriter', icon: RefreshCw },
      { title: 'AI reply suggestions', icon: MessageCircle, highlight: true },
      { title: 'Reprice ledger', icon: FileText },
      { title: 'Pinned items', icon: Target },
      { title: 'Central inbox', icon: MessageSquare },
      { title: 'Offer management', icon: MessageCircle },
      { title: 'Listing engagement stats', icon: BarChart3, highlight: true },
      { title: 'Stale listing detection', icon: RefreshCw },
      { title: 'Custom SKU patterns', icon: Tag },
      { title: 'Bulk Vinted actions', icon: Zap },
      { title: 'Multiple Vinted accounts', icon: RefreshCw },
      { title: 'Chrome Extension sync', icon: Settings },
    ],
  },
  {
    title: 'Automation',
    href: '/features/automation',
    icon: Zap,
    accent: 'amber',
    features: [
      { title: 'Bulk price editing', icon: Tag },
      { title: 'Bulk SKU assignment', icon: Tag },
      { title: 'Bulk repost', icon: RefreshCw, highlight: true },
      { title: 'Auto repost', icon: RefreshCw },
      { title: 'Scheduled reposts', icon: Clock, highlight: true },
      { title: 'Scheduled price drops', icon: Clock },
      { title: 'Label Hub — import all Vinted labels', icon: Printer, highlight: true },
      { title: 'Auto-lister with AI', icon: Zap, highlight: true },
      { title: 'Shipping lifecycle', icon: Truck },
      { title: 'Carrier auto-detection', icon: Truck },
      { title: 'Dispatch deadlines', icon: Zap, highlight: true },
      { title: 'Tracking numbers', icon: FileText },
      { title: 'Manual status overrides', icon: Settings },
      { title: 'Purchase tracking', icon: ShoppingBag },
      { title: 'Bulk lot splitting', icon: Boxes, highlight: true },
      { title: 'Smart Matches', icon: Link2, highlight: true },
      { title: 'Auto-match engine', icon: Zap },
      { title: 'Packaging cost defaults', icon: Receipt },
      { title: 'Sync controls', icon: Settings },
      { title: 'Blank cost profit mode', icon: Calculator },
    ],
  },
];

/* ── Product mockups for each stage ── */
function SourceMockup() {
  return (
    <div className="w-full bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="font-display text-sm font-bold text-ink-900">Purchases</p>
          <p className="font-mono text-[10px] text-ink-400">3 lots · 47 items · £312 total cost</p>
        </div>
        <div className="rounded-lg bg-brand-500 px-3 py-1.5 font-mono text-[10px] font-bold text-white">+ New purchase</div>
      </div>
      <div className="rounded-xl border border-ink-200 bg-ink-50 p-4">
        <div className="flex items-center justify-between border-b border-ink-200 pb-3">
          <div>
            <p className="text-sm font-semibold text-ink-900">Charity shop haul · BHF</p>
            <p className="font-mono text-[10px] text-ink-400">12 Jun 2025 · 15 items · £45.00</p>
          </div>
          <span className="rounded-full bg-brand-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-brand-600">£3.00/item</span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { name: 'Nike Tech Fleece Hoodie', cost: '£3.00', matched: true, confidence: 94 },
            { name: 'Adidas Originals Track Jacket', cost: '£3.00', matched: true, confidence: 88 },
            { name: 'Levi 501 Jeans W32 L32', cost: '£3.00', matched: true, confidence: 91 },
            { name: 'Zara Oversized Blazer M', cost: '£3.00', matched: false, confidence: 0 },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-ink-200 bg-white px-3 py-2">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-ink-100">
                  <Package size={14} className="text-ink-400" />
                </div>
                <span className="text-xs font-medium text-ink-900">{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-ink-500">{item.cost}</span>
                {item.matched ? (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-600">
                    <Check size={9} /> {item.confidence}%
                  </span>
                ) : (
                  <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 font-mono text-[9px] font-bold text-amber-600">
                    <Search size={9} /> Unmatched
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-brand-500/5 px-3 py-2">
          <Link2 size={14} className="text-brand-600" />
          <span className="text-xs text-brand-600">12 of 15 items auto-matched to live Vinted listings</span>
        </div>
      </div>
    </div>
  );
}

function ListMockup() {
  return (
    <div className="w-full bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-ink-900">AI Listing Writer</p>
        <span className="flex items-center gap-1 font-mono text-[10px] text-brand-600">
          <Sparkles size={10} /> Powered by AI
        </span>
      </div>
      <div className="mb-3 rounded-xl border border-ink-200 bg-ink-50 p-3">
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-ink-400">Describe your item</p>
        <div className="flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2">
          <span className="text-xs text-ink-900">Nike Tech Fleece Hoodie Red Medium</span>
          <div className="ml-auto rounded-md bg-brand-500 px-2.5 py-1 font-mono text-[10px] font-bold text-white">Generate</div>
        </div>
      </div>
      <div className="rounded-xl border border-brand-300 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center gap-1.5">
          <Sparkles size={12} className="text-brand-600" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-600">AI Generated Listing</span>
        </div>
        <p className="text-sm font-bold text-ink-900">Nike Tech Fleece Hoodie Full Zip Red Size M Excellent Condition</p>
        <p className="mt-2 text-xs leading-relaxed text-ink-500">
          Authentic Nike Tech Fleece full-zip hoodie in striking red. Size medium. Excellent condition with minimal wear. Features the signature Tech Fleece fabric for lightweight warmth. Perfect for gym, casual wear, or streetwear fits.
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {['#nike', '#techfleece', '#hoodie', '#streetwear', '#mensfashion', '#redhoodie', '#nikehoodie', '#sizeM'].map((tag) => (
            <span key={tag} className="rounded-md bg-brand-500/10 px-2 py-0.5 font-mono text-[10px] text-brand-600">{tag}</span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-ink-200 pt-3">
          <div>
            <span className="font-mono text-[10px] text-ink-400">Suggested price</span>
            <p className="font-display text-lg font-bold text-ink-900">£28.00</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-ink-200 px-3 py-1.5 font-mono text-[10px] font-bold text-ink-500">Rewrite</button>
            <button className="flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1.5 font-mono text-[10px] font-bold text-white">
              <Zap size={11} /> Push to Vinted
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SellMockup() {
  return (
    <div className="w-full bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-ink-900">Inbox</p>
        <div className="flex gap-1.5">
          <span className="rounded-md bg-brand-500 px-2 py-0.5 font-mono text-[10px] font-bold text-white">Needs reply · 3</span>
          <span className="rounded-md bg-ink-100 px-2 py-0.5 font-mono text-[10px] font-medium text-ink-500">Offers · 5</span>
        </div>
      </div>
      <div className="mb-3 rounded-xl border border-brand-300 bg-brand-500/5 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20 font-display text-xs font-bold text-brand-600">JM</div>
            <div>
              <p className="text-xs font-semibold text-ink-900">Jess M.</p>
              <p className="font-mono text-[10px] text-ink-400">Offer on Nike Tech Fleece Hoodie</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] text-ink-400">Listed £28.00</p>
            <p className="font-display text-lg font-bold text-ink-900">£22.00</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 rounded-lg border border-ink-200 bg-white px-3 py-2 text-xs text-ink-500">
            <span className="text-brand-600">AI suggested:</span> &quot;Hi Jess! Thanks for the offer. I could do £25 if you can pay today?&quot;
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
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
          <span className="font-mono text-[10px] text-ink-400">2m ago</span>
        </div>
      </div>
    </div>
  );
}

function ShipMockup() {
  return (
    <div className="w-full bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-ink-900">Orders</p>
        <span className="rounded-md bg-accent-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-accent-600">2 need dispatch</span>
      </div>
      <div className="mb-4 flex items-center gap-1">
        {[
          { label: 'Sold', count: 87, urgent: false },
          { label: 'Paid', count: 82, urgent: false },
          { label: 'Send', count: 2, urgent: true },
          { label: 'Transit', count: 14, urgent: false },
          { label: 'Delivered', count: 66, urgent: false },
        ].map((step, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1.5 rounded-full ${step.urgent ? 'bg-accent-500' : 'bg-brand-500'}`} />
            <div className="mt-1.5 text-center">
              <p className={`font-mono text-[9px] font-bold ${step.urgent ? 'text-accent-600' : 'text-brand-600'}`}>{step.count}</p>
              <p className="font-mono text-[8px] text-ink-400">{step.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="rounded-xl border border-accent-300 bg-accent-500/5 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/10">
                <Printer size={16} className="text-accent-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink-900">#VNT-4821 · Nike Tech Fleece</p>
                <p className="font-mono text-[10px] text-ink-400">Evri · Tracked 48</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono text-[10px] font-bold text-accent-600">Dispatch by today</p>
              <p className="font-mono text-[10px] text-ink-400">£3.19 label</p>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <button className="flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1.5 font-mono text-[10px] font-bold text-white">
              <Printer size={11} /> Print label
            </button>
            <button className="rounded-lg border border-ink-200 px-3 py-1.5 font-mono text-[10px] font-bold text-ink-500">Mark sent</button>
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
            <div className="flex items-center gap-1.5">
              <Check size={14} className="text-brand-600" />
              <span className="font-mono text-[10px] text-brand-600">In transit</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-ink-200 bg-ink-50 p-3 opacity-60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                <Check size={16} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink-900">#VNT-4805 · Levi 501 Jeans</p>
                <p className="font-mono text-[10px] text-ink-400">Royal Mail · Tracked 24</p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-emerald-600">Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackMockup() {
  return (
    <div className="w-full bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-sm font-bold text-ink-900">Dashboard</p>
        <span className="font-mono text-[10px] text-ink-400">Last 30 days</span>
      </div>
      <div className="mb-3 grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-ink-200 bg-ink-50 p-3">
          <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Net profit</p>
          <p className="font-display text-lg font-bold text-ink-900">£3,412</p>
          <p className="font-mono text-[9px] text-brand-600">+18% vs last</p>
        </div>
        <div className="rounded-lg border border-ink-200 bg-ink-50 p-3">
          <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Items sold</p>
          <p className="font-display text-lg font-bold text-ink-900">87</p>
          <p className="font-mono text-[9px] text-brand-600">+12 vs last</p>
        </div>
        <div className="rounded-lg border border-ink-200 bg-ink-50 p-3">
          <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Avg margin</p>
          <p className="font-display text-lg font-bold text-ink-900">42%</p>
          <div className="mt-1 h-1 w-full rounded-full bg-ink-200">
            <div className="h-1 w-[42%] rounded-full bg-brand-500" />
          </div>
        </div>
      </div>
      <div className="mb-3 rounded-lg border border-ink-200 bg-ink-50 p-3">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-ink-400">Daily profit · 30 days</p>
        <div className="flex h-20 items-end gap-0.5">
          {[40, 55, 30, 70, 45, 60, 35, 80, 50, 65, 42, 90, 55, 70, 48, 75, 60, 85, 50, 95, 68, 72, 55, 88, 62, 78, 45, 92, 70, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-brand-300" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-ink-200 bg-ink-50 p-3">
          <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-ink-400">Profit breakdown</p>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px]">
              <span className="text-ink-500">Revenue</span>
              <span className="font-mono font-medium text-ink-900">£8,450</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-ink-500">Item costs</span>
              <span className="font-mono font-medium text-ink-900">-£3,820</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-ink-500">Fees</span>
              <span className="font-mono font-medium text-ink-900">-£845</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-ink-500">Expenses</span>
              <span className="font-mono font-medium text-ink-900">-£373</span>
            </div>
            <div className="flex justify-between border-t border-ink-200 pt-1 text-[10px]">
              <span className="font-bold text-ink-900">Net profit</span>
              <span className="font-mono font-bold text-brand-600">£3,412</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-ink-200 bg-ink-50 p-3">
          <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-ink-400">Monthly goal</p>
          <p className="font-display text-lg font-bold text-ink-900">£5,000</p>
          <div className="mt-2 h-2 w-full rounded-full bg-ink-200">
            <div className="h-2 w-[68%] rounded-full bg-brand-500" />
          </div>
          <p className="mt-1.5 font-mono text-[9px] text-brand-600">68% · £1,588 to go</p>
        </div>
      </div>
    </div>
  );
}

function GrowMockup() {
  return (
    <div className="w-full bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500">
            <Bot size={14} className="text-white" />
          </div>
          <p className="font-display text-sm font-bold text-ink-900">Growth Bot</p>
        </div>
        <span className="flex items-center gap-1 font-mono text-[10px] text-brand-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" /> Running
        </span>
      </div>
      <div className="mb-3 rounded-xl border border-ink-200 bg-ink-50 p-3">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Drop %</p>
            <p className="font-display text-sm font-bold text-ink-900">10%</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Floor</p>
            <p className="font-display text-sm font-bold text-ink-900">Cost+£2</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Stale after</p>
            <p className="font-display text-sm font-bold text-ink-900">14 days</p>
          </div>
        </div>
      </div>
      <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-ink-400">Recent actions</p>
      <div className="space-y-2">
        {[
          { type: 'drop', item: 'Nike Tech Fleece Hoodie', from: '£28.00', to: '£25.20', time: '2m ago', icon: TrendingUp, color: 'brand' },
          { type: 'ping', item: '3 users favourited notified', time: '2m ago', icon: MessageCircle, color: 'emerald' },
          { type: 'relist', item: 'Zara Oversized Blazer', time: '1h ago', icon: RefreshCw, color: 'amber' },
          { type: 'drop', item: 'Adidas Track Jacket', from: '£22.00', to: '£19.80', time: '3h ago', icon: TrendingUp, color: 'brand' },
          { type: 'pinned', item: 'Levi 501 Jeans pinned to bot', time: '5h ago', icon: Target, color: 'brand' },
        ].map((action, i) => {
          const colorMap = {
            brand: 'bg-brand-500/10 text-brand-600',
            emerald: 'bg-emerald-500/10 text-emerald-600',
            amber: 'bg-amber-500/10 text-amber-600',
          };
          return (
            <div key={i} className="flex items-center gap-2.5 rounded-lg border border-ink-200 bg-ink-50 px-3 py-2">
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${colorMap[action.color]}`}>
                <action.icon size={13} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-ink-900">{action.item}</p>
                {action.from && (
                  <p className="font-mono text-[10px] text-ink-400">
                    <span className="line-through">{action.from}</span> → <span className="font-bold text-brand-600">{action.to}</span>
                  </p>
                )}
              </div>
              <span className="font-mono text-[9px] text-ink-400">{action.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const MOCKUPS = {
  source: SourceMockup,
  list: ListMockup,
  sell: SellMockup,
  ship: ShipMockup,
  track: TrackMockup,
  grow: GrowMockup,
};

/* ── Browser frame wrapper ── */
function BrowserFrame({ url, children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-xl">
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

/* ── Bento grid sub-component ── */
function FeatureBentoGrid({ onFeatureClick }) {
  const accentMap = {
    brand: { bg: 'bg-brand-500', text: 'text-brand-600', light: 'bg-brand-500/10', border: 'border-brand-200' },
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', light: 'bg-emerald-500/10', border: 'border-emerald-200' },
    amber: { bg: 'bg-amber-500', text: 'text-amber-600', light: 'bg-amber-500/10', border: 'border-amber-200' },
  };

  return (
    <div className="mt-12 sm:mt-20">
      <div className="mb-8 text-center sm:mb-10">
        <p className="section-label mb-3">The full arsenal</p>
        <h3 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
          Every feature included. All in one place.
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-ink-500">
          {BENTO_GROUPS.reduce((sum, g) => sum + g.features.length, 0)} features across 3 engines — for less than the cost of one.
        </p>
        <p className="mt-2 text-sm font-medium text-ink-500">Click any feature to see the problem it solves.</p>
        <p className="mt-1 text-xs text-ink-400">
          <span className="inline-flex items-center gap-1">
            <Star size={10} className="fill-brand-500 text-brand-500" /> Highlighted features are the ones most resellers use daily.
          </span>
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {BENTO_GROUPS.map((group, gi) => {
          const a = accentMap[group.accent];
          return (
            <div
              key={gi}
              className={`group flex flex-col rounded-2xl border ${a.border} bg-white p-5 sm:p-6 transition-all hover:shadow-xl`}
            >
              <Link
                href={group.href}
                className="mb-5 flex items-center justify-between no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${a.light}`}>
                    <group.icon size={20} className={a.text} />
                  </div>
                  <h4 className="font-display text-lg font-bold text-ink-900">{group.title}</h4>
                </div>
                <span className={`flex h-7 items-center rounded-full ${a.light} px-3 font-mono text-xs font-bold ${a.text}`}>
                  {group.features.length}
                </span>
              </Link>

              <div className="flex-1 space-y-1">
                {group.features.map((f, fi) => {
                  const hasDetail = !!FEATURE_DETAILS[f.title];
                  const isHero = !!f.highlight;
                  return (
                    <button
                      key={fi}
                      onClick={() => hasDetail && onFeatureClick(f)}
                      disabled={!hasDetail}
                      className={`flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left transition-colors ${
                        isHero
                          ? 'bg-brand-500/5 hover:bg-brand-500/10 cursor-pointer'
                          : hasDetail
                          ? 'hover:bg-ink-50 cursor-pointer'
                          : 'cursor-default opacity-60'
                      }`}
                    >
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded ${isHero ? 'bg-brand-500' : ''}`}>
                        <f.icon size={13} className={isHero ? 'text-white' : a.text} />
                      </div>
                      <span className={`text-xs ${isHero ? 'font-bold text-brand-700' : 'font-medium text-ink-700'}`}>{f.title}</span>
                      {isHero && (
                        <Star size={10} className="ml-auto shrink-0 fill-brand-500 text-brand-500" />
                      )}
                      {hasDetail && !isHero && (
                        <span className="ml-auto font-mono text-[8px] text-ink-300 group-hover:text-ink-400">→</span>
                      )}
                    </button>
                  );
                })}
              </div>

              <Link
                href={group.href}
                className={`mt-5 flex items-center gap-2 border-t pt-4 text-sm font-bold ${a.text} transition-all hover:gap-3 no-underline`}
              >
                Explore {group.title} <ArrowRight size={15} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Main component ── */
export function FeatureJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const stage = STAGES[activeStage];
  const Mockup = MOCKUPS[stage.id];
  const totalFeatures = BENTO_GROUPS.reduce((sum, g) => sum + g.features.length, 0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedFeature]);

  return (
    <div>
      {/* ── Journey header ── */}
      <div className="mb-8 text-center sm:mb-14">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-ink-200 sm:w-24" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-600">Every tool in the box</span>
          <div className="h-px w-12 bg-ink-200 sm:w-24" />
        </div>
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-4xl sm:text-5xl">
          <span className="text-brand-500">{totalFeatures}+</span> features. One subscription.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink-500 sm:text-lg">
          From sourcing to scaling — every stage of your Vinted business, handled.
        </p>
        <p className="mt-3 text-sm font-medium text-ink-400">
          Click a stage to see how Vintify handles that part of your reselling workflow.
        </p>
      </div>

      {/* ── Interactive stepper ── */}
      <div className="mb-10">
        <div className="hidden md:flex items-center justify-between gap-2 rounded-2xl border border-ink-200 bg-ink-50 p-3">
          {STAGES.map((s, idx) => {
            const isActive = idx === activeStage;
            const isPassed = idx < activeStage;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStage(idx)}
                className="group relative flex flex-1 flex-col items-center gap-2"
              >
                {idx > 0 && (
                  <div className={`absolute -left-1 top-5 h-0.5 w-2 transition-colors ${isPassed || isActive ? 'bg-brand-500' : 'bg-ink-200'}`} />
                )}
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? 'border-brand-500 bg-brand-500 text-white scale-110 shadow-lg shadow-brand-500/30'
                    : isPassed
                    ? 'border-brand-500 bg-brand-500/10 text-brand-600'
                    : 'border-ink-300 bg-white text-ink-600 group-hover:border-brand-300'
                }`}>
                  <Icon size={18} />
                </div>
                <span className={`text-xs font-semibold transition-colors ${isActive ? 'text-brand-600' : isPassed ? 'text-brand-600/70' : 'text-ink-600'}`}>
                  {s.label}
                </span>
                <span className={`font-mono text-[9px] ${isActive ? 'text-brand-600' : 'text-ink-300'}`}>
                  {s.features.length} tools
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:hidden">
          {STAGES.map((s, idx) => {
            const isActive = idx === activeStage;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStage(idx)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  isActive ? 'border-brand-500 bg-brand-500 text-white' : 'border-ink-200 bg-white text-ink-500'
                }`}
              >
                <Icon size={16} />
                {s.label}
                <span className={`ml-1 rounded-full px-1.5 py-0.5 font-mono text-[9px] font-bold ${isActive ? 'bg-white/20' : 'bg-ink-100'}`}>
                  {s.features.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active stage content — mockup + feature pills ── */}
      <div key={stage.id} className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
        {/* Left — Stage info + feature pills */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 shadow-lg shadow-brand-500/30">
              <stage.icon size={24} className="text-white" />
            </div>
            <div>
              <p className="section-label">Stage {activeStage + 1} of {STAGES.length}</p>
              <p className="font-display text-sm font-semibold text-brand-600">{stage.label} · {stage.features.length} tools</p>
            </div>
          </div>

          <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            {stage.title}
          </h3>
          <p className="mt-4 text-ink-500 leading-relaxed">
            {stage.description}
          </p>

          {/* Feature pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {stage.features.map((f, i) => {
              const hasDetail = !!FEATURE_DETAILS[f.title];
              const isHero = !!f.highlight;
              return (
                <button
                  key={i}
                  onClick={() => hasDetail && setSelectedFeature(f)}
                  disabled={!hasDetail}
                  className={`flex items-center gap-2 rounded-full border px-3 py-2 transition-all ${
                    isHero
                      ? 'border-brand-500 bg-brand-500/10 hover:bg-brand-500/20 hover:border-brand-600'
                      : hasDetail
                      ? 'border-ink-200 bg-white hover:border-brand-300 hover:bg-brand-50/30 cursor-pointer'
                      : 'border-ink-200 bg-white cursor-default opacity-60'
                  }`}
                  style={{ animation: 'fadeUp 0.3s ease-out forwards', animationDelay: `${i * 60}ms`, opacity: 0 }}
                >
                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${isHero ? 'bg-brand-500' : 'bg-brand-500/10'}`}>
                    <f.icon size={13} className={isHero ? 'text-white' : 'text-brand-600'} />
                  </div>
                  <span className={`text-xs font-semibold ${isHero ? 'text-brand-700' : 'text-ink-700'}`}>{f.title}</span>
                  {isHero && (
                    <Star size={10} className="fill-brand-500 text-brand-500" />
                  )}
                  {hasDetail && !isHero && (
                    <span className="font-mono text-[8px] text-ink-300">→</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="mt-8 flex items-center gap-2">
            {STAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`h-2 rounded-full transition-all ${idx === activeStage ? 'w-8 bg-brand-500' : 'w-2 bg-ink-200 hover:bg-ink-300'}`}
                aria-label={`Go to stage ${idx + 1}`}
              />
            ))}
          </div>

          {activeStage < STAGES.length - 1 ? (
            <button
              onClick={() => setActiveStage(activeStage + 1)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-all hover:gap-4"
            >
              Next: {STAGES[activeStage + 1].label} <ArrowRight size={16} />
            </button>
          ) : (
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600">
              <Check size={16} /> That is everything. {totalFeatures}+ features, all included.
            </div>
          )}
        </div>

        {/* Right — Product mockup in browser frame */}
        <div style={{ animation: 'fadeUp 0.5s ease-out forwards', opacity: 0 }} className="relative">
          <div className="absolute inset-x-4 -top-4 -bottom-4 rounded-[32px] bg-brand-500/8 blur-3xl" />
          <div className="relative">
            <BrowserFrame url={`app.vintify.co.uk/${stage.id}`}>
              <Mockup />
            </BrowserFrame>
          </div>
        </div>
      </div>

      {/* ── Bento grid — all features at a glance ── */}
      <div className="mt-20 text-center">
        <p className="text-sm font-medium text-ink-400">
          That's just the workflow. Below, every feature is broken down by engine.
        </p>
      </div>
      <FeatureBentoGrid onFeatureClick={setSelectedFeature} />

      {/* ── Feature detail modal ── */}
      <FeatureDetailModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
    </div>
  );
}
