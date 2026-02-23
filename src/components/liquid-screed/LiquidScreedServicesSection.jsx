import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Warehouse, Factory, Home, Layers } from 'lucide-react';

const services = [
  {
    icon: <Warehouse className="w-10 h-10" />,
    title: "Commercial Liquid Screed Contractors UK",
    desc: "Large-scale flow screed installation for retail units, offices, and schools nationwide.",
    link: "/services/liquid-screed",
    anchor: "flow screed contractors UK"
  },
  {
    icon: <Factory className="w-10 h-10" />,
    title: "Industrial Flow Screed Installers Near Me",
    desc: "Heavy-duty pumpable screeds for warehouses and factories. Rapid turnaround times.",
    link: "/locations-index",
    anchor: "industrial latex screed companies"
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: "Anhydrite Screed Specialists",
    desc: "Expert application of calcium sulphate binders for superior surface finish and flatness.",
    link: "/services/liquid-screed",
    anchor: "anhydrite flooring specialists"
  },
  {
    icon: <Home className="w-10 h-10" />,
    title: "UFH Liquid Screed Installation",
    desc: "The ultimate partner for underfloor heating. Maximize efficiency and minimize bills.",
    link: "/services/liquid-screed",
    anchor: "liquid screed installation near me"
  }
];

const LiquidScreedServicesSection = () => {
  return (
    <section className="py-20 bg-[#1a3a52] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Screeding Services</h2>
            <p className="text-gray-300 max-w-2xl text-lg">
              From <Link to="/locations-index" className="text-[#ff8c42] hover:underline">liquid screed installation near me</Link> to nationwide industrial projects, we cover it all.
            </p>
          </div>
          <Link to="/services/liquid-screed" className="text-[#ff8c42] font-semibold flex items-center gap-2 hover:text-white transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="mb-6 text-[#ff8c42] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff8c42] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {service.desc}
              </p>
              <div className="flex items-center text-sm font-medium text-gray-300 group-hover:text-white mt-auto">
                <span className="border-b border-transparent group-hover:border-[#ff8c42] transition-colors">
                  More about {service.anchor}
                </span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiquidScreedServicesSection;