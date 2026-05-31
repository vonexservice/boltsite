import React from 'react';
import About from '../components/About';
import ServiceArea from '../components/ServiceArea';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      <About />
      <ServiceArea />
      <Testimonials />
    </div>
  );
}