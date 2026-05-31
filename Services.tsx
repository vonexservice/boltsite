import React from 'react';
import { ShoppingCart, Wrench, Calendar, Recycle, Headphones, Truck, ArrowRight, Phone, Mail, MapPin, Settings, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
 
export default function Services() {
 
  const services = [
    {
      icon: Wrench,
      title: "Emergency Printer Repair Saskatoon",
      description: "Emergency printer repair with certified technicians for all major brands throughout Saskatchewan.",
      benefits: ["2-hour response time Saskatoon", "Certified Konica Minolta technicians", "Genuine OEM parts inventory", "Quality repair guarantee"],
      cta: "Emergency Repair Services",
      link: "/repairs",
      keywords: "emergency printer repair Saskatoon, same-day printer service"
    },
    {
      icon: ShoppingCart,
      title: "Office Equipment Sales Saskatchewan",
      description: "New and certified refurbished printers from authorized dealers with up to 40% savings on quality equipment.",
      benefits: ["Authorized dealer network", "Professional installation setup", "90-day warranty included", "Trade-in programs available"],
      cta: "Shop Office Equipment",
      link: "/office-equipment",
      keywords: "office equipment sales Saskatchewan, printer sales Saskatoon"
    },
    {
      icon: Calendar,
      title: "Printer Rental Saskatoon",
      description: "Flexible short-term and long-term printer rentals for events, projects, or seasonal business needs.",
      benefits: ["Daily, weekly, monthly rates", "Professional setup included", "Maintenance coverage", "Upgrade options available"],
      cta: "Rental Equipment Options",
      link: "/lease-rental",
      keywords: "printer rental Saskatoon, equipment leasing Saskatchewan"
    },
    {
      icon: Recycle,
      title: "Ink Toner Supplies Saskatoon",
      description: "Genuine ink cartridges, toner supplies, and eco-friendly recycling services for all major printer brands.",
      benefits: ["Free pickup service", "Environmental compliance", "Bulk ordering discounts", "Cartridge refill services"],
      cta: "Shop Ink & Toner",
      link: "/ink-toner",
      keywords: "ink toner supplies Saskatoon, genuine cartridges Saskatchewan"
    },
    {
      icon: Headphones,
      title: "Managed Print Services Saskatchewan",
      description: "Comprehensive managed print solutions to reduce costs by up to 30% with proactive maintenance and monitoring.",
      benefits: ["30% cost reduction average", "Proactive monitoring", "Supply management", "Priority customer support"],
      cta: "Managed Print Solutions",
      link: "/managed-print",
      keywords: "managed print services Saskatchewan, print cost reduction"
    },
    {
      icon: Truck,
      title: "Saskatchewan Print Services",
      description: "Professional delivery, installation, and training throughout Saskatchewan with province-wide coverage.",
      benefits: ["Free local delivery", "Professional installation", "User training included", "Network configuration"],
      cta: "Schedule Service",
      link: "/contact",
      keywords: "Saskatchewan print services, province-wide printer support"
    }
  ];
 
  // Grouped subpage links — not in main nav but discoverable from Services
  const subpageGroups = [
    {
      heading: "Service by Brand",
      icon: Printer,
      color: "bg-primary-50 border-primary-200",
      iconColor: "text-primary-600",
      pages: [
        { label: "Kyocera Authorized Dealer – Saskatoon", link: "/kyocera-authorized-dealer-saskatoon" },
        { label: "HP Printers – Saskatoon", link: "/hp-printer-service-saskatoon" },
        { label: "Lexmark Printers – Saskatoon", link: "/lexmark-printer-service-saskatoon" },
      ],
    },
    {
      heading: "Service by Location",
      icon: MapPin,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      pages: [
        { label: "Printer Repair – Regina", link: "/printer-repair-regina" },
        { label: "Copier Service – Regina", link: "/copier-service-regina" },
        { label: "Toner Supplier – Regina", link: "/toner-supplier-regina" },
        { label: "Printer Repair – Saskatoon", link: "/printer-repair-saskatoon"},
        { label: "Copier Service – Saskatoon", link: "/copier-service-saskatoon"},
      ],
    },
    {
      heading: "Service Contracts",
      icon: Settings,
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      pages: [
        { label: "Printer Maintenance Contract – Saskatoon", link: "/printer-maintenance-contract-saskatoon" },
      ],
    },
  ];
 
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Professional Print Services Throughout Saskatchewan
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From emergency printer repairs to managed print services, office equipment sales, 
            and comprehensive support - we provide complete print solutions for Saskatchewan businesses 
            with certified technicians and genuine parts.
          </p>
        </div>
 
        {/* Main service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 card-hover shadow-lg group"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-primary-100 rounded-xl group-hover:bg-primary-600 transition-colors duration-300 shadow-md">
                  <service.icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={service.link}
                className="w-full bg-gray-50 hover:bg-primary-600 text-gray-700 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>{service.cta}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>
 
        {/* ── SUBPAGE LINKS SECTION ── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              More Ways We Can Help
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Specialized services by brand, location, and contract type — all backed by
              Vonex's local Saskatchewan team.
            </p>
          </div>
 
          <div className="grid md:grid-cols-3 gap-8">
            {subpageGroups.map((group, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 ${group.color}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <group.icon className={`h-6 w-6 ${group.iconColor}`} />
                  <h3 className="text-xl font-bold text-gray-900">{group.heading}</h3>
                </div>
                <ul className="space-y-3">
                  {group.pages.map((page) => (
                    <li key={page.link}>
                      <Link
                        to={page.link}
                        className="flex items-center justify-between group/link text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-200/60 last:border-0 transition-colors duration-200"
                      >
                        <span>{page.label}</span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-200 flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
 
        {/* Call to action with contact options */}
        <div className="bg-primary-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need Saskatchewan Print Services?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contact us for expert print services throughout Saskatchewan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:306-881-0341" 
              className="bg-white text-primary-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>Call (306) 881-0341</span>
            </a>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-primary-600 transition-all duration-200 inline-flex items-center justify-center space-x-3"
            >
              <Mail className="h-6 w-6" />
              <span>Get Free Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}