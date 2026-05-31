import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Clock, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src="/8.png" 
                alt="Vonex Business Solutions - Saskatchewan's #1 Print Services Provider"
                className="h-24 w-auto lg:h-28 object-contain"
                style={{ 
                  imageRendering: 'crisp-edges',
                  WebkitImageRendering: 'crisp-edges',
                  msInterpolationMode: 'nearest-neighbor'
                }}
              />
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Vonex Business Solutions – Saskatchewan's #1 print services provider. 
              Managed print services, sales, repairs, and office technology solutions across Saskatchewan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/VonexBusinessSolutions?_rdc=2&_rdr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-primary-600 transition-colors duration-200 shadow-md"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/vonexbusiness" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-primary-600 transition-colors duration-200 shadow-md"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/business-solu/?originalSubdomain=ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-primary-600 transition-colors duration-200 shadow-md"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                  Printer Sales & Service
                </Link>
              </li>
              <li>
                <Link to="/ink-toner" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                  Ink & Toner Supplies
                </Link>
              </li>
              <li>
                <Link to="/lease-rental" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                  Lease & Rental Programs
                </Link>
              </li>
              <li>
                <Link to="/repairs" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                  Emergency Repairs
                </Link>
              </li>
              <li>
                <Link to="/managed-print" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                  Managed Print Services
                </Link>
              </li>
              <li>
                <Link to="/it-managed-services" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                  IT Managed Services
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                  New & Used Equipment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">Office Supplies</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://shop.vonex.ca/collections/hp-toner-cartridges-canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  HP Ink & Toner
                </a>
              </li>
              <li>
                <a 
                  href="https://shop.vonex.ca/collections/canon-ink-toner-supplies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  Canon Cartridges
                </a>
              </li>
              <li>
                <a 
                  href="https://shop.vonex.ca/collections/genuine-lexmark-toner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  Lexmark Supplies
                </a>
              </li>
              <li>
                <a 
                  href="https://shop.vonex.ca/collections/brother-toner-cartridges-canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  Brother Toner
                </a>
              </li>
              <li>
                <a 
                  href="https://shop.vonex.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  Konica Minolta Parts
                </a>
              </li>
              <li>
                <a 
                  href="https://shop.vonex.ca/collections/xerox-toner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  Xerox Supplies
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="https://shop.vonex.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Shop Online
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary-400 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:306-881-0341" 
                    className="text-white font-semibold text-lg hover:text-primary-400 transition-colors duration-200 block"
                  >
                    (306) 881-0341
                  </a>
                  <div className="text-gray-400 text-sm">Emergency Service Available</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <a 
                    href="mailto:info@vonex.ca" 
                    className="text-white font-semibold hover:text-primary-400 transition-colors duration-200 block"
                  >
                    info@vonex.ca
                  </a>
                  <a 
                    href="mailto:sales@vonex.ca" 
                    className="text-white font-semibold hover:text-primary-400 transition-colors duration-200 block"
                  >
                    sales@vonex.ca
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold">Saskatchewan Wide Service</div>
                  <div className="text-gray-400 text-sm">Serving all Saskatchewan</div>
                </div>
              </div>
              
              <h4 className="font-bold text-white mb-3 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary-400" />
                Business Hours
              </h4>
              <div className="text-gray-300 space-y-1">
                <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
                <div>Saturday: Closed</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-gray-400 text-lg">
              © 2026 Vonex Business Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}