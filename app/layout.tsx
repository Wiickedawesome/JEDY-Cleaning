import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Inter, Merriweather } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merri = Merriweather({ subsets: ['latin'], weight: ['300','400','700','900'], variable: '--font-merri' });

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
        <meta name="theme-color" content="#FFFBF5" />
      </head>
      <body className={`bg-cream-50 text-sage-900 ${inter.variable} ${merri.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
