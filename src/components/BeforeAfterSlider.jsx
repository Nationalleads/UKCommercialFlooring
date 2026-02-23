import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-xl shadow-2xl cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Underneath) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={beforeImage} 
          alt={beforeLabel} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm font-semibold backdrop-blur-sm">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped on top) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={afterImage} 
          alt={afterLabel} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute top-4 right-4 bg-green-600/80 text-white px-3 py-1 rounded-md text-sm font-semibold backdrop-blur-sm">
          {afterLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-800">
          <MoveHorizontal size={20} />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;