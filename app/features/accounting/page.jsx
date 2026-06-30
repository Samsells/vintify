import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/site';
import {
  ArrowRight, Calculator, Landmark, Receipt, Boxes, Target,
  BadgePoundSterling, BarChart3, TrendingUp, FileText, Check,
  AlertCircle, Clock, X,
} from 'lucide-react';
import { FeatureSubNav, FeaturePrevNext } from '@/components/FeatureSubNav';

export const metadata = {
  title: 'Accounting — True Profit, HMRC-Ready Reports | Vintify',
  description: 'Know your exact profit on every Vinted sale after fees, shipping, and expenses. HMRC-ready tax reports in seconds. Expense tracking, inventory lot splitting, goal tracking, and real-time analytics.',
  keywords: ['vinted accounting software', 'vinted profit tracker', 'vinted tax report', 'HMRC ready tax reports', 'vinted profit per item', 'vinted expense tracking', 'vinted reseller accounting', 'vinted inventory tracking'],
  alternates: {
    canonical: 'https://vintify.co.uk/features/accounting',
  },
  openGraph: {
    title: 'Vintify Accounting — True Profit & HMRC-Ready Tax Reports',
    description: 'Track exact profit per sale, generate HMRC-ready reports, manage expenses, and monitor goals.',
    url: 'https://vintify.co.uk/features/accounting',
  },
  twitter: {
    title: 'Vintify Accounting — True Profit & HMRC-Ready Tax Reports',
    description: 'Track exact profit per sale, generate HMRC-ready reports, manage expenses, and monitor goals.',
    card: 'summary_large_image',
  },
};

const PROBLEMS = [
  {
    problem: 'You don\'t know your real profit.',
    detail: 'Vinted shows you revenue, but not profit. Fees, shipping costs, packaging, and sourcing costs are scattered across spreadsheets, bank statements, and your head.',
    solution: 'True profit per item — automatically.',
    solutionDetail: 'Every sale gets its true profit calculated: cost price minus Vinted buyer fee, seller fee, shipping, and packaging. No manual entry. No guessing. Just honest numbers on every single item.',
    icon: Calculator,
  },
  {
    problem: 'Tax season is a nightmare.',
    detail: 'You dread January. You spend days pulling together spreadsheets, adding up sales, calculating fees, figuring out what counts as an expense. Your accountant charges extra for the mess.',
    solution: 'HMRC-ready reports in one click.',
    solutionDetail: 'Export CSV or PDF summaries for self-assessment in seconds. Supports both cash basis and traditional (accruals) basis. Includes all sales, fees, expenses, and other income. Hand it straight to your accountant.',
    icon: Landmark,
  },
  {
    problem: 'Expenses are everywhere.',
    detail: 'Packaging rolls from eBay. Postage from the Post Office. Petrol for sourcing trips. Software subscriptions. They\'re all over the place and half of them get forgotten at tax time.',
    solution: 'Track every expense in one place.',
    solutionDetail: 'Log packaging, postage, travel, and software costs with predefined categories. Every expense is automatically deducted from your net profit. See your top expense categories at a glance on the dashboard.',
    icon: Receipt,
  },
  {
    problem: 'Bulk buys are impossible to track.',
    detail: 'You buy 50 items from a wholesaler for £200. Which items sold? What was the cost per unit? What\'s the ROI on that lot? Your spreadsheet says "£200 — various items" and that\'s it.',
    solution: 'Bulk lot splitting with per-unit tracking.',
    solutionDetail: 'Buy 50 items for £200? Split into individual units at £4 each. Every item gets its own cost basis. Edit individual costs when needed. Track ROI per lot and see which sourcing trips deliver the best margins.',
    icon: Boxes,
  },
  {
    problem: 'You have income outside Vinted.',
    detail: 'Maybe you sell on Depop too. Or you do car boot sales. Or you have a part-time job. Your tax return needs everything, but your Vinted spreadsheet only shows Vinted.',
    solution: 'Other income management.',
    solutionDetail: 'Track non-Vinted income sources alongside your reselling revenue for a complete tax picture. Include everything in your HMRC export. One report, all your income.',
    icon: BadgePoundSterling,
  },
  {
    problem: 'You have no idea if you\'re on track.',
    detail: 'Are you having a good month? A bad one? You won\'t know until the month ends and you tally everything up. By then it\'s too late to adjust.',
    solution: 'Real-time goals and targets.',
    solutionDetail: 'Set monthly profit, revenue, items sold, items listed, items sourced, and ROI targets. Watch your progress update in real-time as sales come in. See how close you are at a glance.',
    icon: Target,
  },
];

const DASHBOARD_FEATURES = [
  { title: 'Real-time profit', description: 'Total profit, known profit (excluding unknown-cost items), and delta vs previous period.' },
  { title: 'Sales cadence chart', description: 'Daily or monthly buckets showing revenue, profit, items sold, and items listed.' },
  { title: 'Sell-through rate', description: 'Sold count vs active listings, calculated live. Know how fast inventory moves.' },
  { title: 'Pending revenue', description: 'Sold-but-not-completed order value. Know what\'s in the pipeline.' },
  { title: 'Status mix', description: 'Visual breakdown of orders by status — paid, shipping, transit, delivered, and more.' },
  { title: 'Expense breakdown', description: 'Top expense categories at a glance. Know where your money goes.' },
  { title: 'Goal tracking widget', description: 'Live progress bars for profit, revenue, items sold, items listed, and ROI targets.' },
  { title: 'Action items', description: 'Overdue tasks, missing cost data, stale listings, and orders needing dispatch.' },
  { title: 'Performance analytics', description: 'Best-selling items, best brands, optimal listing days, and data quality insights.' },
  { title: 'Multiple period views', description: 'Switch between 7-day, 30-day, 90-day, and all-time. Charts adapt automatically.' },
];

