import React, { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import Footer from '../Sections/footer';
import { collection, getDocs,query,limit } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const eventsCol = collection(db, "events");
        const q = query(eventsCol); 
        const eventSnapshot = await getDocs(q);
        const eventList = eventSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventList);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  // Full page loading component
  const FullPageLoader = () => (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <div className="w-16 h-16 text-red-500 mb-6">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" strokeDasharray="80" strokeDashoffset="80">
            <animate attributeName="stroke-dashoffset" values="80;0;80" dur="1s" repeatCount="indefinite"></animate>
          </path>
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Loading Events</h2>
      <p className="text-gray-400">Please wait while we fetch the latest events...</p>
    </div>
  );

  // Show loading screen until data is loaded
  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-red-500/30 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white drop-shadow-lg">Past</span>{" "}
            <span className="text-red-500 drop-shadow-lg">Events</span>
          </h1>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Explore our successful events and workshops
          </p>
        </div>
      </header>

      {/* Events Grid */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="group bg-gradient-to-br from-black to-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-500 hover:-translate-y-2"
              >
                
                {/* Event Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={`${event.title} poster`}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 px-2 py-1 bg-green-600 group-hover:bg-green-500 text-white text-xs rounded-full transition-colors duration-300">
                      <CheckCircle className="w-3 h-3" />
                      Completed
                    </span>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Event Content */}
                <div className="p-4 group-hover:bg-gray-750 transition-colors duration-300">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-100 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 border-t border-gray-700 group-hover:border-red-500/30 pt-4 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-sm group-hover:bg-gray-700/30 rounded px-2 py-1 transition-all duration-300">
                      <Calendar className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm group-hover:bg-gray-700/30 rounded px-2 py-1 transition-all duration-300">
                      <Clock className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm group-hover:bg-gray-700/30 rounded px-2 py-1 transition-all duration-300">
                      <MapPin className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default EventsPage;