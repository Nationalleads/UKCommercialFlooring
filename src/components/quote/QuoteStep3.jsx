import React from 'react';
import { motion } from 'framer-motion';
import { Home, Factory, Warehouse, Building2 } from 'lucide-react';

const options = [
  {
    id: 'small',
    label: 'Small (<500 m²)',
    description: 'Retail units, garages, small workshops, or repair areas.',
    icon: Home
  },
  {
    id: 'medium',
    label: 'Medium (500-2,000 m²)',
    description: 'Standard warehouses, factories, and commercial spaces.',
    icon: Factory
  },
  {
    id: 'large',
    label: 'Large (2,000-5,000 m²)',
    description: 'Large distribution centers, hangars, and industrial plants.',
    icon: Warehouse
  },
  {
    id: 'xl',
    label: 'Extra Large (5,000+ m²)',
    description: 'Major logistics hubs and multi-site projects.',
    icon: Building2
  }
];

const QuoteStep3 = ({ value, onChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#1a2a4a] mb-2">Estimated Project Size</h2>
      <p className="text-gray-600 mb-6">This helps us assign the right team and machinery for your quote.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {options.map((option) => (
          <motion.div
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(option.label)}
            className={`cursor-pointer p-6 rounded-xl border-2 transition-all flex flex-col items-center text-center gap-3 ${
              value === option.label
                ? 'border-[#ff8c42] bg-orange-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className={`p-4 rounded-full ${
              value === option.label ? 'bg-[#ff8c42] text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              <option.icon size={32} />
            </div>
            <div>
              <h3 className={`font-bold text-lg ${
                value === option.label ? 'text-[#ff8c42]' : 'text-[#1a2a4a]'
              }`}>
                {option.label}
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">{option.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuoteStep3;