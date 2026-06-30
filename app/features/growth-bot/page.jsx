import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/site';
import {
  ArrowRight, Bot, Sparkles, Zap, Tag, RefreshCw, MessageCircle,
  TrendingUp, Target, FileText, Check, X, Clock, MessageSquare,
} from 'lucide-react';
import { FeatureSubNav, FeaturePrevNext } from '@/components/FeatureSubNav';

export const metadata = {
  title: 'Growth Bot — AI Listings, Auto Price Drops, Smart Offers | Vintify',
  description: 'AI writes your Vinted listings, drops prices on stale items automatically, handles offers based on your rules, rewrites for reposting, and suggests inbox replies. Sell more in less time.',
  keywords: ['vinted growth bot', 'vinted AI listing writer', 'vinted auto price drop', 'vinted smart offers', 'vinted auto repost', 'vinted listing automation', 'vinted price drop bot', 'vinted AI listings'],
  alternates: {
    canonical: 'https://vintify.co.uk/features/growth-bot',
  },
  openGraph: {
    title: 'Vintify Growth Bot — AI Listings, Auto Price Drops & Smart Offers',
    description: 'AI listing writer, automatic price drops, Smart Offers, auto-repost, and AI reply suggestions.',
    url: 'https://vintify.co.uk/features/growth-bot',
  },
  twitter: {
    title: 'Vintify Growth Bot — AI Listings, Auto Price Drops & Smart Offers',
    description: 'AI listing writer, automatic price drops, Smart Offers, auto-repost, and AI reply suggestions.',
    card: 'summary_large_image',
  },
};

const PROBLEMS = [
  {
    problem: 'Writing listings takes forever.',
    detail: 'You sit there typing out titles, descriptions, and hashtags for every single item. 20 listings a day means 2 hours of typing. And you still miss keywords that would help buyers find your items.',
    solution: 'AI writes it. You click publish.',
    solutionDetail: 'Type "Nike hoodie red medium" — get a full SEO-optimized title, description, and 8+ hashtags instantly. AI suggests the best Vinted category too. Review, edit if you want, and push to Vinted in one click. 20 listings in 10 minutes, not 2 hours.',
    icon: Sparkles,
  },
  {
    problem: 'Stale listings sit there forever.',
    detail: 'Items that have been live for 3 weeks with no views. You know you should drop the price, but you forget. Or you don\'t want to manually edit 50 listings. So they sit. And sit. And never sell.',
    solution: 'Auto price-drop bot runs while you work.',
    solutionDetail: 'The bot runs every 12 minutes while your CRM is open. It finds stale listings (configurable: 7, 14, 21 days), drops their price by your configured percentage, respects your lifetime floor and cost floor, and pings users who favourited the item to let them know. Max 6 edits per run with 4-second pacing to stay safe.',
    icon: Bot,
  },
  {
    problem: 'Offers are a full-time job.',
    detail: 'You get 15 offers a day. Some are reasonable. Some are insulting. You have to open each one, decide whether to accept, counter, or decline, and type a message back. It\'s exhausting and it eats your entire evening.',
    solution: 'Smart Offers handles them automatically.',
    solutionDetail: 'Set your rules: accept anything above 90% of listing price, counter between 75-89%, decline below 75%. Smart Offers does the rest — automatically accepting, countering, or declining based on your thresholds. Every action sends a personalised message with the buyer\'s name and your counter price. You wake up to accepted offers and replied messages.',
    icon: Tag,
  },
  {
    problem: 'Reposting gets you flagged.',
    detail: 'You know you should relist stale items, but Vinted detects duplicates. You try changing a word or two, but it still gets flagged. So you give up and the item never sells.',
    solution: 'AI rewriter beats duplicate detection.',
    solutionDetail: 'Rewrite titles and descriptions into completely unique versions. Choose title-only, description-only, or both. Adjustable intensity from light tweak to full rewrite. AI restructures sentences, swaps synonyms, and rephrases — enough to bypass Vinted\'s duplicate detection while keeping the meaning intact.',
    icon: RefreshCw,
  },
  {
    problem: 'You can\'t keep up with messages.',
    detail: '"Is this still available?" "Can you do £20?" "What size is this?" The same questions, over and over. You know you should reply fast — Vinted rewards quick responders — but you\'re out sourcing and can\'t type on your phone.',
    solution: 'AI reply suggestions in your inbox.',
    solutionDetail: 'Every buyer message gets an AI-drafted reply suggestion. Personalised, context-aware, and editable before sending. "Is this still available?" gets "Yes, it\'s still available! Interested?" — not a generic template. Reply in seconds, not hours. Never lose a sale because you were too slow to respond.',
    icon: MessageCircle,
  },
  {
    problem: 'You don\'t know which items to pin for the bot.',
    detail: 'The bot manages stale items automatically, but what about new listings you want to push hard from day one? Or that premium item you want to actively manage before it goes stale?',
    solution: 'Pin items to the bot anytime.',
    solutionDetail: 'Hand-pick specific listings for the bot to manage, even before they become stale. The bot will monitor, reprice, and ping favourited users on your schedule. Unpin to remove from automation. You stay in complete control.',
    icon: Target,
  },
];

