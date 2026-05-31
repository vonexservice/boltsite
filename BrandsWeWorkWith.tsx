import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Wrench, ShoppingCart, Star } from 'lucide-react';

const brands = [
  {
    name: "Kyocera",
    logo: "/Kyocera-logo.png",
    fallback: "KYOCERA",
    tag: "Authorized Partner",
    tagColor: "bg-blue-100 text-blue-700",
    internalLink: "/kyocera-authorized-dealer-saskatoon",
    mpsLink: "/kyocera-managed-print-services-saskatoon",
    specialties: ["ECOSYS Series", "TASKalfa Series", "Nova Series", "Managed Print"],
  },
  {
    name: "Lexmark",
    logo: "/Lexmark-Logo.wine.png",
    fallback: "LEXMARK",
    tag: "Gold Partner",
    tagColor: "bg-orange-100 text-orange-700",
    internalLink: "/office-equipment",
    mpsLink: null,
    specialties: ["Enterprise Solutions", "Security Features", "Color Printing"],
  },
  {
    name: "HP",
    logo: "/640px-HP_logo_2012.svg.png",
    fallback: "hp",
    tag: "Service Partner",
    tagColor: "bg-blue-100 text-blue-700",
    internalLink: "/office-equipment",
    mpsLink: null,
    specialties: ["LaserJet Series", "OfficeJet Pro", "PageWide Technology"],
  },
  {
    name: "Brother",
    logo: "/Brother-logo.png",
    fallback: "brother",
    tag: "Certified Service",
    tagColor: "bg-green-100 text-green-700",
    internalLink: "/office-equipment",
    mpsLink: null,
    specialties: ["Small Business", "Label Printers", "Mobile Printing"],
  },
  {
    name: "Xerox",
    logo: "/Xerox-logo.jpg",
    fallback: "XEROX",
    tag: "Authorized Dealer",
    tagColor: "bg-purple-100 text-purple-700",
    internalLink: "/office-equipment",
    mpsLink: null,
    specialties: ["WorkCentre", "Production Printing", "Document Services"],
  },
  {
    name: "Dell",
    logo: "/dell-logo.svg",
    fallback: "DELL",
    tag: "Authorized Distributor",
    tagColor: "bg-indigo-100 text-indigo-700",
    internalLink: "/office-equipment",
    mpsLink: null,
    specialties: ["Business Computers", "Printing Solutions", "IT Equipment"],
  },
  {
    name: "Lenovo",
    logo: "/Lenovo-Logo.png",
    fallback: "lenovo",
    tag: "Authorized Distributor",
    tagColor: "bg-cyan-100 text-cyan-700",
    internalLink: "/office-equipment",
    mpsLink: null,
    specialties: ["Business Computing", "ThinkPad", "Tech Solutions"],
  },
  {
    name: "Zebra",
    logo: "/Zebra-logo-2015-logotype.webp",
    fallback: "ZEBRA",
    tag: "Authorized Reseller",
    tagColor: "bg-gray-100 text-gray-700",
    internalLink: "/office-equipment",
    mpsLink: null,
    specialties: ["Industrial Labels", "Barcode Solutions", "RFID Technology"],
  },
];

const trustPoints = [
  "Factory-certified technicians on every brand",
  "Genuine OEM parts — no grey market supplies",
  "Warranty-compliant service throughout Saskatchewan",
  "Same-day emergency response available",
];

