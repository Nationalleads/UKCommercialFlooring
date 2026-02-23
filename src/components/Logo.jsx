import React from 'react';

const Logo = ({ className = "", variant = "full", size = "default" }) => {
  // Size mapping
  const sizes = {
    small: { h: 32, w: variant === 'full' ? 180 : 32 },
    default: { h: 40, w: variant === 'full' ? 220 : 40 },
    large: { h: 64, w: variant === 'full' ? 320 : 64 },
    xl: { h: 96, w: variant === 'full' ? 480 : 96 }
  };

  const currentSize = sizes[size] || sizes.default;
  
  // Colors
  const primaryColor = "#ff8c42"; // Brand Orange
  const secondaryColor = "currentColor"; // Inherits text color (usually white in header, dark in footer)

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg 
        width={variant === 'icon' ? currentSize.h : currentSize.h} 
        height={currentSize.h} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="UK Commercial Flooring Logo"
      >
        {/* Abstract Industrial Floor Tile / Hexagon Construction */}
        <path 
          d="M50 5 L88.97 27.5 V72.5 L50 95 L11.03 72.5 V27.5 L50 5Z" 
          stroke={secondaryColor} 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="opacity-90"
        />
        
        {/* Inner Geometric Layers representing layering/coating */}
        <path 
          d="M50 20 L75 35 V65 L50 80 L25 65 V35 L50 20Z" 
          fill={secondaryColor}
          className="opacity-20"
        />
        
        {/* Precision / Strength Accent Mark (The "Finish") */}
        <path 
          d="M50 35 L50 80 M50 80 L75 65 M50 80 L25 65" 
          stroke={primaryColor} 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Top Highlight */}
        <path 
          d="M35 28 L65 28" 
          stroke={primaryColor} 
          strokeWidth="4" 
          strokeLinecap="round"
        />
      </svg>

      {variant === 'full' && (
        <div className="flex flex-col justify-center leading-none">
          <span 
            className="font-bold tracking-tight text-[1.4em] uppercase" 
            style={{ color: secondaryColor }}
          >
            UK Commercial
          </span>
          <span 
            className="font-medium tracking-[0.2em] text-[0.65em] uppercase opacity-80" 
            style={{ color: primaryColor }}
          >
            Flooring Contractors
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;