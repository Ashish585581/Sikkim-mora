import React, { useState } from 'react';
import { routeFares, pricingCategories } from '../../data/pricing';
import type { RouteFare } from '../../data/pricing';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { MapPin, Clock, ArrowRight, Search, Info } from 'lucide-react';
import { buildRouteBookingUrl, getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const PricingSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Fares');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFares = routeFares.filter((fare) => {
    const matchesCategory = selectedCategory === 'All Fares' || fare.category === selectedCategory;
    const matchesSearch = fare.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fare.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fare.to.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#F7F3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Transparent Rates"
          title="Taxi Fares &amp; Route Pricing"
          subtitle="Clear, upfront pricing with no hidden charges. All rates include dedicated commercial vehicle, experienced mountain driver, and fuel."
        />

        {/* Pricing Category Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
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
        <div className="mb-8 p-3.5 rounded-xl bg-[#F5E8D0] border border-[#D2A14E]/40 flex items-start sm:items-center gap-3 text-xs text-[#1F2937]">
          <Info className="w-4 h-4 text-[#D2A14E] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="font-bold">Transparent Pricing Policy:</strong> All displayed fares are <em>indicative starting prices</em> for private reserved cabs. Final rates may vary slightly based on seasonal demand, precise hotel elevation drop-offs, and permit fees for high passes.
          </p>
        </div>

        {/* Route Fares Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFares.map((fare: RouteFare) => (
            <div
              key={fare.id}
              className="bg-white rounded-2xl p-6 border border-[#E3DAC9] hover:border-[#22A657] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Category & Duration */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="teal" size="sm">
                    {fare.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#4B5563] bg-[#F9F6F0] px-2.5 py-1 rounded-md">
                    <Clock className="w-3 h-3 text-[#596F59]" />
                    {fare.duration}
                  </span>
                </div>

                {/* Route Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#1F2937] group-hover:text-[#22A657] transition-colors leading-snug">
                  {fare.route}
                </h3>

                {/* Distance & Route info */}
                <div className="flex items-center gap-2 text-xs text-[#4B5563] mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#596F59] shrink-0" />
                  <span>Distance: {fare.distance}</span>
                </div>

                {fare.notes && (
                  <p className="text-xs text-[#4B5563] mt-2 bg-[#F9F6F0] p-2.5 rounded-lg leading-relaxed">
                    {fare.notes}
                  </p>
                )}

                {/* Vehicle Wise Price Matrix */}
                <div className="mt-4 pt-3 border-t border-[#E3DAC9] space-y-1.5 text-xs">
                  {fare.hatchbackPrice && fare.hatchbackPrice !== 'N/A (SUVs mandatory)' && (
                    <div className="flex items-center justify-between text-[#4B5563]">
                      <span>Hatchback (Wagon R):</span>
                      <span className="font-bold text-[#1F2937]">{fare.hatchbackPrice}</span>
                    </div>
                  )}
                  {fare.sedanPrice && fare.sedanPrice !== 'N/A (SUVs mandatory)' && (
                    <div className="flex items-center justify-between text-[#4B5563]">
                      <span>Sedan (Dzire / Etios):</span>
                      <span className="font-bold text-[#1F2937]">{fare.sedanPrice}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-[#4B5563]">
                    <span>SUV (Bolero / Scorpio):</span>
                    <span className="font-bold text-[#1F2937]">{fare.suvPrice}</span>
                  </div>
                  {fare.crystaPrice && (
                    <div className="flex items-center justify-between text-[#4B5563]">
                      <span>Luxury (Innova Crysta):</span>
                      <span className="font-bold text-[#D2A14E]">{fare.crystaPrice}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Book on WhatsApp Action */}
              <div className="mt-6 pt-4 border-t border-[#E3DAC9] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#4B5563] uppercase font-semibold block">
                    Starting From
                  </span>
                  <span className="text-lg font-extrabold text-[#1F2937]">
                    {fare.startingPrice}
                  </span>
                </div>

                <a
                  href={buildRouteBookingUrl(fare.route, 'Sedan / SUV', fare.startingPrice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#22A657] hover:bg-[#1B8A48] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-95 group/btn cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Book on WhatsApp</span>
                  <ArrowRight className="w-3 h-3 text-white transform group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
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
      </div>
    </section>
  );
};
