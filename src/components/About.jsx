import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white/2 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="neon-text">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-4">
              Passionate Computer Science Student & <span className="text-primary italic">AI Enthusiast</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a 5th-semester B.Tech student at Adani University, specializing in Artificial Intelligence and Machine Learning. 
              My journey is driven by a deep fascination with how AI can transform the world, from predictive analytics 
              to full-stack web solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I actively leverage AI-assisted development tools to accelerate coding, debugging, and software design 
              while maintaining strong problem-solving and programming fundamentals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-primary" />
                <span>Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-primary" />
                <span>patelmox25@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <GraduationCap className="text-primary" />
                <span>B.Tech CSE (AI & ML)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <User className="text-primary" />
                <span>Available for Internships</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card relative z-10 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-3xl font-bold text-primary mb-1">7.30</h4>
                  <p className="text-sm text-gray-400 font-medium">Current GPA</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-3xl font-bold text-secondary mb-1">10+</h4>
                  <p className="text-sm text-gray-400 font-medium">Projects Done</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-3xl font-bold text-secondary mb-1">5+</h4>
                  <p className="text-sm text-gray-400 font-medium">Certifications</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-3xl font-bold text-primary mb-1">2+</h4>
                  <p className="text-sm text-gray-400 font-medium">Years Coding</p>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-between p-4 rounded-xl border border-primary/20 bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Actively learning TensorFlow & AWS</span>
                </div>
              </div>
            </div>
            
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full scale-75"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
