import ChangelogTimeline from '@/components/ChangelogTimeline';

export const metadata = {
  title: 'Changelog — Product Updates & New Features',
  description: 'Track every Vintify update — new features, improvements, bug fixes, and design changes. See what we ship and when, with version tags and improvement counts.',
  alternates: {
    canonical: 'https://vintify.co.uk/changelog',
  },
  openGraph: {
    title: 'Vintify Changelog — Product Updates & New Features',
    description: 'Track every Vintify update — new features, improvements, bug fixes, and design changes.',
    url: 'https://vintify.co.uk/changelog',
  },
};

const VERSIONS = [
  {
    version: '2.4.0',
    date: '28 June 2026',
    tag: 'Latest',
    title: 'Mobile experience overhaul',
    tags: ['Improvement', 'New Feature', 'Design'],
    whatChanged: [
      'Every page reworked for mobile — padding, spacing, grids, and font sizes all tuned for small screens',
      'New 3-step "How it works" section on the homepage with visual browser mockups',
      'SEO metadata added across all pages — titles, descriptions, Open Graph, and structured data',
      'Sitemap expanded to include all feature sub-pages',
      'PWA manifest added for installable web app support',
    ],
    whyItMatters: [
      'Browsing Vintify on your phone is now as smooth as on desktop',
      'New visitors immediately understand the 3-step setup process',
      'Vintify is now properly indexed by Google with rich snippets',
    ],
  },
  {
    version: '2.3.0',
    date: '21 June 2026',
    tag: null,
    title: 'Feature deep-dives and before/after comparison',
    tags: ['New Feature', 'Design'],
    whatChanged: [
      'Launched dedicated pages for Accounting, Growth Bot, and Automation features',
      'New before/after comparison showing Vintify vs manual workflow',
      'Added prev/next navigation between feature sub-pages',
      'Feature page hero redesigned with animated stats',
    ],
    whyItMatters: [
      'You can now explore each feature category in depth before signing up',
      'The before/after comparison makes the value obvious at a glance',
    ],
  },
  {
    version: '2.2.0',
    date: '14 June 2026',
    tag: null,
    title: 'Pricing redesign and founding member offer',
    tags: ['Design', 'New Feature', 'Improvement'],
    whatChanged: [
      'Pricing page completely redesigned with two-card layout and feature checklist',
      'Launched founding member lifetime offer — £69 one-time payment',
      'New FAQ accordion component with smooth expand/collapse',
      'Email capture form with validation and success state',
    ],
    whyItMatters: [
      'Pricing is now crystal clear — two options, everything included, no hidden tiers',
      'Founding members get lifetime access for less than 3 months of the monthly plan',
    ],
  },
  {
    version: '2.1.0',
    date: '7 June 2026',
    tag: null,
    title: 'Interactive feature tour and explorer',
    tags: ['New Feature', 'Improvement'],
    whatChanged: [
      'New FeatureJourney component with interactive bento grid and step-through tour',
      'FeaturesExplorer with tabbed interface covering all 7 feature categories',
      'Animated dashboard mockup added to the homepage hero',
    ],
    whyItMatters: [
      'You can now see exactly how Vintify works end-to-end without leaving the homepage',
      'The tabbed explorer lets you jump straight to the features you care about',
    ],
  },
  {
    version: '2.0.0',
    date: '1 June 2026',
    tag: null,
    title: 'Complete site rebuild on Next.js',
    tags: ['New Feature', 'Design', 'Performance'],
    whatChanged: [
      'Migrated from static HTML to Next.js 14 with React Server Components',
      'New design system with custom colours, typography, and reusable utilities',
      'Sticky navbar with scroll-aware styling and mobile slide-out menu',
      'Organised footer with Product, Company, and Legal link groups',
      'Self-hosted Google Fonts with display: swap for faster loading',
    ],
    whyItMatters: [
      'Pages load significantly faster with server-side rendering',
      'The entire site now has a consistent, professional design language',
    ],
  },
  {
    version: '1.8.0',
    date: '20 May 2026',
    tag: null,
    title: 'Label Hub and bulk editing',
    tags: ['New Feature', 'Improvement', 'Bug Fix'],
    whatChanged: [
      'Label Hub — import and print all Vinted shipping labels in one place',
      'Bulk price editor — apply discounts or set prices across hundreds of listings at once',
      'Auto-repost scheduler — schedule reposts for optimal times automatically',
      'Fixed profit calculation rounding errors across all views',
    ],
    whyItMatters: [
      'No more hunting through emails for shipping labels — everything in one tab',
      'A weekend sale that used to take 25 minutes of clicking now takes 10 seconds',
    ],
  },
  {
    version: '1.7.0',
    date: '10 May 2026',
    tag: null,
    title: 'AI listing writer and Smart Offers',
    tags: ['New Feature', 'Improvement'],
    whatChanged: [
      'AI listing writer — type a few words, get a full SEO-optimised listing with hashtags',
      'Smart Offers — automatically accept, counter, or decline buyer offers based on your rules',
      'Auto price drops — stale listings get discounted automatically after configurable days',
      'AI reply suggestions for buyer messages in your inbox',
    ],
    whyItMatters: [
      'Writing 20 listings now takes 10 minutes instead of 2 hours',
      'Offers are handled automatically — you never miss a sale while sleeping',
    ],
  },
  {
    version: '1.6.0',
    date: '1 May 2026',
    tag: null,
    title: 'HMRC-ready tax reports and expense tracking',
    tags: ['New Feature', 'Improvement'],
    whatChanged: [
      'HMRC-ready tax reports — income, expenses, profit, and £1,000 allowance in seconds',
      'Expense tracking — log sourcing costs, packaging, and supplies automatically',
      'Inventory lot splitting — split bulk purchases across individual items',
      'Goal tracking — set monthly profit targets and monitor progress in real-time',
    ],
    whyItMatters: [
      'Tax season goes from a weekend of spreadsheets to a 10-second export',
      'You always know your true profit after every cost — not just revenue',
    ],
  },
  {
    version: '1.5.0',
    date: '20 April 2026',
    tag: null,
    title: 'Smart Matches and sourcing tools',
    tags: ['New Feature', 'Improvement'],
    whatChanged: [
      'Smart Matches — Vintify finds underpriced items matching your sourcing criteria',
      'Sourcing calculator — calculate potential profit before you buy',
      'Sales cadence charts — spot patterns and optimise listing times',
    ],
    whyItMatters: [
      'You can source profitable inventory without manually browsing for hours',
      'Data-driven insights replace gut feeling for when to list and price',
    ],
  },
  {
    version: '1.0.0',
    date: '1 March 2026',
    tag: null,
    title: 'Vintify launches',
    tags: ['New Feature'],
    whatChanged: [
      'Chrome Extension that connects to your Vinted session — no passwords needed',
      'True profit per item — every sale calculated after fees, shipping, and packaging',
      'Real-time dashboard with profit, sell-through rate, and sales charts',
      'Order management with status tracking and action items',
    ],
    whyItMatters: [
      'Vinted resellers finally have a proper business tool — not just a spreadsheet',
      'You know your real numbers from day one, without manual entry',
    ],
  },
];

