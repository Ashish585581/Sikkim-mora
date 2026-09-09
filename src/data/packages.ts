export interface TravelPackage {
  id: string;
  title: string;
  duration: string;
  tagline: string;
  recommendedVehicle: string;
  startingPrice: string;
  priceNote: string;
  badge?: string;
  popular?: boolean;
  itinerary: string[];
  inclusions: string[];
}

export const travelPackages: TravelPackage[] = [
  {
    id: 'one-day-darjeeling-mirik',
    title: 'One Day Darjeeling & Mirik Experience',
    duration: '1 Day (8–9 Hours)',
    tagline: 'Ideal for travelers with limited time wanting to see tea gardens, lakes & viewpoints',
    recommendedVehicle: 'Sedan / SUV / Innova',
    startingPrice: '₹3,200',
    priceNote: 'per private car (up to 4–6 persons)',
    badge: 'Best for Short Trips',
    popular: false,
    itinerary: [
      'Early Morning: Tiger Hill sunrise & Batasia Loop',
      'Morning: Ghoom Monastery & Breakfast at Mall Road',
      'Midday: Scenic drive to Mirik via Simana Indo-Nepal border',
      'Afternoon: Boating at Sumendu Lake & Pine Forest walk',
      'Evening: Return to Darjeeling or drop at Siliguri'
    ],
    inclusions: [
      'Private dedicated car for the full day',
      'Experienced mountain driver & fuel',
      'Toll, state taxes & parking fees',
      'Pickup & drop from your hotel'
    ]
  },
  {
    id: 'two-day-kalimpong-lava',
    title: 'Two Day Kalimpong, Lava & Rishyap Escape',
    duration: '2 Days / 1 Night',
    tagline: 'Explore the peaceful eastern Himalayan foothills, colonial heritage & pine forests',
    recommendedVehicle: 'Innova Crysta / Bolero / Sedan',
    startingPrice: '₹6,800',
    priceNote: 'per private car (complete 2-day cab)',
    badge: 'Most Popular Weekend',
    popular: true,
    itinerary: [
      'Day 1: Pickup from Bagdogra/NJP/Darjeeling -> Kalimpong Deolo Hill, Morgan House, Cactus Nursery & overnight stay',
      'Day 2: Morning scenic drive to Lava Monastery -> Rishyap viewpoint -> Drop at Siliguri / NJP / Bagdogra'
    ],
    inclusions: [
      'Exclusive private cab for all 2 days',
      'All driver night allowances & food expenses',
      'Fuel, hill permits & toll taxes',
      'Doorstep hotel pickup & return drop'
    ]
  },
  {
    id: 'custom-himalayan-tour',
    title: 'Custom Multi-Day Sikkim & Darjeeling Tour',
    duration: 'Flexible (3 to 8 Days)',
    tagline: 'Tailor-made itineraries crafted around your family preferences, pace and budget',
    recommendedVehicle: 'Any Vehicle of Choice (Wagon R, Sedan, Crysta, 4WD)',
    startingPrice: 'Custom Quote',
    priceNote: 'transparent per-day or package rate',
    badge: '100% Tailor Made',
    popular: false,
    itinerary: [
      'Complete flexibility across Gangtok, North Sikkim (Lachung/Lachen), Pelling, Darjeeling & Kalimpong',
      'Permit arrangements for protected border areas (Nathula, Gurudongmar Lake, Yumthang Valley)',
      'Dedicated vehicle & driver stationed with you throughout your holiday'
    ],
    inclusions: [
      'Dedicated private vehicle with commercial permit',
      '24/7 dedicated support coordinator via WhatsApp',
      'Free itinerary planning & local sightseeing advice',
      'Zero hidden charges or surprise fuel hikes'
    ]
  }
];
