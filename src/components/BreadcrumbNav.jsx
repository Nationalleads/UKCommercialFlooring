import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { generateBreadcrumbSchema } from '@/lib/SeoSchemaUtils';

const BreadcrumbNav = ({ breadcrumbItems }) => {
  const schema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="w-full">
        <ol className="flex flex-wrap items-center text-sm text-gray-500">
          <li className="flex items-center">
            <Link to="/" className="hover:text-[#ff8c42] transition-colors flex items-center gap-1">
              <Home size={14} />
              <span>Home</span>
            </Link>
          </li>
          
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={14} className="mx-2 text-gray-400" />
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-[#ff8c42] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbNav;