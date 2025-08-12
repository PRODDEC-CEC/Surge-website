import React from 'react';
import Footer from './footer';
 
function LearnMorePage({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <section id="learn-more" className="relative py-20 sm:py-32 overflow-hidden">
        {/* Sophisticated background elements, matching AboutSection */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-red-500/8 rounded-full blur-xl animate-pulse delay-700"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Enhanced header for Learn More page */}
          <div className="text-center mb-16 sm:mb-28">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-red-500 drop-shadow-lg">Discover</span>{' '}
                <span className="text-white drop-shadow-lg">SURGE</span>
              </h1>
              {/* Decorative underline, matching AboutSection */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
            </div>
            <p className="text-gray-400 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              Dive deeper into the mission, vision, and achievements of SURGE.
            </p>
          </div>

          <div className="relative bg-black/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-white/10">
            {/* Elegant corner decorations, matching AboutSection */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-red-500/20 rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-500/20 rounded-br-lg"></div>

            <div className="space-y-12">
              {/* Introduction section */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  Surge is a forum associated with the Electrical Department of College of Engineering Chengannur registered under KTU, aimed at uplifting the students technically in every way.
                  Surge incorporates its members with all the new innovative technologies, promote and implement their ideas and for bringing out the best in the electrical engineering field.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  As a part of its technical activities, many sessions such as workshops, seminars, orientation classes, etc., were held to nurture the budding engineers.
                </p>
              </div>

              {/* Mission section */}
              <div>
                <h2 className="text-3xl font-bold text-red-500 mb-4">Our Mission</h2>
                <div className="space-y-4 text-gray-300 text-lg md:text-xl leading-relaxed font-light pl-4 border-l-2 border-red-600">
                  <p>• To bridge the gap between academics and industry by providing its members opportunities to explore new technologies.</p>
                  <p>• To make its members skilled and well-trained to solve technology related problems.</p>
                </div>
              </div>

              {/* Vision section */}
              <div>
                <h2 className="text-3xl font-bold text-red-500 mb-4">Our Vision</h2>
                <div className="space-y-4 text-gray-300 text-lg md:text-xl leading-relaxed font-light pl-4 border-l-2 border-red-600">
                  <p>To become the pioneer in making Electrical and Electronics Engineering students professionally competent, thereby becoming remarkable in the field of Electrical Engineering.</p>
                </div>
              </div>

              {/* Awards and Nominations section */}
              <div>
                <h2 className="text-3xl font-bold text-red-500 mb-4">Awards and Nominations</h2>
                <div className="space-y-4 text-gray-300 text-lg md:text-xl leading-relaxed font-light pl-4 border-l-2 border-red-600">
                  <p>
                    Kerala recently faced its worst flooding in nearly a century and Chengannur was one of the most affected areas with a large number of refugees. In collaboration with KSEB, the monumental task of restoring basic lighting and power supply to all homes was completed by the project named "Mission Reconnect" in which Surge members got an opportunity to become part of the state-wide rehabilitation.
                  </p>
                  <p>
                    Teams from SURGE CEC, as a part of Rebuild Kerala Project during the flood times visited nearby houses and tested its electrical wirings. For this, the Kerala State Electrical Board awarded SURGE CEC with a momento in recognition of their efforts.
                  </p>
                  <p>
                    Surge provides a perfect platform for those who are inclined to achieve a deeper understanding of engineering processes and to become a good quality Engineer.
                  </p>
                </div>
              </div>

              {/* Back button */}
              <div className="text-center pt-8">
                <button
                  onClick={onBack} // This function would typically handle navigation back to the previous page
                  className="group relative inline-flex items-center bg-red-700 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative mr-2 font-medium">Back to About</span>
                  <svg
                    className="relative w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default LearnMorePage;
