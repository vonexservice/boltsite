import React from 'react';
import BrandsWeWorkWith from '../components/BrandsWeWorkWith';
import PrinterBrands from '../components/PrinterBrands';

export default function BrandsPage() {
  return (
    <div className="min-h-screen pt-32">
      <BrandsWeWorkWith />
      <PrinterBrands />
    </div>
  );
}