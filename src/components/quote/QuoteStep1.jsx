import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Droplet, Hammer, Shield, HelpCircle } from 'lucide-react';

const options = [
  {
    id: 'epoxy',
    label: 'Epoxy Flooring',
    description: 'Durable, chemical-resistant resin coatings ideal for warehouses and factories.',
    icon: Shield
  },
  {
    id: 'latex',
    label: 'Latex Screed',
    description: 'Self-leveling compounds for smoothing uneven subfloors before finishing.',
    icon: Layers
  },
  {
    id: 'shot-blasting',
    label: 'Shot Blasting',
    description: 'Dust-free surface preparation to clean and texture concrete floors.',
    icon: Hammer
  },
  {
    id: 'liquid-screed',
    label: 'Liquid Screed',
    description: 'Fast-drying, flowing screeds perfect for underfloor heating systems.',
    icon: Droplet
  },
  {
    id: 'not-sure',
    label: 'Not Sure',
    description: 'I need advice on the best solution for my specific requirements.',
    icon: HelpCircle
  }
];

const QuoteStep1 = ({ value, onChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#1a2a4a] mb-2">What type of flooring do you need?</h2>
      <p className="text-gray-600 mb-6">Select the service that best matches your project requirements.</p>
      
      <div className="grid gap-4 sm:grid-cols-1">
        {options.map((option) => (
          <motion.div
            key={option.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onChange(option.label)}
            className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-start gap-4 ${
              value === option.label
                ? 'border-[#ff8c42] bg-orange-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className={`p-3 rounded-full flex-shrink-0 ${
              value === option.label ? 'bg-[#ff8c42] text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              <option.icon size={24} />
            </div>
            <div>
              <h3 className={`font-bold text-lg ${
                value === option.label ? 'text-[#ff8c42]' : 'text-[#1a2a4a]'
              }`}>
                {option.label}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{option.description}</p>
            </div>
            <div className="flex-grow flex justify-end items-center h-full">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                 value === option.label ? 'border-[#ff8c42]' : 'border-gray-300'
              }`}>
                {value === option.label && <div className="w-3 h-3 bg-[#ff8c42] rounded-full" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuoteStep1;