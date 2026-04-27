import Link from 'next/link';
import type { Metadata } from 'next';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { CONTACT, SEO, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for JEDY Cleaning — learn how we collect, use, and protect your personal information when you use our cleaning services in Knoxville, TN.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE.url}/privacy` },
  openGraph: {
    title: 'Privacy Policy | JEDY Cleaning',
    description: 'Learn how JEDY Cleaning protects your personal information.',
    url: `${SITE.url}/privacy`,
    images: [{ url: SEO.defaultOgImage, width: SEO.defaultOgImageWidth, height: SEO.defaultOgImageHeight, alt: SEO.defaultOgImageAlt }],
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: 'Home', url: `${SITE.url}/` },
    { name: 'Privacy Policy', url: `${SITE.url}/privacy` }
  ];

  return (
    <main className="flex-1 py-20 px-4 bg-cream-50">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-10 text-sm">Last updated: June 2025</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-3">Information We Collect</h2>
            <p>
              When you contact us through our website contact form, we collect only the information you
              voluntarily provide: your name, email address, phone number, and the message you send. We
              do not collect any other personal data automatically beyond standard web server logs.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-3">How We Use Your Information</h2>
            <p>
              We use the information you provide solely to respond to your inquiry, provide a cleaning
              service quote, or schedule services. We do not sell, rent, or share your personal information
              with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-3">Contact Form</h2>
            <p>
              Our contact form is processed by FormSubmit (formsubmit.co), a third-party form handling
              service. Messages are delivered directly to our email. Please review{' '}
              <a
                href="https://formsubmit.co/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-mauve underline hover:text-brand-pink"
              >
                FormSubmit&apos;s Privacy Policy
              </a>{' '}
              for details on how they handle form submissions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-3">Analytics</h2>
            <p>
              We use Google Analytics 4 to understand how visitors interact with our website. Google
              Analytics collects anonymized usage data such as pages visited and time on site. No
              personally identifiable information is shared with Google Analytics. You can opt out via
              the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-mauve underline hover:text-brand-pink"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-3">Cookies</h2>
            <p>
              Our website itself does not set cookies beyond those used by Google Analytics for session
              tracking. We do not use cookies for advertising or profiling.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-3">Data Security</h2>
            <p>
              We take reasonable steps to protect the information you submit via our contact form. All
              data is transmitted over HTTPS.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-brand-mauve underline hover:text-brand-pink"
              >
                {CONTACT.email}
              </a>{' '}
              or call{' '}
              <a href={CONTACT.phoneHref} className="text-brand-mauve underline hover:text-brand-pink">
                {CONTACT.phone}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-mauve font-semibold hover:text-brand-pink transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
