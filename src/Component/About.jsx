import React from 'react';
import { FaBehance, FaDribbble, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../Theme';

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`h-auto flex items-center justify-center relative overflow-hidden ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      {/* Floating elements */}
      {[{ color: 'green', top: 10, left: 10 }, { color: 'pink', top: 20, right: 20 }, { color: 'blue', bottom: 20, left: 20 }, { color: 'yellow', bottom: 10, right: 10 }].map((element, index) => (
        <motion.div 
          key={index}
          className={`absolute top-${element.top || 'auto'} bottom-${element.bottom || 'auto'} left-${element.left || 'auto'} right-${element.right || 'auto'} w-10 h-10 bg-${element.color}-500 rounded-full`}
          animate={{ y: [0, -20, 0], opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      ))}
      
      <div className={`p-10 rounded-lg w-full h-auto ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-10 px-16">
          {/* Image */}
          <motion.div 
            className="flex justify-center w-1/2 max-h-[500px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://e0.pxfuel.com/wallpapers/105/23/desktop-wallpaper-compromised-character-gaming-profile-dark-cute-cartoon-boys-thumbnail.jpg"
              alt="Profile" 
              className="rounded-lg w-full image-gradient"
            />
          </motion.div>
          {/* Text Content */}
          <div className='w-full text-center sm:text-start'>
            <motion.h1 
              className="text-4xl font-bold mb-3 text-green-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              ABOUT ME
            </motion.h1>
            <motion.h2 
              className="text-xl mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              VEDANT PATEL - DESIGNER
            </motion.h2>
            <motion.p 
              className="mb-8 w-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </motion.p>
            {/* Social Icons */}
            <motion.div 
              className="flex space-x-4 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {[FaBehance, FaDribbble, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Icon className="text-2xl hover:text-green-600 transition duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
