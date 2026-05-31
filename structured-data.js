// Structured data for SEO, GEO, and AEO optimization
// All schemas are injected per-page via prerender.js.
// The JSON-LD blocks in index.html have been removed to prevent duplicates.

const baseOrganization = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vonex.ca/#organization",
  "name": "Vonex Business Solutions",
  "alternateName": ["Vonex", "Vonex Saskatoon"],
  "description": "Saskatchewan's leading provider of managed print services, emergency printer repair, office equipment leasing, and IT solutions. Serving Saskatoon, Regina, Prince Albert and all of Saskatchewan since 2004.",
  "url": "https://vonex.ca",
  "logo": {
    "@type": "ImageObject",
    "url": "https://vonex.ca/8.png",
    "width": 600,
    "height": 200
  },
  "image": [
    "https://vonex.ca/og-image.png",
    "https://vonex.ca/8.png"
  ],
  "telephone": "+1-306-881-0341",
  "email": "info@vonex.ca",
  "foundingDate": "2004",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "111 2nd Avenue South, Unit 400",
    "addressLocality": "Saskatoon",
    "addressRegion": "SK",
    "postalCode": "S7K 1K6",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.1332,
    "longitude": -106.6700
  },
  "areaServed": [
    { "@type": "City",  "name": "Saskatoon",     "sameAs": "https://en.wikipedia.org/wiki/Saskatoon" },
    { "@type": "City",  "name": "Regina",        "sameAs": "https://en.wikipedia.org/wiki/Regina,_Saskatchewan" },
    { "@type": "City",  "name": "Prince Albert" },
    { "@type": "City",  "name": "Moose Jaw" },
    { "@type": "City",  "name": "Swift Current" },
    { "@type": "State", "name": "Saskatchewan",  "sameAs": "https://en.wikipedia.org/wiki/Saskatchewan" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.9,
    "reviewCount": 150,
    "bestRating": 5,
    "worstRating": 1
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
      "author": { "@type": "Person", "name": "Sarah M." },
      "reviewBody": "Outstanding service! They got our printer back online within 2 hours. Highly professional team.",
      "datePublished": "2024-10-15"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
      "author": { "@type": "Person", "name": "David L." },
      "reviewBody": "Best managed print services in Saskatchewan. Reduced our printing costs by 30% in the first year.",
      "datePublished": "2024-09-22"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/VonexBusinessSolutions",
    "https://ca.linkedin.com/company/business-solu",
    "https://twitter.com/vonexbusiness"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Print and IT Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Printer Repair",
          "description": "Same-business-day emergency printer repair by certified technicians throughout Saskatchewan."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Managed Print Services",
          "description": "Fully managed print — Kyocera and HP leasing, auto toner, same-day service, one monthly invoice."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kyocera Equipment Leasing",
          "description": "36 and 60 month leases on Kyocera ECOSYS and TASKalfa multifunction devices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IT Managed Services",
          "description": "Network management, cybersecurity, cloud solutions and 24/7 help desk for Saskatchewan businesses."
        }
      }
    ]
  }
};

// ─────────────────────────────────────────────────────────────
// BREADCRUMB
// ─────────────────────────────────────────────────────────────
const getBreadcrumb = (pathname) => {
  const pathParts = pathname.split('/').filter(Boolean);

  // FIX: Key uses lowercase for case-insensitive matching — the lookup
  // below normalises with .toLowerCase() so the capital-S in
  // /kyocera-authorized-dealer-Saskatchewan resolves correctly.
  const pathMap = {
    'services':                               'Services',
    'brands':                                 'Brands We Service',
    'ink-toner':                              'Ink & Toner Supplies',
    'lease-rental':                           'Lease & Rental',
    'repairs':                                'Emergency Printer Repair',
    'managed-print':                          'Managed Print Services',
    'office-equipment':                       'Office Equipment Sales',
    'it-managed-services':                    'IT Managed Services',
    'kyocera-authorized-dealer-saskatchewan': 'Kyocera Authorized Dealer',
    'kyocera-products':                       'Kyocera Products',
    'about':                                  'About Us',
    'contact':                                'Contact',
    'blog':                                   'Blog'
  };

  const breadcrumbList = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vonex.ca" }
  ];

  let currentPath = 'https://vonex.ca';
  pathParts.forEach((part, index) => {
    currentPath += `/${part}`;
    breadcrumbList.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": pathMap[part.toLowerCase()] || part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      "item": currentPath
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList
  };
};

