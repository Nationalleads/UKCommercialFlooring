import React from 'react';
import { Search, Hammer, CheckSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloorRepairsProcessSection = () => {
  const steps = [
    {
      id: "01",
      icon: <Search className="w-10 h-10" />,
      title: "Assess & Survey",
      description: "We inspect the concrete for spalling depth, delamination, and contamination. Sounding tests identify hollow spots requiring removal."
    },
    {
      id: "02",
      icon: <Hammer className="w-10 h-10" />,
      title: "Mechanical Scabbling",
      description: "Using pneumatic bush hammers, we remove loose, weak concrete to expose sound aggregate and create a heavy CSP profile."
    },
    {
      id: "03",
      icon: <CheckSquare className="w-10 h-10" />,
      title: "Patch & Reinstate",
      description: "We apply high-strength epoxy mortar or polymer-modified screed to restore levels, followed by final finishing."
    }
  ];

  return (
    <section className="py-20 bg-[#1a2a4a] text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-700 pb-8">
          <div>
            <span className="text-[#ff8c42] font-bold uppercase tracking-wider text-sm mb-2 block">Methodology</span>
            <h2 className="text-3xl md:text-4xl font-bold">The Floor Repair & Scabbling Process</h2>
          </div>
          <Link 
            to="/concrete-grinding" 
            className="flex items-center gap-2 text-gray-300 hover:text-[#ff8c42] transition-colors mt-4 md:mt-0 font-medium group"
          >
            Compare with Diamond Grinding <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-700/50 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 bg-[#1a2a4a] md:bg-transparent">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-24 h-24 bg-[#ff8c42] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-900/20 mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="text-6xl font-black text-white/5 absolute -top-4 -right-4 select-none">
                  {step.id}
                </span>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorRepairsProcessSection;