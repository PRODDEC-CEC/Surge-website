import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import hod from '../assets/faculties/hod.jpg'; // Adjust the path as necessary

function HodSection() {
    return (
        <section id="hod" className="relative py-24 md:py-32 text-white overflow-hidden">
            {/* Elegant background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
            
            {/* Subtle animated background elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-500/5 rounded-full blur-lg animate-pulse delay-1000"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Enhanced header with decorative elements */}
                <div className="text-center mb-16">
                    <div className="inline-block relative">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 neon-text-red animate-fade-in-up">
                            Meet Our HOD
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                    </div>
                    <p className="text-gray-400 mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    </p>
                </div>

                {/* Enhanced main content area */}
                <div className="relative">
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-red-500/30"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-red-500/30"></div>
                    
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 p-8 md:p-12">
                        {/* Enhanced image section */}
                        <div className="w-full lg:w-2/5 relative group">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                {/* Image glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                
                                <img
                                    src={hod}
                                    alt="HOD"
                                    className="w-full h-auto transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                                />
                                
                                {/* Subtle border overlay */}
                                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-red-500/30 transition-colors duration-500"></div>
                            </div>
                            
                            {/* Floating accent */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full blur-sm group-hover:bg-red-500/40 transition-colors duration-500"></div>
                        </div>

                        {/* Enhanced content section */}
                        <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
                            {/* Title with enhanced styling */}
                            <div className="relative">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Dr. Raju M
                                </h3>
                                <div className="text-red-400 font-medium text-lg mb-6 tracking-wider">
                                    Head of Department
                                </div>
                            </div>

                            {/* Enhanced description with better typography */}
                            <div className="space-y-5">
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Dr. Raju M is an accomplished academic and industry professional,
                                    with a rich background in electrical engineering and a passion for
                                    innovation. His leadership has been instrumental in guiding the
                                    department toward excellence in both research and education.
                                </p>
                                <p className="text-gray-400 text-base leading-relaxed">
                                    With a doctorate in <b>Smart Grid</b> technology, he is at the
                                    forefront of research in energy systems. His notable paper,
                                    "Power flow control models of energy storage connected system in
                                    smart grid under unbalanced conditions: an AI technique based
                                    assessment," reflects his expertise in leveraging AI for
                                    practical, real-world solutions.
                                </p>
                                <ul className="text-gray-300 text-base leading-relaxed space-y-2">
                                    <li><strong>Email:</strong> <a href="mailto:rajumanuel@ceconline.edu" className="text-red-400 hover:underline">rajumanuel@ceconline.edu</a></li>
                                    <li><strong>Phone:</strong> <span className="text-gray-400">+91 9447477755</span></li>
                                </ul>
                            </div>

                            {/* Achievement highlights */}
                            <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-700/50">
                                <div className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-red-400">10+</div>
                                    <div className="text-sm text-gray-400">Years Teaching Experience</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-red-400">4+</div>
                                    <div className="text-sm text-gray-400">Years Industrial Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced call-to-action */}
                <div className="flex items-center justify-center mt-16 group">
                    <a 
                        href="/faculties" 
                        className="flex items-center gap-3 px-8 py-4 text-red-500 hover:text-red-400 transition-all duration-300 border border-red-500/30 hover:border-red-500/60 rounded-full hover:bg-red-500/5 group-hover:scale-105"
                    >
                        <span className="text-lg font-medium">View Our Faculties</span>
                        <FaAngleRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HodSection;
