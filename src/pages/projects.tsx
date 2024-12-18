import React, { useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import ProjectsPage from '@/components/features/ProjectsPage';
import MainLayout from '@/layouts/MainLayout';

const Projects: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <MainLayout>
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className={`pt-16 min-h-screen bg-gray-900 ${isMenuOpen ? 'z-0' : 'z-10'}`}>
        <ProjectsPage />
      </main>
    </MainLayout>
  );
};

export default Projects;