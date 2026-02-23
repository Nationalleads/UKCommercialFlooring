
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, User, Clock, ChevronRight, Share2, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import RelatedPostsCard from '@/components/RelatedPostsCard';
import LazyImage from '@/components/LazyImage';
import { 
  generateBlogMetaTitle, 
  generateBlogMetaDescription, 
  generateBlogSchema 
} from '@/lib/blogSeoGenerator';

const BlogPostDetail = () => {
  const { slug } = useParams();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  // Scroll to top on load or slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h2>
        <Link to="/blog" className="text-[#ff8c42] hover:underline font-semibold">Back to Blog</Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
    
  const getCategoryLink = (category) => {
    return `/case-studies/${category.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const renderContent = (content) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('## ')) {
        return <h2 key={i} className="text-2xl md:text-3xl font-bold text-[#1a2a4a] mt-10 mb-6">{trimmed.replace('## ', '')}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={i} className="text-xl md:text-2xl font-bold text-[#1a2a4a] mt-8 mb-4">{trimmed.replace('### ', '')}</h3>;
      }
      if (trimmed.startsWith('* ')) {
        return <li key={i} className="ml-6 list-disc text-gray-700 mb-3 pl-2 leading-relaxed">{trimmed.replace('* ', '')}</li>;
      }
      if (trimmed.length === 0) return null;
      
      const parts = trimmed.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="text-gray-700 mb-6 leading-relaxed text-lg">
          {parts.map((part, j) => {
             if (part.startsWith('**') && part.endsWith('**')) {
               return <strong key={j} className="font-bold text-[#1a2a4a]">{part.slice(2, -2)}</strong>;
             }
             return part;
          })}
        </p>
      );
    });
  };

  const schema = generateBlogSchema(post);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>{generateBlogMetaTitle(post)}</title>
        <meta name="description" content={generateBlogMetaDescription(post)} />
        <link rel="canonical" href={`https://www.ukcommercialflooring.co.uk/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full bg-[#1a2a4a] overflow-hidden">
        {/* Banner Image Container */}
        <div className="relative w-full h-[55vh] md:h-[65vh] min-h-[450px]">
          <LazyImage 
            src={post.featuredImage} 
            alt={post.altText} 
            className="w-full h-full object-cover"
            priority={true}
          />
          
          {/* 
            Dark overlay for contrast
          */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a4a] via-[#1a2a4a]/70 to-black/30" />
          
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
            <div className="flex items-center gap-2 text-sm text-white mb-6 bg-[#1a2a4a]/80 w-fit px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
               <Link to="/" className="hover:text-[#ff8c42] transition-colors">Home</Link> <ChevronRight size={14} className="text-gray-400"/>
               <Link to="/blog" className="hover:text-[#ff8c42] transition-colors">Blog</Link> <ChevronRight size={14} className="text-gray-400"/>
               <Link 
                 to={getCategoryLink(post.category)} 
                 className="text-[#ff8c42] font-bold tracking-wide hover:underline hover:text-[#ffaa6b] transition-colors"
               >
                 {post.category}
               </Link>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 max-w-4xl leading-tight drop-shadow-md">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-white font-medium">
              <span className="flex items-center gap-2 bg-[#1a2a4a]/90 border border-white/10 px-4 py-2 rounded-lg shadow-sm">
                <User size={18} className="text-[#ff8c42]" /> 
                <span className="tracking-tight">{post.author}</span>
              </span>
              <span className="flex items-center gap-2 bg-[#1a2a4a]/90 border border-white/10 px-4 py-2 rounded-lg shadow-sm">
                <Calendar size={18} className="text-[#ff8c42]" /> 
                <span className="tracking-tight">{post.publishedDate}</span>
              </span>
              <span className="flex items-center gap-2 bg-[#1a2a4a]/90 border border-white/10 px-4 py-2 rounded-lg shadow-sm">
                <Clock size={18} className="text-[#ff8c42]" /> 
                <span className="tracking-tight">{post.readTime} read</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Article */}
          <article className="lg:w-2/3 xl:w-3/4">
            <div className="bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="prose prose-blue max-w-none">
                {renderContent(post.content)}
              </div>
              
              <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h4 className="font-bold text-[#1a2a4a] mb-2">Share this expert guide:</h4>
                  <div className="flex gap-4">
                    <button className="p-3 bg-gray-50 rounded-full text-gray-500 hover:text-[#ff8c42] hover:bg-orange-50 transition-all shadow-sm">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">#Construction</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">#FlooringUK</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">#Screeding</span>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-[#1a2a4a] to-[#2c3e50] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Need expert advice for your floor?</h2>
                 <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                   Our technical team provides free site surveys across the UK. Get an accurate quote for your liquid or traditional screed project today.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/quote"
                      className="inline-flex items-center justify-center px-10 py-5 bg-[#ff8c42] hover:bg-[#e67e3a] text-white font-bold rounded-xl shadow-xl transition-all transform hover:-translate-y-1 gap-2 text-lg"
                    >
                      Get a Free Quote <ArrowRight size={20} />
                    </Link>
                    <a 
                      href="tel:0800000000"
                      className="inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all text-lg"
                    >
                      Call Specialists
                    </a>
                 </div>
               </div>
               <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 xl:w-1/4 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-[#1a2a4a] mb-8 relative">
                Related Articles
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ff8c42] rounded-full"></span>
              </h3>
              <div className="space-y-8">
                {relatedPosts.length > 0 ? (
                  relatedPosts.map(post => (
                    <RelatedPostsCard key={post.id} post={post} type="blog" />
                  ))
                ) : (
                  <p className="text-gray-500 italic text-sm">More expert guides coming soon.</p>
                )}
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                 <h4 className="font-bold text-[#1a2a4a] mb-6">Explore Our Services</h4>
                 <div className="grid grid-cols-1 gap-3">
                   {[
                     { name: 'Liquid Screed', path: '/services/liquid-screed' },
                     { name: 'Latex Screed', path: '/services/latex' },
                     { name: 'Epoxy Flooring', path: '/services/epoxy' },
                     { name: 'Shot Blasting', path: '/services/shot-blasting' }
                   ].map((svc) => (
                     <Link 
                       key={svc.path}
                       to={svc.path} 
                       className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#ff8c42]/10 text-gray-700 hover:text-[#ff8c42] transition-all group font-medium"
                     >
                       {svc.name}
                       <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                     </Link>
                   ))}
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
