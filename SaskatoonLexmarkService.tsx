import React from 'react';
import {
  ShieldCheck, BadgeCheck, PenTool, BarChart3,
  Lock, CheckCircle2, ArrowRight, Phone, Award
} from 'lucide-react';
import { InternalLink } from '../components/InternalLinks';

const LEXMARK_MODELS = [
  {
    category: "Lexmark BSD Series (Business Solutions)",
    models: [
      "XC4140, XC4150 series",
      "XM3150, XM5365, XM7355 series",
      "XC9235, XC9245, XC9255 Large Format",
    ],
    features: [
      "Engineered for 200k+ monthly duty cycles",
      "Exclusive BSD high-yield toner capacity",
    ],
  },
  {
    category: "Lexmark CS/CX Color Series",
    models: [
      "CX522, CX622, CX625 series",
      "CS725, CS820, CS921 series",
    ],
    features: [
      "Pantone® color calibration",
      "Next-gen e-Task touch interface",
    ],
  },
];

const SECURITY_ITEMS = [
  "Encrypted Hard Disks with Wiping",
  "Trusted Platform Module (TPM) hardware",
  "Certificate-based Authentication",
  "Confidential Print Release",
];

export default function SaskatoonLexmarkService() {
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
                Authorized Lexmark Dealer &amp; Service Center – Saskatchewan
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Lexmark Business <br />
                <span className="text-primary-600">Solutions & Service</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                From the Saskatchewan Health Authority to local law firms, we provide
                heavy-duty Lexmark hardware and{' '}
                <strong className="text-primary-700">local onsite service</strong>{' '}
                for high-security environments across Saskatoon and SK.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <InternalLink to="/contact?source=lexmark-lease" className="btn-primary group inline-flex !text-white">
                  <span>Request Lexmark Pricing</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </InternalLink>
                <InternalLink to="/contact?source=lexmark-repair" className="btn-secondary inline-flex !text-primary-600 hover:!text-white">
                  Schedule Lexmark Service
                </InternalLink>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-primary-600">Authorized</div>
                  <div className="text-sm text-gray-600">Lexmark Dealer</div>
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
                    <span className="font-bold text-gray-900 text-lg">Why Vonex for Lexmark?</span>
                  </div>
                  {[
                    "Factory-certified Lexmark technicians on staff",
                    "Genuine Lexmark parts stocked locally in Saskatoon",
                    "Warranty repairs performed on-site",
                    "BSD model access — lower CPP than retail",
                    "SK government compliance expertise",
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


      {/* ── CORE CAPABILITIES ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end Lexmark support — from procurement to ongoing service — delivered locally.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BarChart3 className="text-primary-600 h-6 w-6 flex-shrink-0" /> Procurement &amp; Leasing
              </h3>
              <h4 className="font-bold text-lg text-primary-700 mb-2">Exclusive BSD Model Access</h4>
              <p className="text-gray-600 mb-6">
                Access Lexmark's "Business Solutions Dealer" line — sturdier builds and lower
                cost-per-page than retail models found elsewhere.
              </p>
              <h4 className="font-bold text-lg text-primary-700 mb-2">Saskatchewan Government Compliance</h4>
              <p className="text-gray-600">
                Leasing and service contracts tailored to meet the strict security and uptime
                requirements of SK public sectors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <PenTool className="text-primary-600 h-6 w-6 flex-shrink-0" /> Onsite Technical Support
              </h3>
              <h4 className="font-bold text-lg text-primary-700 mb-2">Emergency Response Saskatoon</h4>
              <p className="text-gray-600 mb-6">
                Our technicians carry common Lexmark fusers, rollers, and maintenance kits
                to ensure first-visit resolution for your fleet.
              </p>
              <h4 className="font-bold text-lg text-primary-700 mb-2">Authorized Warranty Service</h4>
              <p className="text-gray-600">
                As an authorized dealer, Vonex performs Lexmark warranty repairs using
                only genuine parts, protecting your investment.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── HARDWARE LINEUP ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lexmark Hardware for Saskatchewan Workgroups
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in the high-performance XC and XM series, designed for heavy
              workloads and secure data handling.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {LEXMARK_MODELS.map((group, idx) => (
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


      {/* ── SECURITY — dark contrast section ── */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-3">
                <Lock className="text-primary-400 h-8 w-8 flex-shrink-0" /> Full-Spectrum Security
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Lexmark is a global leader in print security. Vonex ensures every device
                deployed in your office is hardened against modern threats.
              </p>
              <div className="space-y-3">
                {SECURITY_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <ShieldCheck className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600/20 p-10 rounded-3xl border border-primary-500/30">
              <h3 className="text-2xl font-bold mb-6 text-white">Why Local Matters</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                When a Lexmark printer goes down in a busy Saskatoon medical clinic or
                accounting firm, waiting 3 days for an out-of-province technician isn't an option.{' '}
                <strong className="text-white">
                  Vonex provides local parts, local dispatch, and local accountability.
                </strong>
              </p>
              <div className="grid grid-cols-2 gap-4">
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
              Local Lexmark Experts – Saskatoon &amp; All of SK
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Experience Better Lexmark Support
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              From single unit sales to full managed print fleets across Saskatchewan,
              we are your local Lexmark experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <InternalLink to="/contact" className="btn-primary group inline-flex !text-white">
                <span>Request a Free Lexmark Assessment</span>
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