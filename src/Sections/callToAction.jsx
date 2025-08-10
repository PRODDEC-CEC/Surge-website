import React from 'react'

function CallToAction() {
  return (
    <div>
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-red-500/8 rounded-full blur-xl animate-pulse delay-700"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="relative bg-gradient-to-br from-gray-900/70 via-black/80 to-gray-900/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 text-center border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-red-500/20 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-500/20 rounded-br-3xl"></div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 right-1/4 w-8 h-8 bg-red-500/10 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 left-1/4 w-6 h-6 bg-red-500/15 rounded-full blur-sm animate-pulse delay-500"></div>
            
            <div className="relative z-10">
              {/* Enhanced header */}
              <div className="mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
                    Join the Revolution?
                  </span>
                </h2>
                
                {/* Decorative line under title */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
                </div>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                  Be part of the next generation of electrical engineers. Connect, learn, and innovate with{" "}
                  <span className="text-red-400 font-medium">SURGE</span>.
                </p>
              </div>

              {/* Enhanced statistics section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300 group">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">500+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Members</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300 group">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">50+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Events</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300 group">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">25+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Faculty</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300 group">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">10+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Years</div>
                </div>
              </div>

              {/* Enhanced action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <button className="group relative w-full sm:w-auto bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-semibold py-4 sm:py-5 px-8 sm:px-12 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 overflow-hidden">
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  
                  <span className="relative flex items-center justify-center gap-2 text-base sm:text-lg font-medium tracking-wide">
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Become a Member
                  </span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                </button>
                
                <button className="group relative w-full sm:w-auto border-2 border-red-500/60 hover:border-red-500 hover:bg-red-500/10 text-red-400 hover:text-red-300 font-semibold py-4 sm:py-5 px-8 sm:px-12 rounded-full transition-all duration-500 transform hover:scale-105 backdrop-blur-sm overflow-hidden">
                  <span className="relative flex items-center justify-center gap-2 text-base sm:text-lg font-medium tracking-wide">
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn More
                  </span>
                  
                  {/* Border glow effect */}
                  <div className="absolute inset-0 border-2 border-red-500/0 group-hover:border-red-500/30 rounded-full transition-all duration-300"></div>
                </button>
              </div>

              {/* Additional engagement element
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-full text-gray-400 text-xs sm:text-sm hover:border-red-500/40 transition-all duration-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Join 500+ Students</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-full text-gray-400 text-xs sm:text-sm hover:border-red-500/40 transition-all duration-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-200"></div>
                  <span>Free Workshops</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-full text-gray-400 text-xs sm:text-sm hover:border-red-500/40 transition-all duration-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-400"></div>
                  <span>Industry Connect</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallToAction
