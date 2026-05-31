import React from 'react';
import { Wrench, Clock, Shield, Phone, CheckCircle, AlertTriangle, ArrowRight, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InternalLink } from './InternalLinks';

const repairServices = [
  {
    icon: Wrench,
    title: "Emergency Printer Repair Saskatoon",
    description: "Emergency service for critical business equipment with certified technicians",
    features: ["2-hour response time Saskatoon", "After-hours emergency service", "Weekend availability", "Priority scheduling"],
    response: "2-4 hours",
    keywords: "emergency printer repair Saskatoon,  printer service"
  },
  {
    icon: Clock,
    title: "Preventive Printer Maintenance Saskatchewan",
    description: "Regular maintenance to prevent costly breakdowns and extend equipment life",
    features: ["Scheduled service visits", "Genuine parts replacement", "Performance optimization", "Extended equipment life"],
    response: "Scheduled",
    keywords: "printer maintenance Saskatchewan, preventive service"
  },
  {
    icon: Shield,
    title: "Warranty Printer Repairs",
    description: "Authorized warranty service for all major brands with certified technicians",
    features: ["Factory-trained technicians", "Genuine OEM parts", "Warranty compliance", "No-cost repairs"],
    response: "1-2 days",
    keywords: "warranty printer repair, authorized service center"
  }
];

const commonIssues = [
  {
    issue: "Printer Paper Jams Saskatoon",
    description: "Frequent paper jams disrupting workflow and productivity",
    solution: "Roller replacement, sensor calibration, paper path cleaning",
    keywords: "printer paper jam repair Saskatoon"
  },
  {
    issue: "Poor Print Quality Saskatchewan",
    description: "Faded, streaky, or blurry prints affecting document quality",
    solution: "Toner replacement, drum cleaning, fuser maintenance",
    keywords: "print quality repair Saskatchewan"
  },
  {
    issue: "Printer Network Connectivity Issues",
    description: "Unable to print from network computers or mobile devices",
    solution: "Network configuration, driver updates, connectivity troubleshooting",
    keywords: "printer network repair Saskatoon"
  },
  {
    issue: "Printer Error Codes Saskatchewan",
    description: "Machine displaying error messages and codes",
    solution: "Diagnostic testing, component replacement, software updates",
    keywords: "printer error code repair Saskatchewan"
  },
  {
    issue: "Slow Printer Performance",
    description: "Slow printing or processing speeds affecting productivity",
    solution: "Memory upgrades, software optimization, hardware maintenance",
    keywords: "slow printer repair Saskatoon"
  },
  {
    issue: "Scanner Problems Saskatchewan",
    description: "Scanner not working or poor scan quality issues",
    solution: "Scanner calibration, glass cleaning, software configuration",
    keywords: "scanner repair Saskatchewan"
  }
];

const brands = [
  { name: "Kyocera Repair Saskatchewan", certified: true },
  { name: "Konica Minolta Repair Saskatchewan", certified: true },
  { name: "Lexmark Printer Repair Saskatoon", certified: true },
  { name: "HP Printer Service Saskatchewan", certified: true },
  { name: "Brother Printer Repair Saskatoon", certified: true },
  { name: "Canon Printer Service Saskatchewan", certified: false },
  { name: "Xerox Printer Repair Saskatoon", certified: false },
  { name: "Ricoh Printer Service Saskatchewan", certified: false },
  { name: "Sharp Printer Repair Saskatoon", certified: false }
];