const totalChanges = VERSIONS.reduce((acc, v) => acc + v.whatChanged.length, 0);
const totalFeatures = VERSIONS.filter(v => v.tags.includes('New Feature')).length;

export default function ChangelogPage() {
  return (
    <div className="flex min-h-screen flex-col pt-12 sm:pt-16 lg:pt-20">
      {/* ── Hero — light SaaS style ── */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-white py-12 sm:py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-faint opacity-40" />
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-glow" />

        <div className="container-max container-px relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-500/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">Changelog</p>
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            We ship fast.<br />
            <span className="text-gradient">Here's the proof.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-500 sm:text-lg">
            Every Vintify update, feature, fix, and improvement — logged with dates, tags, and details. No mystery changes.
          </p>

          {/* Inline stats — clean, no boxes */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-500 sm:text-base">
            <span><strong className="font-bold text-ink-900">{VERSIONS.length}</strong> versions</span>
            <span className="text-ink-300">·</span>
            <span><strong className="font-bold text-ink-900">{totalChanges}</strong> changes logged</span>
            <span className="text-ink-300">·</span>
            <span><strong className="font-bold text-ink-900">{totalFeatures}</strong> features added</span>
          </div>
        </div>
      </section>

      <ChangelogTimeline versions={VERSIONS} />
    </div>
  );
}
