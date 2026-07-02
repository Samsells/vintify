import {
  LayoutDashboard, BarChart3, BadgePoundSterling, Users, PackageOpen, Boxes,
  Link2, ShoppingBag, Sparkles, MessageSquare, Truck, Printer, Target,
  Receipt, Calculator, Landmark, Wallet, Tag, ShieldAlert, ArrowUpRight,
} from 'lucide-react';
import Image from 'next/image';

// Faithful, static reproduction of the REAL /crm/dashboard screen
// (Vintify-CRM → CrmDashboardPage). Layout, nav groups, cards, copy, and
// colours mirror the live product's light theme tokens, so raw hex values are
// used deliberately — this must NOT inherit the marketing site's dark theme.
//
//   bg #F6F8FB · surface #FFF · ink #0B1220 · muted #64748B
//   border rgba(15,23,42,0.06) · accent #2563EB · green #059669
//   amber #F59E0B · red #EF4444

const BORDER = 'rgba(15,23,42,0.06)';

const NAV_GROUPS = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, active: true },
      { label: 'Analytics', icon: BarChart3 },
      { label: 'Sales', icon: BadgePoundSterling },
      { label: 'Customers', icon: Users },
    ],
  },
  {
    label: 'Sourcing',
    items: [
      { label: 'Purchases', icon: PackageOpen },
      { label: 'Inventory', icon: Boxes },
      { label: 'Matches', icon: Link2, badge: 3 },
    ],
  },
  {
    label: 'Selling',
    items: [
      { label: 'Listings', icon: ShoppingBag },
      { label: 'Auto Lister', icon: Sparkles },
      { label: 'Inbox', icon: MessageSquare, badge: 4 },
    ],
  },
  {
    label: 'Fulfilment',
    items: [
      { label: 'Shipping', icon: Truck },
      { label: 'Label Hub', icon: Printer },
    ],
  },
  {
    label: 'Finance',
    items: [
      { label: 'Goals', icon: Target },
      { label: 'Expenses', icon: Receipt },
      { label: 'Accounting', icon: Calculator },
      { label: 'Tax', icon: Landmark },
    ],
  },
];

const ACTION_ROWS = [
  { icon: Truck, color: '#059669', label: 'Needs dispatch', hint: 'Sold & paid — ready to post', value: 3 },
  { icon: MessageSquare, color: '#F59E0B', label: 'Unread messages', hint: 'Buyers waiting on a reply', value: 4 },
  { icon: Tag, color: '#2563EB', label: 'Offers to review', hint: 'Pending price offers', value: 2 },
  { icon: ShieldAlert, color: '#EF4444', label: 'Sales missing cost', hint: 'Add what you paid to see true profit', value: 2 },
  { icon: Sparkles, color: '#F59E0B', label: 'Stale listings', hint: 'Low interest — consider relisting', value: 5 },
];

// Smooth-ish area paths for the Revenue & profit chart (viewBox 0 0 100 40).
const REVENUE_PATH = 'M0,30 C6,27 10,24 16,25 C22,26 26,18 33,17 C40,16 44,22 50,20 C56,18 60,10 67,11 C74,12 78,17 84,14 C90,11 94,7 100,6';
const PROFIT_PATH = 'M0,36 C6,35 10,33 16,34 C22,35 26,30 33,29 C40,28 44,32 50,31 C56,30 60,25 67,26 C74,27 78,29 84,27 C90,25 94,23 100,21';

function NavItem({ item }) {
  return (
    <div
      className="flex items-center gap-2 rounded-md px-2 py-[5px]"
      style={item.active ? { background: 'rgba(37,99,235,0.08)', color: '#2563EB' } : { color: '#64748B' }}
    >
      <item.icon size={11} strokeWidth={2.2} style={{ flexShrink: 0 }} />
      <span className="text-[9px] font-semibold">{item.label}</span>
      {item.badge && (
        <span
          className="ml-auto rounded-full px-1 text-[8px] font-bold leading-[13px]"
          style={{ background: '#2563EB', color: '#fff', minWidth: 13, textAlign: 'center' }}
        >
          {item.badge}
        </span>
      )}
    </div>
  );
}

