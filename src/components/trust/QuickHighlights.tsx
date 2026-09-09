import React from 'react';
import { Sparkles, UserCheck, Clock, BadgePercent, Headphones } from 'lucide-react';
import { quickHighlights } from '../../data/highlights';

export const QuickHighlights: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-[#1F2937]";
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'UserCheck':
        return <UserCheck className={iconClass} />;
      case 'Clock':
        return <Clock className={iconClass} />;
      case 'BadgePercent':
        return <BadgePercent className={iconClass} />;
      case 'Headphones':
        return <Headphones className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section className="py-6 sm:py-8 bg-[#16382C] text-[#F9F6F0] shadow-inner border-y border-[#D2A14E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {quickHighlights.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F5E8D0] flex items-center justify-center shrink-0 shadow-sm">
                {getIcon(item.iconName)}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-[#F9F6F0] leading-snug truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#F5E8D0] truncate mt-0.5 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
