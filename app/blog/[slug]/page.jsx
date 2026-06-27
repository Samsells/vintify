import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Blog Post',
  description: 'Vintify blog — guides and insights for Vinted resellers.',
};

export default function BlogPostPage({ params }) {
  return (
    <div className="flex min-h-screen flex-col pt-20 lg:pt-24">
      <article className="border-b border-ink-100 py-20 lg:py-28">
        <div className="container-narrow container-px">
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-xs text-ink-500 hover:text-ink-900 transition-colors">
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="badge-neutral">Category</span>
            <span className="font-mono text-xs text-ink-400">5 min read</span>
          </div>

          <h1 className="mt-6 font-display text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Blog post title goes here
          </h1>

          <p className="mt-4 font-mono text-xs text-ink-400">
            {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="mt-12 space-y-6 text-lg text-ink-600 leading-relaxed">
            <p>
              This is a placeholder blog post. Once you have content written, replace this section with your actual article content.
            </p>
            <p>
              The blog uses a dynamic route structure — each post URL like <code className="font-mono text-sm bg-ink-100 px-1.5 py-0.5 rounded">/blog/your-post-slug</code> will render this template.
            </p>
            <p>
              To add real posts, you can either create MDX files or connect a CMS. For now, this gives you the layout and SEO structure to build on.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
