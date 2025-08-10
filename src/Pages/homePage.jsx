import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../Sections/hero';
import AboutSection from '../Sections/about';
import HodSection from '../Sections/hod';
import EventsSection from '../Sections/events';
import ExecomeSection from '../Sections/execome';
import TestimonialSection from '../Sections/testimonial';
import StatisticsSection from '../Sections/statistics';
import Navbar from '../components/navbar';
import CallToAction from '../Sections/callToAction';
import Footer from '../Sections/footer';
import '../App.css'
function HomePage() {
       const [activeSection, setActiveSection] = useState('hero');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);
    
    const testimonialsRef = useRef([]);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const sectionElementsToAnimate = useRef([]);
    
    const addElementToScrollAnimate = (el) => {
        if (el && !sectionElementsToAnimate.current.includes(el)) {
            sectionElementsToAnimate.current.push(el);
        }
    };

    // Mouse tracking for interactive elements
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Loading animation
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    

    // Scroll-based animations and active section detection
    useEffect(() => {
        const handleScroll = () => {
            let current = 'hero';
            const sections = document.querySelectorAll('section[id]');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - window.innerHeight / 3) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);

            // Parallax effect for elements
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
                <style jsx="true">{`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                    @keyframes neon-glow {
                        0% { text-shadow: 0 0 5px #ef4444, 0 0 10px #ef4444, 0 0 15px #ef4444; }
                        50% { text-shadow: 0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444; }
                        100% { text-shadow: 0 0 5px #ef4444, 0 0 10px #ef4444, 0 0 15px #ef4444; }
                    }
                    .neon-text {
                        animation: neon-glow 2s ease-in-out infinite alternate;
                    }
                    .loading-spinner {
                        animation: spin 1s linear infinite;
                    }
                `}</style>
                <div className="text-center">
                    <div className="loading-pulse mb-2 relative">
                        {/* Lightning bolt icon */}
                        <div className="w-20 h-20 text-red-500 mx-auto mb-4">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" strokeDasharray="80" strokeDashoffset="80">
                                    <animate attributeName="stroke-dashoffset" values="80;0;80" dur="1.5s" repeatCount="indefinite"></animate>
                                </path>
                            </svg>
                        </div>
                        {/* Spinner */}
                    </div>
                    <p className="text-red-300 text-xl mt-2">Loading...</p>
                </div>
            </div>
        );
    }
  return (
    <div className="relative overflow-x-hidden min-h-screen App">
            <style jsx="true">{`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #0A0A0A;
                    color: #E0E0E0;
                    scroll-behavior: smooth;
                }

                /* Enhanced Animated Grid Background */
                .animated-grid-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #0A0A0A;
                    background-image: 
                        linear-gradient(to right, rgba(239, 68, 68, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(239, 68, 68, 0.05) 1px, transparent 1px),
                        linear-gradient(135deg, rgba(239, 68, 68, 0.02) 0%, transparent 50%, rgba(239, 68, 68, 0.02) 100%);
                    background-size: 50px 50px, 50px 50px, 200px 200px;
                    background-position: 0 0, 0 0, 0 0;
                    animation: grid-movement 60s linear infinite, grid-pulse 8s ease-in-out infinite;
                    z-index: -10;
                }

                @keyframes grid-movement {
                    0% { 
                        background-position: 0 0, 0 0, 0 0; 
                    }
                    100% { 
                        background-position: 50px 50px, 50px 50px, 200px 200px; 
                    }
                }

                @keyframes grid-pulse {
                    0%, 100% { 
                        opacity: 0.3; 
                        background-size: 50px 50px, 50px 50px, 200px 200px;
                    }
                    50% { 
                        opacity: 0.6;
                        background-size: 60px 60px, 60px 60px, 250px 250px;
                    }
                }

                /* Additional Grid Overlay for depth */
                .grid-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.03) 0%, transparent 50%),
                        linear-gradient(45deg, transparent 40%, rgba(239, 68, 68, 0.01) 50%, transparent 60%);
                    background-size: 400px 400px, 400px 400px, 100px 100px;
                    animation: grid-overlay-move 120s linear infinite;
                    z-index: -9;
                    pointer-events: none;
                }

                @keyframes grid-overlay-move {
                    0% { background-position: 0% 0%, 0% 0%, 0% 0%; }
                    100% { background-position: 100% 100%, -100% -100%, 100% 100%; }
                }

                /* Floating Particles */
                .particle {
                    position: fixed;
                    width: 2px;
                    height: 2px;
                    background: rgba(239, 68, 68, 0.6);
                    border-radius: 50%;
                    animation: float 15s infinite linear;
                    z-index: -8;
                    box-shadow: 0 0 6px rgba(239, 68, 68, 0.4);
                }

                @keyframes float {
                    0% {
                        transform: translateY(100vh) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }

                .card-hover-effect {
                    position: relative;
                    overflow: hidden;
                }

                .card-hover-effect::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.1), transparent);
                    transition: left 0.6s ease;
                    z-index: 1;
                }

                .card-hover-effect:hover::before {
                    left: 100%;
                }

                .animate-slide-in-left {
                    animation: slide-in-left 0.8s ease-out forwards;
                }

                .animate-slide-in-right {
                    animation: slide-in-right 0.8s ease-out forwards;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }

                ::-webkit-scrollbar {
                    width: 8px;
                }

                ::-webkit-scrollbar-track {
                    background: #1a1a1a;
                }

                ::-webkit-scrollbar-thumb {
                    background: #ff0000;
                    border-radius: 4px;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #e00000;
                }
            `}</style>

            {/* Enhanced Animated Grid Background */}
            <div className="animated-grid-background"></div>
            <div className="grid-overlay"></div>

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <div 
                    key={i} 
                    className="particle" 
                    style={{ 
                        left: `${Math.random() * 100}%`, 
                        animationDelay: `${Math.random() * 15}s`,
                        animationDuration: `${15 + Math.random() * 10}s`
                    }}
                ></div>
            ))}

            {/* Navigation Bar */}
            <Navbar/>

            {/* Hero Section */}
            <HeroSection/>

            {/* About Section */}
            <AboutSection/>

            {/* HOD Section */}
           <HodSection/>

            {/* Events Section */}
            <EventsSection/>

            {/* Committee Section */}
            <ExecomeSection/>

            {/* Testimonials Section */}
            
            <TestimonialSection/>
            {/* Statistics Section */}
            <StatisticsSection/>

            {/* Call to Action Section */}
            <CallToAction/>

            {/* Footer */}
            <Footer/>
             
        </div>
  )
}

export default HomePage
