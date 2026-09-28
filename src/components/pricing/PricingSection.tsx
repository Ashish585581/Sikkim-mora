import React from 'react';
import { routeFares } from '../../data/pricing';
import { FareCard } from './FareCard';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight, Info } from 'lucide-react';
import { navigateTo } from '../../utils/navigation';

export const PricingSection: React.FC = () => {
  // Show only 3 featured fare cards in the homepage preview section
  const featuredFares = routeFares.filter((f) => f.popular);
  const previewFares = featuredFares.length >= 3 ? featuredFares.slice(0, 3) : routeFares.slice(0, 3);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#F7F3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Transparent Rates"
          title="Taxi Fares &amp; Route Pricing"
          subtitle="Clear, upfront pricing with no hidden charges. All rates include dedicated commercial vehicle, experienced mountain driver, and fuel."
        />

        {/* Notice Badge */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#F5E8D0] border border-[#D2A14E]/40 flex items-start sm:items-center gap-3 text-xs text-[#1F2937]">
          <Info className="w-4 h-4 text-[#D2A14E] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="font-bold">Transparent Pricing Policy:</strong> All displayed fares are <em>indicative starting prices</em> for private reserved cabs. Final rates may vary slightly based on seasonal demand and precise hotel drop-offs.
          </p>
        </div>

        {/* Route Fares Grid: 3 Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewFares.map((fare) => (
            <FareCard key={fare.id} fare={fare} />
          ))}
        </div>

        {/* Prominent "Show All Taxi Fares" Button Navigating to /taxi-fares */}
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <button
            type="button"
            onClick={() => navigateTo('/taxi-fares')}
            className="inline-flex items-center justify-center gap-2.5 bg-[#16382C] hover:bg-[#0F261E] text-[#F9F6F0] px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-bold text-sm sm:text-base border border-[#D2A14E]/30 shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer group"
          >
            <span>Show All Taxi Fares</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#D2A14E] group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs sm:text-sm text-[#4B5563] mt-2.5 font-medium">
            Explore complete tariff table for Airport transfers, Gangtok, Darjeeling, Kalimpong, Nathula Pass &amp; per-day rentals
          </p>
        </div>
      </div>
    </section>
  );
};
