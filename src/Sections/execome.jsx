import React, { useEffect, useState } from "react";
import { collection, getDocs, query ,orderBy} from "firebase/firestore";
import { db } from "../firebase";

function ExecomeSection() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  
  // Mobile carousel states
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const membersCol =  query(collection(db, "Execome/E-2025/members"), orderBy("order", "asc"));
        const q = query(membersCol);
        const snapshot = await getDocs(q);
        const fetchedMembers = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMembers(fetchedMembers);
      } catch (error) {
        console.error("Error fetching execome members:", error);
      }
    }

    fetchMembers();
  }, []);

  // Handle slide change with animation (mobile only)
  const changeSlide = (newIndex) => {
    if (newIndex === currentMemberIndex || isTransitioning || members.length === 0) return;
    
    setIsTransitioning(true);
    
    // Start fade out
    setTimeout(() => {
      setCurrentMemberIndex(newIndex);
      // End transition after content changes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 150);
  };

  // Auto-slide functionality for mobile
  useEffect(() => {
    if (isAutoPlaying && !isTransitioning && members.length > 0) {
      const interval = setInterval(() => {
        const nextIndex = currentMemberIndex === members.length - 1 ? 0 : currentMemberIndex + 1;
        changeSlide(nextIndex);
      }, 4000); // 4 seconds for members
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentMemberIndex, isTransitioning, members.length]);

  if (!members.length) {
    return (
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-400 text-lg font-light">Loading Executive Committee...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="committee" className="relative py-20 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Clean Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Executive </span>
            <span className="text-red-500">Committee</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated members shaping our department's future
          </p>
        </div>

        {/* Mobile Carousel View - Only visible on mobile */}
        <div className="block md:hidden">
          <div 
            className="relative"
            onTouchStart={() => setIsAutoPlaying(false)}
            onTouchEnd={() => setIsAutoPlaying(true)}
          >
            <div className="bg-gradient-to-br from-gray-900/60 via-black/80 to-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-red-500/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-red-500/30 rounded-br-3xl"></div>

              {/* Animated member content */}
              <div 
                className={`relative z-10 transition-all duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                }`}
              >
                <div className="text-center">
                  {/* Member Image - No position badge on mobile */}
                  <div className="relative inline-block mb-6">
                    <div className="relative w-48 h-48 mx-auto">
                      <img
                        key={`member-${currentMemberIndex}`}
                        src={members[currentMemberIndex].image || "https://static.vecteezy.com/system/resources/previews/041/642/170/non_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"}
                        alt={`${members[currentMemberIndex].name} - ${members[currentMemberIndex].position}`}
                        className="w-full h-full object-cover rounded-2xl border-4 border-red-500/30 shadow-lg transition-all duration-500"
                      />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white transition-all duration-500">
                      {members[currentMemberIndex].name}
                    </h3>
                    
                    {/* Position displayed below name in mobile */}
                    <div className="inline-block px-4 py-2">
                      <p className="text-red-500 text-base  font-medium">{members[currentMemberIndex].position}</p>
                    </div>
                    
                    {members[currentMemberIndex].department && (
                      <p className="text-gray-400 text-sm">{members[currentMemberIndex].department}</p>
                    )}
                    
                    {members[currentMemberIndex].year && (
                      <p className="text-gray-500 text-xs">{members[currentMemberIndex].year}</p>
                    )}

                     
                     
                  </div>
                </div>
              </div>

              {/* Loading overlay during transition */}
              {isTransitioning && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black/40 to-gray-900/20 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20">
                  <div className="w-12 h-12 text-red-500 mx-auto mb-4">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" strokeDasharray="80" strokeDashoffset="80">
                          <animate attributeName="stroke-dashoffset" values="80;0;80" dur="1s" repeatCount="indefinite"></animate>
                        </path>
                      </svg>
                    </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Previous button */}
            <button
              onClick={() => {
                const prevIndex = currentMemberIndex === 0 ? members.length - 1 : currentMemberIndex - 1;
                changeSlide(prevIndex);
              }}
              disabled={isTransitioning}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 rounded-full transition-all duration-300 group hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous member"
            >
              <svg className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors group-hover:-translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex space-x-2">
              {members.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  disabled={isTransitioning}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 disabled:cursor-not-allowed ${
                    index === currentMemberIndex
                      ? 'bg-gradient-to-r from-red-500 to-red-400 w-6 shadow-lg shadow-red-500/30'
                      : 'bg-gray-600 hover:bg-red-400 w-2.5 hover:shadow-md hover:shadow-red-400/20'
                  }`}
                  style={{
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  aria-label={`View member ${index + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={() => {
                const nextIndex = currentMemberIndex === members.length - 1 ? 0 : currentMemberIndex + 1;
                changeSlide(nextIndex);
              }}
              disabled={isTransitioning}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 rounded-full transition-all duration-300 group hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next member"
            >
              <svg className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Member counter for mobile */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              {currentMemberIndex + 1} of {members.length} members
            </span>
          </div>
        </div>

        {/* Desktop/Tablet Grid Layout - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
            >
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image || "https://static.vecteezy.com/system/resources/previews/041/642/170/non_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"}
                  alt={`${member.name} - ${member.position}`}
                  className="w-full h-[100%]   object-contain transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Position Badge - Still above image on desktop */}
                <div className="absolute top-4 left-4">
                  <div className="bg-red-700/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{member.position}</span>
                  </div>
                </div>

                {/* Social Links Overlay */}
                 
              </div>

              {/* Member Info */}
              <div className="p-2 ">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-100 transition-colors duration-300">
                  {member.name}
                </h3>
                
                 

                 
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>
  );
}

export default ExecomeSection;