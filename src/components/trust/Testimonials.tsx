import React from 'react';
import { testimonials } from '../../data/testimonials';
import type { Testimonial } from '../../data/testimonials';
import { SectionHeading } from '../common/SectionHeading';
import { Star, MapPin, Car, CheckCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F1ECE1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Verified Reviews"
          title="What Our Travelers Say"
          subtitle={`Rated ${siteConfig.rating} out of 5 based on ${siteConfig.reviewCount}+ customer reviews across West Bengal and Sikkim travel routes.`}
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t: Testimonial) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-[#E3DAC9] hover:border-[#22A657] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3 text-[#D2A14E]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D2A14E] text-[#D2A14E]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#1F2937] italic leading-relaxed">
                  "{t.review}"
                </p>

                {/* Route & Vehicle Tag */}
                <div className="mt-4 pt-3 border-t border-[#E3DAC9] space-y-1 text-[11px] text-[#4B5563]">
                  <div className="flex items-center gap-1.5 font-medium text-[#1F2937]">
                    <MapPin className="w-3 h-3 text-[#596F59] shrink-0" />
                    <span className="truncate">{t.routeTaken}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3 h-3 text-[#596F59] shrink-0" />
                    <span>Car: {t.vehicleUsed}</span>
                  </div>
                </div>
              </div>

              {/* Reviewer Bio */}
              <div className="mt-5 pt-3 border-t border-[#E3DAC9] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1F2937] flex items-center gap-1">
                    {t.name}
                    <CheckCircle className="w-3 h-3 text-[#22A657]" />
                  </h4>
                  <span className="text-[10px] text-[#4B5563]">{t.location}</span>
                </div>
                <span className="text-[10px] text-[#4B5563] bg-[#F9F6F0] px-2 py-0.5 rounded border border-[#E3DAC9]">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
