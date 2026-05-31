import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, Clock, MapPin, Wrench } from 'lucide-react';

const stats = [
  { icon: Users,  number: "500+", label: "Businesses Served" },
  { icon: Clock,  number: "20+",  label: "Years Experience" },
  { icon: Award,  number: "4",    label: "Major Brand Partners" },
  { icon: Wrench, number: "Fast", label: "Emergency Service" }
];

export default function About() {
  return (
    <>
      {/* ── SEO HEAD ─────────────────────────────────────────────────────── */}
      <Helmet>
        <title>About Vonex Business Solutions | Saskatchewan's Print Experts Since 2004</title>
        <meta name="description" content="Locally owned in Saskatoon since 2004. Vonex Business Solutions provides managed print services, printer repair, and equipment leasing across Saskatchewan. Call (306) 881-0341." />
        <link rel="canonical" href="https://vonex.ca/about" />
        <link rel="alternate" hreflang="en-ca" href="https://vonex.ca/about" />
        <link rel="alternate" hreflang="en" href="https://vonex.ca/about" />
        <meta property="og:title" content="About Vonex Business Solutions | Saskatchewan's Print Experts Since 2004" />
        <meta property="og:description" content="Locally owned in Saskatoon since 2004. Managed print services, printer repair, and equipment leasing across Saskatchewan. 500+ businesses served." />
        <meta property="og:url" content="https://vonex.ca/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vonex.ca/og-image.png" />
        <meta property="og:site_name" content="Vonex Business Solutions" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Vonex Business Solutions | Saskatchewan's Print Experts Since 2004" />
        <meta name="twitter:description" content="Locally owned in Saskatoon since 2004. Managed print, printer repair, and equipment leasing across Saskatchewan." />
        <meta name="twitter:image" content="https://vonex.ca/og-image.png" />
        {/* AboutPage schema only — no aggregateRating here.
            aggregateRating lives in structured-data.js baseOrganization only. */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "url": "https://vonex.ca/about",
            "name": "About Vonex Business Solutions",
            "description": "Vonex Business Solutions is a locally owned Saskatchewan company founded in 2004, providing managed print services, printer repair, and Kyocera & HP equipment leasing to 500+ businesses across the province.",
            "mainEntity": {
              "@type": "LocalBusiness",
              "@id": "https://vonex.ca/#organization",
              "name": "Vonex Business Solutions",
              "foundingDate": "2004",
              "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 10 },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "111 2nd Avenue South, Unit 400",
                "addressLocality": "Saskatoon",
                "addressRegion": "SK",
                "postalCode": "S7K 1K6",
                "addressCountry": "CA"
              },
              "areaServed": {
                "@type": "State",
                "name": "Saskatchewan"
              }
            }
          }
        `}</script>
      </Helmet>

      {/* ── PAGE CONTENT ─────────────────────────────────────────────────── */}
      <div className="min-h-screen pt-32">
        <section id="about" className="py-20 bg-white">
          <div className="container-custom">

            <div className="text-center mb-20">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
                Saskatchewan's Trusted Print Experts Since 2004
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Locally owned and operated in Saskatoon, Vonex Business Solutions has been Saskatchewan's
                premier print services provider for over 20 years. Our certified technicians serve businesses
                across the province with emergency repairs, managed print services, and office equipment solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
              <div>
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4 shadow-md">
                        <stat.icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/Vonex Bussiness About us.jpg"
                  alt="Professional business woman using modern multifunction printer in contemporary Saskatchewan office environment showcasing Vonex Business Solutions expertise and customer success"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className="bg-primary-50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Vonex Business Solutions?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Local expertise, certified technicians, and reliable service for all your print needs.
              </p>
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <MapPin className="h-6 w-6 text-primary-600" />
                <span className="text-lg font-semibold">Proudly Serving Saskatchewan Since 2004</span>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}