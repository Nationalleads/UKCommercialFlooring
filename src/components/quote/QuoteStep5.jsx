import React from 'react';
import { User, Mail, Phone, Building, MessageSquare } from 'lucide-react';

const QuoteStep5 = ({ formData, onChange, errors }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#1a2a4a] mb-2">Contact Information</h2>
      <p className="text-gray-600">Where should we send your quote?</p>

      <div className="grid gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-lg border-2 outline-none transition-colors ${
                errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-[#ff8c42]'
              }`}
              placeholder="John Smith"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email & Phone */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full pl-11 pr-4 py-3 rounded-lg border-2 outline-none transition-colors ${
                  errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-[#ff8c42]'
                }`}
                placeholder="john@company.com"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`w-full pl-11 pr-4 py-3 rounded-lg border-2 outline-none transition-colors ${
                  errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-[#ff8c42]'
                }`}
                placeholder="07700 900000"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name (Optional)</label>
          <div className="relative">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#ff8c42] outline-none transition-colors"
              placeholder="ACME Industries Ltd"
            />
          </div>
        </div>

        {/* Preferred Contact */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Contact Method</label>
          <div className="flex gap-4">
            {['Phone', 'Email', 'Chat'].map((method) => (
              <label key={method} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  checked={formData.preferredContact === method}
                  onChange={(e) => handleChange('preferredContact', e.target.value)}
                  className="w-4 h-4 text-[#ff8c42] focus:ring-[#ff8c42]"
                />
                <span className="text-gray-700 text-sm">{method}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteStep5;