function StatBlock({ label, value, tone }) {
  return (
    <div>
      <p className="text-[8px] font-semibold uppercase tracking-wide" style={{ color: '#94A3B8' }}>{label}</p>
      <p className="mt-0.5 text-[11px] font-bold" style={{ color: tone || '#0B1220', fontVariantNumeric: 'tabular-nums' }}>{value}</p>
    </div>
  );
}

export default function CrmMockup() {
  return (
    <div className="flex w-full text-left" style={{ background: '#F6F8FB', minHeight: 540 }}>
      {/* ── Sidebar (real nav groups) ── */}
      <aside
        className="hidden w-[148px] shrink-0 flex-col sm:flex"
        style={{ background: '#FFFFFF', borderRight: `1px solid ${BORDER}` }}
      >
        <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <Image src="/logo/app-icon.png" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded" />
          <span className="text-[11px] font-bold" style={{ color: '#0B1220' }}>Vintify</span>
        </div>
        <div className="flex-1 space-y-2 overflow-hidden p-2">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="px-2 pb-0.5 text-[7px] font-bold uppercase tracking-[0.08em]" style={{ color: '#94A3B8' }}>
                {group.label}
              </p>
              <div className="space-y-px">
                {group.items.map((item) => <NavItem key={item.label} item={item} />)}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3 sm:p-4">
        {/* Header — greeting + sync + period segmented control */}
        <div className="flex items-end justify-between gap-2">
          <div>
            <h3 className="text-[13px] font-semibold tracking-tight" style={{ color: '#0B1220' }}>Good morning, Sam</h3>
            <p className="mt-0.5 flex items-center gap-1.5 text-[8.5px]" style={{ color: '#64748B' }}>
              <span
                className="inline-block h-[5px] w-[5px] rounded-full"
                style={{ background: '#4ADE80', boxShadow: '0 0 0 2px rgba(74,222,128,0.18)' }}
              />
              Here&apos;s how your Vinted business is doing — last 30 days at a glance. · synced 2m ago
            </p>
          </div>
          <div className="flex rounded-lg p-0.5" style={{ background: '#F1F4F9', border: `1px solid ${BORDER}` }}>
            {['7D', '30D', '90D', 'All'].map((p) => (
              <span
                key={p}
                className="rounded-md px-1.5 py-0.5 text-[8px] font-bold"
                style={p === '30D' ? { background: '#FFFFFF', color: '#0B1220', boxShadow: '0 1px 2px rgba(15,23,42,0.08)' } : { color: '#64748B' }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Hero — net profit + mini stats */}
        <div className="rounded-xl p-3" style={{ background: '#FFFFFF', border: `1px solid ${BORDER}` }}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-wide" style={{ color: '#94A3B8' }}>Net profit · 30 days</p>
              <div className="mt-0.5 flex items-baseline gap-2">
                <span className="text-[22px] font-bold leading-none tracking-tight" style={{ color: '#0B1220', fontVariantNumeric: 'tabular-nums' }}>
                  £1,284.50
                </span>
                <span
                  className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[8px] font-bold"
                  style={{ background: 'rgba(5,150,105,0.1)', color: '#059669' }}
                >
                  <ArrowUpRight size={9} strokeWidth={2.6} /> 18.2%
                </span>
                <span className="text-[8px]" style={{ color: '#94A3B8' }}>vs last month</span>
              </div>
            </div>
            <div className="flex gap-5">
              <StatBlock label="Revenue" value="£4,102.30" />
              <StatBlock label="Sales" value="87" />
              <StatBlock label="Avg order" value="£14.60" />
              <StatBlock label="Sell-through" value="38%" tone="#059669" />
            </div>
          </div>
        </div>

        {/* Primary grid — chart + action queue */}
        <div className="grid min-h-0 flex-1 gap-2.5 lg:grid-cols-[2fr_1fr]">
          {/* Revenue & profit chart card */}
          <div className="flex flex-col rounded-xl p-3" style={{ background: '#FFFFFF', border: `1px solid ${BORDER}` }}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[10px] font-bold" style={{ color: '#0B1220' }}>Revenue &amp; profit</p>
                <p className="text-[8px]" style={{ color: '#94A3B8' }}>Net of costs across the selected period</p>
              </div>
              <div className="flex gap-1">
                <span className="rounded-full px-1.5 py-0.5 text-[7.5px] font-semibold" style={{ background: '#F1F4F9', color: '#64748B' }}>87 sales</span>
                <span className="rounded-full px-1.5 py-0.5 text-[7.5px] font-semibold" style={{ background: '#F1F4F9', color: '#64748B' }}>£14.60 avg order</span>
              </div>
            </div>
            <div className="mt-2 flex gap-4">
              <span className="flex items-center gap-1 text-[8px] font-semibold" style={{ color: '#64748B' }}>
                <span className="h-[6px] w-[6px] rounded-sm" style={{ background: '#2563EB' }} /> Revenue <b style={{ color: '#0B1220' }}>£4,102</b>
              </span>
              <span className="flex items-center gap-1 text-[8px] font-semibold" style={{ color: '#64748B' }}>
                <span className="h-[6px] w-[6px] rounded-sm" style={{ background: '#059669' }} /> Profit <b style={{ color: '#0B1220' }}>£1,284</b>
              </span>
            </div>
            {/* Area chart — two series, same construction as the real recharts config */}
            <div className="relative mt-2 flex-1" style={{ minHeight: 130 }}>
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
                {[10, 20, 30].map((y) => (
                  <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="rgba(15,23,42,0.06)" strokeWidth="0.3" />
                ))}
                <path d={`${REVENUE_PATH} L100,40 L0,40 Z`} fill="#2563EB" fillOpacity="0.07" />
                <path d={REVENUE_PATH} fill="none" stroke="#2563EB" strokeWidth="0.7" vectorEffect="non-scaling-stroke" />
                <path d={`${PROFIT_PATH} L100,40 L0,40 Z`} fill="#059669" fillOpacity="0.07" />
                <path d={PROFIT_PATH} fill="none" stroke="#059669" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="absolute inset-x-0 bottom-0 flex justify-between px-1 text-[7px]" style={{ color: '#94A3B8' }}>
                <span>1 Jun</span><span>8 Jun</span><span>15 Jun</span><span>22 Jun</span><span>29 Jun</span>
              </div>
            </div>
          </div>

          {/* Right column — action queue + wallet */}
          <div className="flex flex-col gap-2.5">
            <div className="rounded-xl p-3" style={{ background: '#FFFFFF', border: `1px solid ${BORDER}` }}>
              <p className="text-[10px] font-bold" style={{ color: '#0B1220' }}>Needs your attention</p>
              <p className="text-[8px]" style={{ color: '#94A3B8' }}>Clear these to keep buyers happy and your books tidy.</p>
              <div className="mt-2 space-y-1">
                {ACTION_ROWS.map((row) => (
                  <div key={row.label} className="flex items-center gap-2 rounded-lg px-1.5 py-1" style={{ background: '#F6F8FB' }}>
                    <span
                      className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md"
                      style={{ background: `color-mix(in srgb, ${row.color} 12%, transparent)`, color: row.color }}
                    >
                      <row.icon size={10} strokeWidth={2.2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[8.5px] font-semibold leading-tight" style={{ color: '#1E293B' }}>{row.label}</p>
                      <p className="truncate text-[7px] leading-tight" style={{ color: '#94A3B8' }}>{row.hint}</p>
                    </div>
                    <span className="text-[10px] font-bold" style={{ color: '#0B1220', fontVariantNumeric: 'tabular-nums' }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vinted wallet */}
            <div className="rounded-xl p-3" style={{ background: '#FFFFFF', border: `1px solid ${BORDER}` }}>
              <p className="text-[10px] font-bold" style={{ color: '#0B1220' }}>Vinted wallet</p>
              <div className="mt-1.5 flex items-center gap-2 rounded-lg px-2 py-1.5" style={{ background: '#F1F4F9' }}>
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
                  style={{ background: 'rgba(37,99,235,0.1)', color: '#2563EB' }}
                >
                  <Wallet size={12} />
                </span>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <p className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: '#94A3B8' }}>Available</p>
                    <p className="text-[12px] font-bold leading-tight" style={{ color: '#059669', fontVariantNumeric: 'tabular-nums' }}>£242.18</p>
                  </div>
                  <div className="h-6 w-px" style={{ background: BORDER }} />
                  <div className="text-right">
                    <p className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: '#94A3B8' }}>Pending</p>
                    <p className="text-[10px] font-semibold leading-tight" style={{ color: '#F59E0B', fontVariantNumeric: 'tabular-nums' }}>£58.40</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
