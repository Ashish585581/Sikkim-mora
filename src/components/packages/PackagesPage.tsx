import React, { useEffect } from 'react';
import { travelPackages } from '../../data/packages';
import { PackageCard } from './PackageCard';
import { Badge } from '../common/Badge';
import { Compass, Sparkles, ChevronRight, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { navigateTo } from '../../utils/navigation';
import { siteConfig } from '../../config/siteConfig';

export const PackagesPage: React.FC = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      {/* 1. Page Header & Breadcrumbs Banner */}
      <div className="bg-[#16382C] text-[#F9F6F0] pt-10 pb-14 border-b border-[#D2A14E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#F5E8D0]/80 mb-4">
            <button
              onClick={() => navigateTo('/')}
              className="hover:text-[#D2A14E] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#D2A14E]" />
            <span className="text-[#F9F6F0] font-semibold">Our Packages</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="teal" size="md" className="mb-3">
              <Compass className="w-3.5 h-3.5 text-white" />
              <span className="font-bold tracking-wide">CURATED HIMALAYAN ITINERARIES</span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F9F6F0] tracking-tight leading-tight">
              Our Tour &amp; Travel Packages
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#F9F6F0]/85 leading-relaxed font-normal">
              Explore our fixed-fare and tailor-made road trip packages across Darjeeling, Kalimpong, Gangtok, and North Sikkim. Dedicated private vehicles, certified mountain drivers, and transparent pricing.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Packages Grid Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E3DAC9]">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1F2937]">
              All Tour Packages ({travelPackages.length})
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] mt-0.5">
              Choose from short weekend getaways or customized multi-day Himalayan circuits.
            </p>
          </div>
          <span className="self-start sm:self-auto text-xs font-semibold text-[#596F59] bg-[#F1ECE1] px-3 py-1.5 rounded-lg border border-[#E3DAC9]">
            Private Cabs • Verified Chauffeurs
          </span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {travelPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* 3. Custom Tour Builder Banner */}
        <div className="bg-[#16382C] text-[#F9F6F0] rounded-2xl p-6 sm:p-10 border border-[#D2A14E]/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0F261E] flex items-center justify-center text-[#D2A14E] border border-[#D2A14E]/30 shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F9F6F0]">
                Planning a special holiday or family honeymoon?
              </h3>
              <p className="text-xs sm:text-sm text-[#F5E8D0]/90 mt-1 max-w-2xl leading-relaxed">
                Tell us your dates, destinations, and preferences. We will create a custom itinerary with dedicated private cabs and local sightseeing guidance.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F261E] hover:bg-[#D2A14E] hover:text-[#1F2937] text-[#F9F6F0] px-5 py-3 rounded-xl font-bold text-xs sm:text-sm border border-[#D2A14E]/30 transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#D2A14E]" />
              <span>Call: {siteConfig.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppChatUrl("Hello, I would like to design a custom multi-day tour itinerary in Darjeeling & Sikkim.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer group"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white group-hover:scale-105 transition-transform" />
              <span>Customize on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
