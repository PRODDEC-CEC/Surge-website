import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Award, BookOpen, Users, ExternalLink, Star, ChevronRight } from 'lucide-react';
import Footer from '../Sections/footer';
import { collection, getDocs, query, limit, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed

const FacultiesPage = () => {
  const [faculties, setFaculties] = useState([]);
  const [filteredFaculties, setFilteredFaculties] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchFaculties() {
      try {
        const facultiesCol = collection(db, "faculties"); // your Firestore collection
        const snapshot = await getDocs(facultiesCol);

        const facultiesList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFaculties(facultiesList);
        setFilteredFaculties(facultiesList);
      } catch (error) {
        console.error("Error fetching faculties:", error);
      }
    }
    fetchFaculties();
  }, []);

  // Filter faculties based on search and specialization
  useEffect(() => {
    let filtered = faculties;

    if (selectedSpecialization !== 'All') {
      filtered = filtered.filter(faculty => 
        faculty.specialization && faculty.specialization.includes(selectedSpecialization)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(faculty =>
        faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredFaculties(filtered);
  }, [faculties, selectedSpecialization, searchTerm]);

  // Get unique specializations for filter
  const specializations = ['All', ...new Set(faculties.map(faculty => faculty.specialization))];

  if (faculties.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="relative">
          {/* Background elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-red-500/8 rounded-full blur-xl animate-pulse delay-700"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-white text-xl font-light">Loading our distinguished faculty...</p>
            <p className="text-gray-400 text-sm mt-2">Please wait while we gather the information</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Enhanced Hero Header */}
      <header className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-500/8 rounded-full blur-xl animate-pulse delay-700"></div>
        
        <div className="relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-red-500/20 rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-red-500/20 rounded-br-lg"></div>
            
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white drop-shadow-lg">Our</span>{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">Faculty</span>
              </h1>
              
              {/* Decorative underline */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
              </div>
              
              <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
                Meet our world-class faculty members who are shaping the future of electrical engineering through 
                <span className="text-red-400 font-medium"> innovation</span>, 
                <span className="text-red-400 font-medium"> research</span>, and 
                <span className="text-red-400 font-medium"> excellence</span>.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                <div className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500">{faculties.length}+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Expert Faculty</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500">500+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Research Papers</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500">20+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Specializations</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500">1000+</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Students Guided</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Search and Filter Section */}
      <section className="relative py-8 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-900/70 via-black/80 to-gray-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search faculty by name, designation, or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-black/50 border border-gray-700 hover:border-red-500/50 focus:border-red-500 rounded-xl px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 focus:outline-none"
                  />
                  <div className="absolute right-3 top-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Specialization Filter */}
              <div className="lg:w-72">
                <select
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                  className="w-full bg-black/50 border border-gray-700 hover:border-red-500/50 focus:border-red-500 rounded-xl px-4 py-3 text-white transition-colors duration-300 focus:outline-none"
                >
                  {specializations.map((spec) => (
                    <option key={spec} value={spec} className="bg-gray-900">
                      {spec}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-center">
              <span className="text-gray-400 text-sm">
                Showing <span className="text-red-400 font-medium">{filteredFaculties.length}</span> faculty member{filteredFaculties.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Faculty Grid */}
      <main className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredFaculties.map((faculty, index) => (
              <div
                key={faculty.id}
                className="group relative bg-gradient-to-br from-gray-900/60 via-black/80 to-gray-900/60 backdrop-blur-sm border border-gray-800/50 hover:border-red-500/50 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Faculty Image Section */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={faculty.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"}
                    alt={faculty.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-medium">Faculty</span>
                    </div>
                  </div>

                  {/* Experience badge */}
                  {faculty.experience && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-red-500/30">
                        <span className="text-red-400 text-xs font-medium">{faculty.experience}</span>
                      </div>
                    </div>
                  )}

                  {/* Name and designation overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-red-100 transition-colors duration-300">
                      {faculty.name}
                    </h3>
                    <p className="text-red-400 text-sm font-medium">{faculty.designation}</p>
                  </div>
                </div>

                {/* Faculty Details Section */}
                <div className="p-6">
                  {/* Specialization */}
                  {faculty.specialization && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-400 text-sm font-medium">Specialization</span>
                      </div>
                      <p className="text-white text-sm leading-relaxed bg-gray-800/30 rounded-lg p-3">
                        {faculty.specialization}
                      </p>
                    </div>
                  )}

                  {/* Contact Information */}
                  <div className="space-y-3 border-t border-gray-700/50 pt-4">
                    <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-red-400" />
                      Contact Information
                    </h4>
                    
                    {faculty.email && (
                      <div className="group/contact flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200">
                        <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm truncate flex-1">{faculty.email}</span>
                        <ExternalLink className="w-3 h-3 text-gray-500 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-200" />
                      </div>
                    )}
                    
                    {faculty.phone && (
                      <div className="group/contact flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200">
                        <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{faculty.phone}</span>
                        <ExternalLink className="w-3 h-3 text-gray-500 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-200" />
                      </div>
                    )}
                    
                    {faculty.office && (
                      <div className="group/contact flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200">
                        <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{faculty.office}</span>
                        <ExternalLink className="w-3 h-3 text-gray-500 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-200" />
                      </div>
                    )}
                  </div>

                  {/* View Profile Button */}
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-500 hover:to-red-600 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                      <span>View Full Profile</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                
                {/* Corner accent */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500/20 rounded-full blur-sm group-hover:bg-red-500/40 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredFaculties.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Faculty Found</h3>
                <p className="text-gray-400 text-sm mb-6">
                  We couldn't find any faculty matching your search criteria. Try adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSpecialization('All');
                  }}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FacultiesPage;
