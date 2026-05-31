import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getStructuredData } from './structured-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ============================================================
// ROUTE METADATA — every route in App.tsx must appear here
// Title limit: 60 characters
// Description limit: 155 characters
// ============================================================
const routeMetadata = {
  '/': {
    title: 'Vonex | Managed Print & Printer Repair – Saskatchewan',
    description: 'Saskatchewan\'s #1 managed print services, emergency printer repair, and office equipment leasing. Saskatoon, Regina & all SK. Call 306-881-0341.',
    keywords: 'managed print services Saskatchewan, printer repair Saskatoon, office equipment leasing, Kyocera dealer Saskatchewan',
  },
  '/services': {
    title: 'Print & IT Services Saskatchewan | Vonex',
    description: 'Managed print, emergency repairs, equipment leasing, and IT support across Saskatchewan. Authorized Kyocera and HP dealer.',
    keywords: 'print services, IT services Saskatchewan, managed print, printer repair, office equipment',
  },
  '/brands': {
    title: 'Printer Brands We Carry | Kyocera, HP, Lexmark – Vonex',
    description: 'Authorized dealer for Kyocera, HP, Lexmark, Brother, Canon and Xerox. Expert service, sales and support across Saskatchewan.',
    keywords: 'Kyocera Saskatchewan, HP dealer, Lexmark dealer, Brother printers, authorized dealer',
  },
  '/ink-toner': {
    title: 'Printer Ink & Toner Supplies Saskatchewan | Vonex',
    description: 'Genuine OEM and compatible ink and toner cartridges for all major brands. Fast delivery across Saskatchewan. Bulk discounts available.',
    keywords: 'printer ink Saskatchewan, toner cartridges, OEM supplies, printer supplies Saskatoon',
  },
  '/lease-rental': {
    title: 'Printer Lease & Rental Saskatchewan | Vonex',
    description: 'Flexible printer leasing and rental for Saskatchewan businesses. Kyocera and HP equipment, full service included. From $89/month.',
    keywords: 'printer lease Saskatchewan, copier rental, equipment leasing, printer rental Saskatoon',
  },
  '/repairs': {
    title: 'Emergency Printer Repair Saskatchewan | Same-Day',
    description: 'Emergency printer repair with same-business-day response. Certified technicians for Kyocera, HP, Lexmark, Brother across Saskatchewan.',
    keywords: 'emergency printer repair, printer repair Saskatchewan, copier repair Saskatoon, same-day printer service',
  },
  '/managed-print': {
    title: 'Managed Print Services Saskatchewan | Save 20–40%',
    description: 'Fully managed print — Kyocera and HP leasing, auto toner, same-day service, one monthly invoice. Most clients save 20–40%.',
    keywords: 'managed print services, MPS Saskatchewan, print management, cost reduction printing',
  },
  '/office-equipment': {
    title: 'Office Equipment Sales Saskatchewan | Vonex',
    description: 'New and certified refurbished Kyocera, HP, and Lexmark office equipment. Professional installation and training included.',
    keywords: 'office equipment sales, printer sales Saskatchewan, copier sales, refurbished printers',
  },
  '/it-managed-services': {
    title: 'IT Managed Services Saskatchewan | Vonex',
    description: 'Complete IT managed services for Saskatchewan businesses. Network management, cybersecurity, cloud solutions, and 24/7 help desk.',
    keywords: 'IT managed services, IT support Saskatchewan, network management, cybersecurity',
  },

  // FIX: slug is lowercase saskatoon — matches App.tsx router exactly
  '/kyocera-authorized-dealer-saskatoon': {
    title: 'Kyocera Authorized Dealer Saskatoon | Vonex',
    description: 'Official Kyocera authorized dealer in Saskatoon. ECOSYS printers, TASKalfa MFPs, genuine supplies, factory-trained service. Call 306-881-0341.',
    keywords: 'Kyocera dealer Saskatoon, ECOSYS printers, Kyocera Saskatchewan, authorized dealer',
  },
  '/kyocera-managed-print-services-saskatoon': {
    title: 'Kyocera Managed Print Services Saskatoon | Vonex',
    description: 'Kyocera managed print services in Saskatoon — ECOSYS equipment lease, auto toner, same-day service. One predictable monthly cost.',
    keywords: 'Kyocera managed print Saskatoon, Kyocera MPS Saskatchewan, ECOSYS managed print',
  },

  // ── Saskatoon location pages ─────────────────────────────
  '/printer-repair-saskatoon': {
    title: 'Printer Repair Saskatoon | Same-Day | Vonex',
    description: 'Same-business-day printer repair in Saskatoon. Certified technicians for Kyocera, HP, Lexmark, Brother. Call 306-881-0341.',
    keywords: 'printer repair Saskatoon, copier repair Saskatoon, same-day printer service Saskatoon',
  },
  '/copier-service-saskatoon': {
    title: 'Copier Service Saskatoon | Vonex Business Solutions',
    description: 'Professional copier and multifunction printer service in Saskatoon. Preventive maintenance, emergency repairs, all brands.',
    keywords: 'copier service Saskatoon, photocopier repair Saskatoon, MFP service Saskatoon',
  },
  '/hp-printer-service-saskatoon': {
    title: 'HP Printer Service Saskatoon | Authorized | Vonex',
    description: 'Authorized HP printer service and sales in Saskatoon. HP LaserJet repair, supplies, and leasing. Certified technicians. Call 306-881-0341.',
    keywords: 'HP printer service Saskatoon, HP LaserJet repair, HP dealer Saskatoon',
  },
  '/lexmark-printer-service-saskatoon': {
    title: 'Lexmark Printer Service Saskatoon | Vonex',
    description: 'Authorized Lexmark printer service and sales in Saskatoon. Lexmark repair, genuine supplies, and equipment leasing. Call 306-881-0341.',
    keywords: 'Lexmark printer service Saskatoon, Lexmark repair Saskatchewan, Lexmark dealer Saskatoon',
  },
  '/printer-maintenance-contract-saskatoon': {
    title: 'Printer Maintenance Contract Saskatoon | Vonex',
    description: 'Printer maintenance contracts for Saskatoon businesses. Scheduled service, genuine parts, guaranteed response times. Call 306-881-0341.',
    keywords: 'printer maintenance contract Saskatoon, copier maintenance agreement, printer service contract Saskatchewan',
  },

  // ── Regina location pages ────────────────────────────────
  '/printer-repair-regina': {
    title: 'Printer Repair Regina Saskatchewan | Vonex',
    description: 'Professional printer and copier repair in Regina. Certified technicians for all major brands. Fast response. Call 306-881-0341.',
    keywords: 'printer repair Regina, copier repair Regina, printer service Regina Saskatchewan',
  },
  '/copier-service-regina': {
    title: 'Copier Service Regina | Vonex Business Solutions',
    description: 'Professional copier and multifunction printer service in Regina, Saskatchewan. Emergency repairs and preventive maintenance.',
    keywords: 'copier service Regina, photocopier repair Regina, MFP service Regina Saskatchewan',
  },
  '/toner-supplier-regina': {
    title: 'Toner Supplier Regina Saskatchewan | Vonex',
    description: 'Genuine OEM and compatible toner cartridges delivered to Regina businesses. All major brands. Free delivery on orders over $100.',
    keywords: 'toner supplier Regina, toner cartridges Regina, printer supplies Regina Saskatchewan',
  },

  // ── About / contact ──────────────────────────────────────
  '/about': {
    title: 'About Vonex | Saskatchewan Print & IT Since 2004',
    description: 'Vonex Business Solutions has served Saskatchewan businesses since 2004. Family-owned, locally operated, committed to same-day service.',
    keywords: 'Vonex Business Solutions, about Vonex, Saskatchewan print services, IT services company',
  },
  '/contact': {
    title: 'Contact Vonex | Saskatoon | 306-881-0341',
    description: 'Contact Vonex Business Solutions in Saskatoon. Call 306-881-0341, email info@vonex.ca, or request a free print assessment.',
    keywords: 'contact Vonex, Saskatoon office, printer repair contact, IT support Saskatchewan',
  },

  // ── Blog ─────────────────────────────────────────────────
  '/blog': {
    title: 'Managed Print & IT Blog | Vonex Saskatchewan',
    description: 'Expert guides on managed print services, printer maintenance, equipment leasing, and IT solutions for Saskatchewan businesses.',
    keywords: 'print services blog, IT blog, printer tips, managed print advice Saskatchewan',
  },
  '/blog/signs-business-needs-managed-print-services': {
    title: '5 Signs Your Business Needs Managed Print | Vonex',
    description: 'Discover the warning signs your business is overspending on printing and how managed print services can cut costs by 20–40%.',
    keywords: 'managed print services, business printing costs, print management Saskatchewan',
  },
  '/blog/emergency-printer-repair-guide': {
    title: 'Emergency Printer Repair: What to Do | Vonex Blog',
    description: 'Printer down? Step-by-step guide for handling printer emergencies — quick fixes to try and when to call a certified technician.',
    keywords: 'printer repair guide, emergency printer repair, printer troubleshooting Saskatchewan',
  },
  '/blog/law-firm-printer-leasing-managed-print': {
    title: 'Law Firm Printer Leasing & Managed Print | Vonex',
    description: 'Why Saskatchewan law firms overpay for printing — and how managed print with secure release and auto toner fixes it fast.',
    keywords: 'law firm printer leasing, managed print law firms, secure print release Saskatchewan',
  },
  '/blog/medical-clinic-printer-leasing-managed-print': {
    title: 'Medical Clinic Printer Leasing Saskatchewan | Vonex',
    description: 'PHIPA-compliant managed print services for Saskatchewan medical clinics — secure print release, auto toner, same-day service.',
    keywords: 'medical clinic printer, PHIPA compliant printing, managed print healthcare Saskatchewan',
  },
  '/blog/smb-printer-leasing-managed-print-guide': {
    title: 'SMB Managed Print Guide: Stop Printer Problems | Vonex',
    description: 'The Saskatchewan small business owner\'s guide to ending printer problems for good — leasing, managed print, and toner explained.',
    keywords: 'SMB printer leasing, small business managed print, printer guide Saskatchewan',
  },
  '/blog/konica-minolta-vs-hp-printer-comparison': {
    title: 'Konica Minolta vs HP for Business 2026 | Vonex',
    description: 'Head-to-head comparison of Konica Minolta and HP business printers for Saskatchewan businesses.',
    keywords: 'Konica Minolta vs HP, printer comparison, business printers Saskatchewan',
  },
  '/blog/reduce-printing-costs-saskatchewan-business': {
    title: 'Reduce Business Printing Costs Saskatchewan | Vonex',
    description: 'Proven strategies to cut printing costs by 20–40%. Expert tips on print management, toner supply, and equipment selection.',
    keywords: 'reduce printing costs, cost savings printing, print management Saskatchewan',
  },
  '/blog/complete-printer-maintenance-guide': {
    title: 'Printer Maintenance Guide: Extend Equipment Life',
    description: 'Essential printer maintenance tips to prevent breakdowns, extend equipment life, and maintain print quality.',
    keywords: 'printer maintenance, preventive maintenance, printer cleaning guide',
  },
  '/blog/toner-vs-ink-business-guide': {
    title: 'Toner vs Ink for Business: Complete Guide | Vonex',
    description: 'Toner or ink — which costs less for your business? Cost analysis and recommendations for Saskatchewan offices.',
    keywords: 'toner vs ink, printer supplies comparison, business printing costs',
  },
};

