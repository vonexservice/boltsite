import React from 'react';
import { 
  ShieldCheck, Zap, MousePointerClick, CheckCircle2, 
  ArrowRight, Phone, Award, ShieldAlert 
} from 'lucide-react';
import { InternalLink } from '../components/InternalLinks';

const hpFeatures = [
  {
    title: 'HP Wolf Security',
    desc: 'We configure HP’s industry-leading security to protect your Saskatchewan business from endpoint threats.',
    icon: ShieldCheck
  },
  {
    title: 'Precision HP Repair',
    desc: 'Certified technicians for LaserJet Enterprise and PageWide series with genuine HP replacement parts.',
    icon: Zap
  },
  {
    title: 'Managed HP Supplies',
    desc: 'Automated toner delivery for your HP fleet so you never run out during a critical project.',
    icon: MousePointerClick
  }
];

export default function HPBrandPage() {
  return (
    <div className="bg-white">
      {/* 1. BRAND HERO SECTION */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/hp-office-bg.jpg" 
            alt="HP Office Printers" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-blue-400 font-bold text-sm mb-6 uppercase tracking-widest">
            <Award className="h-4 w-4" /> Authorized HP Service Partner
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            HP LaserJet & Enterprise <br /> Solutions in Saskatchewan
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Expert HP printer repair, sales, and managed services for Saskatoon 
            and Regina businesses. Backed by our 4-hour on-site guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <InternalLink 
              to="/contact?source=hp-quote"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/40"
            >
              Request HP Quote
            </InternalLink>
            <a 
              href="tel:306-881-0341" 
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all"
            >
              Call for HP Repair
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE VONEX FOR HP (Competitive Edge) */}
      <section className="py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Saskatoon’s Fastest <br /> HP Service Department
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                While competitors like Atlas Office Solutions offer standard service, 
                Vonex provides a <strong>Guaranteed 4-Hour Response Time</strong>. 
                We understand that when your HP LaserJet goes down, your office stops.
              </p>
              <ul className="space-y-4">
                {[
                  'Certified HP Technicians',
                  'Genuine HP OEM Parts Only',
                  'Local Parts Inventory in Saskatoon',
                  'Support for LaserJet, PageWide, & DesignJet'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-600 h-5 w-5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {hpFeatures.map((f, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex gap-5">
                  <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                    <f.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE VONEX PROMISE (Reusable Guarantee Strip) */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Total HP Protection</h2>
            <p className="text-slate-600">The best guarantees in the Saskatchewan print market.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
             <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-blue-900">90-Day Test Drive</h4>
                <p className="text-sm text-slate-600">Not happy with your new HP? Swap it within 90 days, no questions asked.</p>
             </div>
             <div className="p-6 border-x border-blue-100">
                <h4 className="font-bold text-xl mb-2 text-blue-900">4-Hour Response</h4>
                <p className="text-sm text-slate-600">98% of our HP service calls are handled within 4 business hours.</p>
             </div>
             <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-blue-900">100% Replacement</h4>
                <p className="text-sm text-slate-600">If we can’t fix your HP, we replace it with an equal or better model.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <ShieldAlert className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Struggling with an Aging HP Fleet?
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Get a free "Switch & Save" audit. We’ll show you how much you can save 
            by upgrading to a modern Vonex Managed HP plan.
          </p>
          <InternalLink 
            to="/contact?source=hp-audit"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl"
          >
            Get Free HP Audit <ArrowRight className="h-5 w-5" />
          </InternalLink>
        </div>
      </section>
    </div>
  );
}