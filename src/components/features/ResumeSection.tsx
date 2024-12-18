import React from 'react';
import Link from 'next/link';

const ResumeSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 p-4">
      {/* Download Link */}
      <div className="mb-8 text-center">
        <Link 
          href="/docs/resume.pdf" 
          download="Anthony_Weathersby_Resume.pdf"
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

      {/* Embedded PDF Viewer */}
      <div className="w-full aspect-[8.5/11] bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="/docs/resume.pdf#view=FitH"
          className="w-full h-full"
          title="Anthony Weathersby Resume"
        />
      </div>
    </div>
  );
};

export default ResumeSection;