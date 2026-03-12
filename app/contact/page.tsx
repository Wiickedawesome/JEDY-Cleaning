'use client';

import { useState, useCallback } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from '../components/Icons';
import FAQSection from '../components/FAQSection';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

declare global {
  interface WindowEventMap {
    'jedy:quote-form-submit': CustomEvent<{ eventName: string; label: string; value?: number }>;
  }
}

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'weekly',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = useCallback((name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        break;
      case 'phone':
        const digits = value.replace(/\D/g, '');
        if (digits.length < 10) return 'Please enter a valid 10-digit phone number';
        break;
    }
    return undefined;
  }, []);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFieldErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields before submitting
    const errors: FieldErrors = {};
    (['name', 'email', 'phone'] as const).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setTouched({ name: true, email: true, phone: true });
      return;
    }
    
    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/jedycleaning@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message || 'No additional details provided.',
          _subject: `New JEDY Cleaning Inquiry - ${formData.service}`,
          _template: 'table',
        }),
      });

      const data = await response.json();

      if (data.success) {
        window.dispatchEvent(
          new CustomEvent('jedy:quote-form-submit', {
            detail: { eventName: 'generate_lead', label: 'contact_form_success', value: 1 },
          })
        );
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: 'weekly', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        window.dispatchEvent(
          new CustomEvent('jedy:quote-form-submit', {
            detail: { eventName: 'contact_form_error', label: 'contact_form_response_error' },
          })
        );
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      window.dispatchEvent(
        new CustomEvent('jedy:quote-form-submit', {
          detail: { eventName: 'contact_form_error', label: 'contact_form_network_error' },
        })
      );
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://jedycleaning.us/' },
    { name: 'Contact', url: 'https://jedycleaning.us/contact' }
  ];

  return (
    <main className="min-h-screen bg-cream-50">
      <BreadcrumbSchema items={breadcrumbs} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-pink-light/20 via-brand-lavender/20 to-cream-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience a cleaner, fresher space? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="icon-container bg-brand-lavender/20 text-brand-mauve flex-shrink-0">
                    <PhoneIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                    <a 
                      href="tel:8653332637" 
                      data-track-event="phone_click"
                      data-track-label="contact_phone"
                      data-track-category="contact"
                      className="text-lg text-brand-pink hover:text-brand-mauve transition-colors"
                    >
                      (865) 333-2637
                    </a>
                    <p className="text-gray-500 mt-1">Call us anytime for a free quote!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-container bg-brand-pink-light/30 text-brand-pink flex-shrink-0">
                    <MailIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                    <a 
                      href="mailto:jedycleaning@gmail.com" 
                      data-track-event="email_click"
                      data-track-label="contact_email"
                      data-track-category="contact"
                      className="text-lg text-brand-mauve hover:text-brand-pink transition-colors"
                    >
                      jedycleaning@gmail.com
                    </a>
                    <p className="text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-container bg-brand-lavender/20 text-brand-mauve flex-shrink-0">
                    <MapPinIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Service Area</h3>
                    <p className="text-lg text-gray-600">Greater Knoxville Area</p>
                    <p className="text-gray-500 mt-1">Proudly serving our local community</p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=Knoxville,+TN&t=m&z=11&output=embed&iwloc=near"
                  width="100%"
                  height="300"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JEDY Cleaning Services — Greater Knoxville Area"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Request a Quote
              </h2>

              {status === 'success' && (
                <div className="bg-brand-lavender/20 border border-brand-lavender text-brown-800 px-6 py-4 rounded-lg mb-6">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you as soon as possible.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6">
                  <p className="font-semibold">Something went wrong.</p>
                  <p className="text-sm">Please try again or call us at (865) 333-2637.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve focus:border-transparent ${touched.name && fieldErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="John Doe"
                    aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                  />
                  {touched.name && fieldErrors.name && (
                    <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve focus:border-transparent ${touched.email && fieldErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="john@example.com"
                    aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  />
                  {touched.email && fieldErrors.email && (
                    <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve focus:border-transparent ${touched.phone && fieldErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="(865) 123-4567"
                    aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                  />
                  {touched.phone && fieldErrors.phone && (
                    <p id="phone-error" className="text-red-600 text-sm mt-1" role="alert">{fieldErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-800 font-semibold mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve focus:border-transparent"
                  >
                    <option value="weekly">Weekly Cleaning</option>
                    <option value="semi-weekly">Semi-Weekly Cleaning</option>
                    <option value="monthly">Monthly Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="moving">Moving Services</option>
                    <option value="custom">Custom/Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve focus:border-transparent"
                    placeholder="Tell us about your cleaning needs, preferred schedule, home size, or any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  data-track-event="quote_submit_attempt"
                  data-track-label="contact_form_submit"
                  data-track-category="lead"
                  className="w-full bg-brand-pink hover:bg-brand-mauve text-white py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by JEDY Cleaning Services 
                  regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
}
