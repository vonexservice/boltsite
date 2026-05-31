import React from 'react';
import { Package, Truck, Recycle, Shield, CheckCircle, Star, ArrowRight, Droplets, ShoppingCart } from 'lucide-react';

const brands = [
  {
    name: "Kyocera",
    logo: "/Kyocera-logo.png",
    logoColor: "bg-gradient-to-br from-red-500 to-red-700",
    textColor: "text-red-600",
    description: "Genuine Kyocera ECOSYS supplies",
    products: ["TK-5307K", "TK-5308C/M/Y", "DK-5230 Drum", "ECOSYS supplies"],
    compatibility: "ECOSYS M and P series",
    savings: "Long-life cartridges",
    shopUrl: "https://shop.vonex.ca/collections/kyocera-supplies"
  },
  {
    name: "HP",
    logo: "/640px-HP_logo_2012.svg.png",
    logoColor: "bg-gradient-to-br from-blue-500 to-blue-700",
    textColor: "text-blue-600",
    description: "Original HP ink and toner cartridges",
    products: ["HP 305", "HP 950/951", "HP 26A", "HP 58A", "HP 410A"],
    compatibility: "LaserJet, OfficeJet, DeskJet series",
    savings: "Up to 25% off retail",
    shopUrl: "https://shop.vonex.ca/collections/hp-toner-cartridges-canada"
  },
  {
    name: "Canon",
    logo: "/canon-logo-png_seeklogo-25733.png",
    logoColor: "bg-gradient-to-br from-red-500 to-red-700",
    textColor: "text-red-600",
    description: "Genuine Canon ink and toner supplies",
    products: ["Canon 245/246", "Canon 540/541", "Canon 137", "Canon 128"],
    compatibility: "PIXMA, imageCLASS series",
    savings: "Bulk pricing available",
    shopUrl: "https://shop.vonex.ca/collections/canon-ink-toner-supplies"
  },
  {
    name: "Lexmark",
    logo: "/Lexmark-Logo.wine.png",
    logoColor: "bg-gradient-to-br from-orange-500 to-orange-700",
    textColor: "text-orange-600",
    description: "Authentic Lexmark toner cartridges",
    products: ["Lexmark 501H", "Lexmark 601H", "Lexmark MS/MX series"],
    compatibility: "MS, MX, CS, CX series",
    savings: "Volume discounts",
    shopUrl: "https://shop.vonex.ca/collections/genuine-lexmark-toner"
  },
  {
    name: "Brother",
    logo: "/Brother-logo.png",
    logoColor: "bg-gradient-to-br from-green-500 to-green-700",
    textColor: "text-green-600",
    description: "Original Brother ink and toner",
    products: ["Brother LC3013", "Brother TN760", "Brother TN450"],
    compatibility: "MFC, DCP, HL series",
    savings: "Multi-pack deals",
    shopUrl: "https://shop.vonex.ca/collections/brother-toner-cartridges-canada"
  },
  {
    name: "Zebra",
    logo: "/Zebra-logo-2015-logotype.webp",
    logoColor: "bg-gradient-to-br from-gray-800 to-black",
    textColor: "text-gray-900",
    description: "Zebra label printer supplies and ribbons",
    products: ["Zebra ribbons", "Label rolls", "Cleaning supplies", "Print heads"],
    compatibility: "ZT, ZD, GK, GX series",
    savings: "Industrial pricing",
    shopUrl: "https://shop.vonex.ca"
  },
  {
    name: "Xerox",
    logo: "/Xerox-logo.jpg",
    logoColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    textColor: "text-indigo-600",
    description: "Authentic Xerox toner cartridges",
    products: ["Xerox 106R", "Xerox 108R", "WorkCentre supplies"],
    compatibility: "WorkCentre, ColorQube series",
    savings: "OEM quality guaranteed",
    shopUrl: "https://shop.vonex.ca/collections/xerox-toner"
  }
];

