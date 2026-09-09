export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: 'Plane' | 'Camera' | 'MapPin' | 'Mountain' | 'Compass' | 'Flag' | 'Calendar';
  highlights: string[];
  startingPrice: string;
  badge?: string;
  popular?: boolean;
  ctaText: string;
}

export const services: ServiceItem[] = [
  {
    id: 'airport-transfer',
    title: 'Airport Pickup & Drop',
    shortDescription: 'Convenient, on-time airport transportation to & from Bagdogra (IXB) and Pakyong (PYG).',
    longDescription: 'Reliable doorstep airport transfers with flight tracking, punctual pickups, and courteous drivers. No waiting in long taxi queues after your flight.',
    iconName: 'Plane',
    highlights: ['Bagdogra Airport (IXB) Transfers', 'Pakyong Airport (PYG) Pickup', 'Flight Delay Monitoring', 'Luggage Assistance included'],
    startingPrice: 'Starting from ₹2,200',
    badge: 'Punctual & Fast',
    popular: true,
    ctaText: 'Book Airport Taxi'
  },
  {
    id: 'local-sightseeing',
    title: 'Local Sightseeing',
    shortDescription: 'Comfortable full-day and half-day local sightseeing tours with flexible stops.',
    longDescription: 'Explore iconic viewpoints, monasteries, tea gardens, and historical spots with local drivers who know the best viewpoints and photography spots.',
    iconName: 'Camera',
    highlights: ['Darjeeling 7-Point & Mixed Points', 'Gangtok Local 10-Point Tour', 'Kalimpong Heritage Tour', 'Flexible Photo Stops'],
    startingPrice: 'Starting from ₹1,800',
    popular: true,
    ctaText: 'Book Sightseeing'
  },
  {
    id: 'outstation-taxi',
    title: 'Outstation Taxi',
    shortDescription: 'Comfortable one-way and round-trip taxi travel between cities and Himalayan hill stations.',
    longDescription: 'Seamless inter-city cab service connecting Siliguri, NJP Railway Station, Gangtok, Darjeeling, Kalimpong, Pelling, and surrounding areas.',
    iconName: 'MapPin',
    highlights: ['Point-to-Point Intercity', 'NJP Railway Station Transfers', 'Siliguri Junction Drops', 'Transparent Toll & Parking Rates'],
    startingPrice: 'Starting from ₹2,400',
    ctaText: 'Book Outstation Cab'
  },
  {
    id: 'darjeeling-taxi',
    title: 'Darjeeling Taxi Service',
    shortDescription: 'Dedicated taxi service for Darjeeling town, Tiger Hill sunrise, and nearby tea valleys.',
    longDescription: 'Specialized Darjeeling hill cabs for Tiger Hill sunrise at 4:00 AM, Batasia Loop, Ghoom Monastery, Mirik Lake day trips, and Lamahatta eco-parks.',
    iconName: 'Mountain',
    highlights: ['Tiger Hill Sunrise Early Booking', 'Happy Valley Tea Estate', 'Batasia Loop & Ghoom', 'Mirik & Pashupati Border Trips'],
    startingPrice: 'Starting from ₹2,000',
    badge: 'Popular Route',
    popular: true,
    ctaText: 'Book Darjeeling Taxi'
  },
  {
    id: 'kalimpong-taxi',
    title: 'Kalimpong Taxi Service',
    shortDescription: 'Taxi service for Kalimpong town, Deolo Hill, Lava, Rishyap, and surrounding areas.',
    longDescription: 'Explore the peaceful town of Kalimpong, famous flower nurseries, Deolo Hill paragliding points, Morgan House, and the scenic pine forests of Lava and Lolegaon.',
    iconName: 'Compass',
    highlights: ['Deolo Hill & Morgan House', 'Lava, Rishyap & Lolegaon circuits', 'Cactus Nursery & Monasteries', 'Teesta River Viewpoints'],
    startingPrice: 'Starting from ₹2,200',
    ctaText: 'Book Kalimpong Taxi'
  },
  {
    id: 'nathula-taxi',
    title: 'Nathula Pass Taxi Service',
    shortDescription: 'Taxi service for Nathula Pass, Tsomgo (Changu) Lake, and Baba Mandir routes.',
    longDescription: 'High-altitude luxury SUVs (Innova Crysta, Bolero 4WD) equipped for the steep Indo-China border sector at 14,140 ft, including complete permit handling.',
    iconName: 'Flag',
    highlights: ['Indo-China Border (14,140 ft)', 'Glacial Tsomgo / Changu Lake', 'Historic Baba Harbhajan Mandir', 'Full Military/Govt Permit Assistance'],
    startingPrice: 'Starting from ₹4,500',
    badge: 'Permit Assistance',
    popular: true,
    ctaText: 'Book Nathula Trip'
  },
  {
    id: 'tour-packages',
    title: 'One Day / Two Day Packages',
    shortDescription: 'Carefully curated travel packages based on your exact holiday requirements.',
    longDescription: 'Customizable day tours and weekend getaways covering the best of North Bengal and Sikkim with guaranteed car availability and fixed pricing.',
    iconName: 'Calendar',
    highlights: ['Darjeeling & Mirik 1-Day Tour', 'Kalimpong & Lava 2-Day Getaway', 'Silk Route 3-Day Adventure', 'Custom Family Itineraries'],
    startingPrice: 'Starting from ₹3,500',
    badge: 'All-Inclusive Option',
    ctaText: 'Customize Package'
  }
];
