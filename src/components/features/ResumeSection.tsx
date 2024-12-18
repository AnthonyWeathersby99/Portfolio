import React, { useState } from 'react';
import Link from 'next/link';

const ResumeSection = () => {
  const [pdfError, setPdfError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const resumePath = process.env.NODE_ENV === 'production' 
    ? '/Portfolio/docs/resume.pdf'
    : '/docs/resume.pdf';

  const handlePdfError = () => {
    setPdfError(true);
    setIsLoading(false);
  };

  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 p-4">
      {/* Download Link */}
      <div className="mb-8 text-center">
        <Link 
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors duration-200"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Resume (PDF)
        </Link>
      </div>

      {/* PDF Viewer Container */}
      <div className="w-full aspect-[8.5/11] bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent"></div>
          </div>
        )}
        
        {pdfError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <svg 
              className="w-16 h-16 text-gray-400 mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-lg font-medium mb-2">Unable to load PDF viewer</p>
            <p className="text-gray-400 text-center mb-4">Please download the resume to view it</p>
          </div>
        ) : (
          <iframe
            src={`${resumePath}#view=FitH`}
            className="w-full h-full"
            title="Anthony Weathersby Resume"
            onError={handlePdfError}
            onLoad={handlePdfLoad}
          />
        )}
      </div>
    </div>
  );
};

export default ResumeSection;