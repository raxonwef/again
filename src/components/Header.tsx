import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  toggleDarkMode,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const { isScrolled } = useScrollPosition();

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-4 left-4 right-4 rounded-2xl backdrop-blur-xl border shadow-2xl' 
          : 'top-0 left-0 right-0 backdrop-blur-md border-b'
      } ${
        darkMode
          ? isScrolled 
            ? 'bg-black/20 border-white/10 shadow-black/20' 
            : 'bg-black/80 border-gray-800'
          : isScrolled 
            ? 'bg-white/20 border-black/10 shadow-black/10' 
            : 'bg-white/80 border-gray-200'
      }`}
    >
      <div className={`mx-auto transition-all duration-500 ${
        isScrolled ? 'max-w-6xl px-6' : 'max-w-7xl px-4 sm:px-6 lg:px-8'
      }`}>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            John Doe
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 rounded-lg transition-all duration-400 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-white/10'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-black/10'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-400 backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/10 text-yellow-400 hover:bg-white/20 border border-white/20'
                  : 'bg-black/10 text-gray-700 hover:bg-black/20 border border-black/20'
              }`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-400 backdrop-blur-sm ${
                darkMode
                  ? 'text-gray-300 hover:text-white hover:bg-white/10 border border-white/20'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-black/10 border border-black/20'
              }`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t backdrop-blur-xl ${
              darkMode ? 'bg-black/20 border-white/10' : 'bg-white/20 border-black/10'
            }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-400 backdrop-blur-sm ${
                    activeSection === item.href.slice(1)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-black/10 border border-black/10'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;