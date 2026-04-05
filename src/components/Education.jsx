import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Award, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering (AI & ML)",
      institution: "Adani University, Ahmedabad, Gujarat",
      duration: "July 2023 – August 2027",
      status: "Current (5th semester)",
      grade: "GPA: 7.30 | CGPA: 6.4 / 10",
      description: "Specializing in Artificial Intelligence and Machine Learning. Focused on Data Structures, Algorithms, DBMS, and Deep Learning.",
      icon: <BookOpen className="text-primary" />,
    }
  ];

  const certifications = [
    { title: "AWS Machine Learning Essentials", issuer: "AWS Training & Certification" },
    { title: "AWS Cloud Foundation", issuer: "AWS Training & Certification" },
    { title: "YUVA AI for ALL", issuer: "National Course on AI" },
    { title: "Prompt Engineering for Everyone", issuer: "Online Course" },
    { title: "IoT-based Firefighting Robot", issuer: "Hardware Projects Award" }
  ];

  return (
    <section id="education" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Academic <span className="neon-text">Journey</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Education Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute -left-[11px] top-0 p-1 bg-dark">
                  <div className="w-5 h-5 rounded-full bg-primary shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                </div>
                
                <div className="glass-card p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-100">{item.degree}</h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Calendar size={18} />
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  </div>
                  
                  <div className="text-lg text-secondary font-medium mb-4">{item.institution}</div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                      <Star size={18} className="text-yellow-400" />
                      <span className="font-bold text-gray-200">{item.status}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                      <Award size={18} className="text-primary" />
                      <span className="font-bold text-primary">{item.grade}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="glass-card h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Award className="text-secondary" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-colors group"
                  >
                    <h4 className="font-bold text-gray-200 mb-1 group-hover:text-secondary transition-colors italic">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-500">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
