import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-cream-50 to-sage-50 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-sage-900 mb-6">
            Professional Cleaning Services in Knoxville
          </h1>
          <p className="text-xl md:text-2xl text-sage-700 mb-4 font-light">
            Serving Greater Knoxville with care and excellence
          </p>
          <p className="text-lg text-sage-600 mb-8">
            Weekly • Semi-Weekly • Monthly • Deep Cleaning • Move In/Out
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8653332637"
              className="bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Call (865) 333-2637
            </a>
            <Link
              href="/contact"
              className="bg-sage-700 hover:bg-sage-800 text-cream-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl font-bold text-sage-900 text-center mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-center text-sage-600 mb-16 text-lg">
            Professional cleaning solutions tailored to your needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Regular Cleaning',
                description: 'Weekly, semi-weekly, or monthly service to keep your home spotless',
                icon: '🏡',
              },
              {
                title: 'Deep Cleaning',
                description: 'Thorough top-to-bottom cleaning for a fresh start',
                icon: '✨',
              },
              {
                title: 'Move In/Out',
                description: 'Complete cleaning for moving transitions',
                icon: '📦',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">{service.title}</h3>
                <p className="text-sage-700">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl font-bold text-sage-900 text-center mb-16">
            Why Choose JEDY Cleaning?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⭐', title: 'Trusted', desc: 'Highly rated on Google' },
              { icon: '💎', title: 'Quality', desc: 'Attention to detail' },
              { icon: '🤝', title: 'Reliable', desc: 'Always on time' },
              { icon: '🌿', title: 'Eco-Friendly', desc: 'Safe products' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-sage-900 mb-2">{item.title}</h3>
                <p className="text-sage-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-terracotta-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready for a Spotless Home?
          </h2>
          <p className="text-xl mb-8 text-cream-100">
            Contact us today for a free quote and experience the JEDY difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8653332637"
              className="bg-white text-terracotta-600 hover:bg-cream-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              (865) 333-2637
            </a>
            <Link
              href="/contact"
              className="bg-sage-900 hover:bg-sage-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
