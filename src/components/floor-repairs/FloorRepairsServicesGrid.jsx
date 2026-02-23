import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FloorRepairsServicesGrid = () => {
  const services = [
    {
      title: "Industrial Floor Repairs UK",
      desc: "Nationwide contractors for rapid warehouse floor defect repairs.",
      link: "/locations-index",
      image: "https://images.unsplash.com/photo-1634580265214-fe89917f5743"
    },
    {
      title: "Scabbling Contractors Birmingham",
      desc: "Local surface profiling experts serving the West Midlands.",
      link: "/birmingham",
      image: "https://images.unsplash.com/photo-1686825076471-d1967dd836af"
    },
    {
      title: "Concrete Spall Repair",
      desc: "Specialized joint arris repair and honeycomb removal services.",
      link: "/quote",
      image: "https://images.unsplash.com/photo-1641714962108-50556e55336c"
    },
    {
      title: "Mechanical Floor Profiling",
      desc: "Heavy-duty preparation for screeds and polymer toppings.",
      link: "/services/liquid-screed",
      image: "https://images.unsplash.com/photo-1690443811403-fa1940fba7e7"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-12 text-center">
          Our Floor Repair & Scabbling Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                  <ArrowRight size={20} className="text-[#ff8c42]" />
                </div>
              </div>
              
              <div className="p-6 bg-white border border-t-0 border-gray-100 h-full">
                <h3 className="text-lg font-bold text-[#1a2a4a] mb-2 group-hover:text-[#ff8c42] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 group-hover:text-gray-700">
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorRepairsServicesGrid;