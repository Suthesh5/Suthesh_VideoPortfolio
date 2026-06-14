import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioConfig } from '../portfolioConfig';

const About = ({ skillsRef }) => {
  const { scrollYProgress: skillsScrollY } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"]
  });
  const textY = useTransform(skillsScrollY, [0, 1], ["-25%", "25%"]);

  const [isSwinging, setIsSwinging] = React.useState(false);

  const triggerSwing = () => {
    if (isSwinging) return;
    setIsSwinging(true);
    setTimeout(() => {
      setIsSwinging(false);
    }, 2500);
  };


  return (
    <section 
      id="about" 
      className="bg-white pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-16 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      
      {/* Ambient Moving Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle red/orange moving shadow blob */}
        <div className="absolute top-1/4 left-10 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#ff2a2a]/4 rounded-full filter blur-[100px] md:blur-[150px] animate-blob-1"></div>
        {/* Subtle dark moving light blob */}
        <div className="absolute bottom-1/4 right-10 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gray-200/40 rounded-full filter blur-[90px] md:blur-[130px] animate-blob-2"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0 relative h-[300px] md:h-[340px]">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full h-full">
            
            {/* Floating Wrapper that bobs the entire system up and down (positioned at the top of the About section) */}
            <div className="animate-float w-full flex flex-col items-center absolute top-[-128px] md:top-[-80px] left-0 right-0 z-20">
              
              {/* Click-to-Swing Interactive Pendulum Wrapper (pivots from the very top of the About section) */}
              <motion.div
                animate={isSwinging ? {
                  rotate: [0, -15, 11, -8, 5, -3, 1.5, 0]
                } : {}}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut"
                }}
                style={{ originX: 0.5, originY: 0 }}
                onClick={triggerSwing}
                className="flex flex-col items-center cursor-pointer select-none"
              >
                {/* Textured Rope / Lanyard strap (extends to the very top of the About page!) */}
                <div className="w-2 h-44 md:h-32 bg-[#ff2a2a] rounded-t-full shadow-inner border-x border-[#d02020] relative z-0"></div>
                
                {/* Lanyard clip */}
                <div className="w-6 h-8 bg-gray-700 rounded border border-gray-600 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.5)] -mt-1.5 flex justify-center items-end pb-1">
                  <div className="w-3 h-3 rounded-full border border-gray-500 bg-gray-800"></div>
                </div>
                
                {/* Badge Holder Card (Black) */}
                <div className="bg-black w-[280px] rounded-2xl p-4 shadow-[0_25px_50px_rgba(0,0,0,0.15)] relative z-20 border border-white/20 hover:border-white/40 transition-all duration-500 transform -rotate-3 hover:rotate-0 -mt-1">
                  {/* Cutout Hole */}
                  <div className="absolute -top-3 left-1/2 w-16 h-6 bg-black rounded-t-xl transform -translate-x-1/2 flex justify-center items-center border-t border-x border-white/20">
                    <div className="w-8 h-2 bg-gray-900 rounded-full shadow-inner"></div>
                  </div>
                  
                  {/* Polaroid Photo Frame (White) */}
                  <div className="bg-white p-3 pb-8 rounded-lg shadow-inner border border-gray-100 flex flex-col items-center">
                    {/* Image Container */}
                    <div className="w-full aspect-[3/4] overflow-hidden rounded bg-gray-50 border border-gray-100 relative">
                      <img 
                        src={portfolioConfig.profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Subtle Polaroid footer text */}
                    <div className="mt-3 text-[10px] font-mono font-bold text-gray-400 tracking-wider">
                      DEV // PORTFOLIO
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-gray-800 mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            About <span className="text-[#ff2a2a]">Me</span>
          </h2>
          <p className="text-lg font-semibold mb-8 leading-relaxed max-w-3xl text-gray-700">
            {portfolioConfig.aboutBio}
          </p>

          {/* Education Details */}
          <div className="mb-10">
            <h3 className="text-xl font-extrabold text-gray-900 mb-4 tracking-wide uppercase flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-[#ff2a2a] rounded-full"></span>
              Education
            </h3>
            <div className="space-y-4 max-w-3xl">
              {portfolioConfig.education.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.6,
                  }}
                  className="relative p-[1.5px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#ff2a2a] via-black to-[#ff2a2a] bg-[size:200%_auto] animate-[text-shine_8s_linear_infinite] shadow-[0_10px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_45px_rgba(255,42,42,0.25)] transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="p-5 rounded-[15px] bg-gradient-to-r from-black via-[#ff2a2a]/3 to-black bg-[size:200%_auto] animate-[text-shine_10s_linear_infinite] flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 w-full h-full relative z-10">
                    <div>
                      <h4 className="font-extrabold text-white text-base">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-gray-400 font-semibold mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-left sm:text-right flex sm:flex-col justify-between items-center sm:items-end w-full sm:w-auto shrink-0 gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] font-bold text-xs border border-[#ff2a2a]/20 shadow-sm">
                        {edu.score}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold font-mono">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-wide uppercase flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-[#ff2a2a] rounded-full"></span>
                Certifications
              </h3>
              <ul className="space-y-2.5">
                {portfolioConfig.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-800">
                    <span className="mt-1 text-[#ff2a2a] font-bold">✔</span>
                    <p className="text-sm font-bold leading-snug">
                      {cert.title} <br />
                      <span className="text-xs text-gray-500 font-semibold font-sans">{cert.provider}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-wide uppercase flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-[#ff2a2a] rounded-full"></span>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2.5 mt-1">
                {portfolioConfig.languages.map((lang) => (
                  <span 
                    key={lang} 
                    className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 font-bold text-xs text-gray-700 hover:bg-[#ff2a2a] hover:border-red-400 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 pointer-events-none z-30 transform translate-y-1 overflow-hidden">
        {/* Layer 1: Solid Dark Background Shape */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full absolute inset-0 z-0 pointer-events-none" fill="none">
          <path fill="#000000" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>

        {/* Layer 2: Synced scrolling background text */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-start items-center pointer-events-none z-5"
        >
          <h1 
            className="text-[25vw] leading-[0.75] font-black text-white opacity-[0.06] uppercase tracking-tighter select-none scale-y-[1.6] origin-top translate-y-[112px] md:translate-y-[160px]"
            style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          >
            SKILLS
          </h1>
        </motion.div>

        {/* Layer 3: Integrated Grid Pattern */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full absolute inset-0 z-10 pointer-events-none" fill="none">
          <defs>
            <pattern id="svg-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
            </pattern>
          </defs>
          <path fill="url(#svg-grid)" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative rotating & pulsing stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-[0.05] animate-[spin_20s_linear_infinite] pointer-events-none">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-[0.05] animate-[spin_30s_linear_infinite_reverse] pointer-events-none" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
