import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import MetaTags from './components/MetaTags';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';

// Import all page components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BrandsPage from './pages/BrandsPage';
import InkTonerPage from './pages/InkTonerPage';
import LeaseRentalPage from './pages/LeaseRentalPage';
import RepairsPage from './pages/RepairsPage';
import ManagedPrintPage from './pages/ManagedPrintPage';
import OfficeEquipmentPage from './pages/OfficeEquipmentPage';
import ITManagedServicesPage from './pages/ITManagedServicesPage';
import KyoceraAuthorizedDealerPage from './pages/KyoceraAuthorizedDealerPage';
import KyoceraManagedPrint from './pages/KyoceraManagedPrint';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';
import PrinterRepairReginaPage from './pages/PrinterRepairReginaPage';
import CopierServiceReginaPage from './pages/CopierServiceReginaPage';
import TonerSupplierReginaPage from './pages/TonerSupplierReginaPage';
import SaskatoonHpService from './pages/SaskatoonHpService';
import SaskatoonLexmarkService from './pages/SaskatoonLexmarkService';
import PrinterRepairSaskatoonPage from './pages/PrinterRepairSaskatoonPage';
import CopierServiceSaskatoonPage from './pages/CopierServiceSaskatoonPage';
import PrinterMaintenanceContractPage from './pages/PrinterMaintenanceContractPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <ScrollToTop />
          <MetaTags />
          <Header />
          <Breadcrumbs />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/brands" element={<BrandsPage />} />
              <Route path="/ink-toner" element={<InkTonerPage />} />
              <Route path="/lease-rental" element={<LeaseRentalPage />} />
              <Route path="/repairs" element={<RepairsPage />} />
              <Route path="/managed-print" element={<ManagedPrintPage />} />
              <Route path="/office-equipment" element={<OfficeEquipmentPage />} />
              <Route path="/it-managed-services" element={<ITManagedServicesPage />} />
              <Route path="/kyocera-authorized-dealer-saskatoon" element={<KyoceraAuthorizedDealerPage />} />
              <Route path="/kyocera-managed-print-services-saskatoon" element={<KyoceraManagedPrint />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/lexmark-printer-service-saskatoon" element={<SaskatoonLexmarkService />} />
              <Route path="/printer-repair-regina" element={<PrinterRepairReginaPage />} />
              <Route path="/copier-service-regina" element={<CopierServiceReginaPage />} />
              <Route path="/toner-supplier-regina" element={<TonerSupplierReginaPage />} />
              <Route path="/hp-printer-service-saskatoon" element={<SaskatoonHpService />} />
              <Route path="/printer-repair-saskatoon" element={<PrinterRepairSaskatoonPage />} />
              <Route path="/copier-service-saskatoon" element={<CopierServiceSaskatoonPage />} />
              <Route path="/printer-maintenance-contract-saskatoon" element={<PrinterMaintenanceContractPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;