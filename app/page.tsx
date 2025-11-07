export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-cream-50 to-sage-50 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-sage-900 mb-6">
            Welcome to JEDY Cleaning
          </h1>
          <p className="text-xl md:text-2xl text-sage-700 mb-8 font-light">
            Bringing cleanliness and peace of mind to your home
          </p>
          <button className="bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl font-bold text-sage-900 text-center mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Home Cleaning',
                description: 'Regular and deep cleaning for your home',
                icon: '🏡',
              },
              {
                title: 'Office Cleaning',
                description: 'Professional cleaning for your workspace',
                icon: '💼',
              },
              {
                title: 'Deep Cleaning',
                description: 'Thorough cleaning for special occasions',
                icon: '✨',
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
        </div>
      </section>
    </main>
  );
}
