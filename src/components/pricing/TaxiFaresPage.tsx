import React, { useState, useEffect } from 'react';
import { routeFares, pricingCategories } from '../../data/pricing';
import type { RouteFare } from '../../data/pricing';
import { FareCard } from './FareCard';
import { Badge } from '../common/Badge';
import { Compass, Search, Info, ChevronRight, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { navigateTo } from '../../utils/navigation';
import { siteConfig } from '../../config/siteConfig';

export const TaxiFaresPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Fares');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const filteredFares = routeFares.filter((fare: RouteFare) => {
    const matchesCategory = selectedCategory === 'All Fares' || fare.category === selectedCategory;
    const matchesSearch = fare.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fare.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fare.to.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <span className="text-[#F9F6F0] font-semibold">Taxi Fares</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="teal" size="md" className="mb-3">
              <Compass className="w-3.5 h-3.5 text-white" />
              <span className="font-bold tracking-wide">TRANSPARENT TARIFF &amp; FIXED FARES</span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F9F6F0] tracking-tight leading-tight">
              Taxi Fares &amp; Route Pricing
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#F9F6F0]/85 leading-relaxed font-normal">
              Clear, upfront pricing with no hidden charges. All rates include dedicated commercial vehicle, experienced mountain driver, and fuel across Darjeeling, Kalimpong, Gangtok, and North Sikkim.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8">
        {/* Pricing Category Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Scrollable Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none">
            {pricingCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#1F2937] text-white shadow-sm'
                    : 'bg-white text-[#4B5563] border border-[#E3DAC9] hover:border-[#D2A14E] hover:text-[#1F2937]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#4B5563] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search route (e.g. Darjeeling, Nathula)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E3DAC9] rounded-xl pl-9 pr-4 py-2 text-xs text-[#1F2937] focus:ring-2 focus:ring-[#D2A14E] focus:border-[#D2A14E] focus:outline-none placeholder:text-[#4B5563]/60 shadow-2xs"
            />
          </div>
        </div>

        {/* Notice Badge */}
        <div className="p-4 rounded-xl bg-[#F5E8D0] border border-[#D2A14E]/40 flex items-start sm:items-center gap-3 text-xs text-[#1F2937]">
          <Info className="w-4 h-4 text-[#D2A14E] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="font-bold">Transparent Pricing Policy:</strong> All displayed fares are <em>indicative starting prices</em> for private reserved cabs. Final rates may vary slightly based on seasonal demand, precise hotel elevation drop-offs, and permit fees for high mountain passes.
          </p>
        </div>

        {/* Route Fares Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFares.map((fare: RouteFare) => (
            <FareCard key={fare.id} fare={fare} />
          ))}
        </div>

        {filteredFares.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#E3DAC9]">
            <p className="text-sm text-[#4B5563]">No specific fares match your search term.</p>
            <a
              href={getWhatsAppChatUrl(`Hello, I would like to inquire about taxi fare for: ${searchQuery}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Ask custom route price on WhatsApp</span>
            </a>
          </div>
        )}

        {/* 3. Bottom Assistance Banner */}
        <div className="bg-[#16382C] text-[#F9F6F0] rounded-2xl p-6 sm:p-10 border border-[#D2A14E]/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl mt-12">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0F261E] flex items-center justify-center text-[#D2A14E] border border-[#D2A14E]/30 shrink-0">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F9F6F0]">
                Need a Custom Multi-Destination Route or Airport Transfer?
              </h3>
              <p className="text-xs sm:text-sm text-[#F5E8D0]/90 mt-1 max-w-2xl leading-relaxed">
                We provide point-to-point transfers from Bagdogra Airport &amp; NJP Railway Station, outstation charters across West Bengal and Sikkim, and specialized snow-pass permits.
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
              href={getWhatsAppChatUrl("Hello, I would like to inquire about customized taxi routes and fares.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer group"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white group-hover:scale-105 transition-transform" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
