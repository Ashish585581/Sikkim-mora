import React from 'react';
import { destinations } from '../../data/destinations';
import type { Destination } from '../../data/destinations';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { MapPin, Navigation, ArrowRight, Clock } from 'lucide-react';
import { buildDestinationBookingUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const DestinationsSection: React.FC = () => {
  return (
    <section id="destinations" className="py-16 md:py-24 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Himalayan Getaways"
          title="Popular Destinations We Cover"
          subtitle="Explore breathtaking hill stations, high-altitude passes, and tea valleys across North Bengal &amp; Sikkim with our private cabs."
        />

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {destinations.map((dest: Destination) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E3DAC9] hover:border-[#22A657] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Destination Image with Badges */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* State Tag */}
                <div className="absolute top-3 left-3">
                  <Badge variant="teal" size="sm">
                    {dest.state}
                  </Badge>
                </div>

                {/* Elevation Tag */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                    <MapPin className="w-3 h-3 text-[#D2A14E]" />
                    {dest.elevation}
                  </span>
                </div>

                {/* Destination Name Overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-[#D2A14E] font-medium truncate">
                    {dest.tagline}
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Travel Stats Pill */}
                  <div className="flex items-center justify-between gap-2 my-4 py-2 px-3 rounded-xl bg-[#F9F6F0] border border-[#E3DAC9] text-xs text-[#1F2937]">
                    <span className="flex items-center gap-1">
                      <Navigation className="w-3.5 h-3.5 text-[#596F59]" />
                      <span>{dest.distanceFromBagdogra}</span>
                    </span>
                    <span className="text-[#E3DAC9]">|</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#596F59]" />
                      <span>{dest.driveTime}</span>
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-2">
                    <span className="text-[10px] font-bold uppercase text-[#1F2937] tracking-wider block">
                      Must Visit Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-[#F1ECE1] px-2 py-0.5 rounded-md border border-[#E3DAC9] text-[#4B5563]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-5 pt-4 border-t border-[#E3DAC9] flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-[#4B5563] uppercase font-semibold block">
                      Taxi starting from
                    </span>
                    <span className="text-sm font-bold text-[#1F2937]">
                      {dest.taxiStartingPrice}
                    </span>
                  </div>

                  <a
                    href={buildDestinationBookingUrl(dest.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#22A657] hover:bg-[#1B8A48] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-95 group/btn cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Book Taxi</span>
                    <ArrowRight className="w-3 h-3 text-white transform group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
