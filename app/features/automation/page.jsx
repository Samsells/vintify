import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/site';
import {
  ArrowRight, Zap, Tag, RefreshCw, Printer, Truck, Clock,
  ShoppingBag, Boxes, Link2, FileText, Settings, Shield,
  Check, X, Package, Search, Layers,
} from 'lucide-react';
import { FeatureSubNav, FeaturePrevNext } from '@/components/FeatureSubNav';

export const metadata = {
  title: 'Automation — Bulk Edit, Auto-Repost, Label Hub, Auto-Lister | Vintify',
  description: 'Bulk edit prices and SKUs across hundreds of listings. Auto-repost and schedule reposts. Schedule price drops. Import all Vinted shipping labels into one Label Hub. Auto-list with AI. Automate the busywork.',
  keywords: ['vinted bulk edit', 'vinted auto repost', 'vinted label hub', 'vinted auto lister', 'vinted shipping labels', 'vinted bulk listing', 'vinted automation tool', 'vinted SKU generator'],
  alternates: {
    canonical: 'https://vintify.co.uk/features/automation',
  },
  openGraph: {
    title: 'Vintify Automation — Bulk Edit, Auto-Repost & Label Hub',
    description: 'Bulk edit, auto-repost, scheduled price drops, Label Hub, and AI auto-lister. Automate the busywork.',
    url: 'https://vintify.co.uk/features/automation',
  },
  twitter: {
    title: 'Vintify Automation — Bulk Edit, Auto-Repost & Label Hub',
    description: 'Bulk edit, auto-repost, scheduled price drops, Label Hub, and AI auto-lister. Automate the busywork.',
    card: 'summary_large_image',
  },
};

const PROBLEMS = [
  {
    problem: 'Editing listings one by one is torture.',
    detail: 'You need to drop prices on 50 items for a weekend sale. So you open each listing, edit the price, save, go back, open the next one. 50 items × 30 seconds each = 25 minutes of mind-numbing clicking. And that\'s just one task.',
    solution: 'Bulk edit prices across hundreds of listings at once.',
    solutionDetail: 'Select multiple listings (or all of them) and update prices in bulk. Apply a percentage discount (e.g., 20% off everything) or set absolute prices. Preview the changes before applying. 50 items in 10 seconds, not 25 minutes.',
    icon: Tag,
  },
  {
    problem: 'Your listings have no SKUs.',
    detail: 'You have 300 live listings and not one has a SKU. Your accountant asks for inventory codes. You want to track items properly. But going through 300 listings to manually add SKUs? That\'s a full day\'s work.',
    solution: 'Bulk assign SKUs to existing listings.',
    solutionDetail: 'Configure your own SKU format with variables (brand, category, date, sequence). Generate and assign SKUs to multiple existing listings at once. Preview before applying. Choose to overwrite existing SKUs or skip them. 300 listings done in under a minute.',
    icon: Tag,
  },
  {
    problem: 'Reposting is manual and repetitive.',
    detail: 'You know reposting stale items helps them sell, but you have to delete the old listing, create a new one, re-upload photos, re-write the title and description, and re-set the price. For each item. One at a time.',
    solution: 'Bulk repost and auto-repost.',
    solutionDetail: 'Select multiple stale listings and repost them all at once — Vintify handles the delete-and-relist cycle automatically. Or enable auto-repost: Vintify detects stale listings and reposts them on your schedule, using AI-rewritten titles and descriptions to bypass duplicate detection. Zero manual work.',
    icon: RefreshCw,
  },
  {
    problem: 'You forget to repost at the right times.',
    detail: 'Reposting on Sunday evening gets more views than Monday morning. But you\'re having dinner with your family on Sunday. You keep meaning to set a reminder, but you never do. The optimal window passes.',
    solution: 'Schedule reposts and price drops.',
    solutionDetail: 'Set a schedule and Vintify does the rest. Schedule reposts for Sunday at 7pm. Schedule price drops for Saturday morning when traffic peaks. Set it once, and it runs every week automatically. You enjoy your dinner.',
    icon: Clock,
  },
  {
    problem: 'Your shipping labels are scattered.',
    detail: 'You have 12 orders to ship. That means opening 12 Vinted order pages, downloading 12 PDF labels, and then printing them one by one. It takes 20 minutes just to get the labels ready. Then you have to match them to orders.',
    solution: 'Label Hub — all your labels in one place.',
    solutionDetail: 'Vintify imports all your Vinted shipping labels into one Label Hub. View every label, sorted by dispatch deadline. Print them all at once — one click, one print job. QR-ready labels for InPost. No more opening 12 tabs. No more matching labels to orders. Everything in one place, ready to print.',
    icon: Printer,
  },
  {
    problem: 'Listing new items is a bottleneck.',
    detail: 'You come back from a sourcing trip with 30 items. You need to photograph, title, describe, price, and list each one. Even at 5 minutes per item, that\'s 2.5 hours before any of them are live and earning.',
    solution: 'Auto-lister with AI writing tools.',
    solutionDetail: 'Type a few words about each item. AI generates the title, description, hashtags, suggested price, and Vinted category. Review and push to Vinted in one click. 30 items listed in 30 minutes. Your sourcing trip turns into live listings before the day is over.',
    icon: Zap,
  },
];

