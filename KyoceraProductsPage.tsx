import React, { useState } from 'react';
import { 
  Shield, TrendingUp, Clock, CreditCard, Briefcase, Building2, 
  Factory, Mail, Phone, HelpCircle, BatteryCharging, Leaf,
  Grid2x2 as Grid, List, Filter, X, CheckCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

// ============================================
// PRODUCT DATA - Replace with your actual Kyocera Canada products
// ============================================

const products = [
  {
    id: 1,
    name: 'ECOSYS M8124cidn',
    category: 'A3 Colour MFP',
    businessNeed: 'Corporate Dept',
    size: 'A3',
    ppm: 24,
    color: true,
    description: 'Compact A3 colour MFP. Perfect for corporate departments needing reliable colour output.',
    longLifeDrum: '200,000 pages',
    specs: ['A3 colour', '24 ppm', 'Duplex scanning', 'Mobile print'],
  },
  {
    id: 2,
    name: 'ECOSYS M8130cidn',
    category: 'A3 Colour MFP',
    businessNeed: 'Corporate Dept',
    size: 'A3',
    ppm: 30,
    color: true,
    description: 'Faster A3 colour MFP with 7" touch panel and advanced finishing.',
    longLifeDrum: '200,000 pages',
    specs: ['A3 colour', '30 ppm', '7" touch panel', 'Booklet finishing'],
  },
  {
    id: 3,
    name: 'TASKalfa 5054ci',
    category: 'A3 Colour MFP',
    businessNeed: 'Production',
    size: 'A3',
    ppm: 50,
    color: true,
    description: 'High-volume A3 colour MFP with professional finishing options.',
    longLifeDrum: '600,000 pages',
    specs: ['A3 colour', '50 ppm', 'Booklet finishing', '10.1" touch panel'],
  },
  {
    id: 4,
    name: 'ECOSYS M5526cdw',
    category: 'A4 Colour MFP',
    businessNeed: 'Small Office',
    size: 'A4',
    ppm: 27,
    color: true,
    description: 'Compact A4 colour MFP with wireless connectivity and small footprint.',
    longLifeDrum: '100,000 pages',
    specs: ['A4 colour', '27 ppm', 'Wireless', 'Compact design'],
  },
  {
    id: 5,
    name: 'ECOSYS M6635cidn',
    category: 'A4 Colour MFP',
    businessNeed: 'Corporate Dept',
    size: 'A4',
    ppm: 35,
    color: true,
    description: 'High-speed A4 colour MFP with 80 ipm duplex scanning.',
    longLifeDrum: '200,000 pages',
    specs: ['A4 colour', '35 ppm', '80 ipm scan', 'Optional finishing'],
  },
];

const categories = ['All', 'A3 Colour MFP', 'A4 Colour MFP'];

const businessNeeds = [
  {
    id: 'Small Office',
    icon: Briefcase,
    title: 'Small Office / Workgroup',
    description: 'A4 solutions for 1-10 users. Low volume, reliable output.',
    volumeRange: 'Up to 5,000 pages/month',
  },
  {
    id: 'Corporate Dept',
    icon: Building2,
    title: 'Corporate Department',
    description: 'A3 & high-speed A4 for 10-50+ users. Finishing & security.',
    volumeRange: '5,000 - 50,000+ pages/month',
  },
  {
    id: 'Production',
    icon: Factory,
    title: 'Enterprise / Production',
    description: 'High-volume A3 production for 50+ users. Maximum duty cycle.',
    volumeRange: '50,000 - 250,000+ pages/month',
  },
];

export default function KyoceraProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBusinessNeed, setSelectedBusinessNeed] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  // Filter logic
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const needMatch = !selectedBusinessNeed || product.businessNeed === selectedBusinessNeed;
    return categoryMatch && needMatch;
  });

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSelectedBusinessNeed(null);
  };

  const handleBusinessNeedClick = (needId) => {
    setSelectedBusinessNeed(selectedBusinessNeed === needId ? null : needId);
    setSelectedCategory('All');
  };

  const handleContactClick = (productName) => {
    const emailBody = `Kyocera ${productName} - Expert Recommendation Request

Business Name: 
Contact Person: 
Phone: 
Email: 

Estimated Monthly Print Volume:
[ ] 0-5k pages
[ ] 5k-20k pages
[ ] 20k-50k pages
[ ] 50k+ pages

Need Color? [ ] Yes [ ] No
Need Finishing? [ ] Yes [ ] No

---
Submitted from: vonex.ca/kyocera-products`;

    window.location.href = `mailto:sales@vonex.ca?subject=Kyocera ${productName} Inquiry&body=${encodeURIComponent(emailBody)}`;
  };

  const handleGeneralConsultation = () => {
    const emailBody = `Kyocera - Help Me Choose

Business Size: [ ] Small [ ] Mid-size [ ] Large
Monthly Volume: [ ] 0-5k [ ] 5k-20k [ ] 20k-50k [ ] 50k+
Need A3? [ ] Yes [ ] No
Need Color? [ ] Yes [ ] No

Contact Info:
Name: 
Company: 
Phone: 
Email:`;

    window.location.href = `mailto:sales@vonex.ca?subject=Help Me Choose a Kyocera&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <>
      <MetaTags page="/kyocera-products" />
      <Header />
      <main className="bg-white">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-[#004a99] text-white py-20">
          <div className="container-custom max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Kyocera A3 & A4 Solutions
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Multifunction printers and copiers for mid-to-large businesses in Saskatoon.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                  <BatteryCharging className="h-4 w-4" /> Long-life parts
                </span>
                <span className="bg-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                  <CreditCard className="h-4 w-4" /> Flexible leasing
                </span>
                <span className="bg-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                  <Clock className="h-4 w-4" /> 2-hour local support
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Consultative Layer - Business Needs Selector */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Not sure which model fits your office?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tell us about your business size. We'll recommend the right A3 or A4 solution.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {businessNeeds.map((need) => {
                const Icon = need.icon;
                const isActive = selectedBusinessNeed === need.id;
                return (
                  <div
                    key={need.id}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                      isActive 
                        ? 'border-[#004a99] bg-blue-50 shadow-lg' 
                        : 'border-gray-200 hover:border-[#004a99] hover:shadow-lg'
                    }`}
                    onClick={() => handleBusinessNeedClick(need.id)}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      isActive ? 'bg-[#004a99] text-white' : 'bg-gray-100 text-[#004a99]'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{need.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{need.description}</p>
                    <p className="text-xs text-[#004a99] font-semibold">{need.volumeRange}</p>
                  </div>
                );
              })}
            </div>
            {selectedBusinessNeed && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setSelectedBusinessNeed(null)}
                  className="text-sm text-gray-500 hover:text-[#004a99] underline"
                >
                  Clear filter and show all models
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-0 z-30 py-4 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="container-custom max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[#004a99] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                {selectedBusinessNeed && (
                  <button 
                    onClick={() => setSelectedBusinessNeed(null)}
                    className="bg-blue-100 text-[#004a99] px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-blue-200 transition"
                  >
                    Focus: {selectedBusinessNeed}
                    <X className="h-3 w-3" />
                  </button>
                )}
                <div className="flex border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setViewMode('grid')} 
                    className={`p-2.5 ${viewMode === 'grid' ? 'bg-gray-100 text-[#004a99]' : 'bg-white text-gray-400'}`}
                    aria-label="Grid view"
                  >
                    <Grid size={20} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')} 
                    className={`p-2.5 ${viewMode === 'list' ? 'bg-gray-100 text-[#004a99]' : 'bg-white text-gray-400'}`}
                    aria-label="List view"
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom max-w-7xl mx-auto px-4">
            {/* Kyocera Value Prop Banner */}
            <div className="mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Leaf className="h-10 w-10" />
                  <div>
                    <h3 className="font-bold text-xl">Kyocera ECOSYS Long-Life Technology</h3>
                    <p className="text-emerald-100 text-sm">Up to 600,000-page drum life • Lower total cost of ownership</p>
                  </div>
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl">
                <p className="text-gray-500 mb-4">No products match your current filter.</p>
                <button
                  onClick={() => {
                    setSelectedBusinessNeed(null);
                    setSelectedCategory('All');
                  }}
                  className="text-[#004a99] font-bold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    
                    {/* Image Placeholder */}
                    <div className="bg-gray-100 h-48 flex items-center justify-center border-b border-gray-200">
                      <div className="text-center text-gray-400">
                        <div className="text-6xl mb-2">🖨️</div>
                        <p className="text-sm font-medium text-gray-500">{product.category}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{product.size} • {product.ppm} ppm</p>
                        </div>
                        <div className="bg-blue-100 text-[#004a99] px-3 py-1 rounded-full text-sm font-bold">
                          {product.ppm} ppm
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                      {/* Long-life badge */}
                      <div className="mb-4 p-2 bg-emerald-50 rounded-lg border border-emerald-100">
                        <p className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                          <BatteryCharging className="h-3 w-3" /> Long-life drum: {product.longLifeDrum}
                        </p>
                      </div>

                      {/* Trust snippet */}
                      <div className="mb-4 p-2 bg-blue-50 rounded-lg text-center border border-blue-100">
                        <p className="text-xs text-[#004a99]">
                          ✓ Includes: Local Setup • Network Integration • 2-Hour Support
                        </p>
                      </div>

                      <button
                        onClick={() => handleContactClick(product.name)}
                        className="w-full bg-[#004a99] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Get Expert Recommendation
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">The Vonex & Kyocera Advantage</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <Clock className="h-8 w-8 text-[#004a99]" />
                </div>
                <h3 className="font-bold text-lg mb-2">2-Hour Local Support</h3>
                <p className="text-gray-600 text-sm">On-site help within 2 hours. Local Saskatoon technicians, not a national call center.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <CreditCard className="h-8 w-8 text-[#004a99]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Flexible Leasing</h3>
                <p className="text-gray-600 text-sm">Preserve your cash flow. Customized 24-60 month leasing options available.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <BatteryCharging className="h-8 w-8 text-[#004a99]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Long-Life Parts</h3>
                <p className="text-gray-600 text-sm">Kyocera's ceramic drums last up to 600,000 pages. Lower cost per page.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <Shield className="h-8 w-8 text-[#004a99]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Enterprise Security</h3>
                <p className="text-gray-600 text-sm">Data encryption, user authentication, and secure print capabilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support & CTA Section */}
        <section className="py-20 bg-slate-950 text-white">
          <div className="container-custom max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
              <Building2 size={16} /> Saskatoon Local Support
            </div>
            <h2 className="text-4xl font-bold mb-6">Need a custom production configuration?</h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
              Kyocera's TASKalfa Pro series offers incredible reliability for high-volume environments. 
              Let's configure your vacuum-fed trays and finishing units.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={handleGeneralConsultation}
                className="bg-white text-gray-900 px-10 py-4 rounded-full font-extrabold hover:bg-gray-200 transition-transform hover:scale-105"
              >
                Help Me Choose
              </button>
              <a 
                href="tel:3060000000" 
                className="bg-[#004a99] text-white px-10 py-4 rounded-full font-extrabold hover:bg-blue-700 transition-transform hover:scale-105 flex items-center gap-2"
              >
                <Phone size={20} /> Call Local Sales
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}