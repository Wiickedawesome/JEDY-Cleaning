export default function Header(): JSX.Element {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-terracotta-600">
          JEDY Cleaning
        </div>
        <ul className="hidden md:flex gap-8 text-sage-700">
          <li>
            <a href="/" className="hover:text-terracotta-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-terracotta-600 transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-terracotta-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-terracotta-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
          Book Now
        </button>
      </nav>
    </header>
  );
}
