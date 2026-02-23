import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Briefcase, TrendingUp, Landmark, PieChart } from 'lucide-react';
import { cityGovernmentStats } from '@/data/cityGovernmentStats';

const LocationStatistics = ({ city }) => {
  // Get stats for current city or fall back to default
  const stats = cityGovernmentStats[city.slug] || cityGovernmentStats['default'];

  // Ensure population comes from city object if available, otherwise stats
  const population = city.population || stats.population;
  const council = stats.local_council;

  const statCards = [
    {
      label: "Population (ONS 2024)",
      value: population,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
      delay: 0
    },
    {
      label: "Local Businesses",
      value: stats.business_count,
      icon: Building2,
      color: "text-orange-600",
      bg: "bg-orange-50",
      delay: 0.1
    },
    {
      label: "Employment Rate",
      value: stats.employment_rate,
      icon: Briefcase,
      color: "text-green-600",
      bg: "bg-green-50",
      delay: 0.2
    },
    {
      label: "Economic Growth",
      value: stats.economic_growth_rate,
      icon: TrendingUp,
      color: "text-purple-600",
      bg: "bg-purple-50",
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">
            {city.name} Industrial Market Data
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Key government statistics and economic indicators for the {city.name} area, reflecting the region's commercial growth and industrial demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 p-6 flex items-start gap-4"
            >
              <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Industry Breakdown */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a2a4a] text-white rounded-xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <PieChart className="text-[#ff8c42]" />
              <h3 className="text-xl font-bold">Industrial Sector Breakdown</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(stats.industry_breakdown).map(([key, value], idx) => (
                <div key={key} className="relative">
                  <div className="flex justify-between text-sm mb-1 capitalize">
                    <span>{key}</span>
                    <span className="font-mono text-[#ff8c42]">{value}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                      className="h-full bg-[#ff8c42] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 border border-gray-200"
          >
             <div className="flex items-center gap-3 mb-6">
              <Landmark className="text-[#1a2a4a]" />
              <h3 className="text-xl font-bold text-[#1a2a4a]">Local Governance</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Local Authority:</strong> {council}
              </p>
              <p>
                <strong>Commercial Property Value:</strong> {stats.commercial_property_value} (Avg)
              </p>
              <p>
                <strong>Avg. Business Size:</strong> {stats.avg_business_size}
              </p>
              <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm border border-blue-100">
                Data provided by ONS (Office for National Statistics) & Local Council Reports {stats.population_year}.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationStatistics;