import React, { useEffect, useState } from 'react';
import { generateSitemap } from '../utils/generateSitemap';
import { Loader2 } from 'lucide-react';

const Sitemap = () => {
  const [sitemapXml, setSitemapXml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generate = async () => {
      try {
        setLoading(true);
        // Using a timeout to ensure the UI thread isn't blocked immediately if generation is heavy
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const xml = generateSitemap();
        setSitemapXml(xml);
      } catch (err) {
        console.error("Failed to generate sitemap:", err);
        setError("Failed to generate sitemap. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    generate();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-500">
        <Loader2 className="w-10 h-10 animate-spin mb-4 text-[#ff8c42]" />
        <p>Generating Sitemap...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-red-500">
        <p className="text-xl font-bold mb-2">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-0 m-0 w-full h-full bg-white">
      {/* 
        Note: In a pure client-side React app (SPA), we cannot set response headers like 'Content-Type: application/xml'
        for the route itself when served via index.html. 
        However, showing the raw XML string in a pre tag is the standard way to debug/view it.
        For production, this XML should be generated at build time (SSG) or served via a serverless function.
      */}
      <pre className="font-mono text-xs md:text-sm p-4 whitespace-pre-wrap break-all text-gray-800 bg-gray-50 border-none m-0">
        {sitemapXml}
      </pre>
    </div>
  );
};

export default Sitemap;