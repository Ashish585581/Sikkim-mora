export interface FeaturePillar {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Map' | 'Wallet' | 'HeartHandshake' | 'Car' | 'Compass';
}

export const whyChooseUsFeatures: FeaturePillar[] = [
  {
    id: 'experienced-drivers',
    title: 'Experienced Mountain Drivers',
    description: 'Our chauffeurs are certified, local hill residents with deep knowledge of foggy roads, hairpin bends, and monsoon shortcuts.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'well-maintained-cars',
    title: 'Well-Maintained Modern Fleet',
    description: 'Every vehicle undergoes strict periodic safety checks, tire inspections, and regular sanitation before every journey.',
    iconName: 'Car'
  },
  {
    id: 'affordable-pricing',
    title: 'Affordable & Transparent Pricing',
    description: 'Clear upfront pricing with no surprise fuel surcharges, sudden driver tips demand, or unexpected hidden fees.',
    iconName: 'Wallet'
  },
  {
    id: 'reliable-service',
    title: 'Reliable & Punctual Service',
    description: 'We track flights at Bagdogra (IXB) and trains at NJP station so our drivers are waiting for you before you land.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'comfortable-travel',
    title: 'Comfortable Mountain Travel',
    description: 'High-riding, spacious vehicles with clean seat covers, AC/heating options, and luggage carriers suited for hilly terrains.',
    iconName: 'Compass'
  },
  {
    id: 'local-route-knowledge',
    title: 'Local Route & Permit Assistance',
    description: 'Hassle-free permit processing for restricted regions like Nathula Pass, Baba Mandir, and North Sikkim without agency delays.',
    iconName: 'Map'
  }
];
