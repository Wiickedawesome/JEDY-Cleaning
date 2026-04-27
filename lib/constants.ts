export const SITE = {
  name: 'JEDY Cleaning',
  nameFull: 'JEDY Cleaning Services',
  url: 'https://jedycleaning.us',
} as const;

export const SEO = {
  locale: 'en_US',
  defaultOgImage: '/graphics/icon-512x512.png',
  defaultOgImageWidth: 512,
  defaultOgImageHeight: 512,
  defaultOgImageAlt: 'JEDY Cleaning logo',
} as const;

export const CONTACT = {
  phone: '(865) 333-2637',
  phoneHref: 'tel:8653332637',
  phoneSchema: '+1-865-333-2637',
  email: 'jedycleaning@gmail.com',
} as const;

export const BUSINESS_HOURS = {
  days: 'Monday through Saturday',
  shortDays: 'Mon-Sat',
  display: '8:00 AM-6:00 PM',
  opens: '08:00',
  closes: '18:00',
} as const;

export const SERVICE_AREAS = [
  'Knoxville',
  'West Knoxville',
  'North Knoxville',
  'South Knoxville',
  'Downtown Knoxville',
  'Farragut',
  'Maryville',
  'Oak Ridge',
] as const;

export const SERVICE_TYPES = [
  'Weekly cleaning',
  'Semi-weekly cleaning',
  'Monthly cleaning',
  'Deep cleaning',
  'Move-in cleaning',
  'Move-out cleaning',
  'Custom cleaning plans',
] as const;
