import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaGoogle, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from "../Theme";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`p-10 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Foolish Developer
        </motion.h1>
        <motion.p
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Foolish Developer is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.
        </motion.p>
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </motion.a>
          
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>&copy; {currentYear} <a href="https://yourwebsite.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Foolish Developer</a>. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
