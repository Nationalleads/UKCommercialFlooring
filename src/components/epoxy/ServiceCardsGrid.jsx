import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Droplets, Gauge } from 'lucide-react';

const ServiceCardsGrid = () => {
  const services = [
    {
      id: "service-1",
      title: "High-Traffic Warehousing",
      description: "Ultra-durable coatings designed to withstand constant forklift traffic and heavy machinery without cracking or peeling.",
      icon: <Zap className="text-[#ff8c42]" size={24} />,
      image: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/5c6ceec671d9ea1b6d6b468ba818fc4f.png"
    },
    {
      id: "service-2",
      title: "Industrial Grade Finish",
      description: "Professional high-gloss or matte finishes that improve light reflectivity and facility aesthetics while providing maximum protection.",
      icon: <Shield className="text-[#ff8c42]" size={24} />,
      image: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/3bed1833d2843d622259e97b9c71f2c8.png"
    },
    {
      id: "service-3",
      title: "Chemical Resistant",
      description: "Specialized resin formulations that resist oils, acids, and aggressive cleaning chemicals commonly used in industrial settings.",
      icon: <Droplets className="text-[#ff8c42]" size={24} />,
      image: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/d65f40199127ef46830955f31a46557e.png"
    },
    {
      id: "service-4",
      title: "Safety & Slip Resistance",
      description: "Integrated anti-slip textures and safety markings to ensure a secure working environment and compliance with HSE standards.",
      icon: <Gauge className="text-[#ff8c42]" size={24} />,
      image: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/99b61d368e7b99c8942a033f57279313.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2a4a] mb-4">
            Industrial Solutions Tailored to Your Facility
          </h2>
          <p className="text-gray-600">
            We provide a comprehensive range of epoxy flooring systems designed to meet the specific demands of UK industrial environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white p-2.5 rounded-lg shadow-md z-10">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1a2a4a] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsGrid;