import React, { useState } from 'react';
import Image from 'next/image';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { label: 'Home', description: 'Return to the beginning', href: '/' },
    { label: 'About', description: 'Learn all about me!', href: '/about' },
    { label: 'Contact', description: 'All of my contact information', href: '/contact' },
    { label: 'Projects', description: 'Where all of my hard work is', href: '/projects' },
    { label: 'Skills', description: 'Where all of my hard work is', href: '/skills' }
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#555555' }}>
      {/* Fixed Header */}
      <header className="fixed w-full top-0 text-white p-4 z-50" style={{ backgroundColor: '#15B8A6' }}>
  <div className="flex items-center">
    <button
      onClick={toggleMenu}
      className="text-2xl focus:outline-none mr-3"
    >
      {isMenuOpen ? '×' : '☰'}
    </button>
    <h1 className="text-xl font-bold">Menu</h1>
  </div>
</header>


      {/* Main Content */}
      <main className="pt-16 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
          <div className="text-center md:text-left space-y-4 md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-white">Hello! My name is Anthony Weathersby.</h1>
            <h2 className="text-2xl mb-4 text-white">Welcome to my portfolio!</h2>
            <p className="text-lg text-gray-300">
              I am an upcoming graduate of California State University Fullerton
              with a bachelors degree in computer science.
            </p>
          </div>
         
          {/* Image container */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="/images/headshot.JPG"
                alt="Anthony Weathersby"
                width={640}
                height={640}
                className="object-cover"
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-16 left-0 w-full shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ backgroundColor: '#555555' }}
      >
        <nav className="max-w-2xl mx-auto p-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center justify-between p-4 hover:bg-gray-600 rounded-lg mb-2 text-white"
            >
              <span className="font-medium text-left flex-1">{item.label}</span>
              <span className="text-gray-300">{item.description}</span>
            </a>
          ))}
        </nav>
        <button
          onClick={toggleMenu}
          className="w-full p-4 text-center text-[#15B8A6] hover:text-[#12a090]"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
};

export default HomePage;