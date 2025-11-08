'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-sage-100">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-terracotta-600">
          JEDY Cleaning
        </Link>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-sage-200 text-sage-700"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          ☰
        </button>

        <ul className="hidden md:flex gap-8 text-sage-700">
          <li>
            <Link href="/" className="hover:text-terracotta-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-terracotta-600 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-terracotta-600 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-terracotta-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-terracotta-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
        <a
          href="tel:8653332637"
          className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          (865) 333-2637
        </a>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-sage-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-cream-50">Home</Link>
            <Link href="/services" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-cream-50">Services</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-cream-50">Blog</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-cream-50">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-cream-50">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
