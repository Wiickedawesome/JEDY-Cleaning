import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-800 text-cream-50 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-300">JEDY Cleaning Services</h3>
            <p className="text-cream-100">
              Professional cleaning services for the Greater Knoxville area. 
              Making your space sparkle with care and attention.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-teal-300">Services</h4>
            <ul className="space-y-2 text-cream-100">
              <li>
                <Link href="/services" className="hover:text-teal-300 transition-colors">
                  Weekly Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-300 transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-300 transition-colors">
                  Moving Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-teal-300">Company</h4>
            <ul className="space-y-2 text-cream-100">
              <li>
                <Link href="/about" className="hover:text-teal-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-teal-300">Contact</h4>
            <p className="text-cream-100 mb-2">
              <a href="mailto:jedycleaning@gmail.com" className="hover:text-teal-300 transition-colors">
                jedycleaning@gmail.com
              </a>
            </p>
            <p className="text-cream-100">
              <a href="tel:8653332637" className="hover:text-teal-300 transition-colors">
                (865) 333-2637
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-brown-700 pt-8 text-center text-cream-100">
          <p>&copy; {currentYear} JEDY Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
