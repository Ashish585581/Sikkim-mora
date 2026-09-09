export interface Destination {
  id: string;
  name: string;
  tagline: string;
  state: string;
  image: string;
  elevation: string;
  distanceFromBagdogra: string;
  driveTime: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  taxiStartingPrice: string;
  popular?: boolean;
}

export const destinations: Destination[] = [
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    tagline: 'The Queen of Hills & World Famous Tea Capital',
    state: 'West Bengal',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop',
    elevation: '6,700 ft (2,042 m)',
    distanceFromBagdogra: '70 km',
    driveTime: '3 Hours',
    description: 'Home to the iconic Himalayan Railway toy train, world-renowned tea gardens, colonial charm, and breathtaking sunrise views of Mount Kanchenjunga.',
    highlights: ['Tiger Hill Sunrise', 'Batasia Loop & Toy Train', 'Happy Valley Tea Estate', 'Darjeeling Mall & Chowrasta'],
    bestTimeToVisit: 'March – May & October – December',
    taxiStartingPrice: '₹2,400',
    popular: true
  },
  {
    id: 'kalimpong',
    name: 'Kalimpong',
    tagline: 'Peaceful Hill Town of Orchids, Heritage & Valleys',
    state: 'West Bengal',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900&auto=format&fit=crop',
    elevation: '4,100 ft (1,250 m)',
    distanceFromBagdogra: '75 km',
    driveTime: '3 Hours',
    description: 'A serene Himalayan haven overlooking the Teesta River valley, renowned for exotic flower nurseries, colonial mansions, paragliding, and peaceful monasteries.',
    highlights: ['Deolo Hill Panoramic Viewpoint', 'Morgan House Heritage', 'Pine View Cactus Nursery', 'Lava & Rishyap Pine Forests'],
    bestTimeToVisit: 'Throughout the Year',
    taxiStartingPrice: '₹2,500',
    popular: true
  },
  {
    id: 'gangtok',
    name: 'Gangtok',
    tagline: 'Vibrant Capital of Sikkim with Modern Mountain Culture',
    state: 'Sikkim',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=900&auto=format&fit=crop',
    elevation: '5,410 ft (1,650 m)',
    distanceFromBagdogra: '125 km',
    driveTime: '4.5 Hours',
    description: 'The clean and bustling capital city of Sikkim. A gateway to alpine lakes, ancient Buddhist monasteries, clean pedestrian walkways, and vibrant cafes.',
    highlights: ['Pedestrian MG Marg', 'Rumtek & Enchey Monasteries', 'Tashi Viewpoint & Ganesh Tok', 'Ban Jhakri Waterfalls'],
    bestTimeToVisit: 'September – June',
    taxiStartingPrice: '₹3,500',
    popular: true
  },
  {
    id: 'nathula-pass',
    name: 'Nathula Pass & Tsomgo Lake',
    tagline: 'Ancient Indo-China Silk Route at 14,140 Feet',
    state: 'Sikkim',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=900&auto=format&fit=crop',
    elevation: '14,140 ft (4,310 m)',
    distanceFromBagdogra: '175 km (55 km from Gangtok)',
    driveTime: '2.5 Hours from Gangtok',
    description: 'One of the world’s highest motorable mountain passes on the historic Indo-China trade corridor, featuring the glacial holy Tsomgo Lake and Baba Mandir.',
    highlights: ['Indo-China Border Gate', 'Sacred Tsomgo / Changu Lake', 'Baba Harbhajan Singh Shrine', 'High Alpine Snowscapes'],
    bestTimeToVisit: 'April – June & October – December (Wed to Sun)',
    taxiStartingPrice: '₹4,800',
    popular: true
  },
  {
    id: 'bagdogra-airport',
    name: 'Bagdogra Airport & NJP',
    tagline: 'Primary Aviation & Railway Hub for North Bengal & Sikkim',
    state: 'West Bengal',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=900&auto=format&fit=crop',
    elevation: '413 ft (126 m)',
    distanceFromBagdogra: '0 km (Hub)',
    driveTime: 'Starting Point',
    description: 'Your gateway to the Eastern Himalayas. We provide guaranteed on-time airport pickups and train station transfers directly to your hotel doorstep in the hills.',
    highlights: ['Bagdogra Airport Terminal (IXB)', 'New Jalpaiguri Junction (NJP)', 'Siliguri Junction & Town Drop', 'Meet & Greet Service with Nameboard'],
    bestTimeToVisit: 'All Year Round',
    taxiStartingPrice: '₹2,200',
    popular: false
  },
  {
    id: 'pelling',
    name: 'Pelling (West Sikkim)',
    tagline: 'Closest Unobstructed Panoramas of Mt. Kanchenjunga',
    state: 'Sikkim',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900&auto=format&fit=crop',
    elevation: '7,200 ft (2,150 m)',
    distanceFromBagdogra: '135 km',
    driveTime: '5 Hours',
    description: 'A charming hill town famous for breathtaking glass skywalks, sacred Khecheopalri wish-fulfilling lake, and ancient Pemayangtse Monastery.',
    highlights: ['Pelling Glass Skywalk & Chenrezig Statue', 'Rabdentse Ruins Historic Palace', 'Pemayangtse Monastery', 'Khecheopalri Sacred Lake'],
    bestTimeToVisit: 'September – May',
    taxiStartingPrice: '₹4,200',
    popular: false
  }
];
