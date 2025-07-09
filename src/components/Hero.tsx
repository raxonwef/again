import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Globe } from 'lucide-react';
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

  // Floating tech icons data
  const floatingIcons = [
    { Icon: Code, delay: 0, duration: 8 },
    { Icon: Database, delay: 2, duration: 10 },
    { Icon: Globe, delay: 4, duration: 9 },
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      {/* Subtle Gradient Background */}
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-gradient-to-br from-violet-950/30 via-black to-indigo-950/20' 
          : 'bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30'
      }`} />

      {/* Geometric Visual Texture */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner geometric shapes */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className={`absolute top-20 right-20 w-32 h-32 opacity-20 ${
            darkMode ? 'border-violet-400' : 'border-gray-400'
          }`}
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            border: `1px solid currentColor`,
            filter: darkMode 
              ? 'blur(0.5px) drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))' 
              : 'blur(0.5px) drop-shadow(0 0 10px rgba(107, 114, 128, 0.2))'
          }}
        />

        <motion.div 
          animate={{ 
            rotate: [0, -360],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className={`absolute bottom-32 left-16 w-24 h-24 opacity-15 ${
            darkMode ? 'border-blue-400' : 'border-gray-500'
          }`}
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            border: `1px solid currentColor`,
            filter: darkMode 
              ? 'blur(0.5px) drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))' 
              : 'blur(0.5px) drop-shadow(0 0 8px rgba(75, 85, 99, 0.2))'
          }}
        />

        {/* Diagonal lines */}
        <div className={`absolute top-1/4 left-0 w-full h-px opacity-10 ${
          darkMode ? 'bg-gradient-to-r from-transparent via-violet-400 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-400 to-transparent'
        }`} style={{ transform: 'rotate(15deg)' }} />
        
        <div className={`absolute bottom-1/4 left-0 w-full h-px opacity-10 ${
          darkMode ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-400 to-transparent'
        }`} style={{ transform: 'rotate(-15deg)' }} />

        {/* Small floating circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            className={`absolute w-2 h-2 rounded-full ${
              darkMode ? 'bg-violet-400' : 'bg-gray-400'
            }`}
            style={{
              left: `${15 + i * 10}%`,
              top: `${25 + (i % 3) * 25}%`,
              filter: darkMode 
                ? 'blur(0.5px) drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))' 
                : 'blur(0.5px) drop-shadow(0 0 4px rgba(156, 163, 175, 0.3))'
            }}
          />
        ))}
      </div>

      {/* Glassmorphism Background Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`absolute inset-x-4 top-1/2 transform -translate-y-1/2 h-96 rounded-3xl backdrop-blur-xl border ${
          darkMode 
            ? 'bg-white/5 border-white/10 shadow-2xl shadow-violet-500/10' 
            : 'bg-white/40 border-white/60 shadow-2xl shadow-black/5'
        }`}
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      />

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, delay, duration }, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.6, 0.3, 0.2]
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
          }}
          className={`absolute ${
            darkMode ? 'text-violet-400' : 'text-gray-500'
          }`}
          style={{
            left: `${20 + index * 25}%`,
            top: `${30 + index * 15}%`,
            filter: darkMode 
              ? 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))' 
              : 'drop-shadow(0 0 5px rgba(107, 114, 128, 0.2))'
          }}
        >
          <Icon className="h-8 w-8 opacity-40" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          style={{
            filter: darkMode 
              ? 'drop-shadow(0 4px 20px rgba(139, 92, 246, 0.3))' 
              : 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))'
          }}
        >
          Hi, I'm{' '}
          <span className={`bg-gradient-to-r ${
            darkMode 
              ? 'from-violet-400 via-blue-400 to-cyan-400' 
              : 'from-blue-600 via-purple-600 to-indigo-600'
          } bg-clip-text text-transparent`}>
            John Doe
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`text-xl sm:text-2xl mb-8 font-medium ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
          style={{
            filter: darkMode 
              ? 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))' 
              : 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.1))'
          }}
        >
          Full Stack Developer & Creative Problem Solver
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={`text-lg max-w-3xl mx-auto mb-12 leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          I craft digital experiences that combine beautiful design with powerful functionality.
          Passionate about creating innovative solutions that make a difference.
        </motion.p>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
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
                y: -8,
                rotate: [0, -5, 5, 0]
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className={`p-4 rounded-2xl transition-all duration-500 backdrop-blur-xl border ${
                darkMode
                  ? `bg-white/10 text-gray-300 border-white/20 ${color}`
                  : `bg-white/60 text-gray-700 border-white/40 ${color}`
              }`}
              style={{
                filter: darkMode 
                  ? 'drop-shadow(0 8px 25px rgba(139, 92, 246, 0.2))' 
                  : 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.1))'
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
          transition={{ duration: 1, delay: 1.1 }}
          whileHover={{ 
            scale: 1.05, 
            y: -5
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6 }}
          onClick={scrollToAbout}
          className={`relative px-12 py-4 rounded-full text-lg font-semibold transition-all duration-500 backdrop-blur-xl border overflow-hidden ${
            darkMode
              ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white border-violet-400/30'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-400/30'
          }`}
          style={{
            filter: darkMode 
              ? 'drop-shadow(0 10px 40px rgba(139, 92, 246, 0.4))' 
              : 'drop-shadow(0 10px 40px rgba(59, 130, 246, 0.3))'
          }}
        >
          <span className="relative z-10">Get to know me</span>
          <motion.div
            className={`absolute inset-0 ${
              darkMode
                ? 'bg-gradient-to-r from-violet-500 to-blue-500'
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            } opacity-0`}
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full backdrop-blur-xl border ${
              darkMode 
                ? 'text-gray-400 bg-white/5 border-white/20' 
                : 'text-gray-600 bg-white/40 border-white/60'
            } cursor-pointer hover:shadow-lg transition-all duration-300`}
            style={{
              filter: darkMode 
                ? 'drop-shadow(0 4px 15px rgba(139, 92, 246, 0.2))' 
                : 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.1))'
            }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Ambient Light Effects */}
      <div className={`absolute inset-0 pointer-events-none ${
        darkMode ? 'opacity-60' : 'opacity-30'
      }`}>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-violet-500/20' : 'bg-blue-500/10'
          }`} 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${
            darkMode ? 'bg-blue-500/15' : 'bg-purple-500/8'
          }`} 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
            darkMode ? 'bg-cyan-500/10' : 'bg-indigo-500/5'
          }`} 
        />
      </div>
    </section>
  );
};

export default Hero;