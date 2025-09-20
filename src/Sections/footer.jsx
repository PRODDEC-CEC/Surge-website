import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="relative bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl py-16 mt-20 border-t border-red-900/30 overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-transparent"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-500/8 rounded-full blur-xl animate-pulse delay-700"></div>
        
        {/* Decorative corner elements
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-red-500/20 rounded-tl-lg"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-red-500/20 rounded-br-lg"></div> */}
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* SURGE Brand Section */}
            <div className="text-center md:text-center">
              <div className="relative inline-block mb-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-red-500 drop-shadow-lg">SURGE</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-sm mx-auto md:mx-0">
                Empowering the next generation of electrical engineers through innovation and collaboration.
              </p>
              <div className="flex justify-center md:justify-center items-center space-x-6">
                {/* <a 
                  href="#" 
                  className="group relative text-red-500 hover:text-red-300 transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on Twitter"
                >
                  <div className="absolute inset-0 bg-red-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <svg className="relative w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a> */}
                <a 
                  href="https://www.instagram.com/surge_cec" 
                  className="group relative text-red-500 hover:text-red-300 transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <div className="absolute inset-0 bg-red-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <svg fill="currentColor" width="48px" height="48px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/></svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/surge-cec/" 
                  className="group relative text-red-500 hover:text-red-300 transition-all duration-300 transform hover:scale-110"
                  aria-label="Connect with us on LinkedIn"
                >
                  <div className="absolute inset-0 bg-red-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <svg className="relative w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links Section */}
            <div className="text-center md:text-center">
              <div className="relative inline-block mb-6">
                <h4 className="text-xl font-semibold text-white mb-2">Quick Links</h4>
              </div>
              <ul className="space-y-3">
                {['About', 'Events', 'Committee', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="group relative text-gray-400 hover:text-red-400 transition-all duration-300 inline-block"
                    >
                      <span className="relative z-10">{link}</span>
                      <div className="absolute inset-0 bg-red-500/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-2 -my-1"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info Section */}
            <div className="text-center md:text-center">
              <div className="relative inline-block mb-6">
                <h4 className="text-xl font-semibold text-white mb-2">Contact Info</h4>
              </div>
              <div className="space-y-3 text-gray-400 flex flex-col items-center md:items-center">
                <div className="group flex items-center justify-center md:justify-start gap-3 hover:text-red-400 transition-colors duration-300">
                  <span className="text-lg">📧</span>
                  <span>surge@ceconline.edu</span>
                </div>
                <div className="group flex items-center justify-center md:justify-start gap-3 hover:text-red-400 transition-colors duration-300">
                  <span className="text-lg">📞</span>
                  <span>Raju M:+91 9747405790</span>
                </div>
                <div className="group flex items-center justify-center md:justify-start gap-3 hover:text-red-400 transition-colors duration-300">
                  <span className="text-lg">📞</span>
                  <span>Sharon:+91 9747959902</span>
                </div>
                <div className="group flex items-center justify-center md:justify-start gap-3 hover:text-red-400 transition-colors duration-300">
                  <span className="text-lg">📞</span>
                  <span>Gayatri:+91 6238453639</span>
                </div>
                <div className="group flex justify-center md:justify-start gap-3 hover:text-red-400 transition-colors duration-300">
                  <span className="text-lg">📍</span>
                  <span>EE Department, College of Engineering Chengannur</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Footer Bottom */}
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
            <div className="pt-8 text-center">
              <div className="mb-4">
                <p className="text-gray-400 text-base mb-2">&copy; 2025 SURGE. All Rights Reserved.</p>
                <p className="text-sm text-gray-500 font-light">Crafted with ❤️ by <span className='text-yellow-500 cursor-pointer'>PRODDEC CEC</span></p>
              </div>
              
              {/* Additional elegant touch */}
              <div className="flex justify-center">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer



