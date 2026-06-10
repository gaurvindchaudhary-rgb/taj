import { motion } from 'motion/react';
import { MapPin, Compass, Clock, ArrowUpRight } from 'lucide-react';
import { ATTRACTIONS } from '../data';

export default function Attractions() {
  return (
    <section id="attractions" className="py-24 bg-gold-50/50 relative border-t border-b border-gold-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-500 font-bold">Discover Agra</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-maroon-900 tracking-wide">
            Nearby Landmarks &amp; Sights
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm sm:text-base font-light font-sans">
            Wander easily. Because of Taj Haveli&apos;s prime location, iconic historical gems and serene gardens are either a direct stroll away or accessible via quick drives.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Attractions Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATTRACTIONS.map((attraction, idx) => (
            <motion.div
              key={attraction.id}
              className="bg-white rounded-xl overflow-hidden border border-gold-200 shadow-md group h-full flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="space-y-4">
                {/* Visual Cover */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  
                  {/* Distance Ribbon absolute */}
                  <div className="absolute bottom-3 left-3 bg-gold-400/90 text-neutral-900 border border-white/20 text-[10px] font-mono uppercase tracking-wider py-0.5 px-2.5 rounded shadow-sm font-black flex items-center gap-1">
                    <MapPin size={10} />
                    <span>{attraction.distance} ({attraction.duration})</span>
                  </div>
                </div>

                {/* Info Text Area */}
                <div className="px-5 space-y-2">
                  <h3 className="font-serif font-black text-neutral-800 text-base sm:text-lg tracking-wide group-hover:text-maroon-950 transition-colors">
                    {attraction.name}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed font-light min-h-[72px]">
                    {attraction.description}
                  </p>
                </div>
              </div>

              {/* Card Footer timing guide */}
              <div className="px-5 pb-5 pt-3 space-y-2">
                <div className="border-t border-gold-100 pt-3 flex items-center justify-between text-[10px] font-semibold text-neutral-800">
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-gold-500" />
                    <span>Best: {attraction.bestTime}</span>
                  </div>
                  <a
                    href={`https://google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.name + ' Agra India')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-700 group-hover:text-maroon-700 font-mono font-bold flex items-center gap-0.5"
                  >
                    <span>Maps</span>
                    <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
