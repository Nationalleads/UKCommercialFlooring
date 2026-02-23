
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

const cases = [
  {
    image: "https://images.unsplash.com/photo-1694885169342-909981fb408a",
    title: "Commercial Warehouse - Birmingham",
    desc: "2,500m² laser-levelled liquid screed install for a major logistics hub. Completed in 2 days.",
    link: "/case-studies"
  },
  {
    image: "https://images.unsplash.com/photo-1672552226650-796f40198c47",
    title: "Luxury Apartments - Manchester",
    desc: "High-spec anhydrite screed over UFH for a 50-unit residential development.",
    link: "/case-studies"
  },
  {
    image: "https://images.unsplash.com/photo-1663907578802-63dbb2ffdbcb",
    title: "Retail Showroom - Leeds",
    desc: "Perfectly flat surface preparation for high-end LVT flooring installation.",
    link: "/case-studies"
  }
];

const LiquidScreedCaseStudiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">Recent Projects</h2>
            <p className="text-gray-600">See our liquid screed experts in action across the UK.</p>
          </div>
          <Link to="/case-studies" className="hidden md:flex items-center text-[#ff8c42] font-semibold hover:text-[#1a3a52] transition-colors">
            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Link key={index} to={item.link} className="group block bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 flex text-[#ff8c42]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3 group-hover:text-[#ff8c42] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.desc}
                </p>
                <div className="text-sm font-semibold text-[#ff8c42] flex items-center">
                  Read Case Study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <Link to="/case-studies" className="inline-flex items-center text-[#ff8c42] font-bold">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default LiquidScreedCaseStudiesSection;
