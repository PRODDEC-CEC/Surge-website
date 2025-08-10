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
            <section id="hero" className="relative min-h-screen flex items-center justify-center text-center   overflow-hidden">
                {/* Background Effects */}
                 

                <div className="z-10 px-4 max-w-6xl mx-auto">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white opacity-50 neon-text mb-6 tracking-wider animate-fade-in-up">
                        SURGE
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl font-light text-red-300 tracking-wide mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        Igniting Innovation in Electrical Engineering
                    </p>
                    <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                        <button
                            onClick={() => smoothScrollTo('about')}
                            className="group inline-flex items-center bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/50"
                        >
                            <span className="mr-2">Explore Innovation</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                 
            </section>
        </div>
    );
}

export default HeroSection;