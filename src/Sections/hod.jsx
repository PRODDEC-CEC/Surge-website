import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import hod from '../assets/faculties/hod.jpg'; // Adjust the path as necessary
function HodSection() {
    return (
        <section id="hod" className="relative py-24 md:py-32 text-white overflow-hidden ">
            {/* Radial gradient background effect */}

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 neon-text-red animate-fade-in-up">
                        Meet Our HOD
                    </h2>

                    <div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <div className="w-full md:w-1/3">
                                <img
                                    src={hod}
                                    alt="HOD"
                                    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-2/3 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Dr. John Doe
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Dr. John Doe is a distinguished professor with over 20 years of experience in electrical engineering. His research focuses on sustainable energy solutions and innovative technologies.
                                </p>
                                <p className="text-gray-400 mb-6">
                                    Under his leadership, the department has achieved significant milestones in research and student engagement, fostering a culture of innovation and excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-12 text-red-500 hover:text-red-400 transition-colors duration-300">
                <a href="/faculties" className="p-1">
                    View our faculties
                </a>
                <FaAngleRight className="w-5 h-5" />
            </div>
        </section>
    );
}

export default HodSection;