import { getAllSlugs } from '@/lib/blog-posts';

export default function sitemap() {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/features', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/features/accounting', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/features/growth-bot', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/features/automation', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/changelog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  ];

  const blogPosts = getAllSlugs().map(slug => ({
    path: `/blog/${slug}`,
    priority: 0.6,
    changeFrequency: 'monthly',
  }));

  return [...routes, ...blogPosts].map((route) => ({
    url: `https://vintify.co.uk${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
