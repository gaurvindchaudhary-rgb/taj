/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Room360 from './components/Room360';
import Amenities from './components/Amenities';
import RooftopDining from './components/RooftopDining';
import Attractions from './components/Attractions';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (roomId?: string) => {
    setPreselectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedRoomId(undefined);
  };

  return (
    <div className="relative min-h-screen bg-[#FCFAF6] text-neutral-800 font-sans antialiased selection:bg-maroon-700 selection:text-white">
      {/* Dynamic Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections */}
      <main>
        {/* Cinematic Hero Spotlight */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Stories & Details */}
        <About />

        {/* Chambers Suite List Grid */}
        <Rooms onOpenBooking={(roomId) => handleOpenBooking(roomId)} />

        {/* 360° Visual Tour */}
        <Room360 />

        {/* Luxury Accomodation High Comforts */}
        <Amenities />

        {/* Rooftop Shahi Dining highlight */}
        <RooftopDining />

        {/* Local Sight Attractions */}
        <Attractions />

        {/* Testimonials Slider */}
        <Reviews />

        {/* Media Photo Wall & Gallery */}
        <Gallery />

        {/* Communication Form / Directions */}
        <Contact />
      </main>

      {/* Footer block summary */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Global Booking Dialog Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialRoomId={preselectedRoomId}
      />
    </div>
  );
}

