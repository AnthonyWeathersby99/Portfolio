import React from 'react';
import MainLayout from '../src/layouts/MainLayout';

const Contact: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        {/* Add your contact form here */}
      </div>
    </MainLayout>
  );
};

export default Contact;