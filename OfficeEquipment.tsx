import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Phone, Shield, Leaf, DollarSign, Wrench, RefreshCw, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const lineup = [
  {
    series: "Kyocera ECOSYS",
    tag: "Printers & Compact MFPs",
    tagColor: "bg-primary-100 text-primary-700",
    headline: "Reliable Everyday Printing for Small Teams",
    desc: "ECOSYS laser printers and compact multifunction devices are built for offices that print daily documents, invoices, and reports. Industry-leading cost per page, long-life components, and minimal service requirements.",
    specs: [
      "Print, copy, scan & fax in one device",
      "Lowest cost per page in class",
      "Long-life toner & drum — fewer replacements",
      "Compact footprint, network & mobile ready",
      "Energy Star certified"
    ],
    idealFor: "1–15 staff · Low to medium print volume · Cost-conscious offices",
    img: "/Kyocera-logo.png"
  },
  {
    series: "Kyocera TASKalfa",
    tag: "Workgroup Photocopiers & MFDs",
    tagColor: "bg-blue-100 text-blue-700",
    headline: "High-Performance Photocopiers for Growing Offices",
    desc: "TASKalfa multifunction devices deliver the speed, paper capacity, and workflow tools that growing offices need. Secure print release, advanced scan routing, and expandable finishing — without the enterprise price tag.",
    specs: [
      "High-speed colour & monochrome output",
      "Large paper capacity for busy workgroups",
      "Scan-to-email, scan-to-folder, workflow automation",
      "Secure print release & user authentication",
      "Expandable finishing & stapling options"
    ],
    idealFor: "10–50 staff · Medium to high print volume · Document-intensive workflows",
    img: "/Kyocera-logo.png"
  },
  {
    series: "Kyocera TASKalfa Pro & Nova",
    tag: "Production Multifunction Systems",
    tagColor: "bg-indigo-100 text-indigo-700",
    headline: "Production-Grade Output for High-Volume Environments",
    desc: "For law firms, medical clinics, government offices, and in-house print shops that demand professional colour accuracy, enterprise security, and heavy-duty reliability at volume. TASKalfa Pro and Nova systems are built for it.",
    specs: [
      "Production-speed colour printing",
      "Professional colour accuracy & finishing",
      "PHIPA compliance & data security features",
      "Heavy-duty duty cycles for millions of pages",
      "Advanced document management integration"
    ],
    idealFor: "50+ staff · High volume · Law firms, medical, government, print shops",
    img: "/Kyocera-logo.png"
  }
];

const outcomes = [
  {
    icon: DollarSign,
    stat: "Up to 30%",
    label: "Lower Print Costs",
    desc: "Kyocera ECOSYS long-life toner and drum technology reduces supply spend compared to HP, Brother, or Canon equivalents."
  },
  {
    icon: Wrench,
    stat: "Fewer",
    label: "Service Calls",
    desc: "ECOSYS and TASKalfa devices are engineered for millions of pages with minimal intervention — less downtime for your team."
  },
  {
    icon: Shield,
    stat: "Built-In",
    label: "Document Security",
    desc: "Secure print release, data encryption, and user authentication come standard on every Kyocera multifunction device."
  },
  {
    icon: Leaf,
    stat: "Industry-Leading",
    label: "Sustainability",
    desc: "Long-life cartridges produce dramatically less waste. Kyocera is among the most eco-certified printer brands available."
  }
];

const purchaseOptions = [
  {
    title: "Buy New",
    best: "Full manufacturer warranty & latest technology",
    points: [
      "Full Kyocera manufacturer warranty",
      "Latest ECOSYS firmware & security features",
      "Own the asset — no ongoing obligation",
      "Professional installation & training included"
    ],
    note: "Best for businesses that want zero compromise and plan to hold equipment for 5+ years."
  },
  {
    title: "Certified Refurbished",
    best: "40–60% less than new — same Vonex support",
    points: [
      "Fully rebuilt with genuine Kyocera parts",
      "90-day Vonex warranty on every unit",
      "Professional installation & training included",
      "Same ongoing support as new equipment"
    ],
    note: "Best for cost-conscious businesses that need reliable performance without the new-device price."
  },
  {
    title: "Lease",
    best: "Predictable monthly cost with everything included",
    points: [
      "From $89/month — toner & service included",
      "No large capital outlay",
      "Upgrade at end of term",
      "Fully tax-deductible operating expense"
    ],
    note: "Best for businesses that want one fixed monthly cost covering equipment, supplies, and service."
  }
];

