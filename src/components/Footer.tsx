import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${
      darkMode
        ? 'bg-gray-950 border-gray-800'
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className={`text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Made with
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span className={`text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-600'
            }`}>
              by John Doe
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <p className={`text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-600'
            }`}>
              © 2024 All rights reserved.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className={`p-2 rounded-full transition-all duration-300 hover:shadow-lg ${
                darkMode
                  ? 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-800'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;