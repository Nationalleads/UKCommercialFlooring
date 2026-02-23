import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building2, Warehouse, Factory, Store } from 'lucide-react';

const services = [
  {
    title: "Commercial Latex Levelling Contractors Leeds",
    link: "/clusters/latex-leeds",
    icon: <Warehouse size={32} />,
    desc: "Specialist warehouse floor levelling services across West Yorkshire."
  },
  {
    title: "Industrial Latex Floor Installers Near Me",
    link: "/clusters/latex-near-me",
    icon: <MapPin size={32} />,
    desc: "Find our nearest mobile screeding team to your facility."
  },
  {
    title: "Commercial Latex Flooring Manchester",
    link: "/clusters/latex-manchester",
    icon: <Factory size={32} />,
    desc: "High-tolerance floor preparation for Manchester's industrial hubs."
  },
  {
    title: "Industrial Screed Contractors Birmingham",
    link: "/clusters/latex-birmingham",
    icon: <Building2 size={32} />,
    desc: "Serving the Midlands with rapid-set latex pumping solutions."
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-[#1a2332] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-700 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Latex Services</h2>
            <p className="text-gray-400">
              We provide nationwide coverage with localized teams. From <Link to="/clusters/latex-london" className="text-[#ff8c42] hover:underline">London</Link> to <Link to="/clusters/latex-glasgow" className="text-[#ff8c42] hover:underline">Glasgow</Link>, our heavy-duty latex screeding services ensure your subfloor is perfectly prepared.
            </p>
          </div>
          <Link to="/locations-index" className="hidden md:flex items-center gap-2 text-[#ff8c42] hover:text-white transition-colors font-bold mt-4 md:mt-0">
            View All Locations <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group bg-[#2d3748] p-6 rounded-xl hover:bg-white hover:text-[#1a2332] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff8c42]/20 border border-gray-700 hover:border-transparent"
            >
              <div className="bg-[#1a2332] w-14 h-14 rounded-lg flex items-center justify-center text-[#ff8c42] mb-6 group-hover:bg-[#ff8c42] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-[#1a2332]">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-600">
                {service.desc}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#ff8c42] opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Service <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
           <p className="text-gray-400 text-sm">
             Also serving: <Link to="/bristol" className="hover:text-[#ff8c42] underline decoration-gray-600">Bristol</Link>, <Link to="/coventry" className="hover:text-[#ff8c42] underline decoration-gray-600">Coventry</Link>, <Link to="/leeds" className="hover:text-[#ff8c42] underline decoration-gray-600">Leeds</Link>, and <Link to="/nottingham" className="hover:text-[#ff8c42] underline decoration-gray-600">Nottingham</Link>.
           </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;