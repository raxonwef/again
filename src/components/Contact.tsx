import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sectionRef = useScrollAnimation();
  const contactInfoRef = useStaggerAnimation(0.1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "john.doe@example.com",
      link: "mailto:john.doe@example.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "San Francisco, CA",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "https://github.com"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      url: "https://twitter.com"
    }
  ];

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-gray-50 via-blue-50/30 to-gray-50'
    }`}>
      {/* Section Flow Styling */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Wave separator at top */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity="0.25" className={darkMode ? 'fill-black' : 'fill-white'}></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity="0.5" className={darkMode ? 'fill-gray-950' : 'fill-gray-50'}></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={darkMode ? 'fill-black' : 'fill-gray-50'}></path>
        </svg>
        
        {/* Gradient Orbs */}
        <div className={`${darkMode ? 'opacity-100' : 'opacity-20'}`}>
          <span className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-full blur-3xl"></span>
          <span className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-purple-600/15 to-pink-600/15 rounded-full blur-3xl"></span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a friendly conversation about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8" ref={contactInfoRef}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  whileHover={{ scale: 1.01, x: 10, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-400 hover:shadow-md backdrop-blur-sm border ${
                    darkMode
                      ? 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                      : 'bg-black/5 hover:bg-black/10 text-gray-700 border-black/10'
                  }`}
                >
                  <div className="text-blue-500">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {info.title}
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, rotate: 360, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className={`p-3 rounded-full transition-all duration-400 hover:shadow-lg backdrop-blur-sm border ${
                      darkMode
                        ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border-white/20'
                        : 'bg-black/10 text-gray-700 hover:bg-black/20 hover:text-gray-900 border-black/20'
                    }`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl shadow-lg backdrop-blur-sm border ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, y: -2 }}
                    transition={{ duration: 0.4 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-400 backdrop-blur-sm ${
                      darkMode
                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-500'
                        : 'bg-black/10 border-black/20 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, y: -2 }}
                    transition={{ duration: 0.4 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-400 backdrop-blur-sm ${
                      darkMode
                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-500'
                        : 'bg-black/10 border-black/20 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, y: -2 }}
                  transition={{ duration: 0.4 }}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-400 backdrop-blur-sm ${
                    darkMode
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-500'
                      : 'bg-black/10 border-black/20 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, y: -2 }}
                  transition={{ duration: 0.4 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-400 resize-none backdrop-blur-sm ${
                    darkMode
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-500'
                      : 'bg-black/10 border-black/20 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Your message..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -3, boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-400 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;