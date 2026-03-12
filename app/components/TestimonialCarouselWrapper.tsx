'use client';

import dynamic from 'next/dynamic';

const TestimonialCarousel = dynamic(() => import('./TestimonialCarousel'), {
  ssr: false,
  loading: () => (
    <div className="h-64 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-brand-mauve border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function TestimonialCarouselWrapper() {
  return <TestimonialCarousel />;
}
