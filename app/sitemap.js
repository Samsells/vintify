export default function sitemap() {
  const routes = [
    '',
    '/features',
    '/pricing',
    '/about',
    '/contact',
    '/blog',
    '/faq',
  ];

  return routes.map((route) => ({
    url: `https://vintify.co.uk${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
