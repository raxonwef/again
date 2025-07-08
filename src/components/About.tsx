import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const sectionRef = useScrollAnimation();
  const highlightsRef = useStaggerAnimation(0.2);

  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Design",
      description: "Blending aesthetics with functionality to create memorable experiences."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimizing for speed and efficiency without compromising quality."
    }
  ];

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Gradient Orbs */}
      {darkMode && (
        <>
          <span className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></span>
          <span className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl"></span>
        </>
      )}
      
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`w-full h-96 rounded-2xl overflow-hidden backdrop-blur-sm border ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}>
              <img
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80"
            ></motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Passionate Developer with a Creative Edge
            </h3>
            <p className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              With over 5 years of experience in web development, I specialize in creating
              digital solutions that are both visually stunning and technically robust.
              My journey began with a curiosity for how things work, and it has evolved
              into a passion for building experiences that matter.
            </p>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or mentoring aspiring developers. I believe in the
              power of technology to solve real-world problems and create positive change.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6" ref={highlightsRef}>
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 10,
                    boxShadow: darkMode ? "0 20px 40px rgba(59, 130, 246, 0.3)" : "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                  className={`p-4 rounded-lg backdrop-blur-sm border ${
                    darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                  } shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-blue-500 mb-3">
                    {highlight.icon}
                  </div>
                  <h4 className={`font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {highlight.title}
                  </h4>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;