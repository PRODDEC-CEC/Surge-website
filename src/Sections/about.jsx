import React from 'react'

function AboutSection() {
  return (
    <div>
      <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-red-500/8 rounded-full blur-xl animate-pulse delay-700"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Enhanced header with decorative elements */}
          <div className="text-center mb-16 sm:mb-28">
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-red-500 drop-shadow-lg">About</span>{' '}
                <span className="text-white drop-shadow-lg">SURGE</span>
              </h2>
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
            </div>
            <p className="text-gray-400 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              Empowering the next generation of electrical engineers through innovation and excellence
            </p>
          </div>
          
          <div className="relative">
            {/* Elegant corner decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-red-500/20 rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-500/20 rounded-br-lg"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 md:p-12">
              {/* Enhanced image section */}
              <div className="order-1 lg:order-1 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Image overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center"
                    alt="Electrical Engineering Innovation"
                    className="w-full h-80 sm:h-96 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                  
                  {/* Refined border overlay */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-red-500/30 transition-all duration-500"></div>
                  
                  {/* Enhanced statistics cards */}
                  <div className="absolute hidden bottom-4 right-4 lg:grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-black/70 backdrop-blur-sm p-4 rounded-xl border border-red-800/50 hover:border-red-600/70 transition-all duration-300 group/stat">
                      <div className="text-2xl font-bold text-red-500 group-hover/stat:text-red-400 transition-colors">500+</div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium">Active Members</div>
                    </div>
                    <div className="bg-black/70 backdrop-blur-sm p-4 rounded-xl border border-red-800/50 hover:border-red-600/70 transition-all duration-300 group/stat">
                      <div className="text-2xl font-bold text-red-500 group-hover/stat:text-red-400 transition-colors">50+</div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium">Events Hosted</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500/30 rounded-full blur-sm group-hover:bg-red-500/50 transition-all duration-500"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-red-500/20 rounded-full blur-md group-hover:bg-red-500/40 transition-all duration-500"></div>
              </div>
              
              {/* Enhanced content section */}
              <div className="order-2 lg:order-2 space-y-8">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent rounded-full"></div>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light pl-2">
                      <strong className="text-red-400 font-semibold">SURGE</strong> is the premier technical forum for electrical engineering students,
                      dedicated to fostering innovation, knowledge sharing, and professional development.
                    </p>
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light pl-2">
                    We provide a dynamic platform for students to explore cutting-edge technologies,
                    engage in hands-on projects, and connect with peers and industry experts.
                  </p>
                </div>
                
                {/* Enhanced call-to-action button */}
                <div className="pt-4">
                  <button className="group relative inline-flex items-center bg-red-700 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/50 overflow-hidden">
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative mr-2 font-medium">Read More</span>
                    <svg 
                      className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
