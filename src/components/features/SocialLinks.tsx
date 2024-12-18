import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Check } from 'lucide-react';

const ContactPage = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  const contactInfo = {
    email: "anthonyweathersby99@gmail.com",
    phone: "(562) 536-7261",
    linkedin: "linkedin.com/in/anthony-weathersby-787131221/",
    github: "github.com/AnthonyWeathersby99"
  };

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Contact Information</h1>
        
        <div className="mb-12 bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Let's Connect!</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out through any of the channels below. I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Cards */}
          <button 
            onClick={() => handleCopy(contactInfo.email, 'email')}
            className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition-colors group relative w-full text-left"
          >
            <div className="bg-teal-500 p-3 rounded-full group-hover:bg-teal-400 transition-colors">
              {copiedField === 'email' ? (
                <Check className="w-6 h-6 text-white" />
              ) : (
                <Mail className="w-6 h-6 text-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-semibold text-white mb-1">Email</h2>
              <p className="text-gray-300 truncate">{contactInfo.email}</p>
            </div>
            <span className={`absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white transition-opacity duration-200 ${
              copiedField === 'email' ? 'opacity-100' : 'opacity-0'
            }`}>
              Copied!
            </span>
          </button>

          <button 
            onClick={() => handleCopy(contactInfo.phone, 'phone')}
            className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition-colors group relative w-full text-left"
          >
            <div className="bg-teal-500 p-3 rounded-full group-hover:bg-teal-400 transition-colors">
              {copiedField === 'phone' ? (
                <Check className="w-6 h-6 text-white" />
              ) : (
                <Phone className="w-6 h-6 text-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-semibold text-white mb-1">Phone</h2>
              <p className="text-gray-300 truncate">{contactInfo.phone}</p>
            </div>
            <span className={`absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white transition-opacity duration-200 ${
              copiedField === 'phone' ? 'opacity-100' : 'opacity-0'
            }`}>
              Copied!
            </span>
          </button>

          <a 
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition-colors group"
          >
            <div className="bg-teal-500 p-3 rounded-full group-hover:bg-teal-400 transition-colors">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-semibold text-white">LinkedIn</h2>
              <p className="text-gray-300 truncate">View Profile</p>
            </div>
          </a>

          <a 
            href={`https://${contactInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition-colors group"
          >
            <div className="bg-teal-500 p-3 rounded-full group-hover:bg-teal-400 transition-colors">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-semibold text-white">GitHub</h2>
              <p className="text-gray-300 truncate">View Profile</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;