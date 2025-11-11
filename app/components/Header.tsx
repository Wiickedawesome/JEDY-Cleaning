'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-50 border-b border-pink-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-pink-600 hover:text-pink-700 transition-colors">
          JEDY Cleaning
        </Link>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-pink-300 text-brown-700 hover:bg-pink-50"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          ☰
        </button>

        <ul className="hidden md:flex gap-8 text-brown-700 font-medium">
          <li>
            <Link href="/" className="hover:text-pink-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-pink-600 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-pink-600 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-pink-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
        <a
          href="tel:8653332637"
          className="hidden md:block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
        >
          (865) 333-2637
        </a>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-pink-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-pink-50 text-brown-700">Home</Link>
            <Link href="/services" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-pink-50 text-brown-700">Services</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-pink-50 text-brown-700">Blog</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-pink-50 text-brown-700">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-pink-50 text-brown-700">Contact</Link>
            <a href="tel:8653332637" className="block px-2 py-2 bg-pink-600 text-white rounded text-center font-semibold">
              Call (865) 333-2637
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
