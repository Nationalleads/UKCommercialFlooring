
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight, Phone, MapPin, ArrowRight, Home, Layers, HelpCircle, FileText, Globe, Building, Shield } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(true);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    onClose();
    if (path) navigate(path);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const services = [
    { name: 'Epoxy Flooring', link: '/epoxy-flooring' },
    { name: 'Latex Screeding', link: '/latex-flooring' },
    { name: 'Liquid Screed', link: '/liquid-screed' },
    { name: 'Shot Blasting', link: '/shot-blasting' },
    { name: 'Concrete Grinding', link: '/concrete-grinding' },
    { name: 'Floor Repairs & Scabbling', link: '/floor-repairs-scabbling' },
    { name: 'Industrial Epoxy Guide', link: '/industrial-epoxy-flooring' },
    { name: 'Commercial Latex Guide', link: '/commercial-latex-flooring' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            aria-hidden="true"
          />

          {/* Slide-out Menu Panel */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#1a2a4a] text-white z-[70] lg:hidden flex flex-col shadow-2xl border-l border-white/10"
          >
            {/* Menu Header */}
            <div className="p-5 flex justify-between items-center border-b border-white/10 flex-shrink-0 safe-area-top">
              <span className="font-bold text-xl tracking-tight text-white">Menu</span>
              <button 
                onClick={onClose}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white touch-target"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden py-6 px-5 custom-scrollbar">
              <nav className="flex flex-col space-y-2">
                <Link 
                  to="/" 
                  onClick={onClose}
                  className="group flex items-center gap-3 text-lg font-medium text-gray-100 hover:text-[#ff8c42] transition-colors p-3 rounded-lg hover:bg-white/5 touch-target"
                >
                  <Home size={20} className="text-gray-400 group-hover:text-[#ff8c42]" />
                  Home
                </Link>

                {/* Services Dropdown */}
                <div className="pt-2 pb-2">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-100 hover:text-[#ff8c42] transition-colors p-3 rounded-lg hover:bg-white/5 group touch-target"
                  >
                    <div className="flex items-center gap-3">
                      <Layers size={20} className="text-gray-400 group-hover:text-[#ff8c42]" />
                      Services
                    </div>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 text-gray-500 group-hover:text-[#ff8c42] ${isServicesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-9 space-y-1 mt-1"
                      >
                        {services.map((service, idx) => (
                          <Link
                            key={idx}
                            to={service.link}
                            onClick={onClose}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-base py-3 px-2 rounded hover:bg-white/5 border-l border-white/10 touch-target"
                          >
                            <ChevronRight size={14} className="text-[#ff8c42]" />
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/birmingham" 
                  onClick={onClose}
                  className="group flex items-center gap-3 text-lg font-medium text-gray-100 hover:text-[#ff8c42] transition-colors p-3 rounded-lg hover:bg-white/5 touch-target"
                >
                  <Building size={20} className="text-gray-400 group-hover:text-[#ff8c42]" />
                  Birmingham
                </Link>

                <Link 
                  to="/locations-index" 
                  onClick={onClose}
                  className="group flex items-center gap-3 text-lg font-medium text-gray-100 hover:text-[#ff8c42] transition-colors p-3 rounded-lg hover:bg-white/5 touch-target"
                >
                  <Globe size={20} className="text-gray-400 group-hover:text-[#ff8c42]" />
                  All Locations
                </Link>

                <Link 
                  to="/case-studies" 
                  onClick={onClose}
                  className="group flex items-center gap-3 text-lg font-medium text-gray-100 hover:text-[#ff8c42] transition-colors p-3 rounded-lg hover:bg-white/5 touch-target"
                >
                  <FileText size={20} className="text-gray-400 group-hover:text-[#ff8c42]" />
                  Case Studies
                </Link>

                <Link 
                  to="/blog" 
                  onClick={onClose}
                  className="group flex items-center gap-3 text-lg font-medium text-gray-100 hover:text-[#ff8c42] transition-colors p-3 rounded-lg hover:bg-white/5 touch-target"
                >
                  <FileText size={20} className="text-gray-400 group-hover:text-[#ff8c42]" />
                  Blog
                </Link>

                <Link 
                  to="/faq" 
                  onClick={onClose}
                  className="group flex items-center gap-3 text-lg font-medium text-gray-100 hover:text-[#ff8c42] transition-colors p-3 rounded-lg hover:bg-white/5 touch-target"
                >
                  <HelpCircle size={20} className="text-gray-400 group-hover:text-[#ff8c42]" />
                  FAQ
                </Link>
                
                <Link 
                  to="/privacy-policy" 
                  onClick={onClose}
                  className="group flex items-center gap-3 text-lg font-medium text-gray-100 hover:text-[#ff8c42] transition-colors p-3 rounded-lg hover:bg-white/5 touch-target"
                >
                  <Shield size={20} className="text-gray-400 group-hover:text-[#ff8c42]" />
                  Privacy Policy
                </Link>
              </nav>

              {/* Contact Info Block */}
              <div className="bg-white/5 rounded-xl p-5 space-y-4 mt-8 border border-white/5">
                <h4 className="font-bold text-[#ff8c42] mb-2 uppercase text-xs tracking-wider">Quick Contact</h4>
                <a href="tel:08009124131" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors touch-target">
                  <div className="w-8 h-8 rounded-full bg-[#ff8c42]/20 flex items-center justify-center text-[#ff8c42]">
                    <Phone size={16} />
                  </div>
                  <span className="text-base font-medium">0800 912 4131</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-[#ff8c42]/20 flex items-center justify-center text-[#ff8c42]">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm font-medium">Nationwide Coverage</span>
                </div>
              </div>
            </div>

            {/* Menu Footer (Fixed Action Button) */}
            <div className="p-5 border-t border-white/10 bg-[#15233e] flex-shrink-0 safe-area-bottom">
               <button 
                 onClick={() => handleLinkClick('/quote')}
                 className="w-full py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98] text-lg"
               >
                 Get Free Quote <ArrowRight size={20} />
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
