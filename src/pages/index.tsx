import React, { useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import Hero from '@/components/features/Hero';
import ResumeSection from '@/components/features/ResumeSection';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#555555' }}>
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <main
        className={`pt-16 flex flex-col items-center justify-center min-h-screen p-4 transition-all duration-300 ${
          isMenuOpen ? 'z-0' : 'z-10'
        }`}
      >
        <Hero />
      </main>
    </div>
  );
};

export default HomePage;
