'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Thompson',
    role: 'Homeowner',
    quote: 'JEDY Cleaning has transformed our home. Their attention to detail is incredible, and the team is always professional and friendly.',
    rating: 5,
    location: 'West Knoxville',
  },
  {
    id: 2,
    name: 'Michael Roberts',
    role: 'Business Owner',
    quote: 'We\'ve been using JEDY for our office cleaning for 6 months. They\'re reliable, thorough, and our workspace has never looked better.',
    rating: 5,
    location: 'Downtown Knoxville',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Property Manager',
    quote: 'Their move-out cleaning service is exceptional. Every unit they clean passes inspection with flying colors. Highly recommended!',
    rating: 5,
    location: 'North Knoxville',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Homeowner',
    quote: 'The deep cleaning service exceeded our expectations. They reached spots we didn\'t even know needed cleaning!',
    rating: 5,
    location: 'South Knoxville',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  return (
    <div 
      className="relative w-full bg-gradient-to-br from-cream-50 via-sage-50 to-cream-100 py-20"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-terracotta-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative h-[280px] md:h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-white rounded-2xl shadow-warm p-8 md:p-10 text-center max-w-4xl mx-auto">
                <div className="flex justify-center mb-6 text-2xl">
                  {'⭐'.repeat(testimonials[current].rating)}
                </div>
                <blockquote className="text-xl md:text-2xl text-sage-900 mb-6 font-serif italic">
                  "{testimonials[current].quote}"
                </blockquote>
                <div className="text-sage-700">
                  <p className="font-semibold">{testimonials[current].name}</p>
                  <p className="text-sm">
                    {testimonials[current].role} • {testimonials[current].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setAutoplay(false);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? 'bg-terracotta-600' : 'bg-sage-200 hover:bg-sage-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}