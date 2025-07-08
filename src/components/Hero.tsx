import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      {/* Gradient Orbs */}
      {darkMode && (
        <>
          <span className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></span>
          <span className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-2xl"></span>
        </>
      )}
      
      <div className="max-w-7xl mx-auto text-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 relative z-10 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              John Doe
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl sm:text-2xl mb-8 relative z-10 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Full Stack Developer & Creative Problem Solver
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-lg max-w-2xl mx-auto mb-12 relative z-10 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
            I craft digital experiences that combine beautiful design with powerful functionality.
            Passionate about creating innovative solutions that make a difference.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12 relative z-10"
          >
            <motion.a
              href="https://github.com"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className={`p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                  : 'bg-black/10 text-gray-700 hover:bg-black/20 hover:text-gray-900 border border-black/20'
              }`}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              whileHover={{ scale: 1.2, rotate: -360, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className={`p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                  : 'bg-black/10 text-gray-700 hover:bg-black/20 hover:text-gray-900 border border-black/20'
              }`}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:john@example.com"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className={`p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                  : 'bg-black/10 text-gray-700 hover:bg-black/20 hover:text-gray-900 border border-black/20'
              }`}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg relative z-10"
          >
            Get to know me
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
          <ArrowDown className={`h-6 w-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;