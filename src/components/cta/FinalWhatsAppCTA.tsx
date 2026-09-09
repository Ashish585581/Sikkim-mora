import React from 'react';
import { Phone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { Badge } from '../common/Badge';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const FinalWhatsAppCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#16382C] via-[#16382C] to-[#0F261E] text-[#F9F6F0] relative overflow-hidden border-t border-[#D2A14E]/20">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#D2A14E]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-[#22A657]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Badge variant="gold" size="md" className="mb-4 shadow-sm py-1 px-3.5">
          <Sparkles className="w-3.5 h-3.5 text-[#1F2937]" />
          <span className="font-bold text-[#1F2937]">READY TO EXPLORE THE HIMALAYAS?</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Planning your next journey? <br className="hidden sm:inline" />
          <span className="text-[#D2A14E]">Book your taxi or rental car today.</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#F9F6F0]/90 max-w-2xl mx-auto leading-relaxed">
          Instant booking, verified mountain drivers, and guaranteed on-time pickups across Darjeeling, Kalimpong, Gangtok, and Nathula Pass.
        </p>

        {/* Value Points */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#F9F6F0]/90">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#22A657]" />
            Instant WhatsApp Confirmation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#22A657]" />
            Zero Advance Deposit
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#22A657]" />
            Doorstep Hotel Pickups
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppChatUrl("Hello, I want to book a taxi/rental car for my upcoming journey.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#22A657] hover:bg-[#1B8A48] text-white border-2 border-[#1B8A48] px-8 py-4 rounded-xl font-extrabold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 group cursor-pointer"
          >
            <WhatsAppIcon className="w-6 h-6 text-white group-hover:scale-105 transition-transform" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`tel:${siteConfig.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-[#F9F6F0] border border-white/20 px-6 py-4 rounded-xl font-bold text-sm md:text-base backdrop-blur-xs transition-colors cursor-pointer"
          >
            <Phone className="w-5 h-5 text-[#D2A14E]" />
            <span>Direct Call: {siteConfig.phoneDisplay}</span>
          </a>
        </div>

        {/* Operating status note */}
        <p className="mt-6 text-xs text-[#F5E8D0]/90 font-medium">
          ● Online Now • Usually responds within 2 minutes on WhatsApp
        </p>
      </div>
    </section>
  );
};
