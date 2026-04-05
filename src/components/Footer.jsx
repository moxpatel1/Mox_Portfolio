import React from 'react';
import { Code, ExternalLink, Cpu, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10 glass mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Cpu className="text-primary w-6 h-6" />
          <span className="text-xl font-bold neon-text uppercase tracking-wider">Mox Patel</span>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
            <a 
              href="https://github.com/moxpatel1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <Code size={24} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-all duration-300 transform hover:scale-110"
            >
              <ExternalLink size={24} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <ExternalLink size={24} />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with <Heart size={14} className="text-red-500 animate-pulse" /> by Mox Patel © {currentYear}
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-[10px] text-gray-700 uppercase tracking-[0.2em]">
          AI & Machine Learning • Full Stack Development • Adani University
        </p>
      </div>
    </footer>
  );
};

export default Footer;
