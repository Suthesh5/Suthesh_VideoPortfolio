import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolioConfig } from '../portfolioConfig';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
    // Video remains paused on load
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Failed to play video:", err);
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };



  const isVideo = typeof portfolioConfig.heroVideo === 'string' && 
    (portfolioConfig.heroVideo.toLowerCase().endsWith('.mp4') || 
     portfolioConfig.heroVideo.toLowerCase().endsWith('.webm') || 
     portfolioConfig.heroVideo.toLowerCase().endsWith('.ogg') ||
     portfolioConfig.heroVideo.includes('data:video'));

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Media (Video or Image) */}
      {isVideo ? (
        <video
          ref={videoRef}
          src={portfolioConfig.heroVideo}
          muted={isMuted}
          playsInline
          onEnded={() => {
            setIsPlaying(false);
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
            }
          }}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80 transition-all duration-500"
          style={{ 
            filter: 'brightness(0.7)'
          }}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img 
          src={portfolioConfig.heroVideo} 
          alt="Background" 
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60 transition-all duration-500"
          style={{ 
            filter: 'brightness(0.7)'
          }}
        />
      )}

      {/* Full-Screen Premium Transparent Dark Glossy Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 border-b border-white/10 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]"></div>

      {/* Container enclosing the text content */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:pl-16 md:pr-16 w-full flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left transition-all duration-500">
        
        {/* Text and Buttons - now resting directly on the full screen smoky overlay */}
        <div className="flex flex-col items-start w-full max-w-xl relative z-10">
          {/* Mini Terminal Container */}
          <div className="w-full max-w-[260px] bg-black/75 border border-white/10 rounded-lg overflow-hidden shadow-2xl font-mono text-[9px] text-[#22c55e] h-28 relative flex flex-col mb-6">
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-neutral-900 border-b border-white/5 shrink-0 select-none">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-[8px] text-white/40 tracking-wider">compiler.log</span>
              <span className="w-4 h-2"></span>
            </div>
            {/* Terminal Content scrolling container */}
            <div className="p-3 overflow-hidden flex-1 relative">
              <div className="animate-scroll-code flex flex-col gap-1.5 text-left whitespace-nowrap">
                <p className="text-[#a855f7]">&gt; npm run dev</p>
                <p className="text-white/60">VITE v8.0.16 ready in 340ms</p>
                <p className="text-emerald-400">✓ database connected to MySQL</p>
                <p className="text-amber-400">⚡ HMR active for index.css</p>
                <p className="text-sky-400">GET /api/projects - 200 OK</p>
                <p className="text-white/60">✓ rendering skills matrix</p>
                <p className="text-red-400">[info] code compilation complete</p>
                <p className="text-[#a855f7]">&gt; code running loops...</p>
                {/* Duplicate lines for seamless looping */}
                <p className="text-[#a855f7]">&gt; npm run dev</p>
                <p className="text-white/60">VITE v8.0.16 ready in 340ms</p>
                <p className="text-emerald-400">✓ database connected to MySQL</p>
                <p className="text-amber-400">⚡ HMR active for index.css</p>
                <p className="text-sky-400">GET /api/projects - 200 OK</p>
                <p className="text-white/60">✓ rendering skills matrix</p>
                <p className="text-red-400">[info] code compilation complete</p>
                <p className="text-[#a855f7]">&gt; code running loops...</p>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Hi, I’m <span className="text-[#ff2a2a]">{portfolioConfig.name}</span> <br /> 
            <span className="text-transparent [-webkit-text-stroke:1.2px_white]">{portfolioConfig.title}</span>
          </h1>
 
          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md leading-relaxed"
          >
            {portfolioConfig.tagline}
          </p>
 
          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a 
              href="#projects" 
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md decoration-none"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md decoration-none"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Play/Mute Video Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto z-30"
          onClick={toggleVideo}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {!isPlaying ? (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {!isPlaying ? "Play Reel" : "Pause"}
          </span>
        </div>
      </div>
 
      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none transition-all duration-500"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
