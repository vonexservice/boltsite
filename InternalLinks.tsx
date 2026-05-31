import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const InternalLink: React.FC<InternalLinkProps> = ({
  to,
  children,
  className = "",
  external = false
}) => {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 ${className}`}
      >
        {children}
        <ExternalLink className="h-4 w-4 ml-1" />
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 ml-1" />
    </Link>
  );
};

export default InternalLink;