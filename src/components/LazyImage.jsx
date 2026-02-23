
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const LazyImage = ({ 
  src, 
  srcSet, 
  sizes, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  fallbackSrc = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Reset state if src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Increased margin to load earlier
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (!hasError) {
       setHasError(true);
       setIsLoaded(true); // Allow fallback to display
    }
  };

  const displaySrc = (hasError || !src) ? fallbackSrc : src;
  
  return (
    <div 
      ref={containerRef} 
      className={cn("relative overflow-hidden bg-gray-100 w-full h-full flex items-center justify-center", className)}
      style={{ width, height }}
    >
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gray-200 animate-pulse z-10"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      
      {(isInView || priority) && (
        <img
          ref={imgRef}
          src={displaySrc}
          srcSet={hasError ? undefined : srcSet}
          sizes={sizes}
          alt={alt || "Image"}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-700 ease-in-out block",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
