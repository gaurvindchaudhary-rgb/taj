import { Room, Attraction, Review, MenuItem } from './types';

export const ROOMS: Room[] = [
  {
    id: 'heritage-suite',
    name: 'Mughal Imperial Suite',
    description: 'Our crown jewel, featuring magnificent arched layout overlooking the majestic dome of the Taj Mahal. Adorned with royal upholstery, handwoven rugs, and fine brass accents, this suite lets you feel the essence of old-world courtly grace combined with modern luxury.',
    image: '/src/assets/images/luxury_room_taj_view_1781118800413.png',
    pricePerNight: 12500,
    size: '650 sq ft',
    occupancy: '3 Guests',
    bedType: 'Royal King Size',
    hasTajView: true,
    amenities: ['Direct Taj Mahal View', 'Complimentary Breakfast', 'Private Dining Balcony', '24/7 Butler Service', 'Premium Welcome Platter', 'High-speed WiFi', 'Lavazza Esspresso Bar', 'Plush Silk Robes']
  },
  {
    id: 'taj-deluxe',
    name: 'Haveli Premium Room',
    description: 'Comfortably spaced and heavily inspired by royal Rajasthani and Mughal architectural aesthetics. Features a direct window vista of the Taj Mahal, soft pillow menu, and handcraft wooden closets.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 8500,
    size: '480 sq ft',
    occupancy: '2 Guests',
    bedType: 'Royal Queen',
    hasTajView: true,
    amenities: ['Taj Mahal Garden View', 'Complimentary Breakfast', 'Rain Shower', 'Teakwood Desk', 'Smart TV with Streaming', 'Plush Linens', 'Mini-bar Access']
  },
  {
    id: 'executive-comfort',
    name: 'Executive Court Room',
    description: 'Designed for luxury seeking travelers. Elegant marble floors, fine artwork depicting imperial dynasties, and a peaceful garden inner-courtyard view that offers absolute tranquility.',
    image: '/src/assets/images/mughal_interior_lobby_1781118831863.png',
    pricePerNight: 6200,
    size: '400 sq ft',
    occupancy: '2 Guests',
    bedType: 'Royal Double',
    hasTajView: false,
    amenities: ['Inner Courtyard View', 'Free Airport Shuttle Pick-up', 'Premium Bath Linens', 'Local Tea Selections', 'Working Workstation', 'High-speed WiFi']
  }
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    distance: '350 meters',
    duration: '5 min walk',
    description: 'The monumental symbol of love. Taj Haveli Agra is situated uniquely close to the East Gate ticket office, allowing you to bypass major traffic and witness its ethereal white marble glow during sunrise long before crowds arrive.',
    bestTime: 'Sunrise (6:00 AM) or Sunset (5:30 PM)',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'agra-fort',
    name: 'Agra Fort',
    distance: '3.2 km',
    duration: '10 min drive',
    description: 'The spectacular walled monument of the Mughal dynasty. This massive UNESCO heritage red sandstone palace offers deep historical context and scenic views overlooking the Yamuna River directly towards the Taj Mahal.',
    bestTime: 'Late afternoon (3:00 PM - 5:00 PM)',
    image: 'https://images.unsplash.com/photo-1598977123418-45f04b016823?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mehtab-bagh',
    name: 'Mehtab Bagh (Moonlight Garden)',
    distance: '6.5 km',
    duration: '15 min drive',
    description: 'Located directly across the Yamuna River, this beautiful garden context aligns perfectly with the northern layout of the Taj, making it arguably the finest place for peaceful photography and reflection at golden hour.',
    bestTime: 'Sunset (5:00 PM to 6:30 PM)',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'baby-taj',
    name: 'Itimad-ud-Daulah (Baby Taj)',
    distance: '5.8 km',
    duration: '12 min drive',
    description: 'Often called the draft of the Taj Mahal, this exquisite white marble mausoleum on the eastern bank of the Yamuna River is decorated with intricate pietra dura marble inlays and gorgeous carvings.',
    bestTime: 'Midday (11:00 AM to 2:00 PM)',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=800&q=80'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: 'galouti',
    name: 'Shahi Galouti Kebab',
    category: 'Appetizers',
    description: 'Smoked, melt-in-the-mouth minced vegetable and cottage cheese patties flavored with a secret blend of 32 native royal spices, served with fresh mint chutney.',
    price: 450,
    isVeg: true,
    isPopular: true
  },
  {
    id: 'paneer-tikka',
    name: 'Angaar Paneer Tikka',
    category: 'Appetizers',
    description: 'Thick hand-cut blocks of artisanal cottage cheese marinated in a rich mustard oil, local red chili, and fresh curd marinade, roasted over hot charcoal clay tandoor.',
    price: 495,
    isVeg: true,
    isSpicy: true
  },
  {
    id: 'samosa-potli',
    name: 'Gold Leaf Samosa Potli',
    category: 'Appetizers',
    description: 'Crisp hand-folded dough money bags stuffed with spiced potato, sweet green peas, and rich cashew nuts, glazed with organic honey-saffron drizzle.',
    price: 380,
    isVeg: true
  },

  // Mains
  {
    id: 'dal-haveli',
    name: 'Dal Haveli (Signature)',
    category: 'Mains',
    description: 'Slow-cooked whole black lentils prepared for 24 hours on a constant warm embers grill, finished with real churned butter, organic cream, and fragrant kasuri methi.',
    price: 520,
    isVeg: true,
    isPopular: true
  },
  {
    id: 'paneer-pasanda',
    name: 'Mughlai Paneer Pasanda',
    category: 'Mains',
    description: 'Shallow fried triangular sandwiches of fresh paneer stuffed with chopped nuts and cream, floating in a smooth, sweet and mildly tangy ivory tomato-cashew curry.',
    price: 590,
    isVeg: true
  },
  {
    id: 'subz-biryani',
    name: 'Kesar Dum Biryani',
    category: 'Mains',
    description: 'Elegant long-grain basmati rice layered meticulously with seasonal vegetables, rose water extract, real saffron strands, and slow steamed inside sealed clay pots.',
    price: 620,
    isVeg: true,
    isPopular: true
  },

  // Desserts
  {
    id: 'kesar-kulfi',
    name: 'Shahi Rabri Kulfi',
    category: 'Desserts',
    description: 'Traditional solid frozen condensed milk dessert sweetened with real green cardamom, saffron, sliced almonds and pistachios, served beside warm creamy rabri.',
    price: 320,
    isVeg: true,
    isPopular: true
  },
  {
    id: 'shahi-tukda',
    name: 'Shahi Tukda Golden Toast',
    category: 'Desserts',
    description: 'Imperial bread pudding made by deep-frying ghee-saturated bread slices, soaked in sugar cardomom nectar, and completely layered with heavy silver leaf elements.',
    price: 350,
    isVeg: true
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Aishwarya Sen',
    location: 'Mumbai, India',
    rating: 5,
    date: 'May 12, 2026',
    content: 'Taj Haveli Agra exceeded all our expectations! Being so close to the Taj Mahal meant we woke up at 5 AM, had our morning tea overlooking the monument on the beautiful rooftop, and walked to the entrance in five minutes. The Mughal decor and the extremely polite staff made us feel like royalty.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    name: 'Thomas Campbell',
    location: 'London, United Kingdom',
    rating: 5,
    date: 'June 03, 2026',
    content: 'Absolutely spectacular. The 360-degree views from the rooftop restaurant are beautiful, with the Taj Mahal in clear focus. Having authentic Mughal kulfi and Dal Haveli while seeing the sun sink behind the dome is an image I will cherish forever. The rooms are spotless, full of character, and wonderfully cool.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    name: 'Rajesh Malhotra',
    location: 'Delhi, India',
    rating: 5,
    date: 'April 28, 2026',
    content: 'Fantastic boutique experience. Perfect if you prefer personalized attention instead of cold mega-resorts. The staff arranged outstanding airport pickup, and their local travel guide helped us bypass tourist trap shops. Splurge for the Taj view Mughal Suite - it is utterly magnificent!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    category: 'Views',
    image: '/src/assets/images/hero_taj_sunrise_1781118782211.png',
    title: 'Glorious Sunrise over Taj Mahal from our terrace'
  },
  {
    id: 'gal-2',
    category: 'Rooms',
    image: '/src/assets/images/luxury_room_taj_view_1781118800413.png',
    title: 'Mughal Imperial Suite Bedding and Archway'
  },
  {
    id: 'gal-3',
    category: 'Dining',
    image: '/src/assets/images/rooftop_dining_view_1781118815497.png',
    title: 'Shahi Candlelit Dining under the Stars'
  },
  {
    id: 'gal-4',
    category: 'Lobby',
    image: '/src/assets/images/mughal_interior_lobby_1781118831863.png',
    title: 'Heritage Inner Court and Fountain'
  },
  {
    id: 'gal-5',
    category: 'Rooms',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    title: 'Ensuite Marble Bathroom & Luxury Rain Shower'
  },
  {
    id: 'gal-6',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    title: 'Tandoor charcoal-grilled Kebabs fresh to order'
  },
  {
    id: 'gal-7',
    category: 'Vibe',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    title: 'Saffron lanterns illuminating white arches at dusk'
  },
  {
    id: 'gal-8',
    category: 'Vibe',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=800&q=80',
    title: 'Glistening white marble pietra dura inlay craftsmanship'
  }
];
