import { useState, useEffect } from 'react';
import { portfolioConfig } from '../portfolioConfig';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Track active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250; // offset for detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        } else if (section === 'home' && window.scrollY < 200) {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isOpen 
          ? 'bg-[#ff2a2a] border-transparent py-4'
          : (activeSection !== 'home')
            ? 'bg-black/50 backdrop-blur-md border-white/10 py-4 shadow-lg' 
            : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#" className="text-white text-xl md:text-2xl font-black tracking-tight hover:scale-105 transition-transform">
            {portfolioConfig.name}<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            const activeTextColor = 'text-[#ff2a2a]';
            const activeLineColor = 'bg-[#ff2a2a]';
            const hoverLineColor = 'bg-[#ff2a2a]';
            
            return (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className={`font-semibold text-xs tracking-wider uppercase relative group transition-colors duration-300 ${
                  isActive ? activeTextColor : 'text-white/80 hover:text-white'
                }`}
              >
                {link}
                {/* Underline effect */}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 transition-all duration-300 ${isActive ? `w-full ${activeLineColor}` : `w-0 ${hoverLineColor} group-hover:w-full`}`}></span>
              </a>
            );
          })}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-white font-bold text-xs tracking-wider uppercase hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-md"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#ff2a2a]/95 backdrop-blur-md shadow-2xl border-t border-white/10' : 'max-h-0 opacity-0 bg-transparent pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`font-bold text-lg border-b border-white/10 pb-2 transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-white hover:text-black'
                }`}
              >
                {link}
              </a>
            );
          })}
          <div className="pt-4 pb-2">
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
