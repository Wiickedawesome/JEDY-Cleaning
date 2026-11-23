import type { Metadata } from 'next';
import { SEO, SITE } from './constants';

interface PageMeta {
  title: string;
  description: string;
  /** Absolute URL of the page, used for the canonical Open Graph URL. */
  url: string;
}

const ogImage = {
  url: SEO.defaultOgImage,
  width: SEO.defaultOgImageWidth,
  height: SEO.defaultOgImageHeight,
  alt: SEO.defaultOgImageAlt,
};

/**
 * Shared Open Graph tags. Next.js replaces the whole `openGraph` object per page,
 * so every page must re-declare the site-level fields.
 */
export function pageOpenGraph({ title, description, url }: PageMeta): Metadata['openGraph'] {
  return {
    type: 'website',
    siteName: SITE.name,
    locale: SEO.locale,
    url,
    title,
    description,
    images: [ogImage],
  };
}

/** Twitter card tags that mirror the page's own title and description. */
export function pageTwitter({ title, description }: Omit<PageMeta, 'url'>): Metadata['twitter'] {
  return {
    card: 'summary',
    title,
    description,
    images: [SEO.defaultOgImage],
  };
}
