import React, { useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import EducationSection from '@/components/features/Education';
import ResumeSection from '@/components/features/ResumeSection';
import MainLayout from '@/layouts/MainLayout';

const About: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainLayout>
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className={`pt-20 min-h-screen bg-gray-900 ${isMenuOpen ? 'z-0' : 'z-10'}`}>
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">About Me</h1>
          
          {/* Background Section */}
          <section className="mb-16" id="background">
            <h2 className="text-2xl font-bold text-white mb-6">Background</h2>
            <div className="bg-gray-800 rounded-lg p-6 text-gray-300">
              <p className="mb-4">
                As a Computer Science student at California State University Fullerton, I have developed
                a strong foundation in software development and a passion for creating anything that comes to mind. Here you can see my{' '}
                <button 
                  onClick={() => scrollToSection('education')}
                  className="text-teal-400 hover:text-teal-300 underline font-medium transition-colors"
                >
                  education
                </button>
                ,{' '}
                <button 
                  onClick={() => scrollToSection('interests')}
                  className="text-teal-400 hover:text-teal-300 underline font-medium transition-colors"
                >
                  interests
                </button>
                , and{' '}
                <button 
                  onClick={() => scrollToSection('resume')}
                  className="text-teal-400 hover:text-teal-300 underline font-medium transition-colors"
                >
                  resume
                </button>
                .
              </p>
              <p className="mb-4">
                I always had an interest in technology ever since I was a toddler. My dad and older brother were always playing video games, 
                so I eventually joined them and had them become my hobby growing up. All throughout high school I did not know what I wanted to do for 
                my career, up until senior year, where they introduced a new class, AP Computer Principals. This is where I found my code for coding
                and decided that is what I wanted to do as my career.
              </p>
              <p>
                Currently, I am focused on building out my projects, working with a mentor, and preparing to enter into the job force.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16" id="education">
            <h2 className="text-2xl font-bold text-white mb-6"></h2>
            <EducationSection />
          </section>

          {/* Interests Section */}
          <section className="mb-16" id="interests">
            <h2 className="text-2xl font-bold text-white mb-6">Interests & Activities</h2>
            <div className="bg-gray-800 rounded-lg p-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-500 mb-3">Professional Interests</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Software Development</li>
                    <li>Data Science</li>
                    <li>Full Stack Development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-500 mb-3">Personal Interests</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>TV and Movie Enthusiast</li>
                    <li>Video Games</li>
                    <li>Game Development</li>
                    <li>Bowling</li>
                    <li>Body Building and Healthy Lifestyle</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Resume Section */}
          <section className="mt-16 border-t border-gray-700 pt-16" id="resume">
            <h2 className="text-2xl font-bold text-white mb-6">Resume</h2>
            <ResumeSection />
          </section>
        </div>
      </main>
    </MainLayout>
  );
};

export default About;