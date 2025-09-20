import React, { useState, useEffect, useRef } from 'react';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import { db } from "../firebase"; // Assuming 'db' is correctly exported from your firebase config

function AchievementSection() {
  const [achievements, setAchievements] = useState([]);
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ✅ Fetch achievements from Firestore
  useEffect(() => {
    async function fetchAchievements() {
      try {
        const achievementsCol = collection(db, "achievements");
        const q = query(achievementsCol);
        const snapshot = await getDocs(q);
        const fetchedAchievements = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAchievements(fetchedAchievements);
        console.log("Fetched achievements:", fetchedAchievements); 
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    }
    
    fetchAchievements();
  }, []);

  const changeSlide = (newIndex) => {
    if (newIndex === currentAchievementIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentAchievementIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 150);
  };

  // ✅ Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying && !isTransitioning && achievements.length > 0) {
      const interval = setInterval(() => {
        const nextIndex = currentAchievementIndex === achievements.length - 1 ? 0 : currentAchievementIndex + 1;
        changeSlide(nextIndex);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentAchievementIndex, isTransitioning, achievements.length]);

  // ✅ Show loading until data is ready
  if (achievements.length === 0) {
    return (
      <section className="py-16 text-center text-white">
        Loading achievements...
      </section>
    );
  }

  return (
    <section id="achievements" className="relative py-16 sm:py-24 overflow-hidden">
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
        <div className="relative">
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)} 
            onMouseLeave={() => setIsAutoPlaying(true)} 
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
                    <img src={achievements[currentAchievementIndex].image} alt="" className=' h-96' />
                      <div className="text-2xl font-bold text-red-500 group-hover/stat:text-red-400 transition-colors">{achievements[currentAchievementIndex].name}</div>
                       
                    </div>
                   </div>

                  <div className="flex-1 text-center lg:text-left">
                    <blockquote 
                      key={`text-${currentAchievementIndex}`} 
                      className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light italic mb-6 transition-all duration-500"
                    >
                      "{achievements[currentAchievementIndex].message}"
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Loading overlay during transition */}
              {isTransitioning && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black/40 to-gray-900/20 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20">
                  <div className="text-center">
                    <div className="w-12 h-12 text-red-500 mx-auto mb-4">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" strokeDasharray="80" strokeDashoffset="80">
                          <animate attributeName="stroke-dashoffset" values="80;0;80" dur="1.5s" repeatCount="indefinite"></animate>
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => {
                const prevIndex = currentAchievementIndex === 0 ? achievements.length - 1 : currentAchievementIndex - 1;
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
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  disabled={isTransitioning}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    index === currentAchievementIndex
                      ? 'bg-gradient-to-r from-red-500 to-red-400 w-8 shadow-lg shadow-red-500/30'
                      : 'bg-gray-600 hover:bg-red-400 w-3 hover:shadow-md hover:shadow-red-400/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                const nextIndex = currentAchievementIndex === achievements.length - 1 ? 0 : currentAchievementIndex + 1;
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
          {achievements.map((achievement, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              disabled={isTransitioning}
              className={`group relative p-4 rounded-xl border transition-all duration-500 hover:scale-105 ${
                index === currentAchievementIndex
                  ? 'bg-red-500/10 border-red-500/30 scale-105'
                  : 'bg-gray-900/30 border-gray-700/30 hover:border-red-500/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={achievement.image}
                  alt={achievement.name}
                  className={`w-10 h-10 rounded-full border-2 object-cover ${
                    index === currentAchievementIndex 
                      ? 'border-red-500/40 shadow-lg shadow-red-500/20' 
                      : 'border-red-500/20'
                  }`}
                />
                <div className="text-left">
                  <p className={`text-sm font-medium transition-colors duration-300 ${
                    index === currentAchievementIndex ? 'text-red-100' : 'text-white'
                  }`}>
                    {achievement.name}
                  </p>
{/*                   <p className="text-gray-400 text-xs">{"2024"}</p> */}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementSection;


