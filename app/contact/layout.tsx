import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { CONTACT, SEO, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Get a Free Cleaning Quote in Knoxville, TN',
  description:
    `Contact JEDY Cleaning for a free quote on house cleaning in Knoxville, TN. Call ${CONTACT.phone} or send a message — we serve West Knoxville, North Knoxville, Farragut, and surrounding areas.`,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: 'Get a Free Cleaning Quote in Knoxville, TN',
    description:
      `Get a free, no-obligation cleaning quote. Call ${CONTACT.phone} or fill out our contact form. JEDY Cleaning serves Greater Knoxville, TN.`,
    url: `${SITE.url}/contact`,
    images: [{ url: SEO.defaultOgImage, width: SEO.defaultOgImageWidth, height: SEO.defaultOgImageHeight, alt: SEO.defaultOgImageAlt }],
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
