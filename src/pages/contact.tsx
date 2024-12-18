import React, { useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import ContactPage from '@/components/features/SocialLinks';

const Contact: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen relative">
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <ContactPage />
    </div>
  );
};

export default Contact;