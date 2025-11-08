export default function ServicesPage() {
  const services = [
    {
      title: 'Weekly Cleaning',
      description: 'Regular weekly cleaning services to keep your home consistently fresh and spotless. Perfect for busy families and professionals.',
      features: [
        'Thorough dusting and vacuuming',
        'Kitchen and bathroom sanitization',
        'Floor cleaning and mopping',
        'Trash removal'
      ],
      icon: '🏠',
      color: 'from-sage-50 to-cream-50',
      border: 'border-sage-200'
    },
    {
      title: 'Semi-Weekly Cleaning',
      description: 'Bi-weekly cleaning services that maintain a clean and healthy living environment without the weekly commitment.',
      features: [
        'Comprehensive cleaning routine',
        'Flexible scheduling',
        'Cost-effective solution',
        'Consistent quality'
      ],
      icon: '✨',
      color: 'from-terracotta-50 to-cream-50',
      border: 'border-terracotta-200'
    },
    {
      title: 'Monthly Cleaning',
      description: 'Monthly deep maintenance to keep your space in great condition. Ideal for smaller homes or supplementing your own cleaning.',
      features: [
        'Full home cleaning',
        'Detailed attention',
        'Budget-friendly option',
        'Professional results'
      ],
      icon: '📅',
      color: 'from-cream-100 to-sage-50',
      border: 'border-sage-200'
    },
    {
      title: 'Deep Cleaning',
      description: 'Intensive, top-to-bottom cleaning for those times when your home needs extra attention. Perfect for seasonal cleaning or special occasions.',
      features: [
        'Baseboards and trim cleaning',
        'Inside appliances and cabinets',
        'Window and blind cleaning',
        'Detailed grout and tile work'
      ],
      icon: '🧽',
      color: 'from-terracotta-50 to-cream-50',
      border: 'border-terracotta-200'
    },
    {
      title: 'Moving Services',
      description: 'Make your move stress-free with our specialized cleaning services. We handle move-in and move-out cleaning to ensure a fresh start.',
      features: [
        'Move-in cleaning preparation',
        'Move-out cleaning for deposits',
        'Empty home deep cleaning',
        'Flexible scheduling around your move'
      ],
      icon: '📦',
      color: 'from-sage-50 to-cream-50',
      border: 'border-sage-200'
    },
    {
      title: 'Custom Cleaning',
      description: 'We offer much more! Have specific cleaning needs? We create custom cleaning plans tailored to your unique requirements and schedule.',
      features: [
        'Personalized cleaning plans',
        'Special event preparation',
        'One-time or recurring services',
        'Flexible service options'
      ],
      icon: '⭐',
      color: 'from-cream-100 to-terracotta-50',
      border: 'border-terracotta-200'
    }
  ];

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-900 via-sage-800 to-terracotta-700 text-cream-50 py-24 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-600 opacity-10 rounded-full blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold tracking-wide mb-6">
            COMPREHENSIVE CLEANING SOLUTIONS
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-cream-100 max-w-3xl mx-auto">
            Professional cleaning solutions tailored to your needs in the Greater Knoxville area
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24">
        <div className="absolute inset-0 pattern-grid"></div>
        <div className="relative max-w-6xl mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${service.color} rounded-2xl border-2 ${service.border} shadow-warm p-8 hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-2 group overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-50 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-5 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sage-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sage-700">
                        <span className="text-terracotta-600 mr-2 font-bold text-lg">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-terracotta-600 via-terracotta-700 to-sage-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Experience a Spotless Home?
          </h2>
          <p className="text-xl mb-10 text-cream-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us create a cleaning plan perfect for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8653332637"
              className="bg-white text-terracotta-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-cream-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white"
            >
              📞 Call (865) 333-2637
            </a>
            <a
              href="/contact"
              className="bg-sage-900 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-sage-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-sage-700"
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
