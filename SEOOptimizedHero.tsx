import React, { useState } from 'react';
import { 
  ArrowRight, Shield, Award, Clock, Phone, 
  Settings, Package, ShieldCheck, RefreshCw, CheckCircle2,
  Wrench, Printer, Users
} from 'lucide-react';
import FreeAssessmentForm from './FreeAssessmentForm';
import { InternalLink } from './InternalLinks';

export default function HomeContent() {
  const [isAssessmentFormOpen, setIsAssessmentFormOpen] = useState(false);

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-t-4 border-cyan-500">
        <div className="absolute inset-0 z-0">
          <img
            src="/Printer-Lease in- Saskatoon.jpg"
            alt="Professional printer service Saskatchewan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-800/40"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white py-24">
          <div className="inline-flex items-center px-6 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-bold mb-8 border border-cyan-400/30 tracking-wide">
            <Award className="h-4 w-4 mr-2" />
            SASKATCHEWAN'S #1 PRINT SOLUTIONS
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Managed Print & <br/>
            <span className="text-cyan-400">Office Equipment</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium">
            Expert printer repair, managed services, and authorized sales for businesses across Saskatchewan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsAssessmentFormOpen(true)} className="bg-cyan-500 hover:bg-cyan-400 text-blue-950 px-10 py-5 rounded-xl text-lg font-black transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center">
              FREE ASSESSMENT <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a href="tel:306-881-0341" className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-xl text-lg font-black transition-all flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" /> (306) 881-0341
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRAND PARTNERS */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="container-custom">
          <p className="text-center text-sm md:text-base font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Authorized Sales & Support</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
            <div className="flex flex-col items-center justify-center group w-full h-16">
              <img src="/Kyocera-logo.png" alt="Kyocera logo" className="max-h-full w-auto grayscale group-hover:grayscale-0 transition-all object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center group w-full h-16">
              <img src="/640px-HP_logo_2012.svg.png" alt="HP logo" className="max-h-full w-auto grayscale group-hover:grayscale-0 transition-all object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center group w-full h-20">
              <img src="/Lexmark-Logo.wine.png" alt="Lexmark logo" className="max-h-full w-auto grayscale group-hover:grayscale-0 transition-all object-contain scale-125" />
            </div>
            <div className="flex flex-col items-center justify-center group w-full h-16">
              <img src="/Xerox-logo.jpg" alt="Xerox logo" className="max-h-full w-auto grayscale group-hover:grayscale-0 transition-all object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center group w-full h-16">
              <img src="/Brother-logo.png" alt="Brother logo" className="max-h-full w-auto grayscale group-hover:grayscale-0 transition-all object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center group w-full h-16">
              <img src="/Zebra-logo-2015-logotype.webp" alt="Zebra logo" className="max-h-full w-auto grayscale group-hover:grayscale-0 transition-all object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE VONEX PROMISE */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">The Vonex Promise</h2>
            <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 - Loaner Unit */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col hover:scale-[1.02] transition-transform">
              <div className="p-4 bg-cyan-100 text-cyan-600 rounded-2xl w-fit mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Loaner When You Need It Most</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                If your equipment goes down and can't be fixed fast, we'll bring you a loaner unit so your business never skips a beat. We keep you printing, no matter what.
              </p>
              <div className="mt-6 text-cyan-600 font-black text-xs uppercase tracking-widest">Vonex Promise</div>
            </div>

            {/* Card 2 - 4-Hour Response */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col hover:scale-[1.02] transition-transform">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl w-fit mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">4-Hour Response Time</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                With 6 service teams and a dedicated network of technicians throughout Saskatchewan, we achieve an under 4-hour response time 98% of the time.
              </p>
              <div className="mt-6 text-blue-600 font-black text-xs uppercase tracking-widest">Vonex Promise</div>
            </div>

            {/* Card 3 - 100% Replacement */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col hover:scale-[1.02] transition-transform">
              <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl w-fit mb-6">
                <RefreshCw className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">100% Replacement Guarantee</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                If your device cannot be kept in satisfactory condition, we replace it with a like-or-better model. Honoured for up to 8 years on new devices.
              </p>
              <div className="mt-6 text-indigo-600 font-black text-xs uppercase tracking-widest">Vonex Promise</div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: COMPLETE SOLUTIONS - Equal cards, no image */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Complete Print Solutions</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Vonex provides the technical expertise Saskatchewan businesses rely on to stay productive.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 - Authorized Sales */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 flex flex-col hover:scale-[1.02] transition-transform">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl w-fit mb-6">
                <Printer className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Authorized Sales</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                Authorized dealer for Kyocera, HP, Lexmark, and more. We match your business with the right hardware and handle professional setup and training.
              </p>
              <div className="mt-6 text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> Kyocera & HP Authorized
              </div>
            </div>

            {/* Card 2 - Expert Repair */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 flex flex-col hover:scale-[1.02] transition-transform">
              <div className="p-4 bg-cyan-100 text-cyan-600 rounded-2xl w-fit mb-6">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Expert Onsite Repair</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                Certified technicians dispatched across Saskatchewan for all major brands. From emergency callouts to scheduled maintenance, we come to you.
              </p>
              <div className="mt-6 text-cyan-600 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> All Major Brands Covered
              </div>
            </div>

            {/* Card 3 - Managed Print */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 flex flex-col hover:scale-[1.02] transition-transform">
              <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl w-fit mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Managed Print Services</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                Automate your supplies, monitor usage, and reduce your total cost of printing by up to 30%. Let us handle the details so you can focus on your business.
              </p>
              <div className="mt-6 text-indigo-600 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> Up to 30% Cost Reduction
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICES GRID */}
      <section className="py-20 bg-slate-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
            {[
              { title: "Onsite Repair", desc: "Fast, certified technicians for all major brands across Saskatchewan.", icon: Phone, link: "/repairs", label: "Book Repair" },
              { title: "Managed Print", desc: "Automate supplies and reduce your total cost of printing by up to 30%.", icon: Settings, link: "/managed-print", label: "Learn More" },
              { title: "Equipment Sales", desc: "New Kyocera & HP hardware with professional setup and training.", icon: Package, link: "/office-equipment", label: "Browse Models" },
              { title: "Service Plans", desc: "Customizable maintenance contracts for peace of mind and priority support.", icon: Shield, link: "/services", label: "View Plans" },
              { title: "Lease & Rental", desc: "Short-term rentals for events or long-term leasing for your HQ.", icon: Clock, link: "/lease-rental", label: "Get Quote" }
            ].map((service, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500 group flex flex-col h-full transition-all duration-300">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 w-fit mb-5">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 min-h-[56px]">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <div className="pt-4 border-t border-slate-700/50 mt-auto">
                  <InternalLink to={service.link} className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-cyan-400">
                    {service.label} <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </InternalLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeAssessmentForm isOpen={isAssessmentFormOpen} onClose={() => setIsAssessmentFormOpen(false)} />
    </>
  );
}