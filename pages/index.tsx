import React from 'react';
import MainLayout from '../src/layouts/MainLayout';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300">
            This is a test update to verify deployment
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;