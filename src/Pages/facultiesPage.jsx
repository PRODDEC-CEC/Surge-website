import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Award, BookOpen, Users } from 'lucide-react';
import Footer from '../Sections/footer';
import { collection, getDocs,query,limit,addDoc } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed

const FacultiesPage = () => {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    async function fetchFaculties() {
      try {
        setLoading(true);
        const facultiesCol = collection(db, "faculties"); // your Firestore collection
        const snapshot = await getDocs(facultiesCol);

         
          const facultiesList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setFaculties(facultiesList);
        
      } catch (error) {
        console.error("Error fetching faculties:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFaculties();
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
      <h2 className="text-2xl font-bold text-white mb-2">Loading Faculties</h2>
      <p className="text-gray-400">Please wait while we fetch our amazing faculty members...</p>
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
            <span className="text-white drop-shadow-lg">Meet Our</span>{" "}
            <span className="text-red-500 drop-shadow-lg">Faculties</span>
          </h1>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Meet our experienced and dedicated teaching professionals
          </p>
        </div>
      </header>

      {/* Faculty Grid */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculties.map((faculty) => (
              <div
                key={faculty.id}
                className="group bg-gradient-to-br from-black to-gray-900 border border-gray-700 rounded-lg overflow-hidden  hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Faculty Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                    <div className="text-white">
                      <h3 className="text-lg font-bold group-hover:text-red-100 transition-colors duration-300">{faculty.name}</h3>
                      <p className="text-red-400 text-sm">{faculty.designation}</p>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Faculty Details */}
                <div className="p-4 group-hover:bg-gray-750 transition-colors duration-300">
                  {/* Specialization */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                      <span className="text-gray-400 text-sm">Specialization</span>
                    </div>
                    <p className="text-white text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">{faculty.specialization}</p>
                  </div>

                  {/* Experience */}
                  {/* <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                      <span className="text-gray-400 text-sm">Experience</span>
                    </div>
                    <p className="text-white text-sm group-hover:text-gray-100 transition-colors duration-300">{faculty.experience}</p>
                  </div> */}

                  {/* Contact Info */}
                  <div className="space-y-2 border-t border-gray-700 group-hover:border-red-500/30 pt-4 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-sm group-hover:bg-gray-700/30 rounded px-2 py-1 transition-all duration-300">
                      <Mail className="w-4 h-4 text-red-400 flex-shrink-0 group-hover:text-red-300 transition-colors duration-300" />
                      <span className="text-gray-300 truncate group-hover:text-white transition-colors duration-300">{faculty.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm group-hover:bg-gray-700/30 rounded px-2 py-1 transition-all duration-300">
                      <Phone className="w-4 h-4 text-red-400 flex-shrink-0 group-hover:text-red-300 transition-colors duration-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{faculty.phone}</span>
                    </div>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FacultiesPage;
