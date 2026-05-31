import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronDown, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout>();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen || isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, isServicesOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const handleServicesHover = (isHovering: boolean) => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }

    if (isHovering) {
      setIsServicesOpen(true);
    } else {
      servicesTimeoutRef.current = setTimeout(() => {
        setIsServicesOpen(false);
      }, 150);
    }
  };

  const servicePages = [
    { path: '/services', label: 'All Services' },
    { path: '/ink-toner', label: 'Ink & Toner Supplies' },
    { path: '/lease-rental', label: 'Lease & Rental' },
    { path: '/repairs', label: 'Emergency Repairs' },
    { path: '/managed-print', label: 'Managed Print Services' },
    { path: '/office-equipment', label: 'New & Used Equipment' },
    { path: '/it-managed-services', label: 'IT Managed Services' }
  ];

  const isCurrentPage = (path: string) => location.pathname === path;
  const isServicePage = () => servicePages.some(page => page.path === location.pathname);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="mobile-touch-target">
              <img 
                src="/6 copy copy.png" 
                alt="Vonex Business Solutions - Saskatchewan's #1 Print Services Provider"
                className="h-14 w-auto lg:h-18 xl:h-20 object-contain cursor-pointer"
                style={{ 
                  imageRendering: 'crisp-edges',
                  WebkitImageRendering: 'crisp-edges',
                  msInterpolationMode: 'nearest-neighbor'
                }}
                loading="eager"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4" ref={menuRef}>
            <Link 
              to="/"
              className={`transition-colors duration-200 font-medium px-2 py-2 rounded-lg text-sm ${
                isCurrentPage('/') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => handleServicesHover(true)}
              onMouseLeave={() => handleServicesHover(false)}
            >
              <button 
                className={`flex items-center space-x-1 transition-colors duration-200 font-medium px-2 py-2 rounded-lg text-sm ${
                  isServicePage()
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border transition-all duration-300 transform ${
                isServicesOpen 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible translate-y-2 pointer-events-none'
              }`}>
                <div className="p-3 space-y-1">
                  {servicePages.map((service) => (
                    <Link 
                      key={service.path}
                      to={service.path}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm ${
                        isCurrentPage(service.path)
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link
              to="/kyocera-authorized-dealer-saskatoon"
              className={`transition-colors duration-200 font-medium px-2 py-2 rounded-lg text-sm ${
                isCurrentPage('/kyocera-authorized-dealer-saskatoon') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Kyocera
            </Link>
            <Link
              to="/brands"
              className={`transition-colors duration-200 font-medium px-2 py-2 rounded-lg text-sm ${
                isCurrentPage('/brands') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Brands
            </Link>
            <Link 
              to="/about"
              className={`transition-colors duration-200 font-medium px-2 py-2 rounded-lg text-sm ${
                isCurrentPage('/about') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors duration-200 font-medium px-2 py-2 rounded-lg text-sm ${
                isCurrentPage('/contact') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions - Simplified */}
          <div className="hidden lg:flex items-center space-x-2">
            <a 
              href="https://shop.vonex.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium px-2 py-2 rounded-lg text-sm"
            >
              <ShoppingCart className="h-3 w-3" />
              <span>Shop</span>
            </a>
            <a 
              href="tel:306-881-0341" 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200 px-2 py-2 rounded-lg text-sm"
            >
              <Phone className="h-3 w-3" />
              <span className="font-medium">(306) 881-0341</span>
            </a>
            <Link 
              to="/contact"
              className="bg-primary-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 mobile-touch-target"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t pt-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/"
                className={`mobile-nav-item ${
                  isCurrentPage('/') ? 'text-primary-600 bg-primary-50 font-semibold' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-gray-700 font-medium py-3 px-4 border-b border-gray-200">Services</div>
                {servicePages.map((service) => (
                  <Link 
                    key={service.path}
                    to={service.path}
                    className={`mobile-nav-item pl-8 ${
                      isCurrentPage(service.path) ? 'text-primary-600 bg-primary-50 font-semibold' : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/kyocera-authorized-dealer-saskatoon"
                className={`mobile-nav-item ${
                  isCurrentPage('/kyocera-authorized-dealer-saskatoon') ? 'text-primary-600 bg-primary-50 font-semibold' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Kyocera
              </Link>
              <Link
                to="/brands"
                className={`mobile-nav-item ${
                  isCurrentPage('/brands') ? 'text-primary-600 bg-primary-50 font-semibold' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Brands
              </Link>
              <Link 
                to="/about"
                className={`mobile-nav-item ${
                  isCurrentPage('/about') ? 'text-primary-600 bg-primary-50 font-semibold' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact"
                className={`mobile-nav-item ${
                  isCurrentPage('/contact') ? 'text-primary-600 bg-primary-50 font-semibold' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
              
              <div className="pt-4 border-t space-y-3">
                <a 
                  href="https://shop.vonex.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 py-3 px-4 rounded-lg mobile-touch-target"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Shop Online</span>
                </a>
                <a 
                  href="tel:306-881-0341" 
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 py-3 px-4 rounded-lg mobile-touch-target"
                >
                  <Phone className="h-4 w-4" />
                  <span>(306) 881-0341</span>
                </a>
                <Link 
                  to="/contact"
                  className="btn-primary w-full text-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}