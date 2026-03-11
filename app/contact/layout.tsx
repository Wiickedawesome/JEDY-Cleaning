import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact JEDY Cleaning for a free quote on house cleaning in Knoxville, TN. Call (865) 333-2637 or send a message — we serve West Knoxville, North Knoxville, Farragut, and surrounding areas.',
  alternates: { canonical: 'https://jedycleaning.com/contact' },
  openGraph: {
    title: 'Contact JEDY Cleaning | Free Quote in Knoxville, TN',
    description:
      'Get a free, no-obligation cleaning quote. Call (865) 333-2637 or fill out our contact form. JEDY Cleaning serves Greater Knoxville, TN.',
    url: 'https://jedycleaning.com/contact',
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
