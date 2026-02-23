
import React from 'react';
import { Phone, Mail, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

const ContactOptionsSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Contact Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-[#1a2a4a] mb-6">Need Help?</h3>
        
        <div className="space-y-6">
          <a href="tel:08009124131" className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1a2a4a] group-hover:bg-[#1a2a4a] group-hover:text-white transition-colors">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Call Support</p>
              <p className="text-[#1a2a4a] font-bold group-hover:text-[#ff8c42] transition-colors">0800 912 4131</p>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Business Hours</p>
              <p className="text-[#1a2a4a] font-bold">Mon-Fri: 8am - 6pm</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#ff8c42]">
              <MessageSquare size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Live Chat</p>
              <p className="text-[#1a2a4a] font-bold">Available Now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="bg-[#1a2a4a] rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="text-[#ff8c42]" size={28} />
          <h4 className="font-bold">Expert Guarantee</h4>
        </div>
        <ul className="space-y-3 text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#ff8c42]">•</span>
            Fully Insured & Accredited
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff8c42]">•</span>
            UK-Wide Technical Support
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff8c42]">•</span>
            Detailed Technical Estimates
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactOptionsSidebar;
