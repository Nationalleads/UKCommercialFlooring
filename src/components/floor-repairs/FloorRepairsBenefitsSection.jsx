import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Layers, AlertTriangle, PenTool } from 'lucide-react';

const FloorRepairsBenefitsSection = () => {
  const benefits = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-white" />,
      title: "Crack Fixing & Spall Repair",
      description: "Effective removal of honeycomb concrete and loose material to provide a sound base for structural mortar repairs."
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "Overlay Key Creation",
      description: "Creates a heavy mechanical key (CSP 6-9) essential for bonding thick screeds, toppings, and heavy-duty overlays."
    },
    {
      icon: <PenTool className="w-8 h-8 text-white" />,
      title: "Minimal Depth Removal",
      description: "Precisely removes only damaged surface layers (typically 3-5mm) without compromising the slab's structural integrity."
    },
    {
      icon: <Hammer className="w-8 h-8 text-white" />,
      title: "Surface Preparation",
      description: "Removes laitance, contaminants, and old coatings more aggressively than grinding for deep surface restoration."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">
            Benefits for Industrial Sites & Factories
          </h2>
          <p className="text-gray-600 text-lg">
            Why choose mechanical scabbling? It provides a robust solution for heavily damaged floors where standard grinding isn't enough.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border-b-4 border-transparent hover:border-[#ff8c42]"
            >
              <div className="w-16 h-16 bg-[#1a2a4a] rounded-lg flex items-center justify-center mb-6 shadow-md group-hover:bg-[#ff8c42] transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a2a4a] mb-3 group-hover:text-[#ff8c42] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorRepairsBenefitsSection;