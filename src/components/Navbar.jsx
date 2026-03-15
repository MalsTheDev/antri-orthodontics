import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Αρχική', path: '/' },
    { name: 'Το Ιατρείο', path: '/clinic' },
    { name: 'Υπηρεσίες', path: '/services' },
    { name: 'Αποτελέσματα', path: '/results' },
    { name: 'Επικοινωνία', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-blue-900 tracking-tight">
                  ΚΟΝΤΟΠΟΥΛΟΥ ΑΝΤΡΗ
                </span>
                <span className="text-xs font-medium text-blue-500 uppercase tracking-wide">
                  Ορθοδοντικός
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group text-sm font-semibold transition-colors hover:text-blue-600 ${isActive(link.path) ? 'text-blue-600' : 'text-gray-600'
                  }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}
            <a
              href="tel:2231051127"
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-semibold rounded-full shadow-sm text-white bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all"
            >
              Κλήση
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-blue-50 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium ${isActive(link.path)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:2231051127"
              className="block w-full text-center px-3 py-4 text-base font-bold text-white bg-blue-600 rounded-md shadow-inner"
            >
              ΚΑΛΕΣΤΕ ΤΩΡΑ: 22310 51127
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
