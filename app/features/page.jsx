import Link from 'next/link';
import { 
  ArrowRight, LayoutDashboard, BarChart3, BadgePoundSterling,
  Boxes, Link2, ShoppingBag, Sparkles, MessageSquare,
  Truck, Printer, Target, Receipt, Landmark,
  Bot, TrendingUp, Calculator, FileText, Zap, Settings,
  Check, Tag, MessageCircle, RefreshCw, Shield
} from 'lucide-react';

export const metadata = {
  title: 'Features',
  description: 'Accounting, growth automation, sourcing, selling, fulfilment, analytics, and sync — explore every Vintify feature in depth.',
};

const FEATURE_GROUPS = [
  {
    label: '01 — Accounting & Finance',
    title: 'Accounting software built for Vinted resellers.',
    description: 'Track every penny. Know your true profit per item. Generate HMRC-ready reports in seconds. Manage expenses, inventory costs, and monthly targets.',
    features: [
      { title: 'True profit per item', description: 'Cost price minus Vinted fees, shipping, and expenses — calculated automatically on every sale. No spreadsheets, no guessing.', icon: Calculator },
      { title: 'HMRC-ready tax reports', description: 'Export CSV or PDF summaries for self-assessment. Supports both cash basis and traditional (accruals) basis. Includes other income tracking.', icon: Landmark },
      { title: 'Expense tracking', description: 'Log packaging, postage, travel, and software costs with predefined categories. Automatically deducted from your net profit.', icon: Receipt },
      { title: 'Inventory lot tracking', description: 'Buy a bulk lot for £100, split into 10 items, see cost-per-unit instantly. Track ROI per lot and link items to individual sales.', icon: Boxes },
      { title: 'Other income management', description: 'Track non-Vinted income sources alongside your reselling revenue for a complete tax picture. Include everything in your tax export.', icon: BadgePoundSterling },
      { title: 'Monthly profit target', description: 'Set a monthly profit goal and watch your progress update in real-time as sales come in. See how close you are to your target at a glance.', icon: Target },
    ],
  },
  {
    label: '02 — Growth Bot',
    title: 'Automate your listings. Sell more in less time.',
    description: 'Our AI growth bot writes listings, drops prices on stale items, handles offers automatically, rewrites for reposting, suggests inbox replies, and pushes everything to Vinted.',
    features: [
      { title: 'AI listing writer', description: 'Type "Nike hoodie red medium" — get a full SEO-optimized title, description, and hashtags instantly. Suggests Vinted categories too.', icon: Sparkles },
      { title: 'One-click Vinted listing', description: 'Push drafted listings straight to Vinted via our secure Chrome extension. No copy-pasting, no switching tabs.', icon: Zap },
      { title: 'Auto price-drop bot', description: 'Runs every 12 minutes while your CRM is open. Finds stale listings, drops their price by your configured %, respects lifetime floor and cost floor, and pings users who favourited the item. Max 6 edits per run with 4-second pacing.', icon: Bot },
      { title: 'Smart relist suggestions', description: 'Automatically identifies listings that have been live too long without selling. Flags them as relist candidates with engagement stats.', icon: TrendingUp },
      { title: 'Smart Offers', description: 'Rules-based auto accept, counter, or decline offers based on percentage of listing price. Configurable thresholds. Sends personalised messages with buyer name and counter price automatically.', icon: Tag },
      { title: 'AI listing rewriter', description: 'Rewrite titles and descriptions into unique versions for reposting. Choose title-only, description-only, or both. Adjustable intensity. Avoids Vinted duplicate detection.', icon: RefreshCw },
      { title: 'AI reply suggestions', description: 'Get AI-drafted replies for buyer messages in your inbox. Personalised, context-aware, and editable before sending. Never stare at a blank reply box again.', icon: MessageCircle },
      { title: 'Reprice ledger', description: 'Every price drop is tracked with original price, new price, and timestamp. Full audit trail of every automated and manual price change.', icon: FileText },
      { title: 'Pinned items', description: 'Hand-pick specific listings for the bot to manage, even before they become stale. Unpin to remove from automation. You stay in control.', icon: Target },
    ],
  },
  {
    label: '03 — Sourcing & Inventory',
    title: 'From bulk buy to individual sale. Tracked automatically.',
    description: 'Log sourcing trips, split bulk purchases into individual items, and let Smart Matches auto-link each item to its live Vinted listing.',
    features: [
      { title: 'Purchase tracking', description: 'Log every sourcing trip — charity shops, car boot sales, wholesale, online. Track date, total cost, and items received per trip.', icon: ShoppingBag },
      { title: 'Bulk lot splitting', description: 'Buy 50 items for £200? Split into individual units at £4 each. Every item gets its own cost basis automatically. Edit individual costs when needed.', icon: Boxes },
      { title: 'Smart Matches', description: 'Auto-links your purchases to live Vinted listings using title and price matching. Suggests the best match with confidence scoring.', icon: Link2 },
      { title: 'Match scoring', description: 'Every suggested match comes with a confidence score so you know which links to trust and which to review. Accept or reject suggestions individually.', icon: Target },
      { title: 'Auto-match engine', description: 'Enable auto-matching in settings to link purchases to listings without lifting a finger. Toggle on or off anytime.', icon: Zap },
      { title: 'CSV export', description: 'Export your full inventory with cost, revenue, profit, and ROI data to CSV at any time. Perfect for accountants or your own records.', icon: FileText },
    ],
  },
  {
    label: '04 — Selling & Listings',
    title: 'Manage every listing. Reply to every message. Never miss a sale.',
    description: 'Filter live and draft listings, bulk-edit prices and SKUs, relist stale items, handle offers, and manage buyer messages from one central inbox.',
    features: [
      { title: 'Live & draft listings', description: 'See all your Vinted listings in one place. Filter by live, drafts, or sold. Sort by date, price, or engagement metrics.', icon: ShoppingBag },
      { title: 'Bulk price editing', description: 'Select multiple listings and update prices in bulk. Apply percentage discounts or set absolute prices across hundreds of items at once.', icon: Tag },
      { title: 'Bulk SKU assignment', description: 'Generate and assign SKUs to multiple listings at once using your custom SKU pattern. Preview before applying.', icon: Tag },
      { title: 'Stale listing detection', description: 'Identifies listings that have been live too long without selling. Flags them as relist candidates with views, favourites, and days listed.', icon: RefreshCw },
      { title: 'Bulk Vinted actions', description: 'Delete or relist multiple items on Vinted directly from Vintify — no need to open Vinted in another tab.', icon: Zap },
      { title: 'Central inbox', description: 'Read and reply to Vinted messages from one place. Filter by "needs reply", unread, or offers. See full message threads with formatted timestamps.', icon: MessageSquare },
      { title: 'Offer management', description: 'See all offers in one view. Accept, counter, or decline with auto-generated personalised messages. Configurable accept/counter/decline thresholds.', icon: MessageCircle },
      { title: 'AI reply suggestions', description: 'Get AI-drafted replies for any buyer message. Personalised, context-aware, and editable before sending. Speed up your response time dramatically.', icon: Sparkles },
      { title: 'Listing engagement stats', description: 'See views, favourites, and days listed for every item. Know exactly what is and isn\'t getting attention. Use data to decide what to relist or reprice.', icon: BarChart3 },
    ],
  },
  {
    label: '05 — Fulfilment',
    title: 'From sold to delivered. Tracked every step of the way.',
    description: 'Track orders through every shipping stage, auto-detect carriers, print labels, and never miss a dispatch deadline again.',
    features: [
      { title: 'Shipping lifecycle', description: 'Track every order from "needs sending" through "in transit" to "delivered". Visual status pipeline. Never lose track of a parcel again.', icon: Truck },
      { title: 'Carrier auto-detection', description: 'Automatically detects Evri, InPost, Yodel, and Royal Mail from shipping labels. No manual carrier entry needed.', icon: Truck },
      { title: 'Label Hub', description: 'View and print shipping labels directly from Vintify. Supports QR-ready and printed label states. Fetch raw PDF label bytes for printing.', icon: Printer },
      { title: 'Dispatch deadlines', description: 'See dispatch deadlines for every order. Never miss a Vinted shipping deadline and protect your seller rating.', icon: Zap },
      { title: 'Tracking numbers', description: 'Every order\'s tracking number is synced and displayed. Click to track on the carrier\'s website. No hunting through Vinted order pages.', icon: FileText },
      { title: 'Manual status overrides', description: 'Override shipping status when Vinted\'s data is stale or wrong. Keep your dashboard accurate even when Vinted lags behind reality.', icon: Settings },
    ],
  },
  {
    label: '06 — Dashboard & Analytics',
    title: 'Every number that matters. On one screen.',
    description: 'Real-time profit, sell-through rate, pending revenue, sales cadence charts, status mix, expense breakdowns, goal progress, action items, and sync status — all in one dashboard.',
    features: [
      { title: 'Real-time profit', description: 'See your total profit, known profit (excluding unknown-cost items), and profit delta vs the previous period. Honest numbers, never inflated.', icon: BadgePoundSterling },
      { title: 'Sales cadence chart', description: 'Daily or monthly buckets showing sales revenue, profit, items sold, and items listed over time. Visualise your growth trajectory.', icon: BarChart3 },
      { title: 'Sell-through rate', description: 'Calculated live from your sold count vs active listings. Know exactly how fast your inventory moves and adjust your sourcing accordingly.', icon: TrendingUp },
      { title: 'Pending revenue', description: 'Money from sold-but-not-completed orders — expected to land. Separate from confirmed revenue so you know what\'s in the pipeline.', icon: BadgePoundSterling },
      { title: 'Status mix', description: 'Visual breakdown of orders by status: paid, needs shipping, shipped, in transit, delivered, completed, issue, cancelled. See your pipeline at a glance.', icon: LayoutDashboard },
      { title: 'Expense breakdown', description: 'See your top expense categories at a glance. Know where your money is going beyond inventory costs. Monthly totals and recent entries.', icon: Receipt },
      { title: 'Goal tracking widget', description: 'Active goals with live progress bars. Track profit, revenue, items sold, items listed, items sourced, and ROI targets. Active and paused states.', icon: Target },
      { title: 'Action items', description: 'Overdue tasks, sales missing cost data, stale listings, and orders needing dispatch — all surfaced on the dashboard so nothing falls through the cracks.', icon: Check },
      { title: 'Sync status', description: 'See when your Vinted data was last synced. Full sync, listings, orders, inbox, and extension sync — all tracked with timestamps and error status.', icon: RefreshCw },
      { title: 'Performance analytics', description: 'Deep-dive into sales trends, best-selling items, best brands, optimal listing days, and data quality insights. Make data-driven sourcing decisions.', icon: BarChart3 },
      { title: 'Multiple period views', description: 'Switch between 7-day, 30-day, 90-day, and all-time views. Charts adapt to show daily or monthly buckets depending on your history length.', icon: LayoutDashboard },
      { title: 'Auto-sync', description: 'Data syncs automatically while the CRM is open. No manual "sync now" buttons needed. Your dashboard is always current.', icon: RefreshCw },
    ],
  },
  {
    label: '07 — Settings & Sync',
    title: 'Secure, automatic, and built for the Vinted ecosystem.',
    description: 'Our Chrome Extension syncs your Vinted account securely — no passwords stored. Customise SKUs, packaging costs, sync settings, and automation rules.',
    features: [
      { title: 'Chrome Extension sync', description: 'Securely connects to your Vinted account via Chrome Extension. Uses your active browser session. No passwords stored, ever. GDPR compliant.', icon: Shield },
      { title: 'Custom SKU patterns', description: 'Configure your own SKU format with variables. Preview before applying. Auto-assign SKUs on sync. Overwrite existing or skip — your choice.', icon: Tag },
      { title: 'Packaging cost defaults', description: 'Set a default packaging cost per item. Automatically included in profit calculations so your margins are always accurate.', icon: Receipt },
      { title: 'Sync controls', description: 'Toggle what syncs: listings, sold orders, purchases, conversations, shipping. You\'re in control of what data flows into Vintify.', icon: Settings },
      { title: 'Blank cost profit mode', description: 'Choose how items with no purchase cost are treated: exclude from profit (honest, default) or assume £0 (optimistic). Your numbers, your rules.', icon: Calculator },
      { title: 'Multiple Vinted accounts', description: 'Connect and switch between multiple Vinted accounts. Data stays separate and cached per account. Perfect for managing multiple shops.', icon: RefreshCw },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col pt-20 lg:pt-24">
      {/* Header */}
      <section className="border-b border-ink-100 py-20 lg:py-28">
        <div className="container-max container-px">
          <p className="section-label mb-6">Features</p>
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Accounting, growth, and operations — all in one platform.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-600">
            Vintify connects to your Vinted account and gives you the tools to track profit, automate listings, manage orders, and stay HMRC-ready. Explore every feature below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/features/accounting" className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 py-3 text-sm font-bold text-ink-900 transition-all hover:border-brand-300 hover:bg-brand-50/30">
              <Landmark size={16} className="text-brand-600" /> Accounting <ArrowRight size={14} />
            </Link>
            <Link href="/features/growth-bot" className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 py-3 text-sm font-bold text-ink-900 transition-all hover:border-brand-300 hover:bg-brand-50/30">
              <Bot size={16} className="text-brand-600" /> Growth Bot <ArrowRight size={14} />
            </Link>
            <Link href="/features/automation" className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 py-3 text-sm font-bold text-ink-900 transition-all hover:border-brand-300 hover:bg-brand-50/30">
              <Zap size={16} className="text-brand-600" /> Automation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Groups */}
      {FEATURE_GROUPS.map((group, gIdx) => (
        <section key={gIdx} className={`section-padding border-b border-ink-100 ${gIdx % 2 === 1 ? 'bg-ink-50' : ''}`}>
          <div className="container-max container-px">
            <div className="mb-12 max-w-2xl">
              <p className="section-label mb-4">{group.label}</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                {group.title}
              </h2>
              <p className="mt-4 text-lg text-ink-600">{group.description}</p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-3">
              {group.features.map((feature, fIdx) => (
                <div key={fIdx} className="bg-white p-8 transition-colors hover:bg-brand-50/30">
                  <feature.icon size={24} className="text-brand-600" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-brand-700 py-24">
        <div className="container-max container-px text-center">
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Try every feature free for 14 days.
          </h2>
          <div className="mt-8 flex justify-center">
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all hover:bg-brand-50 active:scale-[0.98]">
              See pricing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
