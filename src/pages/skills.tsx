import React, { useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import SkillsPage from '@/components/features/SkillsGrid';
import MainLayout from '@/layouts/MainLayout';

const Skills: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <MainLayout>
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className={`pt-20 min-h-screen bg-gray-900 ${isMenuOpen ? 'z-0' : 'z-10'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">My Skills</h1>
          <SkillsPage />
        </div>
      </main>
    </MainLayout>
  );
};

export default Skills;