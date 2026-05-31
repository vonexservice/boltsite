import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Award, Zap, Shield, ArrowRight, Phone, Mail,
  CheckCircle, ChevronDown, ChevronUp,
  BarChart2, Package, Wrench, DollarSign,
  Heart, GraduationCap, Briefcase, Building2,
  HandHeart, HardHat, MapPin, Leaf, TrendingDown,
  ClipboardList, Settings, UserCheck, RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── DATA ────────────────────────────────────────────────────────────────────

const trustBadges = [
  "Saskatchewan-owned & operated",
  "Fast local repair and support in Saskatoon",
  "Service across Saskatchewan: Saskatoon, Regina, Prince Albert",
  "Authorized Kyocera partner with trained technicians",
];

const mpsFeatures = [
  { icon: BarChart2,  title: "Proactive Device Monitoring",         description: "We watch your fleet 24/7 and resolve issues before they affect your team." },
  { icon: Package,    title: "Automatic Supply Management",          description: "Toner and consumables arrive automatically — no last-minute scrambles." },
  { icon: Wrench,     title: "Scheduled Maintenance & Fast Repairs", description: "Preventive service visits plus priority response when something goes wrong." },
  { icon: DollarSign, title: "Cost-Per-Page or Fixed Monthly",       description: "Predictable billing options designed around your print volume and budget." },
];

const benefitBullets = [
  "Lower total cost of ownership with Kyocera's long-life components",
  "Reduced printing costs compared to managing devices separately",
  "Fewer interruptions and less downtime across your office",
  "Predictable monthly costs and easier budgeting",
  "Centralized reporting on usage and waste",
  "Local, fast service from a Saskatchewan-owned company",
  "Single vendor for devices, service, and supplies",
];

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Free Print Audit",
    description: "We analyze your current print volume, costs, and devices to understand your needs and identify where you're overspending.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Custom Kyocera Plan",
    description: "We design a Kyocera-based printing environment with lease or cost-per-page terms that fit your budget and volume.",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Install & Train",
    description: "We install devices, configure secure print and workflows, and train your team on the new systems.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Ongoing Management",
    description: "We monitor usage, send supplies automatically, and handle repairs quickly to keep you running without interruption.",
  },
];

const pricingBullets = [
  "12–60 month lease terms available",
  "All-inclusive service and toner options",
  "Scalable as your business grows",
  "Transparent pricing with no hidden fees",
];

const segments = [
  { icon: Briefcase,    label: "Law Firms & Accounting Offices",  reason: "High-volume printing, need reliability and predictable costs" },
  { icon: HardHat,      label: "Construction & Trade Companies",  reason: "Rugged environments, durable devices and low cost-per-page" },
  { icon: GraduationCap,label: "Schools & Universities",          reason: "Budget-sensitive, cost-effective systems across campuses" },
  { icon: Heart,        label: "Healthcare Clinics & Hospitals",  reason: "Secure, compliant printing and minimal downtime" },
  { icon: Building2,    label: "Government & Municipalities",     reason: "Lease/cost-per-page models with provincial service coverage" },
  { icon: Wrench,       label: "Manufacturing & Warehouses",      reason: "High-volume, rugged needs with low maintenance requirements" },
  { icon: HandHeart,    label: "Non-profits & Small Businesses",  reason: "Predictable monthly costs and local support" },
];

const results = [
  { icon: TrendingDown, text: "Reduced printing costs through optimized device placement and cost-per-page plans" },
  { icon: Zap,          text: "Fewer service calls and faster resolution when issues occur" },
  { icon: BarChart2,    text: "Clear visibility into print usage and waste across your organization" },
  { icon: DollarSign,   text: "Simplified billing: one predictable monthly cost replacing multiple vendors" },
  { icon: Shield,       text: "Less time spent managing printers and toner — so your team focuses on real work" },
];

const ecosysPoints = [
  "Long-life components reduce maintenance needs",
  "Lower consumable costs over the device lifetime",
  "Environmentally efficient imaging technology",
  "Reliable performance in high-volume environments",
  "Fewer service interruptions and downtime",
  "Proven technology used by businesses worldwide",
];

const coverage = [
  { location: "Saskatoon",                    detail: "Same-day service available" },
  { location: "Regina",                       detail: "Scheduled service visits" },
  { location: "Prince Albert",               detail: "Regional coverage" },
  { location: "All Saskatchewan Communities", detail: "Province-wide support" },
];

const aboutBullets = [
  "Saskatchewan-owned & operated",
  "Trained technicians and genuine Kyocera parts",
  "Service across all of Saskatchewan",
  "Fast local support in Saskatoon",
];