export default function BrandsWeWorkWith() {
  return (
    <>
      {/* ── SEO HEAD ─────────────────────────────────────────────────────── */}
      <Helmet>
        <title>Authorized Printer Brands Saskatchewan | Kyocera, HP, Lexmark & More | Vonex</title>
        <meta name="description" content="Vonex is an authorized dealer and certified service center for Kyocera, HP, Lexmark, Brother, Xerox, Zebra & more. Factory-trained technicians across Saskatchewan. Call (306) 881-0341." />
        <link rel="canonical" href="https://vonex.ca/brands" />
        <link rel="alternate" hreflang="en-ca" href="https://vonex.ca/brands" />
        <link rel="alternate" hreflang="en" href="https://vonex.ca/brands" />
        <meta property="og:title" content="Authorized Printer Brands Saskatchewan | Kyocera, HP, Lexmark & More | Vonex" />
        <meta property="og:description" content="Authorized dealer and certified service center for Kyocera, HP, Lexmark, Brother, Xerox, Zebra & more. Factory-trained technicians. One partner for every brand." />
        <meta property="og:url" content="https://vonex.ca/brands" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vonex.ca/og-image.png" />
        <meta property="og:site_name" content="Vonex Business Solutions" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Authorized Printer Brands Saskatchewan | Kyocera, HP, Lexmark & More | Vonex" />
        <meta name="twitter:description" content="Authorized dealer and certified service center for Kyocera, HP, Lexmark, Brother, Xerox & more across Saskatchewan." />
        <meta name="twitter:image" content="https://vonex.ca/og-image.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Printer Brands Sold & Serviced by Vonex",
            "url": "https://vonex.ca/brands",
            "description": "Vonex is an authorized dealer and certified service center for all major printer and copier brands in Saskatchewan.",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Kyocera — Authorized Partner",  "url": "https://vonex.ca/kyocera-authorized-dealer-saskatoon" },
              { "@type": "ListItem", "position": 2, "name": "Lexmark — Gold Partner",        "url": "https://vonex.ca/office-equipment" },
              { "@type": "ListItem", "position": 3, "name": "HP — Service Partner",          "url": "https://vonex.ca/office-equipment" },
              { "@type": "ListItem", "position": 4, "name": "Brother — Certified Service",   "url": "https://vonex.ca/office-equipment" },
              { "@type": "ListItem", "position": 5, "name": "Xerox — Authorized Dealer",     "url": "https://vonex.ca/office-equipment" },
              { "@type": "ListItem", "position": 6, "name": "Zebra — Authorized Reseller",   "url": "https://vonex.ca/office-equipment" }
            ]
          }
        `}</script>
      </Helmet>

      {/* ── PAGE CONTENT ─────────────────────────────────────────────────── */}
      <div className="min-h-screen pt-32">
        <section className="bg-gray-50">

          {/* ── HERO ── */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Authorized & Certified — Saskatchewan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                The Brands That
                <span className="block text-blue-600">Power Saskatchewan</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Vonex is an authorized dealer and certified service center for every major printer brand.
                One call. Every brand. All of Saskatchewan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3068810341"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
                >
                  <Phone className="h-5 w-5" /> (306) 881-0341
                </a>
                <Link
                  to="/repairs"
                  className="inline-flex items-center gap-3 bg-white border-2 border-blue-200 hover:border-blue-400 text-blue-600 hover:text-blue-700 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <Wrench className="h-5 w-5" /> Book a Repair
                </Link>
              </div>
            </div>
          </div>

          {/* ── TRUST BAR ── */}
          <div className="bg-blue-600 text-white py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
                {trustPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-white/80" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            {/* ── KYOCERA FEATURED CARD ── */}
            <div className="group mb-12 rounded-2xl overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-white to-blue-50">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-32 h-24 bg-white rounded-xl flex items-center justify-center p-4 shadow-md group-hover:scale-105 transition-transform duration-300 border border-gray-200">
                  <img
                    src="/Kyocera-logo.png"
                    alt="Kyocera"
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) parent.innerHTML = '<span class="text-red-600 font-black text-xl">KYOCERA</span>';
                    }}
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                    <Star className="h-3 w-3" />
                    Featured Partner
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-2">
                    Kyocera ECOSYS — Our Featured Brand
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-4 max-w-2xl">
                    Authorized Kyocera dealer with factory-trained technicians, genuine parts, and full
                    ECOSYS & TASKalfa fleet support across Saskatchewan.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {["ECOSYS Series", "TASKalfa Series", "Nova Series", "Managed Print"].map((s) => (
                      <span key={s} className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
                {/* Two CTA buttons for Kyocera */}
                <div className="flex flex-col gap-3 flex-shrink-0">
                  <Link
                    to="/kyocera-authorized-dealer-saskatoon"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap"
                  >
                    Authorized Dealer <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/kyocera-managed-print-services-saskatoon"
                    className="inline-flex items-center gap-2 bg-white border-2 border-blue-200 hover:border-blue-400 text-blue-600 px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap"
                  >
                    Managed Print <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ── BRANDS GRID HEADER ── */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">All Authorized Brands</h2>
              <p className="text-gray-500">Certified technicians for every major brand</p>
            </div>

            {/* ── BRANDS GRID ── */}
            <div className="grid md:grid-cols-2 gap-5 mb-16">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl border border-gray-200 hover:border-blue-400 bg-white transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
                >
                  <div className="relative flex items-center gap-5 p-5">
                    <div className="flex-shrink-0 w-16 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) parent.innerHTML = `<span class="font-bold text-gray-700 text-xs">${brand.fallback}</span>`;
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-gray-900 font-bold text-lg">{brand.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${brand.tagColor}`}>
                          {brand.tag}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-x-2">
                        {brand.specialties.map((s, i) => (
                          <span key={s} className="text-xs text-gray-500">
                            {s}{i < brand.specialties.length - 1 ? ' ·' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex gap-2">
                      {/* Kyocera gets a Managed Print button instead of generic Quote */}
                      {brand.mpsLink ? (
                        <Link
                          to={brand.mpsLink}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-semibold transition-colors"
                        >
                          <ShoppingCart className="h-3 w-3" /> MPS
                        </Link>
                      ) : (
                        <Link
                          to={brand.internalLink}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-xs font-semibold transition-colors"
                        >
                          <ShoppingCart className="h-3 w-3" /> Quote
                        </Link>
                      )}
                      <Link
                        to={brand.name === 'Kyocera' ? '/kyocera-authorized-dealer-saskatoon' : '/repairs'}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-semibold transition-colors"
                      >
                        <Wrench className="h-3 w-3" />
                        {brand.name === 'Kyocera' ? 'Dealer' : 'Repair'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── WHY VONEX ── */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
              <div className="p-6 md:p-8 lg:p-10">
                <div className="text-center mb-10">
                  <p className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">Why Choose Vonex</p>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                    One Partner. Every Brand. All of Saskatchewan.
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                    Instead of juggling multiple vendors, Vonex handles sales, service, supplies,
                    and managed print for every major brand — under one roof, with one phone number.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                  {[
                    { title: "Factory-Certified",    desc: "All technicians trained by manufacturers" },
                    { title: "Genuine OEM Parts",    desc: "Authentic manufacturer parts only" },
                    { title: "Same-Day Response",    desc: "Emergency service across Saskatchewan" },
                    { title: "20+ Years Experience", desc: "Decades of printer expertise" },
                  ].map((item) => (
                    <div key={item.title} className="text-center p-4 rounded-xl bg-gray-50">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:3068810341"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
                  >
                    <Phone className="h-4 w-4 md:h-5 md:w-5" /> Call (306) 881-0341
                  </a>
                  <Link
                    to="/kyocera-managed-print-services-saskatoon"
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-200 hover:border-blue-400 text-blue-600 hover:text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all"
                  >
                    Kyocera Managed Print Services <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}