import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Award, Zap, Shield, TrendingUp, ArrowRight, Phone, Mail,
  DollarSign, Lock, Leaf, CheckCircle, ChevronDown, ChevronUp,
  Printer, Copy, Palette, Factory, Heart, GraduationCap,
  Briefcase, Building2, Wrench, HandHeart
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── DATA ────────────────────────────────────────────────────────────────────

const benefits = [
  { icon: Award,     title: "Certified Expertise",     description: "Factory-trained technicians and genuine Kyocera parts for optimal performance" },
  { icon: Zap,       title: "Fast Local Service",      description: "Quick turnaround times and same-day repairs when possible across Saskatchewan" },
  { icon: Shield,    title: "Warranty Protection",     description: "Full manufacturer warranty coverage on all Kyocera products and services" },
  { icon: TrendingUp,title: "Advanced Solutions",      description: "Latest Kyocera technology including cloud printing and security features" },
];

const services = [
  {
    title: "Equipment Sales",
    description: "Access to the full range of Kyocera printers, copiers, and multifunction devices",
    features: ["ECOSYS series", "TASKalfa series", "Nova series", "Production equipment"],
  },
  {
    title: "Technical Support",
    description: "Expert support from Kyocera-certified technicians available when you need us",
    features: ["Remote diagnostics", "On-site repairs", "Preventive maintenance", "Emergency support"],
  },
  {
    title: "Supplies & Parts",
    description: "Genuine Kyocera toner, supplies, and parts to keep your equipment running at peak performance",
    features: ["Genuine supplies", "Optimal pricing", "Fast delivery", "Supply tracking"],
  },
  {
    title: "Managed Print Services",
    description: "Comprehensive management of your Kyocera equipment with monitoring and optimization",
    features: ["Fleet management", "Usage tracking", "Cost optimization", "Detailed reporting"],
  },
];

const whyKyoceraBullets = [
  "Lower total printing costs with Kyocera ECOSYS technology",
  "Long-life components and reduced maintenance needs",
  "Trained Kyocera technicians and genuine parts",
  "Fast local repair and support in Saskatoon",
  "Service across Saskatchewan: Saskatoon, Regina, Prince Albert, and more",
  "Personalized service from a Saskatchewan-owned company",
];

const products = [
  { icon: Printer,  title: "ECOSYS Series",                 description: "Energy-efficient desktop and workgroup printers built for low total cost of ownership and long-life components." },
  { icon: Copy,     title: "TASKalfa Series",               description: "Workgroup and production-class multifunction devices for high-volume color and B&W environments." },
  { icon: Zap,      title: "Nova Series",                   description: "Kyocera's latest generation of smart MFPs with enhanced connectivity, intuitive touchscreens, and cloud-ready workflows." },
  { icon: Palette,  title: "Color Multifunction Systems",   description: "Professional color MFPs for marketing, legal, design, and high-visibility documents." },
  { icon: Factory,  title: "Production & Large-Format",     description: "High-speed production systems for heavy-volume environments and print service providers." },
  { icon: Shield,   title: "Secure Print Solutions",        description: "Kyocera devices with built-in encryption, secure pull-printing, and audit trails for compliance-driven industries." },
];

const industries = [
  { icon: Heart,       label: "Healthcare",            description: "Secure, compliant printing for hospitals and clinics" },
  { icon: GraduationCap, label: "Education",           description: "Cost-effective Kyocera systems for schools and universities" },
  { icon: Briefcase,   label: "Professional Services", description: "Reliable printing for law firms and accounting practices" },
  { icon: Building2,   label: "Government",            description: "Scalable solutions for municipalities and public sector" },
  { icon: Wrench,      label: "Manufacturing",         description: "Rugged, high-volume devices for warehouses and production floors" },
  { icon: HandHeart,   label: "Non-profits & SMBs",    description: "Affordable, predictable-cost solutions for smaller organizations" },
];

const leaseBullets = [
  "Flexible lease terms: 12–60 months",
  "Cost-per-page / managed print plans",
  "Includes service, maintenance, and toner",
  "Proactive monitoring and supply management",
];

const auditBullets = [
  "Identify hidden costs and inefficiencies",
  "Get a clear monthly cost comparison",
  "Receive a customized Kyocera replacement plan",
  "No obligation — free for Saskatchewan businesses",
];

