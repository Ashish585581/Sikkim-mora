import React from 'react';
import { Plane, Camera, MapPin, Mountain, Compass, Flag, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/services';
import type { ServiceItem } from '../../data/services';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const ServicesSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#173F3B]";
    switch (iconName) {
      case 'Plane':
        return <Plane className={iconClass} />;
      case 'Camera':
        return <Camera className={iconClass} />;
      case 'MapPin':
        return <MapPin className={iconClass} />;
      case 'Mountain':
        return <Mountain className={iconClass} />;
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'Flag':
        return <Flag className={iconClass} />;
      case 'Calendar':
        return <Calendar className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  const handleServiceInquiry = (service: ServiceItem) => {
    const message = [
      `*Service Inquiry - ${service.title}*`,
      ``,
      `Hello, I would like to enquire about: *${service.title}*.`,
      `Estimated Rate: ${service.startingPrice}`,
      ``,
      `Please let me know availability and booking process.`
    ].join('\n');

    return getWhatsAppChatUrl(message);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F9F6F0] border-y border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="What We Offer"
          title="Complete Taxi &amp; Travel Services"
          subtitle="From emergency airport transfers to high-altitude Himalayan expeditions, we offer transparent and stress-free taxi services."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E3DAC9] hover:border-[#22A657] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-xl group"
            >
              <div>
                {/* Top Icon & Badge Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F5E8D0] flex items-center justify-center border border-[#D2A14E]/40 group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <Badge variant="teal" size="sm">
                      {service.badge}
                    </Badge>
                  )}
                </div>

                {/* Title and Short Description */}
                <h3 className="text-xl font-bold text-[#1F2937] group-hover:text-[#22A657] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-2 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Highlights Checklist */}
                <div className="mt-4 pt-4 border-t border-[#E3DAC9] space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#1F2937]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22A657] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Starting Price & Booking CTA */}
              <div className="mt-6 pt-4 border-t border-[#E3DAC9] flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-[#4B5563] uppercase font-semibold block">
                    Indicative Fare
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#1F2937]">
                    {service.startingPrice}
                  </span>
                </div>

                <a
                  href={handleServiceInquiry(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#22A657] hover:bg-[#1B8A48] text-white border border-[#1B8A48] px-3.5 py-2 rounded-xl text-xs font-bold shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-95 group/btn cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3 h-3 text-white transform group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
