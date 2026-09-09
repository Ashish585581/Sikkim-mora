import React from 'react';
import { BookingForm } from './BookingForm';
import type { Vehicle } from '../../data/vehicles';
import { Mountain, CheckCircle2, ArrowRight, Compass } from 'lucide-react';
import { Badge } from '../common/Badge';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

interface HeroProps {
  onSelectVehicle?: (vehicle: Vehicle) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28 overflow-hidden bg-[#F9F6F0] bg-cover bg-no-repeat bg-[position:68%_center] sm:bg-[position:center_right] lg:bg-[position:right_center]"
      style={{
        backgroundImage: `url('/hero-bg.png')`
      }}
    >
      {/* Subtle Gradient Overlays for Optimal Text Readability & Cinematic Contrast */}
      {/* Desktop Horizontal Gradient Overlay */}
      <div
        className="absolute inset-0 hidden md:block pointer-events-none"
        style={{
          background: `linear-gradient(90deg, rgba(249, 246, 240, 0.95) 0%, rgba(249, 246, 240, 0.88) 32%, rgba(249, 246, 240, 0.45) 60%, rgba(249, 246, 240, 0.05) 100%)`
        }}
      />
      {/* Mobile Vertical Gradient Overlay */}
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{
          background: `linear-gradient(180deg, rgba(249, 246, 240, 0.97) 0%, rgba(249, 246, 240, 0.90) 42%, rgba(249, 246, 240, 0.60) 75%, rgba(249, 246, 240, 0.20) 100%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Hero Layout: Left Content & Right Cinematic Vista */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Location Trust Pill */}
            <div className="inline-flex items-center gap-2 mb-4">
              <Badge variant="teal" size="md" className="shadow-2xs py-1 px-3.5">
                <Mountain className="w-3.5 h-3.5 text-white" />
                <span className="font-bold tracking-wide text-white">
                  DARJEELING • SIKKIM • KALIMPONG
                </span>
              </Badge>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight md:leading-[1.12]">
              Reliable Car Rental &amp;{' '}
              <span className="text-[#D2A14E]">Taxi Services</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-4 text-base sm:text-lg md:text-xl text-[#1F2937] max-w-2xl leading-relaxed font-normal">
              Comfortable rides, experienced drivers and reliable travel across Darjeeling, Kalimpong, Sikkim and nearby destinations.
            </p>

            {/* Quick Trust Benefit Indicators */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-[#1F2937]">
              <span className="flex items-center gap-1.5 bg-[#F9F6F0]/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#E3DAC9] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#22A657]" />
                Local Mountain Chauffeurs
              </span>
              <span className="flex items-center gap-1.5 bg-[#F9F6F0]/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#E3DAC9] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#22A657]" />
                Punctual Airport Drops
              </span>
              <span className="flex items-center gap-1.5 bg-[#F9F6F0]/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#E3DAC9] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#22A657]" />
                Instant WhatsApp Quotes
              </span>
            </div>

            {/* Hero CTA Button Row */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href={getWhatsAppChatUrl("Hello! I want to book a taxi/rental car for my Sikkim & Darjeeling trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#22A657] hover:bg-[#1B8A48] text-white border border-[#1B8A48] px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer group"
              >
                <WhatsAppIcon className="w-5 h-5 text-white group-hover:scale-105 transition-transform" />
                <span>Book on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#cars"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#1F2937] hover:text-white border border-[#1F2937] text-[#1F2937] px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer"
              >
                <span>Explore Fleet</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Open Vista Tag (Allows background scenic Buddha Park & SUV to shine) */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-end items-end h-full min-h-[220px]">
            <div className="bg-[#16382C]/90 backdrop-blur-md text-[#F9F6F0] border border-[#D2A14E]/40 px-4 py-2 rounded-xl text-xs font-semibold shadow-xl flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#D2A14E]" />
              <span>Scenic Himalayan Routes &amp; Buddha Park (Ravangla)</span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Floating Booking & Search Form */}
        <div className="mt-10 lg:mt-14 w-full">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};