// ============================================================
// BUILD
// ============================================================
const routes = Object.keys(routeMetadata);
const distPath = join(__dirname, 'dist');
const templatePath = join(distPath, 'index.html');
let template = readFileSync(templatePath, 'utf-8');

// Strip any static JSON-LD baked into index.html to prevent duplicate schemas
template = template.replace(
  /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g,
  ''
);

console.log('🚀 Starting pre-rendering...\n');

routes.forEach(route => {
  try {
    const isHome = route === '/';
    const fullPath = join(distPath, route);
    const dir = isHome ? distPath : fullPath;

    if (!isHome && !existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    const filePath = join(dir, 'index.html');
    const metadata = routeMetadata[route];
    const canonicalUrl = `https://vonex.ca${route}`;
    let html = template;

    // Title
    html = html.replace(/<title>.*?<\/title>/s, `<title>${metadata.title}</title>`);

    // Meta description
    if (html.includes('<meta name="description"')) {
      html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${metadata.description}"`);
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${metadata.description}">\n</head>`);
    }

    // Meta keywords
    if (html.includes('<meta name="keywords"')) {
      html = html.replace(/<meta name="keywords" content="[^"]*"/, `<meta name="keywords" content="${metadata.keywords}"`);
    } else {
      html = html.replace('</head>', `  <meta name="keywords" content="${metadata.keywords}">\n</head>`);
    }

    // Canonical
    if (html.includes('<link rel="canonical"')) {
      html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${canonicalUrl}"`);
    } else {
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}">\n</head>`);
    }

    // Open Graph
    const ogImage = 'https://vonex.ca/og-image.png';
    const ogTags = `  <meta property="og:title" content="${metadata.title}">
  <meta property="og:description" content="${metadata.description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Vonex Business Solutions">
  <meta property="og:locale" content="en_CA">
`;

    // Twitter / X
    const twitterTags = `  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${metadata.title}">
  <meta name="twitter:description" content="${metadata.description}">
  <meta name="twitter:image" content="${ogImage}">
`;

    const robotsMeta = `  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">\n`;

    // Structured data
    const structuredData = getStructuredData(route);
    const structuredDataScript = `  <script type="application/ld+json">\n${JSON.stringify(structuredData, null, 2)}\n  </script>\n`;

    html = html.replace('</head>', `${ogTags}${twitterTags}${robotsMeta}${structuredDataScript}</head>`);

    writeFileSync(filePath, html, 'utf-8');
    console.log(`✅  ${route}`);
  } catch (err) {
    console.error(`❌  ${route}: ${err.message}`);
  }
});

console.log(`\n✨ Done — ${routes.length} pages pre-rendered.`);