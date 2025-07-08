import React from 'react';
import { Download, FileText, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

interface ResumeProps {
  darkMode: boolean;
}

const Resume: React.FC<ResumeProps> = ({ darkMode }) => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation(0.2);

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2019",
      gpa: "3.8/4.0"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Tech Academy",
      year: "2018",
      gpa: "Certificate"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2022"
    },
    {
      name: "Meta React Developer Certificate",
      issuer: "Meta",
      year: "2021"
    }
  ];

  return (
    <section id="resume" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      darkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Gradient Orbs */}
      {darkMode && (
        <>
          <span className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-3xl"></span>
          <span className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl"></span>
        </>
      )}
      
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg flex items-center space-x-2 mx-auto"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8" ref={cardsRef}>
          {/* Education */}
          <motion.div 
            whileHover={{ 
              scale: 1.03, 
              y: -10,
              rotateY: -5,
              boxShadow: darkMode ? "0 25px 50px rgba(34, 197, 94, 0.3)" : "0 25px 50px rgba(0, 0, 0, 0.1)"
            }}
            className={`p-8 rounded-xl shadow-lg backdrop-blur-sm border ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className={`h-8 w-8 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Education
              </h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`border-l-4 border-blue-500 pl-6 backdrop-blur-sm ${
                    darkMode ? 'bg-white/5' : 'bg-black/5'
                  } p-4 rounded-r-lg`}
                >
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {edu.degree}
                  </h4>
                  <p className={`text-sm mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {edu.school}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {edu.year}
                    </span>
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {edu.gpa}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            whileHover={{ 
              scale: 1.03, 
              y: -10,
              rotateY: 5,
              boxShadow: darkMode ? "0 25px 50px rgba(139, 92, 246, 0.3)" : "0 25px 50px rgba(0, 0, 0, 0.1)"
            }}
            className={`p-8 rounded-xl shadow-lg backdrop-blur-sm border ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Award className={`h-8 w-8 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Certifications
              </h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`border-l-4 border-purple-500 pl-6 backdrop-blur-sm ${
                    darkMode ? 'bg-white/5' : 'bg-black/5'
                  } p-4 rounded-r-lg`}
                >
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {cert.name}
                  </h4>
                  <p className={`text-sm mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {cert.issuer}
                  </p>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Resume Preview */}
        <motion.div 
          whileHover={{ 
            scale: 1.02, 
            y: -10,
            boxShadow: darkMode ? "0 30px 60px rgba(59, 130, 246, 0.3)" : "0 30px 60px rgba(0, 0, 0, 0.1)"
          }}
          className={`mt-12 p-8 rounded-xl shadow-lg backdrop-blur-sm border ${
            darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
          }`}
        >
          <div className="flex items-center space-x-3 mb-6">
            <FileText className={`h-8 w-8 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`} />
            <h3 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Overview
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Professional Summary
              </h4>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Experienced Full Stack Developer with 5+ years of expertise in building 
                scalable web applications. Proven track record of leading development teams 
                and delivering high-quality solutions that drive business growth.
              </p>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Key Achievements
              </h4>
              <ul className={`space-y-2 text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <li>• Led development of e-commerce platform serving 100K+ users</li>
                <li>• Improved application performance by 40% through optimization</li>
                <li>• Mentored 10+ junior developers and conducted technical interviews</li>
                <li>• Implemented CI/CD pipeline reducing deployment time by 60%</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;