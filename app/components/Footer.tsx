export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 text-cream-50 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JEDY Cleaning</h3>
            <p className="text-cream-200">Professional cleaning services for homes and offices.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-cream-200">
              <li>
                <a href="/services" className="hover:text-cream-50 transition-colors">
                  Home Cleaning
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-cream-50 transition-colors">
                  Office Cleaning
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-cream-50 transition-colors">
                  Deep Cleaning
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-cream-200">
              <li>
                <a href="/about" className="hover:text-cream-50 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-cream-50 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-cream-200">Email: info@jedycleaning.com</p>
            <p className="text-cream-200">Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-sage-700 pt-8 text-center text-cream-200">
          <p>&copy; {currentYear} JEDY Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
