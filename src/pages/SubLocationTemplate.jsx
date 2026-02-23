
import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Users, Home as HomeIcon, GraduationCap, ShieldAlert, ArrowRight, Train, CheckCircle, XCircle } from 'lucide-react';
import { birminghamSubLocationStats } from '@/data/birminghamSubLocationStats';
import { getRelatedLocations } from '@/data/birminghamRelatedLocations';
import { generateLocalBusinessSchema, generatePlaceSchema, generateFAQPageSchema } from '@/lib/SeoSchemaUtils';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import LocationMapComponent from '@/components/LocationMapComponent';
import CoverImage from '@/components/CoverImage';
import LocationSearchBar from '@/components/LocationSearchBar';

const birminghamSuburbs = [
  "Highgate", "Edgbaston", "Selly Oak", "Moseley", "Harborne", "Erdington", "Sutton Coldfield", 
  "Solihull", "Shirley", "Hall Green", "Acocks Green", "Kings Heath", "Stirchley", "Bartley Green", 
  "Billesley", "Bournbrook", "Brandwood", "Cannon Hill", "Cotteridge", "Digbeth", "Four Oaks", 
  "Gornal", "Handsworth", "Heartlands", "Jewellery Quarter", "Kings Norton", "Ladywood", "Longbridge", 
  "Nechells", "Northfield", "Perry Barr", "Queslett", "Rednal", "Rubery", "Saltley", "Shard End", 
  "Sheldon", "Small Heath", "Sohhill", "South Yardley", "Sparkbrook", "Sparkhill", "Springfield", 
  "Stechford", "Stockland Green", "Tettenhall", "Tile Cross", "Tysley", "Walkley", "Ward End", 
  "Washwood Heath", "Weoley Castle", "Yardley", "Yardley Wood"
];

