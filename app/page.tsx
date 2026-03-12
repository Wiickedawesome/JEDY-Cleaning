import Link from 'next/link';
import type { Metadata } from 'next';
import { HomeIcon, SparklesIcon, BoxIcon, StarIcon, DiamondIcon, HandshakeIcon, LeafIcon, PhoneIcon, CheckIcon } from './components/Icons';
import TestimonialCarouselWrapper from './components/TestimonialCarouselWrapper';

export const metadata: Metadata = {
  title: 'Professional House Cleaning in Knoxville, TN | JEDY Cleaning',
  description:
    'JEDY Cleaning offers professional residential and commercial cleaning services in Knoxville, TN and surrounding areas. Trusted, eco-friendly, and satisfaction guaranteed. Call (865) 333-2637 for a free quote.',
  alternates: { canonical: 'https://jedycleaning.us' },
  openGraph: {
    title: 'Professional House Cleaning in Knoxville, TN | JEDY Cleaning',
    description:
      'Trusted residential and commercial cleaning services in Knoxville, TN. Eco-friendly products. Call for a free quote.',
    url: 'https://jedycleaning.us',
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative min-h-[70vh] md:min-h-[80vh] bg-gradient-to-br from-brand-pink-light/20 via-cream-50 to-brand-pink-light/20 flex items-center px-4 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>

        <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center py-16 z-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full border-2 border-brand-lavender shadow-lg">
              <SparklesIcon className="text-brand-mauve" size={18} />
              <span className="text-brand-mauve font-semibold text-sm tracking-wide">TRUSTED KNOXVILLE CLEANING SERVICE</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Professional Cleaning <span className="text-brand-mauve">in Knoxville</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light max-w-2xl">
              Serving Greater Knoxville with care, excellence, and attention to every detail
            </p>
            <p className="text-lg text-gray-500 mb-10 flex flex-wrap gap-3">
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-brand-lavender">Weekly</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-brand-lavender">Semi-Weekly</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-brand-lavender">Monthly</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-brand-lavender">Deep Cleaning</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-brand-lavender">Move In/Out</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8653332637"
                data-track-event="phone_click"
                data-track-label="home_hero_phone"
                data-track-category="contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-mauve text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-brand-pink"
              >
                <PhoneIcon size={20} />
                Call (865) 333-2637
              </a>
              <Link
                href="/contact"
                data-track-event="quote_click"
                data-track-label="home_hero_quote"
                data-track-category="lead"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-brand-mauve px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-brand-lavender"
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>
          <div className="relative hidden md:flex justify-center items-center h-[480px]">
            <img src="/graphics/JEDY-1.webp" alt="Professional House Cleaning in Knoxville, TN — JEDY" className="max-w-full max-h-full object-contain drop-shadow-2xl" width={1200} height={900} loading="eager" fetchPriority="high" decoding="async" sizes="(max-width: 768px) 100vw, 600px" />
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 bg-white">
        <div className="absolute inset-0 pattern-grid opacity-30"></div>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-mauve font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Professional cleaning solutions tailored to your needs and schedule
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative z-10">
                <div className="icon-container-lg bg-brand-lavender/20 text-brand-mauve mb-5 group-hover:scale-105 transition-transform duration-300">
                  <HomeIcon size={36} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Regular Cleaning</h3>
                <p className="text-gray-600 leading-relaxed">Weekly, semi-weekly, or monthly service to keep your home consistently spotless and welcoming</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative z-10">
                <div className="icon-container-lg bg-brand-pink-light/30 text-brand-pink mb-5 group-hover:scale-105 transition-transform duration-300">
                  <SparklesIcon size={36} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Deep Cleaning</h3>
                <p className="text-gray-600 leading-relaxed">Thorough top-to-bottom cleaning for a fresh start or seasonal refresh</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative z-10">
                <div className="icon-container-lg bg-brand-lavender/20 text-brand-mauve mb-5 group-hover:scale-105 transition-transform duration-300">
                  <BoxIcon size={36} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Move In/Out</h3>
                <p className="text-gray-600 leading-relaxed">Complete cleaning for moving transitions to ensure a smooth start</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-14">
            <Link
              href="/services"
              data-track-event="service_page_click"
              data-track-label="home_services_cta"
              data-track-category="navigation"
              className="inline-block bg-brand-pink hover:bg-brand-mauve text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-brand-pink"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 bg-gradient-to-b from-cream-50 to-brand-pink-light/20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-mauve font-semibold text-sm tracking-widest uppercase mb-3">The JEDY Difference</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Why Choose JEDY Cleaning?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group">
              <div className="icon-container bg-yellow-50 text-yellow-500 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <StarIcon size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">Trusted</h3>
              <p className="text-gray-600 leading-relaxed">Highly rated on Google with satisfied clients across Knoxville</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group">
              <div className="icon-container bg-brand-lavender/20 text-brand-mauve mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <DiamondIcon size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-800 mb-3">Quality</h3>
              <p className="text-gray-600 leading-relaxed">Meticulous attention to detail in every clean</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group">
              <div className="icon-container bg-brand-pink-light/30 text-brand-pink mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <HandshakeIcon size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">Reliable</h3>
              <p className="text-gray-600 leading-relaxed">Always on time, every time, with consistent excellence</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group">
              <div className="icon-container bg-brand-lavender/20 text-brand-mauve mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <LeafIcon size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-800 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">Safe, effective products for your family and pets</p>
            </div>
          </div>
        </div>
      </section>

            {/* Testimonials */}
      <TestimonialCarouselWrapper />

      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Ready for a <span className="text-brand-mauve">Cleaner Home?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for a free quote and experience the JEDY difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8653332637"
                  data-track-event="phone_click"
                  data-track-label="home_bottom_phone"
                  data-track-category="contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-mauve text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <PhoneIcon size={20} />
                  Call (865) 333-2637
                </a>
                <Link
                  href="/contact"
                  data-track-event="quote_click"
                  data-track-label="home_bottom_quote"
                  data-track-category="lead"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/80 text-brand-mauve px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-brand-lavender"
                >
                  Get a Free Quote →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-warm p-8 border border-brand-lavender">
              <ul className="space-y-5">
                {[
                  'Free, no-obligation quote',
                  'Fully insured & bonded',
                  '100% satisfaction guaranteed',
                  'Locally owned & operated in Knoxville',
                  'Eco-friendly cleaning products available',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-lg">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-pink-light/40 flex items-center justify-center">
                      <CheckIcon className="text-brand-mauve" size={16} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
