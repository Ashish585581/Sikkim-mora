import React from 'react';
import { Users, Fuel, Wind, Luggage, Info } from 'lucide-react';
import type { Vehicle } from '../../data/vehicles';
import { buildCarBookingUrl } from '../../utils/whatsapp';
import { Badge } from '../common/Badge';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

interface CarCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ vehicle, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#E3DAC9] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:border-[#22A657]">
      {/* Vehicle Image with Tag */}
      <div className="relative h-48 sm:h-52 w-full bg-[#F1ECE1] overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <Badge variant="teal" size="sm" className="shadow-xs">
            {vehicle.category}
          </Badge>
        </div>

        {/* Popular Badge */}
        {vehicle.popular && (
          <div className="absolute top-3 right-3">
            <Badge variant="teal" size="sm" className="shadow-xs font-bold">
              ★ Popular Choice
            </Badge>
          </div>
        )}

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 left-3 bg-[#16382C]/95 text-white px-3 py-1 rounded-lg text-xs font-bold border border-[#D2A14E]/40 flex items-center gap-1 shadow-md">
          <span className="text-[#D2A14E] font-normal">Starting from</span>
          <span className="text-sm font-extrabold text-[#F9F6F0]">{vehicle.startingPrice}</span>
          <span className="text-[10px] text-white/80">{vehicle.priceUnit}</span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#1F2937] group-hover:text-[#22A657] transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-xs text-[#4B5563] mt-1.5 line-clamp-2 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Key Specs Row */}
          <div className="grid grid-cols-3 gap-2 my-4 py-3 border-y border-[#E3DAC9] text-[11px] text-[#1F2937]">
            <div className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-[#F9F6F0] text-center">
              <Users className="w-4 h-4 text-[#596F59] mb-1" />
              <span className="font-bold">{vehicle.seats}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-[#F9F6F0] text-center">
              <Wind className="w-4 h-4 text-[#596F59] mb-1" />
              <span className="font-bold">{vehicle.ac.split(' ')[0]}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-[#F9F6F0] text-center">
              <Fuel className="w-4 h-4 text-[#596F59] mb-1" />
              <span className="font-bold">{vehicle.fuel.split(' ')[0]}</span>
            </div>
          </div>

          {/* Luggage Note */}
          <div className="flex items-center gap-2 text-xs text-[#4B5563] mb-4">
            <Luggage className="w-3.5 h-3.5 text-[#596F59] shrink-0" />
            <span className="truncate">{vehicle.luggage}</span>
          </div>
        </div>

        {/* Action Buttons: View Details + Book Now */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          <button
            type="button"
            onClick={() => onViewDetails(vehicle)}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white font-bold text-xs transition-all duration-200 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>

          <a
            href={buildCarBookingUrl(vehicle.name, vehicle.startingPrice)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 bg-[#22A657] hover:bg-[#1B8A48] text-white px-3 py-2.5 rounded-xl font-bold text-xs shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