// ─────────────────────────────────────────────────────────────
// FAQ SCHEMAS
// NOTE: Homepage FAQPage is defined in index.html structured data
// and must NOT be duplicated here — prerender.js strips index.html
// JSON-LD and re-injects per-page, so homepage FAQ goes here too.
// ─────────────────────────────────────────────────────────────
const getFAQSchema = (pathname) => {
  const faqs = {
    '/': [
      {
        question: "What services does Vonex Business Solutions offer?",
        answer: "Vonex provides managed print services, emergency printer repair, Kyocera and HP equipment leasing, ink and toner supplies, and IT managed services. We serve all of Saskatchewan including Saskatoon, Regina, Prince Albert, and Moose Jaw."
      },
      {
        question: "What areas does Vonex serve?",
        answer: "We serve all of Saskatchewan including Saskatoon, Regina, Prince Albert, Moose Jaw, Swift Current, and Yorkton, with 24/7 emergency service throughout the province."
      },
      {
        question: "What printer brands does Vonex sell and service?",
        answer: "We are an authorized dealer and certified service provider for Kyocera, HP, Lexmark, Brother, Canon, and Xerox printers and multifunction devices."
      },
      {
        question: "How quickly can Vonex respond to printer emergencies?",
        answer: "Vonex offers same-business-day on-site response for hardware faults under a managed print agreement. Remote diagnostics are available 24/7. Call 306-881-0341."
      }
    ],
    '/repairs': [
      {
        question: "What is included in emergency printer repair service?",
        answer: "Our emergency repair includes diagnostic assessment, on-site repair by certified technicians, genuine replacement parts, and a 90-day warranty on parts and labor. We service Kyocera, HP, Lexmark, Brother, Canon, Xerox, and Konica Minolta."
      },
      {
        question: "How much does emergency printer repair cost in Saskatchewan?",
        answer: "Repair costs vary based on the issue and equipment. We provide upfront quotes after diagnosis with no hidden fees. Many repairs are covered under existing service contracts or manufacturer warranties."
      },
      {
        question: "Can you repair printers from any brand?",
        answer: "Yes, our certified technicians are trained on all major printer brands including Kyocera, HP, Lexmark, Brother, Canon, Xerox, and Konica Minolta. We carry common parts for quick repairs and source specialized components as needed."
      },
      {
        question: "Do you offer preventive maintenance to avoid emergencies?",
        answer: "Yes, our managed print services include preventive maintenance with regular cleaning, parts replacement, firmware updates, and remote monitoring to prevent most emergency situations."
      }
    ],
    '/managed-print': [
      {
        question: "What is managed print services and how does it work?",
        answer: "Managed print services (MPS) is a comprehensive solution where we monitor, maintain, and optimize your entire print infrastructure. This includes automatic supply replenishment, preventive maintenance, remote monitoring, usage tracking, and cost optimization. Most businesses reduce printing costs by 20–40%."
      },
      {
        question: "How much can I save with managed print services?",
        answer: "Most Saskatchewan businesses reduce printing costs by 20–40% in the first year. Savings come from optimized device placement, reduced supply waste, preventive maintenance, and one consolidated monthly invoice."
      },
      {
        question: "What is included in managed print services?",
        answer: "Our MPS includes remote monitoring, automatic toner and supply delivery, all maintenance and repairs, genuine replacement parts, technical support, detailed usage reporting, and cost-per-page billing."
      },
      {
        question: "Is there a contract commitment for managed print services?",
        answer: "We offer flexible contract terms. Most clients choose 36 or 60 month agreements for optimal cost savings, but we can accommodate shorter terms and custom arrangements."
      }
    ],
    '/office-equipment': [
      {
        question: "Do you sell new or refurbished office equipment?",
        answer: "We sell both new and certified refurbished equipment. Refurbished devices undergo rigorous testing and reconditioning, come with warranty coverage, and offer significant cost savings."
      },
      {
        question: "What brands of office equipment do you sell?",
        answer: "As authorized dealers, we sell Kyocera, HP, Lexmark, Brother, Canon, Xerox, and Konica Minolta equipment. We recommend the best solution based on your volume requirements and budget."
      },
      {
        question: "Do you provide installation and training?",
        answer: "Yes, all equipment purchases include professional installation, network setup, staff training, and ongoing technical support."
      },
      {
        question: "Can I lease equipment instead of purchasing?",
        answer: "Yes, we offer flexible leasing with 36 and 60 month terms. Leasing provides predictable monthly costs, includes maintenance and supplies, and allows easy upgrades."
      }
    ],
    '/it-managed-services': [
      {
        question: "What IT services does Vonex provide?",
        answer: "We provide comprehensive IT managed services including network management, cybersecurity, cloud solutions, data backup and recovery, technical support, remote monitoring, and IT infrastructure planning for Saskatchewan businesses."
      },
      {
        question: "How does IT managed services pricing work?",
        answer: "We offer flexible pricing including per-user monthly plans, per-device plans, and custom packages. Pricing includes all monitoring, maintenance, support, and security services with predictable monthly costs."
      },
      {
        question: "Do you provide cybersecurity services?",
        answer: "Yes, cybersecurity is a core component of our IT managed services. We provide firewall management, threat detection and response, security audits, employee training, data encryption, and compliance support."
      },
      {
        question: "Can you support remote and hybrid workforces?",
        answer: "Yes. We specialize in supporting distributed teams with secure remote access, cloud collaboration tools, VPN setup, and mobile device management."
      }
    ],
    // FIX: Key uses exact case to match the route — lookup is done with
    // pathname directly (no toLowerCase) for service/FAQ schemas.
    '/kyocera-authorized-dealer-saskatoon': [
      {
        question: "Is Vonex an authorized Kyocera dealer in Saskatchewan?",
        answer: "Yes, Vonex Business Solutions is an official Kyocera authorized dealer in Saskatoon, Saskatchewan. We carry the full Kyocera ECOSYS and TASKalfa lineup, genuine supplies, and provide factory-trained service throughout Saskatchewan."
      },
      {
        question: "What Kyocera products does Vonex sell?",
        answer: "We sell Kyocera ECOSYS color and monochrome printers, TASKalfa multifunction devices, and production systems. Contact us at 306-881-0341 to schedule a demo or get a quote."
      },
      {
        question: "Does Vonex service Kyocera printers?",
        answer: "Yes, our technicians are factory-trained on Kyocera equipment. We provide preventive maintenance, emergency repairs, genuine parts, and supplies for all Kyocera devices throughout Saskatchewan."
      }
    ],
    '/blog': [
      {
        question: "How often does Vonex publish new blog content?",
        answer: "We regularly publish expert insights on managed print services, printer maintenance, cost reduction strategies, and IT solutions relevant to Saskatchewan businesses."
      },
      {
        question: "Can I request specific topics for blog posts?",
        answer: "Yes. Contact us at info@vonex.ca with your questions or topic suggestions and we'll consider them for future content."
      }
    ]
  };

  const questions = faqs[pathname];
  if (!questions) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };
};

