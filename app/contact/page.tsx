'use client';

import { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from '../components/Icons';
import FAQSection from '../components/FAQSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'weekly',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: 'weekly', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-cream-50">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.234!2d-83.8591188!3d35.9974533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU5JzUwLjgiTiA4M8KwNTEnMzIuOCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JEDY Cleaning Services Location"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve focus:border-transparent"
                    placeholder="John Doe"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve focus:border-transparent"
                    placeholder="john@example.com"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mauve focus:border-transparent"
                    placeholder="(865) 123-4567"
                  />
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
