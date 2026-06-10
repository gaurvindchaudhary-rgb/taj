import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Soup, Dessert, Flame, Clock, Calendar, Check, Landmark, Utensils } from 'lucide-react';
import { MENU_ITEMS } from '../data';

export default function RooftopDining() {
  const [activeCategory, setActiveCategory] = useState<'Appetizers' | 'Mains' | 'Desserts'>('Appetizers');
  const [reservationComplete, setReservationComplete] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const filteredMenu = MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleTableSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) {
      alert("Please provide reservation time, date and client contact details.");
      return;
    }
    setReservationComplete(true);
  };

  const handleResetTable = () => {
    setName('');
    setPhone('');
    setDate('');
    setReservationComplete(false);
  };

  return (
    <section id="dining" className="py-24 bg-[#FCFAF6] relative overflow-hidden border-b border-gold-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-500 font-bold">Imperial Flavors</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-maroon-900 tracking-wide">Rooftop Restaurant &amp; Dining</h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm sm:text-base font-light font-sans">
            A romantic, starlit dining terrace framing direct vistas of the Taj Mahal. Savor age-old slow-cooked recipes prepared using royal Mughal spices.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Cinematic Backdrop Hero Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-2 border border-gold-300 pointer-events-none rounded-lg translate-x-3 translate-y-3 -z-10" />
            <div className="relative rounded-lg overflow-hidden border border-gold-300 shadow-2xl h-[420px]">
              <img
                src="/src/assets/images/rooftop_dining_view_1781118815497.png"
                alt="Romantic Candle-lit dinner at Taj Haveli Agra with Taj Mahal view"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-maroon-900/90 text-gold-100 text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full border border-gold-400/30">
                ⭐ Rated #1 Romantic Terrace in Agra
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif text-maroon-900">
              The Shahi Darbar Experience
            </h3>
            <p className="text-stone-600 leading-relaxed font-light text-sm sm:text-base">
              Set against the grand silhouette of the Taj Mahal, our dining space celebrates the sophisticated culinary legacy of the Mughal Emperors. 
            </p>
            <p className="text-stone-600 leading-relaxed font-light text-sm sm:text-base">
              Specialized slow-grills, clay tandoor clay pots, and hand-rolled flatbreads are paired with premium rose syrups and cardamom nectars. The layout is crafted in white marbles, warm candles, and soft live sitar audio tunes that melt into the Agra evening.
            </p>

            <div className="flex items-center gap-4 py-2 border-t border-b border-gold-200/50">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-800">
                <Clock size={16} className="text-gold-500" />
                <span>Dinner: 6:30 PM - 11:30 PM</span>
              </div>
              <div className="w-[1px] h-4 bg-gold-300" />
              <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-800">
                <Landmark size={16} className="text-gold-500" />
                <span>Taj View Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu & Table Reservation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Menu Column */}
          <div className="lg:col-span-8 bg-white border border-gold-200 rounded-xl p-6 sm:p-8 shadow-md">
            
            {/* Category selection bar */}
            <div className="flex justify-center border-b border-gold-100 pb-4 mb-6 gap-2">
              {(['Appetizers', 'Mains', 'Desserts'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded font-serif text-sm tracking-wide transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-maroon-700 text-gold-100 font-bold shadow-md'
                      : 'text-stone-500 hover:text-maroon-950 hover:bg-gold-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu List of active Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {filteredMenu.map((item) => (
                <div key={item.id} className="group border-b border-dashed border-gold-100/70 pb-4 last:border-0 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        {/* Veg / Nonveg custom dot */}
                        <span className={`w-3 h-3 flex-shrink-0 border flex items-center justify-center p-0.5 ${item.isVeg ? 'border-green-600' : 'border-red-650'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                        </span>
                        <h4 className="font-serif font-black text-neutral-800 text-sm sm:text-base group-hover:text-maroon-800 transition-colors truncate">
                          {item.name}
                        </h4>
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-gold-800">
                        ₹{item.price}
                      </span>
                    </div>
                    
                    <p className="text-xs text-stone-500 leading-relaxed font-light min-h-[36px]">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    {item.isPopular && (
                      <span className="bg-gold-50 border border-gold-300 text-[9px] font-mono font-bold uppercase tracking-wider text-gold-800 px-1.5 py-0.5 rounded">
                        Signature
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="bg-red-50 border border-red-200 text-[9px] font-mono font-bold uppercase tracking-wider text-red-605 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        <Flame size={8} /> Spicy
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table reservation card column */}
          <div className="lg:col-span-4 bg-maroon-900/95 border border-gold-400 p-6 rounded-xl text-gold-100 shadow-xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-maroon-800 via-maroon-950 to-stone-950">
            
            {!reservationComplete ? (
              <form onSubmit={handleTableSubmit} className="space-y-5">
                <div className="text-center pb-2 border-b border-gold-300/20">
                  <h3 className="font-serif text-lg tracking-wide">Reserve Rooftop Table</h3>
                  <p className="text-[10px] text-stone-300 font-mono tracking-widest uppercase mt-0.5">Starlit Taj Vistas</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-stone-300 mb-1">Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#FCFAF6] text-neutral-800 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-gold-400"
                    >
                      <option value={1}>1 Dining Seat</option>
                      <option value={2}>2 Dining Seats</option>
                      <option value={4}>4 Dining Seats</option>
                      <option value={6}>6 Dining Seats</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-stone-300 mb-1">Date</label>
                      <input
                        type="date"
                        required
                        value={date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#FCFAF6] text-neutral-800 rounded px-2.5 py-1.5 text-xs focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-stone-300 mb-1">Time Slot</label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#FCFAF6] text-neutral-800 rounded px-2.5 py-1.5 text-xs focus:outline-none"
                      >
                        <option value="18:30">6:30 PM (Sunset)</option>
                        <option value="19:30">7:30 PM (Under Stars)</option>
                        <option value="20:30">8:30 PM (Mid-dinner)</option>
                        <option value="21:30">9:30 PM (Late-evening)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-stone-300 mb-1">Patron Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FCFAF6] text-neutral-800 rounded px-2.5 py-1.5 text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-stone-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FCFAF6] text-neutral-800 rounded px-2.5 py-1.5 text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-center py-2.5 bg-gold-400 hover:bg-gold-550 text-neutral-900 font-serif font-black tracking-widest uppercase text-[10px] rounded shadow-md transition-colors duration-200 cursor-pointer"
                >
                  Verify Table Request
                </button>
                
                <p className="text-[9px] font-mono text-center text-stone-400">
                  ⚠️ Diners holding room reservations enjoy prime priority terrace alignments automatically.
                </p>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mx-auto border border-green-500/30">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-white font-bold">Terrace Registered!</h4>
                  <p className="text-xs text-stone-300 mt-1">Table for {guests} on {date} at {time} reserved successfully under the name <strong>{name}</strong>.</p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleResetTable}
                    className="px-4 py-1.5 border border-gold-300/30 rounded text-[10px] font-mono text-stone-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Hold Another Table
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
