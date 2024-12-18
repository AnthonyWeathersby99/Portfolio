import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/shared/Navigation';
import Hero from '@/components/features/Hero';
import { ArrowRight, Code, Brain, Rocket, GraduationCap } from 'lucide-react';
import Link from 'next/link';

// Animation variants for staggered animations
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

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Developer",
      description: "Passionate about creating efficient and innovative solutions using modern technologies."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Strong analytical skills with a focus on developing elegant solutions to complex problems."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Tech Enthusiast",
      description: "Always eager to learn and adapt to new technologies and development practices."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "CS Graduate",
      description: "Soon to graduate from California State University Fullerton with a BS in Computer Science."
    }
  ];

  const featuredProjects = [
    {
      title: "Peggle-Style Unity Game",
      description: "A physics-based game with complex gameplay mechanics",
      link: "/projects"
    },
    {
      title: "MOFIT",
      description: "AI-powered fitness tracking application",
      link: "/projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <main className={`pt-16 ${isMenuOpen ? 'z-0' : 'z-10'}`}>
        {/* Hero Section with Fade-In */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-12 px-4"
        >
          <Hero />
        </motion.section>

        {/* Highlights Section with Staggered Animation */}
        <section className="py-16 bg-gray-800">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-4"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-white text-center mb-12"
            >
              What I Bring to the Table
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-700 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-teal-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Featured Projects Section with Slide-Up Animation */}
        <section className="py-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-4"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-white text-center mb-12"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Link 
                    href={project.link}
                    className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <span className="text-teal-400 flex items-center group-hover:text-teal-300">
                      Learn more 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Call to Action Section with Fade-In */}
        <section className="py-16 bg-gray-800">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-gray-300 mb-8 text-lg">
            I'm currently open to new opportunities and exciting projects.
            Whether you have a project in mind or just want to connect, Let's get in contact!.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/projects"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  View All Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;