import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import { Outfit } from 'next/font/google';
import { CONTACT, SEO, SITE } from '@/lib/constants';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});

const verification: Metadata['verification'] = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
    ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
    : undefined,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: {
    default: `${SITE.name} — House Cleaning Services in Knoxville, TN`,
    template: `%s | ${SITE.name}`,
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
  creator: SITE.nameFull,
  publisher: SITE.nameFull,
  category: 'Home services',
  classification: 'Cleaning services',
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  verification,
  openGraph: {
    title: `${SITE.name} — House Cleaning Services in Knoxville, TN`,
    description:
      `Trusted, affordable house cleaning in Knoxville, TN. Weekly, deep, and move-in/out services. Call ${CONTACT.phone} for a free quote.`,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
    locale: SEO.locale,
    images: [
      {
        url: SEO.defaultOgImage,
        width: SEO.defaultOgImageWidth,
        height: SEO.defaultOgImageHeight,
        alt: SEO.defaultOgImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${SITE.name} — House Cleaning in Knoxville, TN`,
    description:
      'Professional, trusted house cleaning in Knoxville, TN. Weekly, deep, and move-out cleaning. Get a free quote today.',
    images: [SEO.defaultOgImage],
  },
  icons: {
    icon: '/graphics/favicon-32x32.png',
    apple: '/graphics/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#A85070" />
        {/* Preconnect hints for external resources */}
        <link rel="preconnect" href="https://formsubmit.co" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Security meta tags — required for GitHub Pages (no HTTP headers available) */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://formsubmit.co https://www.googletagmanager.com; frame-src https://maps.google.com https://www.google.com https://www.googletagmanager.com;"
        />
      </head>
      <body
        className={`bg-cream-50 text-brown-800 ${outfit.variable} font-sans`}
      >
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5R3V5QKN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-brand-mauve focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:font-semibold"
        >
          Skip to content
        </a>
        <LocalBusinessSchema />
        <div className="flex flex-col min-h-screen">
          <Header />
          <div id="main-content" tabIndex={-1} className="flex-1">{children}</div>
          <Footer />
        </div>
        <Script id="gtm-init" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5R3V5QKN');

          document.addEventListener('click', function(event) {
            var target = event.target instanceof Element ? event.target.closest('[data-track-event]') : null;
            if (!target) return;

            var eventName = target.getAttribute('data-track-event');
            if (!eventName) return;

            var eventLabel = target.getAttribute('data-track-label') || undefined;
            var eventCategory = target.getAttribute('data-track-category') || 'engagement';
            window.dataLayer.push({
              event: eventName,
              event_category: eventCategory,
              event_label: eventLabel,
            });
          });

          window.addEventListener('jedy:quote-form-submit', function(event) {
            var detail = event instanceof CustomEvent ? event.detail || {} : {};
            window.dataLayer.push({
              event: detail.eventName || 'generate_lead',
              event_category: 'lead',
              event_label: detail.label || 'contact_form',
              value: typeof detail.value === 'number' ? detail.value : undefined,
            });
          });
        `}</Script>
      </body>
    </html>
  );
}
