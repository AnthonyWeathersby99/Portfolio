import React from 'react';
import ImageWithLoader from '@/components/shared/ImageWithLoader';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
      <div className="text-center md:text-left space-y-4 md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-white">Hello! My name is Anthony Weathersby.</h1>
        <h2 className="text-2xl mb-4 text-white">Welcome to my portfolio!</h2>
        <p className="text-lg text-gray-300">
          I am an upcoming graduate of California State University Fullerton
          with a bachelors degree in computer science.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;