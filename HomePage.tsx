import React from 'react';
import SEOOptimizedHero from '../components/SEOOptimizedHero';
import BlogSection from '../components/BlogSection';
import IndustriesWeServe from '../components/IndustriesWeServe';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SEOOptimizedHero />
      <IndustriesWeServe />
      <BlogSection />
    </div>
  );
}