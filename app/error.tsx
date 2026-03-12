'use client';

import { useEffect } from 'react';
import { CONTACT } from '@/lib/constants';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // error is automatically reported by Next.js error boundary
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again or contact us at{' '}
          <a href={CONTACT.phoneHref} className="text-brand-mauve hover:underline">
            {CONTACT.phone}
          </a>
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-brand-mauve text-white font-semibold rounded-lg hover:bg-brand-mauve/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-mauve focus:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