// ─────────────────────────────────────────────────────────────
// SERVICE SCHEMAS
// FIX: Removed @context from nested schemas — when wrapped in
// @graph by getStructuredData(), nested @context is invalid and
// causes schema.org validation errors.
// ─────────────────────────────────────────────────────────────
const getServiceSchema = (pathname) => {
  const services = {
    '/repairs': {
      "@type": "Service",
      "serviceType": "Emergency Printer Repair",
      "name": "Emergency Printer Repair Saskatchewan",
      "provider": { "@id": "https://vonex.ca/#organization" },
      "areaServed": { "@type": "State", "name": "Saskatchewan" },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://vonex.ca/repairs",
        "servicePhone": "+1-306-881-0341"
      },
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    },
    '/managed-print': {
      "@type": "Service",
      "serviceType": "Managed Print Services",
      "name": "Managed Print Services Saskatchewan",
      "provider": { "@id": "https://vonex.ca/#organization" },
      "areaServed": { "@type": "State", "name": "Saskatchewan" },
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
    },
    '/it-managed-services': {
      "@type": "Service",
      "serviceType": "IT Managed Services",
      "name": "IT Managed Services Saskatchewan",
      "provider": { "@id": "https://vonex.ca/#organization" },
      "areaServed": { "@type": "State", "name": "Saskatchewan" }
    },
    '/kyocera-authorized-dealer-saskatoon': {
      "@type": "Service",
      "serviceType": "Kyocera Authorized Dealer",
      "name": "Kyocera Authorized Dealer Saskatoon",
      "provider": { "@id": "https://vonex.ca/#organization" },
      "areaServed": { "@type": "State", "name": "Saskatchewan" },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://vonex.ca/kyocera-authorized-dealer-saskatoon",
        "servicePhone": "+1-306-881-0341"
      }
    },
    '/office-equipment': {
      "@type": "Service",
      "serviceType": "Office Equipment Sales",
      "name": "Office Equipment Sales Saskatchewan",
      "provider": { "@id": "https://vonex.ca/#organization" },
      "areaServed": { "@type": "State", "name": "Saskatchewan" },
      "url": "https://vonex.ca/office-equipment"
    },
    '/lease-rental': {
      "@type": "Service",
      "serviceType": "Printer Leasing",
      "name": "Printer Lease & Rental Saskatchewan",
      "provider": { "@id": "https://vonex.ca/#organization" },
      "areaServed": { "@type": "State", "name": "Saskatchewan" },
      "url": "https://vonex.ca/lease-rental"
    },
    '/ink-toner': {
      "@type": "Service",
      "serviceType": "Toner Supply",
      "name": "Printer Ink & Toner Supplies Saskatchewan",
      "provider": { "@id": "https://vonex.ca/#organization" },
      "areaServed": { "@type": "State", "name": "Saskatchewan" },
      "url": "https://vonex.ca/ink-toner"
    }
  };

  return services[pathname] || null;
};

