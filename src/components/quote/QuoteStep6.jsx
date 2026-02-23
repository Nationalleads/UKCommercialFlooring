
import React from 'react';
import { motion } from 'framer-motion';
import { Edit2, Send, CheckCircle2 } from 'lucide-react';

const QuoteStep6 = ({ formData, onEdit, onSubmit, isSubmitting }) => {
  const SummaryRow = ({ label, value, step }) => (
    <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0 group">
      <div>
        <span className="text-sm text-gray-500 block">{label}</span>
        <span className="text-[#1a2a4a] font-medium block mt-1">
          {Array.isArray(value) ? value.join(', ') : value || 'Not provided'}
        </span>
      </div>
      <button 
        onClick={() => onEdit(step)}
        className="text-[#ff8c42] opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-orange-50 rounded"
        type="button"
      >
        <Edit2 size={16} />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <CheckCircle2 size={32} />
        </div>
        <h2 className="text-2xl font-bold text-[#1a2a4a]">Review Your Request</h2>
        <p className="text-gray-600">Please verify your details before submitting.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 space-y-2">
        <SummaryRow label="Service Type" value={formData.projectType} step={1} />
        <SummaryRow label="Location" value={formData.location} step={2} />
        <SummaryRow label="Project Size" value={formData.size} step={3} />
        <SummaryRow label="Current Flooring" value={formData.currentFlooring} step={4} />
        <SummaryRow label="Additional Details" value={formData.details} step={4} />
        <SummaryRow label="Urgent Service" value={formData.urgentService ? 'Yes - Priority Request' : 'Standard'} step={4} />
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <h4 className="font-bold text-[#1a2a4a] mb-4">Contact Details</h4>
          <SummaryRow label="Name" value={formData.name} step={5} />
          <SummaryRow label="Email" value={formData.email} step={5} />
          <SummaryRow label="Phone" value={formData.phone} step={5} />
          <SummaryRow label="Company" value={formData.company} step={5} />
          <SummaryRow label="Preferred Contact" value={formData.preferredContact} step={5} />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onSubmit}
        disabled={isSubmitting}
        className="w-full py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            Submitting Quote...
          </>
        ) : (
          <>
            <Send size={20} />
            Submit Quote
          </>
        )}
      </motion.button>
      
      <p className="text-center text-xs text-gray-400 mt-4">
        By submitting this form, you agree to our privacy policy. Your data is secure.
      </p>
    </div>
  );
};

export default QuoteStep6;
