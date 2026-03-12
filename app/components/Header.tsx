'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-brand-pink hover:text-brand-mauve transition-colors">
          JEDY Cleaning
        </Link>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-brand-pink-light/30"
          aria-label="Toggle menu"
          aria-expanded={open ? "true" : "false"}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-brand-pink transition-colors ${isActive(href) ? 'text-brand-pink font-semibold' : ''}`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="tel:8653332637"
          data-track-event="phone_click"
          data-track-label="header_phone"
          data-track-category="contact"
          className="hidden md:block bg-brand-pink hover:bg-brand-mauve text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
        >
          (865) 333-2637
        </a>
      </nav>
      {/* Mobile menu */}
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-2 py-2 rounded hover:bg-brand-pink-light/30 ${isActive(href) ? 'bg-brand-pink-light/20 text-brand-pink font-semibold' : 'text-gray-700'}`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
            <a href="tel:8653332637" data-track-event="phone_click" data-track-label="mobile_menu_phone" data-track-category="contact" className="block px-2 py-2 bg-brand-mauve text-white rounded text-center font-semibold">
              Call (865) 333-2637
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
