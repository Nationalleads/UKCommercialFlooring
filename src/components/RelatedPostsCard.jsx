
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RelatedPostsCard = ({ post, type = 'blog' }) => {
  const linkPath = type === 'blog' ? `/blog/${post.slug}` : `/case-studies/${post.slug}`;
  const category = type === 'blog' ? post.category : post.serviceType;

  return (
    <Link to={linkPath} className="group block h-full w-full">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col transform hover:-translate-y-1">
        <div className="relative h-48 sm:h-56 overflow-hidden w-full">
          <img 
            src={type === 'blog' ? post.featuredImage : post.afterImage} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-[#ff8c42] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {category}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow text-center md:text-left">
          <h3 className="text-lg font-bold text-[#1a2a4a] mb-2 line-clamp-2 group-hover:text-[#ff8c42] transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
            {type === 'blog' ? post.excerpt : post.description}
          </p>
          <div className="flex items-center justify-center md:justify-start text-[#ff8c42] text-sm font-semibold mt-auto">
            Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RelatedPostsCard;
