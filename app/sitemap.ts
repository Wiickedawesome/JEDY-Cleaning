import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ['', '/about', '/services', '/contact', '/privacy'];

  return routes.map((route, index) => ({
    url: route ? `${SITE.url}${route}` : SITE.url,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.8,
  }));
}
