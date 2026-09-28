import React from 'react';
import type { RouteFare } from '../../data/pricing';
import { Badge } from '../common/Badge';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { buildRouteBookingUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

interface FareCardProps {
  fare: RouteFare;
}

export const FareCard: React.FC<FareCardProps> = ({ fare }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E3DAC9] hover:border-[#22A657] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
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

        {/* Distance info */}
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
          {fare.hatchbackPrice && fare.hatchbackPrice !== 'N/A (SUVs mandatory)' && fare.hatchbackPrice !== 'N/A' && (
            <div className="flex items-center justify-between text-[#4B5563]">
              <span>Hatchback (Alto / Wagon R):</span>
              <span className="font-bold text-[#1F2937]">{fare.hatchbackPrice}</span>
            </div>
          )}
          {fare.sedanPrice && fare.sedanPrice !== 'N/A (SUVs mandatory)' && fare.sedanPrice !== 'N/A' && (
            <div className="flex items-center justify-between text-[#4B5563]">
              <span>Sedan (Dzire / Amaze):</span>
              <span className="font-bold text-[#1F2937]">{fare.sedanPrice}</span>
            </div>
          )}
          {fare.suvPrice && fare.suvPrice !== 'N/A' && (
            <div className="flex items-center justify-between text-[#4B5563]">
              <span>SUV / MUV:</span>
              <span className="font-bold text-[#1F2937]">{fare.suvPrice}</span>
            </div>
          )}
          {fare.crystaPrice && fare.crystaPrice !== 'N/A' && (
            <div className="flex items-center justify-between text-[#4B5563]">
              <span>Luxury / Heavy MUV:</span>
              <span className="font-bold text-[#D2A14E]">{fare.crystaPrice}</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Book on WhatsApp Action */}
      <div className="mt-6 pt-4 border-t border-[#E3DAC9] flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#4B5563] uppercase font-semibold block">
            {fare.category === 'Car Rental' ? 'Per-Day Rental' : 'Starting From'}
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
  );
};
