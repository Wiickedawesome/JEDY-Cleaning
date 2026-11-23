import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

export const dynamic = 'force-static';

// Paths include the trailing slash that `trailingSlash: true` serves, so the
// sitemap points at canonical URLs instead of redirects. `lastModified` is
// intentionally omitted: a build-time timestamp is not a real content date.
const ROUTES = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/privacy/', changeFrequency: 'monthly', priority: 0.8 },
] as const satisfies readonly {
  path: string;
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
}[];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE.url}${path}`,
    changeFrequency,
    priority,
  }));
}
