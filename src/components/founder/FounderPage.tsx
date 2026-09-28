import React, { useEffect } from 'react';
import { Badge } from '../common/Badge';
import { ChevronRight, ArrowRight, UserCheck, Car, HeartHandshake } from 'lucide-react';
import { navigateTo } from '../../utils/navigation';

export const FounderPage: React.FC = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      {/* 1. Page Header & Breadcrumbs Banner */}
      <div className="bg-[#16382C] text-[#F9F6F0] pt-10 pb-14 border-b border-[#D2A14E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#F5E8D0]/80 mb-4">
            <button
              onClick={() => navigateTo('/')}
              className="hover:text-[#D2A14E] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#D2A14E]" />
            <span className="text-[#F9F6F0] font-semibold">Our Founder</span>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="teal" size="md" className="mb-3">
              <UserCheck className="w-3.5 h-3.5 text-white" />
              <span className="font-bold tracking-wide">LEADERSHIP &amp; VISION</span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F9F6F0] tracking-tight leading-tight">
              Meet Our Founder
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#F9F6F0]/85 leading-relaxed font-normal">
              The story, values, and road experience behind SIKKIMORA CAB SERVICE.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Main Founder Story Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E3DAC9] shadow-sm">
          {/* Profile Header Block: Photo + Name/Title */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-[#E3DAC9]">
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[260px] sm:max-w-[280px]">
                <div className="overflow-hidden rounded-2xl border-2 border-[#D2A14E]/40 shadow-xl bg-[#F1ECE1]">
                  <img
                    src="/founder.jpg"
                    alt="Mr. Krishna Sharma, Founder &amp; Proprietor of SIKKIMORA CAB SERVICE"
                    className="w-full aspect-[2/3] object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-center text-left">
              <span className="text-xs font-bold text-[#D2A14E] uppercase tracking-wider">
                Founder &amp; Proprietor
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F2937] tracking-tight mt-1">
                Mr. Krishna Sharma
              </h2>
              <p className="text-sm font-semibold text-[#16382C] mt-1">
                SIKKIMORA CAB SERVICE
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#4B5563] bg-[#F9F6F0] p-3 rounded-xl border border-[#E3DAC9]">
                <HeartHandshake className="w-4 h-4 text-[#22A657] shrink-0" />
                <span>Dedicated to dependable service and warm Himalayan hospitality</span>
              </div>
            </div>
          </div>

          {/* Complete Polished Biography (Preserving exact wording and paragraph structure) */}
          <div className="pt-10 space-y-6 text-[#1F2937] text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-lg sm:text-xl font-medium text-[#16382C] leading-snug">
              For Mr. Krishna Sharma, a memorable journey begins with something simple: feeling welcomed, understood, and cared for.
            </p>

            <p>
              His interest in tourism began in Class 11 and led him to earn a postgraduate degree in the subject. He then spent over a year as a Tourism Educator, sharing his knowledge and enthusiasm with others entering the industry. Alongside this academic foundation, his experience on the road shaped the personal approach he brings to SIKKIMORA today.
            </p>

            <p>
              For nearly a year and a half, Mr. Sharma worked as a professional driver, experiencing the responsibilities of a journey firsthand. Behind the wheel, he learned how much the small details matter: arriving on time, listening patiently, responding calmly when plans change, and helping guests feel comfortable on unfamiliar roads. These experiences taught him to see every trip through the traveller’s eyes.
            </p>

            <p>
              Today, with over five years of experience in the travel business and recognition from the Tourism Department, Government of Sikkim, he brings both practical knowledge and personal care to his work.
            </p>

            {/* Core Philosophy Highlight Card */}
            <div className="my-8 p-6 rounded-2xl bg-[#F7F3E8] border-l-4 border-[#D2A14E] shadow-2xs">
              <p className="text-base sm:text-lg italic font-medium text-[#1F2937] leading-relaxed">
                “He understands that guests are trusting him with more than their transport. They are trusting him with their time, their family’s comfort, and memories they may have spent months planning.”
              </p>
            </div>

            <p>
              That understanding is at the heart of SIKKIMORA CAB SERVICE. His vision is to make every guest feel looked after, through dependable service, thoughtful planning, and warm Himalayan hospitality—from the first conversation to the final drop-off.
            </p>
          </div>

          {/* Subtle "Explore Our Cabs" Action Button at the end */}
          <div className="mt-12 pt-8 border-t border-[#E3DAC9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#4B5563]">
              Ready to plan your road journey with SIKKIMORA?
            </p>

            <button
              type="button"
              onClick={() => navigateTo('/cabs')}
              className="inline-flex items-center gap-2 bg-[#F1ECE1] hover:bg-[#E3DAC9] text-[#1F2937] hover:text-[#16382C] px-5 py-3 rounded-xl font-bold text-xs sm:text-sm border border-[#E3DAC9] transition-all duration-200 cursor-pointer shadow-2xs group"
            >
              <Car className="w-4 h-4 text-[#596F59] group-hover:text-[#16382C] transition-colors" />
              <span>Explore Our Cabs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#596F59] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
