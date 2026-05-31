import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    quote: "Vonex saved us thousands. They audited our print setup and found we were wasting money on the wrong toner for years. Switched to Kyocera through them — never looked back.",
    name: "Sandra K.",
    title: "Office Manager",
    company: "Saskatoon Legal Group",
    initials: "SK",
  },
  {
    quote: "Our HP died on a Friday afternoon before a big presentation. Vonex had a tech on-site within 2 hours. That kind of service is why we've been with them for 6 years.",
    name: "Mike R.",
    title: "Operations Director",
    company: "Prairie Construction Ltd.",
    initials: "MR",
  },
  {
    quote: "We had three different vendors for our printers. Vonex consolidated everything under one contract and our monthly costs dropped by 28%. Wish we'd called sooner.",
    name: "Janet L.",
    title: "CFO",
    company: "Regina Medical Clinic",
    initials: "JL",
  },
];

const stats = [
  { number: "20+", label: "Years Serving Saskatchewan" },
  { number: "500+", label: "Active Business Clients" },
  { number: "2 hrs", label: "Emergency Response Time" },
  { number: "28%", label: "Avg. Cost Reduction" },
];

const certifications = [
  { brand: "KYOCERA", color: "text-red-600", desc: "Authorized Dealer & Certified Service" },
  { brand: "LEXMARK", color: "text-orange-600", desc: "Gold Partner" },
  { brand: "HP", color: "text-blue-600", desc: "Certified Service Provider" },
  { brand: "XEROX", color: "text-purple-600", desc: "Authorized Dealer" },
  { brand: "BROTHER", color: "text-green-600", desc: "Certified Service Center" },
  { brand: "ZEBRA", color: "text-gray-600", desc: "Authorized Reseller" },
];

const comparisonFeatures = [
  { feature: "Factory-certified technicians on-site", vonex: true, other: false },
  { feature: "Same-day emergency response", vonex: true, other: false },
  { feature: "Genuine OEM parts guaranteed", vonex: true, other: "Sometimes" },
  { feature: "Warranty stays valid after service", vonex: true, other: false },
  { feature: "One contact for all brands", vonex: true, other: false },
  { feature: "Free print cost audit", vonex: true, other: false },
  { feature: "Saskatchewan-based support", vonex: true, other: false },
  { feature: "Managed print contracts", vonex: true, other: false },
];

export default function TrustAndConvert() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-white">
      {/* STATS BAR */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl lg:text-5xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-blue-200 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Official Authorizations</p>
            <h2 className="text-3xl font-black text-gray-900">
              We're Not Just a Reseller — We're Certified by Every Brand We Sell
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Factory certification means our techs are trained by the manufacturers themselves.
              Your warranty stays valid. Your parts are genuine. Your service is guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.brand}
                className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                  <span className={`font-black text-xs ${cert.color}`}>{cert.brand}</span>
                </div>
                <p className="text-gray-400 text-xs leading-tight mb-3">{cert.desc}</p>
                <div className="inline-flex items-center gap-1 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Certified
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">What Our Clients Say</p>
          <h2 className="text-3xl font-black text-gray-900">Saskatchewan Businesses Trust Vonex</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              onClick={() => setActiveTestimonial(i)}
              className={`rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                activeTestimonial === i
                  ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100'
                  : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-md'
              }`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.title} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-500 text-sm">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, s) => (
              <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="font-bold text-gray-900">4.9 / 5</span>
          <span>based on Google Reviews — Saskatchewan businesses</span>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Why Local Matters</p>
            <h2 className="text-3xl font-black text-gray-900">Vonex vs. Ordering Online or Big Box</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-6 text-gray-400 font-semibold w-1/2"></th>
                  <th className="py-4 px-6 text-center">
                    <div className="bg-blue-600 text-white font-black rounded-xl py-1.5 px-4 text-sm inline-block">
                      Vonex ✓
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center text-gray-400 font-semibold text-sm">Big Box / Online</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonFeatures.map((item) => (
                  <tr key={item.feature} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-3.5 px-6 text-gray-700 font-medium">{item.feature}</td>
                    <td className="py-3.5 px-6 text-center">
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 rounded-full">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-center">
                      {item.other === false ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-red-50 rounded-full">
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-gray-400 text-xs font-medium">{item.other}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-blue-100 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Free — No Obligation
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to Stop Overpaying<br />for Printing?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 10-minute print audit. We'll show you exactly where your money is going
            and how much you can save — no strings attached.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:3068810341"
              className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-2xl font-black text-lg transition-all hover:bg-blue-50 hover:scale-105 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (306) 881-0341
            </a>
            <a
              href="mailto:info@vonex.ca"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>

          <p className="text-blue-200 text-sm mt-8">
            Serving Saskatoon, Regina & all of Saskatchewan since 2004 · info@vonex.ca
          </p>
        </div>
      </div>
    </div>
  );
}