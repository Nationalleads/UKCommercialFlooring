import React from 'react';
import LazyImage from '@/components/LazyImage';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { motion } from 'framer-motion';

const CoverImage = ({ 
  locationName, 
  imageUrl, 
  altText, 
  breadcrumbs, 
  children 
}) => {
  return (
    <section className="relative w-full min-h-[450px] md:min-h-[500px] bg-gray-900 overflow-hidden flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <LazyImage
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover object-center"
          priority={true}
          sizes="100vw"
        />
        {/* Gradient Overlay - Dark semi-transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
      </div>

      {/* Content Overlay - Added significant top padding to clear fixed header */}
      <div className="relative z-20 container mx-auto px-4 pb-12 md:pb-16 pt-32 md:pt-40 lg:pt-48 flex-grow flex flex-col justify-end">
        
        {/* Breadcrumbs */}
        <div className="mb-4 md:mb-6">
           <BreadcrumbNav 
             breadcrumbItems={breadcrumbs} 
             className="text-white/80 hover:text-white"
           />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg mb-4 mt-2">
            {locationName}
          </h1>
          
          {/* Optional Children (Description, Tags, etc.) */}
          {children && (
            <div className="text-white/90 max-w-2xl mt-4">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CoverImage;