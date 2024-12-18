import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

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

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'peggle',
      title: 'Peggle-Style Unity Game',
      description: 'A physics-based game demonstration inspired by Peggle featuring complex gameplay mechanics.',
      details: [
        'Developed using Unity engine and C#',
        'Implemented comprehensive power-up system with passive, active, and super abilities',
        'Created robust UI system with tooltips, progress bars, and dynamic score tracking',
        'Designed modular game architecture with managers for audio, game state, and scene control'
      ],
      playable: true,
      unityUrl: 'https://play.unity.com/en/games/0b020585-8817-4a99-9f5d-1f44b5e7f77e/builds',
      github: 'https://github.com/AnthonyWeathersby99/Kleece-Game',
      unityProfile: 'https://play.unity.com/en/user/ae885d30-7dc0-4d0c-ae22-3c150b46b1b6',
      tech: ['Unity', 'C#', 'Physics', 'UI/UX']
    },
    {
      id: 'mofit',
      title: 'MOFIT (Motion Oriented Fitness Improvement Tracker)',
      description: 'Machine-Learning powered fitness application for real-time pose estimation and form analysis.',
      details: [
        'Developed using Unity and YOLOv8 for real-time pose estimation',
        'Implemented machine learning models for movement tracking and form analysis',
        'Designed AWS-integrated backend using DynamoDB and Cognito',
        'Created comprehensive test suite with 95% code coverage'
      ],
      github: 'https://github.com/AnthonyWeathersby99/Capstone-Project-MOFIT',
      videoDemo: 'https://www.youtube.com/embed/RY8dtfLHozE',
      tech: ['Unity', 'YOLOv8', 'AWS', 'Machine Learning']
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies.',
      details: [
        'Developed using Next.js, TypeScript, and Tailwind CSS',
        'Implemented responsive design for optimal viewing across all devices',
        'Created interactive UI components and animations',
        'Deployed using GitHub Pages with automated workflow'
      ],
      github: 'https://github.com/AnthonyWeathersby99/Portfolio',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React']
    },
    {
      id: 'covid',
      title: 'COVID-19 Mortality Predictor',
      description: 'Statistical analysis tool for predicting COVID-19 mortality rates across different countries.',
      details: [
        'Developed linear regression models using R',
        'Processed and analyzed large-scale COVID-19 datasets',
        'Created data visualizations for mortality rate correlations',
        'Evaluated model performance using statistical metrics'
      ],
      github: 'https://github.com/AnthonyWeathersby99/375-Data-Science-Project',
      tech: ['R', 'Statistics', 'Data Analysis', 'Visualization']
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-16 min-h-screen bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          My Projects
        </motion.h1>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:bg-gray-700/50 transition-colors duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-3">
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold text-white"
                  >
                    {project.title}
                  </motion.h2>
                  <div className="flex items-center gap-4">
                    {project.unityProfile && (
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.unityProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="hidden md:inline">Unity Profile</span>
                      </motion.a>
                    )}
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="hidden md:inline">View on GitHub</span>
                    </motion.a>
                  </div>
                </div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-300 text-lg mb-6"
                >
                  {project.description}
                </motion.p>
                
                {(project.playable || project.videoDemo) && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                  >
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        src={project.playable ? project.unityUrl : project.videoDemo}
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        allow="autoplay; fullscreen"
                        title={project.title}
                      />
                    </div>
                  </motion.div>
                )}
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-medium text-teal-400">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    {project.details.map((detail, index) => (
                      <motion.li 
                        key={index}
                        variants={itemVariants}
                        className="text-base hover:text-teal-400 transition-colors duration-300"
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="px-6 py-4 bg-gray-800/50 border-t border-gray-700"
              >
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 text-sm rounded-full bg-teal-500/20 text-teal-400 font-medium hover:bg-teal-500/30 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
};

export default ProjectsPage;