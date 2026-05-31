import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' }
  ];

  // Build breadcrumb trail
  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbItems.push({
      label: formatBreadcrumbLabel(segment),
      path: currentPath
    });
  });

  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://vonex.ca${item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              const isFirst = index === 0;

              return (
                <li key={item.path} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                  )}

                  {isLast ? (
                    <span
                      className="text-gray-700 font-medium flex items-center"
                      aria-current="page"
                    >
                      {isFirst && <Home className="w-4 h-4 mr-1" />}
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-blue-600 hover:text-blue-800 transition-colors flex items-center hover:underline"
                    >
                      {isFirst && <Home className="w-4 h-4 mr-1" />}
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

function formatBreadcrumbLabel(segment: string): string {
  // Handle special cases
  const labelMap: Record<string, string> = {
    'services': 'Services',
    'repairs': 'Printer Repair',
    'managed-print': 'Managed Print Services',
    'office-equipment': 'Office Equipment',
    'ink-toner': 'Ink & Toner',
    'lease-rental': 'Lease & Rental',
    'brands': 'Brands We Work With',
    'it-managed-services': 'IT Managed Services',
    'about': 'About Us',
    'contact': 'Contact',
    'blog': 'Blog',
    'emergency-printer-repair-guide': 'Emergency Printer Repair Guide',
    'signs-business-needs-managed-print-services': 'Signs Your Business Needs Managed Print',
    'konica-minolta-vs-hp-printer-comparison': 'Konica Minolta vs HP Comparison',
    'reduce-printing-costs-saskatchewan-business': 'Reduce Printing Costs Guide',
    'complete-printer-maintenance-guide': 'Complete Printer Maintenance Guide',
    'toner-vs-ink-business-guide': 'Toner vs Ink Guide'
  };

  if (labelMap[segment]) {
    return labelMap[segment];
  }

  // Default formatting: replace hyphens with spaces and capitalize
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default Breadcrumbs;
