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
      {/* Large Glowing Circle - Top Right */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className={`absolute top-20 right-20 w-64 h-64 rounded-full border-2 ${
          darkMode 
            ? 'border-blue-500 shadow-[0_0_100px_rgba(59,130,246,0.3)]' 
            : 'border-gray-400 shadow-[0_0_50px_rgba(107,114,128,0.2)]'
        }`}
      />

      {/* Hexagon Shape - Bottom Left */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`absolute bottom-32 left-16 w-32 h-32 ${
          darkMode ? 'text-purple-500' : 'text-gray-500'
        }`}
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
          border: `2px solid currentColor`,
          filter: darkMode 
            ? 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.4))' 
            : 'drop-shadow(0 0 10px rgba(107, 114, 128, 0.3))'
        }}
      />

      {/* Triangle Shape - Top Left */}
      <motion.div 
        animate={{ 
          rotate: [0, -360],
          y: [0, -10, 0]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`absolute top-40 left-32 w-20 h-20 ${
          darkMode ? 'text-cyan-500' : 'text-gray-600'
        }`}
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          border: `2px solid currentColor`,
          filter: darkMode 
            ? 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))' 
            : 'drop-shadow(0 0 8px rgba(75, 85, 99, 0.3))'
        }}
      />

      {/* Small Floating Circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className={`absolute w-3 h-3 rounded-full ${
            darkMode ? 'bg-blue-400' : 'bg-gray-400'
          }`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
            filter: darkMode 
              ? 'drop-shadow(0 0 10px rgba(96, 165, 250, 0.6))' 
              : 'drop-shadow(0 0 5px rgba(156, 163, 175, 0.4))'
          }}
        />
      ))}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            John Doe
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-xl sm:text-2xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Full Stack Developer & Creative Problem Solver
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-lg max-w-3xl mx-auto mb-12 leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          I craft digital experiences that combine beautiful design with powerful functionality.
          Passionate about creating innovative solutions that make a difference.
        </motion.p>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com", color: "hover:text-gray-400" },
            { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-400" },
            { icon: Mail, href: "mailto:john@example.com", color: "hover:text-green-400" }
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                rotate: [0, -10, 10, 0]
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className={`p-4 rounded-full transition-all duration-500 backdrop-blur-sm border ${
                darkMode
                  ? `bg-white/5 text-gray-300 border-white/10 ${color}`
                  : `bg-black/5 text-gray-700 border-black/10 ${color}`
              }`}
              style={{
                filter: darkMode 
                  ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.2))' 
                  : 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.1))'
              }}
            >
              <Icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          whileHover={{ 
            scale: 1.05, 
            y: -3,
            boxShadow: darkMode 
              ? "0 20px 40px rgba(59, 130, 246, 0.4)" 
              : "0 20px 40px rgba(0, 0, 0, 0.15)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          onClick={scrollToAbout}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 transition-all duration-500 shadow-lg backdrop-blur-sm relative overflow-hidden"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))'
          }}
        >
          <span className="relative z-10">Get to know me</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0"
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`p-2 rounded-full ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient Light Effects */}
      <div className={`absolute inset-0 pointer-events-none ${
        darkMode ? 'opacity-100' : 'opacity-30'
      }`}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;