const EXTRA_FEATURES = [
  { title: 'Bulk Vinted actions', description: 'Delete or relist multiple items on Vinted directly from Vintify. No need to open Vinted in another tab.', icon: Zap },
  { title: 'Stale listing detection', description: 'Identifies listings live too long without selling. Flags them with views, favourites, and days listed.', icon: RefreshCw },
  { title: 'Carrier auto-detection', description: 'Auto-detects Evri, InPost, Yodel, and Royal Mail from shipping labels. No manual entry.', icon: Truck },
  { title: 'Dispatch deadlines', description: 'See dispatch deadlines for every order. Never miss a Vinted shipping deadline and protect your rating.', icon: Clock },
  { title: 'Tracking numbers', description: 'Every order tracking number synced and displayed. Click to track on the carrier website.', icon: FileText },
  { title: 'Shipping lifecycle', description: 'Track every order from needs sending through in transit to delivered. Visual pipeline.', icon: Truck },
  { title: 'Manual status overrides', description: 'Override shipping status when Vinted data is stale or wrong. Keep your dashboard accurate.', icon: Settings },
  { title: 'Purchase tracking', description: 'Log every sourcing trip with date, cost, and items. Track ROI per trip.', icon: ShoppingBag },
  { title: 'Bulk lot splitting', description: 'Buy 50 items for £200, split into units at £4 each. Every item gets its own cost basis.', icon: Boxes },
  { title: 'Smart Matches', description: 'Auto-links purchases to live Vinted listings with confidence scoring. Accept or reject individually.', icon: Link2 },
  { title: 'Auto-match engine', description: 'Enable auto-matching to link purchases to listings without lifting a finger. Toggle on or off.', icon: Zap },
  { title: 'CSV export', description: 'Export full inventory with cost, revenue, profit, and ROI data to CSV at any time.', icon: FileText },
];

