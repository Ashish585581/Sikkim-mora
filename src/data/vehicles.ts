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
  // HATCHBACKS (3 Vehicles)
  // ==========================================
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
    popular: true,
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
    id: 'maruti-swift',
    name: 'Maruti Suzuki Swift',
    category: 'Hatchback',
    tagline: 'Sporty, agile, and popular hatchback for swift mountain getaways',
    image: '/swift.jpg',
    seats: '4–5 Seats',
    seatsCount: 5,
    luggage: '2–3 Medium Bags',
    fuel: 'Petrol',
    ac: 'AC Available',
    startingPrice: '₹2,500',
    priceNumeric: 2500,
    priceUnit: '/day',
    popular: false,
    description: 'Sporty performance, compact dimensions, and responsive hill climbing make the Maruti Suzuki Swift a favorite for quick mountain hops and day tours.',
    idealFor: [
      'Solo travelers & young couples',
      'Day trips around Darjeeling & Kurseong',
      'Short airport transfers from Bagdogra',
      'Easy navigation on narrow hill roads'
    ],
    features: [
      'Powerful AC Cooling',
      'Sporty Fabric Upholstery',
      'Bluetooth Audio System',
      'Verified Mountain Driver',
      'High Fuel Mileage'
    ],
    specs: {
      groundClearance: '163 mm',
      bootSpace: '268 Liters',
      hillCapability: 'Responsive throttle and tight cornering on ghats'
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
  // SEDANS (3 Vehicles)
  // ==========================================
  {
    id: 'maruti-dzire',
    name: 'Maruti Suzuki Dzire',
    category: 'Sedan',
    tagline: 'Spacious, smooth, and comfortable compact sedan for city and hill travel',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=900&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=900&auto=format&fit=crop',
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
  {
    id: 'hyundai-aura',
    name: 'Hyundai Aura',
    category: 'Sedan',
    tagline: 'Feature-rich, stylish modern sedan with superior cabin acoustics',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=900&auto=format&fit=crop',
    seats: '4–5 Seats',
    seatsCount: 5,
    luggage: '3 Large Bags',
    fuel: 'Petrol / Diesel',
    ac: 'AC Available',
    startingPrice: '₹2,800',
    priceNumeric: 2800,
    priceUnit: '/day',
    popular: false,
    description: 'Modern aesthetics, refined interior craftsmanship, and smooth power delivery make the Hyundai Aura an attractive choice for stylish holiday rides in the hills.',
    idealFor: [
      'Families & couples (3–4 pax)',
      'Smooth highway & valley travel',
      'Full-day Darjeeling & Gangtok sightseeing',
      'Luggage-heavy travel transfers'
    ],
    features: [
      'Cooled Glovebox & Rear AC Vents',
      'Wireless Phone Charging Pad',
      'Plush Dual-Tone Interior Styling',
      'Superior Cabin Insulation',
      'Verified Hill Chauffeur'
    ],
    specs: {
      groundClearance: '168 mm',
      bootSpace: '402 Liters',
      hillCapability: 'Refined low-end torque for mountain hairpins'
    }
  },

  // ==========================================
  // SUV / MUV (3 Vehicles)
  // ==========================================
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'SUV / MUV',
    tagline: 'The gold standard for luxury mountain touring & family comfort',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=900&auto=format&fit=crop',
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
      groundClearance: '178 mm',
      bootSpace: '300L (Expandable with roof carrier)',
      hillCapability: 'Superior high-torque engine for steep mountain climbs'
    }
  },
  {
    id: 'mahindra-xylo',
    name: 'Mahindra Xylo',
    category: 'SUV / MUV',
    tagline: 'Rugged power with extra headroom and generous legroom for group travel',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=900&auto=format&fit=crop',
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
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    category: 'SUV / MUV',
    tagline: 'Contemporary 3-row family recreational vehicle with cutting-edge comfort',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=900&auto=format&fit=crop',
    seats: '6–7 Seats',
    seatsCount: 7,
    luggage: '4–5 Large Bags',
    fuel: 'Diesel / Turbo Petrol',
    ac: 'Dual AC with Roof Vents',
    startingPrice: '₹3,200',
    priceNumeric: 3200,
    priceUnit: '/day',
    popular: false,
    description: 'A modern 3-row recreational vehicle blending SUV styling with MPV practicality, offering one-touch tumble seats, ventilated cabin, and refined mountain ride quality.',
    idealFor: [
      'Modern families & groups (5–7 pax)',
      'Multi-day Sikkim scenic circuits',
      'Comfort-focused long-distance travel',
      'Effortless hill cruising'
    ],
    features: [
      'One-Touch Electric Tumble 2nd Row',
      'Roof-Mounted AC Diffuser Vents in All Rows',
      'Smooth Ride Suspension Geometry',
      'Multiple Type-C Fast Chargers',
      'Quiet Premium Cabin'
    ],
    specs: {
      groundClearance: '195 mm',
      bootSpace: '216L (Expandable with 3rd row folded)',
      hillCapability: 'High ground clearance and agile electronic steering'
    }
  }
];
