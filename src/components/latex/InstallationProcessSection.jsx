import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Droplet, Shovel as Trowel, Clock, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Settings size={32} />,
    title: "Surface Preparation",
    desc: "We shot blast the substrate to remove contaminants and prime with a neoprene primer.",
    link: "/shot-blasting"
  },
  {
    icon: <Droplet size={32} />,
    title: "Mixing & Pumping",
    desc: "Industrial pumps mix the powder and latex liquid to a precise ratio and pump to the floor.",
    link: null
  },
  {
    icon: <Trowel size={32} />,
    title: "Application",
    desc: "Our skilled installers use smoothing trowels and spiked rollers to release trapped air.",
    link: null
  },
  {
    icon: <Clock size={32} />,
    title: "Curing",
    desc: "The floor is left to cure. Foot traffic possible in 2-4 hours, full use in 24 hours.",
    link: null
  }
];

const InstallationProcessSection = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install Commercial Latex Flooring",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.desc
    }))
  };

  return (
    <section className="py-20 bg-white">
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">Installation Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our systematic approach ensures a perfect, defect-free finish every time. 
            Proper <Link to="/shot-blasting" className="text-[#ff8c42] font-semibold hover:underline">surface preparation</Link> is key.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:border-[#ff8c42] transition-colors group text-center md:text-left"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a2332] text-white flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg group-hover:bg-[#ff8c42] transition-colors relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-[#1a2332] font-bold border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#1a2332] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4 min-h-[60px]">{step.desc}</p>
                
                {step.link && (
                  <Link to={step.link} className="text-[#ff8c42] text-sm font-bold flex items-center justify-center md:justify-start gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationProcessSection;