
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Layers, Hammer, Shield, Droplet } from 'lucide-react';
import VideoSlider from '@/components/VideoSlider';
import ServicesGrid from '@/components/ServicesGrid';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import BlogPreview from '@/components/BlogPreview';
import LocationMap from '@/components/LocationMap';
import OpenGraphMeta from '@/components/OpenGraphMeta';

const HomePage = () => {
  const navigate = useNavigate();
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <OpenGraphMeta 
        title="UK Commercial & Industrial Flooring Specialists"
        description="Leading UK commercial flooring contractors specializing in epoxy, latex, liquid screed, and shot blasting services. Serving warehouses and factories nationwide."
        url="/"
        image="https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/ee8434c4d325d153d1c6610720ae27da.jpg"
      />
      
      <div className="min-h-screen">
        <VideoSlider onScrollToServices={scrollToServices} />
        
        {/* Core Services Section */}
        <section 
          ref={servicesRef}
          className="py-12 md:py-16 bg-white border-b border-gray-100"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">Our Core Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto px-4">
                All Floor Types, Industrial & Commercial solutions tailored to your business needs. 
                From surface preparation to final high-gloss finish.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Epoxy Card */}
              <div className="group bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-[#ff8c42] text-center md:text-left">
                <div className="w-12 h-12 bg-[#1a2a4a] text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#ff8c42] transition-colors mx-auto md:mx-0">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">Epoxy Flooring</h3>
                <p className="text-gray-600 text-sm mb-4">Heavy-duty resin systems for warehouses and factories. Anti-slip & chemical resistant.</p>
                <Link to="/epoxy-flooring" className="inline-flex items-center text-[#ff8c42] font-semibold text-sm hover:underline">
                  View Epoxy Details <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>

              {/* Latex Card */}
              <div className="group bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-[#ff8c42] text-center md:text-left">
                <div className="w-12 h-12 bg-[#1a2a4a] text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#ff8c42] transition-colors mx-auto md:mx-0">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">Latex Screeds</h3>
                <p className="text-gray-600 text-sm mb-4">Self-levelling compounds for uneven floors. Perfect base for vinyl or carpet.</p>
                <Link to="/latex-flooring" className="inline-flex items-center text-[#ff8c42] font-semibold text-sm hover:underline">
                  View Latex Details <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>

              {/* Shot Blasting Card */}
              <div className="group bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-[#ff8c42] text-center md:text-left">
                <div className="w-12 h-12 bg-[#1a2a4a] text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#ff8c42] transition-colors mx-auto md:mx-0">
                  <Hammer size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">Shot Blasting</h3>
                <p className="text-gray-600 text-sm mb-4">Dust-free surface preparation. Removes old paint, glue, and contaminants.</p>
                <Link to="/shot-blasting" className="inline-flex items-center text-[#ff8c42] font-semibold text-sm hover:underline">
                  View Prep Services <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>

              {/* Liquid Screed Card */}
              <div className="group bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-[#ff8c42] text-center md:text-left">
                <div className="w-12 h-12 bg-[#1a2a4a] text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#ff8c42] transition-colors mx-auto md:mx-0">
                  <Droplet size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2a4a] mb-2">Liquid Screed</h3>
                <p className="text-gray-600 text-sm mb-4">Flowing screeds for underfloor heating. Fast drying and laser levelled.</p>
                <Link to="/liquid-screed" className="inline-flex items-center text-[#ff8c42] font-semibold text-sm hover:underline">
                  View Screed Details <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <ServicesGrid />
        
        <WhyUsSection />
        <TestimonialsCarousel />
        
        {/* Quote Link Section - Updated to match requested text and functionality */}
        <section className="py-16 md:py-24 bg-[#1a2a4a] relative overflow-hidden">
          {/* Background Pattern - Placed before content with lower z-index implicitly, but pointer-events-none ensures it doesn't block clicks */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Floors?</h2>
              <p className="text-xl text-gray-300 mb-10 px-4">
                Join hundreds of satisfied clients who trust us for their commercial and industrial flooring needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/quote')}
                  className="px-10 py-5 bg-[#ff8c42] hover:bg-[#e67a30] text-white font-bold rounded-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg cursor-pointer w-full sm:w-auto"
                >
                  Request a Free Quote <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => navigate('/faq')}
                  className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all text-lg cursor-pointer w-full sm:w-auto"
                >
                  View Our FAQs
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <BlogPreview />
        <LocationMap />
      </div>
    </>
  );
};

export default HomePage;
