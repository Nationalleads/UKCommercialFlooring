import React from 'react';
import { Link } from 'react-router-dom';

const InstallationProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Surface Preparation",
      desc: "We use captive shot blasting or diamond grinding to remove contaminants and open the concrete pores.",
      link: "/services/shot-blasting"
    },
    {
      num: "02",
      title: "Primer Application",
      desc: "A low-viscosity epoxy primer is applied to penetrate the substrate and ensure maximum adhesion."
    },
    {
      num: "03",
      title: "Epoxy Coating",
      desc: "The main body coat is applied by squeegee and roller to achieve the specified thickness and color."
    },
    {
      num: "04",
      title: "Curing & Hardening",
      desc: "The floor is allowed to cure. Fast-cure systems can be foot-traffic ready in as little as 4-6 hours."
    },
    {
      num: "05",
      title: "Quality Inspection",
      desc: "A final walkthrough to ensure the finish meets our high standards before handover."
    }
  ];

  return (
    <section className="py-20 bg-[#1a2a4a] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Installation Process</h2>
            <p className="text-gray-300 mb-10 text-lg">
              Explore our step-by-step installation guide. Our professional 5-step application ensures a bond that lasts for years, not months. Preparation is key.
            </p>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <span className="text-4xl font-bold text-gray-500 group-hover:text-[#ff8c42] transition-colors font-mono">{step.num}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#ff8c42] transition-colors">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{step.desc}</p>
                    {step.link && (
                      <Link to={step.link} className="text-[#ff8c42] text-sm mt-2 inline-flex items-center gap-1 hover:underline">
                        View Prep Details <span>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="absolute inset-0 bg-[#ff8c42] rounded-2xl transform rotate-3 opacity-20 translate-x-2 translate-y-2"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700 bg-gray-800">
              <img 
                src="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/df670681e6f7204f04f9db821ca41e36.png" 
                alt="Commercial epoxy resin flooring contractors UK before/after warehouse" 
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationProcessSection;