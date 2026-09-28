export interface Vehicle {
  id: string;
  name: string;
  category: 'Hatchback' | 'Sedan' | 'SUV / MUV' | 'Luxury MUV';
  tagline: string;
  image: string;
  seats: string;
  seatsCount: number;
  luggage: string;
  fuel: string;
  ac: string;
  startingPrice: string;
  priceNumeric: number;
  priceUnit: string;
  description: string;
  idealFor: string[];
  features: string[];
  specs: {
    engine?: string;
    groundClearance?: string;
    bootSpace?: string;
    hillCapability: string;
  };
  popular?: boolean;
}

export const vehicles: Vehicle[] = [
  // ==========================================
  // HATCHBACKS
  // ==========================================
  {
    id: 'maruti-alto-k10',
    name: 'Maruti Suzuki Alto K10',
    category: 'Hatchback',
    tagline: 'Compact, pocket-friendly, and nimble for quick mountain hops',
    image: '/vehicle-placeholder.svg',
    seats: '4–5 Seats',
    seatsCount: 5,
    luggage: '2 Medium Bags',
    fuel: 'Petrol',
    ac: 'AC Available',
    startingPrice: '₹1,800',
    priceNumeric: 1800,
    priceUnit: '/day',
    popular: true,
    description: 'Compact dimensions, peppy 1.0L engine, and nimble turning radius make the Alto K10 a budget-friendly favorite for couples and solo travelers navigating narrow mountain lanes.',
    idealFor: [
      'Solo travelers & couples (1–2 pax)',
      'Budget point-to-point transfers',
      'Darjeeling town & local market trips',
      'Short trips on narrow hill roads'
    ],
    features: [
      'High Fuel Mileage',
      'Powerful Cabin Heater & AC',
      'Agile Mountain Maneuverability',
      'Verified Local Chauffeur',
      'Clean & Sanitized Cabin'
    ],
    specs: {
      engine: '1.0L K10C Dual Jet (998 cc)',
      groundClearance: '167 mm',
      bootSpace: '214 Liters',
      hillCapability: 'Nimble handling on tight hill hairpins and steep climbs'
    }
  },
  {
    id: 'toyota-glanza',
    name: 'Toyota Glanza',
    category: 'Hatchback',
    tagline: 'Premium, stylish, and fuel-efficient hatchback with plush interiors',
    image: '/toyota-glanza.jpg',
    seats: '4–5 Seats',
    seatsCount: 5,
    luggage: '2–3 Medium Bags',
    fuel: 'Petrol',
    ac: 'AC Available',
    startingPrice: '₹2,600',
    priceNumeric: 2600,
    priceUnit: '/day',
    popular: false,
    description: 'A refined premium hatchback offering plush seating, smooth suspension, and great fuel efficiency for couples and small families exploring Darjeeling and Kalimpong.',
    idealFor: [
      'Couples & Small Families (2–4 pax)',
      'City Transfers & Scenic Day Trips',
      'Bagdogra Airport & NJP drops',
      'Comfort-focused budget journeys'
    ],
    features: [
      'Automatic Climate Control',
      'Plush Ergonomic Seating',
      'Touchscreen Infotainment System',
      'Quiet Cabin Acoustic Insulation',
      'Eco-friendly Low Emissions'
    ],
    specs: {
      groundClearance: '170 mm',
      bootSpace: '318 Liters',
      hillCapability: 'Agile maneuvering on winding mountain passes'
    }
  },
  {
    id: 'maruti-wagonr',
    name: 'Maruti Suzuki WagonR',
    category: 'Hatchback',
    tagline: 'Tall-boy stance with easy ingress and budget-friendly comfort',
    image: '/wagonr.jpg',
    seats: '4–5 Seats',
    seatsCount: 5,
    luggage: '2 Medium Bags',
    fuel: 'Petrol',
    ac: 'AC Available',
    startingPrice: '₹2,400',
    priceNumeric: 2400,
    priceUnit: '/day',
    popular: false,
    description: 'An economical tall-boy hatchback featuring generous headroom, comfortable seating, and easy boarding for budget-conscious families and senior travelers.',
    idealFor: [
      'Senior travelers needing easy ingress',
      'Budget couples & small families',
      'Local Darjeeling market & hotel transfers',
      'Economical point-to-point drops'
    ],
    features: [
      'High Roofline & Easy Entry',
      'Chilled Air Conditioning',
      'Clean & Sanitized Interiors',
      'Experienced Local Hill Chauffeur',
      'Light on Budget'
    ],
    specs: {
      groundClearance: '165 mm',
      bootSpace: '341 Liters',
      hillCapability: 'Smooth handling on paved hill routes'
    }
  },

  // ==========================================
  // SEDANS
  // ==========================================
  {
    id: 'maruti-dzire',
    name: 'Maruti Suzuki Swift Dzire',
    category: 'Sedan',
    tagline: 'Spacious, smooth, and comfortable compact sedan for city and hill travel',
    image: '/vehicle-placeholder.svg',
    seats: '4–5 Seats',
    seatsCount: 5,
    luggage: '3 Large Bags',
    fuel: 'Petrol / Diesel',
    ac: 'AC Available',
    startingPrice: '₹2,800',
    priceNumeric: 2800,
    priceUnit: '/day',
    popular: true,
    description: 'India\'s most trusted sedan offering refined suspension, generous boot space, and excellent legroom for peaceful travel between airport, stations, and hill resorts.',
    idealFor: [
      'Families of 3–4 members',
      'Airport Pickup & Drop (Bagdogra)',
      'Inter-city transfers (Siliguri to Darjeeling / Gangtok)',
      'Corporate & Leisure Travelers'
    ],
    features: [
      'Dual Air Conditioning',
      'Generous Trunk Luggage Space',
      'Ergonomic Reclining Seats',
      'Mobile Charging Points',
      'Complimentary Bottled Water'
    ],
    specs: {
      groundClearance: '170 mm',
      bootSpace: '378 Liters',
      hillCapability: 'Comfortable on all highway & scenic hill routes'
    }
  },
  {
    id: 'honda-amaze',
    name: 'Honda Amaze',
    category: 'Sedan',
    tagline: 'Premium Japanese engineering with sophisticated styling and plush ride',
    image: '/vehicle-placeholder.svg',
    seats: '4–5 Seats',
    seatsCount: 5,
    luggage: '3 Large Bags',
    fuel: 'Petrol / Diesel',
    ac: 'AC Available',
    startingPrice: '₹2,800',
    priceNumeric: 2800,
    priceUnit: '/day',
    popular: false,
    description: 'Engineered for comfort with a cavernous trunk, whisper-quiet cabin, and smooth transmission for relaxed touring across North Bengal and Sikkim.',
    idealFor: [
      'Small families prioritizing quiet comfort',
      'Airport & railway station round-trips',
      'Scenic Darjeeling tea estate day tours',
      'Executive and business travelers'
    ],
    features: [
      'Automatic Climate Control',
      'Huge 420-Liter Boot Capacity',
      'Soft Cushioned Seat Bolstering',
      'Rear Armrest with Cup Holders',
      'Advanced Safety Features'
    ],
    specs: {
      groundClearance: '170 mm',
      bootSpace: '420 Liters',
      hillCapability: 'Smooth i-VTEC power delivery on inclines'
    }
  },

  // ==========================================
  // SUV / MUV & LUXURY SEGMENT
  // ==========================================
  {
    id: 'mahindra-scorpio',
    name: 'Mahindra Scorpio',
    category: 'SUV / MUV',
    tagline: 'Tough, muscular mountain legend built for steep gradients and rough terrain',
    image: '/vehicle-placeholder.svg',
    seats: '7 Seats',
    seatsCount: 7,
    luggage: '3–4 Large Bags + Roof Carrier',
    fuel: 'Diesel',
    ac: 'AC Available (Front & Rear)',
    startingPrice: '₹4,000',
    priceNumeric: 4000,
    priceUnit: '/day',
    popular: true,
    description: 'A quintessential mountain SUV boasting a rugged ladder-frame chassis, formidable mHawk diesel torque, and high ground clearance to conquer steep Himalayan ghats with ease.',
    idealFor: [
      'Families & adventure enthusiasts (5–7 pax)',
      'Steep hilly routes like Tiger Hill & Ravangla',
      'Rough road segments in West & South Sikkim',
      'Robust, high-stance touring'
    ],
    features: [
      'Heavy-Duty Mountain Suspension',
      'High Seating Stance with Panoramic Road View',
      'Roof Luggage Carrier for Extra Bags',
      'Powerful Rear Wheel Drive Climbing Torque',
      'Veteran Mountain Chauffeur'
    ],
    specs: {
      engine: '2.2L mHawk Diesel (2184 cc)',
      groundClearance: '180 mm',
      bootSpace: 'Flexible Rear Storage + Roof Carrier',
      hillCapability: 'High low-end torque perfect for steep hairpin bends'
    }
  },
  {
    id: 'toyota-innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Luxury MUV',
    tagline: 'The undisputed gold standard for luxury mountain touring & executive comfort',
    image: '/vehicle-placeholder.svg',
    seats: '6–7 Seats',
    seatsCount: 7,
    luggage: '4–5 Large Bags + Roof Carrier',
    fuel: 'Diesel',
    ac: 'Dual AC (Front & Rear)',
    startingPrice: '₹3,500',
    priceNumeric: 3500,
    priceUnit: '/day',
    popular: true,
    description: 'Unmatched ride comfort, captain seats, powerful engine, and exceptional safety for long Himalayan journeys across Sikkim, Nathula Pass, and Darjeeling.',
    idealFor: [
      'Family Groups & Friends (5–7 persons)',
      'North Sikkim (Lachung, Lachen, Yumthang)',
      'Nathula Pass & Tsomgo Lake expeditions',
      'High-comfort multi-day mountain itineraries'
    ],
    features: [
      'Captain Seat Luxury Seating',
      'Independent Rear AC Vents',
      'High Ground Clearance for rough terrain',
      'Large Luggage Carrier on Roof',
      'Senior Driver with 10+ yrs Mountain Experience'
    ],
    specs: {
      engine: '2.4L D-4D Turbo Diesel (2393 cc)',
      groundClearance: '178 mm',
      bootSpace: '300L (Expandable with roof carrier)',
      hillCapability: 'Superior high-torque engine for steep mountain climbs'
    }
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova',
    category: 'SUV / MUV',
    tagline: 'Classic, dependable comfort with spacious seating for mountain roads',
    image: '/vehicle-placeholder.svg',
    seats: '6–7 Seats',
    seatsCount: 7,
    luggage: '4–5 Large Bags + Roof Carrier',
    fuel: 'Diesel',
    ac: 'Dual AC (Front & Rear)',
    startingPrice: '₹4,000',
    priceNumeric: 4000,
    priceUnit: '/day',
    popular: true,
    description: 'The proven legend of mountain travel, offering rock-solid reliability, plush rear seating, and stable hill cruising across Darjeeling, Gangtok, and North Sikkim.',
    idealFor: [
      'Family Groups & Friends (5–7 persons)',
      'Scenic Himalayan road trips',
      'Bagdogra Airport & NJP pickups',
      'Comfortable multi-day family charters'
    ],
    features: [
      'Comfortable Multi-Row Seating',
      'Dual Air Conditioning Vents',
      'High Ground Clearance',
      'Sturdy Roof Luggage Rack',
      'Experienced Himalayan Driver'
    ],
    specs: {
      engine: '2.5L D-4D Diesel (2494 cc)',
      groundClearance: '176 mm',
      bootSpace: '300L + Roof Carrier',
      hillCapability: 'Proven durability on all mountain roads'
    }
  },
  {
    id: 'mahindra-xuv700',
    name: 'Mahindra XUV700',
    category: 'SUV / MUV',
    tagline: 'Premium luxury SUV with cutting-edge comfort and commanding power',
    image: '/vehicle-placeholder.svg',
    seats: '6–7 Seats',
    seatsCount: 7,
    luggage: '3–4 Large Bags',
    fuel: 'Diesel',
    ac: 'Dual-Zone Automatic Climate Control',
    startingPrice: '₹4,000',
    priceNumeric: 4000,
    priceUnit: '/day',
    popular: false,
    description: 'A high-performance modern SUV delivering world-class safety, whisper-quiet cabin acoustics, and effortless high-torque hill climbing for luxury family touring.',
    idealFor: [
      'Families prioritizing luxury and modern ride comfort',
      'Executive & VIP holiday transfers',
      'Gangtok, Pelling & Darjeeling scenic tours',
      'High-speed highway & steep hill comfort'
    ],
    features: [
      'Dual-Zone Automatic Climate Control',
      'Plush Leatherette Ergonomic Seating',
      'Superior Multi-Link Independent Suspension',
      '5-Star Global NCAP Safety Architecture',
      'High Torque Turbo Diesel Engine'
    ],
    specs: {
      engine: '2.2L mHawk Turbo Diesel (2184 cc)',
      groundClearance: '200 mm',
      bootSpace: '240 Liters (Expandable with 3rd row folded)',
      hillCapability: 'Exceptional 420 Nm torque effortlessly climbs steepest gradients'
    }
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'SUV / MUV',
    tagline: 'Smooth, fuel-efficient 7-seater MUV with premium cabin comfort',
    image: '/vehicle-placeholder.svg',
    seats: '6–7 Seats',
    seatsCount: 7,
    luggage: '3–4 Large Bags + Roof Rack',
    fuel: 'Petrol / Hybrid',
    ac: 'Dual AC (Front & Rear)',
    startingPrice: '₹4,000',
    priceNumeric: 4000,
    priceUnit: '/day',
    popular: true,
    description: 'One of India\'s most favored 7-seater touring vehicles, featuring plush cushioned seats, independent rear air conditioning, and smooth suspension for long mountain journeys.',
    idealFor: [
      'Families & small groups (5–6 pax)',
      'Airport transfers from Bagdogra (IXB)',
      'Multi-day Darjeeling & Gangtok tours',
      'Comfortable outstation road trips'
    ],
    features: [
      'Roof-Mounted Rear AC with Controller',
      'Plush Reclining 2nd Row Seats',
      'Smooth Smart Hybrid Suspension',
      'Generous Knee Room and Headroom',
      'Experienced Himalayan Chauffeur'
    ],
    specs: {
      engine: '1.5L K15C Smart Hybrid (1462 cc)',
      groundClearance: '185 mm',
      bootSpace: '209 Liters (Expandable with 3rd row folded)',
      hillCapability: 'Reliable hill-climbing power with comfortable ride quality'
    }
  },
  {
    id: 'renault-triber',
    name: 'Renault Triber',
    category: 'SUV / MUV',
    tagline: 'Modular 7-seater space with modern comfort and budget practicality',
    image: '/vehicle-placeholder.svg',
    seats: '6–7 Seats',
    seatsCount: 7,
    luggage: '2–3 Bags (Expandable)',
    fuel: 'Petrol',
    ac: 'AC with Dual Air Vents',
    startingPrice: '₹2,500',
    priceNumeric: 2500,
    priceUnit: '/day',
    popular: false,
    description: 'An ingenious 7-seater sub-4m MUV offering flexible seating configurations, dual AC vents in all rows, and generous passenger space for family trips across Darjeeling and Kalimpong.',
    idealFor: [
      'Budget family groups (4–6 pax)',
      'Intercity drops & day excursions',
      'Sightseeing around Darjeeling & Mirik',
      'Cost-conscious group travel'
    ],
    features: [
      'Independent AC Vents for 2nd & 3rd Rows',
      'Modular Foldable Seating Layout',
      'High Seating Position & Clear Visibility',
      'Spacious Legroom for passengers',
      'Experienced Hill Driver'
    ],
    specs: {
      engine: '1.0L Energy 3-Cylinder Petrol (999 cc)',
      groundClearance: '182 mm',
      bootSpace: '84L (Expandable to 625L with 3rd row folded)',
      hillCapability: 'High ground clearance suitable for uneven mountain passes'
    }
  },

  // ==========================================
  // 9-SEATER & 12-SEATER HIGH CAPACITY SEGMENTS
  // ==========================================
  {
    id: 'mahindra-maxx',
    name: 'Mahindra Maxx',
    category: 'SUV / MUV',
    tagline: 'High-capacity mountain workhorse built for rugged terrains and large groups',
    image: '/vehicle-placeholder.svg',
    seats: '8–10 Seats',
    seatsCount: 10,
    luggage: '4–6 Large Bags + Heavy Roof Carrier',
    fuel: 'Diesel',
    ac: 'AC Available',
    startingPrice: '₹5,000',
    priceNumeric: 5000,
    priceUnit: '/day',
    popular: false,
    description: 'A legendary Himalayan utility vehicle engineered with a heavy-duty chassis and dependable direct-injection diesel power to transport large family groups and bulky baggage over rough passes.',
    idealFor: [
      'Large families & travel groups (8–10 pax)',
      'Heavy luggage & trekking expeditions',
      'Challenging high-altitude mountain sectors',
      'Economical shared and group charters'
    ],
    features: [
      'High Seating Capacity (Up to 10 Persons)',
      'Heavy-Duty Commercial Roof Carrier',
      'Rigid Leaf Spring Mountain Suspension',
      'Dependable All-Weather Hill Reliability',
      'Senior Mountain Road Driver'
    ],
    specs: {
      engine: '2.5L MDI 3200TC Diesel (2523 cc)',
      groundClearance: '180 mm',
      bootSpace: 'Heavy Luggage Roof Carrier + Flexible Rear Storage',
      hillCapability: 'High low-speed pulling torque for rugged mountain slopes'
    }
  },
  {
    id: 'mahindra-bolero-plus',
    name: 'Mahindra Bolero Plus',
    category: 'SUV / MUV',
    tagline: 'Extended 9-seater rugged SUV with robust suspension for tough Himalayan roads',
    image: '/vehicle-placeholder.svg',
    seats: '8–9 Seats',
    seatsCount: 9,
    luggage: '4–5 Large Bags + Roof Rack',
    fuel: 'Diesel',
    ac: 'AC Available',
    startingPrice: '₹5,000',
    priceNumeric: 5000,
    priceUnit: '/day',
    popular: false,
    description: 'Featuring an extended wheelbase and 9-passenger seating, the Bolero Plus is specially built to handle rough hill terrain with proven reliability and superior load capacity.',
    idealFor: [
      'Extended family groups (7–9 pax)',
      'Rough road excursions in North & West Sikkim',
      'Full-day outstation circuits with baggage',
      'Reliable heavy-duty hill transport'
    ],
    features: [
      'Extended 9-Passenger Cabin Layout',
      'Rigid Metal Body on Sturdy Ladder Frame',
      'Large Full-Roof Luggage Carrier',
      'High Ground Clearance for Rocky Passes',
      'Certified Hill Chauffeur'
    ],
    specs: {
      engine: '2.5L m2DiCR Turbo Diesel (2523 cc)',
      groundClearance: '180 mm',
      bootSpace: 'Foldable Rear Benches + Roof Carrier',
      hillCapability: 'Proven mechanical durability on unpaved mountain roads'
    }
  },
  {
    id: 'tata-sumo',
    name: 'Tata Sumo',
    category: 'SUV / MUV',
    tagline: 'Iconic Himalayan mountain carrier with immense pulling power and cabin room',
    image: '/vehicle-placeholder.svg',
    seats: '7–9 Seats',
    seatsCount: 9,
    luggage: '4–5 Large Bags + Roof Carrier',
    fuel: 'Diesel',
    ac: 'AC / Blower',
    startingPrice: '₹5,000',
    priceNumeric: 5000,
    priceUnit: '/day',
    popular: true,
    description: 'The iconic mainstay of Himalayan transport, the Tata Sumo provides expansive headroom, commanding high-perch seating, and a punchy 3.0L diesel engine designed for high-altitude roads.',
    idealFor: [
      'Large families & group tours (7–9 pax)',
      'North Sikkim & high-altitude road trips',
      'Luggage-heavy mountain journeys',
      'Classic dependable Himalayan travel'
    ],
    features: [
      'Spacious Tall-Boy Cabin with Abundant Headroom',
      'Heavy-Duty Roof Luggage Carrier',
      'Sturdy Double-Wishbone & Leaf Spring Suspension',
      'High Ground Clearance for uneven surfaces',
      'Expert Local Mountain Driver'
    ],
    specs: {
      engine: '3.0L CR4 Turbo Diesel (2956 cc)',
      groundClearance: '182 mm',
      bootSpace: 'Spacious Rear Compartment + Roof Carrier',
      hillCapability: 'Massive 250 Nm low-rpm torque for effortless steep climbs'
    }
  },
  {
    id: 'savari',
    name: 'Savari',
    category: 'SUV / MUV',
    tagline: 'Spacious heavy passenger carrier for large Himalayan group tours',
    image: '/vehicle-placeholder.svg',
    seats: '9–10 Seats',
    seatsCount: 10,
    luggage: 'Extra Heavy Luggage + Large Roof Carrier',
    fuel: 'Diesel',
    ac: 'AC Available',
    startingPrice: '₹5,500',
    priceNumeric: 5500,
    priceUnit: '/day',
    popular: false,
    description: 'Built specifically for transporting larger tour groups and substantial baggage over winding mountain routes, offering durable suspension and high passenger capacity.',
    idealFor: [
      'Large tourist groups & joint families (9–10 pax)',
      'Luggage-intensive multi-day tours',
      'Group transfers between NJP/Bagdogra & Sikkim',
      'Group sightseeing tours'
    ],
    features: [
      'High 10-Seat Capacity for Big Groups',
      'Heavy-Duty Industrial Roof Rack',
      'Reinforced High-Clearance Suspension',
      'Open View Large Side Windows',
      'Experienced Hill Route Specialist'
    ],
    specs: {
      engine: '2.5L m2DiCR Turbo Diesel (2523 cc)',
      groundClearance: '180 mm',
      bootSpace: 'High-Capacity Roof Carrier + Rear Space',
      hillCapability: 'Built for heavy passenger loads on steep Himalayan ascents'
    }
  },
  {
    id: 'cruiser',
    name: 'Cruiser',
    category: 'SUV / MUV',
    tagline: 'Ultimate 10–13 passenger heavy cruiser for large group mountain expeditions',
    image: '/vehicle-placeholder.svg',
    seats: '10–13 Seats',
    seatsCount: 12,
    luggage: 'Full-Roof Mega Carrier + Rear Space',
    fuel: 'Diesel',
    ac: 'Dual AC Available',
    startingPrice: '₹5,500',
    priceNumeric: 5500,
    priceUnit: '/day',
    popular: true,
    description: 'The Force Trax Cruiser is the king of high-capacity mountain passenger transport, accommodating up to 12–13 travelers comfortably with dual AC, Mercedes-derived engine power, and an oversized roof luggage rack.',
    idealFor: [
      'Large tour groups, wedding parties & students (10–13 pax)',
      'Full circuit Sikkim & Darjeeling expeditions',
      'Group airport transfers with multiple large suitcases',
      'Cost-efficient group charters'
    ],
    features: [
      'Massive 10–13 Passenger Seating Capacity',
      'Full-Length Heavy Steel Roof Luggage Rack',
      'High 191 mm Ground Clearance for Any Road',
      'Dual Air Conditioning with Rear Blower Vents',
      'Senior Commercial Chauffeur'
    ],
    specs: {
      engine: '2.6L FM 2.6 CR Turbo Diesel (2596 cc)',
      groundClearance: '191 mm',
      bootSpace: 'Full-Length Steel Roof Carrier + Rear Storage',
      hillCapability: 'Heavy-duty differential and high climbing torque for full loads'
    }
  },

  // ==========================================
  // PRESERVED VEHICLES (Not part of Segments A–E)
  // ==========================================
  {
    id: 'mahindra-xylo',
    name: 'Mahindra Xylo',
    category: 'SUV / MUV',
    tagline: 'Rugged power with extra headroom and generous legroom for group travel',
    image: '/vehicle-placeholder.svg',
    seats: '6–7 Seats',
    seatsCount: 7,
    luggage: '4–5 Large Bags + Roof Rack',
    fuel: 'Diesel',
    ac: 'Dual AC (Front & Rear)',
    startingPrice: '₹3,000',
    priceNumeric: 3000,
    priceUnit: '/day',
    popular: false,
    description: 'High-torque mEagle diesel engine, commanding road view, and exceptional cabin space make the Mahindra Xylo a dependable choice for steep hill climbs and group family tours.',
    idealFor: [
      'Large families & travel groups (6–7 pax)',
      'Steep hill climbs & sightseeing tours',
      'Darjeeling, Mirik & Kurseong trips',
      'Cost-effective group transport'
    ],
    features: [
      'Surround Air Conditioning',
      'Theater Style Seating Layout',
      'High Ground Clearance (186 mm)',
      'Heavy-Duty Mountain Suspension',
      'Certified Hill Chauffeur'
    ],
    specs: {
      groundClearance: '186 mm',
      bootSpace: 'Flexible rear storage + roof carrier',
      hillCapability: 'Strong hill climbing torque and stability'
    }
  }
];

