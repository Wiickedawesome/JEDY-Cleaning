import { BUSINESS_HOURS, CONTACT, SEO, SERVICE_AREAS, SERVICE_TYPES, SITE } from '@/lib/constants';

export default function LocalBusinessSchema() {
  const sameAs: string[] = [
    'https://www.google.com/maps/place/JEDY+Cleaning+Services/@35.9974533,-83.8591188,17z/data=!4m15!1m8!3m7!1s0x4aa29b3890a0075d:0xfff1f081ea797b70!2sJEDY+Cleaning+Services!8m2!3d35.9974533!4d-83.8591188!10e1!16s%2Fg%2F11pv0nr9zw!3m5!1s0x4aa29b3890a0075d:0xfff1f081ea797b70!8m2!3d35.9974533!4d-83.8591188!16s%2Fg%2F11pv0nr9zw',
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    image: `${SITE.url}${SEO.defaultOgImage}`,
    logo: `${SITE.url}${SEO.defaultOgImage}`,
    url: SITE.url,
    telephone: CONTACT.phoneSchema,
    email: CONTACT.email,
    description:
      `Professional house cleaning services in Knoxville, TN. Offering ${SERVICE_TYPES.join(', ')}. Serving ${SERVICE_AREAS.join(', ')} and surrounding communities.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Knoxville',
      addressRegion: 'TN',
      postalCode: '37909',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.9974533,
      longitude: -83.8591188,
    },
    hasMap: sameAs[0],
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'Place',
      name: area,
      containedInPlace: {
        '@type': 'State',
        name: 'Tennessee',
      },
    })),
    serviceType: [...SERVICE_TYPES],
    knowsAbout: [...SERVICE_TYPES, 'Eco-friendly cleaning', 'Residential cleaning', 'Move-out cleaning'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.phoneSchema,
      email: CONTACT.email,
      contactType: 'customer service',
      areaServed: 'US-TN',
      availableLanguage: 'English',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: BUSINESS_HOURS.opens,
        closes: BUSINESS_HOURS.closes,
      },
    ],
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
