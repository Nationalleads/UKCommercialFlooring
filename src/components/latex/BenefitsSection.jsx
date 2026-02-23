import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Layers, Wallet, Droplet } from 'lucide-react';

const benefits = [
  {
    icon: <Clock size={40} />,
    title: "Quick Dry Times",
    description: "Accepts foot traffic in just 2-4 hours and forklifts in 24 hours. Minimises operational downtime for your business.",
    highlight: "Walk on same day"
  },
  {
    icon: <Layers size={40} />,
    title: "Self-Smoothing",
    description: "Thin-section pumpable compounds that naturally flow to create a perfectly flat, glass-like surface tolerance (SR1).",
    highlight: "Laser-level finish"
  },
  {
    icon: <Wallet size={40} />,
    title: "Cost-Effective",
    description: "An economical solution for pre-levelling large industrial areas before installing expensive epoxy resin coatings.",
    highlight: "Save on materials"
  },
  {
    icon: <Droplet size={40} />,
    title: "UFH Compatible",
    description: "Ideally suited for encapsulating underfloor heating pipes due to high thermal conductivity and flexibility.",
    highlight: "Efficient heating"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a2332 1px, transparent 1px), linear-gradient(90deg, #1a2332 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
            Benefits for <span className="text-[#ff8c42]">Factories & Warehouses</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Why leading UK industrial facilities choose our commercial latex self-levelling compounds for their floor rectification projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-b-4 border-[#ff8c42] group"
            >
              <div className="mb-6 inline-block p-4 bg-gray-100 rounded-full text-[#1a2332] group-hover:bg-[#1a2332] group-hover:text-[#ff8c42] transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#ff8c42] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {benefit.description}
              </p>
              <div className="inline-block px-3 py-1 bg-gray-100 text-[#4a5568] text-xs font-bold rounded uppercase tracking-wide">
                {benefit.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;