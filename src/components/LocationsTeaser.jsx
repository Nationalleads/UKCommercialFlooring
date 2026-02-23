
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocationsTeaser = () => {
  const locations = [
    {
      city: 'Birmingham',
      address: '123 Industrial Estate, Birmingham B12 0AB',
      phone: '0800 912 4131',
      serviceArea: 'West Midlands & Surrounding Areas'
    },
    {
      city: 'Manchester',
      address: '456 Commercial Park, Manchester M1 2CD',
      phone: '0800 912 4131',
      serviceArea: 'Greater Manchester & North West'
    },
    {
      city: 'UK-Wide',
      address: 'Nationwide Coverage',
      phone: '0800 912 4131',
      serviceArea: 'All Major Cities & Industrial Zones'
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2a4a] mb-4">
            Our Service Locations
          </h2>
          <p className="text-lg sm:text-xl text-[#4a5568] max-w-3xl mx-auto px-4">
            Providing premium flooring solutions across the UK with local expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-2.2445%2C52.4668%2C-2.1445%2C52.5168&layer=mapnik&marker=52.4914%2C-2.1945"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Service Area Map"
            />
          </motion.div>

          <div className="space-y-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#ff8c42] hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff8c42] to-[#ff7a2e] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">
                      {location.city}
                    </h3>
                    <p className="text-[#4a5568] mb-3">
                      {location.address}
                    </p>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row items-center gap-2 text-[#4a5568]">
                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-[#ff8c42]" />
                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-[#ff8c42] transition-colors">
                            {location.phone}
                            </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-[#4a5568]">
                        <MapPin size={16} className="text-[#ff8c42]" />
                        <span className="text-sm">{location.serviceArea}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/quote" 
                className="block w-full px-8 py-4 bg-[#ff8c42] text-white font-semibold rounded-lg shadow-lg hover:bg-[#ff7a2e] transition-all duration-300 text-center text-lg"
              >
                Get Quote for Your Area
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsTeaser;
