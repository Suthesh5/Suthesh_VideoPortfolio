import { portfolioConfig } from '../portfolioConfig';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-[#d4d4d4] py-16 px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest min-h-[50vh] bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* 1. Translucent Background Glass Overlay (Blurs elements below it) */}
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-md border-t border-white/5 pointer-events-none"></div>

      {/* 2. Floating Background Objects (Sit under the transparent blurred layer) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large red background glow blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-[#ff2a2a]/6 rounded-full filter blur-[100px] md:blur-[150px] animate-blob-3"></div>
        
        {/* Giant Floating Developer Symbols */}
        <div className="absolute top-[10%] left-[5%] text-white/10 text-9xl md:text-[14rem] font-sans select-none animate-blob-1">&lt;/&gt;</div>
        <div className="absolute top-[55%] left-[20%] text-[#ff2a2a]/10 text-8xl md:text-[12rem] font-mono select-none animate-blob-2" style={{ animationDelay: '2s' }}>&#123;&#125;</div>
        <div className="absolute top-[25%] right-[10%] text-white/10 text-8xl md:text-[11rem] font-mono select-none animate-blob-3" style={{ animationDelay: '4s' }}>[]</div>
        <div className="absolute top-[65%] right-[22%] text-[#ff2a2a]/8 text-4xl md:text-6xl font-mono select-none animate-blob-1" style={{ animationDelay: '1.5s' }}>const</div>
        <div className="absolute top-[5%] left-[38%] text-white/8 text-3xl md:text-5xl font-mono select-none animate-blob-2" style={{ animationDelay: '3s' }}>import</div>
        <div className="absolute bottom-[10%] left-[42%] text-[#ff2a2a]/8 text-7xl md:text-[10rem] font-mono select-none animate-blob-3" style={{ animationDelay: '5s' }}>=&gt;</div>
        <div className="absolute top-[40%] left-[12%] text-[#ff2a2a]/6 text-2xl md:text-4xl font-mono select-none animate-blob-1" style={{ animationDelay: '2.5s' }}>npm run dev</div>
        <div className="absolute bottom-[30%] right-[30%] text-white/6 text-2xl md:text-4xl font-mono select-none animate-blob-2" style={{ animationDelay: '4.5s' }}>git commit</div>
      </div>

      {/* 3. Footer Content (Crisp, above blurred layer) */}
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium relative z-20">
        <div className="flex flex-col gap-1">
          <p>Software Engineering & Web Development</p>
          <p>React JS, Databases, & Full-Stack Solutions</p>
          <p>IoT & Systems Integration</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>Innovative Tech Graduate</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1 font-bold">View Work</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Worldwide Available</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text - Animated Name with React Component brackets and shine effect */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden relative z-20">
        <h2 className="text-[14vw] md:text-[10vw] leading-none font-sans font-black tracking-tighter select-none text-center flex items-center justify-center hover:scale-105 transition-transform duration-500">
          <span className="text-[#ff2a2a] opacity-80 animate-pulse font-sans font-extrabold mr-1 sm:mr-3">&lt;</span>
          <span className="bg-gradient-to-r from-white via-[#ff2a2a] to-white bg-[size:200%_auto] bg-clip-text text-transparent animate-text-shine">
            Suthesh
          </span>
          <span className="text-[#ff2a2a] opacity-80 animate-pulse font-sans font-extrabold ml-1 sm:mr-3">&nbsp;/&gt;</span>
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium relative z-20">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} {portfolioConfig.name} | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href={`mailto:${portfolioConfig.contact.email}`} className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">{portfolioConfig.contact.email}</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
