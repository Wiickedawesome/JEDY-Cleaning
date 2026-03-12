import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { CONTACT, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    `Contact JEDY Cleaning for a free quote on house cleaning in Knoxville, TN. Call ${CONTACT.phone} or send a message — we serve West Knoxville, North Knoxville, Farragut, and surrounding areas.`,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: 'Contact JEDY Cleaning | Free Quote in Knoxville, TN',
    description:
      `Get a free, no-obligation cleaning quote. Call ${CONTACT.phone} or fill out our contact form. JEDY Cleaning serves Greater Knoxville, TN.`,
    url: `${SITE.url}/contact`,
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
