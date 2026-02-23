
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Hammer, 
  Layers, 
  Shield, 
  Settings, 
  Truck, 
  Ruler, 
  Disc,
  Info
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PillarPageLayout from '@/components/PillarPageLayout';

const ConcreteGrindingPillarPage = () => {
  const serviceName = "Concrete Grinding Services";
  const title = "Concrete Grinding UK | Floor Grinding Contractors Guide";
  const description = "Concrete grinding & diamond floor grinding for factories UK – CSP profile prep. Free Birmingham quotes nationwide.";
  // Updated Hero Image to the requested industrial concrete grinding image
  const heroImage = "https://horizons-cdn.hostinger.com/426515f5-3b17-43fd-89ec-b599f2cc0e97/4aa4092e427b237958fc00e4b76cdded.jpg";

  // Schema Definitions
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ukcommercialflooring.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ukcommercialflooring.co.uk/services" },
      { "@type": "ListItem", "position": 3, "name": "Concrete Grinding", "item": "https://www.ukcommercialflooring.co.uk/concrete-grinding" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does concrete grinding cost in the UK?",
        "acceptedAnswer": { "@type": "Answer", "text": "Concrete grinding costs typically range from £1 to £4 per square metre depending on the surface hardness, area size, and depth of aggregate exposure required." }
      },
      {
        "@type": "Question",
        "name": "Is concrete grinding dust-free?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we use industrial-grade vacuums connected directly to our PCD and diamond grinders to capture 99.9% of dust, ensuring a safe environment for active warehouses." }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Concrete Floor Grinding Process",
    "step": [
      { "@type": "HowToStep", "name": "Surface Survey", "text": "Inspect concrete hardness and identify contaminants." },
      { "@type": "HowToStep", "name": "Diamond Selection", "text": "Choose correct grit metal-bond diamonds or PCD segments." },
      { "@type": "HowToStep", "name": "Grinding", "text": "Execute multiple passes to achieve desired CSP profile." },
      { "@type": "HowToStep", "name": "Vacuum Extraction", "text": "Remove all dust and laitance immediately." }
    ]
  };

  return (
    <PillarPageLayout
      title={title}
      description={description}
      heroImage={heroImage}
      serviceName={serviceName}
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      {/* Hero Section Extension */}
      <section className="relative -mt-10 mb-16 px-4">
        <div className="container mx-auto">
          <div className="bg-[#1a2a4a] text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-[#ff8c42] font-bold tracking-wider uppercase mb-2 text-sm">Industrial Surface Prep</span>
              <h1 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
                Ultimate Guide to Concrete Grinding & Floor Grinding UK
              </h1>
              <h2 className="text-xl text-gray-300 mb-6 font-light">
                What is Concrete Grinding?
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Concrete grinding is the mechanical process of using abrasive diamond tools to smooth, clean, and profile concrete slabs. Whether you need to remove stubborn adhesive, level uneven joints, or prepare a surface (CSP 1-5) for <Link to="/epoxy-flooring" className="text-[#ff8c42] hover:underline">epoxy coatings</Link>, our dust-free grinding solutions deliver precision results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/quote" className="px-8 py-4 bg-[#ff8c42] text-white font-bold rounded-lg hover:bg-[#e67e3a] transition-all shadow-lg hover:shadow-orange-500/20 flex items-center gap-2">
                  Get Free Quote <ArrowRight size={20} />
                </Link>
                <Link to="/case-studies" className="px-8 py-4 bg-transparent border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/5 transition-all">
                  View Projects
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src={heroImage} 
                alt="Professional flooring contractor in safety gear operating a concrete grinding machine in an industrial warehouse" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a4a] to-transparent lg:via-[#1a2a4a]/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">Benefits for Warehouses & Industrial Facilities</h2>
            <p className="text-gray-600">
              Why choose diamond grinding over other preparation methods? Utilizing advanced PCD (Polycrystalline Diamond) tools and HTC grinders, we ensure your substrate is structurally sound and perfectly profiled.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Ruler, title: "Precision Levelling", text: "Corrects slab curling and uneven joints to ensure flat surfaces for forklifts and racking systems." },
              { icon: Shield, title: "Dust-Free Process", text: "Our HEPA-filtered vacuum systems capture 99.9% of airborne silica dust, allowing safe operation in live environments." },
              { icon: Layers, title: "Adhesion Boost", text: "Creates the ideal mechanical key (CSP profile) for resin bonds, preventing coating delamination." },
              { icon: Disc, title: "Versatile Removal", text: "Effectively strips old epoxy, carpet glue, bitumen, and screed residues without damaging the slab." },
              { icon: Settings, title: "Surface Restoration", text: "Revitalizes old, tired concrete by exposing fresh aggregate and removing surface carbonation." },
              { icon: Truck, title: "Fast Turnaround", text: "High-production planetary grinders can cover 1000m²+ per day, minimizing facility downtime." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-transparent hover:border-[#ff8c42] transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#1a2a4a] mb-6 group-hover:bg-[#ff8c42] group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2a4a] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-12 text-center">Our Grinding Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Local Grinding Services", link: "/locations-index", keywords: "Floor prep nearby, local contractors" },
              { title: "Manchester Diamond Prep", link: "/manchester", keywords: "Industrial grinding Manchester, Northern warehouse prep" },
              { title: "Birmingham Hub", link: "/birmingham", keywords: "Midlands concrete grinding, factory floor sanding" },
              { title: "Nationwide Coverage", link: "/quote", keywords: "UK wide service, London, Leeds, Bristol" }
            ].map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link}
                className="block bg-gray-50 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className="h-2 w-12 bg-[#ff8c42] rounded-full mb-4"></div>
                <h3 className="text-lg font-bold text-[#1a2a4a] mb-2">{card.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{card.keywords}</p>
                <div className="flex items-center text-[#ff8c42] font-semibold text-sm">
                  Explore <ArrowRight size={14} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Infographic */}
      <section className="py-20 bg-[#1a2a4a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="text-3xl font-bold max-w-lg">The Concrete Grinding Process</h2>
            <Link to="/shot-blasting" className="text-[#ff8c42] hover:text-white transition-colors flex items-center gap-2 mt-4 md:mt-0">
              Compare with Shot Blasting <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-700 -z-0"></div>
            {[
              { step: "01", title: "Survey & Test", desc: "We check Mohs hardness and test for contaminants." },
              { step: "02", title: "Diamond Selection", desc: "Selecting the correct grit and bond for your slab." },
              { step: "03", title: "Grind & Profile", desc: "Multiple passes to remove laitance and level the floor." },
              { step: "04", title: "Vacuum & Clean", desc: "Industrial vacuums remove all dust for a clean finish." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 bg-[#1a2a4a] md:pt-4">
                <div className="w-16 h-16 rounded-2xl bg-[#ff8c42] flex items-center justify-center text-2xl font-bold shadow-lg mb-6 mx-auto md:mx-0">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Table */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a2a4a] mb-8 text-center">Concrete Grinding Costs UK</h2>
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 font-bold text-[#1a2a4a]">Service Type</th>
                <th className="p-4 font-bold text-[#1a2a4a]">Area Size</th>
                <th className="p-4 font-bold text-[#1a2a4a]">Estimated Cost (per m²)</th>
                <th className="p-4 font-bold text-[#1a2a4a]">Typical Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-4">Light Grinding (Cleaning)</td>
                <td className="p-4">&lt; 100m²</td>
                <td className="p-4">£150 - £350 (Day Rate)</td>
                <td className="p-4">Garages, Small Workshops</td>
              </tr>
              <tr>
                <td className="p-4">Standard Preparation</td>
                <td className="p-4">100m² - 500m²</td>
                <td className="p-4">£3.00 - £6.00</td>
                <td className="p-4">Warehouse Floors, Retail</td>
              </tr>
              <tr>
                <td className="p-4">Heavy Duty / Glue Removal</td>
                <td className="p-4">500m² +</td>
                <td className="p-4">£2.00 - £4.50</td>
                <td className="p-4">Industrial Renovation</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="p-4 font-semibold">Large Scale Projects</td>
                <td className="p-4">1000m² +</td>
                <td className="p-4 text-[#ff8c42] font-bold">£1.00 - £3.00</td>
                <td className="p-4">Logistics Hubs, Factories</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center italic">*Prices are indicative. Final quote depends on concrete hardness, access, and power availability.</p>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-12 text-center">Real Results: Concrete Grinding Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1530939027401-cca9976c77f7",
                title: "Birmingham Warehouse Prep",
                desc: "Removal of failed floor paint and oil contamination for a logistics center.",
                metric: "2,500m² Completed in 3 Days"
              },
              {
                img: "https://images.unsplash.com/photo-1686825076471-d1967dd836af",
                title: "Factory Glue Removal",
                desc: "Heavy-duty PCD grinding to strip thick bitumen adhesive from a 1960s factory.",
                metric: "Substrate Restored to CSP 3"
              },
              {
                img: "https://images.unsplash.com/photo-1685245898623-bd606d67b9b4",
                title: "Retail Unit Levelling",
                desc: "Precision grinding to flatten uneven joints before vinyl installation.",
                metric: "Zero Dust Emission"
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={study.img} alt={study.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1a2a4a] mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{study.desc}</p>
                  <div className="inline-block bg-blue-50 text-[#1a2a4a] text-xs font-bold px-3 py-1 rounded-full">
                    {study.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grinding vs Shot Blasting */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a2a4a] mb-8 text-center">Concrete Grinding vs Shot Blasting: Which is Right?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border rounded-xl p-8 bg-white shadow-sm">
            <h3 className="text-2xl font-bold text-[#1a2a4a] mb-4 flex items-center gap-2">
              <Disc className="text-[#ff8c42]" /> Diamond Grinding
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500 shrink-0" /> Best for smoothing and flattening</li>
              <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500 shrink-0" /> Removes thick adhesives & glues (PCD)</li>
              <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500 shrink-0" /> Leaves a smoother profile (CSP 1-3)</li>
              <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500 shrink-0" /> Ideal for thin-film coatings</li>
            </ul>
          </div>
          <div className="border rounded-xl p-8 bg-gray-50 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1a2a4a] mb-4 flex items-center gap-2">
              <Hammer className="text-blue-600" /> Shot Blasting
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-blue-500 shrink-0" /> Fastest for large open areas</li>
              <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-blue-500 shrink-0" /> Creates rougher texture (CSP 3-5)</li>
              <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-blue-500 shrink-0" /> Best for high-build screeds</li>
              <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-blue-500 shrink-0" /> One-pass preparation</li>
            </ul>
            <Link to="/shot-blasting" className="text-blue-600 font-semibold text-sm hover:underline">
              View Shot Blasting Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "How much does concrete grinding cost in the UK?", a: "Costs typically range from £1 to £4 per m². Small jobs usually have a minimum charge (e.g., £350-£500 per day) to cover setup and travel." },
              { q: "What is CSP profile in concrete grinding?", a: "CSP stands for Concrete Surface Profile. Grinding usually achieves CSP 1 (smooth) to CSP 3 (light texture). Shot blasting achieves CSP 3-9. The correct profile depends on the coating you intend to apply." },
              { q: "Is concrete grinding dust-free?", a: "Yes. We attach industrial H-Class vacuums to every grinder. While no system is 100% dustless, ours capture 99% of airborne particles, making it safe for food factories and populated areas." },
              { q: "How long does concrete grinding take?", a: "A single planetary grinder can prepare 200-400m² per day. For large warehouses, we deploy multiple machines to cover 1000m²+ daily." },
              { q: "Can grinding remove epoxy coatings?", a: "Yes. We use specialized PCD (Polycrystalline Diamond) shoes that scrape and shred old epoxy, polyurethane, and paint without clogging the diamonds." },
              { q: "What's the difference between grinding and polishing?", a: "Grinding is the preparation stage (scratching the floor). Polishing involves using progressively finer diamonds to close the pores and create a shine. We specialize in industrial grinding for prep." },
              { q: "Do you offer grinding services nationwide?", a: "Yes, while our HQ is in the Midlands (serving Birmingham, Coventry), we have teams covering Manchester, London, Leeds, and Bristol daily." },
              { q: "What equipment do you use for grinding?", a: "We use heavy-duty planetary grinders from brands like HTC and Husqvarna, ranging from single-phase units for homes to 3-phase industrial riders." },
              { q: "Is concrete grinding suitable for my warehouse?", a: "If you have uneven joints, old markings, or dusting concrete, grinding is the perfect solution. It's also mandatory before applying any new resin floor." },
              { q: "How do I prepare for concrete grinding?", a: "Simply clear the floor area of pallets and debris. We handle the rest, including power supply (we carry generators if 3-phase power isn't available)." }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-[#1a2a4a] hover:text-[#ff8c42] py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Sticky CTA */}
      <section className="py-16 bg-[#1a2a4a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Prepare Your Floor?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your concrete grinding project. 
            Our team is ready to assess your site requirements.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto border border-white/20">
            <form className="grid md:grid-cols-3 gap-4">
              <input type="text" placeholder="Your Name" className="bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]" />
              <input type="tel" placeholder="Phone Number" className="bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]" />
              <input type="text" placeholder="Approx Area (m2)" className="bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8c42]" />
              
              <div className="md:col-span-3 mt-4">
                <Link to="/quote" className="w-full md:w-auto inline-flex justify-center items-center px-8 py-4 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-lg transition-all text-lg shadow-lg">
                  Request Free Survey <ArrowRight className="ml-2" />
                </Link>
              </div>
            </form>
            <p className="text-xs text-gray-400 mt-4">
              <Info size={12} className="inline mr-1" />
              Your data is secure. We usually respond within 2 hours.
            </p>
          </div>
        </div>
      </section>
    </PillarPageLayout>
  );
};

export default ConcreteGrindingPillarPage;