// ─────────────────────────────────────────────────────────────
// HOW-TO SCHEMAS
// FIX: Removed @context — same reason as service schemas above.
// ─────────────────────────────────────────────────────────────
const getHowToSchema = (pathname) => {
  if (pathname === '/blog/emergency-printer-repair-guide') {
    return {
      "@type": "HowTo",
      "name": "How to Handle a Printer Emergency",
      "description": "Step-by-step guide to troubleshooting common printer emergencies before calling for repair.",
      "totalTime": "PT10M",
      "tool": [{ "@type": "HowToTool", "name": "Clean, lint-free cloth" }],
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Check power and connections", "text": "Verify the printer is plugged in and powered on. Check all cable connections including power, USB, and network." },
        { "@type": "HowToStep", "position": 2, "name": "Clear paper jams",            "text": "Open all access panels and carefully remove stuck paper. Pull in the direction of paper flow to avoid damage." },
        { "@type": "HowToStep", "position": 3, "name": "Note error messages",         "text": "Record any error codes shown on the display. These help technicians diagnose the issue faster." },
        { "@type": "HowToStep", "position": 4, "name": "Restart the printer",         "text": "Turn off the printer, wait 30 seconds, then power it back on. This clears many temporary faults." },
        { "@type": "HowToStep", "position": 5, "name": "Call for professional repair", "text": "If the issue persists, contact Vonex at 306-881-0341 for same-business-day repair service." }
      ]
    };
  }

  if (pathname === '/blog/complete-printer-maintenance-guide') {
    return {
      "@type": "HowTo",
      "name": "Complete Office Printer Maintenance Guide",
      "description": "How to maintain your office printer to prevent breakdowns and extend equipment life.",
      "totalTime": "PT30M",
      "tool": [
        { "@type": "HowToTool", "name": "Microfiber cloth" },
        { "@type": "HowToTool", "name": "Compressed air" },
        { "@type": "HowToTool", "name": "Isopropyl alcohol" }
      ],
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Clean exterior surfaces", "text": "Wipe down all exterior surfaces with a microfiber cloth. Use isopropyl alcohol for stubborn marks." },
        { "@type": "HowToStep", "position": 2, "name": "Clean the paper path",   "text": "Use compressed air to remove dust from the paper path and rollers. Wipe rollers with a lint-free cloth." },
        { "@type": "HowToStep", "position": 3, "name": "Check supply levels",    "text": "Monitor toner or ink levels and order replacements before running out to avoid work interruptions." },
        { "@type": "HowToStep", "position": 4, "name": "Update firmware",        "text": "Check for and install firmware updates to ensure optimal performance and security patches." },
        { "@type": "HowToStep", "position": 5, "name": "Schedule professional service", "text": "Contact Vonex for annual professional maintenance including internal cleaning, parts inspection, and calibration." }
      ]
    };
  }

  return null;
};

