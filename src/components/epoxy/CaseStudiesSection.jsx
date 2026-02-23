import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyCard = ({ title, size, sector, challenge, result, imgBefore, altBefore, imgAfter, altAfter, link }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
    <div className="grid grid-cols-2 h-48">
      <div className="relative group">
        <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Before</span>
        <img src={imgBefore} alt={altBefore} className="w-full h-full object-cover" />
      </div>
      <div className="relative group">
        <span className="absolute top-2 right-2 bg-[#ff8c42] text-white text-xs px-2 py-1 rounded">After</span>
        <img src={imgAfter} alt={altAfter} className="w-full h-full object-cover" />
      </div>
    </div>
    
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-xl text-[#1a2332]">{title}</h3>
        <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">{size}</span>
      </div>
      
      <div className="space-y-4 mb-6 flex-grow">
        <div>
          <h4 className="text-xs font-bold text-[#ff8c42] uppercase mb-1">The Challenge</h4>
          <p className="text-sm text-gray-600">{challenge}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-green-600 uppercase mb-1">The Result</h4>
          <p className="text-sm text-gray-600">{result}</p>
        </div>
      </div>
      
      {link ? (
        <Link 
          to={link} 
          className="w-full inline-flex items-center justify-center bg-[#1a2332] text-white font-bold py-3 px-4 rounded hover:bg-[#ff8c42] transition-colors mt-auto group"
        >
          View Full Case Study 
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <Link to="/case-studies" className="inline-flex items-center text-[#1a2332] font-semibold text-sm hover:text-[#ff8c42] transition-colors">
          Read Case Study <ArrowRight size={16} className="ml-2" />
        </Link>
      )}
    </div>
  </div>
);

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "Automotive Factory",
      size: "5,000m²",
      challenge: "Heavily oil-stained concrete with impact damage from dropped parts.",
      result: "High-build epoxy with superior oil resistance and designated walkways.",
      imgBefore: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/5f62ab28825e245000e94df9158585e1.png",
      altBefore: "Industrial epoxy flooring installation process – Shot blast to cure UK",
      imgAfter: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/5f62ab28825e245000e94df9158585e1.png",
      altAfter: "Industrial epoxy flooring installation process – Shot blast to cure UK",
      link: "/case-studies/automotive-factory-flooring-transformation"
    },
    {
      title: "Food Distribution Hub",
      size: "3,000m²",
      challenge: "Dusting concrete causing contamination issues for food packaging.",
      result: "Hygienic, seamless food-safe epoxy coating compliant with HACCP.",
      imgBefore: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/2ebf907c9729d3ad8f383e570e8c8d7d.png",
      altBefore: "Commercial epoxy resin contractors Birmingham factory case study",
      imgAfter: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/2ebf907c9729d3ad8f383e570e8c8d7d.png",
      altAfter: "Commercial epoxy resin contractors Birmingham factory case study"
    },
    {
      title: "Chemical Storage",
      size: "2,500m²",
      challenge: "Risk of solvent spills eroding standard concrete floors.",
      result: "Chemical-resistant polyurethane screed with bunded containment areas.",
      imgBefore: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/befb7189bf9b3c607fa437af46889cd3.png",
      altBefore: "Industrial epoxy flooring costs UK per m2 – Commercial guide",
      imgAfter: "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/befb7189bf9b3c607fa437af46889cd3.png",
      altAfter: "Industrial epoxy flooring costs UK per m2 – Commercial guide"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-12 text-center">Recent Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <CaseStudyCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;