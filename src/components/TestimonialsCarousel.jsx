
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'James Mitchell',
      company: 'ABC Logistics Ltd',
      quote: 'Outstanding epoxy flooring service for our 50,000 sq ft warehouse. The team was professional, efficient, and delivered on time. Highly recommended!',
      rating: 5
    },
    {
      name: 'Sarah Thompson',
      company: 'Precision Manufacturing UK',
      quote: 'The latex flooring transformed our factory floor. Zero downtime and exceptional quality. Best investment we\'ve made for our facility.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Metro Distribution Centre',
      quote: 'Shot blasting and epoxy coating services were top-notch. Our floors look brand new and can withstand heavy forklift traffic with ease.',
      rating: 5
    },
    {
      name: 'Emma Roberts',
      company: 'Birmingham Industrial Park',
      quote: 'From quote to completion, the entire process was seamless. The liquid screed installation exceeded our expectations. Fantastic work!',
      rating: 5
    },
    {
      name: 'Michael Brown',
      company: 'UK Food Processing Ltd',
      quote: 'Food-grade epoxy flooring that meets all hygiene standards. Professional installation with minimal disruption to our operations. Excellent service!',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2a4a] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-[#4a5568] max-w-3xl mx-auto">
            Trusted by leading businesses across the UK for quality flooring solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-12 border-t-4 border-[#ff8c42]"
            >
              <div className="flex justify-center mb-6">
                <Quote size={32} className="text-[#ff8c42]/30" />
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-[#ff8c42] fill-[#ff8c42]" />
                ))}
              </div>

              <p className="text-[#1a2a4a] text-base sm:text-xl leading-relaxed mb-8 text-center italic">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-bold text-[#1a2a4a] mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm sm:text-base text-[#4a5568]">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-12 p-2 sm:p-3 bg-white rounded-full shadow-lg border-2 border-[#ff8c42]/30 text-[#1a2a4a] hover:bg-[#ff8c42] hover:text-white transition-all duration-300 z-10 touch-target"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-12 p-2 sm:p-3 bg-white rounded-full shadow-lg border-2 border-[#ff8c42]/30 text-[#1a2a4a] hover:bg-[#ff8c42] hover:text-white transition-all duration-300 z-10 touch-target"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#ff8c42] w-8' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