export default function PhotocopierRepairs() {
  return (
    <section id="photocopier-repairs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Expert Printer Repair Saskatoon & Saskatchewan
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Fast, reliable <strong>printer repair Saskatoon</strong> and <strong>photocopier repair Saskatchewan</strong> 
            for all major brands. Our certified technicians provide emergency service, preventive maintenance, 
            and warranty repairs throughout the province.
          </p>
          
          {/* Location and service highlights */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-semibold">
              <MapPin className="h-4 w-4 mr-2" />
              Saskatoon • Regina • Prince Albert
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-semibold">
              <Award className="h-4 w-4 mr-2" />
              Certified Technicians
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-semibold">
              <Clock className="h-4 w-4 mr-2" />
              24/7 Emergency Service
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {repairServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-primary-100 rounded-xl shadow-md">
                  <service.icon className="h-7 w-7 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-sm text-primary-600 font-semibold">Response: {service.response}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs text-gray-500 italic mt-4">
                {service.keywords}
              </div>
            </div>
          ))}
        </div>

        {/* Konica Minolta Repair Expertise - Enhanced with SEO */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Konica Minolta Repair Saskatchewan - Certified Service Center
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              As certified <strong>Konica Minolta technicians</strong>, we specialize in repairing and maintaining 
              their complete range of photocopiers and multifunction devices with genuine parts and expert service 
              throughout Saskatchewan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">bizhub Series Repair Saskatchewan</h3>
              <p className="text-gray-600 mb-6">Expert repair services for all bizhub color and monochrome multifunction devices.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Certified Konica Minolta technician service
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Genuine Konica Minolta parts inventory
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Same-day service available Saskatoon
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  90-day repair warranty included
                </li>
              </ul>
              <InternalLink 
                to="/brands"
                className="text-sm"
              >
                Konica Minolta Services
              </InternalLink>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AccurioPress Service Saskatchewan</h3>
              <p className="text-gray-600 mb-6">Specialized service for high-volume production printing systems.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Production system expertise
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Preventive maintenance programs
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Priority emergency service
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Performance optimization
                </li>
              </ul>
              <InternalLink 
                to="/office-equipment"
                className="text-sm"
              >
                Production Equipment
              </InternalLink>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Parts & Diagnostics Saskatchewan</h3>
              <p className="text-gray-600 mb-6">Comprehensive parts inventory and advanced diagnostic capabilities.</p>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Extensive genuine parts inventory
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Advanced diagnostic tools
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Remote monitoring capabilities
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Predictive maintenance programs
                </li>
              </ul>
              <InternalLink 
                to="/managed-print"
                className="text-sm"
              >
                Managed Print Services
              </InternalLink>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Printer Issues We Fix in Saskatchewan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonIssues.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors duration-200 card-hover">
                <div className="flex items-start space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900 text-lg">{item.issue}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <p className="text-primary-600 font-medium mb-3">Solution: {item.solution}</p>
                <div className="text-xs text-gray-500 italic">
                  {item.keywords}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Printer Brands We Service in Saskatchewan</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our certified technicians are trained and authorized to service all major 
              <strong> printer brands Saskatchewan</strong>. We stock genuine parts and 
              provide warranty-compliant repairs throughout the province with same-day service in Saskatoon.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl shadow-md">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-gray-900">{brand.name}</span>
                  </div>
                  {brand.certified && (
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold">
                      Certified
                    </span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <InternalLink 
                to="/brands"
                className="text-lg"
              >
                View All Supported Brands
              </InternalLink>
            </div>
          </div>
          <div>
            <img 
              src="/Vonex Saskatoon Printer and copier repair.jpg" 
              alt="Professional technician performing expert printer and copier repair services with toner cartridge replacement in modern Saskatoon business environment showcasing Vonex technical expertise and genuine parts inventory"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-2xl mb-6 shadow-lg">
            <Phone className="h-10 w-10 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Emergency Printer Repair Saskatoon?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't let a broken printer stop your Saskatchewan business. Call Vonex Business Solutions now for 
            <strong> same-day emergency printer repair</strong> in Saskatoon and surrounding areas with 
            certified technicians and genuine parts.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:306-881-0341" 
              className="bg-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-red-700 transition-colors duration-200 inline-flex items-center justify-center space-x-3 shadow-lg"
            >
              <Phone className="h-6 w-6" />
              <span>Call (306) 881-0341</span>
            </a>
            <Link 
              to="/contact"
              className="border-2 border-red-600 text-red-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-red-600 hover:text-white transition-all duration-200 inline-flex items-center justify-center space-x-3"
            >
              <span>Request Service Online</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <strong>Service Areas:</strong> Saskatoon, Regina, Prince Albert, Moose Jaw, Swift Current, Yorkton, and throughout Saskatchewan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}