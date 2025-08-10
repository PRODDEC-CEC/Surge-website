import {React,useState} from 'react'

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const smoothScrollTo = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsNavOpen(false);
    };
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 mx-48 flex justify-between items-center backdrop-blur-sm bg-transparent border-b-2 border-black/10">
                <a href="#hero" className="text-3xl font-extrabold text-white">
                    SURGE
                </a>
                
                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 text-lg font-normal">
                    {['about', 'events', 'committee', 'testimonials'].map((section) => (
                        <li key={section}>
                            <button
                                onClick={() => smoothScrollTo(section)}
                                className={`relative px-3 py-2 text-red-500 hover:text-red-300 transition-colors duration-300 capitalize ${
                                    activeSection === section ? 'text-red-500' : ''
                                }`}
                            >
                                {section === 'hod' ? 'HOD' : section}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left transition-transform duration-300 ${
                                    activeSection === section ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                                }`}></span>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-red-300 focus:outline-none hover:text-red-500 transition-colors duration-300"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    <div className="space-y-1">
                        <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isNavOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isNavOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                    </div>
                </button>
            </nav>

            {/* Mobile Navigation Menu */}
            {isNavOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg" onClick={() => setIsNavOpen(false)}></div>
                    <div className="relative flex flex-col items-center justify-center h-full space-y-8">
                        {['about', 'hod', 'events', 'committee', 'testimonials'].map((section, index) => (
                            <button
                                key={section}
                                onClick={() => smoothScrollTo(section)}
                                className="text-2xl font-semibold text-red-300 hover:text-red-500 transition-colors duration-300 capitalize animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {section === 'hod' ? 'HOD' : section}
                            </button>
                        ))}
                    </div>
                </div>
            )}
    </div>
  )
}

export default Navbar
