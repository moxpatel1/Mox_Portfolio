import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Terminal, ShieldCheck, Search } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EduPath – Full Stack Rank Predictor",
      description: "A full-stack application designed to help students predict engineering college admissions based on ACPC ranks. Features responsive UI and integrated database for college filtering.",
      tech: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
      icon: <Search className="text-secondary w-12 h-12" />,
      features: [
        "ACPC Rank Prediction Logic",
        "Responsive UI Design",
        "Form Validation",
        "College Filtering System"
      ],
      github: "https://github.com/moxpatel1",
    },
    {
      title: "Intrusion Detection System",
      description: "Machine Learning models built to classify normal and malicious network traffic. Achieved high accuracy in detecting threats through network-based data analysis.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      icon: <ShieldCheck className="text-primary w-12 h-12" />,
      features: [
        "93–95% Detection Accuracy",
        "Random Forest & SVM Models",
        "Data Preprocessing",
        "Performance Evaluation (ROC/AUC)"
      ],
      github: "https://github.com/moxpatel1",
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-white/2">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="neon-text">Portfolio</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Practical implementations of my knowledge in Full-Stack Development and Machine Learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col h-full group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Code size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <Terminal size={14} className="text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, tIndex) => (
                  <span key={tIndex} className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
