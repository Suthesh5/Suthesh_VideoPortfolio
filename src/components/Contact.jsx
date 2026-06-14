import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioConfig } from '../portfolioConfig';

const Contact = () => {
  const ref = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const userMessage = document.getElementById('message')?.value.trim();
    const defaultMessage = "Hello! I saw your portfolio and would like to connect.";
    const textToPass = userMessage ? userMessage : defaultMessage;
    const phone = portfolioConfig.contact.phone.replace(/\D/g, '');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(textToPass)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const subject = document.getElementById('subject')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    const permission = document.getElementById('permission')?.checked;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields (Name, Email, Subject, and Message).");
      return;
    }
    if (!permission) {
      alert("Please check the permission box to allow contact.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${portfolioConfig.contact.email}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            subject,
            message
        })
      });
      
      if (response.ok) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        e.target.reset();
      } else {
        alert("Oops! Something went wrong while sending your message. Please try again later.");
      }
    } catch {
      alert("Oops! Something went wrong. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900 scroll-mt-[59px] bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Ambient Moving Blobs (Overall portfolio color scheme: Red, White, Dark) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#ff2a2a]/10 rounded-full filter blur-[90px] md:blur-[130px] animate-blob-1"></div>
        <div className="absolute bottom-1/4 right-10 w-[300px] md:w-[550px] h-[300px] md:h-[550px] bg-white/5 rounded-full filter blur-[90px] md:blur-[130px] animate-blob-2"></div>
        <div className="absolute top-1/2 left-1/3 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#9a1a1a]/8 rounded-full filter blur-[80px] md:blur-[110px] animate-blob-3"></div>
      </div>

      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-5 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-black/50 backdrop-blur-lg border border-white/10 w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between shadow-2xl rounded-none md:rounded-tl-[3rem]"
        >
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full mb-12 md:mb-16">
            <div className="flex-1">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff2a2a] mb-3">
                Reach Me
              </div>
              <div className="flex flex-col gap-1.5 font-sans">
                <a href={`mailto:${portfolioConfig.contact.email}?subject=Portfolio Contact`} className="text-lg md:text-xl font-black hover:underline decoration-[#ff2a2a] hover:text-[#ff2a2a] transition-colors break-all">{portfolioConfig.contact.email}</a>
                <span 
                  onClick={handleWhatsAppClick}
                  className="text-sm md:text-base font-bold text-white/90 cursor-pointer hover:underline decoration-[#ff2a2a] hover:text-[#ff2a2a] transition-colors"
                >
                  {portfolioConfig.contact.phone}
                </span>
                <span className="text-xs md:text-sm font-semibold text-white/70">{portfolioConfig.contact.location}</span>
              </div>
            </div>
            <div className="flex-1 -translate-x-[5px]">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff2a2a] mb-3">
                Social Link
              </div>
              <div className="font-sans">
                <a 
                  href={`https://${portfolioConfig.contact.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg md:text-xl font-black hover:underline decoration-[#ff2a2a] hover:text-[#ff2a2a] transition-colors flex items-center gap-1.5"
                >
                  {portfolioConfig.contact.linkedin}
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Subject" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    placeholder="Type your message here" 
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "#ff2a2a" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For information on how to unsubscribe, please review our <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
                  </p>
                  
                  <div className="flex items-center gap-4 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="p-3 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center"
                      title="Send via WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send'}
                      {!isSubmitting && (
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
