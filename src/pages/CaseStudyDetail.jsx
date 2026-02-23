import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MapPin, ArrowRight, ChevronRight, Quote, AlertTriangle, Layers, Trophy, Clock, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import { 
  generateCaseStudyMetaTitle, 
  generateCaseStudyMetaDescription, 
  generateCaseStudySchema 
} from '@/lib/blogSeoGenerator';

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const study = caseStudies.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return <div className="min-h-screen flex items-center justify-center">Case Study not found</div>;
  }

  const schema = generateCaseStudySchema(study);

  // Determine which images to display for the BeforeAfterGallery
  let displayBeforeImage = study.beforeImage;
  let displayAfterImage = study.afterImage;
  let displayAltText = study.altText;

  // Override for specific case studies if needed
  if (study.slug === "commercial-kitchen-anti-slip-london") {
    const newImageUrl = "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/cd99947f2855a4325d7a34968c9ad5b5.png";
    displayBeforeImage = newImageUrl;
    displayAfterImage = newImageUrl;
    displayAltText = "Commercial kitchen anti-slip flooring transformation – Wet slippery tile floor with workers cleaning and water pooling (left) labeled 'BEFORE' vs pristine dry anti-slip epoxy floor with cleaning equipment and bright lighting (right) labeled 'AFTER'";
  } else if (study.slug === "commercial-latex-levelling-contractors-leeds") {
    displayBeforeImage = "https://images.unsplash.com/photo-1562404371-91f339501b4f?auto=format&fit=crop&q=80";
    displayAfterImage = "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/efa26474968351c0b494a87a1bc562aa.png";
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>{generateCaseStudyMetaTitle(study)}</title>
        <meta name="description" content={generateCaseStudyMetaDescription(study)} />
        <link rel="canonical" href={`https://www.ukcommercialflooring.co.uk/case-studies/${study.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-[#1a2a4a] py-20 text-white relative overflow-hidden">
         {/* Abstract Background Element */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20" />
         
         <div className="container mx-auto px-4 relative z-10">
           <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
             <Link to="/" className="hover:text-white transition-colors">Home</Link> <ChevronRight size={14}/>
             <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link> <ChevronRight size={14}/>
             <span className="text-[#ff8c42] font-semibold">{study.location} Project</span>
           </div>
           
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-5xl leading-tight">
             {study.title}
           </h1>
           
           <div className="flex flex-wrap gap-4">
             <span className="bg-[#ff8c42] px-4 py-2 rounded-full font-bold text-sm shadow-lg shadow-[#ff8c42]/20">
               {study.serviceType}
             </span>
             <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 border border-white/10">
               <MapPin size={16} /> {study.location}
             </span>
             <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm border border-white/10 flex items-center gap-2">
               <Clock size={16} /> {study.publishedDate}
             </span>
           </div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Featured Image / Gallery Area */}
          <div className="bg-gray-900 p-4 md:p-8">
             <BeforeAfterGallery 
              beforeImage={displayBeforeImage} 
              afterImage={displayAfterImage} 
              altText={displayAltText} 
            />
          </div>

          <div className="p-8 md:p-12 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
               {/* Introduction / Overview */}
               <section>
                 <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-[#ff8c42]"></span>
                    <h3 className="text-sm font-bold text-[#ff8c42] uppercase tracking-wider">Project Overview</h3>
                 </div>
                 <p className="text-gray-700 text-lg leading-relaxed mb-6">
                   {study.description}
                 </p>
                 
                 {/* Trust Signals / E-E-A-T */}
                 <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex flex-col sm:flex-row gap-4 items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700 shrink-0">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#1a2a4a] text-lg mb-1">Expertise You Can Trust</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            With over 15 years of industry experience, UK Commercial Flooring delivers precision-engineered solutions. This project exemplifies our commitment to operational excellence and regulatory compliance in sensitive industrial environments.
                        </p>
                    </div>
                 </div>
               </section>

               {/* Problem / Challenge */}
               <section>
                 <h2 className="text-2xl font-bold text-[#1a2a4a] mb-6 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 shadow-sm">
                     <AlertTriangle size={20} />
                   </div>
                   The Challenge
                 </h2>
                 <p className="text-gray-700 text-lg leading-relaxed mb-6">{study.problem}</p>
                 
                 {study.challengePoints && (
                   <ul className="grid sm:grid-cols-2 gap-4">
                     {study.challengePoints.map((point, index) => (
                       <li key={index} className="flex items-start gap-3 bg-red-50/50 p-4 rounded-lg border border-red-100 hover:border-red-200 transition-colors">
                         <span className="w-2 h-2 mt-2 bg-red-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                         <span className="text-sm font-medium text-red-900">{point}</span>
                       </li>
                     ))}
                   </ul>
                 )}
               </section>

               {/* Solution */}
               <section>
                 <h2 className="text-2xl font-bold text-[#1a2a4a] mb-6 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                     <Layers size={20} />
                   </div>
                   Expertise-Driven Solution
                 </h2>
                 <p className="text-gray-700 text-lg leading-relaxed mb-6">{study.solution}</p>
                 
                 {study.solutionSteps && (
                   <div className="space-y-4 relative">
                     {/* Connector Line */}
                     <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-blue-100 hidden sm:block"></div>
                     
                     {study.solutionSteps.map((step, index) => (
                       <div key={index} className="relative flex gap-4 bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-lg z-10 ring-4 ring-white">
                           {index + 1}
                         </div>
                         <div className="pt-1">
                             <h4 className="font-bold text-[#1a2a4a] text-sm mb-1">Step {index + 1}</h4>
                             <p className="text-gray-600 text-sm">{step}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                 )}
               </section>

               {/* Results */}
               <section>
                 <h2 className="text-2xl font-bold text-[#1a2a4a] mb-6 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 shadow-sm">
                     <Trophy size={20} />
                   </div>
                   The Results
                 </h2>
                 <p className="text-gray-700 text-lg leading-relaxed mb-8">{study.results}</p>
                 
                 {/* Results Table */}
                 {study.resultsTable && (
                   <div className="overflow-hidden rounded-xl border border-gray-200 mb-8 shadow-sm">
                     <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                          <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-bold tracking-wider">
                              <th className="p-4 bg-gray-100/50">Metric</th>
                              <th className="p-4 bg-red-50/30 text-red-900/70">Before</th>
                              <th className="p-4 bg-green-50/30 text-green-900/70">After</th>
                              <th className="p-4 bg-green-50 text-green-700">Improvement</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {study.resultsTable.map((row, idx) => (
                              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30 hover:bg-gray-50'}>
                                <td className="p-4 font-bold text-gray-800 border-r border-gray-50">{row.metric}</td>
                                <td className="p-4 text-gray-500 text-sm border-r border-gray-50">{row.previous}</td>
                                <td className="p-4 text-gray-900 font-medium text-sm border-r border-gray-50">{row.current}</td>
                                <td className="p-4 text-green-600 font-bold text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                                    {row.improvement}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                     </div>
                   </div>
                 )}

                 <div className="bg-gradient-to-r from-green-50 to-transparent p-6 rounded-xl border border-green-100 flex items-start gap-4">
                   <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                        <Sparkles size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-green-900 mb-1">Project Success</h4>
                     <p className="text-green-800 text-sm">Delivered on time, within budget, and exceeding quality expectations.</p>
                   </div>
                 </div>
               </section>

               {/* CTA */}
               <div className="bg-[#1a2332] rounded-xl p-8 text-white text-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[#ff8c42]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Have a similar project?</h3>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto">Get a free, no-obligation consultation and quote for your {study.serviceType.toLowerCase()} needs. We operate nationwide.</p>
                    <a 
                      href="https://ukcommercialflooring.co.uk/quote"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-[#ff8c42]/30 gap-2 mx-auto"
                    >
                      Get Free Quote <ArrowRight size={20} />
                    </a>
                 </div>
               </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
               {/* Testimonial */}
               <div className="bg-gradient-to-br from-[#ff8c42]/10 to-orange-50 p-8 rounded-xl border border-[#ff8c42]/20 relative">
                 <Quote className="text-[#ff8c42] mb-4 absolute top-6 left-6 opacity-20 transform -scale-x-100" size={60} />
                 <div className="relative z-10">
                    <p className="text-gray-800 italic mb-6 text-lg font-medium leading-relaxed">"{study.testimonial}"</p>
                    <div className="border-t border-[#ff8c42]/20 pt-4">
                        <div className="font-bold text-[#1a2a4a] text-base">{study.clientName}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mt-1 font-semibold">{study.serviceType} Project</div>
                    </div>
                 </div>
               </div>

               {/* Quick Stats / Info Box */}
               <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                 <h3 className="font-bold text-[#1a2a4a] mb-4 flex items-center gap-2">
                    <Building2 size={18} className="text-[#ff8c42]" /> 
                    Project Key Facts
                 </h3>
                 <ul className="space-y-4">
                    <li className="flex justify-between items-center text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                        <span className="text-gray-500">Location</span>
                        <span className="font-semibold text-gray-900">{study.location}</span>
                    </li>
                    <li className="flex justify-between items-center text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                        <span className="text-gray-500">Service</span>
                        <span className="font-semibold text-gray-900">{study.serviceType}</span>
                    </li>
                    <li className="flex justify-between items-center text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                        <span className="text-gray-500">Completed</span>
                        <span className="font-semibold text-gray-900">{study.publishedDate}</span>
                    </li>
                 </ul>
               </div>

               {/* Services Link */}
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                 <h3 className="font-bold text-[#1a2a4a] mb-4">Explore Services</h3>
                 <ul className="space-y-3">
                   <li><Link to="/services/epoxy" className="flex items-center justify-between text-gray-600 hover:text-[#ff8c42] hover:translate-x-1 transition-all p-2 rounded hover:bg-white">Epoxy Flooring <ChevronRight size={16}/></Link></li>
                   <li><Link to="/services/latex" className="flex items-center justify-between text-gray-600 hover:text-[#ff8c42] hover:translate-x-1 transition-all p-2 rounded hover:bg-white">Latex Screed <ChevronRight size={16}/></Link></li>
                   <li><Link to="/services/shot-blasting" className="flex items-center justify-between text-gray-600 hover:text-[#ff8c42] hover:translate-x-1 transition-all p-2 rounded hover:bg-white">Shot Blasting <ChevronRight size={16}/></Link></li>
                 </ul>
               </div>

               {/* More Case Studies */}
               <div>
                 <h3 className="font-bold text-[#1a2a4a] mb-4">More Projects</h3>
                 <div className="space-y-4">
                   {caseStudies
                     .filter(c => c.id !== study.id)
                     .slice(0, 3)
                     .map(c => (
                       <Link key={c.id} to={`/case-studies/${c.slug}`} className="block group bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all overflow-hidden">
                         <div className="flex gap-3 p-3">
                             <div className="w-20 h-20 shrink-0 rounded bg-gray-100 overflow-hidden">
                               <img src={c.afterImage} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                             </div>
                             <div>
                                 <div className="text-xs text-[#ff8c42] font-bold mb-1">{c.location}</div>
                                 <h4 className="font-bold text-sm text-[#1a2a4a] group-hover:text-[#ff8c42] transition-colors line-clamp-2 leading-tight">{c.title}</h4>
                             </div>
                         </div>
                       </Link>
                     ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;