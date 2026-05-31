import React from 'react';
import { 
  Monitor, Shield, Cloud, Headphones, Server, TrendingUp, 
  CheckCircle, Clock, DollarSign, Users, ArrowRight, 
  Award, Phone, ShieldAlert, ShieldCheck, MapPin, Zap 
} from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: "Cybersecurity First",
    description: "Protection built for the Saskatchewan threat landscape. We don't just 'install software'; we proactively hunt threats.",
    features: ["Advanced AI Detection", "Local Ransomware Protection", "Dark Web Monitoring", "Employee Security Training"],
    benefits: "Zero Successful Breaches"
  },
  {
    icon: Headphones,
    title: "High-Velocity Help Desk",
    description: "Your team shouldn't wait hours for a ticket. We provide instant, local support the moment technology fails.",
    features: ["15-Minute Response Standard", "Saskatoon & Regina On-Site", "Expert Local Technicians", "Proactive Issue Solving"],
    benefits: "Avg 12min Response Time"
  },
  {
    icon: Cloud,
    title: "Cloud & Disaster Recovery",
    description: "Keep your data in Canada. We ensure your business can recover from fire, flood, or hack in minutes.",
    features: ["Cloud Backup & DR", "Microsoft 365 Management", "Secure Data Migration", "Business Continuity Planning"],
    benefits: "100% Data Recovery Rate"
  }
];

const stats = [
  { number: "15min", label: "Average Response", sublabel: "Rapid support standard" },
  { number: "99.9%", label: "System Uptime", sublabel: "Across all SK clients" },
  { number: "500+", label: "Businesses Served", sublabel: "Saskatoon to Regina" },
  { number: "0", label: "Security Breaches", sublabel: "For managed partners" }
];

export default function ITManagedServices() {
  const handleLeadMagnetClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:sales@vonex.ca?subject=Requesting Free IT Risk Audit&body=Please contact me to schedule my free 15-minute security and performance audit.";
  };

  return (
    <section id="it-managed-services" className="bg-white">
      {/* ALERT BANNER REMOVED */}

      <div className="container-custom pt-16 pb-24">
        {/* 2. REFACTORED HERO */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-bold mb-8 shadow-sm">
            <Zap className="h-4 w-4 mr-2 text-yellow-500" />
            Industry Leading 15-Minute Response Time
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Stop Fighting Your IT. <br/>
            <span className="text-blue-600">Start Growing Your Business.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Most Saskatchewan business owners lose 50+ hours a year to IT glitches. 
            Vonex manages your tech so you can focus on your customers. **Rapid. Secure. Local.**
          </p>

          {/* THE HIGH-CONVERSION OFFER CARD */}
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl max-w-4xl mx-auto border-2 border-blue-100 flex flex-col md:flex-row items-center gap-8 text-left mb-16">
            <div className="bg-blue-50 p-6 rounded-2xl shrink-0">
              <ShieldCheck className="h-12 w-12 text-blue-600" />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Free 15-Minute IT Risk Audit</h3>
              <p className="text-slate-600 font-medium italic">We'll identify your security gaps and performance bottlenecks. No cost. No sales pressure.</p>
            </div>
            <button 
              onClick={handleLeadMagnetClick}
              className="w-full md:w-auto bg-blue-600 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              Get My Audit <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 3. PROVEN RESULTS BAR */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 bg-slate-900 rounded-[3rem] p-12 text-white shadow-xl">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">{stat.number}</div>
              <div className="text-lg font-bold">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* 4. CORE SERVICES */}
        <div className="mb-32">
          <h2 className="text-4xl font-black text-slate-900 text-center mb-16">Enterprise-Grade Support, Locally Delivered</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-3xl p-10 hover:border-blue-300 transition-all group flex flex-col h-full">
                <div className="p-4 bg-white rounded-2xl w-fit shadow-md mb-8 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 font-medium leading-relaxed">{service.description}</p>
                <ul className="space-y-4 flex-grow">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 font-bold text-slate-700">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 5. THE "MOAT" - LOCAL SPEED */}
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-blue-600 rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">National Support is Slow. <br/>We're Around the Corner.</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              When your network crashes in the middle of a workday, you don't want a technician in a different time zone. 
              We offer **priority on-site response** for all Saskatchewan clients, ensuring your business stays online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:3068810341" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
                <Phone className="h-5 w-5" /> (306) 881-0341
              </a>
              <button onClick={handleLeadMagnetClick} className="bg-blue-800/50 border border-blue-400 text-white px-8 py-4 rounded-xl font-black hover:bg-blue-800 transition-colors">
                Claim Free Audit
              </button>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-blue-400/20 blur-3xl rounded-full"></div>
             <img 
               src="/AdobeStock_1509469215.jpeg" 
               alt="Local IT Support Saskatoon" 
               className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>

        {/* 6. FINAL CTA SECTION */}
        <div className="text-center mt-32 py-20 border-t border-slate-100">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Ready for IT that actually works?</h2>
          <p className="text-xl text-slate-500 mb-10">Join 500+ Saskatchewan businesses who trust Vonex.</p>
          <button 
            onClick={handleLeadMagnetClick}
            className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl hover:-translate-y-1"
          >
            Start My Free IT Audit Now
          </button>
        </div>
      </div>
    </section>
  );
}