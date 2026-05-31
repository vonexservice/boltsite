import React from 'react';
import { MapPin, Truck, Clock, Phone } from 'lucide-react';

const serviceAreas = [
  {
    city: "Saskatoon",
    description: "Our home base with same-day service available",
    services: ["On-site service", "Same-day delivery", "Emergency repairs", "Regular maintenance"]
  },
  {
    city: "Regina",
    description: "Full service coverage for the capital city",
    services: ["Scheduled service", "Next-day delivery", "Certified technicians", "Bulk orders"]
  },
  {
    city: "Prince Albert",
    description: "Northern Saskatchewan service hub",
    services: ["Regional service", "Delivery routes", "Technical support", "Parts availability"]
  },
  {
    city: "Moose Jaw",
    description: "Southern Saskatchewan coverage",
    services: ["Service visits", "Equipment delivery", "Training sessions", "Support calls"]
  },
  {
    city: "Swift Current",
    description: "Southwest Saskatchewan service",
    services: ["Scheduled visits", "Equipment transport", "Remote support", "Parts delivery"]
  },
  {
    city: "Yorkton",
    description: "Eastern Saskatchewan coverage",
    services: ["Service routes", "Equipment delivery", "Technical visits", "Support services"]
  }
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serving All of Saskatchewan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From Saskatoon to Regina and everywhere in between, we provide reliable 
            print services across Saskatchewan with local expertise and fast response times.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 ml-3">{area.city}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
              <ul className="space-y-1">
                {area.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-center text-xs text-gray-600">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free delivery within Saskatoon and surrounding areas</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Same-day service in Saskatoon, next-day across Saskatchewan</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Support</h3>
              <p className="text-gray-600">Saskatchewan-based support team that understands your needs</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Saskatchewan Coverage Map</h3>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Saskatchewan map showing Vonex Business Solutions service coverage areas including Saskatoon Regina Prince Albert Moose Jaw Swift Current Yorkton"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-primary-600 bg-opacity-10 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-xl text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Province-Wide Coverage</h4>
                <p className="text-gray-600">Serving businesses across Saskatchewan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}