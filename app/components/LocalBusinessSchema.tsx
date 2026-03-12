import { CONTACT, SITE } from '@/lib/constants';

export default function LocalBusinessSchema() {
  const sameAs: string[] = [
    'https://www.google.com/maps/place/JEDY+Cleaning+Services/@35.9974533,-83.8591188,17z/data=!4m15!1m8!3m7!1s0x4aa29b3890a0075d:0xfff1f081ea797b70!2sJEDY+Cleaning+Services!8m2!3d35.9974533!4d-83.8591188!10e1!16s%2Fg%2F11pv0nr9zw!3m5!1s0x4aa29b3890a0075d:0xfff1f081ea797b70!8m2!3d35.9974533!4d-83.8591188!16s%2Fg%2F11pv0nr9zw',
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    name: SITE.name,
    image: `${SITE.url}/graphics/jedycleaning.webp`,
    url: SITE.url,
    telephone: CONTACT.phoneSchema,
    email: CONTACT.email,
    description:
      'Professional house cleaning services in Knoxville, TN. Offering weekly, deep, and move-in/out cleaning. Serving West Knoxville, North Knoxville, South Knoxville, Downtown Knoxville, Farragut, Maryville, and Oak Ridge.',
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
    areaServed: [
      { '@type': 'City', name: 'Knoxville', addressRegion: 'TN' },
      { '@type': 'City', name: 'Farragut', addressRegion: 'TN' },
      { '@type': 'City', name: 'Maryville', addressRegion: 'TN' },
      { '@type': 'City', name: 'Oak Ridge', addressRegion: 'TN' },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
