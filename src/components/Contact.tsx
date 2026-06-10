import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Clock, Send, MessageSquare, ExternalLink, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      alert("Please fill in the required details to send message.");
      return;
    }
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMsg('');
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-100/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-500 font-bold">Initiate Connection</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-maroon-900 tracking-wide">
            Reservations &amp; Contact
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm sm:text-base font-light font-sans">
            Have questions regarding room allotments, corporate event bookings, or transport services? Our royal concierge stands ready.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info & Map Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-maroon-900">Taj Haveli Core Desk</h3>
              
              <p className="text-[#643114] leading-relaxed font-light text-sm sm:text-base">
                Drop past our foyer or connect instantly. Our dedicated desk can organize fast-track Taj passes, premium guides, and customized transport.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded bg-gold-50 border border-gold-200 text-gold-600 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-black text-neutral-800 text-xs sm:text-sm uppercase tracking-wide">Location Address:</h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-light mt-1">
                      Taj East Gate Road, Near Mughal Garden, Forest Colony, Agra, Uttar Pradesh - 282001, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded bg-gold-50 border border-gold-200 text-gold-600 mt-1">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-black text-neutral-800 text-xs sm:text-sm uppercase tracking-wide">Direct Lines:</h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-light mt-1">
                      Reception Desk: +91 99999 99999 <br />
                      Reservations Desk: +91 88888 88888
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded bg-gold-50 border border-gold-200 text-gold-600 mt-1">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-black text-neutral-800 text-xs sm:text-sm uppercase tracking-wide">Electronic Letters:</h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-light mt-1">
                      booking@tajhaveliagra.com <br />
                      concierge@tajhaveliagra.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Gold-Accent route representation Map container */}
            <div className="border border-gold-300 rounded-xl overflow-hidden shadow-md bg-stone-50 p-4 relative flex flex-col justify-between group">
              <div className="space-y-1 mb-2">
                <span className="text-[9px] uppercase font-mono text-gold-650 tracking-wider font-extrabold flex items-center gap-1">
                  <span>Schenic Location alignment</span> &middot; <span>Walk guide</span>
                </span>
                <h4 className="font-serif text-sm text-neutral-850">Taj Mahal East Gate &rarr; Taj Haveli</h4>
              </div>

              {/* Graphic custom Map sketch */}
              <div className="h-40 rounded-lg bg-white border border-gold-150 relative flex items-center justify-center p-4">
                {/* Custom layout of route */}
                <div className="absolute inset-0 opacity-40 pointer-events-none select-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 30,80 L 120,40 L 220,130 L 320,50" fill="none" stroke="#deb065" strokeWidth="2.5" strokeDasharray="5" />
                    <circle cx="30" cy="80" r="6" fill="#a44450" />
                    <circle cx="320" cy="50" r="6" fill="#c17522" />
                  </svg>
                </div>
                
                {/* Markers */}
                <div className="absolute top-10 left-5 flex flex-col items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-maroon-700 block animate-pulse"></span>
                  <span className="text-[9px] font-semibold text-neutral-700 uppercase tracking-wide font-mono mt-0.5">Taj East Gate Ticket</span>
                </div>

                <div className="absolute bottom-6 right-8 flex flex-col items-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-gold-500 border border-white block animate-pulse"></span>
                  <span className="text-[9px] font-bold text-maroon-900 uppercase tracking-widest font-serif mt-1">TAJ HAVELI AGRA</span>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center select-none opacity-40">
                  <span className="text-[10px] font-serif font-black tracking-widest">Taj East Gate Road Walkpath</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gold-150/70 mt-2 flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-stone-500">27.1724° N, 78.0421° E</span>
                <a
                  href="https://maps.google.com/?q=Taj+East+Gate+Road+Agra+Uttar+Pradesh+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-[11px] font-serif font-bold rounded flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <span>Launch Google Maps</span>
                  <ExternalLink size={12} className="text-gold-300" />
                </a>
              </div>
            </div>

          </div>

          {/* Form & Direct Message Column */}
          <div className="lg:col-span-7 bg-[#FCFAF6] border border-gold-300 p-8 rounded-xl shadow-xl space-y-6">
            
            <div className="space-y-1">
              <h3 className="font-serif text-xl tracking-wide text-maroon-900">Send Direct Messenger</h3>
              <p className="text-xs text-stone-500">Inscribe your query, and we will send a reply inside the hour.</p>
              <div className="w-12 h-[1px] bg-gold-400 mt-2" />
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-1 font-semibold">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Maharaj Adhiraj"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-gold-500 text-neutral-850"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-1 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="address@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-gold-500 text-neutral-850"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-1 font-semibold">Phone Call Connection</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-gold-500 text-neutral-850"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-1 font-semibold">Your Private Inquiry *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe room layouts, group packages, transport queries or custom requirements..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-gold-500 text-neutral-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-maroon-700 hover:bg-maroon-800 text-gold-100 font-serif font-black tracking-widest uppercase text-xs rounded-md shadow-md transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer border border-transparent"
                >
                  <Send size={14} /> Send Letter
                </button>
              </form>
            ) : (
              <div className="text-center py-16 space-y-5">
                <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center border border-green-200 mx-auto">
                  <Send size={24} className="animate-bounce" />
                </div>
                <div>
                  <h4 className="font-serif text-maroon-900 text-lg font-black">Message Dispatched!</h4>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto mt-1">Our concierge desk has received your dispatch. Check your inbox <strong className="text-neutral-700">{email}</strong> inside an hour for our detailed response.</p>
                </div>
                <button
                  onClick={handleResetForm}
                  className="px-5 py-2 border border-gold-300/40 hover:bg-gold-50 text-xs rounded text-neutral-700 cursor-pointer transition-colors font-mono"
                >
                  Send another message
                </button>
              </div>
            )}

            {/* Quick Action Buttons for Booking */}
            <div className="pt-5 border-t border-gold-200/50 mt-4 flex flex-col sm:flex-row gap-4 items-center justify-between text-neutral-850">
              <div className="text-left">
                <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">Instant Fast Booking</span>
                <p className="text-xs text-stone-500">Connect with reservation officers directly.</p>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <a
                  href="tel:+919999999999"
                  className="flex-1 sm:flex-none px-4 py-2 bg-stone-100 hover:bg-stone-200 text-neutral-800 text-xs font-serif font-bold rounded flex items-center justify-center gap-1.5 border border-neutral-300 shadow-sm transition-colors cursor-pointer"
                >
                  <Phone size={12} className="text-gold-650" />
                  <span>Call Desk</span>
                </a>
                <a
                  href="https://wa.me/919999999999?text=Hello%20Taj%20Haveli%20Agra!%20I%20am%20interested%20in%2520booking%20a%20luxury%20room.%20Please%20verify%20rates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-serif font-bold rounded flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                >
                  <MessageSquare size={12} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
