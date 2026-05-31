import React from 'react';
import { Wrench, Clock, Shield, Phone, CheckCircle, MapPin, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Wrench,
    title: "Emergency Printer Repair",
    description: "Fast response printer repair for critical business equipment",
    features: ["Same-day service available", "Certified technicians", "All major brands", "Warranty repairs"]
  },
  {
    icon: Clock,
    title: "Preventive Maintenance",
    description: "Regular maintenance to prevent costly breakdowns",
    features: ["Scheduled service visits", "Performance optimization", "Genuine parts", "Extended equipment life"]
  },
  {
    icon: Shield,
    title: "Warranty Service",
    description: "Authorized service for all major printer brands",
    features: ["Factory-trained technicians", "Genuine OEM parts", "Warranty compliance", "Full diagnostics"]
  }
];

const commonIssues = [
  { issue: "Paper Jams", solution: "Roller replacement, sensor calibration, paper path cleaning" },
  { issue: "Poor Print Quality", solution: "Toner replacement, drum cleaning, fuser maintenance" },
  { issue: "Network Connectivity", solution: "Driver updates, network configuration, connectivity troubleshooting" },
  { issue: "Error Codes", solution: "Diagnostic testing, component replacement, software updates" },
  { issue: "Slow Performance", solution: "Memory upgrades, software optimization, hardware maintenance" },
  { issue: "Scanner Issues", solution: "Calibration, glass cleaning, software configuration" }
];

const brands = [
  "HP", "Lexmark", "Canon", "Brother", "Kyocera", "Xerox", "Ricoh", "Sharp"
];

export default function PrinterRepairReginaPage() {
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
              Printer Repair in Regina
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Professional printer repair service for Regina businesses. Fast response times, certified technicians, and warranty-compliant repairs for all major brands.
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

          {/* Common Issues */}
          <div className="bg-white rounded-3xl p-12 shadow-lg mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Common Printer Issues We Fix</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {commonIssues.map((item, index) => (
                <div key={index} className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.issue}</h3>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Brands Supported */}
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">We Service All Major Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <p className="font-semibold text-gray-900">{brand}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need Printer Repair in Regina?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Contact us today for fast, professional printer repair service throughout Regina and the surrounding area.
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
                to="/copier-service-regina"
                className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                Copier Service
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
