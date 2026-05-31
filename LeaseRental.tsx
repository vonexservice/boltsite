import React from 'react';
import { 
  Calendar, Shield, CheckCircle, Calculator, 
  ArrowRight, Phone, Printer, Activity, 
  Zap, Clock, Layers, Gauge 
} from 'lucide-react';

const leaseOptions = [
  {
    title: "Short-Term Rental",
    duration: "1 Day - 12 Months",
    borderClass: "hover:border-cyan-500",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    description: "Perfect for high-stakes events, elections, sports, and construction trailers.",
    features: [
      "No long-term commitment",
      "All-inclusive daily/weekly rates",
      "Immediate setup & delivery",
      "B&W and Professional Color"
    ]
  },
  {
    title: "Long-Term Lease",
    duration: "24 - 60 Months",
    borderClass: "hover:border-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    description: "Predictable monthly costs to keep your business cash flow steady.",
    features: [
      "Lowest monthly payments",
      "100% Tax Deductible (OpEx)",
      "Full maintenance & repair",
      "Regular technology refreshes"
    ]
  },
  {
    title: "Lease-to-Own",
    duration: "Flexible Buyouts",
    borderClass: "hover:border-indigo-500",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description: "Build equity in your equipment and own it at the end of your term.",
    features: [
      "Ownership at term end",
      "$10 or 5% Market Value Buyout",
      "Stable fixed costs",
      "Service & parts included"
    ]
  }
];

export default function LeaseRental() {
  const handleContactClick = (subject: string) => {
    window.location.href = `mailto:sales@vonex.ca?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-16 bg-slate-50">
        <div className="container-custom mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Saskatchewan's Equipment Experts
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Print Technology <br/>
            <span className="text-blue-600">On Your Terms</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From small desktop units to high-volume production machines. We offer 
            <span className="text-slate-900 font-bold"> all-inclusive</span> rentals and leasing 
            that take the stress out of office technology.
          </p>
        </div>
      </section>

      {/* --- RENTAL & LEASE CARDS --- */}
      <section className="py-20">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {leaseOptions.map((option, index) => (
              <div key={index} className={`group bg-white border-2 border-slate-100 ${option.borderClass} rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}>
                <div className={`h-16 w-16 ${option.iconBg} ${option.iconColor} rounded-2xl flex items-center justify-center mb-8`}>
                  <Printer className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{option.title}</h3>
                <p className="text-blue-600 font-bold mb-6 text-sm uppercase tracking-wider">{option.duration}</p>
                <p className="text-slate-600 mb-8 leading-relaxed">{option.description}</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-700 font-semibold text-sm">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleContactClick(`${option.title} Inquiry`)}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  Get Quote <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE ALL-INCLUSIVE SMART SERVICE (THE REASON THEY BUY) --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
                The <span className="text-cyan-400">All-Inclusive</span> <br/> Vonex Wrap
              </h2>
              <p className="text-lg text-slate-400 mb-12">
                We don't just lease machines; we manage your entire print environment so you never have to think about it again.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Activity className="h-7 w-7 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Smart Monitoring Software</h4>
                    <p className="text-slate-400">Our software monitors your machine's health in real-time. We see issues and fix them before your staff even notices.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Zap className="h-7 w-7 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Auto-Toner Fulfillment</h4>
                    <p className="text-slate-400">**Never run out of toner again.** When your machine hits 10%, we automatically ship a replacement cartridge to your door.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Shield className="h-7 w-7 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Zero Extra Costs</h4>
                    <p className="text-slate-400">All parts, labor, drums, and consumables are included. The only thing you buy is the paper.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800 border border-slate-700 p-10 rounded-[3rem] relative z-10">
                <h4 className="text-2xl font-black mb-6 text-white flex items-center gap-3">
                  <Gauge className="text-cyan-400" /> Live Status: Active
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 flex justify-between items-center">
                    <span className="text-slate-300">Toner Level (Black)</span>
                    <span className="font-black text-cyan-400">88%</span>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 flex justify-between items-center">
                    <span className="text-slate-300">Toner Level (Color)</span>
                    <span className="font-black text-magenta-400">92%</span>
                  </div>
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20 flex justify-between items-center">
                    <span className="text-green-400 font-bold">System Health</span>
                    <span className="px-2 py-1 bg-green-500 text-white text-[10px] rounded uppercase font-black tracking-widest">Optimal</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <p className="text-xs text-slate-500 uppercase font-black tracking-widest mb-2">Service Guarantee</p>
                  <p className="text-slate-300 font-medium italic">"4-Hour Local Onsite Response in Saskatoon & Regina"</p>
                </div>
              </div>
              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20">
        <div className="container-custom mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black mb-6">Need a Rental Fast?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Whether it's an election, a sports event, or a new office opening, we’ll have you printing by tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={() => handleContactClick('Urgent Rental Request')}
                  className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl"
                >
                  Book Your Equipment
                </button>
                <a href="tel:306-881-0341" className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-lg border-2 border-white/30 hover:bg-white/10 transition-all">
                  <Phone className="h-6 w-6" /> (306) 881-0341
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}