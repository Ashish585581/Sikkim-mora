import React from 'react';
import { Badge } from '../common/Badge';
import { ArrowRight, UserCheck } from 'lucide-react';
import { navigateTo } from '../../utils/navigation';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-16 md:py-20 bg-[#F7F3E8] border-t border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E3DAC9] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Founder Portrait Photo */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#D2A14E]/30 via-transparent to-[#16382C]/20 -z-10 blur-xs" />
                <div className="overflow-hidden rounded-2xl border-2 border-[#E3DAC9] shadow-lg bg-[#F1ECE1]">
                  <img
                    src="/founder.jpg"
                    alt="Mr. Krishna Sharma, Founder &amp; Proprietor of SIKKIMORA CAB SERVICE"
                    className="w-full aspect-[2/3] object-cover object-top hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Founder Information & Introduction */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <Badge variant="teal" size="sm" className="shadow-2xs">
                  <UserCheck className="w-3.5 h-3.5 text-white" />
                  <span className="font-bold tracking-wide">LEADERSHIP &amp; VISION</span>
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F2937] tracking-tight leading-tight">
                Meet Our Founder
              </h2>

              <div className="mt-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#16382C]">
                  Mr. Krishna Sharma
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#D2A14E] uppercase tracking-wider mt-0.5">
                  Founder &amp; Proprietor, SIKKIMORA CAB SERVICE
                </p>
              </div>

              {/* Short Introduction Paragraph */}
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-6 font-normal">
                “For Mr. Krishna Sharma, a memorable journey begins with feeling welcomed, understood, and cared for. With a postgraduate degree in tourism and over five years of experience in the travel business—including time as a Tourism Educator and professional driver—he brings practical knowledge and personal care to SIKKIMORA CAB SERVICE.”
              </p>

              {/* Read His Story Action Button */}
              <div>
                <button
                  type="button"
                  onClick={() => navigateTo('/our-founder')}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#16382C] hover:bg-[#0F261E] text-[#F9F6F0] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm border border-[#D2A14E]/30 shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer group"
                >
                  <span>Read His Story</span>
                  <ArrowRight className="w-4 h-4 text-[#D2A14E] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