const trustBullets = [
  "Saskatchewan-owned & operated",
  "Trained technicians and genuine Kyocera parts",
  "Service across all of Saskatchewan",
  "Fast local support in Saskatoon",
];

const faqs = [
  {
    q: "Are you an authorized Kyocera dealer in Saskatchewan?",
    a: "Yes. Vonex is an authorized Kyocera dealer specializing in secure, eco-friendly ECOSYS printing solutions, with trained support across Saskatchewan.",
  },
  {
    q: "Do you service Kyocera devices outside Saskatoon?",
    a: "Yes. We serve businesses across all of Saskatchewan, including Saskatoon, Regina, Prince Albert, and surrounding communities.",
  },
  {
    q: "Can we lease Kyocera copiers instead of buying?",
    a: "Yes. We offer flexible lease terms (12–60 months) and cost-per-page managed print plans tailored to your budget and volume.",
  },
  {
    q: "What makes Kyocera cheaper in the long run?",
    a: "Kyocera's long-life components and efficient ECOSYS design reduce maintenance and consumable costs, lowering total cost of ownership compared to many other brands.",
  },
  {
    q: "Do you offer a print audit or ROI analysis?",
    a: "Yes. We provide a free, no-obligation print audit and ROI estimate for switching to Kyocera with Vonex.",
  },
];

