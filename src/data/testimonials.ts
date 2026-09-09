export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  routeTaken: string;
  review: string;
  vehicleUsed: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Amitabh Sharma',
    location: 'Kolkata, WB',
    rating: 5,
    routeTaken: 'Bagdogra Airport to Darjeeling',
    vehicleUsed: 'Innova Crysta',
    date: 'February 2026',
    review: 'Booked an Innova for our family of 6 from Bagdogra to Darjeeling. Driver Roshan was waiting at arrivals with our name board. Very smooth driving on winding mountain roads.'
  },
  {
    id: 't2',
    name: 'Priya & Siddharth Roy',
    location: 'Bangalore, KA',
    rating: 5,
    routeTaken: 'Gangtok to Nathula Pass & Tsomgo Lake',
    vehicleUsed: 'Bolero 4WD',
    date: 'January 2026',
    review: 'The WhatsApp booking was instant and they handled our Nathula Pass military permits completely without any stress. The 4WD handled snowy roads like a breeze. Highly recommended!'
  },
  {
    id: 't3',
    name: 'David Chen',
    location: 'Mumbai, MH',
    rating: 5,
    routeTaken: 'Darjeeling Local Sightseeing & Tiger Hill',
    vehicleUsed: 'Swift Dzire Sedan',
    date: 'December 2025',
    review: 'Prompt 4:00 AM hotel pickup for Tiger Hill sunrise! Clean car, warm heater, and the driver pointed out the best tea shops along the way. Fair, transparent pricing.'
  },
  {
    id: 't4',
    name: 'Sunita Ghosh',
    location: 'Siliguri, WB',
    rating: 5,
    routeTaken: 'NJP Station to Kalimpong Roundtrip',
    vehicleUsed: 'Wagon R',
    date: 'January 2026',
    review: 'Affordable, punctual, and safe for solo female travel. Driver was polite and drove very cautiously on the Rohini ghat road. Will book again!'
  },
  {
    id: 't5',
    name: 'Rajesh & Meera Patel',
    location: 'Ahmedabad, GJ',
    rating: 5,
    routeTaken: '6-Day Complete Sikkim & Darjeeling Tour',
    vehicleUsed: 'Innova Crysta',
    date: 'November 2025',
    review: 'We took the custom multi-day package. Flawless coordination on WhatsApp from start to finish. Our driver was essentially our friendly local guide too.'
  }
];