// Helper lookup map by ID
export const vehiclesById: Record<string, Vehicle> = vehicles.reduce((acc, vehicle) => {
  acc[vehicle.id] = vehicle;
  return acc;
}, {} as Record<string, Vehicle>);

// ==========================================
// 1. HOMEPAGE LUXURY CABS (Exact 5 vehicles in exact requested order)
// ==========================================
export const luxuryCabs: Vehicle[] = [
  vehiclesById['mahindra-scorpio'],
  vehiclesById['toyota-innova-crysta'],
  vehiclesById['toyota-innova'],
  vehiclesById['mahindra-xuv700'],
  vehiclesById['maruti-ertiga']
].filter(Boolean);

// ==========================================
// 2. DEDICATED /cabs PAGE SEGMENTS (In exact requested order A -> E)
// ==========================================
export interface SegmentVehicleItem {
  vehicle: Vehicle;
  displayName?: string; // Used when a variant name is requested (e.g., WagonR - new model)
}

export interface CabSegment {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  items: SegmentVehicleItem[];
}

export const cabSegments: CabSegment[] = [
  {
    id: 'luxury-segment',
    code: 'A',
    title: 'A. Luxury Segment',
    tagline: 'Premium Comfort & Mountain Mastery',
    description: 'Experience unmatched ride comfort, premium captain seating, and commanding high-torque hill climbing.',
    items: [
      { vehicle: vehiclesById['mahindra-scorpio'] },
      { vehicle: vehiclesById['toyota-innova-crysta'] },
      { vehicle: vehiclesById['toyota-innova'] },
      { vehicle: vehiclesById['mahindra-xuv700'] },
      { vehicle: vehiclesById['maruti-ertiga'] }
    ]
  },
  {
    id: 'sedan-family',
    code: 'B',
    title: 'B. Sedan & Family Cabs',
    tagline: 'Smooth Cruising, Generous Trunks & Practicality',
    description: 'Smooth suspension and ample luggage capacity for family vacations, airport transfers, and hill touring.',
    items: [
      { vehicle: vehiclesById['toyota-glanza'] },
      { vehicle: vehiclesById['renault-triber'] },
      { vehicle: vehiclesById['maruti-wagonr'], displayName: 'Maruti Suzuki WagonR — new model' },
      { vehicle: vehiclesById['honda-amaze'] },
      { vehicle: vehiclesById['maruti-dzire'] }
    ]
  },
  {
    id: 'hatchback-segment',
    code: 'C',
    title: 'C. Hatchback Segment',
    tagline: 'Nimble & Economical Mountain Touring',
    description: 'Pocket-friendly, nimble hatchbacks designed for couple getaways, market hops, and tight mountain turns.',
    items: [
      { vehicle: vehiclesById['maruti-alto-k10'] },
      { vehicle: vehiclesById['maruti-wagonr'] }
    ]
  },
  {
    id: '9-seater-segment',
    code: 'D',
    title: 'D. 9-Seater Segment',
    tagline: 'High-Torque Mountain Workhorses',
    description: 'Legendary Himalayan passenger carriers built to transport extended families and substantial luggage across rugged terrains.',
    items: [
      { vehicle: vehiclesById['mahindra-maxx'] },
      { vehicle: vehiclesById['mahindra-bolero-plus'] },
      { vehicle: vehiclesById['tata-sumo'] }
    ]
  },
  {
    id: '12-seater-segment',
    code: 'E',
    title: 'E. 12-Seater Segment',
    tagline: 'Maximum Passenger Capacity & Heavy Carriers',
    description: 'Spacious heavy-duty cruisers equipped with mega roof luggage racks for large tour groups, wedding parties, and student excursions.',
    items: [
      { vehicle: vehiclesById['savari'] },
      { vehicle: vehiclesById['cruiser'] }
    ]
  }
];
