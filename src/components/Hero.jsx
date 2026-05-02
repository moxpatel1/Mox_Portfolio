import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mox_Resume.pdf';
    link.download = 'Mox_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full glass text-primary text-sm font-semibold tracking-wider uppercase border border-primary/20">
            Welcome to my Portfolio
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hi, I'm <span className="neon-text">Mox Patel</span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-3xl lg:text-4xl text-gray-400 mb-10 h-16 md:h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'CSE Student @ Adani University',
              2000,
              'AI & Machine Learning Enthusiast',
              2000,
              'Full-Stack Web Developer',
              2000,
              'Python Programmer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#projects" className="btn-primary flex items-center gap-2 group">
            View My Work
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button onClick={handleDownloadResume} className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 font-semibold group cursor-pointer">
            <Download className="w-5 h-5 text-secondary group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="https://github.com/moxpatel1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300 hover:scale-110 shadow-lg border border-white/10">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mox-patel-0a8b4a27b/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0a66c2] text-white hover:bg-[#004182] transition-all duration-300 hover:scale-110 shadow-lg shadow-[#0a66c2]/30 border border-white/10">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 mt-0.5">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-20 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
