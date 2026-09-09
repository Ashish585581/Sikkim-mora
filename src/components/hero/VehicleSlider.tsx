import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Users, Fuel, Wind, Eye } from 'lucide-react';
import { vehicles } from '../../data/vehicles';
import type { Vehicle } from '../../data/vehicles';
import { buildCarBookingUrl } from '../../utils/whatsapp';
import { Badge } from '../common/Badge';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

interface VehicleSliderProps {
  onSelectVehicleForModal?: (vehicle: Vehicle) => void;
}

export const VehicleSlider: React.FC<VehicleSliderProps> = ({ onSelectVehicleForModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Available vehicles for hero slider
  const sliderVehicles = vehicles;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sliderVehicles.length);
  }, [sliderVehicles.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + sliderVehicles.length) % sliderVehicles.length);
  }, [sliderVehicles.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentCar = sliderVehicles[currentIndex];

  return (
    <div
      className="relative w-full bg-[#F9F6F0] rounded-2xl shadow-xl border border-[#E3DAC9] overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Top Banner with Carousel Tag */}
      <div className="bg-[#16382C] text-[#F9F6F0] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="teal" size="sm">
            Featured Fleet
          </Badge>
          <span className="text-xs text-[#F9F6F0]/90 hidden sm:inline">
            Available for immediate booking
          </span>
        </div>
        <div className="text-xs font-semibold text-[#D2A14E]">
          {currentIndex + 1} / {sliderVehicles.length}
        </div>
      </div>

      {/* Main Vehicle Display Area */}
      <div className="p-4 sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Vehicle Image Container */}
          <div className="md:col-span-7 relative flex items-center justify-center">
            <div className="w-full h-52 sm:h-64 md:h-72 rounded-xl overflow-hidden relative bg-[#F1ECE1] border border-[#E3DAC9]">
              <img
                src={currentCar.image}
                alt={currentCar.name}
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

              {/* Price Tag Overlay on Image */}
              <div className="absolute bottom-3 left-3 bg-[#16382C]/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-bold border border-[#D2A14E]/40 flex items-center gap-1.5 shadow-lg">
                <span className="text-xs text-[#D2A14E] font-normal">From</span>
                <span className="text-base text-[#F9F6F0]">{currentCar.startingPrice}</span>
                <span className="text-[11px] text-[#F9F6F0]/80">{currentCar.priceUnit}</span>
              </div>

              {currentCar.popular && (
                <div className="absolute top-3 right-3">
                  <Badge variant="teal" size="sm" className="shadow-md">
                    ★ Most Booked
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Vehicle Specs & Quick Action */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#D2A14E]">
                {currentCar.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mt-1">
                {currentCar.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-1.5 line-clamp-2">
                {currentCar.tagline}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#E3DAC9] text-xs text-[#1F2937]">
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#F1ECE1] text-center">
                <Users className="w-4 h-4 text-[#596F59] mb-1" />
                <span className="font-bold">{currentCar.seats}</span>
                <span className="text-[10px] text-[#4B5563]">Capacity</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#F1ECE1] text-center">
                <Wind className="w-4 h-4 text-[#596F59] mb-1" />
                <span className="font-bold">{currentCar.ac}</span>
                <span className="text-[10px] text-[#4B5563]">Climate</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#F1ECE1] text-center">
                <Fuel className="w-4 h-4 text-[#596F59] mb-1" />
                <span className="font-bold">{currentCar.fuel}</span>
                <span className="text-[10px] text-[#4B5563]">Fuel Type</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5 pt-1">
              <a
                href={buildCarBookingUrl(currentCar.name, currentCar.startingPrice)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Book Now</span>
              </a>

              {onSelectVehicleForModal && (
                <button
                  type="button"
                  onClick={() => onSelectVehicleForModal(currentCar)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white font-semibold text-xs transition-all duration-200 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Specs</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls (Next/Prev Arrows and Dots) */}
      <div className="bg-[#F1ECE1] px-4 py-3 border-t border-[#E3DAC9] flex items-center justify-between">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-lg bg-white border border-[#E3DAC9] flex items-center justify-center text-[#1F2937] hover:bg-[#F5E8D0] transition-colors cursor-pointer"
            aria-label="Previous Car"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-lg bg-white border border-[#E3DAC9] flex items-center justify-center text-[#1F2937] hover:bg-[#F5E8D0] transition-colors cursor-pointer"
            aria-label="Next Car"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center gap-1.5">
          {sliderVehicles.map((car, index) => (
            <button
              key={car.id}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? 'w-7 bg-[#1F2937]'
                  : 'w-2.5 bg-[#D2A14E]/60 hover:bg-[#1F2937]'
              }`}
              aria-label={`Go to slide ${index + 1}: ${car.name}`}
            />
          ))}
        </div>

        <div className="text-[11px] text-[#4B5563] font-medium hidden sm:block">
          Auto-sliding • Swipe or click to browse
        </div>
      </div>
    </div>
  );
};
