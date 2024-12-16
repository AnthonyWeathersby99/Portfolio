import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { useLoading } from '@/context/LoadingContext';

interface ImageWithLoaderProps extends ImageProps {}

const Loader: React.FC = () => (
  <div className="spinner">
    <style jsx>{`
      .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-left-color: white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority,
  ...rest
}) => {
  const { setLoading } = useLoading();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    setLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <Loader />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        priority={priority}
        {...rest}
      />
    </div>
  );
};

export default ImageWithLoader;
