import React from 'react';
import { whyChooseUsFeatures } from '../../data/whyChooseUs';
import type { FeaturePillar } from '../../data/whyChooseUs';
import { SectionHeading } from '../common/SectionHeading';
import { ShieldCheck, Car, Wallet, HeartHandshake, Compass, Map } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#1F2937]";
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Car':
        return <Car className={iconClass} />;
      case 'Wallet':
        return <Wallet className={iconClass} />;
      case 'HeartHandshake':
        return <HeartHandshake className={iconClass} />;
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'Map':
        return <Map className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-[#F9F6F0] border-y border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Trust &amp; Experience"
          title="Why Travelers Choose Our Service"
          subtitle="We focus on safety, punctuality, and local Himalayan hospitality so your mountain journey is completely relaxing."
        />

        {/* 6 Key Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsFeatures.map((pillar: FeaturePillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E3DAC9] hover:border-[#22A657] transition-all duration-300 shadow-2xs hover:shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5E8D0] flex items-center justify-center border border-[#D2A14E]/40 mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIcon(pillar.iconName)}
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] group-hover:text-[#22A657] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-2 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Counter Strip */}
        <div className="mt-14 bg-[#16382C] rounded-2xl p-6 sm:p-10 text-[#F9F6F0] shadow-xl border border-[#D2A14E]/30">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#D2A14E]/20">
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#D2A14E]">
                {siteConfig.completedTrips}
              </div>
              <div className="text-xs sm:text-sm text-[#F5E8D0]/90 mt-1 font-medium">
                Safe Mountain Trips Completed
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#D2A14E]">
                {siteConfig.experienceYears}+ Years
              </div>
              <div className="text-xs sm:text-sm text-[#F5E8D0]/90 mt-1 font-medium">
                Himalayan Travel Experience
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#D2A14E]">
                {siteConfig.rating} ★
              </div>
              <div className="text-xs sm:text-sm text-[#F5E8D0]/90 mt-1 font-medium">
                Average Customer Rating
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#D2A14E]">
                {siteConfig.verifiedDrivers}
              </div>
              <div className="text-xs sm:text-sm text-[#F5E8D0]/90 mt-1 font-medium">
                Verified Local Hill Chauffeurs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
