import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/shared/Navigation';
import EducationSection from '@/components/features/Education';
import ResumeSection from '@/components/features/ResumeSection';
import MainLayout from '@/layouts/MainLayout';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const About: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainLayout>
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className={`pt-20 min-h-screen bg-gray-900 ${isMenuOpen ? 'z-0' : 'z-10'}`}>
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-8 text-center"
          >
            About Me
          </motion.h1>
          
          {/* Background Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16" 
            id="background"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6"
            >
              Background
            </motion.h2>
            <motion.div 
              className="bg-gray-800 rounded-lg p-6 text-gray-300"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p 
                variants={itemVariants}
                className="mb-4"
              >
                As a Computer Science student at California State University Fullerton, I have developed
                a strong foundation in software development and a passion for creating anything that comes to mind. Here you can see my{' '}
                <button 
                  onClick={() => scrollToSection('education')}
                  className="text-teal-400 hover:text-teal-300 underline font-medium transition-colors"
                >
                  education
                </button>
                ,{' '}
                <button 
                  onClick={() => scrollToSection('interests')}
                  className="text-teal-400 hover:text-teal-300 underline font-medium transition-colors"
                >
                  interests
                </button>
                , and{' '}
                <button 
                  onClick={() => scrollToSection('resume')}
                  className="text-teal-400 hover:text-teal-300 underline font-medium transition-colors"
                >
                  resume
                </button>
                .
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="mb-4"
              >
                I always had an interest in technology ever since I was a toddler. My dad and older brother were always playing video games, 
                so I eventually joined them and had them become my hobby growing up. All throughout high school I did not know what I wanted to do for 
                my career, up until senior year, where they introduced a new class, AP Computer Principals. This is where I found my code for coding
                and decided that is what I wanted to do as my career.
              </motion.p>
              <motion.p variants={itemVariants}>
                Currently, I am focused on building out my projects, working with a mentor, and preparing to enter into the job force.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Education Section */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16" 
            id="education"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6"
            >
              Education
            </motion.h2>
            <EducationSection />
          </motion.section>

          {/* Interests Section */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16" 
            id="interests"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6"
            >
              Interests & Activities
            </motion.h2>
            <motion.div 
              className="bg-gray-800 rounded-lg p-6 text-gray-300"
              variants={itemVariants}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold text-teal-500 mb-3">Professional Interests</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li className="transition-colors hover:text-teal-400">Software Development</li>
                    <li className="transition-colors hover:text-teal-400">Data Science</li>
                    <li className="transition-colors hover:text-teal-400">Full Stack Development</li>
                  </ul>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold text-teal-500 mb-3">Personal Interests</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li className="transition-colors hover:text-teal-400">TV and Movie Enthusiast</li>
                    <li className="transition-colors hover:text-teal-400">Video Games</li>
                    <li className="transition-colors hover:text-teal-400">Game Development</li>
                    <li className="transition-colors hover:text-teal-400">Bowling</li>
                    <li className="transition-colors hover:text-teal-400">Body Building and Healthy Lifestyle</li>
                    <li className="transition-colors hover:text-teal-400">Continuous Learning</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>

          {/* Resume Section */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 border-t border-gray-700 pt-16" 
            id="resume"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6"
            >
              Resume
            </motion.h2>
            <ResumeSection />
          </motion.section>
        </div>
      </main>
    </MainLayout>
  );
};

export default About;