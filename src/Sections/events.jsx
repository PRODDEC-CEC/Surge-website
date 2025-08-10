import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed

function EventsSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const eventsCol = collection(db, "events");
      const q = query(eventsCol, limit(3));  // create a query limiting to 3 docs
      const eventSnapshot = await getDocs(q);
      const eventList = eventSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventList);
    }
    fetchEvents();
  }, []);

  return (
    <section id="events" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-red-500/8 rounded-full blur-xl animate-pulse delay-700"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Enhanced header with decorative elements */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white drop-shadow-lg">Upcoming</span>{" "}
              <span className="text-red-500 drop-shadow-lg">Events</span>
            </h2>
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-14 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
          </div>
        
        </div>

        <div className="relative">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-red-500/20 rounded-tl-lg"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-red-500/20 rounded-br-lg"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-6 lg:p-8">
            {events.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <div className="inline-block animate-spin rounded-full h-8 w-8 mb-4"></div>
                <p className="text-gray-400 text-lg font-light">Loading events...</p>
              </div>
            ) : (
              events.map((event, index) => (
                <div
                  key={event.id}
                  className="group bg-gradient-to-br from-black to-gray-900 rounded-xl overflow-hidden shadow-lg  hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 flex flex-col relative"
                >
                  {/* Enhanced event image */}
                  <div className="h-48 w-full relative overflow-hidden rounded-t-xl">
                    {/* Image overlay effects */}
                   
                    
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Enhanced gradient strip */}
                    
                    
                    {/* Event status badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-red-500/30">
                        <span className="text-red-400 text-xs font-medium">
                          {index === 0 ? "Featured" : index === 1 ? "Popular" : "Upcoming"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced content */}
                  <div className="p-6 flex flex-col flex-grow relative">
                    {/* Subtle accent line */}
                   
                    
                    <h3 className="text-xl font-bold text-red-400 mb-4 group-hover:text-red-300 transition-colors duration-300 leading-tight">
                      {event.title}
                    </h3>
                    
                    {/* Enhanced event details */}
                    <div className="bg-gray-800/30 rounded-lg p-4 mb-4 border border-gray-700/50">
                      <div className="text-sm text-gray-400 space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-red-400">📅</span>
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-red-400">🕐</span>
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-red-400">📍</span>
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 mb-6 leading-relaxed flex-grow text-sm">
                      {event.description}
                    </p>
                    
                    {/* Enhanced button */}
                    <button className="w-full bg-red-700 hover:bg-red-600 text-white py-3 px-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group/btn">
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      
                      <span className="relative">
                        {index === 0
                          ? "Register Now"
                          : index === 1
                          ? "Learn More"
                          : "Participate"}
                      </span>
                      
                      {/* Button shine effect */}
                      <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform translate-x-full group-hover/btn:-translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>

                  {/* Floating accent elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500/20 rounded-full blur-sm group-hover:bg-red-500/40 transition-all duration-500"></div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Enhanced "View More" section */}
        <div className="flex items-center justify-center mt-16 group">
          <a 
            href="/events" 
            className="flex items-center gap-3 px-8 py-4 text-red-500 hover:text-red-400 transition-all duration-300 border border-red-500/30 hover:border-red-500/60 rounded-full hover:bg-red-500/5 group-hover:scale-105"
          >
            <span className="text-lg font-medium">View More Events</span>
            <FaAngleRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
