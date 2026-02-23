
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Hammer, Shield, Droplet, Construction, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Shield,
    title: "Epoxy Flooring",
    description: "Industrial-grade epoxy resin coatings offering extreme durability, chemical resistance, and anti-slip safety for warehouses and factories.",
    link: "/epoxy-flooring"
  },
  {
    icon: Layers,
    title: "Latex Screeding",
    description: "Rapid-setting latex smoothing compounds to level uneven substrates. Walkable in 2 hours, perfect for fast-track renovations.",
    link: "/latex-flooring"
  },
  {
    icon: Droplet,
    title: "Liquid Screed",
    description: "Flowing anhydrite and cementitious screeds designed for underfloor heating systems. Laser-level precision installation.",
    link: "/liquid-screed"
  },
  {
    icon: Hammer,
    title: "Shot Blasting",
    description: "Dust-free captive shot blasting to remove old coatings, paint, and contaminants. The essential preparation step for any resin floor.",
    link: "/shot-blasting"
  },
  {
    icon: Construction,
    title: "Concrete Grinding",
    description: "Diamond grinding services to smooth rough concrete, remove adhesives, and prepare surfaces for new flooring systems.",
    link: "/concrete-grinding"
  },
  {
    icon: Wrench,
    title: "Floor Repairs",
    description: "Specialist concrete repair services including joint rebuilding, crack stitching, and scabbling to restore damaged slabs.",
    link: "/floor-repairs-scabbling"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-2">
            Comprehensive industrial flooring solutions delivered by UK experts. From surface preparation to the final high-performance finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group text-center md:text-left"
            >
              <div className="w-14 h-14 bg-[#1a2a4a]/5 text-[#1a2a4a] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff8c42] group-hover:text-white transition-colors duration-300 mx-auto md:mx-0">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-[#1a2a4a] mb-3 group-hover:text-[#ff8c42] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Link 
                to={service.link}
                className="inline-flex items-center font-bold text-[#1a2a4a] hover:text-[#ff8c42] transition-colors group-hover:translate-x-1 duration-300"
              >
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