export default function AccountingPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16 lg:pt-20">
      <FeatureSubNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="container-max container-px relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5">
              <Landmark size={14} className="text-brand-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">1 of 3 — Pro Accounting</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Know your <span className="text-brand-500">exact profit</span>. Stay HMRC-ready.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-500">
              Stop guessing. Stop spreadsheeting. Vintify calculates true profit on every single Vinted sale — after fees, shipping, and expenses — and gives you HMRC-ready reports in one click.
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

          {/* Product mockup — Dashboard */}
          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute -inset-16 rounded-full bg-brand-500/10 blur-glow" />
            <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-2 shadow-2xl">
              <div className="mb-2 flex items-center gap-2 border-b border-ink-200 bg-ink-100/30 p-3">
                <div className="h-2.5 w-2.5 rounded-full bg-accent-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div className="ml-4 flex h-6 items-center rounded-full border border-ink-200 bg-white px-4 font-mono text-[10px] text-ink-400">
                  app.vintify.co.uk/dashboard
                </div>
              </div>
              <div className="w-full bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-display text-sm font-bold text-ink-900">Dashboard</p>
                  <span className="font-mono text-[10px] text-ink-400">Last 30 days</span>
                </div>
                <div className="mb-3 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-ink-200 bg-ink-50 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Net profit</p>
                    <p className="font-display text-2xl font-bold text-ink-900">£3,412</p>
                    <p className="font-mono text-[10px] text-brand-600">+18% vs last month</p>
                  </div>
                  <div className="rounded-xl border border-ink-200 bg-ink-50 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Items sold</p>
                    <p className="font-display text-2xl font-bold text-ink-900">87</p>
                    <p className="font-mono text-[10px] text-brand-600">+12 vs last</p>
                  </div>
                  <div className="rounded-xl border border-ink-200 bg-ink-50 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Avg margin</p>
                    <p className="font-display text-2xl font-bold text-ink-900">42%</p>
                    <div className="mt-1.5 h-1.5 w-full rounded-full bg-ink-200">
                      <div className="h-1.5 w-[42%] rounded-full bg-brand-500" />
                    </div>
                  </div>
                </div>
                <div className="mb-3 rounded-xl border border-ink-200 bg-ink-50 p-4">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-ink-400">Daily profit · 30 days</p>
                  <div className="flex h-24 items-end gap-1">
                    {[40, 55, 30, 70, 45, 60, 35, 80, 50, 65, 42, 90, 55, 70, 48, 75, 60, 85, 50, 95, 68, 72, 55, 88, 62, 78, 45, 92, 70, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-brand-300" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-ink-200 bg-ink-50 p-4">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-ink-400">Profit breakdown</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-ink-500">Revenue</span>
                        <span className="font-mono font-medium text-ink-900">£8,450</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-ink-500">Item costs</span>
                        <span className="font-mono font-medium text-ink-900">-£3,820</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-ink-500">Vinted fees</span>
                        <span className="font-mono font-medium text-ink-900">-£845</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-ink-500">Expenses</span>
                        <span className="font-mono font-medium text-ink-900">-£373</span>
                      </div>
                      <div className="flex justify-between border-t border-ink-200 pt-2 text-xs">
                        <span className="font-bold text-ink-900">Net profit</span>
                        <span className="font-mono font-bold text-brand-600">£3,412</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-ink-200 bg-ink-50 p-4">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-ink-400">Monthly goal</p>
                    <p className="font-display text-2xl font-bold text-ink-900">£5,000</p>
                    <div className="mt-3 h-2.5 w-full rounded-full bg-ink-200">
                      <div className="h-2.5 w-[68%] rounded-full bg-brand-500" />
                    </div>
                    <p className="mt-2 font-mono text-[10px] text-brand-600">68% · £1,588 to go</p>
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
              Every reseller\'s accounting nightmare — solved.
            </h2>
          </div>

          <div className="space-y-8">
            {PROBLEMS.map((item, i) => (
              <div key={i} className="grid gap-6 rounded-2xl border border-ink-200 bg-white p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
                {/* Problem */}
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
                {/* Solution */}
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

      {/* ── Dashboard features grid ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-max container-px">
          <div className="mb-8 sm:mb-16 max-w-2xl">
            <p className="section-label mb-3">Dashboard & Analytics</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Every number that matters. On one screen.
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Real-time profit, sell-through rate, pending revenue, sales cadence charts, status mix, expense breakdowns, goal progress, and action items — all live, all in one dashboard.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-3">
            {DASHBOARD_FEATURES.map((f, i) => (
              <div key={i} className="bg-white p-6 transition-colors hover:bg-brand-50/30">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500">
                    <Check size={12} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{f.title}</p>
                    <p className="mt-1 text-xs text-ink-500 leading-relaxed">{f.description}</p>
                  </div>
                </div>
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
              Stop guessing. Start knowing.
            </h2>
            <p className="relative z-10 mx-auto mt-6 max-w-xl text-lg text-ink-500">
              Join 5,000+ professional resellers who know their exact profit on every sale and never dread tax season again.
            </p>
            <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={SIGNUP_URL} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 active:scale-95 sm:w-auto">
                Start free trial <ArrowRight size={18} />
              </a>
              <Link href="/features/growth-bot" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink-200 px-8 py-4 text-lg font-bold text-ink-900 transition-all hover:bg-ink-100 sm:w-auto">
                Explore Growth Bot <ArrowRight size={18} />
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
