import React, { useState } from 'react';
import { X } from 'lucide-react';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip / Prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#16382C] text-[#F9F6F0] px-3.5 py-2 rounded-xl shadow-xl border border-[#D2A14E]/40 text-xs font-medium animate-bounce">
          <span>Need a cab? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#F9F6F0]/70 hover:text-[#D2A14E] ml-1 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppChatUrl("Hello, I would like to book a taxi/car rental.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 bg-[#22A657] hover:bg-[#1B8A48] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22A657] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#22A657]"></span>
        </span>
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};
