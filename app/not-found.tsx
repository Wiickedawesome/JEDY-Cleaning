import Link from 'next/link';
import type { Metadata } from 'next';
import { CONTACT, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: `The page you're looking for doesn't exist. Return to ${SITE.name} for professional house cleaning services in Knoxville, TN.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-50 px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-serif font-bold text-brand-mauve mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-brand-pink hover:bg-brand-mauve text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Back to Home
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center bg-white hover:bg-cream-50 text-brand-mauve px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-brand-lavender"
          >
            Call {CONTACT.phone}
          </a>
        </div>
      </div>
    </main>
  );
}