const otherBrands = [
  { name: "Lexmark", logo: "/Lexmark-Logo.wine.png",              scale: "scale-150" },
  { name: "HP",      logo: "/640px-HP_logo_2012.svg.png",         scale: "scale-100" },
  { name: "Brother", logo: "/Brother-logo.png",                   scale: "scale-100" },
  { name: "Xerox",   logo: "/Xerox-logo.jpg",                     scale: "scale-100" },
  { name: "Zebra",   logo: "/Zebra-logo-2015-logotype.webp",      scale: "scale-100" },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
      <span className="text-gray-700 font-medium leading-relaxed">{text}</span>
    </li>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-bold text-gray-900 pr-4">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-primary-600 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-8 pb-6 bg-gray-50">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── FORM ────────────────────────────────────────────────────────────────────

function AuditForm() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    city: '', volume: '', brands: [] as string[], message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const brandOptions = ['Kyocera', 'HP', 'Canon', 'Xerox', 'Brother', 'Konica Minolta', 'Other'];

  const toggleBrand = (b: string) => {
    setForm(f => ({
      ...f,
      brands: f.brands.includes(b) ? f.brands.filter(x => x !== b) : [...f.brands, b],
    }));
  };

  const handleSubmit = () => {
    const body = `Free Kyocera Print Audit Request\n\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nCity: ${form.city}\nMonthly Volume: ${form.volume}\nCurrent Brands: ${form.brands.join(', ')}\nMessage: ${form.message || 'I want a free Kyocera print audit'}\n\nSubmitted from: vonex.ca/kyocera-authorized-dealer-saskatoon`;
    window.open(`mailto:sales@vonex.ca?subject=Free Kyocera Print Audit Request&body=${encodeURIComponent(body)}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="h-16 w-16 text-primary-600 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Sent!</h3>
        <p className="text-gray-600">We'll be in touch shortly to schedule your free print audit.</p>
      </div>
    );
  }

  const inputClass = "w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Name <span className="text-red-500">*</span></label>
          <input className={inputClass} placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
        </div>
        <div>
          <label className={labelClass}>Company</label>
          <input className={inputClass} placeholder="Company name" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
        </div>
        <div>
          <label className={labelClass}>Phone <span className="text-red-500">*</span></label>
          <input className={inputClass} placeholder="(306) 000-0000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
        </div>
        <div>
          <label className={labelClass}>Email <span className="text-red-500">*</span></label>
          <input className={inputClass} placeholder="you@company.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        </div>
        <div>
          <label className={labelClass}>City</label>
          <select className={inputClass} value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))}>
            <option value="">Select city...</option>
            <option>Saskatoon</option>
            <option>Regina</option>
            <option>Prince Albert</option>
            <option>Other SK</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Monthly Print Volume</label>
          <select className={inputClass} value={form.volume} onChange={e => setForm(f => ({ ...f, volume: e.target.value }))}>
            <option value="">Select volume...</option>
            <option>Under 1,000 pages</option>
            <option>1,000–5,000 pages</option>
            <option>5,000–20,000 pages</option>
            <option>20,000+ pages</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Current Printer Brands (select all that apply)</label>
        <div className="flex flex-wrap gap-3">
          {brandOptions.map(b => (
            <button
              key={b}
              onClick={() => toggleBrand(b)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                form.brands.includes(b)
                  ? 'bg-primary-600 border-primary-600 text-white'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-primary-400'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Message (optional)</label>
        <textarea
          className={`${inputClass} h-28 resize-none`}
          placeholder="I want a free Kyocera print audit..."
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={!form.name || !form.phone || !form.email}
        className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
      >
        <Mail className="h-5 w-5" /> Get My Free Audit
      </button>
      <p className="text-center text-sm text-gray-400">No obligation. Free for Saskatchewan businesses.</p>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function KyoceraAuthorizedDealer() {
  return (
    <>
      <Helmet>
        <title>Kyocera Authorized Dealer in Saskatoon & Saskatchewan | Vonex</title>
        <meta name="description" content="Vonex is now an authorized Kyocera partner serving Saskatoon, Regina & all Saskatchewan. Get Kyocera ECOSYS printers, copiers, managed print services, and fast local support. Free print audits. Call (306) 881-0341." />
        <link rel="canonical" href="https://vonex.ca/kyocera-authorized-dealer-saskatoon" />
        <link rel="alternate" hreflang="en-ca" href="https://vonex.ca/kyocera-authorized-dealer-saskatoon" />
        <meta property="og:title" content="Kyocera Authorized Dealer in Saskatoon & Saskatchewan | Vonex" />
        <meta property="og:description" content="Vonex is now an authorized Kyocera partner serving Saskatoon, Regina & all Saskatchewan. ECOSYS printers, managed print services, fast local support. Free print audits." />
        <meta property="og:url" content="https://vonex.ca/kyocera-authorized-dealer-saskatoon" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vonex.ca/og-image.png" />
        <meta property="og:site_name" content="Vonex Business Solutions" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kyocera Authorized Dealer in Saskatoon & Saskatchewan | Vonex" />
        <meta name="twitter:description" content="Saskatchewan's authorized Kyocera dealer. ECOSYS printers, managed print services, fast local support. Free print audits." />
        <meta name="twitter:image" content="https://vonex.ca/og-image.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vonex Business Solutions — Authorized Kyocera Dealer",
            "description": "Vonex is Saskatchewan's authorized Kyocera dealer offering ECOSYS and TASKalfa printers, copiers, and multifunction devices with factory-trained technician support, genuine parts, and managed print services.",
            "url": "https://vonex.ca/kyocera-authorized-dealer-saskatoon",
            "telephone": "+1-306-881-0341",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "111 2nd Avenue South, Unit 400",
              "addressLocality": "Saskatoon",
              "addressRegion": "SK",
              "postalCode": "S7K 1K6",
              "addressCountry": "CA"
            },
            "brand": { "@type": "Brand", "name": "Kyocera", "sameAs": "https://en.wikipedia.org/wiki/Kyocera" },
            "areaServed": { "@type": "State", "name": "Saskatchewan" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Kyocera Products & Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Kyocera ECOSYS Series", "description": "Energy-efficient laser printers and MFPs for small to medium businesses.", "brand": { "@type": "Brand", "name": "Kyocera" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Kyocera TASKalfa Series", "description": "Workgroup and production-class multifunction devices for high-volume environments.", "brand": { "@type": "Brand", "name": "Kyocera" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kyocera Managed Print", "description": "Fleet management, usage tracking, and cost optimization for Kyocera device fleets." } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Print Audit", "description": "No-obligation print audit and ROI analysis for Saskatchewan businesses." } }
              ]
            }
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen pt-32">
      <section className="py-20 bg-white">
        <div className="container-custom">

          {/* ── HERO ── */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 rounded-full text-primary-600 text-sm font-bold mb-6">
              <Award className="h-4 w-4 mr-2" />
              Authorized Kyocera Dealer — Saskatchewan
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Kyocera Authorized Dealer<br className="hidden lg:block" /> in Saskatchewan
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Vonex is now an authorized Kyocera partner, bringing reliable, efficient, and sustainable printing
              solutions to businesses in Saskatoon and across Saskatchewan. Get Kyocera ECOSYS printers and
              copiers, managed print services, and fast local support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="#request-quote"
                className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors inline-flex items-center justify-center gap-3"
              >
                <Mail className="h-5 w-5" /> Get a Free Print Audit
              </a>
              <a
                href="tel:306-881-0341"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-bold hover:bg-primary-600 hover:text-white transition-all inline-flex items-center justify-center gap-3"
              >
                <Phone className="h-5 w-5" /> (306) 881-0341
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Saskatchewan-owned & operated",
                "Fast, local printer repair and service",
                "Serving Saskatoon, Regina & all Saskatchewan",
                "Authorized Kyocera partner with trained technicians",
              ].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── PARTNERSHIP ANNOUNCEMENT ── */}
          <div className="bg-primary-50 border-l-4 border-primary-600 rounded-2xl p-10 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kyocera Welcomes Vonex Business Solutions as a New Partner
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Vonex Business Solutions is now an Authorized Kyocera Partner — bringing reliable printing solutions
              and certified service to businesses in Saskatoon and across Saskatchewan. By joining forces with Kyocera,
              we're expanding access to reliable, sustainable solutions that Saskatchewan businesses need to succeed.
            </p>
            <blockquote className="border-l-4 border-primary-300 pl-6 italic text-gray-600 text-lg">
              "Every new partnership is an opportunity to create more value for customers. We're proud to partner
              with Kyocera and bring their reliable, efficient, and sustainable technology to our clients across Saskatchewan."
              <footer className="mt-3 text-sm font-bold text-primary-600 not-italic">— Vonex Business Solutions</footer>
            </blockquote>
          </div>

          {/* ── KEY BENEFITS ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((b, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-600 transition-colors duration-300 shadow-lg">
                  <b.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>

          {/* ── WHY KYOCERA FROM VONEX ── */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Why Choose Kyocera From Vonex?</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Kyocera's ECOSYS systems are built for low total cost of ownership, long-life components, and
              environmental efficiency. Combined with Vonex's local Saskatchewan service and managed print
              expertise, you get lower printing costs and fewer interruptions.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {whyKyoceraBullets.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── PRODUCTS ── */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Kyocera Printers & Copiers We Offer</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              We offer new and certified refurbished Kyocera ECOSYS photocopiers and multifunction devices,
              from compact desktop printers to high-volume color MFPs for large offices.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {products.map((p, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center card-hover">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-6">
                    <p.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/office-equipment"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors"
              >
                See Available Kyocera Models <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* ── SERVICES GRID ── */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Kyocera Services</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-10 card-hover">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{s.description}</p>
                  <ul className="space-y-3">
                    {s.features.map((f, fi) => (
                      <li key={fi} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── INDUSTRIES ── */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Kyocera Solutions for Every Saskatchewan Industry</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              From healthcare to education, manufacturing to professional services, we create customized
              Kyocera solutions for your industry's unique printing needs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6 card-hover">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <ind.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{ind.label}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{ind.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── BUSINESS VALUE ── */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Business Value You Can Measure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-primary-200 rounded-2xl p-10 card-hover">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-6">
                  <DollarSign className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lower Total Cost of Ownership</h3>
                <p className="text-gray-600 leading-relaxed">Kyocera's reliability and efficiency reduce maintenance costs, downtime, and supply expenses compared to competing solutions.</p>
              </div>
              <div className="bg-white border-2 border-primary-200 rounded-2xl p-10 card-hover">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-6">
                  <Lock className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Security & Compliance</h3>
                <p className="text-gray-600 leading-relaxed">Protect sensitive documents with advanced security features including encryption, secure printing, and audit trails required for compliance.</p>
              </div>
              <div className="bg-white border-2 border-primary-200 rounded-2xl p-10 card-hover">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-6">
                  <Leaf className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability & Efficiency</h3>
                <p className="text-gray-600 leading-relaxed">ECOSYS technology cuts energy consumption and waste. Reduce your environmental footprint while cutting operational costs.</p>
              </div>
            </div>
          </div>

          {/* ── FREE PRINT AUDIT ── */}
          <div className="bg-primary-50 rounded-3xl p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Print Audit: See How Much You Can Save With Kyocera</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Claim a no-obligation print audit. We'll analyze your current print volume, costs, and devices,
                then show you exactly how much you can save switching to Kyocera with Vonex's managed print services.
              </p>
              <ul className="space-y-3 text-left inline-block mb-10">
                {auditBullets.map((b, i) => <CheckItem key={i} text={b} />)}
              </ul>
              <div>
                <a
                  href="#request-quote"
                  className="inline-flex items-center gap-3 bg-primary-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors"
                >
                  <Mail className="h-5 w-5" /> Book Your Free Print Audit
                </a>
              </div>
            </div>
          </div>

          {/* ── LEASE & MANAGED PRINT ── */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Lease Kyocera Copiers or Go With Managed Print</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Upgrade your office for $0 with Kyocera leasing and cost-per-page plans. Vonex bundles devices,
                  service, and toner into predictable monthly costs, so you reduce upfront spend and control your
                  print budget.
                </p>
                <ul className="space-y-3 mb-8">
                  {leaseBullets.map((b, i) => <CheckItem key={i} text={b} />)}
                </ul>
                <a
                  href="#request-quote"
                  className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors"
                >
                  Get a Custom Lease Quote <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-8">What's Included</h3>
                {[
                  ["Device", "Brand-new Kyocera ECOSYS or TASKalfa"],
                  ["Service", "On-site repairs by trained technicians"],
                  ["Toner", "Genuine Kyocera supplies delivered automatically"],
                  ["Monitoring", "Proactive fleet management & reporting"],
                  ["Flexibility", "12–60 month terms to fit your budget"],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between border-b border-primary-500 py-3 last:border-0">
                    <span className="font-bold text-primary-100">{label}</span>
                    <span className="text-white text-sm text-right max-w-xs">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── ABOUT VONEX ── */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">About Vonex: Your Local Saskatchewan Print Partner</h2>
            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto leading-relaxed mb-10">
              Vonex is a Saskatchewan-owned print services provider, serving businesses across the province. We offer
              emergency printer repair, managed print services, and office equipment sales, with fast local support in
              Saskatoon. Now an authorized Kyocera partner, we bring trained service and genuine Kyocera parts to your business.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {trustBullets.map((b, i) => <CheckItem key={i} text={b} />)}
            </ul>
          </div>

          {/* ── OTHER BRANDS ── */}
          <div className="mb-20">
            <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
              We also sell & service
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {otherBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="w-24 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center p-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className={`max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 ${brand.scale}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) parent.innerHTML = `<span class="text-xs font-bold text-gray-400">${brand.name}</span>`;
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="text-center mt-6">
              <Link to="/brands" className="text-primary-600 text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View all brands we support <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>

          {/* ── FAQ ── */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Kyocera Printer & Copier FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
            </div>
          </div>

          {/* ── FORM ── */}
          <div id="request-quote" className="bg-gray-50 rounded-3xl p-12 mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-3">Request Your Free Kyocera Print Audit</h3>
            <p className="text-gray-600 text-center mb-10">Fill in your details and we'll get back to you within one business day.</p>
            <div className="max-w-2xl mx-auto">
              <AuditForm />
            </div>
          </div>

          {/* ── FINAL CTA ── */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Lower Your Printing Costs With Kyocera?</h2>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Call Vonex today or request your free Kyocera print audit. Get reliable, high-performance
              Kyocera systems and Saskatchewan-based service that keeps your business running.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:306-881-0341"
                className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-primary-600 transition-all duration-200 inline-flex items-center justify-center gap-3"
              >
                <Phone className="h-6 w-6" /> Call (306) 881-0341
              </a>
              <a
                href="#request-quote"
                className="bg-white text-primary-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center gap-3"
              >
                <Mail className="h-6 w-6" /> Request Free Print Audit <ArrowRight className="h-6 w-6" />
              </a>
            </div>
            <p className="text-primary-200 text-sm mt-6">
              Ask about our Kyocera demo units and free system assessment
            </p>
          </div>

        </div>
      </section>
      </div>
    </>
  );
}