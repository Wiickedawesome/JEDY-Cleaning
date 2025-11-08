import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-terracotta-600">
          JEDY Cleaning
        </Link>
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
    </header>
  );
}
