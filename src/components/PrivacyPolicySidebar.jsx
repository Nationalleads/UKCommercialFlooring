
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Lock, UserCheck, Server, Eye, Cookie, Mail, Clock } from 'lucide-react';

const PrivacyPolicySidebar = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const links = [
    { id: 'introduction', label: 'Introduction', icon: FileText },
    { id: 'collection', label: 'Data Collection', icon: Server },
    { id: 'usage', label: 'How We Use Data', icon: UserCheck },
    { id: 'protection', label: 'Data Protection', icon: Shield },
    { id: 'rights', label: 'Your Rights', icon: Lock },
    { id: 'third-party', label: 'Third-party Services', icon: Eye },
    { id: 'cookies', label: 'Cookie Policy', icon: Cookie },
    { id: 'contact', label: 'Contact Us', icon: Mail },
    { id: 'updates', label: 'Policy Updates', icon: Clock },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const link of links) {
        const element = document.getElementById(link.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;

          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <nav className="sticky top-28 space-y-1">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-4 bg-[#1a2a4a] text-white">
          <h3 className="font-bold flex items-center gap-2">
            <Shield size={18} className="text-[#ff8c42]" /> 
            Privacy Navigation
          </h3>
        </div>
        <div className="p-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group text-left ${
                  isActive 
                    ? 'bg-orange-50 text-[#ff8c42] shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#1a2a4a]'
                }`}
              >
                <Icon 
                  size={18} 
                  className={`transition-colors ${isActive ? 'text-[#ff8c42]' : 'text-gray-400 group-hover:text-[#1a2a4a]'}`} 
                />
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ff8c42]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default PrivacyPolicySidebar;
