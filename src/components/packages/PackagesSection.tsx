import React from 'react';
import { travelPackages } from '../../data/packages';
import type { TravelPackage } from '../../data/packages';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Clock, Car, CheckCircle2, Sparkles } from 'lucide-react';
import { buildPackageBookingUrl, getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="py-16 md:py-24 bg-[#F7F3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Himalayan Itineraries"
          title="Curated Travel Packages"
          subtitle="Fixed-fare and custom road trip packages crafted for families, couples, and sightseeing enthusiasts with dedicated cars &amp; drivers."
        />

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {travelPackages.map((pkg: TravelPackage) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-white border-2 border-[#D2A14E] shadow-xl relative'
                  : 'bg-white border-[#E3DAC9] hover:border-[#22A657] shadow-2xs hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge variant="teal" size="sm" className="shadow-md font-bold px-3 py-1">
                    ★ Most Recommended
                  </Badge>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#1F2937] bg-[#F5E8D0] px-3 py-1 rounded-full border border-[#D2A14E]/50">
                    <Clock className="w-3.5 h-3.5 text-[#596F59]" />
                    {pkg.duration}
                  </span>
                  {pkg.badge && !pkg.popular && (
                    <Badge variant="teal" size="sm">
                      {pkg.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#1F2937] mt-2">
                  {pkg.title}
                </h3>
                <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Price Display */}
                <div className="my-5 p-4 rounded-xl bg-[#F9F6F0] border border-[#E3DAC9]">
                  <div className="text-[10px] uppercase font-bold text-[#4B5563]">
                    Starting Package Fare
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">
                      {pkg.startingPrice}
                    </span>
                    <span className="text-xs text-[#4B5563]">{pkg.priceNote}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#596F59] font-semibold mt-2 pt-2 border-t border-[#E3DAC9]">
                    <Car className="w-3.5 h-3.5 text-[#596F59]" />
                    <span>{pkg.recommendedVehicle}</span>
                  </div>
                </div>

                {/* Itinerary highlights */}
                <div className="space-y-2 mb-5">
                  <span className="text-[11px] font-bold uppercase text-[#1F2937] tracking-wider block">
                    Tour Highlights / Route:
                  </span>
                  {pkg.itinerary.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#1F2937]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D2A14E] mt-1.5 shrink-0" />
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Inclusions */}
                <div className="space-y-1.5 pt-3 border-t border-[#E3DAC9]">
                  <span className="text-[10px] font-bold uppercase text-[#4B5563] tracking-wider block">
                    What is included:
                  </span>
                  {pkg.inclusions.map((inc, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#4B5563]">
                      <CheckCircle2 className="w-3 h-3 text-[#22A657] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#E3DAC9]">
                <a
                  href={buildPackageBookingUrl(pkg.title, pkg.duration, pkg.startingPrice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white border border-[#1B8A48] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer group/pkg"
                >
                  <WhatsAppIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white group-hover/pkg:scale-105 transition-transform" />
                  <span>Enquire / Book Package</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour Builder CTA */}
        <div className="mt-12 bg-[#16382C] text-[#F9F6F0] rounded-2xl p-6 sm:p-8 border border-[#D2A14E]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
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
