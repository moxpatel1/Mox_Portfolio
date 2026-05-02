import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Box, Database, Cpu, PieChart } from 'lucide-react';

const Skills = () => {
const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="text-primary" />,
    skills: ["Python", "JavaScript", "C"],
  },
  {
    title: "Web Development",
    icon: <Globe className="text-secondary" />,
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Flask",
    ],
  },
  {
    title: "Database & Cloud",
    icon: <Database className="text-secondary" />,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "AWS",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Libraries",
    icon: <Cpu className="text-primary" />,
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <PieChart className="text-secondary" />,
    skills: [
      "Machine Learning Pipeline",
      "Deep Learning",
      "Neural Networks",
      "Natural Language Processing (NLP)",
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "AI Agents",
      "Agentic AI",
      "Embeddings",
      "Vector Databases",
      "LangChain",
      "LangGraph",
      "Multi-Modal AI",
    ],
  },
  {
    title: "Tools",
    icon: <Box className="text-primary" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Docker",
      "Ollama",
      "Hugging Face",
      "Redis",
      "Power BI",
    ],
  },
  {
    title: "Core Concepts",
    icon: <Database className="text-secondary" />,
    skills: ["Data Structures & Algorithms", "DBMS"],
  },
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Internal <span className="neon-text">Capabilities</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A comprehensive list of technical expertise and tools I utilize to build intelligent solutions and high-performance web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
