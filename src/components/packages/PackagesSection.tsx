import React from 'react';
import { travelPackages } from '../../data/packages';
import { PackageCard } from './PackageCard';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { navigateTo } from '../../utils/navigation';

export const PackagesSection: React.FC = () => {
  // Show only 3 packages in the homepage packages preview section
  const previewPackages = travelPackages.slice(0, 3);

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#F7F3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Himalayan Itineraries"
          title="Curated Travel Packages"
          subtitle="Fixed-fare and custom road trip packages crafted for families, couples, and sightseeing enthusiasts with dedicated cars &amp; drivers."
        />

        {/* Packages Grid: 3 Preview Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {previewPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Prominent "Show More Packages" Button Navigating to /packages */}
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <button
            type="button"
            onClick={() => navigateTo('/packages')}
            className="inline-flex items-center justify-center gap-2.5 bg-[#16382C] hover:bg-[#0F261E] text-[#F9F6F0] px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-bold text-sm sm:text-base border border-[#D2A14E]/30 shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer group"
          >
            <span>Show More Packages</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#D2A14E] group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs sm:text-sm text-[#4B5563] mt-2.5 font-medium">
            Explore detailed multi-day itineraries, weekend escapes, and custom Himalayan road trips
          </p>
        </div>

        {/* Custom Tour Builder CTA */}
        <div className="mt-14 bg-[#16382C] text-[#F9F6F0] rounded-2xl p-6 sm:p-8 border border-[#D2A14E]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0F261E] flex items-center justify-center text-[#D2A14E] border border-[#D2A14E]/30 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#F9F6F0]">
                Planning a special holiday or family honeymoon?
              </h4>
              <p className="text-xs sm:text-sm text-[#F5E8D0]/90 mt-0.5">
                Tell us your dates, destinations, and preferences. We will create a custom itinerary with dedicated private cabs.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppChatUrl("Hello, I would like to design a custom multi-day tour itinerary in Darjeeling & Sikkim.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer group"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white group-hover:scale-105 transition-transform" />
            <span>Customize on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
