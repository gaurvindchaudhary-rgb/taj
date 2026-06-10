import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote, Sparkles } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data';
import { Review } from '../types';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  
  // Custom Reviews Submitter form states
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [successMsg, setSuccessMsg] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!autoPlay) return;
    
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, autoPlay, reviews.length]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) {
      alert("Please provide dry text review and author details.");
      return;
    }

    const newReview: Review = {
      id: `rev-custom-${Date.now()}`,
      name,
      location: location || 'Verified Patrons',
      rating,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      content,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    };

    setReviews([newReview, ...reviews]);
    setCurrentIndex(0);
    setSuccessMsg(true);
    
    // Clear form
    setName('');
    setLocation('');
    setContent('');
    setRating(5);

    setTimeout(() => {
      setSuccessMsg(false);
    }, 4500);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[1px] h-20 bg-gradient-to-b from-gold-300 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-500 font-bold">Patron Echoes</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-maroon-900 tracking-wide">
            Guest Testimonials
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm sm:text-base font-light font-sans">
            Hear from global travelers who chose Taj Haveli Agra to serve as their royal headquarters near the Taj Mahal.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Dynamic Reviews Slider layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Slider Area column */}
          <div className="lg:col-span-7 bg-[#FCFAF6] border border-gold-300 p-8 sm:p-12 rounded-xl relative min-h-[380px] flex flex-col justify-between shadow-lg">
            
            {/* Background elements */}
            <Quote size={80} className="text-gold-200/20 absolute top-5 left-5 pointer-events-none" />
            
            <div className="relative">
              {/* Star scale animation */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`transition-colors duration-300 ${
                      i < currentReview.rating ? 'fill-gold-400 text-gold-400' : 'text-stone-250'
                    }`}
                  />
                ))}
              </div>

              {/* Slider content with animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <p className="text-stone-750 font-serif leading-relaxed text-sm sm:text-lg italic font-medium">
                    &ldquo;{currentReview.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={currentReview.avatar}
                      alt={currentReview.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold-300"
                    />
                    <div>
                      <h4 className="font-serif font-black text-neutral-800 text-sm sm:text-base uppercase tracking-wider">
                        {currentReview.name}
                      </h4>
                      <p className="text-xs text-stone-500 font-mono mt-0.5">
                        {currentReview.location} &middot; {currentReview.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider navigation controllers */}
            <div className="flex items-center justify-between gap-4 pt-8 border-t border-gold-200/60 mt-6 relative z-10">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400">
                Patron Review {currentIndex + 1} of {reviews.length}
              </span>
              
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-gold-350 bg-white hover:bg-gold-50 hover:text-black transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-gold-350 bg-white hover:bg-gold-50 hover:text-black transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Manual Leave review comment box section column */}
          <div className="lg:col-span-5 bg-stone-50 border border-gold-200 p-6 sm:p-8 rounded-xl shadow-md space-y-4">
            <h3 className="font-serif text-lg text-maroon-900 flex items-center gap-2">
              <MessageSquare size={18} className="text-gold-500" />
              <span>Share Your Legacy Experience</span>
            </h3>
            <p className="text-xs text-stone-500 font-light">
              Are you former guests? We are greatly honored to read your feedback on Taj Haveli Agra&apos;s court.
            </p>

            <form onSubmit={handleReviewSubmit} className="space-y-3 pt-2">
              {/* Star Interactive Rating selector */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono text-neutral-500 uppercase font-semibold">Stars rating:</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="p-1 cursor-pointer transition-transform active:scale-125"
                    >
                      <Star
                        size={18}
                        className={`transition-colors ${
                          star <= (hoverRating ?? rating)
                            ? 'fill-gold-400 text-gold-400 scale-105'
                            : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Patron Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-gold-500"
                />
                <input
                  type="text"
                  placeholder="Location (City / Country)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <textarea
                required
                rows={3}
                placeholder="Narrate your experience... Was the Taj viewpoint pristine? Was the service authentic?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-white border border-neutral-300 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-gold-500 text-neutral-800"
              />

              <button
                type="submit"
                className="w-full text-center py-2 bg-maroon-700 hover:bg-maroon-800 text-gold-100 font-serif font-black tracking-widest uppercase text-[10px] rounded shadow-xs transition-colors duration-200 cursor-pointer"
              >
                Inscribe Review
              </button>
            </form>

            <AnimatePresence>
              {successMsg && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-2.5 bg-green-50 border border-green-200 text-green-700 rounded text-center text-xs font-mono"
                >
                  🖋️ Gratitude! Your review has been inscribed at the top!
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
