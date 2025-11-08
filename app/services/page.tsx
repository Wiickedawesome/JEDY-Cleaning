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
      icon: '🏠'
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
      icon: '✨'
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
      icon: '📅'
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
      icon: '🧽'
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
      icon: '📦'
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
      icon: '⭐'
    }
  ];

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-900 to-sage-800 text-cream-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-cream-100 max-w-3xl mx-auto">
            Professional cleaning solutions tailored to your needs in the Greater Knoxville area
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-sage-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-sage-700 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sage-600">
                      <span className="text-terracotta-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-terracotta-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Experience a Spotless Home?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and let us create a cleaning plan perfect for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8653332637"
              className="bg-white text-terracotta-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream-50 transition-colors"
            >
              Call (865) 333-2637
            </a>
            <a
              href="/contact"
              className="bg-sage-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sage-800 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
