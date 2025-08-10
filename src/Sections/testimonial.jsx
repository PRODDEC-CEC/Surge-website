import React, { useState, useEffect, useRef } from 'react';

function TestimonialSection() {
  const testimonialsRef = useRef([]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      text: "SURGE has been instrumental in my academic journey. The workshops are top-notch, and the community is incredibly supportive. I've learned so much!",
      author: "Rahul S.",
      year: "3rd Year EE",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "The 'AI in Power Systems' seminar was truly eye-opening. SURGE consistently brings experts who share invaluable insights. Highly recommended!",
      author: "Deepa K.",
      year: "2nd Year EE", 
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "Being part of the executive committee has given me leadership skills I never thought I'd develop. SURGE is more than a forum; it's a family.",
      author: "Vivek P.",
      year: "4th Year EE",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "The technical events and competitions organized by SURGE have helped me build confidence and showcase my skills to industry professionals.",
      author: "Priya M.",
      year: "Final Year EE",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  // Handle slide change with animation
  const changeSlide = (newIndex) => {
    if (newIndex === currentTestimonialIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Start fade out
    setTimeout(() => {
      setCurrentTestimonialIndex(newIndex);
      // End transition after content changes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 150);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying && !isTransitioning) {
      const interval = setInterval(() => {
        const nextIndex = currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1;
        changeSlide(nextIndex);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentTestimonialIndex, isTransitioning, testimonials.length]);

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-red-500/8 rounded-full blur-xl animate-pulse delay-700"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Modern Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white drop-shadow-lg">Testimonials</span>{" "}
            </h2>
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-14 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
          </div>
          
        </div>

        {/* Modern Card-based Design with Carousel Animation */}
        <div className="relative">
          {/* Main testimonial display */}
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="bg-gradient-to-br from-gray-900/60 via-black/80 to-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-red-500/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-red-500/30 rounded-br-3xl"></div>

              {/* Animated testimonial content */}
              <div 
                className={`relative z-10 transition-all duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                }`}
              >
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Avatar and user info */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="relative inline-block">
                      <img
                        key={`avatar-${currentTestimonialIndex}`}
                        src={testimonials[currentTestimonialIndex].avatar}
                        alt={testimonials[currentTestimonialIndex].author}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-red-500/30 object-cover shadow-lg transition-all duration-500"
                      />
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-transparent blur-xl"></div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-500">
                        {testimonials[currentTestimonialIndex].author}
                      </h3>
                      <p className="text-red-400 text-sm md:text-base font-medium transition-all duration-500">
                        {testimonials[currentTestimonialIndex].year}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Quote icon */}
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-red-500/30 mx-auto lg:mx-0 transition-all duration-500" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-1.1.9-2 2-2V8z"/>
                      </svg>
                    </div>

                    {/* Rating stars with animation
                    <div className="flex justify-center lg:justify-start mb-6">
                      {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-5 h-5 text-red-500 mr-1 transition-all duration-300 hover:scale-110" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div> */}

                    {/* Testimonial text with typewriter effect */}
                    <blockquote 
                      key={`text-${currentTestimonialIndex}`}
                      className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light italic mb-6 transition-all duration-500"
                    >
                      "{testimonials[currentTestimonialIndex].text}"
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Loading overlay during transition */}
              {isTransitioning && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black/40 to-gray-900/20 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20">
                  <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous button */}
            <button
              onClick={() => {
                const prevIndex = currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1;
                changeSlide(prevIndex);
              }}
              disabled={isTransitioning}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 rounded-full transition-all duration-300 group hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors group-hover:-translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Enhanced Smooth Dot indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  disabled={isTransitioning}
                  className={`h-3 rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 disabled:cursor-not-allowed ${
                    index === currentTestimonialIndex
                      ? 'bg-gradient-to-r from-red-500 to-red-400 w-8 shadow-lg shadow-red-500/30'
                      : 'bg-gray-600 hover:bg-red-400 w-3 hover:shadow-md hover:shadow-red-400/20'
                  }`}
                  style={{
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={() => {
                const nextIndex = currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1;
                changeSlide(nextIndex);
              }}
              disabled={isTransitioning}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 rounded-full transition-all duration-300 group hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-play indicator
          <div className="flex justify-center mt-6">
            <div className={`flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-full transition-all duration-300 ${isAutoPlaying ? 'border-red-500/40' : 'border-gray-600/40'}`}>
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isAutoPlaying ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
              <span className="text-xs text-gray-400 font-light">
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </span>
            </div>
          </div> */}
        </div>

        {/* Enhanced preview cards with animation */}
        <div className="hidden lg:flex justify-center gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              disabled={isTransitioning}
              className={`group relative p-4 rounded-xl border transition-all duration-500 hover:scale-105 transform disabled:cursor-not-allowed ${
                index === currentTestimonialIndex
                  ? 'bg-red-500/10 border-red-500/30 scale-105'
                  : 'bg-gray-900/30 border-gray-700/30 hover:border-red-500/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className={`w-10 h-10 rounded-full border-2 object-cover transition-all duration-300 ${
                    index === currentTestimonialIndex 
                      ? 'border-red-500/40 shadow-lg shadow-red-500/20' 
                      : 'border-red-500/20'
                  }`}
                />
                <div className="text-left">
                  <p className={`text-sm font-medium transition-colors duration-300 ${
                    index === currentTestimonialIndex ? 'text-red-100' : 'text-white'
                  }`}>
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400 text-xs">{testimonial.year}</p>
                </div>
              </div>
              
              
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
