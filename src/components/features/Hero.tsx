import React from 'react';
import { motion } from 'framer-motion';
import ImageWithLoader from '@/components/shared/ImageWithLoader';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-7.5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left space-y-4 md:w-1/2"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hello! I'm{' '}
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            Anthony Weathersby
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">Welcome to my portfolio!</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am an upcoming graduate of California State University Fullerton
          with a bachelor's degree in computer science. Passionate about creating
          innovative solutions and bringing ideas to life through code.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-teal-500/30"
        >
          <ImageWithLoader
            src={process.env.NODE_ENV === 'production' ? '/Portfolio/images/headshot.JPG' : '/images/headshot.JPG'}
            alt="Anthony Weathersby"
            width={640}
            height={640}
            className="object-cover"
            priority
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;