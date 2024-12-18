import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Github, Check } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className={`pt-20 ${isMenuOpen ? 'z-0' : 'z-10'}`}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Contact Information
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 bg-gray-800 rounded-lg p-8 text-center"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-white mb-4"
            >
              Let's Connect!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Feel free to reach out through any of the channels below. I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and development.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Email Card */}
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCopy(contactInfo.email, 'email')}
              className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition-all duration-300 group relative w-full text-left"
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
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: copiedField === 'email' ? 1 : 0 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white"
              >
                Copied!
              </motion.span>
            </motion.button>

            {/* Phone Card */}
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCopy(contactInfo.phone, 'phone')}
              className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition-all duration-300 group relative w-full text-left"
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
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: copiedField === 'phone' ? 1 : 0 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white"
              >
                Copied!
              </motion.span>
            </motion.button>

            {/* LinkedIn Card */}
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition-all duration-300 group"
            >
              <div className="bg-teal-500 p-3 rounded-full group-hover:bg-teal-400 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-semibold text-white">LinkedIn</h2>
                <p className="text-gray-300 truncate">View Profile</p>
              </div>
            </motion.a>

            {/* GitHub Card */}
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition-all duration-300 group"
            >
              <div className="bg-teal-500 p-3 rounded-full group-hover:bg-teal-400 transition-colors">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-semibold text-white">GitHub</h2>
                <p className="text-gray-300 truncate">View Profile</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;