import React, { useState } from 'react';
import { vehicles } from '../../data/vehicles';
import type { Vehicle } from '../../data/vehicles';
import { CarCard } from './CarCard';
import { CarDetailModal } from './CarDetailModal';
import { SectionHeading } from '../common/SectionHeading';
import { ShieldCheck } from 'lucide-react';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

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
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [internalModalVehicle, setInternalModalVehicle] = useState<Vehicle | null>(null);

  const categories = ['All', 'Hatchback', 'Sedan', 'SUV / MUV'];

  const filteredVehicles = activeCategory === 'All'
    ? vehicles
    : vehicles.filter((car) => car.category === activeCategory);

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
          badgeText="Our Vehicle Fleet"
          title="Comfortable &amp; Reliable Mountain Cars"
          subtitle="Explore our fleet of well-maintained, sanitized cabs driven by certified Himalayan mountain drivers. Indicative starting rates per day."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#1F2937] text-white shadow-md'
                  : 'bg-white text-[#4B5563] border border-[#E3DAC9] hover:border-[#D2A14E] hover:text-[#1F2937]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVehicles.map((vehicle) => (
            <CarCard
              key={vehicle.id}
              vehicle={vehicle}
              onViewDetails={handleOpen}
            />
          ))}
        </div>

        {/* Bottom Fleet Trust Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3DAC9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
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
