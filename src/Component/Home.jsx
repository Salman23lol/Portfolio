import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../Theme';

const Home = () => {
  const { theme } = useTheme();

  const data = {
    profileImage: 'https://e0.pxfuel.com/wallpapers/105/23/desktop-wallpaper-compromised-character-gaming-profile-dark-cute-cartoon-boys-thumbnail.jpg',
    name: 'Salman Haider',
    description: 'I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.',
    yearsOfExperience: 1,
    projectsCompleted: 156,
    technologiesMastered: 8,
    codeCommits: 500,
  };

  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [technologiesMastered, setTechnologiesMastered] = useState(0);
  const [codeCommits, setCodeCommits] = useState(0);

  useEffect(() => {
    const incrementNumbers = (setState, finalValue) => {
      let current = 0;
      const increment = finalValue / 300;

      const interval = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
          setState(finalValue);
          clearInterval(interval);
        } else {
          setState(Math.ceil(current));
        }
      }, 10);
    };

    incrementNumbers(setYearsOfExperience, data.yearsOfExperience);
    incrementNumbers(setProjectsCompleted, data.projectsCompleted);
    incrementNumbers(setTechnologiesMastered, data.technologiesMastered);
    incrementNumbers(setCodeCommits, data.codeCommits);
  }, []); // Use an empty dependency array to run this effect only once

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} flex items-center justify-center py-1 relative overflow-hidden`} style={{ height: '92vh' }}>
      <div className={`absolute p-10 h-80 sm:h-96 w-[90%] sm:w-[50%] rounded-md ${theme === 'light' ? 'bg-green-500 bg-opacity-50':'bg-green-500 bg-opacity-30'}`}>
        <motion.div
          className="absolute inset-0 border-2 border-green-500 rounded-md neon"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 0 0, 0 0)' }}
          animate={{ clipPath: [
            'polygon(100% 0, 100% 0, 0 0, 0 0)',
            'polygon(100% 0, 100% 100%, 0 0, 0 0)',
            'polygon(100% 0, 100% 100%, 0 100%, 0 0)',
            'polygon(100% 0, 100% 100%, 0 100%, 100% 100%)',
            'polygon(100% 0, 100% 0, 100% 0, 100% 100%)'
          ] }}
          transition={{ 
            duration: 2, 
            ease: 'easeInOut', 
            times: [0, 0.25, 0.5, 0.75, 1], 
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>

      {/* Other animations */}
      <div className="absolute top-16 right-32 flex items-center justify-center overflow-hidden bg-transparent">
        <motion.div
          animate={{ scale: [1, 0.2, 1], borderRadius: ['100%', '50%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 bg-green-600 bg-opacity-20 rounded-full"
        />
      </div>

         {/* Other animations */}
         <div className="absolute top-16 right-32 flex items-center justify-center overflow-hidden bg-transparent">
        <motion.div
          animate={{ scale: [1, 0.3, 1], borderRadius: ['100%', '50%', '100%'] }}
          transition={{ duration: 2.3, repeat: Infinity }}
          className="w-24 h-24 bg-green-600 bg-opacity-20 rounded-full"
        />
      </div>

            {/* Other animations */}
            <div className="absolute top-96 left-32 flex items-center justify-center overflow-hidden bg-transparent">
        <motion.div
          animate={{ scale: [1, 0.1, 1], borderRadius: ['100%', '50%', '100%'] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-24 h-24 bg-green-600 bg-opacity-20 rounded-full"
        />
      </div>

         {/* Other animations */}
         <div className="absolute top-96 left-32 flex items-center justify-center overflow-hidden bg-transparent">
        <motion.div
          animate={{ scale: [1, 0.6, 1], borderRadius: ['100%', '50%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 bg-green-600 bg-opacity-20 rounded-full"
        />
      </div>


      {/* Content */}
      <div className="text-center relative flex flex-col items-center">
        <motion.img
          src={data.profileImage}
          alt="Random Person"
          className="rounded-full w-1/4 mx-auto my-4 home-gradient"
          initial={{ scale: 0, y: -1000 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <motion.h1
          className="text-4xl font-medium mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Hello, I’m <span className={`${theme==='light' ?'text-green-600':'text-green-400'} font-semibold`}>{data.name}</span>
        </motion.h1>
        <motion.p
          className={`${theme === 'light' ? 'text-gray-600':'text-gray-200'} pt-4 pb-10 sm:pt-0 sm:pb-4 text-md   sm:text-sm w-[80%]`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {data.description}
        </motion.p>
            
        <div className="w-full flex items-center justify-center gap-6">
          <motion.button
            className="bg-green-400 text-black px-6 py-2 rounded-full mb-8"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            DOWNLOAD CV
          </motion.button>
          <div className="flex justify-center space-x-4 mb-8">
          {[FaLinkedin, FaGithub, FaTwitter].map((Icon, index) => (
  <motion.div
    key={index}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
  >
    <Icon className="text-2xl hover:text-green-400" />
  </motion.div>
))}
          </div>
        </div>

        {/* Statistics */}
        <div className={`flex justify-center space-x-10 mt-6 sm:mt-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          {[
            { value: yearsOfExperience, label: 'Years of experience' },
            { value: projectsCompleted, label: 'Projects Completed' },
            { value: technologiesMastered, label: 'Technologies mastered' },
            { value: codeCommits, label: 'Code commits' }
          ].map((stat, index) => (
            <div key={index} className='text-md sm:text-[16px]'>
              <motion.span
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                {stat.value}
              </motion.span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
