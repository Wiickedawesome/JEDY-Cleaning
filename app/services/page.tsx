import { HomeIcon, SparklesIcon, CalendarIcon, SpongeIcon, BoxIcon, StarIcon, CheckIcon, PhoneIcon } from '../components/Icons';
import type { Metadata } from 'next';
import ServiceSchema from '../components/ServiceSchema';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const iconMap: Record<string, React.ReactNode> = {
  home: <HomeIcon size={32} />,
  sparkles: <SparklesIcon size={32} />,
  calendar: <CalendarIcon size={32} />,
  sponge: <SpongeIcon size={32} />,
  box: <BoxIcon size={32} />,
  star: <StarIcon size={32} />,
};

export const metadata: Metadata = {
  title: 'Cleaning Services in Knoxville, TN | JEDY Cleaning',
  description:
    "Explore JEDY Cleaning's full range of services: standard cleaning, deep cleaning, recurring maintenance, move-in/out, and custom plans for Knoxville, TN homes and businesses.",
  alternates: { canonical: 'https://jedycleaning.us/services' },
  openGraph: {
    title: 'Cleaning Services in Knoxville, TN | JEDY Cleaning',
    description: 'Professional cleaning services including deep cleaning, recurring maintenance, and move-in/out cleaning.',
    url: 'https://jedycleaning.us/services',
    images: [{ url: '/graphics/jedycleaning.webp', width: 900, height: 700, alt: 'JEDY Professional Cleaning Services' }],
  },
};

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
      icon: 'home',
      iconColor: 'bg-brand-lavender/20 text-brand-mauve',
      color: 'from-brand-pink-light/20 to-cream-50',
      border: 'border-brand-lavender'
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
      icon: 'sparkles',
      iconColor: 'bg-brand-pink-light/30 text-brand-pink',
      color: 'from-cream-50 to-brand-pink-light/20',
      border: 'border-brand-lavender'
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
      icon: 'calendar',
      iconColor: 'bg-brand-lavender/20 text-brand-mauve',
      color: 'from-cream-100 to-brand-pink-light/20',
      border: 'border-brand-lavender'
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
      icon: 'sponge',
      iconColor: 'bg-brand-pink-light/30 text-brand-pink',
      color: 'from-brand-pink-light/20 to-cream-50',
      border: 'border-brand-lavender'
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
      icon: 'box',
      iconColor: 'bg-brand-lavender/20 text-brand-mauve',
      color: 'from-brand-pink-light/20 to-cream-50',
      border: 'border-brand-lavender'
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
      icon: 'star',
      iconColor: 'bg-yellow-50 text-yellow-500',
      color: 'from-cream-100 to-brand-pink-light/20',
      border: 'border-brand-lavender'
    }
  ];

  // Prepare service data for schema
  const serviceSchemaData = services.map(s => ({
    name: s.title,
    description: s.description
  }));

  const breadcrumbs = [
    { name: 'Home', url: 'https://jedycleaning.us/' },
    { name: 'Services', url: 'https://jedycleaning.us/services' }
  ];

  return (
    <main className="min-h-screen bg-cream-50">
      <ServiceSchema services={serviceSchemaData} />
      <BreadcrumbSchema items={breadcrumbs} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-pink-light/20 via-brand-lavender/20 to-cream-100 py-24 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lavender opacity-20 rounded-full blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <span className="inline-block px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-brand-lavender text-sm font-semibold tracking-wide mb-6 text-brand-mauve">
                COMPREHENSIVE CLEANING SOLUTIONS
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-xl">
                Professional cleaning solutions tailored to your needs in the Greater Knoxville area
              </p>
            </div>
            <div className="relative hidden md:flex justify-center items-center">
              <img 
                src="/graphics/jedycleaning.webp" 
                alt="Professional Cleaning Services in Knoxville, TN — JEDY" 
                className="max-w-full max-h-[400px] object-contain drop-shadow-lg"
                width={900}
                height={700}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
          </div>
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
                className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative z-10">
                  <div className={`icon-container-lg ${service.iconColor} mb-5 group-hover:scale-105 transition-transform duration-300`}>
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 gap-2">
                        <CheckIcon className="text-brand-mauve mt-0.5 flex-shrink-0" size={18} />
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
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Ready for a <span className="text-brand-mauve">Spotless Home?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for a free consultation and let us create a cleaning plan perfect for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8653332637"
                  data-track-event="phone_click"
                  data-track-label="services_phone"
                  data-track-category="contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-mauve text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <PhoneIcon size={20} />
                  Call (865) 333-2637
                </a>
                <a
                  href="/contact"
                  data-track-event="quote_click"
                  data-track-label="services_quote"
                  data-track-category="lead"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/80 text-brand-mauve px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-brand-lavender"
                >
                  Get a Free Quote →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-warm p-8 border border-brand-lavender">
              <ul className="space-y-5">
                {[
                  'Free, no-obligation consultation',
                  'Custom cleaning plans for your home',
                  'Fully insured & bonded team',
                  '100% satisfaction guaranteed',
                  'Flexible scheduling to fit your life',
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
