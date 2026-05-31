import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Printer, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Service Needed: ${formData.service}
Message: ${formData.message}

Submitted from: vonex.ca/contact
      `;

      const mailtoLink = `mailto:info@vonex.ca?subject=Contact Form - ${formData.company || formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink, '_blank');

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <>
      {/* ── SEO HEAD ─────────────────────────────────────────────────────── */}
      <Helmet>
        <title>Contact Vonex Business Solutions | Free Print Assessment | Saskatchewan</title>
        <meta name="description" content="Contact Vonex for a free print assessment. Managed print services, equipment leasing, and printer repair across Saskatchewan. Call (306) 881-0341 or email info@vonex.ca." />
        <link rel="canonical" href="https://vonex.ca/contact" />
        <link rel="alternate" hreflang="en-ca" href="https://vonex.ca/contact" />
        <link rel="alternate" hreflang="en" href="https://vonex.ca/contact" />
        <meta property="og:title" content="Contact Vonex Business Solutions | Free Print Assessment | Saskatchewan" />
        <meta property="og:description" content="Get a free print assessment from Saskatchewan's managed print experts. Call (306) 881-0341 or fill in our contact form — we respond within 2 hours." />
        <meta property="og:url" content="https://vonex.ca/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vonex.ca/og-image.png" />
        <meta property="og:site_name" content="Vonex Business Solutions" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Vonex Business Solutions | Free Print Assessment | Saskatchewan" />
        <meta name="twitter:description" content="Get a free print assessment from Saskatchewan's managed print experts. Call (306) 881-0341 or fill in our contact form." />
        <meta name="twitter:image" content="https://vonex.ca/og-image.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://vonex.ca/contact",
            "name": "Contact Vonex Business Solutions",
            "description": "Contact Vonex Business Solutions for managed print services, equipment leasing, printer repair, and free print assessments across Saskatchewan.",
            "mainEntity": {
              "@type": "LocalBusiness",
              "@id": "https://vonex.ca/#organization",
              "name": "Vonex Business Solutions",
              "telephone": "+1-306-881-0341",
              "email": "info@vonex.ca",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "111 2nd Avenue South, Unit 400",
                "addressLocality": "Saskatoon",
                "addressRegion": "SK",
                "postalCode": "S7K 1K6",
                "addressCountry": "CA"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "13:00"
                }
              ]
            }
          }
        `}</script>
      </Helmet>

      {/* ── PAGE CONTENT ─────────────────────────────────────────────────── */}
      <div className="min-h-screen pt-32">
        <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

              {/* LEFT — CONTACT INFO */}
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Contact Our Print Experts</h1>

                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 lg:p-4 bg-primary-100 rounded-xl shadow-md">
                      <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900 text-lg">Emergency Service Line</h2>
                      <a
                        href="tel:306-881-0341"
                        className="text-xl lg:text-2xl font-bold text-primary-600 mb-1 block hover:text-primary-700 transition-colors duration-200"
                      >
                        (306) 881-0341
                      </a>
                      <p className="text-gray-600">Emergency repairs available · Mon–Fri 8AM–5PM for sales</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 lg:p-4 bg-primary-100 rounded-xl shadow-md">
                      <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900 text-lg">Email Support</h2>
                      <a
                        href="mailto:info@vonex.ca"
                        className="text-primary-600 font-semibold text-lg mb-1 block hover:text-primary-700 transition-colors duration-200"
                      >
                        info@vonex.ca
                      </a>
                      <a
                        href="mailto:sales@vonex.ca"
                        className="text-primary-600 font-semibold text-lg block hover:text-primary-700 transition-colors duration-200"
                      >
                        sales@vonex.ca
                      </a>
                      <p className="text-gray-600 mt-1">Response within 2 hours during business days</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 lg:p-4 bg-primary-100 rounded-xl shadow-md">
                      <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900 text-lg">Saskatoon Head Office</h2>
                      <p className="text-gray-700 font-medium">111 2nd Avenue South, Unit 400<br />Saskatoon, SK S7K 1K6</p>
                      <p className="text-gray-600">Serving all of Saskatchewan</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 lg:p-4 bg-primary-100 rounded-xl shadow-md">
                      <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900 text-lg">Business Hours</h2>
                      <div className="text-gray-700">
                        <div>Mon–Fri: 8:00 AM – 5:00 PM</div>
                        <div>Sat: 9:00 AM – 1:00 PM</div>
                        <div>Sun: Closed</div>
                        <div className="text-primary-600 font-semibold mt-1">24/7 Emergency Service Available</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 lg:mt-12 p-6 bg-white rounded-xl border shadow-md">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                    <Printer className="h-5 w-5 lg:h-6 lg:w-6 mr-3 text-primary-600" />
                    Free On-Site Assessment
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Schedule a complimentary on-site consultation where our certified technicians
                    will assess your current print setup and provide personalized recommendations
                    to reduce costs and improve efficiency.
                  </p>
                  <button className="btn-primary w-full">
                    Schedule Free Assessment
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                </div>

                <div className="mt-6 lg:mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.8!2d-106.6700!3d52.1332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6bf47ed8b01%3A0x5b6b1e0b1e0b1e0b!2s111%202nd%20Ave%20S%2C%20Saskatoon%2C%20SK%20S7K%201K6%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vonex Business Solutions Location - 111 2nd Avenue South, Unit 400, Saskatoon, SK S7K 1K6"
                    className="shadow-lg"
                  ></iframe>
                </div>
              </div>

              {/* RIGHT — CONTACT FORM */}
              <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-12 shadow-2xl">
                {isSubmitted ? (
                  <div className="text-center py-8 lg:py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full mb-6">
                      <MessageSquare className="h-8 w-8 lg:h-10 lg:w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                      Thank you for contacting us. We'll respond to your inquiry within 2 hours during business days.
                    </p>
                    <button onClick={resetForm} className="btn-primary">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Get Your Free Quote</h2>

                    <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                      <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your full name"
                            autoComplete="name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                            placeholder="your@email.com"
                            autoComplete="email"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your company name"
                            autoComplete="organization"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                            placeholder="(306) 881-0341"
                            autoComplete="tel"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select a service...</option>
                          <option value="managed-print">Managed Print Services</option>
                          <option value="equipment-lease">Equipment Leasing (Kyocera / HP)</option>
                          <option value="printer-sales">Printer Sales</option>
                          <option value="emergency-repairs">Emergency Repairs</option>
                          <option value="rentals">Printer Rentals</option>
                          <option value="recycling">Cartridge Recycling</option>
                          <option value="consultation">Free Assessment</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                          Tell us about your printing needs
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="How many printers do you have? What brands? Any current issues or specific requirements?"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary text-lg lg:text-xl py-4 lg:py-5 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-3">
                            <div className="animate-spin rounded-full h-5 w-5 lg:h-6 lg:w-6 border-b-2 border-white"></div>
                            <span>Sending Message...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-3">
                            <span>Get Free Quote & Assessment</span>
                            <Send className="h-5 w-5 lg:h-6 lg:w-6" />
                          </div>
                        )}
                      </button>

                      <p className="text-xs lg:text-sm text-gray-500 text-center">
                        All form submissions are sent directly to info@vonex.ca for prompt response.
                      </p>
                    </form>
                  </>
                )}
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}