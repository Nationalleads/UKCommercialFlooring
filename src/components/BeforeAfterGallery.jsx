import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

const BeforeAfterGallery = ({ beforeImage, afterImage, altText }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = ('touches' in event ? event.touches[0].clientX : event.clientX) - containerRect.left;
    const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    
    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleWindowMove = (e) => {
      if (isDragging) handleMove(e);
    };
    const handleWindowUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleWindowMove);
    window.addEventListener('mouseup', handleWindowUp);
    window.addEventListener('touchmove', handleWindowMove);
    window.addEventListener('touchend', handleWindowUp);

    return () => {
      window.removeEventListener('mousemove', handleWindowMove);
      window.removeEventListener('mouseup', handleWindowUp);
      window.removeEventListener('touchmove', handleWindowMove);
      window.removeEventListener('touchend', handleWindowUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full select-none">
      <div 
        ref={containerRef}
        className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize shadow-2xl border-4 border-white"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt={`After: ${altText}`} 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image (Foreground - Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt={`Before: ${altText}`} 
            className="absolute top-0 left-0 h-full max-w-none object-cover"
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#ff8c42]">
            <ArrowLeftRight size={20} />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-bold backdrop-blur-sm">BEFORE</div>
        <div className="absolute top-4 right-4 bg-[#ff8c42]/80 text-white px-3 py-1 rounded text-sm font-bold backdrop-blur-sm">AFTER</div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-2 italic">Drag slider to compare transformation</p>
    </div>
  );
};

export default BeforeAfterGallery;