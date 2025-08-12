import React, { useState, useEffect, useRef } from 'react';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import { db } from "../firebase"; // Assuming 'db' is correctly exported from your firebase config

function TestimonialSection() {
  // testimonialsRef was declared but not used, so it has been removed.
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ✅ Fetch testimonials from Firestore
  useEffect(() => {
    // Renamed function from fetchMembers to fetchTestimonials for clarity
    async function fetchTestimonials() {
      try {
        const testimonialsCol = collection(db, "testimonials");
        const q = query(testimonialsCol);
        const snapshot = await getDocs(q);
        const fetchedTestimonials = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(fetchedTestimonials);
        // Log the fetched data for debugging, not the function itself
        console.log("Fetched testimonials:", fetchedTestimonials); 
      } catch (error) {
        // Corrected error message to reflect fetching testimonials
        console.error("Error fetching testimonials:", error);
      }
    }
    
    fetchTestimonials();
  }, []); // Empty dependency array means this effect runs once on mount

  const changeSlide = (newIndex) => {
    // Prevent changing slide if it's the same index or a transition is already in progress
    // Prevent changing slide if it's the same index or a transition is already in progre
    if (newIndex === currentTestimonialIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    // First setTimeout to trigger the 'opacity-0' and 'translate-y-4' transition
    setTimeout(() => {
      setCurrentTestimonialIndex(newIndex);
      // Second setTimeout to allow the content to transition back in
      // Duration set to 500ms to match the CSS 'transition-all duration-500'
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // This duration should match the CSS transition duration
    }, 150); // Small delay before changing content to ensure exit animation starts
  };

  // ✅ Auto-slide functionality
  useEffect(() => {
    // Only auto-play if explicitly enabled, no transition is active, and there are testimonials
    if (isAutoPlaying && !isTransitioning && testimonials.length > 0) {
      const interval = setInterval(() => {
        const nextIndex = currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1;
        changeSlide(nextIndex);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval); // Cleanup the interval on unmount or dependency change
    }
  }, [isAutoPlaying, currentTestimonialIndex, isTransitioning, testimonials.length]);

  // ✅ Show loading until data is ready
  if (testimonials.length === 0) {
    return (
      <section className="py-16 text-center text-white">
        Loading testimonials...
      </section>
    );
  }

  // ✅ Show loading until data is ready
  if (testimonials.length === 0) {
    return (
      <section className="py-16 text-center text-white">
        Loading testimonials...
      </section>
    );
  }

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
              <span className="text-white drop-shadow-lg">Our Achievements</span>{" "}
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-14 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
          </div>
        </div>

        {/* Modern Card-based Design */}
        {/* Modern Card-based Design */}
        <div className="relative">
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)} // Pause auto-play on hover
            onMouseLeave={() => setIsAutoPlaying(true)} // Resume auto-play on mouse leave
          >
            <div className="bg-gradient-to-br from-gray-900/60 via-black/80 to-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-red-500/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-red-500/30 rounded-br-3xl"></div>

              <div 
                className={`relative z-10 transition-all duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                }`}
              >
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                   <div className=' relative'>
                    
                    <div className="bg-black/70 backdrop-blur-sm p-4 rounded-xl border border-red-800/50 hover:border-red-600/70 transition-all duration-300 group/stat">
                    <img src={testimonials[currentTestimonialIndex].image} alt="" className=' h-96' />
                      <div className="text-2xl font-bold text-red-500 group-hover/stat:text-red-400 transition-colors">Worshop</div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium">2024</div>
                    </div>
                   </div>

                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-6">
                       
                    </div>
                    <blockquote 
                      key={`text-${currentTestimonialIndex}`} // Key change to force re-render for text transition
                      className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light italic mb-6 transition-all duration-500"
                    >
                      "{testimonials[currentTestimonialIndex].message}"
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Loading overlay during transition */}
              {isTransitioning && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black/40 to-gray-900/20 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20">
                  <div className="text-center">
                    {/* Lightning bolt icon */}
                    <div className="w-12 h-12 text-red-500 mx-auto mb-4">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" strokeDasharray="80" strokeDashoffset="80">
                          <animate attributeName="stroke-dashoffset" values="80;0;80" dur="1.5s" repeatCount="indefinite"></animate>
                        </path>
                      </svg>
                    </div>
                    {/* Spinner */}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => {
                const prevIndex = currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1;
                changeSlide(prevIndex);
              }}
              disabled={isTransitioning}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 rounded-full transition-all duration-300 group hover:scale-110 disabled:opacity-50"
            >
              <svg className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors group-hover:-translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  disabled={isTransitioning}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    index === currentTestimonialIndex
                      ? 'bg-gradient-to-r from-red-500 to-red-400 w-8 shadow-lg shadow-red-500/30'
                      : 'bg-gray-600 hover:bg-red-400 w-3 hover:shadow-md hover:shadow-red-400/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                const nextIndex = currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1;
                changeSlide(nextIndex);
              }}
              disabled={isTransitioning}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 rounded-full transition-all duration-300 group hover:scale-110 disabled:opacity-50"
            >
              <svg className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Preview cards */}
        <div className="hidden lg:flex justify-center gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              disabled={isTransitioning}
              className={`group relative p-4 rounded-xl border transition-all duration-500 hover:scale-105 ${
                index === currentTestimonialIndex
                  ? 'bg-red-500/10 border-red-500/30 scale-105'
                  : 'bg-gray-900/30 border-gray-700/30 hover:border-red-500/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-10 h-10 rounded-full border-2 object-cover ${
                    index === currentTestimonialIndex 
                      ? 'border-red-500/40 shadow-lg shadow-red-500/20' 
                      : 'border-red-500/20'
                  }`}
                />
                <div className="text-left">
                  <p className={`text-sm font-medium transition-colors duration-300 ${
                    index === currentTestimonialIndex ? 'text-red-100' : 'text-white'
                  }`}>
                    {"Worshop"}
                  </p>
                  <p className="text-gray-400 text-xs">{"2024"}</p>
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
