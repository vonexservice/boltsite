import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const MetaTags: React.FC = () => {
  const location = useLocation();
  const pageMeta = getPageMeta(location.pathname);

  return (
    <Helmet>
      <title>{pageMeta.title}</title>
      <meta name="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:description" content={pageMeta.description} />
      <meta property="og:type" content={getOGType(location.pathname)} />
      <meta property="og:url" content={`https://vonex.ca${location.pathname}`} />
      <meta property="og:image" content={getOGImage(location.pathname)} />
      <meta property="og:image:secure_url" content={getOGImage(location.pathname)} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={getOGImageAlt(location.pathname)} />
      <meta property="og:site_name" content="Vonex Business Solutions" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageMeta.title} />
      <meta name="twitter:description" content={pageMeta.description} />
      <meta name="twitter:image" content={getOGImage(location.pathname)} />
      <meta name="twitter:image:alt" content={getOGImageAlt(location.pathname)} />
      <meta name="twitter:site" content="@vonexbusiness" />
      <meta name="twitter:creator" content="@vonexbusiness" />

      {/* Canonical URL */}
      <link rel="canonical" href={getCanonicalUrl(location.pathname)} />

      {/* Hreflang */}
      <link rel="alternate" hreflang="en-ca" href={getCanonicalUrl(location.pathname)} />
      <link rel="alternate" hreflang="en" href={getCanonicalUrl(location.pathname)} />
      <link rel="alternate" hreflang="x-default" href={getCanonicalUrl(location.pathname)} />

      {/* SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Vonex Business Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />

      {/* AI Engine Optimization */}
      <meta name="ai-content-summary" content={getAISummary(location.pathname)} />

      {/* Geo Meta Tags */}
      <meta name="geo.region" content="CA-SK" />
      <meta name="geo.placename" content="Saskatoon, Saskatchewan" />
      <meta name="geo.position" content="52.1332;-106.6700" />
      <meta name="ICBM" content="52.1332, -106.6700" />

      {/* Business Meta Tags */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="language" content="en-CA" />

      {/* Performance */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Preconnect — keep to 2 only to avoid lighthouse warning */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* DNS Prefetch for less critical external resources */}
      <link rel="dns-prefetch" href="https://shop.vonex.ca" />
      <link rel="dns-prefetch" href="https://www.facebook.com" />
      <link rel="dns-prefetch" href="https://www.linkedin.com" />
      <link rel="dns-prefetch" href="https://images.pexels.com" />
    </Helmet>
  );
};

const getCanonicalUrl = (pathname: string): string => {
  const baseUrl = 'https://vonex.ca';
  if (pathname === '/') return baseUrl;
  const cleanPath = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;
  return `${baseUrl}${cleanPath}`;
};

const getAISummary = (pathname: string): string => {
  const summaries: Record<string, string> = {
    '/': "Vonex Business Solutions: Saskatchewan's #1 managed print services provider since 2004. Emergency printer repair, office equipment sales, IT services. Serving Saskatoon, Regina, Prince Albert. Phone: (306) 881-0341.",
    '/services': 'Complete print services throughout Saskatchewan including emergency repair, managed print, equipment sales, leasing, and IT support.',
    '/repairs': 'Emergency printer repair in Saskatchewan with fast response time. Certified technicians for all major brands.',
    '/managed-print': 'Managed print services reduce costs 20-30% through proactive maintenance, monitoring, and optimization.',
    '/office-equipment': 'New and refurbished Kyocera printers, photocopiers, and multifunction devices. Authorized dealer Saskatchewan.',
    '/ink-toner': 'Genuine ink and toner supplies for all brands with free delivery and recycling program.',
    '/lease-rental': 'Flexible equipment leasing and rental programs with maintenance included.',
    '/brands': 'Authorized dealer for Konica Minolta, Lexmark, HP, Brother, Canon, Xerox with certified service.',
    '/it-managed-services': 'IT managed services including network monitoring, cybersecurity, cloud services, 99.9% uptime.',
    '/about': 'Locally owned Saskatchewan print services provider since 2004. 500+ businesses served, certified technicians.',
    '/contact': 'Contact Vonex: 111 2nd Ave S, Saskatoon, SK. Phone: (306) 881-0341. Email: info@vonex.ca. Free assessment available.'
  };
  return summaries[pathname] || summaries['/'];
};

