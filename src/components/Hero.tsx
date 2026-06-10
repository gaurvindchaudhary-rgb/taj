import { ChevronDown, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToAbout = () => {
    const element = document.querySelector('#story');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Cinematic Zoom-In Image */}
      <div className="absolute inset-0 select-none pointer-events-none z-0 overflow-hidden">
        <img
          src="/src/assets/images/hero_taj_sunrise_1781118782211.png"
          alt="Taj Mahal view from Taj Haveli Agra Sunrise"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-85 scale-102 animate-slow-zoom"
        />
        {/* Soft shadow gradients overlaying background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF6] via-transparent to-black/75 z-10" />
        <div className="absolute inset-0 bg-black/25 z-10" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6 mt-12 select-text">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-gold-400/40 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-gold-300 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-gold-200">
            Heritage Haveli · 350m From Taj Mahal East Gate
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif text-white leading-tight tracking-wide font-medium"
        >
          Experience Royal Hospitality <br />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold-100 via-gold-200 to-gold-400 font-normal italic font-serif">
            Near the Taj Mahal
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-xl text-stone-200 tracking-wide max-w-2xl mx-auto font-sans font-light"
        >
          Luxury Stay, Timeless Comfort & Unforgettable Views
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            id="hero-book-now-trigger"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-10 py-4 bg-maroon-700 hover:bg-maroon-800 text-gold-100 font-serif font-black uppercase tracking-widest text-xs rounded shadow-2xl transition-all hover:scale-105 active:scale-95 duration-200 cursor-pointer border border-transparent"
          >
            Reserve Your Stay
          </button>
          
          <button
            id="hero-scroll-about-trigger"
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-serif tracking-widest text-xs uppercase border border-gold-300/30 rounded backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MapPin size={14} className="text-gold-200" />
            Explore Haveli Vibe
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-stone-300 hover:text-white transition-colors duration-200 opacity-80 hover:opacity-100 cursor-pointer"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll to Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="p-1.5 rounded-full border border-gold-300/40 bg-black/20"
          >
            <ChevronDown size={14} className="text-gold-300" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
