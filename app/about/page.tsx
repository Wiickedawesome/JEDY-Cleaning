import { HeartIcon, HandshakeIcon, SparklesIcon } from '../components/Icons';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-teal-100 to-cream-100 text-brown-900 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            About JEDY Cleaning
          </h1>
          <p className="text-xl md:text-2xl text-brown-700 max-w-3xl mx-auto">
            Your trusted partner for professional cleaning in the Greater Knoxville area
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-brown-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-brown-700">
            <p className="text-xl mb-6">
              JEDY Cleaning Services was founded with a simple mission: to bring warmth, care, and 
              exceptional cleanliness to homes and businesses throughout the Greater Knoxville area.
            </p>
            <p className="text-lg mb-6">
              We understand that your home is your sanctuary, and maintaining it should never feel 
              like a burden. That's why we've dedicated ourselves to providing reliable, thorough, 
              and personalized cleaning services that let you focus on what matters most.
            </p>
            <p className="text-lg">
              With years of experience and a genuine passion for what we do, we treat every space 
              as if it were our own, delivering consistent quality and attention to detail that our 
              clients have come to trust and appreciate.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-brown-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="icon-container-lg bg-pink-50 text-pink-500 mx-auto mb-4">
                <HeartIcon size={36} />
              </div>
              <h3 className="text-2xl font-bold text-teal-700 mb-4">Care & Attention</h3>
              <p className="text-brown-700">
                We treat every home with the same care and respect we'd give our own. 
                Your satisfaction is our priority.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-container-lg bg-teal-50 text-teal-600 mx-auto mb-4">
                <HandshakeIcon size={36} />
              </div>
              <h3 className="text-2xl font-bold text-teal-700 mb-4">Trust & Reliability</h3>
              <p className="text-brown-700">
                Count on us to show up on time, every time, with consistent, high-quality 
                service you can depend on.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-container-lg bg-yellow-50 text-yellow-500 mx-auto mb-4">
                <SparklesIcon size={36} />
              </div>
              <h3 className="text-2xl font-bold text-teal-700 mb-4">Excellence</h3>
              <p className="text-brown-700">
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
          <h2 className="text-4xl font-serif font-bold text-brown-900 mb-12 text-center">
            Why Choose JEDY Cleaning?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Professional & Experienced
              </h3>
              <p className="text-brown-700">
                Our team brings years of expertise and thorough training to every job. 
                We know the right techniques and products to use for every surface and situation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Flexible & Personalized
              </h3>
              <p className="text-brown-700">
                We work around your schedule and customize our services to meet your specific 
                needs, whether it's weekly maintenance or a one-time deep clean.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Local & Community-Focused
              </h3>
              <p className="text-brown-700">
                As a local business, we're invested in our community. We build lasting 
                relationships with our clients based on trust and mutual respect.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Quality Guaranteed
              </h3>
              <p className="text-brown-700">
                We stand behind our work. If you're not completely satisfied, we'll make it 
                right. Your happiness is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Experience the JEDY Difference
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Join our growing family of satisfied clients in the Greater Knoxville area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8653332637"
              className="bg-white hover:bg-cream-50 text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call (865) 333-2637
            </a>
            <a
              href="/contact"
              className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-teal-400"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