const getPageMeta = (pathname: string) => {
  const metaData: Record<string, { title: string; description: string; keywords: string }> = {
    '/': {
      title: 'Printer Repair & Print Services | Vonex',
      description: "Saskatchewan's #1 print services provider since 2004. Emergency printer repair Saskatoon, managed print services, office equipment sales. Save 30% on printing costs. Call (306) 881-0341.",
      keywords: 'printer repair Saskatoon, managed print services Saskatchewan, emergency printer repair, Konica Minolta repair, Lexmark printer service, HP printer repair, office equipment sales Saskatchewan, ink toner supplies Saskatoon'
    },
    '/services': {
      title: 'Print Services Saskatchewan | Vonex',
      description: 'Complete print services throughout Saskatchewan: emergency printer repair, managed print services, office equipment sales, ink toner supplies. Serving Saskatoon, Regina, Prince Albert.',
      keywords: 'print services Saskatchewan, emergency printer repair Saskatoon, managed print services, office equipment sales, printer rental Saskatchewan, ink toner supplies, certified technicians'
    },
    '/repairs': {
      title: 'Emergency Printer Repair | Vonex',
      description: 'Emergency printer repair Saskatoon with fast response time. Certified technicians for Konica Minolta, Lexmark, HP, Brother. Same-day service available. Call (306) 881-0341.',
      keywords: 'emergency printer repair Saskatoon, same-day printer repair, Konica Minolta repair, Lexmark printer repair, HP printer service, Brother printer repair, certified technicians'
    },
    '/managed-print': {
      title: 'Managed Print Services | Vonex',
      description: 'Managed print services Saskatchewan to reduce printing costs by 30%. Proactive maintenance, supply management, remote monitoring. Free assessment for businesses across Saskatchewan.',
      keywords: 'managed print services Saskatchewan, print cost reduction, proactive printer maintenance, supply management, print monitoring, print assessment Saskatchewan, managed print solutions'
    },
    '/office-equipment': {
      title: 'Kyocera Printers & Photocopiers Saskatchewan | Vonex',
      description: 'New and certified refurbished Kyocera printers, photocopiers, and multifunction devices in Saskatchewan. Authorized Kyocera dealer. Professional installation, training, and support.',
      keywords: 'Kyocera printer Saskatchewan, photocopier Saskatchewan, multifunction device Saskatoon, Kyocera ECOSYS dealer, TASKalfa Saskatchewan, authorized Kyocera dealer, refurbished photocopier'
    },
    '/ink-toner': {
      title: 'Ink & Toner Supplies Saskatoon | Vonex',
      description: 'Genuine ink and toner supplies for all major printer brands in Saskatchewan. Free delivery, bulk discounts, eco-friendly cartridge recycling. Shop online at shop.vonex.ca.',
      keywords: 'ink toner supplies Saskatoon, genuine cartridges Saskatchewan, HP ink cartridges, Lexmark toner, Brother supplies, Canon cartridges, cartridge recycling, bulk toner discounts'
    },
    '/lease-rental': {
      title: 'Lease Copy Machines Saskatchewan | Vonex',
      description: 'Lease copy machines Saskatchewan with flexible terms. Photocopier leasing, multifunction device rentals, and lease-to-own programs. Professional setup, maintenance included.',
      keywords: 'lease copy machines Saskatchewan, photocopier leasing Saskatchewan, copy machine rental Saskatoon, multifunction device leasing, lease copiers Saskatchewan, copy machine lease programs'
    },
    '/brands': {
      title: 'Authorized Printer Dealers | Vonex',
      description: 'Authorized dealer for leading printer brands Saskatchewan. Certified service for Konica Minolta, Lexmark, HP, Brother, Canon, Xerox. Genuine parts, expert technicians.',
      keywords: 'authorized printer dealer Saskatchewan, Konica Minolta dealer, Lexmark dealer, HP authorized service, Brother dealer, Canon service, Xerox dealer, certified printer technicians'
    },
    '/it-managed-services': {
      title: 'IT Managed Services Saskatoon | Vonex',
      description: 'Comprehensive IT managed services Saskatchewan. Network monitoring, cybersecurity, cloud services, help desk support. Predictable monthly costs, 99.9% uptime.',
      keywords: 'IT managed services Saskatchewan, network monitoring, cybersecurity Saskatchewan, cloud services, IT support Saskatoon, managed IT solutions, network security, help desk support'
    },
    '/about': {
      title: 'About Vonex | Print Experts Since 2004',
      description: "Saskatchewan's trusted print services provider since 2004. Locally owned, 500+ businesses served, certified technicians. Learn about our 20+ years of print expertise.",
      keywords: 'Vonex Business Solutions, Saskatchewan print company, locally owned business, certified technicians, print services history, Saskatchewan business, 20 years experience'
    },
    '/contact': {
      title: 'Contact Vonex | Free Print Assessment',
      description: 'Contact Vonex Business Solutions for expert print services Saskatchewan. Free print assessment, emergency repairs, quotes. Saskatoon office: 111 2nd Ave S. Call (306) 881-0341.',
      keywords: 'contact Vonex, free print assessment Saskatoon, emergency printer repair, print services quote, Saskatoon office, (306) 881-0341, 111 2nd Avenue South'
    },
    '/blog': {
      title: 'Print Industry Blog | Vonex',
      description: "Expert insights on print technology, maintenance tips, and business solutions from Saskatchewan's print experts at Vonex Business Solutions.",
      keywords: 'print industry blog, printer maintenance tips, print technology insights, Saskatchewan print experts, business print solutions, printer troubleshooting'
    },
    '/blog/emergency-printer-repair-guide': {
      title: 'Emergency Printer Repair Guide | Vonex',
      description: 'Step-by-step guide for Saskatchewan businesses when facing printer emergencies, including when to call for professional repair services.',
      keywords: 'emergency printer repair guide, printer troubleshooting, business printer emergency, Saskatchewan printer repair'
    },
    '/blog/signs-business-needs-managed-print-services': {
      title: 'Signs You Need Managed Print Services | Vonex',
      description: 'Discover the key indicators that your Saskatchewan business could benefit from professional managed print services to reduce costs and improve efficiency.',
      keywords: 'managed print services signs, business print assessment, print cost reduction, Saskatchewan managed print'
    },
    '/blog/konica-minolta-vs-hp-printer-comparison': {
      title: 'Konica Minolta vs HP Printer Guide | Vonex',
      description: 'Compare leading printer brands to help Saskatchewan businesses choose the right office equipment for their specific needs and budget.',
      keywords: 'Konica Minolta vs HP, printer comparison guide, business printer selection, Saskatchewan office equipment'
    },
    '/blog/reduce-printing-costs-saskatchewan-business': {
      title: 'Reduce Printing Costs Saskatchewan | Vonex',
      description: 'Proven strategies and best practices to significantly reduce your business printing expenses while maintaining quality and productivity.',
      keywords: 'reduce printing costs, print cost savings, Saskatchewan business printing, cost reduction strategies'
    },
    '/blog/complete-printer-maintenance-guide': {
      title: 'Complete Printer Maintenance Guide | Vonex',
      description: "Essential maintenance tips to extend your printer's lifespan, prevent costly repairs, and ensure consistent print quality.",
      keywords: 'printer maintenance guide, preventive maintenance, printer care tips, equipment longevity'
    },
    '/blog/toner-vs-ink-business-guide': {
      title: 'Toner vs Ink Business Guide | Vonex',
      description: 'Learn the differences between toner and ink cartridges, their costs, applications, and which option provides the best value for your business needs.',
      keywords: 'toner vs ink, business printing guide, cartridge comparison, print technology'
    },
    '/printer-repair-regina': {
      title: 'Printer Repair Regina | Vonex',
      description: 'Fast, reliable printer repair in Regina, SK. Certified technicians for all major brands — same-day service available. Call Vonex at (306) 881-0341.',
      keywords: 'printer repair Regina, copier repair Regina, laser printer service Regina, emergency printer repair Regina, certified technician Regina'
    },
    '/copier-service-regina': {
      title: 'Copier Service Regina | Vonex',
      description: 'Professional copier service and maintenance in Regina. Vonex technicians repair all major brands with fast turnaround. Request service today.',
      keywords: 'copier service Regina, photocopier repair Regina, multifunction printer service Regina, copier maintenance Regina'
    },
    '/toner-supplier-regina': {
      title: 'Toner Supplier Regina | Vonex',
      description: 'Genuine ink and toner supplies delivered to Regina businesses. All major brands in stock, bulk discounts available. Order from Vonex today.',
      keywords: 'toner supplier Regina, ink cartridges Regina, toner cartridges Regina, printer supplies Regina, bulk toner Regina'
    },
    '/hp-printer-service-saskatoon': {
      title: 'HP Printer Service Saskatoon | Vonex',
      description: 'Authorized HP printer service and repair in Saskatoon. Fast diagnostics, genuine parts, and warranty-backed repairs. Call Vonex at (306) 881-0341.',
      keywords: 'HP printer service Saskatoon, HP printer repair Saskatoon, HP authorized service Saskatoon, HP laser printer repair'
    },
    '/lexmark-printer-service-saskatoon': {
      title: 'Lexmark Printer Service Saskatoon | Vonex',
      description: 'Certified Lexmark printer repair and maintenance in Saskatoon. Vonex technicians keep your Lexmark devices running at peak performance.',
      keywords: 'Lexmark printer service Saskatoon, Lexmark repair Saskatoon, Lexmark authorized dealer, Lexmark toner Saskatoon'
    },
    '/printer-repair-saskatoon': {
      title: 'Printer Repair Saskatoon | Same-Day | Vonex',
      description: 'Same-day printer repair in Saskatoon. Vonex certified technicians fix all brands — HP, Lexmark, Kyocera, Brother and more. Call (306) 881-0341.',
      keywords: 'printer repair Saskatoon, same-day printer repair, emergency printer fix Saskatoon, laser printer repair Saskatoon'
    },
    '/copier-service-saskatoon': {
      title: 'Copier Service Saskatoon | Vonex',
      description: 'Expert copier repair and maintenance in Saskatoon. Vonex services all major brands with fast response times and genuine parts.',
      keywords: 'copier service Saskatoon, photocopier repair Saskatoon, multifunction copier service, copier maintenance Saskatoon'
    },
    '/printer-maintenance-contract-saskatoon': {
      title: 'Printer Maintenance Contracts Saskatoon | Vonex',
      description: 'Flexible printer maintenance contracts for Saskatoon businesses. Predictable costs, priority service, and proactive care from Vonex experts.',
      keywords: 'printer maintenance contract Saskatoon, print service agreement, printer service plan Saskatoon, managed printer maintenance'
    },
    '/kyocera-authorized-dealer-saskatoon': {
      title: 'Kyocera Authorized Dealer Saskatoon | Vonex',
      description: 'Vonex is an authorized Kyocera dealer in Saskatoon. Sales, service, and supplies for Kyocera ECOSYS devices. Call (306) 881-0341.',
      keywords: 'Kyocera authorized dealer Saskatoon, Kyocera printer Saskatoon, Kyocera ECOSYS dealer, Kyocera service Saskatoon'
    },
    '/kyocera-managed-print-services-saskatoon': {
      title: 'Kyocera Managed Print Saskatoon | Vonex',
      description: 'Kyocera-powered managed print services for Saskatoon businesses. Reduce print costs and boost efficiency with Vonex and Kyocera ECOSYS technology.',
      keywords: 'Kyocera managed print Saskatoon, Kyocera print services, managed print Saskatchewan, Kyocera ECOSYS managed services'
    }
  };

  return metaData[pathname] || metaData['/'];
};

