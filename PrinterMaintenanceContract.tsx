import React from 'react';
import { CheckCircle, AlertCircle, Clock, Wrench, Shield, Zap, ArrowRight, Phone, Mail } from 'lucide-react';

const contractTypes = [
  {
    name: "Basic Maintenance",
    price: "Custom Quote",
    description: "Essential maintenance for small offices",
    features: [
      "Quarterly maintenance visits",
      "Parts and labor included",
      "4-hour response time",
      "Minor repairs covered",
      "Basic cleaning and servicing"
    ],
    icon: Wrench
  },
  {
    name: "Standard Maintenance",
    price: "Custom Quote",
    description: "Comprehensive coverage for growing businesses",
    features: [
      "Everything in Basic",
      "Bi-monthly maintenance visits",
      "2-hour response time",
      "All parts and labor included",
      "Priority scheduling",
      "Monthly performance reports"
    ],
    icon: Shield,
    featured: true
  },
  {
    name: "Premium Maintenance",
    price: "Custom Quote",
    description: "Full-service solution for mission-critical equipment",
    features: [
      "Everything in Standard",
      "Monthly maintenance visits",
      "1-hour response time",
      "24/7 emergency support",
      "Dedicated technician",
      "Advanced diagnostics",
      "Equipment replacement guarantee"
    ],
    icon: Zap
  }
];

const benefits = [
  {
    title: "Reduce Downtime",
    description: "Proactive maintenance prevents costly equipment failures and keeps your office running smoothly."
  },
  {
    title: "Lower Costs",
    description: "Predictable pricing means no surprise repair bills. Service contracts cost less than emergency repairs."
  },
  {
    title: "Extend Equipment Life",
    description: "Regular maintenance extends the lifespan of your printers and copiers by years."
  },
  {
    title: "Expert Support",
    description: "Access to certified technicians with expertise across all major printer brands."
  },
  {
    title: "Priority Service",
    description: "Faster response times and priority scheduling keep your business operations on track."
  },
  {
    title: "Performance Optimization",
    description: "Keep your equipment running at peak performance with regular diagnostics and adjustments."
  }
];

const whyChoose = [
  {
    title: "Local Saskatchewan Service",
    description: "We're based in Saskatoon with technicians throughout Saskatchewan for fast, reliable service.",
    icon: MapPin
  },
  {
    title: "Certified Technicians",
    description: "All our technicians are certified on major brands including Kyocera, Canon, Brother, and more.",
    icon: CheckCircle
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. We provide detailed quotes and stick to them. Affordable maintenance plans for any budget.",
    icon: DollarSign
  },
  {
    title: "24/7 Emergency Support",
    description: "When your printer breaks down unexpectedly, we're here to help—day or night.",
    icon: Clock
  }
];

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function DollarSign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function PrinterMaintenanceContract() {
  const handleContactClick = () => {
    const emailBody = `
Printer Maintenance Contract Inquiry - Saskatoon

I am interested in learning more about printer maintenance contracts for my office.

Please contact me to discuss:
- Available maintenance plans
- Service coverage and response times
- Pricing and contract terms
- Equipment included in the contract

Company:
Contact Person:
Phone:
Email:
Number of Printers/Copiers:
Current Equipment:
Preferred Contact Method:

Current Maintenance Needs:


Submitted from: vonex.ca/printer-maintenance-contract-saskatoon
    `;

    const mailtoLink = `mailto:sales@vonex.ca?subject=Printer Maintenance Contract Inquiry&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="maintenance-contracts" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Printer Maintenance Contracts
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Keep your printers and copiers running smoothly with our comprehensive maintenance contracts.
            Protect your investment with predictable costs and expert support in Saskatoon.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contract Types */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">Contract Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => {
              const IconComponent = contract.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    contract.featured
                      ? 'bg-primary-600 text-white shadow-2xl scale-105'
                      : 'bg-gray-50 hover:shadow-lg'
                  }`}
                >
                  <div className="p-10">
                    {contract.featured && (
                      <div className="text-center mb-4">
                        <span className="bg-white text-primary-600 px-4 py-2 rounded-full text-sm font-bold">Most Popular</span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <IconComponent className={`h-12 w-12 mx-auto mb-4 ${contract.featured ? 'text-white' : 'text-primary-600'}`} />
                      <h3 className={`text-2xl font-bold mb-2 ${contract.featured ? 'text-white' : 'text-gray-900'}`}>
                        {contract.name}
                      </h3>
                      <p className={contract.featured ? 'text-primary-100' : 'text-gray-600'}>
                        {contract.description}
                      </p>
                    </div>

                    <div className={`text-center mb-8 py-6 border-t border-b ${contract.featured ? 'border-primary-500' : 'border-gray-200'}`}>
                      <p className={`text-3xl font-bold ${contract.featured ? 'text-white' : 'text-primary-600'}`}>
                        {contract.price}
                      </p>
                    </div>

                    <ul className={`space-y-4 mb-10 ${contract.featured ? 'text-white' : 'text-gray-700'}`}>
                      {contract.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${contract.featured ? 'text-primary-200' : 'text-primary-600'}`} />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={handleContactClick}
                      className={`w-full py-4 rounded-xl font-bold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                        contract.featured
                          ? 'bg-white text-primary-600 hover:bg-gray-100'
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                      }`}
                    >
                      <span>Get Custom Quote</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* What's Covered */}
        <div className="bg-primary-50 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What's Covered in Our Contracts</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-primary-600" />
                <span>Standard Coverage</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Scheduled maintenance visits",
                  "Parts and components",
                  "Labor costs",
                  "Cleaning and servicing",
                  "Basic troubleshooting",
                  "Software updates"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <AlertCircle className="h-6 w-6 text-primary-600" />
                <span>What's NOT Covered</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Damage from misuse or accidents",
                  "Water or liquid damage",
                  "Unauthorized repairs",
                  "Consumables (toner, paper)",
                  "Software licensing",
                  "Physical relocation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">Why Choose Vonex?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group hover:bg-primary-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I upgrade or downgrade my maintenance contract?",
                a: "Yes! Your contract can be adjusted at any time based on your changing needs. We'll work with you to find the right plan."
              },
              {
                q: "What happens if my equipment breaks down between maintenance visits?",
                a: "All our contracts include emergency repair support. Simply call us and we'll dispatch a technician based on your service tier response time."
              },
              {
                q: "Are all printer brands covered?",
                a: "We service most major brands including Kyocera, Canon, Brother, Ricoh, Xerox, and Konica Minolta. Contact us to confirm your specific equipment."
              },
              {
                q: "How long are the contracts?",
                a: "We offer flexible contract terms typically ranging from 12 to 36 months. Custom terms are available upon request."
              },
              {
                q: "Do you offer contracts for used or refurbished equipment?",
                a: "Yes, we can provide maintenance contracts for quality used equipment. Contact us with your equipment details for a custom quote."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Equipment?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get a custom maintenance contract quote for your Saskatoon office. Our maintenance experts will assess your needs
            and provide a plan that fits your budget and keeps your equipment running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleContactClick}
              className="bg-white text-primary-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-3"
            >
              <Mail className="h-6 w-6" />
              <span>Request Quote</span>
              <ArrowRight className="h-6 w-6" />
            </button>
            <a
              href="tel:306-881-0341"
              className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-primary-600 transition-all duration-200 inline-flex items-center justify-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>Call (306) 881-0341</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