// ─────────────────────────────────────────────────────────────
// ARTICLE SCHEMAS
// FIX: Removed @context from all — nested in @graph.
// Added missing blog posts: law-firm, medical-clinic, smb-guide.
// Updated dateModified to 2026-05-09 for all to reflect recent changes.
// ─────────────────────────────────────────────────────────────
const getArticleSchema = (pathname) => {
  const publisher = {
    "@type": "Organization",
    "name": "Vonex Business Solutions",
    "logo": { "@type": "ImageObject", "url": "https://vonex.ca/8.png" }
  };

  const articles = {
    '/blog/signs-business-needs-managed-print-services': {
      "@type": "Article",
      "headline": "5 Signs Your Business Needs Managed Print Services",
      "description": "Discover the warning signs your business is overspending on printing and how managed print services can cut costs by 20–40%.",
      "image": "https://vonex.ca/og-image.png",
      "author": { "@type": "Organization", "name": "Vonex Business Solutions" },
      "publisher": publisher,
      "datePublished": "2024-01-15",
      "dateModified": "2026-05-09"
    },
    '/blog/emergency-printer-repair-guide': {
      "@type": "Article",
      "headline": "Emergency Printer Repair: What to Do When Your Printer Fails",
      "description": "Complete guide to handling printer emergencies — quick fixes to try first and when to call a certified technician in Saskatchewan.",
      "image": "https://vonex.ca/og-image.png",
      "author": { "@type": "Organization", "name": "Vonex Business Solutions" },
      "publisher": publisher,
      "datePublished": "2024-02-20",
      "dateModified": "2026-05-09"
    },
    '/blog/law-firm-printer-leasing-managed-print': {
      "@type": "Article",
      "headline": "Why Law Firms Are Overpaying for Printing (And How to Fix It Fast)",
      "description": "Saskatchewan law firms spend more than necessary on printing. Managed print with secure release and auto toner fixes it quickly.",
      "image": "https://vonex.ca/og-image.png",
      "author": { "@type": "Organization", "name": "Vonex Business Solutions" },
      "publisher": publisher,
      "datePublished": "2024-07-10",
      "dateModified": "2026-05-09"
    },
    '/blog/medical-clinic-printer-leasing-managed-print': {
      "@type": "Article",
      "headline": "Medical Clinics: Is Your Printer Putting You at Risk?",
      "description": "PHIPA-compliant managed print services for Saskatchewan medical clinics — secure print release, auto toner, same-day service.",
      "image": "https://vonex.ca/og-image.png",
      "author": { "@type": "Organization", "name": "Vonex Business Solutions" },
      "publisher": publisher,
      "datePublished": "2024-08-05",
      "dateModified": "2026-05-09"
    },
    '/blog/smb-printer-leasing-managed-print-guide': {
      "@type": "Article",
      "headline": "The SMB Owner's Guide to Stopping Printer Problems for Good",
      "description": "A practical guide for Saskatchewan small business owners on ending printer problems through leasing and managed print services.",
      "image": "https://vonex.ca/og-image.png",
      "author": { "@type": "Organization", "name": "Vonex Business Solutions" },
      "publisher": publisher,
      "datePublished": "2024-09-12",
      "dateModified": "2026-05-09"
    },
    '/blog/konica-minolta-vs-hp-printer-comparison': {
      "@type": "Article",
      "headline": "Konica Minolta vs HP for Business 2026",
      "description": "Head-to-head comparison of Konica Minolta and HP business printers — cost per page, reliability, and support for Saskatchewan businesses.",
      "image": "https://vonex.ca/og-image.png",
      "author": { "@type": "Organization", "name": "Vonex Business Solutions" },
      "publisher": publisher,
      "datePublished": "2024-03-10",
      "dateModified": "2026-05-09"
    },
    '/blog/reduce-printing-costs-saskatchewan-business': {
      "@type": "Article",
      "headline": "How to Reduce Printing Costs for Saskatchewan Businesses",
      "description": "Proven strategies to cut printing costs by 20–40%. Expert tips on print management, toner supply, and equipment selection.",
      "image": "https://vonex.ca/og-image.png",
      "author": { "@type": "Organization", "name": "Vonex Business Solutions" },
      "publisher": publisher,
      "datePublished": "2024-04-05",
      "dateModified": "2026-05-09"
    },
    '/blog/complete-printer-maintenance-guide': {
      "@type": "Article",
      "headline": "Complete Printer Maintenance Guide: Extend Equipment Life",
      "description": "Essential printer maintenance tips to prevent breakdowns, extend equipment life, and maintain print quality.",
      "image": "https://vonex.ca/og-image.png",
      "author": { "@type": "Organization", "name": "Vonex Business Solutions" },
      "publisher": publisher,
      "datePublished": "2024-05-12",
      "dateModified": "2026-05-09"
    },
    '/blog/toner-vs-ink-business-guide': {
      "@type": "Article",
      "headline": "Toner vs Ink for Business: Complete Guide",
      "description": "Toner or ink — which costs less for your business? Cost analysis, print quality, and recommendations for Saskatchewan offices.",
      "image": "https://vonex.ca/og-image.png",
      "author": { "@type": "Organization", "name": "Vonex Business Solutions" },
      "publisher": publisher,
      "datePublished": "2024-06-18",
      "dateModified": "2026-05-09"
    }
  };

  return articles[pathname] || null;
};

// ─────────────────────────────────────────────────────────────
// MAIN EXPORT
// Assembles all applicable schemas for a given pathname into a
// single @graph block to avoid multiple top-level @context entries,
// which cause validation errors.
// ─────────────────────────────────────────────────────────────
export const getStructuredData = (pathname) => {
  const schemas = [baseOrganization];

  if (pathname !== '/') {
    schemas.push(getBreadcrumb(pathname));
  }

  const faq     = getFAQSchema(pathname);
  const service = getServiceSchema(pathname);
  const howTo   = getHowToSchema(pathname);
  const article = getArticleSchema(pathname);

  if (faq)     schemas.push(faq);
  if (service) schemas.push(service);
  if (howTo)   schemas.push(howTo);
  if (article) schemas.push(article);

  if (schemas.length > 1) {
    return {
      "@context": "https://schema.org",
      "@graph": schemas
    };
  }

  return schemas[0];
};