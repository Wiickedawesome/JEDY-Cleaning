import Link from 'next/link';
import TestimonialCarousel from './components/TestimonialCarousel';
import { HomeIcon, SparklesIcon, BoxIcon, StarIcon, DiamondIcon, HandshakeIcon, LeafIcon, QuoteIcon, PhoneIcon } from './components/Icons';

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative min-h-[70vh] md:min-h-[80vh] bg-gradient-to-br from-teal-50 via-cream-50 to-teal-50 flex items-center px-4 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>

        <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center py-16 z-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full border-2 border-teal-200 shadow-lg">
              <SparklesIcon className="text-teal-600" size={18} />
              <span className="text-teal-700 font-semibold text-sm tracking-wide">TRUSTED KNOXVILLE CLEANING SERVICE</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Professional Cleaning <span className="text-teal-600">in Knoxville</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light max-w-2xl">
              Serving Greater Knoxville with care, excellence, and attention to every detail
            </p>
            <p className="text-lg text-gray-500 mb-10 flex flex-wrap gap-3">
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-teal-200">Weekly</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-teal-200">Semi-Weekly</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-teal-200">Monthly</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-teal-200">Deep Cleaning</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm border border-teal-200">Move In/Out</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8653332637"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-teal-700"
              >
                <PhoneIcon size={20} />
                Call (865) 333-2637
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-teal-700 px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-teal-300"
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>
          <div className="relative hidden md:flex justify-center items-center h-[480px]">
            <img src="/graphics/JEDY-1.png" alt="JEDY Cleaning Mascot" className="max-w-full max-h-full object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 bg-white">
        <div className="absolute inset-0 pattern-grid opacity-30"></div>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Professional cleaning solutions tailored to your needs and schedule
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-gradient-to-br from-teal-50 to-cream-50 p-8 rounded-2xl border-2 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-60 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="icon-container-lg bg-teal-100 text-teal-600 mb-5 group-hover:scale-110">
                  <HomeIcon size={36} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Regular Cleaning</h3>
                <p className="text-gray-600 leading-relaxed">Weekly, semi-weekly, or monthly service to keep your home consistently spotless and welcoming</p>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-cream-100 to-teal-50 p-8 rounded-2xl border-2 border-cream-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-60 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="icon-container-lg bg-pink-50 text-pink-400 mb-5 group-hover:scale-110">
                  <SparklesIcon size={36} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Deep Cleaning</h3>
                <p className="text-gray-600 leading-relaxed">Thorough top-to-bottom cleaning for a fresh start or seasonal refresh</p>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-teal-50 to-cream-100 p-8 rounded-2xl border-2 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-60 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="icon-container-lg bg-teal-100 text-teal-600 mb-5 group-hover:scale-110">
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
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-teal-700"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 bg-gradient-to-b from-cream-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-3">The JEDY Difference</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Why Choose JEDY Cleaning?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
              <div className="icon-container bg-yellow-50 text-yellow-500 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6">
                <StarIcon size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">Trusted</h3>
              <p className="text-gray-600 leading-relaxed">Highly rated on Google with satisfied clients across Knoxville</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
              <div className="icon-container bg-teal-50 text-teal-600 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6">
                <DiamondIcon size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-800 mb-3">Quality</h3>
              <p className="text-gray-600 leading-relaxed">Meticulous attention to detail in every clean</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
              <div className="icon-container bg-pink-50 text-pink-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6">
                <HandshakeIcon size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">Reliable</h3>
              <p className="text-gray-600 leading-relaxed">Always on time, every time, with consistent excellence</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
              <div className="icon-container bg-green-50 text-green-600 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6">
                <LeafIcon size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-800 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">Safe, effective products for your family and pets</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 bg-white">
        <div className="absolute inset-0 pattern-grid opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="bg-gradient-to-br from-teal-50 to-cream-50 p-12 rounded-3xl border-2 border-teal-200 shadow-xl">
            <div className="flex justify-center mb-6">
              <QuoteIcon className="text-teal-400" size={56} />
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 italic">
              "Ready to experience the cleanest home you have ever had?"
            </blockquote>
            <p className="text-lg text-gray-600 mb-2">
              Join hundreds of satisfied customers in the Greater Knoxville area who trust JEDY Cleaning Services
            </p>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="text-yellow-400" size={28} />
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Testimonials */}
      <TestimonialCarousel />

      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready for a Cleaner Home?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Contact us today for a free quote and experience the JEDY difference.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-cream-50 text-teal-700 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Started Today →
          </Link>
        </div>
      </section>
    </main>
  );
}
