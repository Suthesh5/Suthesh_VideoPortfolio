import React from 'react';
import { motion, useScroll, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { portfolioConfig } from '../portfolioConfig';

const SKILL_ICONS = {
  'java': (
    <svg className="w-8 h-8 text-[#ea2d2e] fill-current" viewBox="0 0 24 24">
      <path d="M2 15.5C2 17.5 3.5 19 5.5 19h10c2 0 3.5-1.5 3.5-3.5V9H2v6.5zm16-5.5h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2V10zM5 21h11v-1.5H5V21zm3.5-14c.3-1 .8-1.5 1.5-2S11.5 4 11.5 3v1c0 .5-.3 1-.8 1.5s-1.2.8-1.2 1.5H8.5z"/>
    </svg>
  ),
  'html': (
    <svg className="w-8 h-8 text-[#E34F26] fill-current" viewBox="0 0 24 24">
      <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0zm16.5 6.2H7.2l.2 2.6H18l-.6 6.8-5.4 1.5-5.4-1.5-.4-4.1h2.6l.2 1.8 3 .8 3-.8.3-3H4.6L5 3.6h13.5l-.5 2.6z" />
    </svg>
  ),
  'css': (
    <svg className="w-8 h-8 text-[#1572B6] fill-current" viewBox="0 0 24 24">
      <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0zm16.5 6.2H9.7l.2 2.6h8.1l-.6 6.8-5.4 1.5-5.4-1.5-.4-4.1H5.2l.4 4.7 6.4 1.7 6.4-1.7.6-7.1H7l-.2-2.6h11.6l-.4 2.6z" />
    </svg>
  ),
  'javascript': (
    <svg className="w-8 h-8 text-[#F7DF1E] fill-current bg-black rounded" viewBox="0 0 24 24">
      <path d="M24 0H0v24h24V0zM11.9 17c0 1.9-1.2 3.1-3.2 3.1-1.7 0-2.8-.9-3.2-2.2l2.3-1.3c.3.7.6 1.1 1.1 1.1.5 0 .8-.3.8-.8v-7.1h2.2V17zm7.5.1c0 1.7-1.1 3-3 3-1.7 0-2.7-.9-3.2-2.1l2.2-1.3c.3.6.6 1 1 1 .4 0 .7-.2.7-.6 0-.4-.3-.6-.9-1.1l-.8-.7c-1.3-1.1-1.9-2-1.9-3.4 0-1.7 1.2-2.9 2.9-2.9 1.4 0 2.4.7 2.9 1.8l-2.1 1.3c-.3-.5-.5-.7-.8-.7-.3 0-.5.2-.5.5 0 .3.2.5.7.9l.8.7c1.5 1.3 2.1 2.1 2.1 3.5v.4z"/>
    </svg>
  ),
  'react js': (
    <svg className="w-8 h-8 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  'sql': (
    <svg className="w-8 h-8 text-[#336791]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor" fillOpacity="0.2" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  'vs code': (
    <svg className="w-8 h-8 text-[#007ACC] fill-current" viewBox="0 0 24 24">
      <path d="M23.984 6.942a.5.5 0 0 0-.256-.43L18.1.488a.5.5 0 0 0-.69.214l-4.755 8.947-4.148-3.32a.5.5 0 0 0-.64.015L.324 12.3a.5.5 0 0 0-.012.756l7.587 6.136a.5.5 0 0 0 .636-.008l4.195-3.354 4.793 9.025a.5.5 0 0 0 .692.21l5.584-3.042a.5.5 0 0 0 .262-.438V7.07a.5.5 0 0 0-.077-.128zm-8.878 5.06l-4.13-3.23 3.633-6.83 4.298 2.34-3.801 7.72z" />
    </svg>
  ),
  'mysql': (
    <svg className="w-8 h-8 text-[#00758F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor" fillOpacity="0.2" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      <path d="M3 17v4c0 1.66 4 3 9 3s9-1.34 9-3v-4" />
    </svg>
  ),
  'google maps': (
    <svg className="w-8 h-8 text-[#ea4335] fill-current" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  ),
  'git': (
    <svg className="w-8 h-8 text-[#F05032] fill-current" viewBox="0 0 24 24">
      <path d="M23.3 10.9L13.1.7c-.9-.9-2.5-.9-3.4 0L7.4 3c-.1-.1-.2-.2-.4-.2-1 0-1.8.8-1.8 1.8 0 .4.1.8.4 1.1L2.9 8.4c-.3-.3-.7-.4-1.1-.4-1 0-1.8.8-1.8 1.8 0 1 .8 1.8 1.8 1.8.4 0 .8-.1 1.1-.4l2.7 2.7c-.3.3-.4.7-.4 1.1 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.4-.1-.8-.4-1.1l2.7-2.7c.3.3.7.4 1.1.4 1 0 1.8-.8 1.8-1.8 0-.4-.1-.8-.4-1.1L23.3 14.3c.9-.9.9-2.5 0-3.4zM7 16.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm0-9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm6.5 4.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
    </svg>
  )
};

const SKILL_DETAILS = {
  'java': { name: 'Java', color: 'hover:shadow-[0_15px_30px_rgba(234,45,46,0.15)] border-white/10 hover:border-[#ea2d2e]/40', iconGlow: 'group-hover:bg-[#ea2d2e]/10' },
  'html': { name: 'HTML', color: 'hover:shadow-[0_15px_30px_rgba(227,79,38,0.15)] border-white/10 hover:border-[#E34F26]/40', iconGlow: 'group-hover:bg-[#E34F26]/10' },
  'css': { name: 'CSS', color: 'hover:shadow-[0_15px_30px_rgba(21,114,182,0.15)] border-white/10 hover:border-[#1572B6]/40', iconGlow: 'group-hover:bg-[#1572B6]/10' },
  'javascript': { name: 'JavaScript', color: 'hover:shadow-[0_15px_30px_rgba(247,223,30,0.12)] border-white/10 hover:border-[#F7DF1E]/50', iconGlow: 'group-hover:bg-[#F7DF1E]/10' },
  'react js': { name: 'React Js', color: 'hover:shadow-[0_15px_30px_rgba(97,218,251,0.2)] border-white/10 hover:border-[#61DAFB]/50', iconGlow: 'group-hover:bg-[#61DAFB]/10' },
  'sql': { name: 'SQL', color: 'hover:shadow-[0_15px_30px_rgba(51,103,145,0.15)] border-white/10 hover:border-[#336791]/40', iconGlow: 'group-hover:bg-[#336791]/10' },
  'vs code': { name: 'VS Code', color: 'hover:shadow-[0_15px_30px_rgba(0,122,204,0.15)] border-white/10 hover:border-[#007ACC]/40', iconGlow: 'group-hover:bg-[#007ACC]/10' },
  'mysql': { name: 'MySQL', color: 'hover:shadow-[0_15px_30px_rgba(0,117,143,0.15)] border-white/10 hover:border-[#00758F]/40', iconGlow: 'group-hover:bg-[#00758F]/10' },
  'google maps': { name: 'Google Maps', color: 'hover:shadow-[0_15px_30px_rgba(234,67,53,0.15)] border-white/10 hover:border-[#ea4335]/40', iconGlow: 'group-hover:bg-[#ea4335]/10' },
  'git': { name: 'Git', color: 'hover:shadow-[0_15px_30px_rgba(240,80,50,0.15)] border-white/10 hover:border-[#F05032]/40', iconGlow: 'group-hover:bg-[#F05032]/10' }
};

const getIconHoverAnimation = (key) => {
  switch (key) {
    case 'react js':
      return {
        rotate: 360,
        transition: { repeat: Infinity, duration: 2, ease: "linear" }
      };
    case 'java':
      return {
        y: [0, -8, 0],
        transition: { repeat: Infinity, duration: 0.6, ease: "easeInOut" }
      };
    case 'javascript':
      return {
        rotate: [-6, 6, -6],
        transition: { repeat: Infinity, duration: 0.4, ease: "easeInOut" }
      };
    case 'git':
      return {
        x: [-2, 2, -2],
        y: [-1, 1, -1],
        transition: { repeat: Infinity, duration: 0.15, ease: "easeInOut" }
      };
    case 'google maps':
      return {
        y: [0, -10, 0],
        scale: [1, 1.15, 1],
        transition: { repeat: Infinity, duration: 0.8, ease: "easeInOut" }
      };
    case 'html':
    case 'css':
      return {
        scale: [1, 1.12, 1],
        transition: { repeat: Infinity, duration: 0.9, ease: "easeInOut" }
      };
    case 'vs code':
      return {
        rotate: 15,
        scale: 1.15,
        transition: { duration: 0.3 }
      };
    case 'sql':
    case 'mysql':
      return {
        y: [0, -5, 0],
        transition: { repeat: Infinity, duration: 0.7, ease: "easeInOut" }
      };
    default:
      return {
        scale: 1.15,
        transition: { duration: 0.3 }
      };
  }
};

const getIconVariants = (key) => {
  const baseIdle = { scale: 1, rotate: 0, x: 0, y: 0 };
  
  if (key === 'react js') {
    return {
      idle: {
        rotate: 360,
        transition: { repeat: Infinity, duration: 10, ease: "linear" }
      },
      hover: {
        rotate: 360,
        transition: { repeat: Infinity, duration: 2, ease: "linear" }
      }
    };
  }
  
  return {
    idle: baseIdle,
    hover: getIconHoverAnimation(key)
  };
};

const Skills = ({ sectionRef }) => {
  // Mouse tracking for parallax blobs/spheres
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [explosions, setExplosions] = React.useState([]);
  const [lightningFlash, setLightningFlash] = React.useState(false);
  
  const [activeShapes, setActiveShapes] = React.useState({
    shape1: false,
    shape2: false,
    shape3: false,
    shape5: false,
  });

  const triggerExplosion = (e, color, shapeKey) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const newParticles = Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 22.5 * Math.PI) / 180 + (Math.random() - 0.5) * 0.2;
      const distance = 90 + Math.random() * 80;
      return {
        id: Date.now() + i + Math.random(),
        startX: clickX,
        startY: clickY,
        endX: clickX + Math.cos(angle) * distance,
        endY: clickY + Math.sin(angle) * distance,
        color: color,
        angle: angle
      };
    });

    setExplosions((prev) => [...prev, ...newParticles]);

    // Trigger shape movement state
    if (shapeKey) {
      setActiveShapes((prev) => ({ ...prev, [shapeKey]: true }));
      setTimeout(() => {
        setActiveShapes((prev) => ({ ...prev, [shapeKey]: false }));
      }, 1200);
    }

    // Trigger double lightning camera flash
    setLightningFlash(true);
    setTimeout(() => {
      setLightningFlash(false);
    }, 50);
    setTimeout(() => {
      setLightningFlash(true);
      setTimeout(() => {
        setLightningFlash(false);
      }, 100);
    }, 120);
  };

  const springConfig = { stiffness: 60, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax shifts for floating objects
  const drift1X = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
  const drift1Y = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);

  const drift2X = useTransform(smoothX, [-0.5, 0.5], [60, -60]);
  const drift2Y = useTransform(smoothY, [-0.5, 0.5], [60, -60]);

  const drift3X = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const drift3Y = useTransform(smoothY, [-0.5, 0.5], [50, -50]);


  // Page scroll progress for background "SKILLS" word (matching Contact.jsx)
  const { scrollYProgress: sectionScrollY } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(sectionScrollY, [0, 1], ["-25%", "25%"]);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-black pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-16 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      
      {/* 1. Ambient Moving Blobs (behind overlay) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 -right-32 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-white/5 rounded-full filter blur-[120px] md:blur-[180px] animate-blob-2"></div>

        {/* Giant Floating Coder Symbols/Keywords */}
        <div className="absolute top-[8%] left-[8%] text-white/5 text-6xl md:text-8xl font-sans select-none animate-blob-1">JAVA</div>
        <div className="absolute top-[45%] left-[2%] text-white/5 text-8xl md:text-[9rem] font-mono select-none animate-blob-2" style={{ animationDelay: '2s' }}>&lt;&gt;</div>
        <div className="absolute top-[20%] right-[5%] text-white/5 text-7xl md:text-[8rem] font-sans select-none animate-blob-3" style={{ animationDelay: '4s' }}>React</div>
        <div className="absolute top-[60%] right-[15%] text-white/5 text-4xl md:text-5xl font-mono select-none animate-blob-1" style={{ animationDelay: '1.5s' }}>useState</div>
        <div className="absolute top-[12%] left-[40%] text-white/5 text-3xl md:text-4xl font-mono select-none animate-blob-2" style={{ animationDelay: '3s' }}>useEffect</div>
        <div className="absolute bottom-[8%] left-[25%] text-white/5 text-5xl md:text-7xl font-mono select-none animate-blob-3" style={{ animationDelay: '5s' }}>class</div>
        <div className="absolute bottom-[25%] right-[35%] text-white/5 text-4xl md:text-5xl font-mono select-none animate-blob-1" style={{ animationDelay: '2.5s' }}>return</div>
        <div className="absolute top-[35%] left-[20%] text-white/5 text-2xl md:text-3xl font-mono select-none animate-blob-3" style={{ animationDelay: '1s' }}>async</div>
        <div className="absolute bottom-[15%] right-[5%] text-white/5 text-6xl md:text-8xl font-mono select-none animate-blob-2" style={{ animationDelay: '4.5s' }}>[]</div>
        <div className="absolute top-[70%] left-[45%] text-white/5 text-5xl md:text-6xl font-mono select-none animate-blob-1" style={{ animationDelay: '3.5s' }}>{"{}"}</div>
      </div>
 
      {/* 2. Parallax Scrolling Background Word (Matching Contact.jsx style) */}
      <motion.div 
        style={{ y: textY }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-5 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white opacity-[0.06] uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          SKILLS
        </h1>
      </motion.div>

      {/* 3. Translucent Background Glass Overlay (Blurs elements below it) */}
      <div className="absolute inset-0 z-10 bg-black/45 backdrop-blur-[2px] pointer-events-none"></div>

      {/* 4. Sharp Interactive Floating 3D-like Objects (Technical Oriented Designs with Lightning Effects) */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        {/* Shape 1: Electric Lightning Bolt (Top-Left) */}
        <motion.div
          style={{ x: drift1X, y: drift1Y }}
          whileTap={{ scale: 0.85 }}
          onClick={(e) => triggerExplosion(e, '#ff2a2a', 'shape1')}
          className="absolute top-[12%] left-[15%] hidden md:block pointer-events-auto cursor-pointer select-none"
        >
          <motion.div
            animate={activeShapes.shape1 ? {
              rotate: [0, -25, 20, -15, 10, -5, 0],
              scale: [1, 1.25, 0.9, 1.1, 1],
              x: [0, -12, 12, -8, 8, -4, 0]
            } : {
              y: [0, -4, 0],
              opacity: [0.7, 1, 0.7],
              rotate: [-3, 3, -3]
            }}
            transition={activeShapes.shape1 ? {
              duration: 1.2,
              ease: "easeOut"
            } : {
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-red-500/20 via-white/10 to-red-100/30 backdrop-blur-[2px] shadow-[inset_-6px_-6px_18px_rgba(255,255,255,0.4),0_0_20px_rgba(239,68,68,0.4)] border border-white/20 flex items-center justify-center"
          >
            <svg className="w-12 h-12 text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Shape 2: Tesla Energy Orb (Middle-Right) */}
        <motion.div
          style={{ x: drift2X, y: drift2Y }}
          whileTap={{ scale: 0.85 }}
          onClick={(e) => triggerExplosion(e, '#ffffff', 'shape2')}
          className="absolute top-[40%] right-[8%] hidden md:block pointer-events-auto cursor-pointer select-none"
        >
          <motion.div
            animate={activeShapes.shape2 ? {
              rotate: [0, 360],
              scale: [1, 1.3, 0.8, 1.15, 1],
              boxShadow: [
                "inset -8px -8px 24px rgba(255,255,255,0.3), 0 0 15px rgba(255,255,255,0.2)",
                "inset -8px -8px 24px rgba(255,255,255,0.3), 0 0 35px rgba(255,255,255,0.6)",
                "inset -8px -8px 24px rgba(255,255,255,0.3), 0 0 15px rgba(255,255,255,0.2)"
              ]
            } : {
              y: [0, -5, 0],
              scale: [0.97, 1.03, 0.97]
            }}
            transition={activeShapes.shape2 ? {
              duration: 1.2,
              ease: "easeInOut"
            } : {
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-slate-200/5 backdrop-blur-[1px] border border-white/25 flex items-center justify-center"
          >
            {/* Pulsing Core */}
            <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center animate-pulse border border-white/40 shadow-[0_0_15px_white]">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Shape 3: Cybernetic Power Node (Bottom-Left) */}
        <motion.div
          style={{ x: drift3X, y: drift3Y }}
          whileTap={{ scale: 0.85 }}
          onClick={(e) => triggerExplosion(e, '#61DAFB', 'shape3')}
          className="absolute bottom-[15%] left-[8%] hidden md:block pointer-events-auto cursor-pointer select-none"
        >
          <motion.div
            animate={activeShapes.shape3 ? {
              y: [0, -30, 20, -10, 5, 0],
              scale: [1, 1.25, 0.9, 1]
            } : {
              y: [0, -4, 0],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={activeShapes.shape3 ? {
              duration: 1.2,
              ease: "easeInOut"
            } : {
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-400/20 via-white/10 to-blue-200/30 backdrop-blur-[2px] shadow-[inset_-6px_-6px_18px_rgba(255,255,255,0.4),0_0_20px_rgba(97,218,251,0.3)] border border-white/20 flex flex-col items-center justify-center gap-1.5"
          >
            {/* Hexagon Shield style outline with horizontal electric waves */}
            <svg className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(97,218,251,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div className="flex gap-1.5 w-12 items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: '0.3s' }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: '0.6s' }}></span>
            </div>
          </motion.div>
        </motion.div>

        {/* Shape 5: High-Voltage Silicon CPU (Center-Right) */}
        <motion.div
          style={{ x: drift3X, y: drift1Y }}
          whileTap={{ scale: 0.85 }}
          onClick={(e) => triggerExplosion(e, '#F7DF1E', 'shape5')}
          className="absolute top-[60%] right-[28%] hidden lg:block pointer-events-auto cursor-pointer select-none"
        >
          <motion.div
            animate={activeShapes.shape5 ? {
              rotate: [45, 405],
              scale: [1, 1.3, 0.9, 1]
            } : {
              y: [0, -3, 0],
              rotate: [45, 48, 42, 45],
              opacity: [0.7, 1, 0.7]
            }}
            transition={activeShapes.shape5 ? {
              duration: 1.2,
              ease: "easeOut"
            } : {
              y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4.8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-20 h-20 bg-gradient-to-tr from-[#ff2a2a]/10 via-white/10 to-red-100/20 backdrop-blur-[2px] shadow-[inset_-6px_-6px_18px_rgba(255,255,255,0.4),0_0_20px_rgba(247,223,30,0.3)] border border-white/25 flex items-center justify-center rounded-2xl"
          >
            {/* Silicon chip with a lightning bolt symbol */}
            <svg className="w-10 h-10 text-yellow-500 drop-shadow-[0_0_10px_rgba(247,223,30,0.8)] transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <polygon points="13 7 8 13 12 13 11 17 16 11 12 11 13 7" fill="currentColor" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
 
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-white/10 text-white border border-white/15 rounded-full px-5 py-1.5 text-xs font-black mb-6 uppercase tracking-wider shadow-sm">
            Skills & Tools
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 tracking-tight flex items-center justify-center">
            <span className="text-[#ff2a2a] opacity-80 animate-pulse font-sans font-extrabold mr-1.5 sm:mr-3">&lt;</span>
            <span className="bg-gradient-to-r from-white via-[#ff2a2a] to-white bg-[size:200%_auto] bg-clip-text text-transparent animate-text-shine lowercase">
              technical stack
            </span>
            <span className="text-[#ff2a2a] opacity-80 animate-pulse font-sans font-extrabold ml-1.5 sm:mr-3">&nbsp;/&gt;</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            The programming languages, libraries, databases, and development systems I use to build clean, efficient software.
          </p>
        </div>
 
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {portfolioConfig.skills.map((skill, index) => {
            const key = skill.toLowerCase();
            const detail = SKILL_DETAILS[key] || { 
              name: skill, 
              color: '', 
              iconGlow: 'group-hover:bg-white/10' 
            };
            const icon = SKILL_ICONS[key];
            
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                className="perspective-[1000px]"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ 
                    duration: 4.5 + (index % 3) * 0.7, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: index * 0.1 
                  }}
                  whileHover="hover"
                  variants={{
                    idle: { y: 0 },
                    hover: { 
                      scale: 1.06, 
                      y: -12,
                      rotateX: -4,
                      rotateY: 4,
                      transition: { duration: 0.25, ease: "easeOut" }
                    }
                  }}
                  className="relative p-[1.5px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#ff2a2a] via-black to-[#ff2a2a] bg-[size:200%_auto] animate-[text-shine_8s_linear_infinite] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:shadow-[0_20px_45px_rgba(255,42,42,0.25)] transition-all duration-500 group cursor-default"
                >
                  <div className="bg-[#0a0a0a]/95 backdrop-blur-lg rounded-[15px] p-6 flex flex-col items-center justify-center text-center gap-4 w-full h-full relative z-10 bg-gradient-to-r from-[#0a0a0a] via-[#ff2a2a]/2 to-[#0a0a0a] bg-[size:200%_auto] animate-[text-shine_10s_linear_infinite]">
                    {/* Radial gradient background card sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <motion.div 
                      variants={getIconVariants(key)}
                      initial="idle"
                      animate="idle"
                      className={`w-14 h-14 rounded-xl bg-white/[0.05] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-inner z-10 ${detail.iconGlow}`}
                    >
                      {icon}
                    </motion.div>
                    <span className="text-white/70 font-extrabold text-sm tracking-wide transition-colors group-hover:text-white z-10">
                      {detail.name}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Attractive Wave Divider at Bottom (Transitions dark Skills to white Projects) */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20" fill="none">
          {/* Layer 1: Translucent White Glass Accent Wave */}
          <path 
            fill="rgba(255, 255, 255, 0.08)" 
            d="M0,20 C320,80 620,10 920,70 C1060,95 1160,50 1200,40 L1200,120 L0,120 Z" 
          />
          {/* Layer 2: Solid White Wave (Matches Projects Section background) */}
          <path 
            fill="#ffffff" 
            d="M0,32 C300,96 600,0 900,64 C1050,96 1150,80 1200,64 L1200,120 L0,120 Z" 
          />
        </svg>
      </div>

      {/* Particle Explosions (Jagged Lightning Sparks) */}
      {explosions.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: p.startX, y: p.startY, scaleY: 2, scaleX: 0.5, opacity: 1 }}
          animate={{ x: p.endX, y: p.endY, scaleY: 0, scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => {
            setExplosions((prev) => prev.filter((item) => item.id !== p.id));
          }}
          className="absolute w-1 h-6 rounded-full pointer-events-none z-50"
          style={{ 
            backgroundColor: p.color, 
            boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`, 
            rotate: `${(p.angle * 180) / Math.PI}deg`
          }}
        />
      ))}

      {/* Global Lightning Flash Overlay */}
      {lightningFlash && (
        <div className="absolute inset-0 bg-white/12 mix-blend-overlay pointer-events-none z-40 transition-opacity duration-75"></div>
      )}
    </section>
  );
};

export default Skills;
