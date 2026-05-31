import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Vonex</title>
        <meta name="description" content="The page you're looking for cannot be found. Return to Vonex homepage for print services in Saskatchewan." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://vonex.ca/404" />
      </Helmet>

      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl font-black text-gray-300 mb-4">404</h1>
            <h2 className="heading-secondary mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/"
                className="btn-primary"
              >
                <Home className="h-5 w-5 mr-2" />
                Back to Homepage
              </Link>
              <Link
                to="/services"
                className="btn-secondary"
              >
                <Search className="h-5 w-5 mr-2" />
                View Services
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <Link to="/repairs" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  <ArrowLeft className="inline h-4 w-4 mr-2" />
                  Emergency Printer Repair
                </Link>
                <Link to="/managed-print" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  <ArrowLeft className="inline h-4 w-4 mr-2" />
                  Managed Print Services
                </Link>
                <Link to="/office-equipment" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  <ArrowLeft className="inline h-4 w-4 mr-2" />
                  Office Equipment
                </Link>
                <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  <ArrowLeft className="inline h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
