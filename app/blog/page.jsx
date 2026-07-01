import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { POSTS } from '@/lib/blog-posts';

export const metadata = {
  title: 'Blog — Vinted Reselling Tips, Guides & Strategies | Vintify',
  description: 'Expert guides for Vinted resellers in the UK. Tax guides, pricing strategies, shipping tips, sourcing advice, AI listing tools, and growth tactics to sell more on Vinted.',
  keywords: 'vinted reselling tips, vinted selling guide UK, vinted blog, vinted reseller blog, how to sell on vinted, vinted tips 2025, vinted reselling business',
  alternates: {
    canonical: 'https://vintify.co.uk/blog',
  },
  openGraph: {
    title: 'Vintify Blog — Vinted Reselling Tips, Guides & Strategies',
    description: 'Expert guides for Vinted resellers in the UK. Tax, pricing, shipping, sourcing, AI tools, and growth tactics.',
    url: 'https://vintify.co.uk/blog',
    type: 'website',
    // Share image inherited from app/opengraph-image.jsx
  },
  twitter: {
    title: 'Vintify Blog — Vinted Reselling Tips & Guides',
    description: 'Expert guides for Vinted resellers in the UK.',
    card: 'summary_large_image',
  },
};

export default function BlogPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Vintify Blog',
    description: 'Expert guides for Vinted resellers in the UK.',
    url: 'https://vintify.co.uk/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Vintify',
      url: 'https://vintify.co.uk',
    },
    blogPost: POSTS.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://vintify.co.uk/blog/${post.slug}`,
      datePublished: post.date,
      author: { '@type': 'Organization', name: 'Vintify' },
    })),
  };

  return (
    <div className="flex min-h-dvh flex-col pt-12 sm:pt-16 lg:pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <section className="border-b border-ink-100 py-12 sm:py-20 lg:py-28">
        <div className="container-max container-px">
          <p className="section-label mb-6">Blog</p>
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Guides, tips, and insights for Vinted resellers.
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="badge-neutral">{post.category}</span>
                    <span className="font-mono text-xs text-ink-400">{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-ink-900 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-ink-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 font-mono text-xs text-ink-400">
                    {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