export default function AutomationPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16 lg:pt-20">
      <FeatureSubNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="container-max container-px relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5">
              <Zap size={14} className="text-brand-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">3 of 3 — Task Automation</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Automate the <span className="text-brand-500">busywork</span>. Focus on sourcing.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-500">
              Bulk edit prices and SKUs. Auto-repost and schedule reposts. Schedule price drops. Import all shipping labels into one Label Hub. Auto-list with AI. Turn hours of clicking into seconds.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={SIGNUP_URL} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 active:scale-95 sm:w-auto">
                Start free trial <ArrowRight size={18} />
              </a>
              <Link href="/features" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink-200 px-8 py-4 text-lg font-bold text-ink-900 transition-all hover:bg-ink-100 sm:w-auto">
                All features
              </Link>
            </div>
          </div>

          {/* Product mockup — Bulk edit + Label Hub */}
          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute -inset-16 rounded-full bg-brand-500/10 blur-glow" />
            <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-2 shadow-2xl">
              <div className="mb-2 flex items-center gap-2 border-b border-ink-200 bg-ink-100/30 p-3">
                <div className="h-2.5 w-2.5 rounded-full bg-accent-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div className="ml-4 flex h-6 items-center rounded-full border border-ink-200 bg-white px-4 font-mono text-[10px] text-ink-400">
                  app.vintify.co.uk/listings
                </div>
              </div>
              <div className="w-full bg-white p-4">
                {/* Bulk edit bar */}
                <div className="mb-4 flex items-center justify-between rounded-xl border border-brand-300 bg-brand-500/5 p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-500">
                      <Layers size={14} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-ink-900">12 selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg border border-ink-200 bg-white px-3 py-1.5 font-mono text-[10px] font-bold text-ink-500">-10% price</button>
                    <button className="rounded-lg border border-ink-200 bg-white px-3 py-1.5 font-mono text-[10px] font-bold text-ink-500">Assign SKU</button>
                    <button className="rounded-lg border border-ink-200 bg-white px-3 py-1.5 font-mono text-[10px] font-bold text-ink-500">Repost all</button>
                    <button className="rounded-lg bg-brand-500 px-3 py-1.5 font-mono text-[10px] font-bold text-white">Apply</button>
                  </div>
                </div>

                {/* Listings table */}
                <div className="space-y-2">
                  {[
                    { name: 'Nike Tech Fleece Hoodie', price: '£28.00', sku: 'NIR-HOD-001', status: 'stale', days: 18 },
                    { name: 'Adidas Track Jacket', price: '£22.00', sku: 'ADI-TRK-002', status: 'stale', days: 21 },
                    { name: 'Levi 501 Jeans W32', price: '£18.00', sku: 'LEV-JEA-003', status: 'active', days: 5 },
                    { name: 'Zara Oversized Blazer', price: '£15.00', sku: 'ZAR-BLA-004', status: 'stale', days: 25 },
                    { name: 'Patagonia Fleece M', price: '£35.00', sku: 'PAT-FLE-005', status: 'active', days: 3 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-lg border border-ink-200 bg-ink-50 px-3 py-2.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-brand-500 bg-brand-500">
                        <Check size={12} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-ink-900">{item.name}</p>
                        <p className="font-mono text-[10px] text-ink-400">SKU: {item.sku}</p>
                      </div>
                      <span className="font-mono text-xs font-medium text-ink-900">{item.price}</span>
                      {item.status === 'stale' ? (
                        <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 font-mono text-[9px] font-bold text-amber-600">
                          <Clock size={9} /> {item.days}d stale
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-600">
                          <Check size={9} /> {item.days}d live
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Label Hub preview */}
                <div className="mt-4 rounded-xl border border-ink-200 bg-ink-50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Printer size={16} className="text-brand-600" />
                      <p className="text-xs font-bold text-ink-900">Label Hub</p>
                    </div>
                    <button className="flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1.5 font-mono text-[10px] font-bold text-white">
                      <Printer size={11} /> Print all 12 labels
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { carrier: 'Evri', id: 'VNT-4821', urgent: true },
                      { carrier: 'InPost', id: 'VNT-4818', urgent: true },
                      { carrier: 'Royal Mail', id: 'VNT-4805', urgent: false },
                      { carrier: 'Yodel', id: 'VNT-4799', urgent: false },
                    ].map((label, i) => (
                      <div key={i} className={`rounded-lg border p-2 ${label.urgent ? 'border-accent-300 bg-accent-500/5' : 'border-ink-200 bg-white'}`}>
                        <p className="font-mono text-[9px] text-ink-400">{label.id}</p>
                        <p className="text-[10px] font-semibold text-ink-900">{label.carrier}</p>
                        {label.urgent && <p className="font-mono text-[8px] font-bold text-accent-600">Dispatch today</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem → Solution sections ── */}
      <section className="bg-ink-100 py-16 sm:py-24">
        <div className="container-max container-px">
          <div className="mb-8 sm:mb-16 text-center">
            <p className="section-label mb-3">The Problems We Solve</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              The repetitive tasks — automated.
            </h2>
          </div>

          <div className="space-y-8">
            {PROBLEMS.map((item, i) => (
              <div key={i} className="grid gap-6 rounded-2xl border border-ink-200 bg-white p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                      <X size={20} className="text-accent-600" />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-600">The Problem</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-900">{item.problem}</h3>
                  <p className="mt-3 text-ink-500 leading-relaxed">{item.detail}</p>
                </div>
                <div className="lg:border-l lg:border-ink-200 lg:pl-12">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                      <item.icon size={20} className="text-brand-600" />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-600">The Vintify Way</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-900">{item.solution}</h3>
                  <p className="mt-3 text-ink-500 leading-relaxed">{item.solutionDetail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Extra features grid ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-max container-px">
          <div className="mb-8 sm:mb-16 max-w-2xl">
            <p className="section-label mb-3">Also Included</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Everything else Automation does.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-3">
            {EXTRA_FEATURES.map((f, i) => (
              <div key={i} className="bg-white p-6 transition-colors hover:bg-brand-50/30">
                <f.icon size={22} className="text-brand-600" />
                <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink-100 py-16 sm:py-24">
        <div className="container-max container-px">
          <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-ink-200 bg-white p-6 text-center shadow-xl sm:p-16 sm:rounded-[40px]">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-500/5 blur-glow transition-all group-hover:scale-125" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-500/5 blur-glow transition-all group-hover:scale-125" />
            <h2 className="relative z-10 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Turn hours of clicking into seconds.
            </h2>
            <p className="relative z-10 mx-auto mt-6 max-w-xl text-lg text-ink-500">
              Bulk editing, auto-reposting, scheduled drops, Label Hub, and AI auto-lister — all included. Stop doing busywork. Start scaling.
            </p>
            <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={SIGNUP_URL} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 active:scale-95 sm:w-auto">
                Start free trial <ArrowRight size={18} />
              </a>
              <Link href="/features/accounting" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink-200 px-8 py-4 text-lg font-bold text-ink-900 transition-all hover:bg-ink-100 sm:w-auto">
                Explore Accounting <ArrowRight size={18} />
              </Link>
            </div>
            <p className="relative z-10 mt-5 text-xs font-semibold uppercase tracking-widest text-ink-400">7-day free trial · Cancel anytime</p>
          </div>
        </div>
      </section>
      <FeaturePrevNext />
    </div>
  );
}
