import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subtitle,
  alignment = 'center',
  light = false,
  className = ''
}) => {
  const alignClass = alignment === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl mb-10 md:mb-14 ${alignClass} ${className}`}>
      {badgeText && (
        <Badge
          variant={light ? 'gold' : 'teal'}
          size="md"
          className="mb-3 uppercase tracking-wider text-[11px] font-bold"
        >
          {badgeText}
        </Badge>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-[#F9F6F0]' : 'text-[#1F2937]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed ${
            light ? 'text-[#F5E8D0]' : 'text-[#4B5563]'
          } max-w-2xl`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
