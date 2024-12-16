import React, { useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import Hero from '@/components/features/Hero';

const Skills: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">My Skills</h1>
      </main>
    </>
  );
};

export default Skills;