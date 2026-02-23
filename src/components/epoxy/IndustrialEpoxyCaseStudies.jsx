import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Factory, Warehouse } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';

const IndustrialEpoxyCaseStudies = () => {
  // Specific projects requested
  const targetSlugs = [
    'industrial-latex-screed-companies-birmingham',
    'industrial-latex-screed-companies-birmingham', // Intentionally duplicated
    'automotive-factory-flooring-transformation'
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-2">
              Project <span className="text-[#ff8c42]">Case Studies</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              See how we transform industrial spaces with high-performance epoxy and screed solutions.
            </p>
          </div>
          <Link 
            to="/case-studies" 
            className="flex items-center gap-2 px-6 py-3 border-2 border-[#ff8c42] text-[#ff8c42] rounded hover:bg-[#ff8c42] hover:text-white transition-all font-semibold"
          >
            View Full Archive <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {targetSlugs.map((slug, index) => {
            const project = caseStudies.find(s => s.slug === slug);
            
            // Fallback if project not found to prevent crash
            if (!project) return null;

            return (
              <div 
                key={`${slug}-${index}`} 
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#ff8c42]/5 transition-all flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img 
                    src={project.afterImage || project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 bg-[#ff8c42] text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg z-20 flex items-center gap-1">
                    <Star size={12} fill="currentColor" /> COMPLETED
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded border border-gray-200 text-[#ff8c42]">
                    {project.serviceType === 'Latex' ? <Warehouse size={20} /> : <Factory size={20} />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#ff8c42] uppercase tracking-wider mb-2">
                    <span>{project.location}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{project.serviceType}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1a2a4a] mb-3 group-hover:text-[#ff8c42] transition-colors leading-tight line-clamp-2">
                    <Link to={`/case-studies/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="font-semibold text-gray-700">Result:</span> {project.resultsTable ? project.resultsTable[0].improvement : 'High Performance'}
                    </div>
                    <Link 
                      to={`/case-studies/${project.slug}`}
                      className="text-[#ff8c42] text-sm font-bold hover:underline flex items-center gap-1 transition-colors"
                    >
                      View Project <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustrialEpoxyCaseStudies;