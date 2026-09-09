import React, { useState } from 'react';
import { faqs } from '../../data/faq';
import type { FAQItem } from '../../data/faq';
import { SectionHeading } from '../common/SectionHeading';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F0] border-y border-[#E3DAC9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about taxi booking, permits, mountain driving, and luggage capacity."
        />

        <div className="space-y-3">
          {faqs.map((faq: FAQItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#E3DAC9] overflow-hidden transition-all bg-white shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-[#1F2937] hover:text-[#22A657] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#596F59] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#596F59] shrink-0 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D2A14E]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#E3DAC9]/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-8 text-center bg-white p-5 rounded-2xl border border-[#E3DAC9] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#1F2937]">Have a specific query or special itinerary?</h4>
            <p className="text-xs text-[#4B5563]">Our travel coordinators are online to assist you immediately.</p>
          </div>
          <a
            href={getWhatsAppChatUrl("Hello, I have a question regarding taxi booking.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white border border-[#1B8A48] px-4 py-2.5 rounded-xl text-xs font-bold shadow-2xs hover:shadow-xs whitespace-nowrap transition-all duration-200 active:scale-95 cursor-pointer group"
          >
            <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-105 transition-transform" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
