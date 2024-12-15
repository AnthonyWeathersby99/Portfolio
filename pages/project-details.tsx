import React from 'react';
import MainLayout from '../src/layouts/MainLayout';

const ProjectDetails: React.FC = () => {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Project Details</h1>
          <div className="grid gap-8">
            {/* Project details content will go here */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Project Name</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Project description will go here...
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {/* Technology tags will go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  };
  
  export default ProjectDetails;