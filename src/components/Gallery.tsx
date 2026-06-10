import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState(false);

  const categories = ['All', 'Rooms', 'Dining', 'Views', 'Vibe'];

  // Filter gallery images
  const filteredImages = activeTab === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeTab);

  const handleOpenLightbox = (imgId: string) => {
    const idx = GALLERY_IMAGES.findIndex((img) => img.id === imgId);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setLightboxZoom(false);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
    setLightboxZoom(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxZoom(false);
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxZoom(false);
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FCFAF6] relative border-t border-b border-gold-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-gold-500 font-bold">Visual Splendors</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-maroon-900 tracking-wide">Haveli Chronicles Gallery</h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm sm:text-base font-light font-sans">
            Feast your eyes on the visual tapestry of Taj Haveli. From grand sunrise terraces to intricate marble Pietra Dura inlays.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Categories Tab Pill Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full font-serif text-xs uppercase tracking-widest transition-all cursor-pointer border ${
                activeTab === cat
                  ? 'bg-maroon-700 text-gold-100 border-transparent shadow-md'
                  : 'bg-white text-stone-500 border-gold-200 hover:border-gold-300 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Columns Gallery Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layoutId={`gallery-item-${img.id}`}
                onClick={() => handleOpenLightbox(img.id)}
                className="relative break-inside-avoid rounded-lg overflow-hidden border border-gold-200 shadow-md group cursor-pointer bg-neutral-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {/* Visual Image tag with drag/hover elements */}
                <img
                  src={img.image}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform scale-101 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Cover Shade on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4" />

                {/* Hover overlay text content */}
                <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between gap-2 z-10 text-white">
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-gold-300 font-black">
                      {img.category}
                    </span>
                    <h3 className="font-serif font-semibold text-xs sm:text-sm text-stone-100 mt-0.5 truncate max-w-[200px]">
                      {img.title}
                    </h3>
                  </div>
                  <div className="p-1.5 rounded-full bg-white/10 border border-white/20">
                    <ZoomIn size={14} className="text-gold-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox absolute overlay markup */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between items-center"
            onClick={handleCloseLightbox}
          >
            {/* Lightbox HUD header */}
            <div className="w-full px-6 py-4 flex items-center justify-between text-white z-20 bg-black/50 backdrop-blur-md">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-gold-400 font-bold">
                  Chamber Artifact {lightboxIndex + 1} of {GALLERY_IMAGES.length}
                </span>
                <p className="font-serif text-sm tracking-wide text-stone-200">
                  {GALLERY_IMAGES[lightboxIndex].title}
                </p>
              </div>
              
              <button
                onClick={handleCloseLightbox}
                className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Lightbox Body main image slider */}
            <div className="relative flex-1 w-full flex items-center justify-center p-4">
              
              {/* Back controls */}
              <button
                onClick={handlePrev}
                className="absolute left-6 p-3 rounded-full bg-black/40 border border-neutral-800 text-stone-300 hover:text-white z-25 cursor-pointer hover:bg-black/80"
              >
                <ArrowLeft size={18} />
              </button>

              <div 
                className="max-h-[80vh] max-w-4xl rounded-lg overflow-hidden relative"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxZoom(!lightboxZoom);
                }}
              >
                <img
                  src={GALLERY_IMAGES[lightboxIndex].image}
                  alt={GALLERY_IMAGES[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className={`max-h-[80vh] max-w-full object-contain rounded-md select-none transition-transform duration-300 cursor-zoom-in ${
                    lightboxZoom ? 'scale-120 cursor-zoom-out' : ''
                  }`}
                />
              </div>

              {/* Next controls */}
              <button
                onClick={handleNext}
                className="absolute right-6 p-3 rounded-full bg-black/40 border border-neutral-800 text-stone-300 hover:text-white z-25 cursor-pointer hover:bg-black/80"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Lightbox footer HUD info */}
            <div className="w-full text-center py-4 text-xs font-mono text-stone-400 border-t border-neutral-900 bg-black/50 backdrop-blur-md z-10">
              <span>Click image to zoom in / Click outside to exit Lightbox View</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
