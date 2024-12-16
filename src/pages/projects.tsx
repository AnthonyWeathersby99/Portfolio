import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Projects: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        {/* Add your projects content here */}
      </div>
    </MainLayout>
  );
};

export default Projects;