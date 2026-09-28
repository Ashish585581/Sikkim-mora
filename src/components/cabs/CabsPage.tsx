import React, { useState, useEffect } from 'react';
import { cabSegments } from '../../data/vehicles';
import type { Vehicle } from '../../data/vehicles';
import { CarCard } from '../cars/CarCard';
import { CarDetailModal } from '../cars/CarDetailModal';
import { Badge } from '../common/Badge';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { navigateTo } from '../../utils/navigation';
import { ShieldCheck, ChevronRight, Phone, Car } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const CabsPage: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const scrollToSegment = (segmentId: string) => {
    const el = document.getElementById(segmentId);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

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
            <span className="text-[#F9F6F0] font-semibold">Our Cabs</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="teal" size="md" className="mb-3">
              <Car className="w-3.5 h-3.5 text-white" />
              <span className="font-bold tracking-wide">VERIFIED FLEET &amp; CERTIFIED DRIVERS</span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F9F6F0] tracking-tight leading-tight">
              Our Complete Cab Fleet
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#F9F6F0]/85 leading-relaxed font-normal">
              Explore our comprehensive fleet of sanitized, mountain-ready cabs driven by senior local Himalayan chauffeurs. Transparent daily rentals and all-inclusive packages across Darjeeling, Kalimpong, Gangtok, and North Sikkim.
            </p>
          </div>

          {/* Quick Segment Jump Pills */}
          <div className="mt-8 pt-6 border-t border-[#D2A14E]/20">
            <p className="text-xs font-bold text-[#D2A14E] uppercase tracking-wider mb-3">
              Jump to Vehicle Segment:
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {cabSegments.map((segment) => (
                <button
                  key={segment.id}
                  onClick={() => scrollToSegment(segment.id)}
                  className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#0F261E] hover:bg-[#D2A14E] hover:text-[#1F2937] text-[#F9F6F0] border border-[#D2A14E]/30 transition-all duration-150 cursor-pointer shadow-2xs"
                >
                  {segment.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Segments Display Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 md:space-y-20">
        {cabSegments.map((segment) => (
          <section
            key={segment.id}
            id={segment.id}
            className="scroll-mt-24 pt-4 border-b border-[#E3DAC9] pb-14 last:border-b-0 last:pb-0"
          >
            {/* Segment Title & Details */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-[#16382C] text-[#D2A14E] font-black text-xs flex items-center justify-center shadow-2xs">
                    {segment.code}
                  </span>
                  <span className="text-xs font-bold text-[#D2A14E] uppercase tracking-wider">
                    {segment.tagline}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] tracking-tight">
                  {segment.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-1.5 max-w-2xl">
                  {segment.description}
                </p>
              </div>

              <div className="shrink-0 text-xs font-semibold text-[#596F59] bg-[#F1ECE1] px-3 py-1.5 rounded-lg border border-[#E3DAC9]">
                {segment.items.length} {segment.items.length === 1 ? 'Vehicle' : 'Vehicles'} in this category
              </div>
            </div>

            {/* Vehicle Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {segment.items.map((item) => (
                <CarCard
                  key={`${segment.id}-${item.vehicle.id}`}
                  vehicle={item.vehicle}
                  displayName={item.displayName}
                  onViewDetails={(v) => setSelectedVehicle(v)}
                />
              ))}
            </div>
          </section>
        ))}

        {/* 3. Group Booking & Custom Fleet Assistance Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E3DAC9] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F5E8D0] flex items-center justify-center text-[#1F2937] shrink-0">
              <ShieldCheck className="w-7 h-7 text-[#22A657]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F2937]">
                Need Multiple Cabs, Custom Itineraries, or Special Permits?
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-1 max-w-2xl leading-relaxed">
                We organize family convoy trips, specialized 4WD vehicles for snow-bound passes like Nathula and Gurudongmar, and seamless airport reception at Bagdogra (IXB) and NJP Station.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F1ECE1] hover:bg-[#E3DAC9] text-[#1F2937] px-5 py-3 rounded-xl font-bold text-xs sm:text-sm border border-[#E3DAC9] transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#D2A14E]" />
              <span>Call: {siteConfig.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppChatUrl("Hello, I would like assistance in booking cabs for my Sikkim & Darjeeling trip.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white border border-[#1B8A48] px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Vehicle Specification & Booking Modal */}
      <CarDetailModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />
    </div>
  );
};
