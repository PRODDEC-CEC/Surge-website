import React from 'react'

function AboutSection() {
  return (
    <div>
      <section id="about" className="py-20 mx-auto max-w-7xl px-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                        <span className="text-red-500">About</span> <span className="text-white">SURGE</span>
                    </h2>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center"
                                alt="Electrical Engineering Innovation"
                                className="w-full h-80 opacity-75 object-cover shadow-2xl border-2 border-red-700  "
                            />
                             <div className="grid grid-cols-2 gap-4 mt-8 absolute bottom-5 right-2">
                                <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-red-800">
                                    <div className="text-2xl font-bold text-red-500">500+</div>
                                    <div className="text-sm text-gray-400">Active Members</div>
                                </div>
                                <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-red-800">
                                    <div className="text-2xl font-bold text-red-500">50+</div>
                                    <div className="text-sm text-gray-400">Events Hosted</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="order-1 lg:order-2 space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                <strong className="text-red-400">SURGE</strong> is the premier technical forum for electrical engineering students,
                                dedicated to fostering innovation, knowledge sharing, and professional development.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                We provide a dynamic platform for students to explore cutting-edge technologies,
                                engage in hands-on projects, and connect with peers and industry experts.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Our mission is to empower the next generation of electrical engineers
                                with the skills and insights needed to tackle real-world challenges.
                            </p>
                            
                           
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default AboutSection
