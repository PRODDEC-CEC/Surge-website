import React, { useState } from 'react';
import Particles from '../components/particles'

function HeroSection() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const smoothScrollTo = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsNavOpen(false);
    };

    return (
        <div>
            <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0 bg-transparent"></div>
                <div className="absolute inset-0 bg-transparent"></div>
                
                {/* Sophisticated animated background elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/3 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-red-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/2 rounded-full blur-3xl animate-pulse delay-500"></div>

                {/* Elegant geometric decorations */}
                <div className="absolute top-20 left-20 w-20 h-20 border border-red-500/10 rounded-lg rotate-45 animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 border border-red-500/15 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/3 right-20 w-12 h-12 bg-red-500/5 rounded-full blur-sm animate-pulse delay-300"></div>

                {/* Main content container */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {/* Enhanced title section */}
                    <div className="relative mb-8 sm:mb-12">
                        {/* Decorative elements around title */}
                        
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-4 sm:mb-6 tracking-wider animate-fade-in-up">
                            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                                SURGE
                            </span>
                            <span className="block text-red-500 neon-text-red drop-shadow-2xl">
                                CEC
                            </span>
                        </h1>
                        
                        {/* Decorative line under title */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
                    </div>

                    {/* Enhanced subtitle with formal styling */}
                    <div className="relative mb-12 sm:mb-16">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-red-300 tracking-wide mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Department of Electrical Engineering
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            Pioneering Excellence in Engineering Education & Innovation
                        </p>
                    </div>

                    {/* Enhanced statistics section
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                        <div className="bg-black/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 sm:p-6 hover:border-red-500/40 transition-all duration-300 group">
                            <div className="text-2xl sm:text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">500+</div>
                            <div className="text-xs sm:text-sm text-gray-400 font-medium">Students</div>
                        </div>
                        <div className="bg-black/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 sm:p-6 hover:border-red-500/40 transition-all duration-300 group">
                            <div className="text-2xl sm:text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">25+</div>
                            <div className="text-xs sm:text-sm text-gray-400 font-medium">Faculty</div>
                        </div>
                        <div className="bg-black/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 sm:p-6 hover:border-red-500/40 transition-all duration-300 group">
                            <div className="text-2xl sm:text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">50+</div>
                            <div className="text-xs sm:text-sm text-gray-400 font-medium">Events</div>
                        </div>
                        <div className="bg-black/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 sm:p-6 hover:border-red-500/40 transition-all duration-300 group">
                            <div className="text-2xl sm:text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">10+</div>
                            <div className="text-xs sm:text-sm text-gray-400 font-medium">Years</div>
                        </div>
                    </div> */}

                    {/* Enhanced CTA button */}
                    <div className="mt-8 sm:mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                        <button
                            onClick={() => smoothScrollTo('about')}
                            className="group relative inline-flex items-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-semibold py-4 sm:py-5 px-8 sm:px-12 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-red-500/50 overflow-hidden"
                        >
                            {/* Button glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                            
                            {/* Button content */}
                            <span className="relative mr-3 text-base sm:text-lg font-medium tracking-wide">Explore Innovation</span>
                            <svg className="relative w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            
                            {/* Button shine effect */}
                            <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                        </button>
                    </div>

                </div>

                {/* Enhanced Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                </div>
            </section>
        </div>
    );
}

export default HeroSection;