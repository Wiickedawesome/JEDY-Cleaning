export default function LocalBusinessSchema() {
  const sameAs: string[] = [
    // TODO: Replace with your Google Business Profile URL
    // Example: "https://www.google.com/maps?cid=YOUR_CID"
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    name: 'JEDY Cleaning',
    image: 'https://jedycleaning.com/graphics/jedycleaning.png',
    url: 'https://jedycleaning.com',
    telephone: '+1-865-333-2637',
    email: 'jedycleaning@gmail.com',
    description:
      'Professional house cleaning services in Knoxville, TN. Offering weekly, deep, and move-in/out cleaning. Serving West Knoxville, North Knoxville, South Knoxville, Downtown Knoxville, Farragut, Maryville, and Oak Ridge.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Knoxville',
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.9606,
      longitude: -83.9207,
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
