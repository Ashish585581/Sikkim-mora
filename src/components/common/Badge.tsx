import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'mint' | 'teal' | 'white' | 'outline' | 'amber' | 'gold' | 'forest' | 'sage';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  className = ''
}) => {
  const variantStyles = {
    mint: 'bg-[#596F59] text-white font-medium',
    teal: 'bg-[#596F59] text-white font-medium',
    gold: 'bg-[#F5E8D0] text-[#1F2937] border border-[#D2A14E]/60 font-bold',
    forest: 'bg-[#596F59] text-white font-medium',
    sage: 'bg-[#596F59] text-white font-medium',
    white: 'bg-white text-[#1F2937] shadow-2xs border border-[#E3DAC9] font-semibold',
    outline: 'border border-[#596F59] text-[#1F2937] bg-white/90',
    amber: 'bg-[#D2A14E] text-[#1F2937] font-semibold'
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full',
    md: 'text-xs md:text-sm px-3 py-1 rounded-full'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 transition-colors ${variantStyles[variant] || variantStyles.gold} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
};
