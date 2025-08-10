import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { collection, getDocs,query,limit } from "firebase/firestore";
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
    <section id="events" className="py-20 mx-auto max-w-7xl px-6">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-white">Upcoming</span>{" "}
          <span className="text-red-500">Events</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.length === 0 ? (
            <p className="text-center text-gray-400 col-span-full">Loading events...</p>
          ) : (
            events.map((event, index) => (
              <div
                key={event.id}
                className="group bg-gradient-to-br from-black to-gray-900 rounded-xl border-2 border-red-700 overflow-hidden shadow-lg hover:border-red-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 flex flex-col"
              >
                {/* Event image */}
                <div className="h-48 w-full relative overflow-hidden rounded-t-xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${event.color} rounded-b-xl`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-red-400 mb-3 group-hover:text-red-300 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="text-sm text-gray-400 mb-4 space-y-1">
                    <p>📅 {event.date}</p>
                    <p>🕐 {event.time}</p>
                    <p>📍 {event.venue}</p>
                  </div>
                  <p className="text-gray-500 mb-6 leading-relaxed flex-grow">
                    {event.description}
                  </p>
                  <button className="w-full bg-red-700 hover:bg-red-600 text-white py-3 px-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105">
                    {index === 0
                      ? "Register Now"
                      : index === 1
                      ? "Learn More"
                      : "Participate"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex items-center justify-center mt-12 text-red-500 hover:text-red-400 transition-colors duration-300">
        <a href="/events" className="p-1">
          View More
        </a>
        <FaAngleRight className="w-5 h-5" />
      </div>
    </section>
  );
}

export default EventsSection;
