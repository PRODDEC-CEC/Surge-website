import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Award, BookOpen, Users } from 'lucide-react';
import Footer from '../Sections/footer';
import { collection, getDocs,query,limit,addDoc } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed
const FacultiesPage = () => {
  const [faculties, setFaculties] = useState([]);
 
  useEffect(() => {
    async function fetchFaculties() {
      try {
        const facultiesCol = collection(db, "faculties"); // your Firestore collection
        const snapshot = await getDocs(facultiesCol);

         
          const facultiesList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setFaculties(facultiesList);
        
      } catch (error) {
        console.error("Error fetching faculties:", error);
      }
    }
    fetchFaculties();
  }, []);

  if (faculties.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
        Loading faculties...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-red-500/30 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
            Our Faculty
          </h1>
          <p className="text-gray-400 text-lg">
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
                className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-red-500/30 transition-colors"
              >
                {/* Faculty Image */}
                <div className="relative">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white">
                      <h3 className="text-lg font-bold">{faculty.name}</h3>
                      <p className="text-red-400 text-sm">{faculty.designation}</p>
                    </div>
                  </div>
                </div>

                {/* Faculty Details */}
                <div className="p-4">
                  {/* Specialization */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-red-400" />
                      <span className="text-gray-400 text-sm">Specialization</span>
                    </div>
                    <p className="text-white text-sm font-medium">{faculty.specialization}</p>
                  </div>

                  {/* Experience */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-red-400" />
                      <span className="text-gray-400 text-sm">Experience</span>
                    </div>
                    <p className="text-white text-sm">{faculty.experience}</p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 border-t border-gray-700 pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300 truncate">{faculty.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{faculty.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{faculty.office}</span>
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
