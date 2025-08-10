import React, { useState, useEffect, useRef } from 'react';

function TestimonialSection() {
     const testimonialsRef = useRef([]);
        const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  return (
    <div>
      <section id="testimonials" className="py-20 mx-auto max-w-7xl px-6 relative">
                <div className="bg-gray-900/70 backdrop-blur-lg border border-red-900/50 rounded-2xl p-8 shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                        <span className="text-white">What Our Students</span> <span className="text-red-500">Say</span>
                    </h2>
                    
                    <div className="relative max-w-4xl mx-auto">
                        <div className="relative h-64 overflow-hidden">
                            {[
                                {
                                    text: "SURGE has been instrumental in my academic journey. The workshops are top-notch, and the community is incredibly supportive. I've learned so much!",
                                    author: "Rahul S., 3rd Year EE",
                                    rating: 5
                                },
                                {
                                    text: "The 'AI in Power Systems' seminar was truly eye-opening. SURGE consistently brings experts who share invaluable insights. Highly recommended!",
                                    author: "Deepa K., 2nd Year EE",
                                    rating: 5
                                },
                                {
                                    text: "Being part of the executive committee has given me leadership skills I never thought I'd develop. SURGE is more than a forum; it's a family.",
                                    author: "Vivek P., 4th Year EE",
                                    rating: 5
                                }
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-1000 transform ${
                                        index === currentTestimonialIndex
                                            ? 'opacity-100 translate-x-0'
                                            : index < currentTestimonialIndex
                                            ? 'opacity-0 -translate-x-full'
                                            : 'opacity-0 translate-x-full'
                                    }`}
                                >
                                    <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col justify-center border-2 border-red-700/50">
                                        <div className="flex justify-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <blockquote className="text-xl italic text-gray-300 text-center mb-6 leading-relaxed">
                                            "{testimonial.text}"
                                        </blockquote>
                                        <cite className="text-red-400 font-semibold text-lg text-center not-italic">
                                            — {testimonial.author}
                                        </cite>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Testimonial Indicators */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {[0, 1, 2].map((index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonialIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentTestimonialIndex
                                            ? 'bg-red-500 scale-125'
                                            : 'bg-red-800 hover:bg-red-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default TestimonialSection