const included = [
  { title: "Professional Installation", desc: "Network setup, driver configuration, and print queue setup for every workstation." },
  { title: "Staff Training", desc: "Full walkthrough of printing, copying, scanning, secure release, and workflow features." },
  { title: "Warranty Coverage", desc: "Full Kyocera warranty on new devices. 90-day Vonex warranty on all refurbished units." },
  { title: "Local Support", desc: "Saskatchewan-based technicians who know your equipment and respond fast." },
  { title: "Genuine Supplies", desc: "OEM Kyocera toner in stock for all ECOSYS and TASKalfa models. Auto-replenishment available." },
  { title: "Lease Options", desc: "Flexible 36 or 60-month terms from $89/month with maintenance included." }
];

export default function OfficeEquipment() {
  const [activeSeries, setActiveSeries] = useState(0);
  const [activeOption, setActiveOption] = useState(0);

  return (
    <section id="office-equipment" className="bg-white">

      {/* ── HERO ── */}
      <div className="bg-white border-b border-gray-100 pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                Authorized Kyocera Dealer — Saskatchewan
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Kyocera Printers, Photocopiers & Multifunction Devices
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Saskatchewan's authorized Kyocera dealer. New and certified refurbished ECOSYS printers, 
                TASKalfa photocopiers, and Nova production multifunction devices — with professional 
                installation, training, and ongoing local support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:306-881-0341"
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200 shadow-md"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (306) 881-0341
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
                >
                  Get a Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                <img
                  src="/Kyocera-logo.png"
                  alt="Authorized Kyocera dealer Saskatchewan — ECOSYS TASKalfa Nova printers photocopiers"
                  className="h-14 w-auto object-contain mx-auto mb-8"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="space-y-3">
                  {[
                    { s: "ECOSYS", d: "Printers & compact multifunction devices" },
                    { s: "TASKalfa", d: "Workgroup photocopiers & MFDs" },
                    { s: "TASKalfa Pro / Nova", d: "Production multifunction systems" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 bg-white rounded-xl p-4 border border-gray-100">
                      <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{item.s}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── KYOCERA LINEUP ── */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Select Your Kyocera Series
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three product lines — each optimized for a different office environment and print volume.
            </p>
          </div>

          {/* Series selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {lineup.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSeries(i)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeSeries === i
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {s.series}
              </button>
            ))}
          </div>

          {/* Active series card */}
          <div className="bg-white rounded-3xl border-2 border-primary-100 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-12">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${lineup[activeSeries].tagColor}`}>
                  {lineup[activeSeries].tag}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {lineup[activeSeries].series}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">{lineup[activeSeries].headline}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{lineup[activeSeries].desc}</p>
                <div className="bg-gray-50 rounded-xl px-4 py-3 mb-8 border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Ideal For</p>
                  <p className="text-sm text-gray-700 font-medium">{lineup[activeSeries].idealFor}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:306-881-0341"
                    className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Get Pricing
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 p-10 lg:p-12 border-t-2 lg:border-t-0 lg:border-l-2 border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6">Key Capabilities</h4>
                <ul className="space-y-4">
                  {lineup[activeSeries].specs.map((spec, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BUSINESS OUTCOMES ── */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Saskatchewan Businesses Choose Kyocera
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We carry HP, Lexmark, Brother, and Canon — but Kyocera ECOSYS photocopiers and multifunction 
              devices consistently deliver the best total cost of ownership for Saskatchewan offices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((o, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-4">
                  <o.icon className="h-7 w-7 text-primary-600" />
                </div>
                <p className="text-2xl font-black text-primary-600 mb-1">{o.stat}</p>
                <p className="font-bold text-gray-900 mb-3">{o.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NEW vs REFURBISHED vs LEASE ── */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              New, Certified Refurbished, or Lease?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every option includes professional installation, training, and Vonex support. 
              The difference is cost structure and ownership.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {purchaseOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => setActiveOption(i)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeOption === i
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300'
                }`}
              >
                {opt.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{purchaseOptions[activeOption].title}</h3>
                <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-8">
                  {purchaseOptions[activeOption].best}
                </div>
                <ul className="space-y-4 mb-8">
                  {purchaseOptions[activeOption].points.map((p, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed">{purchaseOptions[activeOption].note}</p>
                </div>
              </div>
              <div className="bg-primary-600 p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-primary-200 font-bold uppercase tracking-widest text-xs mb-4">Get Pricing</p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {purchaseOptions[activeOption].title === 'Certified Refurbished'
                      ? 'Ask About Current Stock'
                      : `${purchaseOptions[activeOption].title} Pricing`}
                  </h3>
                  <p className="text-primary-100 leading-relaxed mb-8">
                    Call us or send a message. We'll confirm pricing and availability for the Kyocera series 
                    that fits your office — no obligation.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href="tel:306-881-0341"
                    className="w-full inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-xl font-bold transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    (306) 881-0341
                  </a>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-xl font-bold transition-all duration-200"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── REFURBISHED PROCESS ── */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                Certified Refurbished
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Refurbished Kyocera Photocopiers & Printers — Built to Vonex Standard
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every refurbished Kyocera multifunction device and photocopier goes through a full 
                rebuild — not a clean and a reset. Genuine parts, certified technicians, and a 
                90-day warranty before it leaves our shop.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The result is a device that performs like new at 40–60% of the cost, backed by 
                the same Vonex installation and support you'd get with brand new equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:306-881-0341"
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Check Availability
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-xl font-bold transition-all duration-200"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-green-100 rounded-xl mr-4">
                  <RefreshCw className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">The Vonex Refurbishment Process</h3>
                  <p className="text-sm text-gray-500">Every unit — no exceptions</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Full disassembly and component inspection",
                  "Worn parts replaced with genuine Kyocera components",
                  "Fuser, drum, rollers and feed systems serviced",
                  "Firmware updated to current version",
                  "Full test print run — colour calibration verified",
                  "90-day Vonex warranty applied before delivery"
                ].map((step, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">{i + 1}</span>
                    <span className="text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT'S INCLUDED ── */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Included With Every Printer & Photocopier
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              New or refurbished — professional setup and local support are standard with every Kyocera multifunction device we sell.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="h-6 w-6 text-primary-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OTHER BRANDS ── */}
      <div className="py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4 text-sm">
            We're also authorized dealers for <strong>HP, Lexmark, Brother, Canon,</strong> and <strong>Xerox</strong> printers and multifunction devices.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["HP", "Lexmark", "Brother", "Canon", "Xerox"].map((brand) => (
              <span key={brand} className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold text-sm">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Spec the Right Device for Your Office?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Call us with your office size and monthly print volume and we'll recommend the right 
            Kyocera printer, photocopier, or multifunction device — new, refurbished, or leased.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:306-881-0341"
              className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200 shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              (306) 881-0341
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── RELATED SERVICES ── */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Explore Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { to: "/managed-print", title: "Managed Print Services", sub: "Toner, service & support in one monthly cost" },
              { to: "/lease-rental", title: "Lease & Rental", sub: "Flexible terms, no large upfront cost" },
              { to: "/repairs", title: "Emergency Printer Repair", sub: "Same-day emergency service" }
            ].map((item) => (
              <Link key={item.to} to={item.to} className="flex items-center justify-between gap-3 p-5 bg-white border border-gray-200 rounded-2xl hover:bg-primary-50 hover:border-primary-300 transition-all group shadow-sm">
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-primary-700">{item.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.sub}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}