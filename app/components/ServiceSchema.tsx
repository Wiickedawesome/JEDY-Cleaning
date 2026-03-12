import { CONTACT, SITE } from '@/lib/constants';

interface ServiceSchemaProps {
  services: {
    name: string;
    description: string;
  }[];
}

export default function ServiceSchema({ services }: ServiceSchemaProps) {
  const schemas = services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      url: SITE.url,
      telephone: CONTACT.phoneSchema,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Knoxville',
        addressRegion: 'TN',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Knoxville',
      containedInPlace: {
        '@type': 'State',
        name: 'Tennessee',
      },
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
