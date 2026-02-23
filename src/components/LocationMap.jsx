import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Clock, Phone } from 'lucide-react';

const LocationMap = () => {
  const address = "28 York Avenue, Walsall, WS2 9XA";
  // Using standard Google Maps Embed API format (public/iframe version)
  const mapUrl = `https://maps.google.com/maps?q=28+York+Avenue,+Walsall,+WS2+9XA&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Visit Our HQ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Based in the heart of the West Midlands, our central location allows us to serve clients nationwide with rapid response times.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row max-w-6xl mx-auto"
        >
          {/* Info Panel */}
          <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-[#1a2a4a] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <div className="mb-8 border-b border-white/10 pb-6">
                <h3 className="text-2xl font-bold mb-2">UK Commercial Flooring</h3>
                <p className="text-[#ff8c42] font-medium">RB Grinding UK Ltd</p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff8c42]/20 flex items-center justify-center text-[#ff8c42] shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Head Office</h4>
                    <p className="text-gray-300 leading-relaxed">
                      28 York Avenue<br />
                      Walsall<br />
                      West Midlands<br />
                      WS2 9XA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#ff8c42]/20 flex items-center justify-center text-[#ff8c42] shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                    <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-400 text-sm mt-1">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <a 
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-900/20 group transform hover:-translate-y-0.5"
                >
                  <Navigation size={18} className="group-hover:rotate-12 transition-transform" />
                  Get Directions
                  <ExternalLink size={16} className="opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Panel */}
          <div className="lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] relative bg-gray-100">
            <iframe 
              width="100%" 
              height="100%" 
              title="UK Commercial Flooring Location Map"
              src={mapUrl}
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              className="absolute inset-0 w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Mobile Interaction Hint */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 shadow-sm pointer-events-none lg:hidden">
              Tap to interact
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;