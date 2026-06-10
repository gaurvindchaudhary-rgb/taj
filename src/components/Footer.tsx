import { Compass, Landmark, Phone, MessageSquare, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 text-stone-200 border-t border-gold-300/20 pt-16 pb-8 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-maroon-950 via-neutral-950 to-stone-950 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gold-300/10 pb-12">
          
          {/* Logo & Promo Column */}
          <div className="space-y-4">
            <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-serif tracking-[0.25em] font-black text-white text-xl">TAJ HAVELI</span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold-400 font-mono -mt-1">Agra · Luxury Resort</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Experience authentic royal Mughal hospitality, timeless comfort, and breathtaking Taj Mahal view dining just 350 meters from the monument&apos;s East Gate.
            </p>
            
            <div className="flex items-center gap-2 pt-2 text-stone-400 text-xs font-mono">
              <Landmark size={14} className="text-gold-400" />
              <span>Agra, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-200">The Residence</h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <button onClick={() => handleScrollTo('#story')} className="hover:text-gold-300 transition-colors cursor-pointer">
                  The Story of the Haveli
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#suites')} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Rooms &amp; Mughal Suites
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#tour360')} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Interactive 360° Chambers Room
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#gallery')} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Sight Chronicles Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Dining & Sights columns */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-200">Culinary &amp; Tours</h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <button onClick={() => handleScrollTo('#dining')} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Terrace Shahi Dining
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#amenities')} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Hotel High Comforts
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#attractions')} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Agra Sight Attractions
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#reviews')} className="hover:text-gold-300 transition-colors cursor-pointer">
                  Verified Guest Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Booking call to action columns */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-200">Book Your Passage</h4>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Unlock our best prices, seasonal discounts, and complimentary VIP station shuttle directly.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full text-center py-2.5 bg-maroon-700 hover:bg-gold-400 text-gold-100 hover:text-neutral-900 font-serif font-black tracking-widest uppercase text-[10px] rounded shadow-md transition-colors duration-200 cursor-pointer border border-transparent"
            >
              Complete Check-In Form
            </button>
          </div>

        </div>

        {/* Footer Sub bar & Copyright section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] text-stone-500 font-mono gap-4">
          <div>
            <span>&copy; {new Date().getFullYear()} Taj Haveli Agra. All Royal Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <a href="tel:+919999999999" className="hover:text-gold-300 flex items-center gap-1">
              <Phone size={12} />
              <span>Call Us</span>
            </a>
            <span>|</span>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 flex items-center gap-1">
              <MessageSquare size={12} />
              <span>WhatsApp</span>
            </a>
            <span>|</span>
            <a href="mailto:booking@tajhaveliagra.com" className="hover:text-gold-300 flex items-center gap-1">
              <Mail size={12} />
              <span>Email</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
