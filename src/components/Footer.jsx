
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, ArrowUp, ChevronRight, ArrowRight, Star } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { label: 'Epoxy Flooring', href: '/epoxy-flooring' },
    { label: 'Latex Screeds', href: '/latex-flooring' },
    { label: 'Shot Blasting', href: '/shot-blasting' },
    { label: 'Liquid Screed', href: '/liquid-screed' },
    { label: 'Concrete Grinding', href: '/concrete-grinding' },
    { label: 'Floor Repairs & Scabbling', href: '/floor-repairs-scabbling' }
  ];

  const locations = [
    { label: 'Birmingham', href: '/birmingham' },
    { label: 'London', href: '/london' },
    { label: 'Manchester', href: '/manchester' },
    { label: 'Leeds', href: '/leeds' },
    { label: 'Glasgow', href: '/glasgow' },
    { label: 'View All 550+ Locations', href: '/locations-index', highlight: true }
  ];

  const trustpilotUrl = "https://uk.trustpilot.com/review/ukcommercialflooring.co.uk";

  return (
    <footer className="bg-[#0f172a] text-gray-300 font-sans border-t border-gray-800 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 safe-area-bottom">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 sm:mb-16 text-center md:text-left">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <Link to="/" className="block">
              <Logo variant="full" size="default" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              RB Grinding UK Ltd (Trading As: UK Commercial Flooring). Specializing in epoxy, screed, and surface preparation for industrial environments nationwide.
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-white text-sm group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
                <MapPin size={14} />
              </div>
              <span className="leading-relaxed text-center md:text-left">
                28 York Avenue,<br/>
                Walsall,<br/>
                WS2 9XA
              </span>
            </div>
            <div className="space-y-3 pt-2 w-full flex flex-col items-center md:items-start">
              <a href="tel:08009124131" className="flex items-center gap-3 text-white hover:text-[#ff8c42] transition-colors group touch-target">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ff8c42] transition-colors">
                  <Phone size={14} />
                </div>
                <span className="font-medium">0800 912 4131</span>
              </a>
              <a href="mailto:info@ukcommercialflooring.co.uk" className="flex items-center gap-3 text-white hover:text-[#ff8c42] transition-colors group touch-target">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ff8c42] transition-colors">
                  <Mail size={14} />
                </div>
                <span className="font-medium break-all">info@ukcommercialflooring.co.uk</span>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#0077b5] flex items-center justify-center text-white hover:opacity-90 transition-opacity touch-target" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/commerci17248" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity touch-target" title="X (formerly Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
                </svg>
              </a>
              <a href="https://facebook.com/ukcommercialflooring" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1877f2] flex items-center justify-center text-white hover:opacity-90 transition-opacity touch-target" title="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@ukcommercialflooring" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity touch-target" title="YouTube">
                <Youtube size={20} />
              </a>
              <a href={trustpilotUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#00b67a] flex items-center justify-center text-white hover:opacity-90 transition-opacity touch-target" title="Review us on Trustpilot">
                <Star size={20} fill="currentColor" />
              </a>
            </div>

            <div className="pt-2">
              <a 
                href={trustpilotUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors border border-white/10"
              >
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-[#00b67a]" fill="#00b67a" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">Trustpilot Reviews</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 sm:mb-6 flex items-center justify-center md:justify-start gap-2">
              Our Services
              <span className="h-0.5 w-8 bg-[#ff8c42] block"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="flex items-center justify-center md:justify-start gap-2 hover:text-[#ff8c42] transition-colors text-sm group touch-target md:h-auto">
                    <ChevronRight size={14} className="text-[#ff8c42] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/quote"
                  className="text-[#ff8c42] text-sm font-bold hover:underline flex items-center justify-center md:justify-start gap-1 touch-target"
                >
                  Get a Free Quote <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 sm:mb-6 flex items-center justify-center md:justify-start gap-2">
              Key Locations
              <span className="h-0.5 w-8 bg-[#ff8c42] block"></span>
            </h3>
            <ul className="space-y-3">
              {locations.map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item.href} 
                    className={`flex items-center justify-center md:justify-start gap-2 text-sm group touch-target md:h-auto ${item.highlight ? 'text-[#ff8c42] font-bold mt-2' : 'hover:text-[#ff8c42] transition-colors'}`}
                  >
                    {!item.highlight && <ChevronRight size={14} className="text-[#ff8c42] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 sm:mb-6 flex items-center justify-center md:justify-start gap-2">
              Quick Links
              <span className="h-0.5 w-8 bg-[#ff8c42] block"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/blog" className="hover:text-[#ff8c42] transition-colors flex justify-center md:justify-start touch-target md:h-auto">Flooring Blog</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#ff8c42] transition-colors flex justify-center md:justify-start touch-target md:h-auto">Case Studies</Link></li>
              <li><Link to="/faq" className="hover:text-[#ff8c42] transition-colors flex justify-center md:justify-start touch-target md:h-auto">Freq. Asked Questions</Link></li>
              <li><Link to="/birmingham" className="hover:text-[#ff8c42] transition-colors flex justify-center md:justify-start touch-target md:h-auto">Birmingham Suburbs Guide</Link></li>
              <li className="text-gray-500 text-xs pl-2 pt-1 border-l-2 border-[#ff8c42] hidden md:block">Explore 70+ Birmingham neighborhoods with stats, guides & local insights.</li>
              <li><Link to="/cookie-policy" className="hover:text-[#ff8c42] transition-colors mt-2 block flex justify-center md:justify-start touch-target md:h-auto">Cookie Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#ff8c42] transition-colors flex justify-center md:justify-start touch-target md:h-auto">Privacy Policy</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-[#ff8c42] transition-colors flex justify-center md:justify-start touch-target md:h-auto">XML Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12">
            <p className="text-xs text-gray-500">
              © {currentYear} RB Grinding UK Ltd. Trading as UK Commercial Flooring.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-white bg-[#1a2a4a] px-4 py-2 rounded-full hover:bg-[#ff8c42] transition-colors touch-target"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

        {/* Site Credit */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            Site created by{' '}
            <a 
              href="https://www.getfoundnow.co.uk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#ff8c42] transition-colors font-medium"
            >
              GetFoundNow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
