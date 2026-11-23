import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { CONTACT, SITE } from '@/lib/constants';
import { pageOpenGraph, pageTwitter } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Get a Free Cleaning Quote in Knoxville, TN',
  description:
    `Get a free cleaning quote in Knoxville, TN. Call ${CONTACT.phone} or send a message. Serving West Knoxville, Farragut, and Oak Ridge.`,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: pageOpenGraph({
    title: 'Get a Free Cleaning Quote in Knoxville, TN',
    description: `Free, no-obligation cleaning quotes. Call ${CONTACT.phone} or use the contact form.`,
    url: `${SITE.url}/contact`,
  }),
  twitter: pageTwitter({
    title: 'Get a Free Cleaning Quote in Knoxville, TN',
    description: 'Request a free cleaning quote from JEDY Cleaning in Knoxville, TN.',
  }),
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
