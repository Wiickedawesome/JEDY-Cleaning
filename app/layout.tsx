import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-jakarta' });
const grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500','600','700'], variable: '--font-grotesk' });

export const metadata: Metadata = {
  title: {
    default: 'JEDY Cleaning - Professional Cleaning Services',
    template: '%s | JEDY Cleaning',
  },
  description:
    'Professional cleaning services for your home and business. Trusted, reliable, and affordable.',
  keywords: ['cleaning', 'professional', 'home cleaning', 'business cleaning'],
  openGraph: {
    title: 'JEDY Cleaning - Professional Cleaning Services',
    description:
      'Professional cleaning services for your home and business. Trusted, reliable, and affordable.',
    url: 'https://jedycleaning.com',
    siteName: 'JEDY Cleaning',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FAFBFA" />
      </head>
      <body className={`bg-cream-50 text-brown-800 ${jakarta.variable} ${grotesk.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
