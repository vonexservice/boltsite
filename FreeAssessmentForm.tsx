import React, { useState } from 'react';
import { Send, CheckCircle, X, Printer } from 'lucide-react';

interface FreeAssessmentFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeAssessmentForm({ isOpen, onClose }: FreeAssessmentFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    city: '',
    numberOfPrinters: '',
    notes: ''
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

    // Simulate form submission to info@vonex.ca
    try {
      // In a real implementation, this would send to your backend
      const emailBody = `
Free Assessment Request

Full Name: ${formData.fullName}
Company Name: ${formData.companyName}
Email: ${formData.email}
Phone Number: ${formData.phoneNumber}
City: ${formData.city}
Number of Printers/Copiers: ${formData.numberOfPrinters}
Notes or Requirements: ${formData.notes}

Submitted from: vonex.ca
      `;

      // For now, we'll create a mailto link as a fallback
      const mailtoLink = `mailto:info@vonex.ca?subject=Free Assessment Request - ${formData.companyName}&body=${encodeURIComponent(emailBody)}`;
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
      fullName: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      city: '',
      numberOfPrinters: '',
      notes: ''
    });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl lg:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="mobile-card">
          <div className="flex justify-between items-center mobile-mb">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Free Print Assessment</h2>
              <p className="text-gray-600 mobile-text-sm">Get a personalized evaluation of your print environment</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors duration-200 mobile-touch-target"
              aria-label="Close form"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8 lg:py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-8 w-8 lg:h-10 lg:w-10 text-green-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Assessment Request Submitted!</h3>
              <p className="text-gray-600 mb-6 lg:mb-8 leading-relaxed mobile-text-sm">
                Thank you for your interest in our free print assessment. Our team will contact you within 24 hours to schedule your evaluation.
              </p>
              <div className="space-y-4">
                <div className="bg-primary-50 p-4 lg:p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2 mobile-text-base">What happens next?</h4>
                  <ul className="text-gray-700 space-y-2 text-left mobile-text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      Our expert will contact you to schedule the assessment
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      We'll analyze your current print environment
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      You'll receive a detailed report with cost-saving recommendations
                    </li>
                  </ul>
                </div>
                <button
                  onClick={resetForm}
                  className="btn-primary"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mobile-input"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mobile-input"
                    placeholder="Your company name"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
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
                    className="mobile-input"
                    placeholder="your@email.com"
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mobile-input"
                    placeholder="(306) 881-0341"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mobile-input"
                    placeholder="Saskatoon"
                    autoComplete="address-level2"
                  />
                </div>
                <div>
                  <label htmlFor="numberOfPrinters" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                    Number of Printers/Copiers
                  </label>
                  <select
                    id="numberOfPrinters"
                    name="numberOfPrinters"
                    value={formData.numberOfPrinters}
                    onChange={handleChange}
                    className="mobile-input"
                  >
                    <option value="">Select quantity...</option>
                    <option value="1-2">1-2 devices</option>
                    <option value="3-5">3-5 devices</option>
                    <option value="6-10">6-10 devices</option>
                    <option value="11-20">11-20 devices</option>
                    <option value="21+">21+ devices</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                  Notes or Requirements (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="mobile-input resize-none"
                  placeholder="Tell us about your current print challenges, specific requirements, or any questions you have..."
                ></textarea>
              </div>

              <div className="bg-primary-50 p-4 lg:p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center mobile-text-base">
                  <Printer className="h-5 w-5 mr-2 text-primary-600" />
                  What's Included in Your Free Assessment
                </h4>
                <ul className="space-y-2 text-gray-700 mobile-text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Complete analysis of your current print environment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Cost-per-page calculations and potential savings identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Equipment optimization recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Customized proposal for managed print services
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg lg:text-xl py-4 lg:py-5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="animate-spin rounded-full h-5 w-5 lg:h-6 lg:w-6 border-b-2 border-white"></div>
                    <span>Submitting Request...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <span>Request Free Assessment</span>
                    <Send className="h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                )}
              </button>

              <p className="text-xs lg:text-sm text-gray-500 text-center">
                By submitting this form, you agree to be contacted by Vonex Business Solutions regarding your print assessment. 
                All information will be sent to info@vonex.ca.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}