import React from 'react';
import {
  ShieldCheck, Zap, Truck, BadgeCheck,
  PenTool, BarChart3, Lock, CheckCircle2, ArrowRight, Phone, Award
} from 'lucide-react';
import { InternalLink } from '../components/InternalLinks';

const HP_MODELS = [
  {
    category: "HP LaserJet Enterprise",
    models: [
      "M507, M610, M611, M612 series",
      "MFP M635, M636 series",
      "Color LaserJet M555, M751, M776",
    ],
    features: [
      "High-volume departmental use",
      "JetIntelligence toner system",
    ],
  },
  {
    category: "HP PageWide Enterprise",
    models: [
      "PageWide Color 765, 780",
      "PageWide Pro MFP 772, 777",
    ],
    features: [
      "Up to 75 ppm color/mono",
      "Lower energy use vs. laser",
    ],
  },
];

const SECURITY_ITEMS = [
  "HP Sure Start self-healing BIOS",
  "Run-time intrusion detection",
  "Encrypted hard drives",
  "Secure pull-print release",
];

const SUPPORT_ITEMS = [
  "Same-day response in major centres",
  "Onsite preventive maintenance",
  "Toner auto-shipment",
  "Single invoice for fleet + service",
];

export default function SaskatoonHpService() {
  return (
    <div className="bg-white">

      {/* ── HERO ── matches Hero.tsx exactly */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-teal-50/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-6 py-3 bg-primary-100 rounded-full text-primary-800 text-sm font-semibold mb-8 shadow-sm">
                <Award className="h-4 w-4 mr-2" />
                Authorized HP Dealer &amp; Service Center – Saskatchewan
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                HP LaserJet Enterprise <br />
                <span className="text-primary-600">Dealer & Service</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                We provide Saskatchewan businesses with the world's most reliable printers
                and the <strong className="text-primary-700">local support</strong> to keep them running.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <InternalLink to="/contact?source=hp-lease" className="btn-primary group inline-flex !text-white">
                  <span>Get an HP Lease Quote</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </InternalLink>
                <InternalLink to="/contact?source=hp-repair" className="btn-secondary inline-flex !text-primary-600 hover:!text-white">
                  Schedule HP Repair
                </InternalLink>
              </div>

              {/* Stats row — exact Hero.tsx pattern */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-primary-600">Authorized</div>
                  <div className="text-sm text-gray-600">HP Dealer</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-primary-600">Same‑Day</div>
                  <div className="text-sm text-gray-600">Repair Service</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-green-600">30%</div>
                  <div className="text-sm text-gray-600">Avg. Cost Saved</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-orange-500">Local</div>
                  <div className="text-sm text-gray-600">SK Parts &amp; Dispatch</div>
                </div>
              </div>
            </div>

            {/* Right — feature card + floating stat */}
            <div className="lg:pl-12 animate-fade-in">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <BadgeCheck className="h-8 w-8 text-primary-600" />
                    <span className="font-bold text-gray-900 text-lg">Why Vonex for HP?</span>
                  </div>
                  {[
                    "Factory-certified HP technicians on staff",
                    "Genuine HP parts & toner stocked locally",
                    "Zero-down HP LaserJet Enterprise leases",
                    "Managed Print Services with auto toner replenishment",
                    "Onsite warranty repairs across Saskatchewan",
                    "Free local delivery in Saskatoon",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Floating stat card — exact Hero.tsx style */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl border w-[calc(100%-3rem)] sm:w-auto">
                  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                    <div className="text-center min-w-[70px]">
                      <div className="text-2xl font-bold text-primary-600">500+</div>
                      <div className="text-xs text-gray-600">SK Clients</div>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-gray-200" />
                    <div className="text-center min-w-[70px]">
                      <div className="text-2xl font-bold text-green-600">20+</div>
                      <div className="text-xs text-gray-600">Years in SK</div>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-gray-200" />
                    <div className="text-center min-w-[70px]">
                      <div className="text-2xl font-bold text-orange-500">Same‑Day</div>
                      <div className="text-xs text-gray-600">Repair</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── CORE SERVICES ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end HP support — from leasing to ongoing service — delivered locally across Saskatchewan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BarChart3 className="text-primary-600 h-6 w-6 flex-shrink-0" /> Sales &amp; Leasing
              </h3>
              <h4 className="font-bold text-lg text-primary-700 mb-2">Zero-Down HP LaserJet Enterprise Leases</h4>
              <p className="text-gray-600 mb-6">
                Lease the latest HP LaserJet Enterprise models with zero down and predictable
                monthly payments tailored to your print volume.
              </p>
              <h4 className="font-bold text-lg text-primary-700 mb-2">Managed Print Services (MPS)</h4>
              <p className="text-gray-600">
                Automate toner replenishment, preventive maintenance, and usage reporting
                so your team never runs out or chases service tickets.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <PenTool className="text-primary-600 h-6 w-6 flex-shrink-0" /> Service &amp; Supplies
              </h3>
              <h4 className="font-bold text-lg text-primary-700 mb-2">Factory-Certified Onsite Repair</h4>
              <p className="text-gray-600 mb-6">
                Vonex technicians are certified to service every HP LaserJet and PageWide model —
                onsite, across Saskatchewan, with genuine HP parts.
              </p>
              <h4 className="font-bold text-lg text-primary-700 mb-2">Genuine HP Parts &amp; Toner In Stock</h4>
              <p className="text-gray-600">
                Order genuine HP toner, drums, and supplies from{' '}
                <strong>shop.vonex.ca</strong> with fast delivery throughout Saskatchewan.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── HP LINEUP ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The HP Lineup We Sell &amp; Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From compact workgroup LaserJets to high-volume PageWide MFPs, we deploy the right
              HP fleet for your office and stand behind it with local service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {HP_MODELS.map((group, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border-t-4 border-primary-600 card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{group.category}</h3>
                <div className="space-y-3 mb-6">
                  {group.models.map((m) => (
                    <div key={m} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" /> {m}
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 border-t border-gray-200 pt-4">
                  {group.features.map((f) => (
                    <li key={f} className="text-gray-500 text-sm italic">• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECURITY & LOCAL SUPPORT — dark contrast section ── */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-3">
                <Lock className="text-primary-400 h-8 w-8 flex-shrink-0" /> Security &amp; Workflow
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SECURITY_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <ShieldCheck className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-600/20 p-10 rounded-3xl border border-primary-500/30">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <Truck className="text-primary-400 h-7 w-7 flex-shrink-0" /> Local Vonex Support
              </h3>
              <ul className="space-y-4">
                {SUPPORT_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary-300">500+</div>
                  <div className="text-sm text-gray-400">SK Businesses Served</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">20+</div>
                  <div className="text-sm text-gray-400">Years in Saskatchewan</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── FINAL CTA ── */}
      <section className="relative section-padding text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-teal-50/90" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 rounded-full text-primary-800 text-sm font-semibold mb-8 shadow-sm">
              <BadgeCheck className="h-4 w-4 mr-2" />
              Local HP Experts – Saskatoon &amp; All of SK
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Lease, Buy, or Service Your HP Fleet?
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Talk to a local Vonex specialist about HP LaserJet Enterprise leases,
              Managed Print Services, or onsite repair in Saskatchewan.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <InternalLink to="/contact" className="btn-primary group inline-flex !text-white">
                <span>Connect With a Local Specialist</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </InternalLink>
              <a href="tel:3068810341" className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-primary-600 transition-colors duration-200">
                <Phone className="h-5 w-5" />
                (306) 881-0341
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}