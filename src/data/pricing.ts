export interface RouteFare {
  id: string;
  category: 'Airport Transfer' | 'Darjeeling Taxi' | 'Kalimpong Taxi' | 'Nathula Pass' | 'Outstation' | 'Local Taxi' | 'Car Rental';
  route: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  hatchbackPrice?: string;
  sedanPrice: string;
  suvPrice: string;
  crystaPrice?: string;
  startingPrice: string;
  notes?: string;
  popular?: boolean;
}

export const pricingCategories = [
  'All Fares',
  'Airport Transfer',
  'Darjeeling Taxi',
  'Kalimpong Taxi',
  'Nathula Pass',
  'Outstation',
  'Local Taxi',
  'Car Rental'
] as const;

export const routeFares: RouteFare[] = [
  {
    id: 'fare-ixb-darjeeling',
    category: 'Airport Transfer',
    route: 'Bagdogra Airport (IXB) to Darjeeling',
    from: 'Bagdogra Airport (IXB)',
    to: 'Darjeeling Town / Mall Road',
    distance: '70 km',
    duration: '3.0 - 3.5 hrs',
    hatchbackPrice: '₹2,400',
    sedanPrice: '₹2,800',
    suvPrice: '₹3,500',
    crystaPrice: '₹4,200',
    startingPrice: '₹2,400',
    notes: 'Scenic drive via Rohini & Kurseong tea gardens. One-way private cab.',
    popular: true
  },
  {
    id: 'fare-njp-darjeeling',
    category: 'Outstation',
    route: 'NJP Railway Station to Darjeeling',
    from: 'NJP Railway Station / Siliguri',
    to: 'Darjeeling',
    distance: '74 km',
    duration: '3.5 hrs',
    hatchbackPrice: '₹2,400',
    sedanPrice: '₹2,800',
    suvPrice: '₹3,400',
    crystaPrice: '₹4,200',
    startingPrice: '₹2,400',
    notes: 'Doorstep pickup from station platform exit with nameboard on request.',
    popular: true
  },
  {
    id: 'fare-ixb-gangtok',
    category: 'Airport Transfer',
    route: 'Bagdogra Airport (IXB) to Gangtok',
    from: 'Bagdogra Airport (IXB)',
    to: 'Gangtok Hotel / MG Marg',
    distance: '125 km',
    duration: '4.5 - 5.0 hrs',
    hatchbackPrice: '₹3,500',
    sedanPrice: '₹4,000',
    suvPrice: '₹4,800',
    crystaPrice: '₹5,800',
    startingPrice: '₹3,500',
    notes: 'Drive along the picturesque Teesta River (NH10). Private point-to-point drop.',
    popular: true
  },
  {
    id: 'fare-ixb-kalimpong',
    category: 'Airport Transfer',
    route: 'Bagdogra Airport (IXB) to Kalimpong',
    from: 'Bagdogra Airport (IXB)',
    to: 'Kalimpong Town',
    distance: '75 km',
    duration: '3.0 hrs',
    hatchbackPrice: '₹2,500',
    sedanPrice: '₹2,900',
    suvPrice: '₹3,600',
    crystaPrice: '₹4,400',
    startingPrice: '₹2,500',
    notes: 'Smooth ride via Sevoke Coronation Bridge and Teesta Bazar.'
  },
  {
    id: 'fare-darjeeling-gangtok',
    category: 'Outstation',
    route: 'Darjeeling to Gangtok (or vice versa)',
    from: 'Darjeeling Town',
    to: 'Gangtok Town',
    distance: '98 km',
    duration: '3.5 - 4.0 hrs',
    hatchbackPrice: '₹3,200',
    sedanPrice: '₹3,600',
    suvPrice: '₹4,200',
    crystaPrice: '₹5,200',
    startingPrice: '₹3,200',
    notes: 'Scenic mountain transfer through Peshok tea gardens and Lopchu peda stalls.',
    popular: true
  },
  {
    id: 'fare-darjeeling-kalimpong',
    category: 'Kalimpong Taxi',
    route: 'Darjeeling to Kalimpong',
    from: 'Darjeeling',
    to: 'Kalimpong',
    distance: '50 km',
    duration: '2.5 hrs',
    hatchbackPrice: '₹2,200',
    sedanPrice: '₹2,500',
    suvPrice: '₹3,200',
    crystaPrice: '₹3,800',
    startingPrice: '₹2,200',
    notes: 'Passes through Lopchu view point, Teesta confluence, and lush valleys.'
  },
  {
    id: 'fare-tiger-hill',
    category: 'Darjeeling Taxi',
    route: 'Darjeeling Tiger Hill Sunrise (3-Point Tour)',
    from: 'Darjeeling Hotel',
    to: 'Tiger Hill, Ghoom Monastery & Batasia Loop',
    distance: '30 km circuit',
    duration: '3.5 hrs (4:00 AM start)',
    hatchbackPrice: '₹1,600',
    sedanPrice: '₹1,900',
    suvPrice: '₹2,400',
    crystaPrice: '₹2,800',
    startingPrice: '₹1,600',
    notes: 'Early 4:00 AM hotel pickup to witness Kanchenjunga sunrise from Tiger Hill.',
    popular: true
  },
  {
    id: 'fare-darjeeling-7point',
    category: 'Darjeeling Taxi',
    route: 'Darjeeling Local 7-Point Sightseeing',
    from: 'Darjeeling Hotel',
    to: 'HMI, Zoo, Ropeway, Tea Estate, Japanese Temple, Peace Pagoda, Tibetan Center',
    distance: '35 km circuit',
    duration: 'Full Day (5-6 hrs)',
    hatchbackPrice: '₹2,200',
    sedanPrice: '₹2,500',
    suvPrice: '₹3,000',
    crystaPrice: '₹3,600',
    startingPrice: '₹2,200',
    notes: 'Complete day tour of Darjeeling’s most celebrated heritage and nature spots.'
  },
  {
    id: 'fare-nathula-pass',
    category: 'Nathula Pass',
    route: 'Gangtok to Tsomgo Lake, Baba Mandir & Nathula Pass',
    from: 'Gangtok (Vajra Stand)',
    to: 'Nathula Pass (Indo-China Border, 14,140 ft)',
    distance: '110 km round trip',
    duration: 'Full Day (8:00 AM - 4:00 PM)',
    hatchbackPrice: 'N/A (SUVs mandatory)',
    sedanPrice: 'N/A (SUVs mandatory)',
    suvPrice: '₹4,800',
    crystaPrice: '₹6,500',
    startingPrice: '₹4,800',
    notes: 'Includes vehicle permit fee & driver. (Permits require photo ID submission 1 day prior).',
    popular: true
  },
  {
    id: 'fare-darjeeling-mirik',
    category: 'Darjeeling Taxi',
    route: 'Darjeeling to Mirik Lake & Pashupati Border',
    from: 'Darjeeling',
    to: 'Mirik Lake, Tingling Viewpoint & Indo-Nepal Border',
    distance: '100 km round trip',
    duration: 'Full Day (6-7 hrs)',
    hatchbackPrice: '₹2,600',
    sedanPrice: '₹3,000',
    suvPrice: '₹3,800',
    crystaPrice: '₹4,500',
    startingPrice: '₹2,600',
    notes: 'Includes boat riding at Sumendu Lake, orange orchards, and border market visit.'
  },
  {
    id: 'fare-kalimpong-lava',
    category: 'Kalimpong Taxi',
    route: 'Kalimpong to Lava, Rishyap & Lolegaon Day Trip',
    from: 'Kalimpong Hotel',
    to: 'Lava Monastery, Canopy Walk & Rishyap Viewpoints',
    distance: '70 km round trip',
    duration: 'Full Day (6 hrs)',
    hatchbackPrice: '₹2,800',
    sedanPrice: '₹3,200',
    suvPrice: '₹4,000',
    crystaPrice: '₹4,800',
    startingPrice: '₹2,800',
    notes: 'Serene pine forest trails, mountain monastery, and Neora Valley gateways.'
  },
  {
    id: 'fare-full-day-rental',
    category: 'Car Rental',
    route: 'Full Day Car Rental with Driver (Within 80 km / 8 hrs)',
    from: 'Any Pickup Location',
    to: 'Flexible Custom Mountain Itinerary',
    distance: '80 km included',
    duration: '8 Hours',
    hatchbackPrice: '₹2,500/day',
    sedanPrice: '₹2,800/day',
    suvPrice: '₹3,500/day',
    crystaPrice: '₹4,500/day',
    startingPrice: '₹2,500',
    notes: 'Includes car, commercial driver, fuel, and all standard hill driving expenses.'
  }
];
