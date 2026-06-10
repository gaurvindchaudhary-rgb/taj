export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  pricePerNight: number;
  size: string;
  occupancy: string;
  bedType: string;
  hasTajView: boolean;
  amenities: string[];
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  duration: string;
  description: string;
  bestTime: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  content: string;
  avatar: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Appetizers' | 'Mains' | 'Desserts' | 'Beverages';
  description: string;
  price: number;
  isSpicy?: boolean;
  isVeg: boolean;
  isPopular?: boolean;
}

export interface BookingDetails {
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  airportPickup: boolean;
}