const StatCard = ({ icon: Icon, label, value, color = "text-blue-500", delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className={`p-3 rounded-full bg-gray-50 w-fit mb-4 ${color}`}>
      <Icon size={24} />
    </div>
    <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{label}</p>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </motion.div>
);

const SubLocationTemplate = () => {
  const { slug } = useParams();
  const [locationData, setLocationData] = useState(null);
  const [relatedData, setRelatedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find specific location data based on URL slug
    const data = birminghamSubLocationStats.find(l => l.slug === slug);
    setLocationData(data);
    
    if (data) {
      // Get related locations based on the current location's slug
      const relatedSlugs = getRelatedLocations(slug);
      const related = birminghamSubLocationStats.filter(l => relatedSlugs.includes(l.slug));
      setRelatedData(related);
    }
    setLoading(false);
  }, [slug]);

  if (loading) return <div className="min-h-screen bg-white"></div>;
  
  if (!locationData) return <Navigate to="/birmingham" replace />;

  const faqs = [
    {
      question: `Is ${locationData.name} a good place to live?`,
      answer: `${locationData.name} offers a mix of residential comfort and local amenities. With an average house price of ${locationData.avgHousePrice} and access to schools rated '${locationData.schoolRating}', it is a popular choice for families and professionals in the ${locationData.region} Birmingham area.`
    },
    {
      question: `What is the population of ${locationData.name}?`,
      answer: `As of the 2021 Census estimates, ${locationData.name} has a population of approximately ${locationData.population2021}, with a projected growth to ${locationData.population2026Projection} by 2026.`
    },
    {
      question: `What are the crime rates in ${locationData.name}?`,
      answer: `Crime rates in ${locationData.name} are considered '${locationData.crimeRate}' compared to the wider West Midlands average. The area has an active neighborhood watch and community policing presence.`
    }
  ];

  const schemas = [
    generateLocalBusinessSchema(
      `UK Commercial Flooring - ${locationData.name}`,
      `Expert flooring contractors serving ${locationData.name} and surrounding ${locationData.region} Birmingham areas.`,
      { locality: locationData.name },
      null
    ),
    generatePlaceSchema(
      locationData.name,
      `A suburb in ${locationData.region} Birmingham known for ${locationData.attractions.join(', ')}.`,
      locationData.population2021,
      "West Midlands"
    ),
    generateFAQPageSchema(faqs)
  ];

  const isCommercialFlooringSuburb = birminghamSuburbs.includes(locationData.name);

  const heroTitle = isCommercialFlooringSuburb 
    ? `${locationData.name} Commercial Flooring Contractors | Warehouse & Factory Specialists from Birmingham`
    : `Living in ${locationData.name}`;

  const heroDescription = isCommercialFlooringSuburb
    ? `Top commercial & industrial flooring in ${locationData.name}, Birmingham – epoxy resin flooring contractors, latex screed levelling, shot blasting & grinding prep, liquid flow screed for factories/warehouses. Free local quotes from our Birmingham HQ at ukcommercialflooring.co.uk – heavy duty solutions for businesses near you.`
    : `A comprehensive guide to ${locationData.name}. Explore government statistics, demographics, school ratings, and what makes this neighborhood unique.`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>{`Living in ${locationData.name}: 2025 Area Guide & Stats | Birmingham Suburbs`}</title>
        <meta name="description" content={`Everything you need to know about ${locationData.name}, Birmingham. Crime rates, schools, house prices (${locationData.avgHousePrice}), transport links, and local insights.`} />
        <link rel="canonical" href={`https://www.ukcommercialflooring.co.uk/birmingham/${slug}`} />
        {schemas.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
      </Helmet>

      <CoverImage 
        locationName={heroTitle}
        imageUrl={locationData.coverImage}
        altText={locationData.coverImageAlt}
        breadcrumbs={[
          { label: 'Locations', path: '/locations-index' },
          { label: 'Birmingham', path: '/birmingham' },
          { label: locationData.name, path: `/birmingham/${slug}` }
        ]}
      >
        <div className="space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-[#ff8c42]/90 text-white text-sm font-bold border border-white/20">
            {locationData.region} Birmingham Area Guide
          </span>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </CoverImage>

      <div className="container mx-auto px-4 py-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <StatCard icon={Users} label="Population (2021)" value={locationData.population2021.toLocaleString()} color="text-blue-600" delay={0} />
          <StatCard icon={HomeIcon} label="Avg House Price" value={locationData.avgHousePrice} color="text-green-600" delay={0.1} />
          <StatCard icon={GraduationCap} label="School Rating" value={locationData.schoolRating} color="text-purple-600" delay={0.2} />
          <StatCard icon={ShieldAlert} label="Crime Rate" value={locationData.crimeRate} color="text-red-600" delay={0.3} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-[#1a2a4a]">About {locationData.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-0">
                {locationData.name} is a vibrant residential area located in {locationData.region} Birmingham. Known for its community spirit and proximity to key amenities, it attracts a diverse range of residents from young professionals to families. 
                With an IMD Rank in the {locationData.imdRank}, it represents a {locationData.region === 'North' || locationData.region === 'South' ? 'desirable' : 'developing'} part of the city.
              </p>
              
              <LocationMapComponent 
                name={locationData.name} 
                lat={locationData.coordinates?.lat} 
                lng={locationData.coordinates?.lng} 
              />

              <h3 className="text-xl font-bold mb-3 text-[#1a2a4a]">Demographics Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Age Distribution</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex justify-between"><span>0-18 Years:</span> <span className="font-bold">{locationData.ageBreakdown["0-18"]}</span></li>
                    <li className="flex justify-between"><span>18-65 Years:</span> <span className="font-bold">{locationData.ageBreakdown["18-65"]}</span></li>
                    <li className="flex justify-between"><span>65+ Years:</span> <span className="font-bold">{locationData.ageBreakdown["65+"]}</span></li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Household Income</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">{locationData.householdIncome}</span>
                    <span className="text-xs text-gray-500">Avg. Annual</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Unemployment Rate: {locationData.unemploymentRate}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-[#1a2a4a]">Living in {locationData.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={20} /> The Pros
                  </h3>
                  <ul className="space-y-2">
                    {locationData.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 mt-1">•</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-400">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <XCircle className="text-red-400" size={20} /> The Cons
                  </h3>
                  <ul className="space-y-2">
                    {locationData.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-red-400 mt-1">•</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#1a2a4a] flex items-center gap-2">
                    <MapPin className="text-[#ff8c42]" size={20} /> Attractions
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {locationData.attractions.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c42]"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#1a2a4a] flex items-center gap-2">
                    <Train className="text-blue-600" size={20} /> Transport
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {locationData.transport.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-[#1a2a4a]">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-sm px-6 py-2">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-[#ff8c42]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1a2a4a] text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Need Flooring in {locationData.name}?</h3>
              <p className="text-gray-300 mb-6">
                We provide commercial and industrial flooring services throughout {locationData.name} and the {locationData.region} Birmingham area.
              </p>
              <Link 
                to="/quote" 
                className="block w-full py-3 bg-[#ff8c42] hover:bg-[#e67e3a] text-center font-bold rounded-lg transition-colors"
              >
                Get a Free Quote
              </Link>
              <a href="tel:07904909304" className="block text-center mt-4 text-sm text-gray-400 hover:text-white transition-colors">
                or call 07904 909 304
              </a>
            </div>

            {/* Sidebar Search - Primary Navigation */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-[#ff8c42]" /> 
                Find Another Suburb
              </h3>
              <p className="text-xs text-gray-500 mb-4">Search for any area in Birmingham:</p>
              <LocationSearchBar />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#0A1F4F]">
              <h3 className="font-bold text-gray-900 mb-4">Nearby Areas</h3>
              <div className="space-y-3">
                {relatedData.map((item, i) => (
                  <Link 
                    key={i} 
                    to={`/birmingham/${item.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#ff8c42] transition-colors">{item.name}</span>
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-[#ff8c42] transition-colors" />
                  </Link>
                ))}
                {relatedData.length === 0 && <p className="text-sm text-gray-400">No specific nearby areas listed.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubLocationTemplate;
