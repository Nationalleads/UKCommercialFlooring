import React from 'react';
import { motion } from 'framer-motion';
import { Users, Factory, Map, Star } from 'lucide-react';

const CityStatsSection = ({ city }) => {
  const stats = [
    { 
      label: "Population Served", 
      value: city.population, 
      icon: Users,
      delay: 0
    },
    { 
      label: "Industrial Parks", 
      value: `${city.industrialParks}+`, 
      icon: Factory,
      delay: 0.1
    },
    { 
      label: "Region", 
      value: city.region, 
      icon: Map,
      delay: 0.2
    },
    { 
      label: "Service Rating", 
      value: "4.9/5", 
      icon: Star,
      delay: 0.3
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: stat.delay, duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#ff8c42] flex flex-col items-center text-center hover:shadow-xl transition-shadow"
        >
          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#ff8c42] mb-3">
            <stat.icon size={24} />
          </div>
          <div className="text-2xl font-bold text-[#1a2a4a] mb-1">{stat.value}</div>
          <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default CityStatsSection;