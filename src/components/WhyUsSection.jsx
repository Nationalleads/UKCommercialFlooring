
import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Clock, Users } from 'lucide-react';

const WhyUsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered across the UK'
    },
    {
      icon: TrendingUp,
      number: 'KD≤30',
      label: 'Search Rankings',
      description: 'Top-ranked flooring specialists'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock customer service'
    },
    {
      icon: Award,
      number: '10+',
      label: 'Years Experience',
      description: 'Industry-leading expertise'
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-br from-[#1a2a4a] via-[#243552] to-[#1a2a4a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Trusted by hundreds of businesses across the UK for exceptional flooring solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 hover:border-[#ff8c42] transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff8c42] to-[#ff7a2e] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <stat.icon size={32} className="text-white" />
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-4xl sm:text-5xl font-bold text-[#ff8c42] mb-2"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-300">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 sm:p-12 border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Floors?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto px-2">
              Join hundreds of satisfied clients who trust us for their commercial and industrial flooring needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#ff8c42] text-white font-semibold rounded-lg shadow-lg hover:bg-[#ff7a2e] transition-all duration-300 w-full sm:w-auto"
            >
              Request a Free Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
