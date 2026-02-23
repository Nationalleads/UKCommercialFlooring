
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent ${
          isScrolled 
            ? 'bg-[#1a2a4a]/95 backdrop-blur-md shadow-lg py-2 border-white/5' 
            : 'bg-[#1a2a4a] py-3 lg:py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center relative max-w-7xl">
          
          <Link to="/" className="relative z-50 flex-shrink-0" aria-label="Home">
            <Logo variant="full" size={isScrolled ? "small" : "default"} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className="text-sm font-medium text-white hover:text-[#ff8c42] transition-colors">Home</Link>
            
            <div 
              className="relative group h-full"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#ff8c42] transition-colors py-2 focus:outline-none cursor-pointer">
                Services <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72"
                  >
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 py-2">
                      <Link to="/epoxy-flooring" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff8c42] transition-colors font-medium">Epoxy Flooring Services</Link>
                      <Link to="/latex-flooring" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff8c42] transition-colors font-medium">Latex Screeding</Link>
                      <Link to="/liquid-screed" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff8c42] transition-colors font-medium">Liquid Screed</Link>
                      <Link to="/shot-blasting" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff8c42] transition-colors font-medium">Shot Blasting</Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      <Link to="/industrial-epoxy-flooring" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff8c42] transition-colors font-medium">Industrial Epoxy Guide</Link>
                      <Link to="/commercial-latex-flooring" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff8c42] transition-colors font-medium">Commercial Latex Guide</Link>
                      <Link to="/concrete-grinding" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff8c42] transition-colors font-medium">Concrete Grinding</Link>
                      <Link to="/floor-repairs-scabbling" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff8c42] transition-colors font-medium">Floor Repairs</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/birmingham" className="text-sm font-medium text-white hover:text-[#ff8c42] transition-colors">Birmingham</Link>
            <Link to="/locations-index" className="text-sm font-medium text-white hover:text-[#ff8c42] transition-colors">Locations</Link>
            <Link to="/case-studies" className="text-sm font-medium text-white hover:text-[#ff8c42] transition-colors">Projects</Link>
            <Link to="/blog" className="text-sm font-medium text-white hover:text-[#ff8c42] transition-colors">Blog</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:08009124131" className="flex items-center gap-2 text-white font-medium hover:text-[#ff8c42] transition-colors text-sm">
              <Phone size={16} /> 0800 912 4131
            </a>
            <button 
              onClick={() => navigate('/quote')}
              className="px-5 py-2.5 bg-[#ff8c42] hover:bg-[#e67e3a] text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              Get Quote <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -mr-2 text-white hover:bg-white/10 rounded-lg transition-colors relative z-50 focus:outline-none active:bg-white/20 touch-target"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu Component */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;
