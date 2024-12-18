import React, { useState } from 'react';

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
      
      <div className="space-y-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:bg-gray-700/50 transition-colors duration-300"
          >
            {/* Header */}
            <div className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-3">
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <div className="flex items-center gap-4">
                  {project.unityProfile && (
                    <a 
                      href={project.unityProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <svg 
                        className="w-6 h-6" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M24 12l-5.72 3.3-5.73-3.3 5.73-3.3zM6.45 12l5.73 3.3-5.73 3.3-5.73-3.3zM6.45 11.9l5.73-3.3 5.73 3.3-5.73 3.3zM6.45 19.4l5.73 3.3v-6.6zM18.18 4.6l-5.73-3.3v6.6z"/>
                      </svg>
                      <span className="hidden md:inline">Unity Profile</span>
                    </a>
                  )}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <svg 
                      className="w-6 h-6" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="hidden md:inline">View on GitHub</span>
                  </a>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6">{project.description}</p>
              
              {/* Unity Game Embed for Peggle */}
              {project.playable && (
                <div className="mb-6">
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                    <iframe
                      src={project.unityUrl}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allow="autoplay; fullscreen"
                      title={project.title}
                    />
                  </div>
                </div>
              )}

              {/* Video Demo for MOFIT */}
              {project.videoDemo && (
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-teal-400 mb-4">Project Demo:</h4>
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                    <iframe
                      src={project.videoDemo}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${project.title} Demo`}
                    />
                  </div>
                </div>
              )}
              
              {/* Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-teal-400">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {project.details.map((detail, index) => (
                    <li key={index} className="text-base">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Footer with Tech Tags */}
            <div className="px-6 py-4 bg-gray-800/50 border-t border-gray-700">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-teal-500/20 text-teal-400 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;