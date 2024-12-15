import React from 'react';
import MainLayout from '../src/layouts/MainLayout';

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        {/* Add your about content here */}
      </div>
    </MainLayout>
  );
};

export default About;