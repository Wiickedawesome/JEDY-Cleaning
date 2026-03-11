import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
});
const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jedycleaning.com'),
  title: {
    default: 'JEDY Cleaning — House Cleaning Services in Knoxville, TN',
    template: '%s | JEDY Cleaning',
  },
  description:
    'Professional house cleaning services in Knoxville, TN. Offering weekly, deep, and move-in/out cleaning for homes and businesses. Serving West Knoxville, Farragut, Maryville, and Oak Ridge.',
  keywords: [
    'house cleaning Knoxville TN',
    'home cleaning services Knoxville',
    'professional cleaners Knoxville Tennessee',
    'deep cleaning Knoxville',
    'move out cleaning Knoxville',
    'recurring cleaning service Knoxville',
    'maid service Knoxville TN',
    'cleaning company West Knoxville',
    'North Knoxville cleaning',
    'South Knoxville cleaning',
    'Downtown Knoxville cleaning',
    'Farragut cleaning services',
    'affordable cleaning services Knoxville',
    'eco-friendly cleaning Knoxville',
    'JEDY Cleaning',
  ],
  openGraph: {
    title: 'JEDY Cleaning — House Cleaning Services in Knoxville, TN',
    description:
      'Trusted, affordable house cleaning in Knoxville, TN. Weekly, deep, and move-in/out services. Call (865) 333-2637 for a free quote.',
    url: 'https://jedycleaning.com',
    siteName: 'JEDY Cleaning',
    type: 'website',
    images: [
      {
        url: '/graphics/jedycleaning.png',
        width: 512,
        height: 512,
        alt: 'JEDY Cleaning — Professional House Cleaning in Knoxville, TN',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'JEDY Cleaning — House Cleaning in Knoxville, TN',
    description:
      'Professional, trusted house cleaning in Knoxville, TN. Weekly, deep, and move-out cleaning. Get a free quote today.',
    images: ['/graphics/jedycleaning.png'],
  },
  icons: {
    icon: '/graphics/jedycleaning.png',
    apple: '/graphics/jedycleaning.png',
  },
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://jedycleaning.com' },
  verification: {
    google: 'YOUR_GSC_VERIFICATION_CODE', // Replace with your Google Search Console verification code
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#E28DB0" />
        {/* Security meta tags — required for GitHub Pages (no HTTP headers available) */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://formsubmit.co; frame-src 'none';"
        />
      </head>
      <body
        className={`bg-cream-50 text-brown-800 ${jakarta.variable} ${grotesk.variable} font-sans`}
      >
        <LocalBusinessSchema />
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZNVLK51L9M"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZNVLK51L9M');
        `}</Script>
      </body>
    </html>
  );
}
