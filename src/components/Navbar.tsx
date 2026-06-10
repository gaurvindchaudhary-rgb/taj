import { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarRange } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Story', href: '#story' },
    { name: 'Suites', href: '#suites' },
    { name: '360° Tour', href: '#tour360' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Rooftop Dining', href: '#dining' },
    { name: 'Agra Attractions', href: '#attractions' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-50/95 shadow-md border-b border-gold-200/50 py-3 backdrop-blur-md'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center gap-1.5">
              <span className={`font-serif tracking-[0.2em] font-black text-xl transition-colors ${isScrolled ? 'text-maroon-900' : 'text-gold-200'}`}>
                TAJ HAVELI
              </span>
            </div>
            <span className={`text-[10px] tracking-[0.4em] uppercase font-mono transition-colors -mt-1 ${isScrolled ? 'text-gold-600' : 'text-gold-100'}`}>
              Agra · Luxury Resort
            </span>
          </div>

          {/* Desktop Navigation Link list */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className={`text-xs font-serif uppercase tracking-widest font-bold cursor-pointer transition-colors relative group py-2 ${
                  isScrolled ? 'text-neutral-700 hover:text-maroon-700' : 'text-stone-200 hover:text-gold-200'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled ? 'bg-maroon-700' : 'bg-gold-300'}`} />
              </button>
            ))}
          </nav>

          {/* Call & Direct Reservation Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+919999999999"
              className={`flex items-center gap-1.5 text-xs font-mono font-bold uppercase transition-colors ${
                isScrolled ? 'text-neutral-700 hover:text-maroon-700' : 'text-stone-100 hover:text-gold-300'
              }`}
            >
              <Phone size={14} className="text-gold-500 animate-pulse" />
              <span>+91 99999 99999</span>
            </a>
            <button
              id="header-booking-trigger"
              onClick={onOpenBooking}
              className={`px-5 py-2 rounded-md font-serif text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? 'bg-maroon-700 text-gold-100 border border-transparent shadow hover:bg-maroon-800'
                  : 'bg-transparent text-white border border-gold-300 hover:bg-gold-300 hover:text-maroon-900'
              }`}
            >
              Reservations
            </button>
          </div>

          {/* Mobile Hamburguer button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className={`p-2 rounded-md ${
                isScrolled
                  ? 'text-maroon-800 border border-maroon-100 bg-maroon-50'
                  : 'text-white border border-neutral-700 bg-neutral-900/30'
              }`}
            >
              <CalendarRange size={18} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-200 ${isScrolled ? 'text-neutral-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 z-30 pt-20 pb-6 bg-[#FCFAF6] border-b border-gold-300/60 shadow-xl flex flex-col gap-4 lg:hidden"
          >
            <div className="px-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full text-left font-serif py-3 px-4 border-b border-gold-100 text-sm font-semibold tracking-wider text-neutral-800 hover:bg-gold-50/50 hover:text-maroon-700 transition-all rounded-md"
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="px-6 pt-4 flex flex-col gap-3">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 justify-center py-2.5 text-xs font-mono font-bold bg-neutral-100 text-neutral-800 rounded-md border border-neutral-200"
              >
                <Phone size={14} className="text-gold-500" />
                <span>Call Concierge: +91 99999 99999</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-3 bg-maroon-700 hover:bg-maroon-800 text-gold-100 font-serif font-black tracking-widest uppercase text-xs rounded-md shadow-sm transition-colors"
              >
                Inquire & Book Rooms
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
