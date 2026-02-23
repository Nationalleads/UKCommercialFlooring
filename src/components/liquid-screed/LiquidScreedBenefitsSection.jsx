import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ThermometerSun, Ruler, Layers, TrendingDown } from 'lucide-react';

const benefits = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-[#ff8c42]" />,
    title: "6K m²/day Coverage",
    description: "Our advanced pumpable flow screed systems allow for massive daily install rates, reducing project timelines significantly compared to traditional methods."
  },
  {
    icon: <Ruler className="w-8 h-8 text-[#ff8c42]" />,
    title: "Self-Levelling Precision",
    description: "Achieve SR2 surface regularity effortlessly. The fluid calcium sulphate mixture self-compacts to create a perfectly flat, laser-levelled finish."
  },
  {
    icon: <ThermometerSun className="w-8 h-8 text-[#ff8c42]" />,
    title: "UFH Compatibility",
    description: "Liquid screed fully encapsulates heating pipes, offering 200% better thermal conductivity for highly efficient underfloor heating systems."
  },
  {
    icon: <Layers className="w-8 h-8 text-[#ff8c42]" />,
    title: "Shrinkage-Free Formula",
    description: "Formulated to minimize cracking and curling. Our anhydrite screeds require fewer expansion joints, creating seamless large-area floors."
  },
  {
    icon: <Clock className="w-8 h-8 text-[#ff8c42]" />,
    title: "Rapid Drying Time",
    description: "Walkable within 24-48 hours. Force drying can begin after 7 days, allowing follow-on trades to access the site much sooner."
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-[#ff8c42]" />,
    title: "Cost-Effective",
    description: "Reduced labor costs and faster installation times make large pours highly economical. Ideal for warehouses and commercial units."
  }
];

const LiquidScreedBenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
            Why Choose Liquid Screed?
          </h2>
          <p className="text-gray-600 text-lg">
            Superior performance for commercial and industrial flooring projects across the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group"
            >
              <div className="bg-[#1a3a52]/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1a3a52] transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3 group-hover:text-[#ff8c42] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiquidScreedBenefitsSection;