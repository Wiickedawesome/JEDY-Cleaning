import { BUSINESS_HOURS, CONTACT, SERVICE_AREAS, SERVICE_TYPES, SITE } from '@/lib/constants';

export const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      `We serve Greater Knoxville, TN and surrounding communities including ${SERVICE_AREAS.join(', ')}.`,
  },
  {
    question: 'What cleaning services do you offer?',
    answer:
      `We offer ${SERVICE_TYPES.join(', ')} tailored to your home or business.`,
  },
  {
    question: 'Do you bring your own cleaning supplies?',
    answer:
      'Yes, JEDY Cleaning arrives fully equipped with all necessary supplies and equipment. We also offer eco-friendly, pet-safe cleaning product options upon request.',
  },
  {
    question: 'How do I get a free quote?',
    answer:
      `Call us at ${CONTACT.phone} or fill out our online contact form. We will provide a free, no-obligation quote based on your home size and specific cleaning needs.`,
  },
  {
    question: 'Are you insured and bonded?',
    answer:
      'Yes, JEDY Cleaning is fully insured and bonded, giving you complete peace of mind every time we clean your home or business.',
  },
  {
    question: 'What are your business hours?',
    answer:
      `Our regular business hours are ${BUSINESS_HOURS.days}, ${BUSINESS_HOURS.display}. If you send a quote request after hours, we will follow up as soon as possible.`,
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE.url}/contact#faq`,
  url: `${SITE.url}/contact#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  return (
    <section className="py-20 px-4 bg-white" role="region" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-mauve font-semibold text-sm tracking-widest uppercase mb-3">
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about {SITE.nameFull} in Knoxville, TN.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-cream-50 border border-brand-lavender rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-800 text-lg hover:bg-brand-pink-light/20 transition-colors duration-200">
                <span>{faq.question}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-lavender/30 text-brand-mauve flex items-center justify-center text-sm font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