const supplyTypes = [
  {
    icon: Droplets,
    title: "Ink Cartridges",
    description: "High-quality ink cartridges for inkjet printers",
    features: ["Vibrant color output", "Fade-resistant", "High page yield", "Easy installation"],
    brands: ["HP", "Canon", "Epson", "Brother"]
  },
  {
    icon: Package,
    title: "Toner Cartridges",
    description: "Premium toner cartridges for laser printers",
    features: ["Sharp text quality", "Consistent performance", "High capacity options", "Genuine OEM parts"],
    brands: ["HP", "Lexmark", "Brother", "Canon"]
  },
  {
    icon: Shield,
    title: "Drum Units",
    description: "Replacement drum units for optimal print quality",
    features: ["Extended lifespan", "Professional quality", "Easy replacement", "Warranty included"],
    brands: ["Brother", "Lexmark", "Konica Minolta"]
  },
  {
    icon: Recycle,
    title: "Maintenance Kits",
    description: "Complete maintenance kits for printer longevity",
    features: ["Fuser assemblies", "Transfer rollers", "Pickup rollers", "Professional installation"],
    brands: ["HP", "Lexmark", "Xerox", "Konica Minolta"]
  }
];

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free delivery on orders over $100 throughout Saskatchewan"
  },
  {
    icon: Recycle,
    title: "Cartridge Recycling",
    description: "Eco-friendly recycling program for used cartridges"
  },
  {
    icon: Package,
    title: "Bulk Ordering",
    description: "Volume discounts for businesses with high print volumes"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all genuine supplies"
  }
];

const BrandLogo = ({ brand }: { brand: typeof brands[0] }) => {
  return (
    <div
      className={`${
        brand.name === 'Lexmark' ? 'w-24 h-16' : 'w-16 h-16'
      } bg-white border border-gray-200 rounded-xl flex items-center justify-center mr-4 shadow-md relative overflow-hidden p-2`}
    >
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        className="max-w-full max-h-full object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.className = `w-16 h-16 ${brand.logoColor} rounded-xl flex items-center justify-center mr-4 shadow-md relative overflow-hidden`;

            let fallbackText = '';
            if (brand.name === "HP") fallbackText = '<span class="text-white font-bold text-lg relative z-10">hp</span>';
            else if (brand.name === "Canon") fallbackText = '<span class="text-white font-bold text-sm relative z-10">CANON</span>';
            else if (brand.name === "Lexmark") fallbackText = '<span class="text-white font-bold text-sm relative z-10">LEX</span>';
            else if (brand.name === "Brother") fallbackText = '<span class="text-white font-bold text-sm lowercase italic relative z-10">brother</span>';
            else if (brand.name === "Kyocera") fallbackText = '<span class="text-white font-bold text-xs relative z-10">KYOCERA</span>';
            else if (brand.name === "Xerox") fallbackText = '<span class="text-white font-bold text-sm relative z-10">XEROX</span>';

            parent.innerHTML = `<div class="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>${fallbackText}`;
          }
        }}
      />
    </div>
  );
};

export default function InkTonerSupplies() {
  return (
    <section id="ink-toner-supplies" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Ink & Toner Office Supplies
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Complete selection of genuine ink cartridges, toner cartridges, and office supplies
            for all major printer brands. Save money with our competitive pricing and bulk discounts.
          </p>
          <a
            href="https://shop.vonex.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary-600 text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="h-6 w-6 mr-3" />
            <span>Shop Online at shop.vonex.ca</span>
            <ArrowRight className="h-6 w-6 ml-3" />
          </a>
        </div>

        {/* Supply Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {supplyTypes.map((type, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 card-hover text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-2xl mb-6 shadow-md">
                <type.icon className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
              <ul className="space-y-2 mb-6">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-sm text-primary-600 font-semibold mb-4">
                Brands: {type.brands.join(", ")}
              </div>
              <a
                href="https://shop.vonex.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Shop Now
              </a>
            </div>
          ))}
        </div>

        {/* Brand Selection */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Shop by Brand</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 card-hover shadow-lg flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <BrandLogo brand={brand} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{brand.name}</h4>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      <Star className="h-3 w-3 mr-1" />
                      {brand.savings}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{brand.description}</p>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Popular Products:</h5>
                  <ul className="space-y-1">
                    {brand.products.map((product, productIndex) => (
                      <li key={productIndex} className="text-sm text-gray-600">• {product}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-1">Compatible With:</h5>
                  <p className="text-sm text-gray-600">{brand.compatibility}</p>
                </div>

                <a
                  href={brand.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Shop {brand.name} Supplies</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-2xl mb-6 shadow-md">
                <service.icon className="h-10 w-10 text-primary-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Need Help Finding the Right Supplies?</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our supply experts can help you find the exact cartridges and supplies for your printers.
            Get personalized recommendations and volume pricing for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://shop.vonex.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-3"
            >
              <ShoppingCart className="h-6 w-6" />
              <span>Shop Online Now</span>
              <ArrowRight className="h-6 w-6" />
            </a>
            <a
              href="tel:306-881-0341"
              className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-primary-600 transition-all duration-200 inline-flex items-center justify-center space-x-3"
            >
              <span>Call (306) 881-0341</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}