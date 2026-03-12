import { HeartIcon, HandshakeIcon, SparklesIcon, PhoneIcon, CheckIcon } from '../components/Icons';
import type { Metadata } from 'next';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'About JEDY Cleaning — Knoxville, TN',
  description:
    'Learn about JEDY Cleaning, a locally owned and operated cleaning service in Knoxville, TN. We serve West Knoxville, North Knoxville, Farragut, and surrounding areas with reliable, eco-friendly cleaning.',
  alternates: { canonical: 'https://jedycleaning.us/about' },
  openGraph: {
    title: 'About JEDY Cleaning — Knoxville, TN',
    description: 'Learn about JEDY Cleaning, your trusted partner for professional cleaning in Knoxville, TN.',
    url: 'https://jedycleaning.us/about',
    images: [{ url: '/graphics/Jedy.webp', width: 600, height: 600, alt: 'JEDY Cleaning Mascot' }],
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://jedycleaning.us/' },
    { name: 'About', url: 'https://jedycleaning.us/about' }
  ];

  return (
    <main className="min-h-screen bg-cream-50">
      <BreadcrumbSchema items={breadcrumbs} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-pink-light/20 via-brand-lavender/20 to-cream-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            About JEDY Cleaning
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for professional cleaning in the Greater Knoxville area
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl mb-6">
                JEDY Cleaning Services was founded with a simple mission: to bring warmth, care, and 
                exceptional cleanliness to homes and businesses throughout the Greater Knoxville area.
              </p>
              <p className="text-lg mb-6">
                We understand that your home is your sanctuary, and maintaining it should never feel 
                like a burden. That&apos;s why we&apos;ve dedicated ourselves to providing reliable, thorough, 
                and personalized cleaning services that let you focus on what matters most.
              </p>
              <p className="text-lg">
                With years of experience and a genuine passion for what we do, we treat every space 
                as if it were our own, delivering consistent quality and attention to detail that our 
                clients have come to trust and appreciate.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/graphics/Jedy.webp" 
                alt="JEDY — Your Trusted House Cleaning Partner in Knoxville, TN" 
                className="max-w-full h-auto max-h-[420px] object-contain drop-shadow-lg mx-auto"
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="icon-container-lg bg-brand-pink-light/30 text-brand-pink mx-auto mb-4">
                <HeartIcon size={36} />
              </div>
              <h3 className="text-2xl font-bold text-brand-mauve mb-4">Care & Attention</h3>
              <p className="text-gray-600">
                We treat every home with the same care and respect we'd give our own. 
                Your satisfaction is our priority.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-container-lg bg-brand-lavender/20 text-brand-mauve mx-auto mb-4">
                <HandshakeIcon size={36} />
              </div>
              <h3 className="text-2xl font-bold text-brand-mauve mb-4">Trust & Reliability</h3>
              <p className="text-gray-600">
                Count on us to show up on time, every time, with consistent, high-quality 
                service you can depend on.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-container-lg bg-yellow-50 text-yellow-500 mx-auto mb-4">
                <SparklesIcon size={36} />
              </div>
              <h3 className="text-2xl font-bold text-brand-mauve mb-4">Excellence</h3>
              <p className="text-gray-600">
                We go beyond basic cleaning to deliver exceptional results that make your 
                space truly shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Why Choose JEDY Cleaning?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-lavender/50">
              <h3 className="text-2xl font-bold text-brand-mauve mb-4">
                Professional & Experienced
              </h3>
              <p className="text-gray-600">
                Our team brings years of expertise and thorough training to every job. 
                We know the right techniques and products to use for every surface and situation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-lavender/50">
              <h3 className="text-2xl font-bold text-brand-mauve mb-4">
                Flexible & Personalized
              </h3>
              <p className="text-gray-600">
                We work around your schedule and customize our services to meet your specific 
                needs, whether it's weekly maintenance or a one-time deep clean.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-lavender/50">
              <h3 className="text-2xl font-bold text-brand-mauve mb-4">
                Local & Community-Focused
              </h3>
              <p className="text-gray-600">
                As a local business, we're invested in our community. We build lasting 
                relationships with our clients based on trust and mutual respect.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-lavender/50">
              <h3 className="text-2xl font-bold text-brand-mauve mb-4">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                We stand behind our work. If you're not completely satisfied, we'll make it 
                right. Your happiness is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Experience the <span className="text-brand-mauve">JEDY Difference</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our growing family of satisfied clients in the Greater Knoxville area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8653332637"
                  data-track-event="phone_click"
                  data-track-label="about_phone"
                  data-track-category="contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-mauve text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <PhoneIcon size={20} />
                  Call (865) 333-2637
                </a>
                <a
                  href="/contact"
                  data-track-event="quote_click"
                  data-track-label="about_quote"
                  data-track-category="lead"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/80 text-brand-mauve px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-brand-lavender"
                >
                  Contact Us Today →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-warm p-8 border border-brand-lavender">
              <ul className="space-y-5">
                {[
                  'Trusted by hundreds of Knoxville families',
                  'Consistent, reliable scheduling',
                  'Trained & background-checked staff',
                  'Personalized cleaning plans',
                  'Eco-friendly products available',
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
