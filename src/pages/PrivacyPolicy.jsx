
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Lock, ChevronLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrivacyPolicySidebar from '@/components/PrivacyPolicySidebar';

const PrivacyPolicy = () => {
  const effectiveDate = "19 February 2026";
  const companyName = "RB Grinding UK Ltd (Trading As: UK Commercial Flooring)";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>Privacy Policy | UK Commercial Flooring GDPR Compliance</title>
        <meta name="description" content="Read our Privacy Policy to understand how UK Commercial Flooring collects, uses, and protects your personal data in compliance with UK GDPR laws." />
        <link rel="canonical" href="https://ukcommercialflooring.co.uk/privacy-policy" />
      </Helmet>

      {/* Header Banner */}
      <div className="bg-[#1a2a4a] text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-[#ff8c42] transition-colors mb-6 text-sm">
            <ChevronLeft size={16} /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                We are committed to protecting your personal data and respecting your privacy rights under UK GDPR laws.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <Calendar size={16} className="text-[#ff8c42]" />
              <span>Effective Date: <span className="text-white font-medium">{effectiveDate}</span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 lg:block hidden">
            <PrivacyPolicySidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-lg max-w-none text-gray-600">
              
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-32 mb-12 border-b border-gray-100 pb-10">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-6">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1a2a4a] shrink-0">1</span>
                  Introduction
                </h2>
                <p>
                  Welcome to the Privacy Policy of <strong>{companyName}</strong> ("we", "us", or "our"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                </p>
                <p>
                  This website is not intended for children and we do not knowingly collect data relating to children.
                </p>
                <div className="bg-blue-50 border-l-4 border-[#1a2a4a] p-4 my-6 rounded-r-lg">
                  <p className="text-sm font-medium text-[#1a2a4a] m-0">
                    <strong>Controller:</strong> {companyName} is the controller and responsible for your personal data.
                  </p>
                </div>
              </section>

              {/* Data Collection */}
              <section id="collection" className="scroll-mt-32 mb-12 border-b border-gray-100 pb-10">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-6">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1a2a4a] shrink-0">2</span>
                  Information We Collect
                </h2>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="space-y-2 mt-4">
                  <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                  <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                  <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                  <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and your communication preferences.</li>
                </ul>
              </section>

              {/* Data Usage */}
              <section id="usage" className="scroll-mt-32 mb-12 border-b border-gray-100 pb-10">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-6">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1a2a4a] shrink-0">3</span>
                  How We Use Your Data
                </h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h4 className="font-bold text-[#1a2a4a] mb-2">Service Delivery</h4>
                    <p className="text-sm m-0">To process and deliver your order, manage payments, fees and charges, and collect and recover money owed to us.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h4 className="font-bold text-[#1a2a4a] mb-2">Relationship Management</h4>
                    <p className="text-sm m-0">To notify you about changes to our terms or privacy policy, and to ask you to leave a review or take a survey.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h4 className="font-bold text-[#1a2a4a] mb-2">Site Improvement</h4>
                    <p className="text-sm m-0">To use data analytics to improve our website, products/services, marketing, customer relationships and experiences.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h4 className="font-bold text-[#1a2a4a] mb-2">Communication</h4>
                    <p className="text-sm m-0">To communicate with you about your quote requests, project details, or technical inquiries.</p>
                  </div>
                </div>
              </section>

              {/* Data Protection */}
              <section id="protection" className="scroll-mt-32 mb-12 border-b border-gray-100 pb-10">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-6">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1a2a4a] shrink-0">4</span>
                  Data Protection
                </h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
                <p>
                  We use industry-standard SSL encryption to protect data transmission on our website. Our backend systems, powered by Supabase, utilize robust access controls and encryption at rest where applicable.
                </p>
              </section>

              {/* Your Rights */}
              <section id="rights" className="scroll-mt-32 mb-12 border-b border-gray-100 pb-10">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-6">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1a2a4a] shrink-0">5</span>
                  Your Legal Rights
                </h2>
                <p>
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 mt-4 text-sm font-medium">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ff8c42] rounded-full"></div> Request access to your personal data</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ff8c42] rounded-full"></div> Request correction of your personal data</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ff8c42] rounded-full"></div> Request erasure of your personal data</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ff8c42] rounded-full"></div> Object to processing of your personal data</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ff8c42] rounded-full"></div> Request restriction of processing</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ff8c42] rounded-full"></div> Request transfer of your personal data</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ff8c42] rounded-full"></div> Right to withdraw consent</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  If you wish to exercise any of the rights set out above, please contact us.
                </p>
              </section>

              {/* Third Party Services */}
              <section id="third-party" className="scroll-mt-32 mb-12 border-b border-gray-100 pb-10">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-6">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1a2a4a] shrink-0">6</span>
                  Third-party Services
                </h2>
                <p>
                  We may share your personal data with the parties set out below for the purposes set out in section 3:
                </p>
                <ul className="space-y-2">
                  <li><strong>Service Providers:</strong> IT and system administration services (e.g., Supabase, Vercel, Hosting Providers).</li>
                  <li><strong>Professional Advisers:</strong> Acting as processors or joint controllers including lawyers, bankers, auditors and insurers who provide consultancy, banking, legal, insurance and accounting services.</li>
                  <li><strong>Regulators:</strong> HM Revenue & Customs, regulators and other authorities acting as processors or joint controllers based in the United Kingdom who require reporting of processing activities in certain circumstances.</li>
                </ul>
              </section>

              {/* Cookie Policy */}
              <section id="cookies" className="scroll-mt-32 mb-12 border-b border-gray-100 pb-10">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-6">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1a2a4a] shrink-0">7</span>
                  Cookie Policy
                </h2>
                <p>
                  Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                </p>
                <p>
                  For detailed information on the cookies we use and the purposes for which we use them, please see our <Link to="/cookie-policy" className="text-[#ff8c42] font-semibold hover:underline">Cookie Policy</Link>.
                </p>
              </section>

              {/* Contact Information */}
              <section id="contact" className="scroll-mt-32 mb-12 border-b border-gray-100 pb-10">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-6">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1a2a4a] shrink-0">8</span>
                  Contact Information
                </h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager in the following ways:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
                  <p className="mb-2"><strong>Full name of legal entity:</strong> {companyName}</p>
                  <p className="mb-2"><strong>Email address:</strong> <a href="mailto:info@ukcommercialflooring.co.uk" className="text-[#ff8c42] hover:underline">info@ukcommercialflooring.co.uk</a></p>
                  <p className="mb-2"><strong>Postal address:</strong> 28 York Avenue, Walsall, WS2 9XA</p>
                  <p className="mb-0"><strong>Telephone number:</strong> 0800 912 4131</p>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.
                </p>
              </section>

              {/* Policy Updates */}
              <section id="updates" className="scroll-mt-32">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#1a2a4a] mb-6">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1a2a4a] shrink-0">9</span>
                  Policy Updates
                </h2>
                <p>
                  We keep our privacy policy under regular review. This version was last updated on <strong>{effectiveDate}</strong>.
                </p>
                <p>
                  It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
