import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, GraduationCap, Heart, Scale, Factory, Users, Briefcase, ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: Heart,
    title: "Healthcare & Medical",
    description: "Secure printing solutions for hospitals, clinics, and medical practices with HIPAA compliance and patient confidentiality.",
    features: ["HIPAA compliant printing", "Secure document handling", "24/7 emergency service", "Patient record management"],
    color: "bg-red-100",
    iconColor: "text-red-600"
  },
  {
    icon: GraduationCap,
    title: "Education & Schools",
    description: "Cost-effective printing solutions for schools, universities, and educational institutions across Saskatchewan.",
    features: ["Budget-friendly options", "High-volume capabilities", "Student printing management", "Administrative support"],
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Scale,
    title: "Legal & Professional",
    description: "Professional printing services for law firms, accounting practices, and professional service providers.",
    features: ["Confidential document handling", "High-quality output", "Binding and finishing", "Document management"],
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    icon: Building2,
    title: "Government & Municipal",
    description: "Reliable printing solutions for government offices, municipalities, and public sector organizations.",
    features: ["Compliance requirements", "Secure printing", "Volume discounts", "Multi-location support"],
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    description: "Robust printing solutions for manufacturing facilities, warehouses, and industrial operations.",
    features: ["Industrial-grade equipment", "Label printing solutions", "Harsh environment durability", "Production scheduling"],
    color: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    icon: Users,
    title: "Non-Profit Organizations",
    description: "Affordable printing solutions for non-profits, charities, and community organizations in Saskatchewan.",
    features: ["Special pricing programs", "Donation receipt printing", "Event materials", "Volunteer support"],
    color: "bg-teal-100",
    iconColor: "text-teal-600"
  },
  {
    icon: Briefcase,
    title: "Small & Medium Business",
    description: "Scalable printing solutions that grow with your business, from startups to established enterprises.",
    features: ["Flexible service plans", "Growth-oriented solutions", "Cost-effective options", "Business continuity"],
    color: "bg-indigo-100",
    iconColor: "text-indigo-600"
  }
];

export default function IndustriesWeServe() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Industries We Serve Across Saskatchewan
          </h2>
          <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From healthcare to education, manufacturing to professional services, we provide 
            specialized printing solutions tailored to the unique needs of every industry in Saskatchewan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
            >
              <div>
                <div className={`inline-flex items-center justify-center w-14 h-14 ${industry.color} rounded-xl mb-5`}>
                  <industry.icon className={`h-7 w-7 ${industry.iconColor}`} />
                </div>
              
                <h3 className="text-lg font-bold text-slate-900 mb-3 min-h-[56px]">
                  {industry.title}
                </h3>
              
                <p className="text-slate-600 mb-5 leading-relaxed text-sm flex-grow">
                  {industry.description}
                </p>
              </div>
              
              <ul className="space-y-2 mt-auto pt-4 border-t border-slate-100">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs text-slate-700">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action - Styled to match your other sections */}
        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Ready to Optimize Your Industry's Print Operations?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Every industry has unique printing needs. Let our Saskatchewan experts create a customized 
            solution that addresses your specific requirements and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactClick}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-4 rounded-xl text-base font-bold transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Get Industry-Specific Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="tel:306-881-0341"
              className="border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-base font-bold transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Call (306) 881-0341</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}