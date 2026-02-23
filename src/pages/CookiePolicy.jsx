import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Shield, Check, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  const [settings, setSettings] = useState({
    essential: true, // Always true
    analytics: true,
    marketing: false
  });

  const toggleSetting = (key) => {
    if (key === 'essential') return;
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    localStorage.setItem('cookieConsent', 'custom');
    // Add toast or feedback here
    alert("Cookie preferences saved.");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16 font-sans">
      <Helmet>
        <title>Cookie Policy & Settings | UK Commercial Flooring</title>
        <meta name="description" content="View our cookie policy and manage your privacy settings." />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-[#ff8c42] font-semibold mb-8 hover:underline">
          <ChevronLeft size={20} /> Back to Home
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-orange-50 rounded-xl text-[#ff8c42]">
              <Shield size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a2a4a]">Cookie Policy</h1>
          </div>

          <div className="prose prose-lg text-gray-600 max-w-none mb-12">
            <p>
              This policy explains how UK Commercial Flooring uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            <h3>What are cookies?</h3>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1a2a4a] mb-6">Manage Preferences</h2>
            
            <div className="space-y-6">
              {/* Essential */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-gray-200">
                <div>
                  <h4 className="font-bold text-[#1a2a4a] flex items-center gap-2">
                    Essential Cookies <span className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-600">Required</span>
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Necessary for the website to function properly. Cannot be disabled.</p>
                </div>
                <div className="relative inline-block w-12 h-6 flex-shrink-0">
                  <input type="checkbox" checked disabled className="opacity-0 w-0 h-0" />
                  <span className="absolute cursor-not-allowed inset-0 bg-[#ff8c42] rounded-full transition-all"></span>
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all transform translate-x-6"></span>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-gray-200">
                <div>
                  <h4 className="font-bold text-[#1a2a4a]">Analytics Cookies</h4>
                  <p className="text-sm text-gray-500 mt-1">Help us understand how visitors interact with the website.</p>
                </div>
                <label className="relative inline-block w-12 h-6 flex-shrink-0 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={settings.analytics} 
                    onChange={() => toggleSetting('analytics')} 
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff8c42]"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-[#1a2a4a]">Marketing Cookies</h4>
                  <p className="text-sm text-gray-500 mt-1">Used to track visitors across websites to display relevant ads.</p>
                </div>
                <label className="relative inline-block w-12 h-6 flex-shrink-0 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={settings.marketing} 
                    onChange={() => toggleSetting('marketing')} 
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff8c42]"></div>
                </label>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
              <button 
                onClick={handleSave}
                className="px-6 py-3 bg-[#1a2a4a] text-white font-bold rounded-lg hover:bg-[#2a3a5a] transition-colors flex items-center gap-2"
              >
                <Check size={18} /> Save Preferences
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;