import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Shield, Compass, Sparkles, Check, PhoneCall } from 'lucide-react';
import { ROOMS } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
}

export default function BookingModal({ isOpen, onClose, initialRoomId }: BookingModalProps) {
  const [selectedRoomId, setSelectedRoomId] = useState(initialRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [breakfast, setBreakfast] = useState(true);
  const [airportPickup, setAirportPickup] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [step, setStep] = useState(1); // 1: Formulation, 2: Complete Receipt
  const [receiptNumber, setReceiptNumber] = useState('');

  useEffect(() => {
    if (initialRoomId) {
      setSelectedRoomId(initialRoomId);
    }
  }, [initialRoomId]);

  const selectedRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];

  // Calculate price
  const getNightsQuantity = () => {
    if (!checkIn || !checkOut) return 1;
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const timeDiff = date2.getTime() - date1.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return days > 0 ? days : 1;
  };

  const nights = getNightsQuantity();
  const roomCost = selectedRoom.pricePerNight * nights;
  const breakfastCost = breakfast ? 950 * guests * nights : 0;
  const pickupCost = airportPickup ? 1800 : 0;
  const taxCost = Math.round((roomCost + breakfastCost + pickupCost) * 0.18); // 18% GST luxury hotel
  const totalCost = roomCost + breakfastCost + pickupCost + taxCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !checkIn || !checkOut) {
      alert("Please fill in all required guest details.");
      return;
    }
    // Generate unique recipe ID
    const randomHex = Math.floor(Math.random() * 899999 + 100000);
    setReceiptNumber(`THA-${randomHex}`);
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
    setFullName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
    setCheckIn('');
    setCheckOut('');
    setAirportPickup(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="booking-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#FCFAF6] border border-gold-300 rounded-xl overflow-hidden shadow-2xl my-8 "
        >
          {/* Header */}
          <div className="bg-maroon-900 border-b border-gold-300 text-gold-100 p-6 flex justify-between items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-maroon-800 via-maroon-900 to-black">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs tracking-[0.25em] text-gold-400 uppercase font-serif font-semibold">Imperial Registry</span>
                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse"></span>
              </div>
              <h2 className="text-2xl font-serif text-white tracking-wide mt-1">Taj Haveli Private Booking</h2>
            </div>
            <button
              id="close-booking-modal"
              onClick={onClose}
              className="p-2 text-gold-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {step === 1 ? (
            <form onSubmit={handleSubmit} className="md:grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-gold-200">
              {/* Form Side */}
              <div className="p-6 md:col-span-7 space-y-5 max-h-[75vh] overflow-y-auto">
                <div>
                  <h3 className="text-sm font-serif font-semibold text-maroon-900 uppercase tracking-wider mb-3">1. Select Your Chamber</h3>
                  <div className="grid gap-2">
                    {ROOMS.map((room) => (
                      <label
                        key={room.id}
                        className={`flex items-center gap-3 p-3 text-left rounded-lg border cursor-pointer transition-all ${
                          selectedRoomId === room.id
                            ? 'bg-gold-50 border-gold-400 shadow-sm'
                            : 'bg-white border-neutral-200 hover:border-gold-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="selectedRoom"
                          value={room.id}
                          checked={selectedRoomId === room.id}
                          onChange={() => setSelectedRoomId(room.id)}
                          className="sr-only"
                        />
                        <img
                          src={room.image}
                          alt={room.name}
                          referrerPolicy="no-referrer"
                          className="w-16 h-12 object-cover rounded-md border border-neutral-200"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-serif font-bold text-neutral-800 text-sm truncate">{room.name}</p>
                          <p className="text-xs text-neutral-500 font-mono mt-0.5">₹{room.pricePerNight.toLocaleString('en-IN')} / night</p>
                        </div>
                        {selectedRoomId === room.id && (
                          <div className="w-5 h-5 rounded-full bg-gold-500 text-white flex items-center justify-center">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-serif font-semibold text-maroon-900 uppercase tracking-wider mb-3">2. Calendar & Occupancy</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">Check-In *</label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          value={checkIn}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">Check-Out *</label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          value={checkOut}
                          min={checkIn || new Date().toISOString().split('T')[0]}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">Guests *</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold-500"
                    >
                      <option value={1}>1 Royal Guest</option>
                      <option value={2}>2 Royal Guests</option>
                      <option value={3}>3 Royal Guests (Extra bed included)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-serif font-semibold text-maroon-900 uppercase tracking-wider mb-2">3. Mughal Premium Options</h3>
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 p-3 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={breakfast}
                        onChange={(e) => setBreakfast(e.target.checked)}
                        className="mt-0.5 rounded text-gold-500 focus:ring-gold-400 border-neutral-300"
                      />
                      <div>
                        <p className="text-sm font-semibold text-neutral-800">Royal Mughlai Buffet Breakfast</p>
                        <p className="text-xs text-neutral-500">Traditional signature breakfast spread with fresh dynamic kulfis & local tea. ₹950 per guest / day.</p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={airportPickup}
                        onChange={(e) => setAirportPickup(e.target.checked)}
                        className="mt-0.5 rounded text-gold-500 focus:ring-gold-400 border-neutral-300"
                      />
                      <div>
                        <p className="text-sm font-semibold text-neutral-800">VIP Imperial Airport / Station Pick-up</p>
                        <p className="text-xs text-neutral-500">Chauffeur service directly from Delhi/Agra terminals with premium cold towels & water bottles. ₹1,800 flat rate.</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-serif font-semibold text-maroon-900 uppercase tracking-wider mb-3">4. Guest Information</h3>
                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>
                    <textarea
                      placeholder="Special requests or requirements (e.g., Honeymoon decorations, early check-in instructions...)"
                      value={specialRequests}
                      rows={2}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold-500 text-neutral-700"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing Sidebar */}
              <div className="p-6 md:col-span-5 bg-gold-50 flex flex-col justify-between h-auto">
                <div>
                  <h3 className="text-sm font-serif font-semibold text-neutral-500 uppercase tracking-wider mb-4 border-b border-gold-200 pb-2">Valuation Summary</h3>
                  
                  {/* Miniature Image Card */}
                  <div className="relative h-28 w-full rounded-md overflow-hidden border border-gold-300 mb-4">
                    <img
                      src={selectedRoom.image}
                      alt={selectedRoom.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2.5">
                      <p className="font-serif text-white text-xs tracking-wide">{selectedRoom.name}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm font-mono text-neutral-600">
                    <div className="flex justify-between">
                      <span>Rate Per Night:</span>
                      <span>₹{selectedRoom.pricePerNight.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stay Duration:</span>
                      <span>{nights} {nights > 1 ? 'Nights' : 'Night'}</span>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-gold-200 pb-2">
                      <span>Room Subcount:</span>
                      <span className="text-neutral-800 font-bold font-sans">₹{roomCost.toLocaleString('en-IN')}</span>
                    </div>

                    {breakfast && (
                      <div className="flex justify-between">
                        <span>Heritage Buffet:</span>
                        <span>₹{breakfastCost.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    {airportPickup && (
                      <div className="flex justify-between">
                        <span>VIP Shuttle:</span>
                        <span>₹{pickupCost.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-xs text-neutral-500 pt-1">
                      <span>SGST + CGST (18%):</span>
                      <span>₹{taxCost.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-300 space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="font-serif font-bold text-neutral-700">Total Sum:</span>
                    <span className="font-serif text-2xl font-black text-maroon-700">₹{totalCost.toLocaleString('en-IN')}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-maroon-700 hover:bg-maroon-800 text-gold-100 font-serif font-black tracking-widest py-3 uppercase rounded-md shadow-md transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                  >
                    <Sparkles size={16} /> Confirm Royal Intent
                  </button>
                  
                  <div className="flex items-center gap-2 justify-center text-[10px] text-neutral-500 font-mono text-center">
                    <Shield size={12} className="text-gold-500" />
                    <span>Best Price Secured · Secured Mughal Gateaway</span>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            /* Successful Invoice Receipt */
            <div className="p-8 space-y-8 bg-white max-h-[80vh] overflow-y-auto">
              <div className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-500 mb-2">
                  <Compass size={32} className="animate-spin-slow" />
                </div>
                <h3 className="text-2xl font-serif text-maroon-800 font-bold">Booking Initiated Successfully!</h3>
                <p className="text-sm text-neutral-500">Your reservation details have been processed by our Royal desk officer.</p>
              </div>

              {/* Mughal Stylized Invitation Card */}
              <div className="border border-gold-300 bg-gold-50 rounded-xl p-6 relative overflow-hidden max-w-lg mx-auto shadow-sm">
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold-300/30 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold-300/30 rounded-bl-xl"></div>

                <div className="flex justify-between items-center pb-4 border-b border-gold-200">
                  <div>
                    <h4 className="font-serif font-extrabold text-neutral-800 text-base">TAJ HAVELI AGRA</h4>
                    <p className="text-[10px] font-mono text-neutral-500">Boutique Luxury near the Taj Mahal</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold bg-maroon-700 text-white px-2 py-0.5 rounded">Confirmed Receipt</span>
                    <p className="text-[11px] font-mono text-neutral-600 mt-1">{receiptNumber}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-6 py-5 text-xs text-neutral-700 border-b border-dashed border-gold-200">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Noble Patron</span>
                    <strong className="text-neutral-800 text-sm font-serif">{fullName}</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Assigned Chamber</span>
                    <strong className="text-neutral-800 font-bold">{selectedRoom.name}</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Staying Period</span>
                    <span className="font-semibold">{checkIn} to {checkOut} ({nights} {nights > 1 ? 'Nights' : 'Night'})</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Patrons Count</span>
                    <span className="font-semibold">{guests} Guests</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Addons Incorporated</span>
                    <span className="font-semibold">
                      {[
                        breakfast ? 'Royal Breakfast' : '',
                        airportPickup ? 'VIP Chauffeur' : ''
                      ].filter(Boolean).join(', ') || 'None Selected'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Invoiced Sum</span>
                    <span className="font-serif font-black text-sm text-maroon-700">₹{totalCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="pt-4 text-[10px] font-mono text-neutral-500 leading-relaxed text-center">
                  Your designated private carriage information and direct check-in keys will be issued to <strong className="text-neutral-700">{email}</strong> shortly. Present this invitation receipt at the reception desk upon reaching Agra.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-900 text-white rounded-md font-serif text-sm transition-colors cursor-pointer"
                >
                  Return to Haveli Tour
                </button>
                <a
                  href={`https://wa.me/919999999999?text=Hello%20Taj%20Haveli!%20I%20have%20initiated%20a%20booking%20with%20Receipt%20Code%20${receiptNumber}%20for%20${fullName}.%20Please%20verify.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-md font-serif text-sm flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <PhoneCall size={14} /> Finish in WhatsApp
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
