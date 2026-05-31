import React from 'react';
import { Copy, Zap, Shield, Phone, CheckCircle, MapPin, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Copy,
    title: "Copier Repair & Service",
    description: "Expert repair and maintenance for all copier models",
    features: ["Fast response times", "Certified technicians", "Genuine parts", "Warranty service"]
  },
  {
    icon: Zap,
    title: "Maintenance Contracts",
    description: "Preventive maintenance to keep your equipment running smoothly",
    features: ["Scheduled visits", "Parts included", "Priority support", "Extended lifespan"]
  },
  {
    icon: Shield,
    title: "Equipment Support",
    description: "Comprehensive support for multifunction and color copiers",
    features: ["All major brands", "Technical support", "Troubleshooting", "Performance optimization"]
  }
];

const copierModels = [
  { brand: "Kyocera", models: "ECOSYS series, TASKalfa series" },
  { brand: "Lexmark", models: "CX, CS, MX series" },
  { brand: "HP", models: "Color LaserJet, PageWide series" },
  { brand: "Xerox", models: "WorkCentre, ColorQube series" },
  { brand: "Canon", models: "imagePROGRAF, imageCLASS series" },
  { brand: "Brother", models: "MFC, DCP series" }
];

const benefits = [
  "Reduced downtime with fast service",
  "Predictable maintenance costs",
  "Extended equipment life",
  "Priority scheduling",
  "Genuine replacement parts",
  "Expert technical support"
];

export default function CopierServiceReginaPage() {
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
              Copier Service in Regina
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Professional copier repair, maintenance, and support services for Regina businesses. From routine maintenance to emergency repairs, we keep your equipment working efficiently.
            </p>
            <a
              href="tel:306-881-0341"
              className="inline-flex items-center bg-primary-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-primary-700 transition-colors duration-200"
            >
              <Phone className="h-6 w-6 mr-3" />
              Call (306) 881-0341
            </a>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Supported Models */}
          <div className="bg-white rounded-3xl p-12 shadow-lg mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Copier Brands We Service</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {copierModels.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.brand}</h3>
                  <p className="text-gray-600">{item.models}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Our Service?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need Copier Service in Regina?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get reliable copier repair and maintenance service for your Regina business. Contact us for fast, professional support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:306-881-0341"
                className="bg-white text-primary-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-3"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-primary-600 transition-all duration-200 inline-flex items-center justify-center space-x-3"
              >
                <span>Get Quote</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
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
                to="/toner-supplier-regina"
                className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                Toner & Supplies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
