import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog',
  description: 'Tips, guides, and insights for Vinted resellers. Grow your reselling business with Vintify.',
};

const POSTS = [
  {
    slug: 'vinted-tax-guide-uk-2025',
    title: 'The complete Vinted tax guide for UK resellers (2025)',
    excerpt: 'Everything you need to know about Vinted and HMRC — the £1,000 trading allowance, when you need to register, and how to file your self-assessment.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Tax',
  },
  {
    slug: 'how-to-price-vinted-items',
    title: 'How to price your Vinted items for maximum profit',
    excerpt: 'Pricing is the single biggest lever in your reselling business. Here\'s a data-driven framework for pricing items that actually sell.',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Growth',
  },
  {
    slug: 'vinted-vs-depop-vs-vinted',
    title: 'Vinted vs Depop vs eBay: Which platform is best for resellers?',
    excerpt: 'We compare fees, audience, shipping, and seller experience across the three biggest resale platforms in the UK.',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'Guides',
  },
  {
    slug: 'ai-listing-writer-guide',
    title: 'How AI listing writers work (and why they sell more)',
    excerpt: 'A deep dive into how Vintify\'s AI growth bot generates listings that rank in Vinted search and convert buyers.',
    date: '2024-12-20',
    readTime: '5 min read',
    category: 'Product',
  },
  {
    slug: 'vinted-shipping-guide',
    title: 'Vinted shipping explained: Evri, InPost, Yodal, and Royal Mail',
    excerpt: 'Every shipping option on Vinted, compared by cost, speed, and reliability. Plus how to track them all in one place.',
    date: '2024-12-15',
    readTime: '7 min read',
    category: 'Guides',
  },
  {
    slug: 'tracking-profit-per-item',
    title: 'Why tracking profit per item is the most important metric',
    excerpt: 'Revenue is vanity, profit is sanity. Here\'s why knowing your true profit on every single item changes everything.',
    date: '2024-12-10',
    readTime: '4 min read',
    category: 'Accounting',
  },
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col pt-20 lg:pt-24">
      <section className="border-b border-ink-100 py-20 lg:py-28">
        <div className="container-max container-px">
          <p className="section-label mb-6">Blog</p>
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Guides, tips, and insights for Vinted resellers.
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max container-px">
          <div className="grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post, idx) => (
              <Link
                key={idx}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white p-8 transition-colors hover:bg-ink-50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="badge-neutral">{post.category}</span>
                  <span className="font-mono text-xs text-ink-400">{post.readTime}</span>
                </div>
                <h2 className="font-display text-lg font-semibold text-ink-900 group-hover:text-ink-700">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-ink-500 leading-relaxed">{post.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 font-mono text-xs text-ink-400">
                  <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