const faqs = [
  {
    q: "What is included in managed print services?",
    a: "Managed print services includes Kyocera devices, proactive monitoring, automatic supply delivery, scheduled maintenance, repairs, and usage reporting. You get one predictable monthly cost instead of managing vendors separately.",
  },
  {
    q: "How do cost-per-page plans work?",
    a: "With cost-per-page plans, you pay a fixed rate per page printed. This rate includes the device, service, maintenance, and toner. It's an all-inclusive model that makes budgeting simple.",
  },
  {
    q: "Can we keep some existing devices?",
    a: "Yes. We can integrate compatible existing devices into your managed print environment while phasing in Kyocera ECOSYS systems where they provide the most value.",
  },
  {
    q: "How quickly do you respond to service issues in Saskatoon?",
    a: "We provide fast local support in Saskatoon, with same-day emergency repair available for critical issues. Typical response times are within 24 hours for standard service requests.",
  },
  {
    q: "Do you offer MPS for businesses outside Saskatoon?",
    a: "Yes. We serve businesses across all of Saskatchewan, including Regina, Prince Albert, and surrounding communities.",
  },
  {
    q: "What industries benefit most from managed print?",
    a: "Law firms, accounting offices, construction companies, schools, healthcare facilities, government agencies, manufacturers, and small-to-midsize businesses all benefit from predictable costs and reduced downtime.",
  },
  {
    q: "Is there a minimum page volume for managed print?",
    a: "No. We work with businesses of all sizes, from small offices to large enterprises. We tailor the solution to your volume and budget.",
  },
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
        {open
          ? <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
          : <ChevronDown className="h-5 w-5 text-primary-600 flex-shrink-0" />}
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

function MPSForm() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    city: '', volume: '',
    brands: [] as string[],
    services: [] as string[],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const brandOptions   = ['Kyocera', 'HP', 'Canon', 'Xerox', 'Brother', 'Konica Minolta', 'Other'];
  const serviceOptions = ['Managed Print', 'Device Lease', 'Repair Only', 'Supplies Only'];

  const toggle = (field: 'brands' | 'services', val: string) => {
    setForm(f => ({
      ...f,
      [field]: f[field].includes(val)
        ? f[field].filter(x => x !== val)
        : [...f[field], val],
    }));
  };

  const handleSubmit = () => {
    const body = `Kyocera Managed Print Services Inquiry\n\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nCity: ${form.city}\nMonthly Volume: ${form.volume}\nCurrent Brands: ${form.brands.join(', ')}\nService Type: ${form.services.join(', ')}\nMessage: ${form.message || 'Tell us about your printing needs'}\n\nSubmitted from: vonex.ca/kyocera-managed-print-services-saskatoon`;
    window.open(`mailto:sales@vonex.ca?subject=Kyocera Managed Print Services Inquiry&body=${encodeURIComponent(body)}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="h-16 w-16 text-primary-600 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Sent!</h3>
        <p className="text-gray-600">We'll be in touch shortly to schedule your free MPS audit.</p>
      </div>
    );
  }

  const inputClass  = "w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition";
  const labelClass  = "block text-sm font-semibold text-gray-700 mb-2";
  const chipBase    = "px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all";
  const chipOn      = "bg-primary-600 border-primary-600 text-white";
  const chipOff     = "bg-white border-gray-300 text-gray-700 hover:border-primary-400";

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Name <span className="text-red-500">*</span></label>
          <input className={inputClass} placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
        </div>
        <div>
          <label className={labelClass}>Company <span className="text-red-500">*</span></label>
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
            <button key={b} onClick={() => toggle('brands', b)}
              className={`${chipBase} ${form.brands.includes(b) ? chipOn : chipOff}`}>{b}</button>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Service Type Needed (select all that apply)</label>
        <div className="flex flex-wrap gap-3">
          {serviceOptions.map(s => (
            <button key={s} onClick={() => toggle('services', s)}
              className={`${chipBase} ${form.services.includes(s) ? chipOn : chipOff}`}>{s}</button>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Message (optional)</label>
        <textarea
          className={`${inputClass} h-28 resize-none`}
          placeholder="Tell us about your printing needs..."
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={!form.name || !form.company || !form.phone || !form.email}
        className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
      >
        <Mail className="h-5 w-5" /> Get My Free MPS Quote
      </button>
      <p className="text-center text-sm text-gray-400">No obligation. Free for Saskatchewan businesses.</p>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function KyoceraManagedPrint() {
  return (
    <>
      <Helmet>
        <title>Managed Print Services Saskatoon | Kyocera Print Solutions | Vonex</title>
        <meta name="description" content="Reduce printing costs with Vonex's Kyocera managed print services in Saskatoon and Saskatchewan. Includes devices, toner, service, and monitoring. Free audit. Call (306) 881-0341." />
        <link rel="canonical" href="https://vonex.ca/kyocera-managed-print-services-saskatoon" />
        <link rel="alternate" hreflang="en-ca" href="https://vonex.ca/kyocera-managed-print-services-saskatoon" />
        <meta property="og:title" content="Managed Print Services Saskatoon | Kyocera Print Solutions | Vonex" />
        <meta property="og:description" content="Reduce printing costs with Vonex's Kyocera managed print services in Saskatoon and Saskatchewan. Includes devices, toner, service, and monitoring. Free audit." />
        <meta property="og:url" content="https://vonex.ca/kyocera-managed-print-services-saskatoon" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vonex.ca/og-image.png" />
        <meta property="og:site_name" content="Vonex Business Solutions" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Managed Print Services Saskatoon | Kyocera | Vonex" />
        <meta name="twitter:description" content="Kyocera managed print services in Saskatoon and Saskatchewan. Devices, toner, service, monitoring. Free audit." />
        <meta name="twitter:image" content="https://vonex.ca/og-image.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vonex Business Solutions — Kyocera Managed Print Services",
            "description": "Vonex provides Kyocera managed print services to businesses in Saskatoon and across Saskatchewan, including devices, toner, service, and proactive monitoring.",
            "url": "https://vonex.ca/kyocera-managed-print-services-saskatoon",
            "telephone": "+1-306-881-0341",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "111 2nd Avenue South, Unit 400",
              "addressLocality": "Saskatoon",
              "addressRegion": "SK",
              "postalCode": "S7K 1K6",
              "addressCountry": "CA"
            },
            "areaServed": { "@type": "State", "name": "Saskatchewan" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Kyocera Managed Print Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kyocera Managed Print Services", "description": "All-inclusive managed print including Kyocera devices, toner, service, monitoring, and reporting for Saskatchewan businesses." } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Print Audit", "description": "No-obligation print audit and cost analysis for Saskatchewan businesses considering managed print." } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kyocera Device Leasing", "description": "Flexible 12–60 month Kyocera device leasing with all-inclusive service and toner options." } }
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
              Kyocera Managed Print — Saskatchewan
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Kyocera Managed Print<br className="hidden lg:block" /> Services in Saskatoon
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Predictable monthly costs, lower total cost of ownership, and fast local service with Kyocera
              ECOSYS systems. Vonex manages your entire printing environment so you can focus on your business.
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
            <div className="flex flex-wrap justify-center gap-4">
              {trustBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── WHAT IS MPS ── */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">What Is Managed Print Services (MPS)?</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-14">
              Managed Print Services is a comprehensive solution where Vonex takes care of your entire printing
              environment: devices (Kyocera ECOSYS), consumables, maintenance, monitoring, and reporting. You pay
              a predictable monthly cost instead of dealing with surprise repairs and toner runs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mpsFeatures.map((f, i) => (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-600 transition-colors duration-300 shadow-lg">
                    <f.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── BENEFITS ── */}
          <div className="bg-primary-50 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
              Benefits of Kyocera Managed Print for Saskatoon Businesses
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-10">
              Kyocera ECOSYS systems combined with Vonex's managed print expertise help Saskatchewan businesses
              reduce printing costs, minimize downtime, and simplify their print environment.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefitBullets.map((b, i) => <CheckItem key={i} text={b} />)}
            </ul>
          </div>

          {/* ── HOW IT WORKS ── */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">How Kyocera Managed Print Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  {/* connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 z-0" style={{ width: 'calc(100% - 4rem)', left: '4rem' }} />
                  )}
                  <div className="relative z-10 bg-white border-2 border-primary-100 rounded-2xl p-8 card-hover h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-600 rounded-2xl flex-shrink-0">
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                      <span className="text-4xl font-black text-primary-100">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── PRICING ── */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible Pricing: Lease or Cost-Per-Page</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We offer flexible lease terms and cost-per-page plans tailored to your business size and volume.
                  Upgrade your office for $0 upfront and pay only for what you print.
                </p>
                <ul className="space-y-3 mb-8">
                  {pricingBullets.map((b, i) => <CheckItem key={i} text={b} />)}
                </ul>
                <a
                  href="#request-quote"
                  className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors"
                >
                  Get a Custom MPS Quote <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Lease Terms",  value: "12–60 Months",     sub: "Flexible to your budget" },
                  { label: "Pricing Model", value: "Cost-Per-Page",   sub: "Pay only for what you print" },
                  { label: "What's Included", value: "All-Inclusive", sub: "Device, service & toner" },
                  { label: "Scaling",      value: "Flexible",          sub: "Grows with your business" },
                ].map((item, i) => (
                  <div key={i} className="bg-primary-50 rounded-2xl p-6 text-center">
                    <div className="text-2xl font-black text-primary-600 mb-1">{item.value}</div>
                    <div className="text-sm font-bold text-gray-900 mb-1">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── WHO BENEFITS ── */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
              Who Benefits Most From Kyocera Managed Print in Saskatoon?
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Kyocera MPS is ideal for businesses with moderate to high print volumes that want predictable
              costs and fewer printer problems.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {segments.map((seg, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6 card-hover">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <seg.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{seg.label}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{seg.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── TYPICAL RESULTS ── */}
          <div className="bg-gray-900 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-6">Typical Results With Kyocera Managed Print</h2>
            <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Businesses that switch to Kyocera managed print with Vonex typically see measurable improvements
              in cost, efficiency, and service.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((r, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-800 rounded-2xl p-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                    <r.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm font-medium">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── ECOSYS TECHNOLOGY ── */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
              Why Kyocera ECOSYS Is Ideal for Managed Print
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Kyocera ECOSYS (Eco Compatibility Utility System) technology is designed for sustainability and
              low total cost of ownership, making it the ideal foundation for managed print services.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
              {ecosysPoints.map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <Leaf className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{p}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600">
              View available{' '}
              <Link to="/office-equipment" className="text-primary-600 font-semibold hover:underline">
                Kyocera models
              </Link>{' '}
              or learn more about becoming a customer of our{' '}
              <Link to="/kyocera-authorized-dealer-saskatoon" className="text-primary-600 font-semibold hover:underline">
                authorized Kyocera dealer
              </Link>{' '}
              services.
            </p>
          </div>

          {/* ── SERVICE COVERAGE ── */}
          <div className="bg-primary-50 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Service Coverage Across Saskatchewan</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Vonex provides Kyocera managed print services to businesses across all of Saskatchewan, with fast
              local support in major centres.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
              {coverage.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{c.location}</h3>
                  <p className="text-gray-500 text-sm">{c.detail}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="#request-quote"
                className="inline-flex items-center gap-3 bg-primary-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors"
              >
                Check Service Availability in Your Area <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ── ABOUT VONEX ── */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Local Saskatchewan Print Partner</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Vonex is a Saskatchewan-owned print services provider, serving businesses across the province.
                  We offer emergency printer repair, managed print services, and office equipment sales, with fast
                  local support in Saskatoon. Now an{' '}
                  <Link to="/kyocera-authorized-dealer-saskatoon" className="text-primary-600 font-semibold hover:underline">
                    authorized Kyocera dealer
                  </Link>
                  , we bring trained service and genuine Kyocera parts directly to your business.
                </p>
                <ul className="space-y-3">
                  {aboutBullets.map((b, i) => <CheckItem key={i} text={b} />)}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-8">Why Saskatchewan Businesses Choose Vonex</h3>
                {[
                  ["Local", "Saskatchewan-owned and operated since day one"],
                  ["Certified", "Authorized Kyocera partner with trained technicians"],
                  ["Fast", "Same-day emergency service available in Saskatoon"],
                  ["Simple", "One vendor for devices, service, and supplies"],
                  ["Proven", "Serving businesses across the entire province"],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between border-b border-primary-500 py-3 last:border-0">
                    <span className="font-bold text-primary-100">{label}</span>
                    <span className="text-white text-sm text-right max-w-xs">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Managed Print Services FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
            </div>
          </div>

          {/* ── FORM ── */}
          <div id="request-quote" className="bg-gray-50 rounded-3xl p-12 mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-3">
              Request Your Free Kyocera Managed Print Audit
            </h3>
            <p className="text-gray-600 text-center mb-10">
              Fill in your details and we'll get back to you within one business day.
            </p>
            <div className="max-w-2xl mx-auto">
              <MPSForm />
            </div>
          </div>

          {/* ── FINAL CTA ── */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Start Saving on Printing Costs With Kyocera MPS</h2>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get a free print audit and custom Kyocera managed print proposal for your Saskatoon business.
              See how much you can save by switching to Kyocera ECOSYS with Vonex.
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