const EXTRA_FEATURES = [
  { title: 'One-click Vinted listing', description: 'Push drafted listings straight to Vinted via our secure Chrome extension. No copy-pasting, no switching tabs.', icon: Zap },
  { title: 'Smart relist suggestions', description: 'Automatically identifies listings live too long without selling. Flags them as relist candidates with engagement stats.', icon: TrendingUp },
  { title: 'Reprice ledger', description: 'Every price drop tracked with original price, new price, and timestamp. Full audit trail of every automated and manual change.', icon: FileText },
  { title: 'Listing engagement stats', description: 'See views, favourites, and days listed for every item. Know exactly what is and isn\'t getting attention.', icon: TrendingUp },
  { title: 'Central inbox', description: 'Read and reply to Vinted messages from one place. Filter by needs reply, unread, or offers. Full message threads.', icon: MessageSquare },
  { title: 'Offer management', description: 'See all offers in one view. Accept, counter, or decline with auto-generated personalised messages. Configurable thresholds.', icon: MessageCircle },
];

export default function GrowthBotPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16 lg:pt-20">
      <FeatureSubNav />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="container-max container-px relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5">
              <Bot size={14} className="text-brand-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">2 of 3 — Growth Bot</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              AI writes it. The bot <span className="text-brand-500">sells it</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-500">
              AI writes your listings. The bot drops prices on stale items, handles offers based on your rules, rewrites for reposting, and replies to buyers — all automatically.
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

          {/* Product mockup — Growth Bot activity feed */}
          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute -inset-16 rounded-full bg-brand-500/10 blur-glow" />
            <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-2 shadow-2xl">
              <div className="mb-2 flex items-center gap-2 border-b border-ink-200 bg-ink-100/30 p-3">
                <div className="h-2.5 w-2.5 rounded-full bg-accent-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div className="ml-4 flex h-6 items-center rounded-full border border-ink-200 bg-white px-4 font-mono text-[10px] text-ink-400">
                  app.vintify.co.uk/growth-bot
                </div>
              </div>
              <div className="w-full bg-white p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
                      <Bot size={16} className="text-white" />
                    </div>
                    <p className="font-display text-sm font-bold text-ink-900">Growth Bot</p>
                  </div>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-brand-600">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" /> Running · Next run in 4m
                  </span>
                </div>
                <div className="mb-4 rounded-xl border border-ink-200 bg-ink-50 p-4">
                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Drop %</p>
                      <p className="font-display text-base font-bold text-ink-900">10%</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Floor</p>
                      <p className="font-display text-base font-bold text-ink-900">Cost+£2</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Stale after</p>
                      <p className="font-display text-base font-bold text-ink-900">14 days</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Pinned</p>
                      <p className="font-display text-base font-bold text-ink-900">8</p>
                    </div>
                  </div>
                </div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-ink-400">Recent actions</p>
                <div className="space-y-2">
                  {[
                    { type: 'drop', item: 'Nike Tech Fleece Hoodie', from: '£28.00', to: '£25.20', time: '2m ago', icon: TrendingUp, color: 'brand' },
                    { type: 'ping', item: '3 users favourited notified', time: '2m ago', icon: MessageCircle, color: 'emerald' },
                    { type: 'offer', item: 'Auto-countered Jess M. · £22 → £25', time: '8m ago', icon: Tag, color: 'brand' },
                    { type: 'relist', item: 'Zara Oversized Blazer — AI rewritten', time: '1h ago', icon: RefreshCw, color: 'amber' },
                    { type: 'drop', item: 'Adidas Track Jacket', from: '£22.00', to: '£19.80', time: '3h ago', icon: TrendingUp, color: 'brand' },
                    { type: 'reply', item: 'AI replied to Tom K. — "Yes, still available!"', time: '3h ago', icon: MessageCircle, color: 'emerald' },
                  ].map((action, i) => {
                    const colorMap = {
                      brand: 'bg-brand-500/10 text-brand-600',
                      emerald: 'bg-emerald-500/10 text-emerald-600',
                      amber: 'bg-amber-500/10 text-amber-600',
                    };
                    return (
                      <div key={i} className="flex items-center gap-3 rounded-lg border border-ink-200 bg-ink-50 px-3 py-2.5">
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${colorMap[action.color]}`}>
                          <action.icon size={15} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-ink-900">{action.item}</p>
                          {action.from && (
                            <p className="font-mono text-[10px] text-ink-400">
                              <span className="line-through">{action.from}</span> → <span className="font-bold text-brand-600">{action.to}</span>
                            </p>
                          )}
                        </div>
                        <span className="font-mono text-[10px] text-ink-400">{action.time}</span>
                      </div>
                    );
                  })}
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
              The growth bottlenecks — eliminated.
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
              Everything else the Growth Bot does.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-3">
            {EXTRA_FEATURES.map((f, i) => (
              <div key={i} className="bg-white p-5 transition-colors hover:bg-brand-50/30 sm:p-8">
                <f.icon size={24} className="text-brand-600" />
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{f.description}</p>
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
              Let the bot do the work.
            </h2>
            <p className="relative z-10 mx-auto mt-6 max-w-xl text-lg text-ink-500">
              AI listings, auto price drops, smart offers, AI replies, and rewriter — all running automatically while you focus on sourcing.
            </p>
            <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={SIGNUP_URL} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 active:scale-95 sm:w-auto">
                Start free trial <ArrowRight size={18} />
              </a>
              <Link href="/features/automation" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink-200 px-8 py-4 text-lg font-bold text-ink-900 transition-all hover:bg-ink-100 sm:w-auto">
                Explore Automation <ArrowRight size={18} />
              </Link>
            </div>
            <p className="relative z-10 mt-5 text-xs font-semibold uppercase tracking-widest text-ink-400">No credit card required · 14-day free trial</p>
          </div>
        </div>
      </section>
      <FeaturePrevNext />
    </div>
  );
}
