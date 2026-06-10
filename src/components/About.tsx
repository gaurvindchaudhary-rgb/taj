import { Sparkles, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const features = [
    {
      icon: <MapPin size={24} className="text-gold-500" />,
      title: 'Unrivaled Location',
      description: 'The closest luxurious haven to the Taj Mahal. Located a mere 5-minute easy stroll (350 meters) from the East Gate ticketers.',
    },
    {
      icon: <Compass size={24} className="text-gold-500" />,
      title: 'Mughal Architecture',
      description: 'Carefully designed archways, handwoven silk seating curtains, and exquisite marble inlay work that pay homage to Mughal builders.',
    },
    {
      icon: <ShieldCheck size={24} className="text-gold-500" />,
      title: 'Royal Hospitality',
      description: 'Your every query addressed with a gentle bow and welcoming garland. Specialized bespoke travel desks organize Agra excursions.',
    },
  ];

  return (
    <section id="story" className="py-24 bg-[#FCFAF6] relative overflow-hidden">
      {/* Decorative floral elements backgrounds */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-100/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-maroon-100/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          
          {/* Text/Lobe Info column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs tracking-[0.25em] uppercase font-mono text-gold-650 font-bold">The Heritage Story</span>
                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-ping"></span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-maroon-900 leading-tight">
                About Taj Haveli Agra
              </h2>
              <div className="w-24 h-[1.5px] bg-gold-400 mt-2" />
            </div>

            <p className="text-stone-600 leading-relaxed font-light text-base sm:text-lg">
              TAJ HAVELI AGRA is a boutique, heritage-inspired luxury sanctuary designed to serve as your private courtyard gateaway to one of the world’s greatest structural masterpieces. 
            </p>
            
            <p className="text-stone-600 leading-relaxed font-light text-sm sm:text-base">
              Founded on the belief that a visit to the Taj Mahal should be an immersive royal pilgrimage, each corner of our boutique haveli reproduces the ornate geometry, ivory marblings, and rich color fabrics that once adorned the historic courts of Agra. Whether sipping cardamom-sprinkled tea on our panoramic rooftop, resting in our silent air-conditioned salons, or tasting authentic recipes at our dining spaces, we promise you a home of unparalleled peace.
            </p>

            <blockquote className="border-l-4 border-gold-400 pl-4 py-1 italic text-maroon-800 font-serif font-semibold text-base sm:text-lg my-4 bg-gold-100/30 rounded-r">
              "To see the pristine marble dome of the Taj illuminated by the very first rays of sunrise is to experience a timeless miracle. We put you right at the front seat."
            </blockquote>

            {/* Inner Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {features.map((item, idx) => (
                <div key={idx} className="space-y-2 border border-gold-200/40 p-4 rounded-lg bg-white/70 hover:shadow-md transition-shadow">
                  <div className="p-2 bg-gold-50 inline-block rounded-md border border-gold-200/50">
                    {item.icon}
                  </div>
                  <h4 className="font-serif font-black text-neutral-800 text-sm tracking-wide">{item.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Graphical/Image column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Outline Decorative borders */}
            <div className="absolute inset-4 border border-gold-300 pointer-events-none rounded-lg translate-x-4 translate-y-4 -z-10" />

            <div className="relative rounded-lg overflow-hidden border border-gold-300 shadow-2xl h-[450px]">
              <img
                src="/src/assets/images/mughal_interior_lobby_1781118831863.png"
                alt="Taj Haveli Agra architecture and luxury courtyards"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Glass Info pill floating */}
              <div className="absolute bottom-6 left-6 right-6 glass-gold border border-gold-300 p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-maroon-700/10 text-maroon-700 font-serif font-bold flex items-center justify-center border border-maroon-700/20">
                    350m
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-black text-maroon-900 uppercase tracking-wider">East Gate Proximity</h5>
                    <p className="text-xs text-neutral-600 font-light mt-0.5">Walk comfortably to the Taj ticket gates inside 5 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Small floating ornamental item */}
            <div className="absolute -top-4 -right-4 p-3 bg-white border border-gold-250 rounded-full shadow-lg flex items-center justify-center">
              <Sparkles className="text-gold-500 animate-spin-slow" size={20} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
