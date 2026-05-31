import React from 'react';
import { Wrench, Printer, ShoppingBag, FileText, Calendar, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Printer & Photocopier Repairs',
    description: 'Same-day emergency service by certified technicians using genuine parts for critical business needs.',
    link: '/repairs',
    linkText: 'Emergency Repair Services'
  },
  {
    icon: Printer,
    title: 'Managed Print Services',
    description: 'Cut printing costs by 30% with proactive monitoring, supply management, and maintenance included.',
    link: '/managed-print',
    linkText: 'Managed Print Solutions'
  },
  {
    icon: ShoppingBag,
    title: 'Office Equipment Sales',
    description: 'New & certified refurbished printers from authorized dealers. Professional installation and quality guarantee.',
    link: '/sales',
    linkText: 'Shop Office Equipment'
  },
  {
    icon: FileText,
    title: 'Maintenance Contracts',
    description: 'Keep equipment at peak performance with scheduled service, genuine parts, and priority support.',
    link: '/contracts',
    linkText: 'Maintenance Contracts'
  },
  {
    icon: Calendar,
    title: 'Short‑Term Rentals',
    description: 'Flexible rentals for events or projects. Daily/weekly rates, professional setup included.',
    link: '/rentals',
    linkText: 'Rental Options'
  }
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-3 bg-primary-100 rounded-xl w-fit mb-6">
                <service.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                {service.linkText}
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}