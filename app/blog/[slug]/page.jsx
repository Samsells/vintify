import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { POSTS, getPostBySlug, getAllSlugs } from '@/lib/blog-posts';

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const keywords = post.keywords || [];

  return {
    title: `${post.title} — Vintify Blog`,
    description: post.excerpt,
    keywords: keywords.join(', '),
    alternates: {
      canonical: `https://vintify.co.uk/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://vintify.co.uk/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Vintify Team'],
      tags: [post.category, ...keywords.slice(0, 5)],
      images: [{ url: post.image, alt: post.imageAlt, width: 1200, height: 630 }],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      card: 'summary_large_image',
      images: [post.image],
    },
  };
}

function renderContent(block) {
  if (block.type === 'h2') {
    return <h2 key={block.text} className="mt-10 font-display text-2xl font-bold tracking-tight text-ink-900">{block.text}</h2>;
  }
  if (block.type === 'ul') {
    return (
      <ul key={block.text} className="mt-4 space-y-2">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-ink-600 leading-relaxed">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === 'cta') {
    return (
      <Link
        key={block.text}
        href={block.href}
        className="group mt-6 flex items-center justify-between gap-4 rounded-2xl border border-brand-200 bg-brand-500/5 p-5 no-underline transition-all hover:border-brand-400 hover:shadow-md"
      >
        <span className="text-base font-semibold text-ink-900">{block.text}</span>
        <ArrowRight size={18} className="shrink-0 text-brand-600 transition-transform group-hover:translate-x-1" />
      </Link>
    );
  }
  return <p key={block.text} className="mt-4 text-ink-600 leading-relaxed">{block.text}</p>;
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return null;

  const relatedPosts = POSTS.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const fallbackRelated = POSTS.filter(p => p.slug !== post.slug).slice(0, 2);
  const related = relatedPosts.length > 0 ? relatedPosts : fallbackRelated;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author || 'Vintify Team',
      url: 'https://vintify.co.uk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vintify',
      url: 'https://vintify.co.uk',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://vintify.co.uk/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: (post.keywords || []).join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vintify.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vintify.co.uk/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://vintify.co.uk/blog/${post.slug}` },
    ],
  };

  return (
    <div className="flex min-h-dvh flex-col pt-12 sm:pt-16 lg:pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="border-b border-ink-100 py-12 sm:py-16 lg:py-24">
        <div className="container-narrow container-px">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 font-mono text-xs text-ink-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-900 transition-colors">Home</Link>
            <ChevronRight size={12} className="text-ink-300" />
            <Link href="/blog" className="hover:text-ink-900 transition-colors">Blog</Link>
            <ChevronRight size={12} className="text-ink-300" />
            <span className="truncate text-ink-600">{post.category}</span>
          </nav>

          <Link href="/blog" className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-ink-500 hover:text-ink-900 transition-colors">
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="badge-neutral">{post.category}</span>
            <span className="font-mono text-xs text-ink-400">{post.readTime}</span>
          </div>

          <h1 className="mt-6 font-display text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-ink-500 leading-relaxed">{post.excerpt}</p>

          <p className="mt-4 font-mono text-xs text-ink-400">
            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          {/* Hero image */}
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-ink-200 bg-ink-100">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="mt-10 space-y-1 text-base sm:text-lg">
            {post.content.map(renderContent)}
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-ink-50 py-12 sm:py-16">
          <div className="container-narrow container-px">
            <h2 className="font-display text-xl font-bold tracking-tight text-ink-900">Keep reading</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map(rp => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <span className="badge-neutral">{rp.category}</span>
                    <span className="font-mono text-xs text-ink-400">{rp.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-ink-900 group-hover:text-brand-600 transition-colors">
                    {rp.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed line-clamp-2">{rp.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
