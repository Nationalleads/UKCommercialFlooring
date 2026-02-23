
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { useWebhookSubmission } from '@/hooks/useWebhookSubmission';

// Components
import QuoteStep1 from '@/components/quote/QuoteStep1';
import QuoteStep2 from '@/components/quote/QuoteStep2';
import QuoteStep3 from '@/components/quote/QuoteStep3';
import QuoteStep4 from '@/components/quote/QuoteStep4';
import QuoteStep5 from '@/components/quote/QuoteStep5';
import QuoteStep6 from '@/components/quote/QuoteStep6';
import ContactOptionsSidebar from '@/components/quote/ContactOptionsSidebar';

const initialFormState = {
  projectType: '',
  location: '',
  size: '',
  currentFlooring: [],
  details: '',
  urgentService: false,
  name: '',
  email: '',
  phone: '',
  company: '',
  preferredContact: 'Email'
};

const QuotePage = () => {
  const { toast } = useToast();
  const { submitToWebhook, isSubmitting: isWebhookSubmitting } = useWebhookSubmission();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step, isSuccess]);

  const handleStep1Change = (value) => {
    setFormData(prev => ({ ...prev, projectType: value }));
    setStep(2);
  };

  const handleStep2Change = (value) => {
    setFormData(prev => ({ ...prev, location: value }));
  };

  const handleStep3Change = (value) => {
    setFormData(prev => ({ ...prev, size: value }));
    setStep(4);
  };

  const handleStep4Change = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStep5Change = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateStep5 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 2 && !formData.location) {
      toast({ title: "Location Required", description: "Please select or type a location.", variant: "destructive" });
      return;
    }
    if (step === 5) {
      if (!validateStep5()) return;
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const messageBody = `
Project Size: ${formData.size}
Current Flooring: ${formData.currentFlooring.join(', ') || 'None specified'}
Urgent: ${formData.urgentService ? 'YES' : 'No'}
Company: ${formData.company || 'N/A'}
Preferred Contact: ${formData.preferredContact}
Additional Details: ${formData.details || 'None'}
      `.trim();

      // 1. Save to Supabase as primary persistent storage
      const { error } = await supabase
        .from('quote_submissions')
        .insert([
          {
            project_type: formData.projectType,
            city: formData.location,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: messageBody
          }
        ]);

      if (error) {
        throw error;
      }

      // 2. Send to Webhook (using hook which now points to production)
      await submitToWebhook(formData);

      // 3. Handle UI success state
      setIsSuccess(true);
      
      toast({ 
        title: "Quote Submitted Successfully!", 
        description: "We've received your details and will be in touch shortly.",
        variant: "default",
        className: "bg-green-50 border-green-200"
      });

      // Clear form data after successful submission
      setFormData(initialFormState);

    } catch (error) {
      console.error('Error submitting quote:', error);
      toast({ 
        title: "Submission Failed", 
        description: "There was an error saving your quote. Please try again or call us directly.",
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <QuoteStep1 value={formData.projectType} onChange={handleStep1Change} />;
      case 2:
        return (
          <>
            <QuoteStep2 value={formData.location} onChange={handleStep2Change} />
            <div className="mt-6 flex justify-end">
              <button 
                onClick={nextStep}
                className="w-full sm:w-auto px-6 py-3 bg-[#1a2a4a] text-white rounded-lg font-bold hover:bg-[#2c4270] transition-colors flex items-center justify-center gap-2"
              >
                Next Step <ChevronRight size={18} />
              </button>
            </div>
          </>
        );
      case 3:
        return <QuoteStep3 value={formData.size} onChange={handleStep3Change} />;
      case 4:
        return (
          <>
            <QuoteStep4 
              details={formData.details} 
              currentFlooring={formData.currentFlooring} 
              urgentService={formData.urgentService} 
              onChange={handleStep4Change} 
            />
            <div className="mt-6 flex justify-between">
              <button onClick={prevStep} className="px-6 py-3 text-gray-500 font-bold hover:text-[#1a2a4a] flex items-center gap-2">
                <ChevronLeft size={18} /> Back
              </button>
              <button 
                onClick={nextStep}
                className="px-6 py-3 bg-[#1a2a4a] text-white rounded-lg font-bold hover:bg-[#2c4270] transition-colors flex items-center gap-2"
              >
                Next Step <ChevronRight size={18} />
              </button>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <QuoteStep5 formData={formData} onChange={handleStep5Change} errors={errors} />
            <div className="mt-6 flex justify-between">
              <button onClick={prevStep} className="px-6 py-3 text-gray-500 font-bold hover:text-[#1a2a4a] flex items-center gap-2">
                <ChevronLeft size={18} /> Back
              </button>
              <button 
                onClick={nextStep}
                className="px-6 py-3 bg-[#1a2a4a] text-white rounded-lg font-bold hover:bg-[#2c4270] transition-colors flex items-center gap-2"
              >
                Review Quote <ChevronRight size={18} />
              </button>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <QuoteStep6 
              formData={formData} 
              onEdit={(stepNum) => setStep(stepNum)} 
              onSubmit={handleSubmit} 
              isSubmitting={isSubmitting || isWebhookSubmitting} 
            />
            <div className="mt-4">
              <button onClick={prevStep} className="px-6 py-3 text-gray-500 font-bold hover:text-[#1a2a4a] flex items-center gap-2 mx-auto">
                <ChevronLeft size={18} /> Back
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4">
        <Helmet>
          <title>Quote Received | UK Commercial Flooring</title>
        </Helmet>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-4">Quote Request Received!</h1>
          <p className="text-gray-600 text-lg mb-8">
            Thank you. We have received your details and a member of our technical team will be in touch shortly (usually within 24 hours).
          </p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
            <h3 className="font-bold text-[#1a2a4a] mb-2">What happens next?</h3>
            <p className="text-gray-600 text-sm">
              We will review your project requirements and prepare a preliminary estimate. If we need more specific details, we'll give you a quick call.
            </p>
          </div>
          <a href="/" className="inline-block w-full sm:w-auto px-8 py-3 bg-[#1a2a4a] text-white font-bold rounded-lg hover:bg-[#2c4270] transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <Helmet>
        <title>Get a Free Quote | UK Commercial Flooring</title>
        <meta name="description" content="Get a free, no-obligation quote for your commercial flooring project. Epoxy, Latex, Screed & more." />
      </Helmet>

      {/* Header */}
      <div className="bg-[#1a2a4a] text-white pt-28 md:pt-32 pb-12 px-4 text-center md:text-left">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-gray-300 max-w-2xl mx-auto md:mx-0">
            Answer a few quick questions about your project and we'll provide a competitive estimate.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Main Form Area */}
          <div className="flex-grow lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 min-h-[500px]">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  <span>Start</span>
                  <span>Details</span>
                  <span>Contact</span>
                  <span>Finish</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#ff8c42]"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 6) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
             <div className="sticky top-24">
               <ContactOptionsSidebar />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuotePage;
