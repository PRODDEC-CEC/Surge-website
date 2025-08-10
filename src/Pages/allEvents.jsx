import React, { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import Footer from '../Sections/footer';
import { collection, getDocs,query,limit } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed
const EventsPage = () => {
  const [events, setEvents] = useState([]);
  
    useEffect(() => {
    async function fetchEvents() {
      const eventsCol = collection(db, "events");
      const q = query(eventsCol); 
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-red-500/30 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
            Past Events & Workshops
          </h1>
          <p className="text-gray-400 text-lg">
            Explore our successful events and workshops
          </p>
        </div>
      </header>

      {/* Events Grid */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                
                {/* Event Image */}
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={`${event.title} poster`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Completed
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-red-400" />
                      <span className="text-gray-300">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-red-400" />
                      <span className="text-gray-300">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-red-400" />
                      <span className="text-gray-300">{event.venue}</span>
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