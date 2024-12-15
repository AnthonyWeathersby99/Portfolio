import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Anthony Weathersby
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Computer Science Student & Game Developer
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I specialize in game development using Unity and C#, with experience in full-stack development
              and machine learning. Currently pursuing my Bachelor's in Computer Science at California State University Fullerton.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/projects"
                className="btn btn-primary"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Add your profile image here */}
            <div className="w-64 h-64 mx-auto rounded-full bg-gray-200 dark:bg-gray-700">
              {/* Replace with actual image */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;