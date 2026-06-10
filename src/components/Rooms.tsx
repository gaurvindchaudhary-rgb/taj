import { useState } from 'react';
import { motion } from 'motion/react';
import { Bed, Users, Square, Eye, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { ROOMS } from '../data';
import { Room } from '../types';

interface RoomsProps {
  onOpenBooking: (roomId: string) => void;
}

export default function Rooms({ onOpenBooking }: RoomsProps) {
  const [hoveredRoomId, setHoveredRoomId] = useState<string | null>(null);

  return (
    <section id="suites" className="py-24 bg-gold-50/50 relative border-t border-b border-gold-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-500 font-bold">The Royal Sanctuary</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-maroon-900 tracking-wide">
            Luxury Rooms &amp; Suites
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm sm:text-base font-light font-sans">
            Curated spaces designed to reflect imperial grandeur, with peaceful courtyard corners and stunning bedside views of the legendary Taj Mahal dome.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Rooms Cards List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.map((room: Room) => (
            <motion.div
              key={room.id}
              className="bg-white rounded-xl overflow-hidden border border-gold-200 shadow-lg flex flex-col justify-between group h-full"
              onMouseEnter={() => setHoveredRoomId(room.id)}
              onMouseLeave={() => setHoveredRoomId(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Card Image Area */}
              <div className="relative h-64 overflow-hidden border-b border-gold-100">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Overlining shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Dynamic Status Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {room.hasTajView && (
                    <span className="bg-maroon-700 text-gold-100 text-[10px] font-bold tracking-widest uppercase py-1 px-3.5 rounded-full border border-gold-400/50 flex items-center gap-1 shadow-md">
                      <Eye size={10} /> Taj Mahal View
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4">
                  <span className="bg-[#FCFAF6]/90 backdrop-blur-sm text-neutral-800 text-[11px] font-mono uppercase py-1 px-3 rounded font-bold shadow-md">
                    From ₹{room.pricePerNight.toLocaleString('en-IN')} / night
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 text-white text-xs font-mono font-medium">
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
                    <Square size={12} className="text-gold-300" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
                    <Users size={12} className="text-gold-300" />
                    <span>{room.occupancy}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
                    <Bed size={12} className="text-gold-300" />
                    <span>{room.bedType}</span>
                  </div>
                </div>
              </div>

              {/* Card Body Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-serif text-maroon-900 group-hover:text-gold-800 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light line-clamp-3">
                    {room.description}
                  </p>

                  <div className="border-t border-gold-100/60 pt-4">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-neutral-500 block mb-2.5">Included Comforts:</span>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                      {room.amenities.slice(0, 6).map((am, amIdx) => (
                        <li key={amIdx} className="flex items-center gap-1.5 text-xs text-stone-600 font-light">
                          <Check size={12} className="text-gold-500 flex-shrink-0" />
                          <span className="truncate">{am}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action Bar */}
                <div className="pt-2 border-t border-gold-100 flex items-center justify-between gap-2">
                  <div className="font-serif">
                    <span className="text-[10px] uppercase font-mono text-neutral-400 block -mb-0.5">Estimated In</span>
                    <strong className="text-xl font-black text-maroon-700">₹{room.pricePerNight.toLocaleString('en-IN')}</strong>
                    <span className="text-[10px] text-neutral-500 font-mono"> + taxes</span>
                  </div>

                  <button
                    id={`book-${room.id}-trigger`}
                    onClick={() => onOpenBooking(room.id)}
                    className="px-5 py-2.5 bg-maroon-700 hover:bg-gold-500 text-gold-100 group-hover:text-white rounded-md font-serif text-xs font-bold uppercase tracking-wider transition-all duration-350 cursor-pointer flex items-center gap-1"
                  >
                    <span>Reserve Suite</span>
                    <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
