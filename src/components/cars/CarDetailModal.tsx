import React, { useEffect } from 'react';
import { X, Users, Fuel, Wind, Luggage, CheckCircle, ShieldCheck, Mountain } from 'lucide-react';
import type { Vehicle } from '../../data/vehicles';
import { buildCarBookingUrl } from '../../utils/whatsapp';
import { Badge } from '../common/Badge';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

interface CarDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({ vehicle, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (vehicle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#F9F6F0] rounded-2xl shadow-2xl border border-[#E3DAC9] overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Modal Top Navigation Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E3DAC9] bg-[#F1ECE1]">
          <div className="flex items-center gap-2">
            <Badge variant="teal" size="sm">
              {vehicle.category}
            </Badge>
            <span className="text-xs font-semibold text-[#4B5563]">
              Vehicle Specifications &amp; Booking
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#4B5563] hover:text-[#1F2937] hover:bg-white transition-colors cursor-pointer"
            aria-label="Close vehicle details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Top Hero with Car Image & Pricing */}
          <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden bg-[#F1ECE1] border border-[#E3DAC9]">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-[#D2A14E] font-medium">
                  {vehicle.tagline}
                </p>
              </div>
              <div className="text-right bg-[#16382C]/90 px-3 py-1.5 rounded-lg border border-[#D2A14E]/40 backdrop-blur-xs">
                <div className="text-[10px] text-[#D2A14E] uppercase font-bold">Starting from</div>
                <div className="text-lg font-extrabold text-[#F9F6F0]">
                  {vehicle.startingPrice} <span className="text-xs font-normal text-white/80">{vehicle.priceUnit}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#E3DAC9] flex flex-col items-center text-center shadow-2xs">
              <Users className="w-4 h-4 text-[#596F59] mb-1" />
              <span className="font-bold text-[#1F2937]">{vehicle.seats}</span>
              <span className="text-[10px] text-[#4B5563]">Seating</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E3DAC9] flex flex-col items-center text-center shadow-2xs">
              <Wind className="w-4 h-4 text-[#596F59] mb-1" />
              <span className="font-bold text-[#1F2937]">{vehicle.ac}</span>
              <span className="text-[10px] text-[#4B5563]">AC Condition</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E3DAC9] flex flex-col items-center text-center shadow-2xs">
              <Fuel className="w-4 h-4 text-[#596F59] mb-1" />
              <span className="font-bold text-[#1F2937]">{vehicle.fuel}</span>
              <span className="text-[10px] text-[#4B5563]">Fuel Type</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E3DAC9] flex flex-col items-center text-center shadow-2xs">
              <Luggage className="w-4 h-4 text-[#596F59] mb-1" />
              <span className="font-bold text-[#1F2937]">{vehicle.luggage}</span>
              <span className="text-[10px] text-[#4B5563]">Boot Space</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-2">
              Vehicle Overview
            </h4>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              {vehicle.description}
            </p>
          </div>

          {/* Ideal For Section */}
          <div className="bg-white rounded-xl p-4 border border-[#E3DAC9] shadow-2xs">
            <h4 className="text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Mountain className="w-4 h-4 text-[#596F59]" />
              Ideal For
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {vehicle.idealFor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#1F2937]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#22A657] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included Features */}
          <div>
            <h4 className="text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#596F59]" />
              Included Amenities &amp; Guarantee
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4B5563]">
              {vehicle.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D2A14E]"></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Fixed CTA */}
        <div className="p-4 bg-[#F1ECE1] border-t border-[#E3DAC9] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#4B5563] text-center sm:text-left">
            <span className="font-semibold text-[#1F2937]">Sample starting price: {vehicle.startingPrice}</span>. Final fare depends on exact itinerary &amp; route.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#E3DAC9] bg-white text-xs font-semibold text-[#4B5563] hover:text-[#1F2937] cursor-pointer"
            >
              Close
            </button>
            <a
              href={buildCarBookingUrl(vehicle.name, vehicle.startingPrice)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white border border-[#1B8A48] px-5 py-2.5 rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer group"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white group-hover:scale-105 transition-transform" />
              <span>Book this {vehicle.name} on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
