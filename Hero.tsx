import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, MapPin, CheckCircle, Award } from 'lucide-react';
import FreeAssessmentForm from './FreeAssessmentForm';

export default function Hero() {
  const [isAssessmentFormOpen, setIsAssessmentFormOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/c300i-panel copy copy.jpg"
            alt="Office printer background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-teal-50/90"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div className="animate-slide-up">
              {/* Trust badge – now substantiated */}
              <div className="inline-flex items-center px-6 py-3 bg-primary-100 rounded-full text-primary-800 text-sm font-semibold mb-8 shadow-sm">
                <Award className="h-4 w-4 mr-2" />
                Trusted by 500+ Saskatchewan Businesses
              </div>

              {/* NEW HEADLINE */}
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Stop Overpaying <br />
                <span className="text-primary-600">For Printing</span>
              </h1>

              {/* NEW SUBHEADLINE */}
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                Saskatchewan businesses save up to <strong className="text-primary-700">30% on printing costs</strong> with 
                Vonex managed print services. Same-day repairs, free local delivery, 
                and a team that actually picks up the phone.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button 
                  onClick={() => setIsAssessmentFormOpen(true)}
                  className="btn-primary group"
                  type="button"
                >
                  <span>Get Free Assessment</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="tel:306-881-0341" className="btn-secondary">
                  Call (306) 881-0341
                </a>
              </div>

              {/* NEW STATS ROW (replaces the 4 individual badges) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">Businesses Served</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-primary-600">20+</div>
                  <div className="text-sm text-gray-600">Years in SK</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-green-600">Same‑Day</div>
                  <div className="text-sm text-gray-600">Repair Service</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-orange-500">30%</div>
                  <div className="text-sm text-gray-600">Avg. Cost Saved</div>
                </div>
              </div>
            </div>

            {/* Right column – image with floating stats (keep as is or upgrade) */}
            <div className="lg:pl-12 animate-fade-in">
              <div className="relative">
                <img
                  src="/c300i-panel copy.jpg"
                  alt="Modern office printer touchscreen panel"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="eager"
                />
                {/* Upgrade floating card to 3 stats (optional but nice) */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl border w-[calc(100%-3rem)] sm:w-auto">
                  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                    <div className="text-center min-w-[70px]">
                      <div className="text-2xl font-bold text-primary-600">500+</div>
                      <div className="text-xs text-gray-600">Clients</div>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                    <div className="text-center min-w-[70px]">
                      <div className="text-2xl font-bold text-green-600">30%</div>
                      <div className="text-xs text-gray-600">Savings</div>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
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

      <FreeAssessmentForm 
        isOpen={isAssessmentFormOpen} 
        onClose={() => setIsAssessmentFormOpen(false)} 
      />
    </>
  );
}