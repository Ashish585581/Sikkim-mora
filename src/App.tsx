import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/hero/Hero';
import { QuickHighlights } from './components/trust/QuickHighlights';
import { CarsSection } from './components/cars/CarsSection';
import { ServicesSection } from './components/services/ServicesSection';
import { PricingSection } from './components/pricing/PricingSection';
import { DestinationsSection } from './components/destinations/DestinationsSection';
import { PackagesSection } from './components/packages/PackagesSection';
import { WhyChooseUs } from './components/trust/WhyChooseUs';
import { Testimonials } from './components/trust/Testimonials';
import { FAQSection } from './components/trust/FAQSection';
import { FinalWhatsAppCTA } from './components/cta/FinalWhatsAppCTA';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import type { Vehicle } from './data/vehicles';
import { CarDetailModal } from './components/cars/CarDetailModal';

export function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#1F2937] flex flex-col font-sans">
      {/* 1. Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section (Headline, Vehicle Slider, & WhatsApp Booking Form) */}
        <Hero onSelectVehicle={(v) => setSelectedVehicle(v)} />

        {/* 3. Quick Service Highlights (5-item trust strip) */}
        <QuickHighlights />

        {/* 4. Our Cars Section */}
        <CarsSection
          selectedVehicleModal={selectedVehicle}
          onCloseVehicleModal={() => setSelectedVehicle(null)}
          onSelectVehicle={(v) => setSelectedVehicle(v)}
        />

        {/* 5. Services Section (7 core taxi services) */}
        <ServicesSection />

        {/* 6. Taxi Fare / Pricing Section */}
        <PricingSection />

        {/* 7. Popular Destinations Section */}
        <DestinationsSection />

        {/* 8. Travel Packages Section */}
        <PackagesSection />

        {/* 9. Why Choose Us (Trust pillars & stats) */}
        <WhyChooseUs />

        {/* 10. Customer Testimonials */}
        <Testimonials />

        {/* 11. FAQ Accordion */}
        <FAQSection />

        {/* 12. Final WhatsApp CTA Banner */}
        <FinalWhatsAppCTA />
      </main>

      {/* 13. Comprehensive Footer */}
      <Footer />

      {/* Floating Action WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Global Vehicle Details Modal if triggered */}
      {selectedVehicle && (
        <CarDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
}

export default App;
