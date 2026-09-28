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
    from: 'Any Pickup Location (Darjeeling, Gangtok, Siliguri)',
    to: 'Flexible Custom Mountain Sightseeing & Tour',
    distance: '80 km included',
    duration: '8 Hours / Full Day',
    hatchbackPrice: '₹1,800/day (Alto K10)',
    sedanPrice: '₹2,800/day (Dzire / Amaze)',
    suvPrice: '₹4,000/day (Ertiga / Scorpio / Innova / XUV700)',
    crystaPrice: '₹5,000 – ₹5,500/day (Maxx / Sumo / Cruiser / Savari)',
    startingPrice: '₹1,800/day',
    notes: 'Includes vehicle, commercial hill driver, fuel, and all standard driving expenses. Rates: Alto K10 ₹1,800/day | Triber ₹2,500/day | Ertiga / Scorpio / XUV700 / Innova ₹4,000/day | Maxx / Bolero Plus / Sumo ₹5,000/day | Savari / Cruiser ₹5,500/day.',
    popular: true
  },
  {
    id: 'fare-rental-hatchback',
    category: 'Car Rental',
    route: 'Maruti Suzuki Alto K10 — Per-Day Rental',
    from: 'Doorstep Pickup (Darjeeling / Gangtok / Siliguri)',
    to: 'Local Sightseeing & Hill Touring',
    distance: '80 km included',
    duration: '8 Hours',
    hatchbackPrice: '₹1,800/day',
    sedanPrice: 'N/A',
    suvPrice: 'N/A',
    startingPrice: '₹1,800/day',
    notes: 'Compact 4–5 seater hatchback with verified local mountain chauffeur. Extra km/hrs at standard transparent rates.'
  },
  {
    id: 'fare-rental-triber',
    category: 'Car Rental',
    route: 'Renault Triber (7-Seater) — Per-Day Rental',
    from: 'Doorstep Pickup (Darjeeling / Kalimpong / Siliguri)',
    to: 'Family Sightseeing & Mountain Excursions',
    distance: '80 km included',
    duration: '8 Hours',
    sedanPrice: 'N/A',
    suvPrice: '₹2,500/day',
    startingPrice: '₹2,500/day',
    notes: 'Modular 7-seater MUV with dual AC vents. Ideal for budget families and small groups.'
  },
  {
    id: 'fare-rental-suv-4000',
    category: 'Car Rental',
    route: 'Ertiga / Scorpio / Innova / XUV700 — Per-Day Rental',
    from: 'Doorstep Hotel / Airport Pickup',
    to: 'High Passes, Sightseeing & Outstation Circuits',
    distance: '80 km included',
    duration: '8 Hours',
    sedanPrice: 'N/A',
    suvPrice: '₹4,000/day',
    crystaPrice: '₹4,000/day',
    startingPrice: '₹4,000/day',
    notes: 'Choice of Maruti Ertiga, Mahindra Scorpio, Toyota Innova, or Mahindra XUV700 at flat ₹4,000/day. High comfort & powerful mountain climbing.'
  },
  {
    id: 'fare-rental-heavy-5000',
    category: 'Car Rental',
    route: 'Mahindra Maxx / Bolero Plus / Tata Sumo — Per-Day Rental',
    from: 'Doorstep Hotel / Station Pickup',
    to: 'Rugged Mountain Trails & Group Travel',
    distance: '80 km included',
    duration: '8 Hours',
    sedanPrice: 'N/A',
    suvPrice: '₹5,000/day',
    crystaPrice: '₹5,000/day',
    startingPrice: '₹5,000/day',
    notes: 'Heavy-duty 8–10 seater mountain carriers with luggage carrier for challenging terrain and large passenger loads.'
  },
  {
    id: 'fare-rental-cruiser-savari',
    category: 'Car Rental',
    route: 'Savari / Cruiser (10–13 Seater) — Per-Day Rental',
    from: 'Doorstep Pickup / Airport / Station',
    to: 'Complete Sikkim & Darjeeling Circuit',
    distance: '80 km included',
    duration: '8 Hours',
    sedanPrice: 'N/A',
    suvPrice: '₹5,500/day',
    crystaPrice: '₹5,500/day',
    startingPrice: '₹5,500/day',
    notes: 'Maximum capacity 10–13 passenger cruisers equipped with full-length steel roof rack for student tours and large groups.'
  }
];
