import { Wifi, UtensilsCrossed, ConciergeBell, PlaneTakeoff, Map, Compass, Shield, Users, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Amenities() {
  const list = [
    {
      icon: <Wifi size={24} className="text-gold-500" />,
      title: 'High-Speed Free WiFi',
      desc: 'Seamless, high-speed fiber connectivity covering all chambers, suites, lounges, and the panoramic dining terrace.'
    },
    {
      icon: <UtensilsCrossed size={24} className="text-gold-500" />,
      title: 'Mughlai Fine Dining',
      desc: 'Savor traditional courtly recipes under grand arches prepared meticulously by heritage culinary chefs.'
    },
    {
      icon: <ConciergeBell size={24} className="text-gold-500" />,
      title: '24/7 Room Butler Service',
      desc: 'In-room royal room hospitality, hot chai deliveries, fresh pillow additions, and direct services around the clock.'
    },
    {
      icon: <PlaneTakeoff size={24} className="text-gold-500" />,
      title: 'Airport Assistance',
      desc: 'VIP transfers directly to Delhi IGI Airport, local rail systems with direct, safe chauffeur luxury sedans.'
    },
    {
      icon: <Map size={24} className="text-gold-500" />,
      title: 'Agra City Travel Desk',
      desc: 'Customized city tours, skip-the-line ticketing maps, local shopping recommendations, and curated history guides.'
    },
    {
      icon: <Compass size={24} className="text-gold-500" />,
      title: 'Taj View Rooftop Dining',
      desc: 'Dine side-by-side with grand starlit sights of the Yamuna banks and glowing marble domes of the legendary Taj.'
    },
    {
      icon: <Users size={24} className="text-gold-500" />,
      title: 'Family Friendly Stay',
      desc: 'Spacious interconnecting rooms, dedicated children additions, healthy custom diets, and secure layouts.'
    },
    {
      icon: <Shield size={24} className="text-gold-500" />,
      title: 'Secured Secured Parking',
      desc: 'Completely closed, secure private parking space with 24/7 CCTV surveillance guarding your motor cars.'
    }
  ];

  return (
    <section id="amenities" className="py-24 bg-white relative overflow-hidden">
      {/* Visual separators / shapes */}
      <div className="absolute top-0 left-1/4 w-[1px] h-20 bg-gradient-to-b from-gold-300 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-500 font-bold">Palace hospitality</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-maroon-900 tracking-wide">Hotel Amenities</h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm sm:text-base font-light font-sans">
            Meticulously planned services balancing historical Indian hospitality charm with high-end modern comforts.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((amenity, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-[#FCFAF6] border border-gold-200/50 hover:border-gold-300 hover:bg-gold-50/20 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-white border border-gold-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300 shadow-xs">
                  <div className="group-hover:text-white transition-colors">
                    {amenity.icon}
                  </div>
                </div>
                <h3 className="font-serif font-black text-neutral-800 text-base tracking-wide group-hover:text-maroon-900 transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-light">
                  {amenity.desc}
                </p>
              </div>

              <div className="pt-4 flex items-center gap-1.5 text-[10px] font-mono text-gold-650 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Inclusive</span>
                <Sparkles size={10} className="animate-spin-slow" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
