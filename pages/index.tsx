import React from 'react';
import MainLayout from '../src/layouts/MainLayout';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  Anthony Weathersby
                </h1>
                <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
                  Computer Science Student & Game Developer
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Passionate about creating immersive gaming experiences and building innovative solutions using Unity and C#. Currently pursuing a Bachelor's in Computer Science at California State University Fullerton.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/projects" 
                    className="btn btn-primary px-8 py-3 text-lg"
                  >
                    View Projects
                  </Link>
                  <Link 
                    href="/contact" 
                    className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-tr from-primary to-blue-600 rounded-full mx-auto opacity-10 absolute -top-4 -left-4"></div>
                  <div className="w-80 h-80 bg-white dark:bg-gray-800 rounded-full mx-auto shadow-xl relative">
                    {/* Add your profile image here */}
                    <div className="w-full h-full rounded-full overflow-hidden">
                      {/* Placeholder for profile image */}
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-6xl text-gray-400">AW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Recent Projects</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Check out my latest game development and software projects.
                </p>
                <Link 
                  href="/projects" 
                  className="text-primary hover:underline"
                >
                  View Projects →
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Skills & Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Unity, C#, Game Development, Full Stack Development, and more.
                </p>
                <Link 
                  href="/skills" 
                  className="text-primary hover:underline"
                >
                  View Skills →
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Interested in collaboration? Let's connect and discuss opportunities.
                </p>
                <Link 
                  href="/contact" 
                  className="text-primary hover:underline"
                >
                  Contact Me →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;