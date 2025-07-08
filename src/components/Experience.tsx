import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const sectionRef = useScrollAnimation();
  const timelineRef = useStaggerAnimation(0.3);

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead a team of 5 developers in building scalable web applications. Implemented microservices architecture that improved system performance by 40%.",
      achievements: [
        "Led migration from monolithic to microservices architecture",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using React, Node.js, and various databases. Collaborated with design team to implement pixel-perfect UIs.",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Optimized database queries improving response time by 35%",
        "Integrated third-party APIs and payment systems"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebStudio Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: "Specialized in creating interactive user interfaces and optimizing web performance. Worked closely with UX designers to bring mockups to life.",
      achievements: [
        "Developed reusable component library used across 10+ projects",
        "Achieved 95+ PageSpeed score on all production websites",
        "Implemented accessibility standards (WCAG 2.1 AA compliance)"
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      {/* Gradient Orbs */}
      {darkMode && (
        <>
          <span className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl"></span>
          <span className="absolute bottom-1/3 left-0 w-64 h-64 bg-gradient-to-r from-violet-600/15 to-purple-600/15 rounded-full blur-3xl"></span>
        </>
      )}
      
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full backdrop-blur-sm ${
            darkMode ? 'bg-white/20' : 'bg-black/20'
          }`}></div>

          {/* Experience Items */}
          <div className="space-y-12" ref={timelineRef}>
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.03, x: index % 2 === 0 ? -10 : 10 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 backdrop-blur-sm ${
                    darkMode
                      ? 'bg-black border-blue-400 shadow-lg shadow-blue-400/50'
                      : 'bg-white border-blue-500 shadow-lg shadow-blue-500/50'
                  } z-10`}
                ></motion.div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-1/2`}>
                  <motion.div 
                    whileHover={{ 
                      y: -10, 
                      rotateY: index % 2 === 0 ? -5 : 5,
                      boxShadow: darkMode ? "0 25px 50px rgba(34, 197, 94, 0.3)" : "0 25px 50px rgba(0, 0, 0, 0.1)"
                    }}
                    className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border ${
                      darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className={`h-4 w-4 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.title}
                    </h3>
                    
                    <h4 className={`text-lg font-semibold mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {exp.company}
                    </h4>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className={`h-4 w-4 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className={`text-sm mb-4 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                    
                    <ul className={`space-y-2 ${
                      darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2 text-sm">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;