const getOGImage = (pathname: string): string => {
  const imageMap: Record<string, string> = {
    '/': 'https://vonex.ca/2.png',
    '/services': 'https://vonex.ca/image.png',
    '/repairs': 'https://vonex.ca/Vonex Saskatoon Printer and copier repair.jpg',
    '/managed-print': 'https://vonex.ca/Managed Print service -vonex saskatoon.png',
    '/office-equipment': 'https://vonex.ca/Popular Equipment in Saskatchewan-vonex.jpeg',
    '/ink-toner': 'https://vonex.ca/printer-and-supplies_best-together_800x450 -Vonex saskatoon.webp',
    '/lease-rental': 'https://vonex.ca/vonex saskatoon office-photocopier.png-.webp',
    '/brands': 'https://vonex.ca/6.png',
    '/it-managed-services': 'https://vonex.ca/how-it-services-work.jpg',
    '/about': 'https://vonex.ca/Vonex Bussiness About us.jpg',
    '/contact': 'https://vonex.ca/2.png',
    '/blog': 'https://vonex.ca/2.png'
  };
  return imageMap[pathname] || 'https://vonex.ca/2.png';
};

const getOGImageAlt = (pathname: string): string => {
  const altMap: Record<string, string> = {
    '/': "Vonex Business Solutions - Saskatchewan's Leading Print Services Provider",
    '/services': 'Comprehensive Print Services in Saskatchewan',
    '/repairs': 'Professional Printer Repair Services in Saskatoon',
    '/managed-print': 'Managed Print Services to Reduce Business Costs',
    '/office-equipment': 'Kyocera Printers and Photocopiers - Authorized Dealer Saskatchewan',
    '/ink-toner': 'Genuine Ink and Toner Supplies for All Major Brands',
    '/lease-rental': 'Flexible Office Equipment Leasing and Rental Options',
    '/brands': 'Authorized Dealer for Major Printer Brands',
    '/it-managed-services': 'Comprehensive IT Managed Services Saskatchewan',
    '/about': 'About Vonex Business Solutions - 20+ Years Experience',
    '/contact': 'Contact Vonex for Expert Print Services',
    '/blog': 'Vonex Print Services Blog - Expert Insights and Tips'
  };
  return altMap[pathname] || 'Vonex Business Solutions - Print Services Saskatchewan';
};

const getOGType = (pathname: string): string => {
  if (pathname.startsWith('/blog/') && pathname !== '/blog') return 'article';
  return 'website';
};

export default MetaTags;