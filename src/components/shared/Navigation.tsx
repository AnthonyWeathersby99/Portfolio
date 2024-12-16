import React from 'react';
import Link from 'next/link';

interface MenuItem {
  label: string;
  description: string;
  href: string;
}

interface NavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const menuItems: MenuItem[] = [
  { label: 'Home', description: 'Return to the beginning', href: '/' },
  { label: 'About', description: 'Learn all about me!', href: '/about' },
  { label: 'Contact', description: 'All of my contact information', href: '/contact' },
  { label: 'Projects', description: 'Where all of my hard work is', href: '/projects' },
  { label: 'Skills', description: 'Everything I learned for my future', href: '/skills' },
];

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      <header
        className="fixed w-full top-0 text-white p-4 z-50"
        style={{ backgroundColor: '#15B8A6' }}
      >
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

      {/* Dropdown Menu */}
      <div
        className={`fixed top-16 left-0 w-full shadow-lg transform transition-transform duration-300 z-40 bg-gray-800 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="p-8 space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center py-4 opacity-0 transform transition-all duration-500
                ${index % 2 === 0 ? 'translate-x-[-100%]' : 'translate-x-[100%]'}
                hover:bg-gray-700 hover:rounded-lg active:bg-gray-600 active:text-white`}
              style={{
                animation: isMenuOpen
                  ? `menuSlide 0.8s ease-out forwards ${index * 0.2}s`
                  : 'none',
              }}
            >
              {/* Label with Gradient */}
              <span
                className="text-4xl leading-tight font-extrabold bg-gradient-to-r from-[#15B8A6] to-blue-600 text-transparent bg-clip-text text-left"
              >
                {item.label}
              </span>
              {/* Description clean alignment */}
              <span className="text-lg text-gray-300 ml-4">
                {item.description}
              </span>
            </Link>
          ))}
        </nav>
        <button
          onClick={toggleMenu}
          className="w-full p-4 text-center text-[#15B8A6] hover:text-[#12a090]"
        >
          Close Menu
        </button>
      </div>

      <style jsx>{`
        @keyframes menuSlide {
          0% {
            opacity: 0;
            transform: translateX(-100%) scale(0.95);
          }
          70% {
            opacity: 0.7;
            transform: translateX(10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes menuSlideRight {
          0% {
            opacity: 0;
            transform: translateX(100%) scale(0.95);
          }
          70% {
            opacity: 0.7;
            transform: translateX(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
