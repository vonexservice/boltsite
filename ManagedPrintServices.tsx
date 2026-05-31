import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, Settings, Shield, TrendingDown, ArrowRight, 
  Phone, Mail, CheckCircle2, Calculator, Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- SUB-COMPONENT: SAVINGS CALCULATOR ---
const SavingsCalculator = () => {
  const [pageVolume, setPageVolume] = useState(5000);
  
  const unmanagedCost = pageVolume * 0.12;
  const vonexCost = pageVolume * 0.025;
  const yearlySavings = (unmanagedCost - vonexCost) * 12;

  return (
    <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl my-20 border border-blue-500/20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold mb-6">
            <Calculator className="h-4 w-4" /> COST SAVINGS ESTIMATOR
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">What is your "Hidden" <br /><span className="text-blue-400">Print Debt?</span></h3>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Desktop printers often cost 5x more to operate than professional managed systems. 
            Adjust the slider to see how much you could save with Vonex.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <div className="flex justify-between mb-4">
                <label className="font-bold text-lg text-slate-200">Monthly Print Volume</label>
                <span className="text-blue-400 font-black text-2xl">{pageVolume.toLocaleString()} <span className="text-sm font-normal text-slate-400">pgs</span></span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="50000" 
                step="500"
                value={pageVolume}
                onChange={(e) => setPageVolume(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] uppercase tracking-tighter text-slate-500 mt-3 font-bold">
                <span>Small Office (500)</span>
                <span>Medium Enterprise (25k)</span>
                <span>Heavy Volume (50k+)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-center shadow-inner relative overflow-hidden">
          <TrendingDown className="absolute -bottom-10 -right-10 h-64 w-64 text-white/5 rotate-12" />
          <p className="relative z-10 text-blue-100 uppercase tracking-widest text-sm font-bold mb-2">Estimated Annual Savings</p>
          <div className="relative z-10 text-6xl md:text-7xl font-black text-white mb-6">
            ${yearlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex justify-between py-3 px-4 bg-black/20 rounded-xl">
              <span className="text-blue-100">Monthly Savings</span>
              <span className="font-bold text-green-300">+${(yearlySavings / 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <p className="text-xs text-blue-200/70 italic mt-4">
              *Based on local Saskatchewan business averages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function ManagedPrintServices() {
  const services = [
    {
      icon: BarChart3,
      title: "Assessment & Optimization",
      description: "Analysis of your current print environment to identify immediate cost savings.",
      features: ["Volume analysis", "Cost-per-page audit", "Workflow assessment"]
    },
    {
      icon: Settings,
      title: "Fleet Management",
      description: "Complete management of all devices from a centralized local dashboard.",
      features: ["Remote monitoring", "Auto-supply ordering", "Usage tracking"]
    },
    {
      icon: Shield,
      title: "Proactive Maintenance",
      description: "Preventive support to minimize downtime and extend equipment life.",
      features: ["Scheduled tuning", "Predictive repairs", "Parts included"]
    },
    {
      icon: TrendingDown,
      title: "Cost Control",
      description: "Detailed reporting to eliminate unauthorized printing and wasteful spend.",
      features: ["Monthly reporting", "Budget tracking", "Usage analytics"]
    }
  ];

  const benefits = [
    { metric: "30-50%", description: "Avg. Cost Reduction" },
    { metric: "98%",    description: "Uptime Guarantee" },
    { metric: "Same Day", description: "Local Response" },
    { metric: "100%",   description: "Supplies Included" }
  ];

  const packages = [
    {
      name: "Essential",
      description: "Basic management for small offices",
      features: ["Device monitoring", "Supply management", "Basic reporting", "Standard support"]
    },
    {
      name: "Professional",
      description: "Our most popular managed fleet solution",
      features: ["Everything in Essential", "Advanced analytics", "Proactive maintenance", "Priority support", "Cost optimization"]
    },
    {
      name: "Enterprise",
      description: "Full-service for large organizations",
      features: ["Everything in Professional", "Dedicated manager", "Custom reporting", "SLA guarantees", "Strategic consulting"]
    }
  ];

  const handleGetStartedClick = () => {
    const emailBody = `Managed Print Services Inquiry\n\nI am interested in learning more about your services.\n\nCompany: \nContact Person: \nPhone: \nMonthly Volume: \n\nSubmitted from: vonex.ca/managed-print`;
    const mailtoLink = `mailto:sales@vonex.ca?subject=Managed Print Services Inquiry&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <>
      {/* ── SEO HEAD ─────────────────────────────────────────────────────── */}
      <Helmet>
        <title>Managed Print Services Saskatchewan | Kyocera & HP Leasing | Vonex</title>
        <meta name="description" content="Saskatchewan's managed print experts. Kyocera & HP equipment leasing from $89/month, automatic toner, same-day service, one monthly invoice. Free assessment — (306) 881-0341." />
        <link rel="canonical" href="https://vonex.ca/managed-print" />
        <link rel="alternate" hreflang="en-ca" href="https://vonex.ca/managed-print" />
        <link rel="alternate" hreflang="en" href="https://vonex.ca/managed-print" />
        <meta property="og:title" content="Managed Print Services Saskatchewan | Kyocera & HP Leasing | Vonex" />
        <meta property="og:description" content="Kyocera & HP equipment leasing from $89/month. Automatic toner, same-day service, one monthly invoice. Free assessment — (306) 881-0341." />
        <meta property="og:url" content="https://vonex.ca/managed-print" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vonex.ca/og-image.png" />
        <meta property="og:site_name" content="Vonex Business Solutions" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Managed Print Services Saskatchewan | Kyocera & HP Leasing | Vonex" />
        <meta name="twitter:description" content="Kyocera & HP equipment leasing from $89/month. Automatic toner, same-day service, one monthly invoice. Free assessment — (306) 881-0341." />
        <meta name="twitter:image" content="https://vonex.ca/og-image.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Managed Print Services",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://vonex.ca/#organization",
              "name": "Vonex Business Solutions",
              "telephone": "+1-306-881-0341",
              "url": "https://vonex.ca"
            },
            "description": "Fully managed print services including Kyocera and HP equipment leasing, automatic toner replenishment, same-day on-site service, and remote monitoring. One monthly cost covers everything.",
            "serviceType": "Managed Print Services",
            "areaServed": "Canada",
            "url": "https://vonex.ca/managed-print",
            "offers": [
              {
                "@type": "Offer",
                "name": "Essential MPS Plan",
                "description": "Device monitoring, supply management, basic reporting, standard support.",
                "priceCurrency": "CAD",
                "seller": { "@type": "Organization", "name": "Vonex Business Solutions" }
              },
              {
                "@type": "Offer",
                "name": "Professional MPS Plan",
                "description": "Advanced analytics, proactive maintenance, priority support, cost optimization.",
                "priceCurrency": "CAD",
                "seller": { "@type": "Organization", "name": "Vonex Business Solutions" }
              },
              {
                "@type": "Offer",
                "name": "Enterprise MPS Plan",
                "description": "Dedicated manager, custom reporting, SLA guarantees, strategic consulting.",
                "priceCurrency": "CAD",
                "seller": { "@type": "Organization", "name": "Vonex Business Solutions" }
              }
            ]
          }
        `}</script>
      </Helmet>

      {/* ── PAGE CONTENT ─────────────────────────────────────────────────── */}
      <section id="managed-print" className="py-20 bg-white">
        <div className="container-custom">
          
          {/* 1. HERO HEADER */}
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight">
              Stop Overpaying for <br />
              <span className="text-blue-600">Office Printing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Eliminate the unpredictability of printer costs. Our Managed Print Services (MPS) provide 
              one flat monthly rate that covers parts, toner, and local Saskatchewan-based service.
            </p>
          </div>

          {/* 2. SERVICES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center text-xs font-bold text-slate-500">
                      <CheckCircle2 className="h-3 w-3 text-blue-500 mr-2" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3. PROVEN RESULTS */}
          <div className="bg-blue-600 rounded-3xl p-10 mb-20 shadow-2xl shadow-blue-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="text-center border-r border-white/10 last:border-0">
                  <div className="text-4xl font-black text-white mb-1">{b.metric}</div>
                  <p className="text-blue-100 text-xs font-bold uppercase tracking-wider">{b.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. THE CALCULATOR */}
          <SavingsCalculator />

          {/* 5. SERVICE PACKAGES */}
          <div className="mb-20">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Flexible MPS Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`relative rounded-3xl p-10 flex flex-col ${index === 1 ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10' : 'bg-slate-50 border border-slate-200'}`}>
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                      Best Value
                    </div>
                  )}
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                    <p className={`text-sm ${index === 1 ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.description}</p>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm font-medium">
                        <CheckCircle2 className={`h-4 w-4 mr-3 ${index === 1 ? 'text-blue-400' : 'text-blue-600'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={handleGetStartedClick}
                    className={`w-full py-4 rounded-xl font-bold transition-all ${
                      index === 1 ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-500/20' : 'bg-white border border-slate-300 text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 6. HOW IT WORKS */}
          <div className="grid lg:grid-cols-2 gap-16 items-center py-20 border-t border-slate-100">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-10">Simple 4-Step Onboarding</h2>
              <div className="space-y-10">
                {[
                  { n: "1", t: "Assessment",  d: "We audit your current fleet to find every hidden cost." },
                  { n: "2", t: "Strategy",    d: "We replace inefficient printers with high-yield systems." },
                  { n: "3", t: "Automation",  d: "Monitoring software handles your toner orders and service alerts." },
                  { n: "4", t: "Savings",     d: "You receive one simple, predictable monthly invoice." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl">{step.n}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{step.t}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl"></div>
              <img 
                src="/Managed Print service -vonex saskatoon.png" 
                alt="Vonex Managed Print Dashboard"
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-slate-100"
              />
            </div>
          </div>

          {/* 7. RELATED SERVICES */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Explore Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/repairs" className="flex items-center justify-between gap-3 p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-blue-50 hover:border-blue-300 transition-all group">
                <div>
                  <p className="font-bold text-slate-900 group-hover:text-blue-700">Emergency Printer Repair</p>
                  <p className="text-sm text-slate-500 mt-0.5">Same day · certified technicians</p>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
              <Link to="/office-equipment" className="flex items-center justify-between gap-3 p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-blue-50 hover:border-blue-300 transition-all group">
                <div>
                  <p className="font-bold text-slate-900 group-hover:text-blue-700">Office Equipment Sales</p>
                  <p className="text-sm text-slate-500 mt-0.5">Kyocera & HP — new & refurbished</p>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
              <Link to="/lease-rental" className="flex items-center justify-between gap-3 p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-blue-50 hover:border-blue-300 transition-all group">
                <div>
                  <p className="font-bold text-slate-900 group-hover:text-blue-700">Lease & Rental Options</p>
                  <p className="text-sm text-slate-500 mt-0.5">36 & 60 month terms from $89/mo</p>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            </div>
          </div>

          {/* 8. FINAL CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-black mb-6 italic">Save up to 40% on your print costs today.</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleGetStartedClick} className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform flex items-center justify-center gap-3">
                <Mail className="h-5 w-5" /> Request Print Audit
              </button>
              <a href="tel:3068810341" className="bg-blue-900/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-2xl font-black hover:bg-blue-900/40 transition-all flex items-center justify-center gap-3">
                <Phone className="h-5 w-5" /> (306) 881-0341
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}