import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Users, Briefcase, Car, ArrowRight } from 'lucide-react';
import type { BookingFormData } from '../../utils/whatsapp';
import { buildBookingWhatsAppUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { vehicles } from '../../data/vehicles';

const POPULAR_PICKUPS = [
  'Bagdogra Airport (IXB)',
  'NJP Railway Station',
  'Siliguri Junction',
  'Darjeeling Town',
  'Gangtok (MG Marg)',
  'Kalimpong Town',
  'Other / Hotel Doorstep'
];

const POPULAR_DESTINATIONS = [
  'Darjeeling (Mall Road)',
  'Gangtok (MG Marg)',
  'Kalimpong',
  'Nathula Pass & Tsomgo Lake',
  'Pelling (West Sikkim)',
  'Mirik Lake',
  'Bagdogra Airport (IXB)',
  'NJP Railway Station',
  'Lachung / North Sikkim'
];

const SERVICE_TYPES = [
  'Airport Transfer',
  'Local Sightseeing',
  'Outstation Taxi',
  'Darjeeling Taxi Service',
  'Kalimpong Taxi Service',
  'Nathula Pass Taxi Service',
  'Car Rental (Full Day)'
];

export const BookingForm: React.FC = () => {
  // Get tomorrow's date as ISO string default
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    pickupLocation: 'Bagdogra Airport (IXB)',
    destination: 'Darjeeling (Mall Road)',
    travelDate: defaultDateStr,
    passengers: '2–4 Passengers',
    serviceType: 'Airport Transfer',
    vehiclePreference: 'Any Vehicle / Best Available',
    additionalNotes: ''
  });

  const [customPickup, setCustomPickup] = useState(false);
  const [customDestination, setCustomDestination] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappUrl = buildBookingWhatsAppUrl(formData);
    
    // Brief visual feedback before redirect
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 200);
  };

  return (
    <div className="bg-[#F9F6F0] backdrop-blur-md rounded-2xl shadow-xl border border-[#E3DAC9] p-5 sm:p-7 md:p-8 relative">
      {/* Form Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-[#E3DAC9] gap-2">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22A657] animate-pulse"></span>
            Book Taxi / Get WhatsApp Quote
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] mt-0.5">
            Instant fare estimate &amp; availability directly on WhatsApp
          </p>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[#596F59] border border-[#596F59] px-3 py-1 rounded-full w-fit shadow-2xs">
          ✓ No Advance Payment Required
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Pickup and Destination */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pickup Location */}
          <div>
            <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#596F59]" />
              Pickup Location
            </label>
            {!customPickup ? (
              <div className="relative">
                <select
                  value={formData.pickupLocation}
                  onChange={(e) => {
                    if (e.target.value === 'Other / Hotel Doorstep') {
                      setCustomPickup(true);
                      setFormData({ ...formData, pickupLocation: '' });
                    } else {
                      setFormData({ ...formData, pickupLocation: e.target.value });
                    }
                  }}
                  className="w-full bg-white border border-[#E3DAC9] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#1F2937] focus:ring-2 focus:ring-[#D2A14E] focus:border-[#D2A14E] focus:outline-none transition-all shadow-2xs"
                  required
                >
                  {POPULAR_PICKUPS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="relative flex gap-1.5">
                <input
                  type="text"
                  maxLength={120}
                  placeholder="Enter specific pickup location..."
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value.slice(0, 120) })}
                  className="w-full bg-white border border-[#D2A14E] rounded-xl px-3.5 py-2.5 text-sm text-[#1F2937] focus:ring-2 focus:ring-[#D2A14E] focus:outline-none shadow-2xs"
                  required
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setCustomPickup(false);
                    setFormData({ ...formData, pickupLocation: POPULAR_PICKUPS[0] });
                  }}
                  className="text-xs text-[#4B5563] hover:text-[#1F2937] px-2 underline whitespace-nowrap cursor-pointer"
                >
                  List
                </button>
              </div>
            )}
          </div>

          {/* Destination */}
          <div>
            <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-[#596F59]" />
              Destination / Route
            </label>
            {!customDestination ? (
              <div className="relative">
                <select
                  value={formData.destination}
                  onChange={(e) => {
                    if (e.target.value === 'Other / Custom Route') {
                      setCustomDestination(true);
                      setFormData({ ...formData, destination: '' });
                    } else {
                      setFormData({ ...formData, destination: e.target.value });
                    }
                  }}
                  className="w-full bg-white border border-[#E3DAC9] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#1F2937] focus:ring-2 focus:ring-[#D2A14E] focus:border-[#D2A14E] focus:outline-none transition-all shadow-2xs"
                  required
                >
                  {POPULAR_DESTINATIONS.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                  <option value="Other / Custom Route">Other / Custom Route...</option>
                </select>
              </div>
            ) : (
              <div className="relative flex gap-1.5">
                <input
                  type="text"
                  maxLength={120}
                  placeholder="Enter destination or sightseeing tour..."
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value.slice(0, 120) })}
                  className="w-full bg-white border border-[#D2A14E] rounded-xl px-3.5 py-2.5 text-sm text-[#1F2937] focus:ring-2 focus:ring-[#D2A14E] focus:outline-none shadow-2xs"
                  required
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setCustomDestination(false);
                    setFormData({ ...formData, destination: POPULAR_DESTINATIONS[0] });
                  }}
                  className="text-xs text-[#4B5563] hover:text-[#1F2937] px-2 underline whitespace-nowrap cursor-pointer"
                >
                  List
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Row 2: Travel Date, Passengers, Service Type, Preferred Vehicle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Travel Date */}
          <div>
            <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#596F59]" />
              Travel Date
            </label>
            <input
              type="date"
              value={formData.travelDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
              className="w-full bg-white border border-[#E3DAC9] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#1F2937] focus:ring-2 focus:ring-[#D2A14E] focus:border-[#D2A14E] focus:outline-none transition-all shadow-2xs"
              required
            />
          </div>

          {/* Number of Passengers */}
          <div>
            <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#596F59]" />
              Passengers
            </label>
            <select
              value={formData.passengers}
              onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
              className="w-full bg-white border border-[#E3DAC9] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#1F2937] focus:ring-2 focus:ring-[#D2A14E] focus:border-[#D2A14E] focus:outline-none transition-all shadow-2xs"
            >
              <option value="1–2 Passengers">1–2 Passengers (Couple/Solo)</option>
              <option value="3–4 Passengers">3–4 Passengers (Small Family)</option>
              <option value="5–6 Passengers">5–6 Passengers (SUV/Innova)</option>
              <option value="7+ Passengers">7+ Passengers (Group/Multiple Cabs)</option>
            </select>
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#596F59]" />
              Service Type
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full bg-white border border-[#E3DAC9] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#1F2937] focus:ring-2 focus:ring-[#D2A14E] focus:border-[#D2A14E] focus:outline-none transition-all shadow-2xs"
            >
              {SERVICE_TYPES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Vehicle */}
          <div>
            <label className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-[#596F59]" />
              Preferred Vehicle
            </label>
            <select
              value={formData.vehiclePreference}
              onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
              className="w-full bg-white border border-[#E3DAC9] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#1F2937] focus:ring-2 focus:ring-[#D2A14E] focus:border-[#D2A14E] focus:outline-none transition-all shadow-2xs"
            >
              <option value="Any Vehicle / Best Available">Any Vehicle / Best Available</option>
              {vehicles.map((v) => (
                <option key={v.id} value={`${v.name} (${v.startingPrice}/day)`}>
                  {v.name} ({v.startingPrice}/day)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Primary Soft Champagne Yellow Form Submission / Inquiry Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-3 bg-[#F4D98B] hover:bg-[#EBCB73] text-[#173F3B] border border-[#D8B45A] py-3.5 px-6 rounded-xl font-extrabold text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] group cursor-pointer"
          >
            <WhatsAppIcon className="w-6 h-6 text-[#173F3B] group-hover:scale-105 transition-transform" />
            <span>Send Inquiry on WhatsApp</span>
            <ArrowRight className="w-5 h-5 text-[#173F3B] transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-xs text-[#4B5563] mt-3">
            <span className="flex items-center gap-1">
              <span className="text-[#22A657] font-bold">✓</span> Pre-fills trip details on WhatsApp
            </span>
            <span className="flex items-center gap-1">
              <span className="text-[#22A657] font-bold">✓</span> Fast 2-minute reply
            </span>
            <span className="flex items-center gap-1">
              <span className="text-[#22A657] font-bold">✓</span> Transparent rates
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
