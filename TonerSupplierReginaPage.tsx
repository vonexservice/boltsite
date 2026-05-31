import React from 'react';
import { Package, Truck, Recycle, Shield, CheckCircle, MapPin, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: Package,
    title: "Ink Cartridges",
    description: "High-quality ink cartridges for inkjet printers",
    brands: ["HP", "Canon", "Brother", "Epson"]
  },
  {
    icon: Package,
    title: "Toner Cartridges",
    description: "Premium toner for laser and multifunction printers",
    brands: ["Kyocera", "Lexmark", "HP", "Brother"]
  },
  {
    icon: Shield,
    title: "Drum Units",
    description: "Replacement drums for optimal print quality",
    brands: ["Kyocera", "Brother", "Lexmark", "Canon"]
  },
  {
    icon: Recycle,
    title: "Maintenance Kits",
    description: "Complete maintenance kits for printer longevity",
    brands: ["HP", "Lexmark", "Xerox", "Kyocera"]
  }
];

const brands = [
  {
    name: "Kyocera",
    description: "ECOSYS supplies and compatible products"
  },
  {
    name: "Lexmark",
    description: "Original and compatible cartridges"
  },
  {
    name: "HP",
    description: "LaserJet and OfficeJet supplies"
  },
  {
    name: "Brother",
    description: "Genuine Brother cartridges"
  },
  {
    name: "Canon",
    description: "Canon ink and toner products"
  },
  {
    name: "Xerox",
    description: "WorkCentre and production supplies"
  }
];

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free delivery on orders over $100"
  },
  {
    icon: Recycle,
    title: "Cartridge Recycling",
    description: "Eco-friendly recycling program available"
  },
  {
    icon: ShoppingCart,
    title: "Bulk Ordering",
    description: "Volume discounts for businesses"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee"
  }
];

export default function TonerSupplierReginaPage() {
  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-semibold mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              Regina, Saskatchewan
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Toner & Ink Supplies in Regina
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Complete selection of genuine ink cartridges, toner cartridges, and office supplies for all major printer brands. Competitive pricing with fast delivery.
            </p>
            <a
              href="https://shop.vonex.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-primary-700 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6 mr-3" />
              Shop Online
            </a>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                  <product.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <p className="text-sm text-primary-600 font-semibold">
                  Brands: {product.brands.join(", ")}
                </p>
              </div>
            ))}
          </div>

          {/* Shop by Brand */}
          <div className="bg-white rounded-3xl p-12 shadow-lg mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Shop by Brand</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.map((brand, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center card-hover">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                  <p className="text-gray-600 mb-6">{brand.description}</p>
                  <a
                    href="https://shop.vonex.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Shop {brand.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Buy From Us?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Genuine Products</h3>
                  <p className="text-gray-600">Authentic cartridges from all major brands</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">Best prices with volume discounts available</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">Quick shipping throughout Saskatchewan</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Expert Support</h3>
                  <p className="text-gray-600">Knowledgeable team to help you find the right products</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Shop our complete selection of toner, ink, and office supplies online or call us for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://shop.vonex.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-3"
              >
                <ShoppingCart className="h-6 w-6" />
                <span>Shop Online</span>
              </a>
              <a
                href="tel:306-881-0341"
                className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-primary-600 transition-all duration-200 inline-flex items-center justify-center space-x-3"
              >
                <span>Call (306) 881-0341</span>
              </a>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">More Regina Services</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/printer-repair-regina"
                className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                Printer Repair
              </Link>
              <Link
                to="/copier-service-regina"
                className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                Copier Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
