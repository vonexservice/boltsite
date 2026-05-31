import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: "Jennifer Thompson",
    title: "Office Manager",
    company: "Prairie Law Group",
    content: "Vonex Business Solutions has been our go-to for printer maintenance for 5 years. Their same-day service saved us during our busiest quarter. Professional, reliable, and always have the parts we need in stock.",
    rating: 5,
    location: "Saskatoon, SK",
    savings: "Reduced printing costs by 35%"
  },
  {
    name: "Mike Rodriguez", 
    title: "IT Director",
    company: "Northern Manufacturing",
    content: "When our production printer failed during a critical deadline, Vonex Business Solutions had a certified technician on-site within 90 minutes. Their Lexmark expertise saved us thousands in potential downtime costs.",
    rating: 5,
    location: "Prince Albert, SK",
    savings: "Prevented $15K in downtime"
  },
  {
    name: "Sarah Chen",
    title: "Business Owner", 
    company: "Regina Accounting Services",
    content: "The managed print service has been a game-changer. We no longer worry about toner, maintenance, or repairs. Everything is handled professionally, and our costs are predictable.",
    rating: 5,
    location: "Regina, SK",
    savings: "40% cost reduction vs. previous setup"
  },
  {
    name: "David Kowalski",
    title: "Operations Manager",
    company: "Saskatoon Medical Clinic",
    content: "Vonex's cartridge recycling program has helped us meet our environmental goals while saving money. Their delivery service is always on time, and the quality is consistently excellent.",
    rating: 5,
    location: "Saskatoon, SK",
    savings: "30% savings on supplies"
  },
  {
    name: "Lisa Anderson",
    title: "Administrative Director",
    company: "Swift Current School Division",
    content: "Working with Vonex has simplified our print management across multiple locations. Their technicians are knowledgeable, and their response time for emergency repairs is outstanding.",
    rating: 5,
    location: "Swift Current, SK",
    savings: "Streamlined operations across 12 schools"
  },
  {
    name: "Robert Mitchell",
    title: "Facilities Manager",
    company: "Yorkton Regional Hospital",
    content: "The 24/7 emergency service has been crucial for our healthcare facility. Vonex understands the importance of keeping our equipment running, and they deliver every time.",
    rating: 5,
    location: "Yorkton, SK",
    savings: "Zero downtime in critical areas"
  }
];

const stats = [
  { number: "4.9/5", label: "Average Rating", sublabel: "Based on 150+ reviews" },
  { number: "500+", label: "Happy Clients", sublabel: "Across Saskatchewan" },
  { number: "20+", label: "Years Experience", sublabel: "In print services" },
  { number: "100%", label: "Satisfaction", sublabel: "Customer guarantee" }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            What Saskatchewan Businesses Say
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's how we've helped local businesses 
            save money and improve their printing operations across Saskatchewan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg card-hover border">
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="ml-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  {testimonial.savings}
                </div>
              </div>
              
              <Quote className="h-8 w-8 text-primary-600 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed font-medium italic">"{testimonial.content}"</p>
              
              <div className="border-t pt-6">
                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                <p className="text-primary-600 font-medium">{testimonial.title}</p>
                <p className="text-gray-600">{testimonial.company}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-primary-100 mb-1">{stat.label}</div>
                <div className="text-primary-200 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}