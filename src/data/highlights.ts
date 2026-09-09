export interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Sparkles' | 'UserCheck' | 'Clock' | 'BadgePercent' | 'Headphones';
}

export const quickHighlights: HighlightItem[] = [
  {
    id: 'clean-cars',
    title: 'Clean & Comfortable Cars',
    subtitle: 'Sanitized, well-maintained AC fleet',
    iconName: 'Sparkles'
  },
  {
    id: 'experienced-drivers',
    title: 'Experienced Drivers',
    subtitle: '10+ yrs mountain road mastery',
    iconName: 'UserCheck'
  },
  {
    id: 'on-time-service',
    title: 'On-Time Service',
    subtitle: 'Zero flight or train delays',
    iconName: 'Clock'
  },
  {
    id: 'affordable-prices',
    title: 'Affordable Prices',
    subtitle: 'Transparent, no hidden surcharges',
    iconName: 'BadgePercent'
  },
  {
    id: 'customer-support',
    title: '24/7 Customer Support',
    subtitle: 'Instant WhatsApp assistance',
    iconName: 'Headphones'
  }
];
