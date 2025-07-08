import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'serious' | 'fun'>('serious');
  const sectionRef = useScrollAnimation();

  const seriousProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team analytics.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with interactive charts, real-time data visualization, and reporting.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  const funProjects = [
    {
      title: "Weather Mood Generator",
      description: "AI-powered app that suggests activities and music based on current weather and your mood.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "OpenWeatherAPI", "Spotify API", "TensorFlow.js"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Retro Game Collection",
      description: "Collection of classic arcade games recreated using modern web technologies with pixel-perfect graphics.",
      image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["JavaScript", "Canvas API", "Web Audio API", "CSS Animations"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Virtual Pet Simulator",
      description: "Interactive virtual pet that learns from user interactions and grows with unique personality traits.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Three.js", "Machine Learning", "Local Storage"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  const currentProjects = activeTab === 'serious' ? seriousProjects : funProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Gradient Orbs */}
      {darkMode && (
        <>
          <span className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"></span>
          <span className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-r from-pink-600/15 to-red-600/15 rounded-full blur-3xl"></span>
        </>
      )}
      
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('serious')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm ${
                activeTab === 'serious'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : darkMode
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  : 'bg-black/10 text-gray-700 hover:bg-black/20 border border-black/20'
              }`}
            >
              <Briefcase className="h-5 w-5" />
              <span>Serious Projects</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('fun')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm ${
                activeTab === 'fun'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : darkMode
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  : 'bg-black/10 text-gray-700 hover:bg-black/20 border border-black/20'
              }`}
            >
              <Sparkles className="h-5 w-5" />
              <span>Fun Projects</span>
            </motion.button>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div 
                key={`${activeTab}-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.08, 
                  y: -15,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: darkMode ? "0 30px 60px rgba(59, 130, 246, 0.4)" : "0 30px 60px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border ${
                  darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                }`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                          darkMode ? 'bg-white/10 text-gray-300 border-white/20' : 'bg-black/10 text-gray-700 border-black/20'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 backdrop-blur-sm border ${
                        darkMode
                          ? 'bg-white/10 text-gray-300 hover:bg-white/20 border-white/20'
                          : 'bg-black/10 text-gray-700 hover:bg-black/20 border-black/20'
                      }`}
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;