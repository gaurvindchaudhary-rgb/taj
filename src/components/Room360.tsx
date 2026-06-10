import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MoveHorizontal, RotateCcw, Maximize, Minimize, Info, Compass } from 'lucide-react';

export default function Room360() {
  const [posX, setPosX] = useState(50); // percentage-wise position
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef(0);
  const posStartRef = useRef(50);

  // Auto-pan slightly initially to entice the user
  useEffect(() => {
    let animationFrameId: number;
    let currentX = 50;
    let direction = 1;
    
    const autoPan = () => {
      if (!isDragging) {
        currentX += 0.05 * direction;
        if (currentX > 75) direction = -1;
        if (currentX < 25) direction = 1;
        setPosX(currentX);
      }
      animationFrameId = requestAnimationFrame(autoPan);
    };

    autoPan();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = e.clientX;
    posStartRef.current = posX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current;
    // Calculate new percentage position
    const containerWidth = containerRef.current?.offsetWidth || 800;
    const percentMovement = (deltaX / containerWidth) * 100;
    let newPos = posStartRef.current - percentMovement;
    
    // clamp between 0 to 100
    if (newPos < 0) newPos = 0;
    if (newPos > 100) newPos = 100;
    setPosX(newPos);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch Support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartRef.current = e.touches[0].clientX;
    posStartRef.current = posX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStartRef.current;
    const containerWidth = containerRef.current?.offsetWidth || 800;
    const percentMovement = (deltaX / containerWidth) * 100;
    let newPos = posStartRef.current - percentMovement;
    if (newPos < 0) newPos = 0;
    if (newPos > 100) newPos = 100;
    setPosX(newPos);
  };

  const hotspots = [
    {
      id: 'bed',
      x: 35,
      y: 60,
      title: 'Imperial Bedstead',
      desc: 'Handcrafted rosewood king-size posts wrapped in premium silk threads. Custom-crafted feather-soft spring beds.'
    },
    {
      id: 'window',
      x: 62,
      y: 42,
      title: 'Taj Mahal Vista Gate',
      desc: 'Symmetrically aligned triple arched windows framing a private direct line-of-sight sight of the Taj Mahal dome.'
    },
    {
      id: 'table',
      x: 18,
      y: 72,
      title: 'Royal Welcome Tray',
      desc: 'Fresh local dates, hand-rolled marzipans, and cardamom saffron tea brewed freshly for your imperial reception.'
    }
  ];

  const handleNavigate = (direction: 'left' | 'right') => {
    setPosX(prev => {
      let next = direction === 'left' ? prev - 15 : prev + 15;
      if (next < 0) next = 0;
      if (next > 100) next = 100;
      return next;
    });
  };

  return (
    <section id="tour360" className={`py-24 bg-maroon-950 text-gold-100 relative overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50 py-0 flex flex-col bg-stone-950' : ''}`}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.85)_100%)] pointer-events-none z-10" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-25 flex-1 flex flex-col justify-center ${isFullscreen ? 'max-w-full w-full h-full p-0 flex flex-col' : ''}`}>
        
        {/* Header Block, hide if fullscreen for clean experience */}
        {!isFullscreen && (
          <div className="text-center space-y-3 mb-12">
            <div className="flex items-center justify-center gap-1.5 text-gold-300">
              <Compass className="animate-spin-slow text-gold-400" size={16} />
              <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold">Immersive Sanctuary Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-wide">360° Room Experience</h2>
            <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base font-light font-sans">
              Drag your finger or mouse across the chamber to pan the viewport and look through the custom structural features of our Royal Imperial Suite.
            </p>
            <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
          </div>
        )}

        {/* 360 Viewer Canvas Stage */}
        <div 
          className={`relative border border-gold-300/40 bg-black overflow-hidden shadow-2xl flex flex-col ${
            isFullscreen ? 'w-full h-full border-none rounded-none' : 'h-[500px] rounded-xl'
          }`}
        >
          {/* Panoramic Panning Window */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUpOrLeave}
            className={`w-full h-full relative cursor-grab select-none active:cursor-grabbing`}
            style={{
              backgroundImage: 'url("/src/assets/images/luxury_room_taj_view_1781118800413.png")',
              backgroundSize: '240% 100%',
              backgroundPosition: `${posX}% center`,
              backgroundRepeat: 'no-repeat',
              transition: isDragging ? 'none' : 'background-position 0.25s ease-out'
            }}
          >
            {/* Interactive Hotspots layered over background positioning */}
            {hotspots.map((h) => {
              // Map background positions to visual spots
              // We've panned background from X% (0-100). Let's estimate screen coordinates based on background position!
              // For simplicity, we can offset slightly or let them float in a stable scenic orientation relative to posX.
              const visualOffset = ((h.x - posX) * 1.8) + 50; 
              
              if (visualOffset < -10 || visualOffset > 110) return null; // hide if offscreen

              return (
                <div
                  key={h.id}
                  className="absolute"
                  style={{ left: `${visualOffset}%`, top: `${h.y}%` }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(h.id === activeHotspot ? null : h.id);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center relative transition-transform hover:scale-110 cursor-pointer ${
                      activeHotspot === h.id ? 'bg-maroon-700 text-white' : 'bg-gold-400/90 text-neutral-900 border border-white'
                    }`}
                  >
                    <span className="absolute inset-0 rounded-full bg-gold-400 animate-ping opacity-35" />
                    <Info size={14} />
                  </button>

                  <AnimatePresence>
                    {activeHotspot === h.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 p-3 bg-white text-neutral-800 rounded-lg shadow-xl border border-gold-300 z-50 text-left"
                      >
                        <h4 className="font-serif font-black text-xs text-maroon-900 uppercase tracking-wider mb-1">{h.title}</h4>
                        <p className="text-[11px] text-neutral-600 leading-normal font-light">{h.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Drag guide overlay */}
            <div className="absolute bottom-6 left-6 z-25 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold-300/30 flex items-center gap-2 text-xs text-stone-200">
              <MoveHorizontal size={14} className="text-gold-400" />
              <span>Drag to Pan Room View 360°</span>
            </div>
          </div>

          {/* Navigation/Zoom Toolbar HUD Overlay */}
          <div className="absolute top-6 right-6 z-25 flex items-center gap-2">
            <button
              onClick={() => setPosX(50)}
              className="p-2.5 rounded-lg bg-black/60 border border-gold-300/30 text-stone-200 hover:text-white hover:bg-black/80 transition-colors cursor-pointer"
              title="Reset view"
            >
              <RotateCcw size={16} />
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2.5 rounded-lg bg-black/60 border border-gold-300/30 text-stone-200 hover:text-white hover:bg-black/80 transition-colors cursor-pointer"
              title="Toggle fullscreen"
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>

          {/* Directional Help buttons */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
            <button
              onClick={() => handleNavigate('left')}
              className="p-2 rounded-full bg-black/40 border border-gold-300/20 text-white hover:bg-black/70 pointer-events-auto cursor-pointer transition-colors"
            >
              &larr;
            </button>
            <button
              onClick={() => handleNavigate('right')}
              className="p-2 rounded-full bg-black/40 border border-gold-300/20 text-white hover:bg-black/70 pointer-events-auto cursor-pointer transition-colors"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Dynamic footer HUD */}
        {!isFullscreen && (
          <div className="flex justify-between items-center text-xs font-mono text-stone-400 mt-4 border-t border-gold-300/10 pt-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
              <span>Imperial Suite 360 Tour Loaded</span>
            </span>
            <span>Yaw Pan: {Math.round(posX)}° / FOV Width: 120°</span>
          </div>
        )}
      </div>
    </section>
  );
}
