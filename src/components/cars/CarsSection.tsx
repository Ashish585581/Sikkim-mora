import React, { useState } from 'react';
import { luxuryCabs } from '../../data/vehicles';
import type { Vehicle } from '../../data/vehicles';
import { CarCard } from './CarCard';
import { CarDetailModal } from './CarDetailModal';
import { SectionHeading } from '../common/SectionHeading';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { navigateTo } from '../../utils/navigation';

interface CarsSectionProps {
  selectedVehicleModal?: Vehicle | null;
  onCloseVehicleModal?: () => void;
  onSelectVehicle?: (vehicle: Vehicle) => void;
}

export const CarsSection: React.FC<CarsSectionProps> = ({
  selectedVehicleModal,
  onCloseVehicleModal,
  onSelectVehicle
}) => {
  const [internalModalVehicle, setInternalModalVehicle] = useState<Vehicle | null>(null);

  const activeModalVehicle = selectedVehicleModal || internalModalVehicle;
  const handleClose = () => {
    if (onCloseVehicleModal) onCloseVehicleModal();
    setInternalModalVehicle(null);
  };

  const handleOpen = (vehicle: Vehicle) => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicle);
    } else {
      setInternalModalVehicle(vehicle);
    }
  };

  return (
    <section id="cars" className="py-16 md:py-24 bg-[#F1ECE1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Our Luxury Cabs"
          title="Our Luxury Cabs"
          subtitle="Experience supreme comfort, spacious seating, and commanding mountain performance with our top-rated luxury fleet for Darjeeling and Sikkim."
        />

        {/* Vehicle Grid: Display ONLY the 5 luxury vehicles in exact order */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {luxuryCabs.map((vehicle) => (
            <CarCard
              key={vehicle.id}
              vehicle={vehicle}
              onViewDetails={handleOpen}
            />
          ))}
        </div>

        {/* Prominent "Show More Cabs" Button Navigating to /cabs */}
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <button
            type="button"
            onClick={() => navigateTo('/cabs')}
            className="inline-flex items-center justify-center gap-2.5 bg-[#16382C] hover:bg-[#0F261E] text-[#F9F6F0] px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-bold text-sm sm:text-base border border-[#D2A14E]/30 shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer group"
          >
            <span>Show More Cabs</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#D2A14E] group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs sm:text-sm text-[#4B5563] mt-2.5 font-medium">
            Explore all vehicle segments including Sedans, Hatchbacks, 9-Seaters &amp; 12-Seater Cruisers
          </p>
        </div>

        {/* Bottom Fleet Trust Banner */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3DAC9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5E8D0] flex items-center justify-center text-[#1F2937] shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#22A657]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#1F2937]">
                Need a customized car or multiple vehicles for a group tour?
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-0.5">
                We provide convoys, specialized 4WD vehicles for snow passes, and Tempo Travellers for large family trips.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppChatUrl("Hello, I need assistance choosing the right vehicle for my group trip.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white border border-[#1B8A48] px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer group"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white group-hover:scale-105 transition-transform" />
            <span>Ask Fleet Coordinator on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Vehicle Specification & Booking Modal */}
      <CarDetailModal
        vehicle={activeModalVehicle}
        onClose={handleClose}
      />
    </section>
  );
};
