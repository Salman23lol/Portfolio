import React, { useState } from 'react';
import { FaPlus, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from "../Theme";

const projects = [
  {
    id: '2442f2',
    category: 'Brand',
    title: 'Complete - Twitter Clone',
    description: 'This is a Complete Twitter Clone with Firebase Database as Back-End and Some Extra Frameworks',
    image: 'https://cdn.vox-cdn.com/thumbor/ThBeebQfOjzjRtFhvyxCdfO0XME=/0x0:1360x787/800x463/filters:focal(680x394:681x395)/cdn.vox-cdn.com/uploads/chorus_asset/file/18335815/Screen_Shot_2019_07_25_at_1.54.36_PM.png',
  },
  {
    id: '2fdb34',
    category: 'BASS',
    title: 'Complete BASS - Podify',
    description: 'Complete BASS Project Based on BASS Work Stack | With Next.js',
    image: 'https://i.kinja-img.com/image/upload/pg_1,q_80,w_1600/qw3gqhst6wnlxygwvlpe.png',
  },
  {
    id: '243bg4',
    category: 'MERN',
    title: 'Custom Made Hoteling Site',
    description: 'Complete Project Configured With MERN Work Stack With Different Frameworks',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFiiSO2l7OmHKlZp7PUuOhUvl9lcCb9kgGnw&s',
  },
  // Additional projects
  {
    id: 'gr3g43',
    category: 'React',
    title: 'React Native Mobile App',
    description: 'A mobile application built with React Native for cross-platform development.',
    image: 'https://miro.medium.com/max/1000/1*u8Xa_DaJnMXY1od5Rtt8JQ.png',
  },
  {
    id: '209gk3',
    category: 'Next-Js',
    title: 'E-commerce Website',
    description: 'An e-commerce website built with Next.js for server-side rendering and SEO optimization.',
    image: 'https://www.medioq.com/photos/content/medioq/1722334214731606',
  },
];

const categories = ['Show All', 'Brand', 'BASS', 'SASS', 'MERN', 'React', 'Next-Js'];

const Projects = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('Show All');
  const filteredProjects = selectedCategory === 'Show All' ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <div className={`h-auto relative py-6 ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
    
      <div className="w-full sm:container sm:mx-auto py-12 space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Here's Some of</h2>
          <p className="text-green-500 text-lg font-semibold">My Latest Projects</p>
        </div>

        <div className="w-full flex items-center overflow-hidden gap-2 border border-green-600 p-3 rounded-md">
          {categories.map(category => (
            <motion.button
              key={category}
              className={`w-64 p-3 ${selectedCategory === category ? 'bg-green-600' : ''} bg-green-600 bg-opacity-50 hover:bg-opacity-80 rounded transition-colors duration-300 text-sm`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              className={`w-[90%] mx-auto sm:w-full flex flex-col items-center justify-between gap-3 p-4 ${theme === 'light' ? 'bg-green-500 bg-opacity-50 text-black' : 'bg-emerald-500 bg-opacity-50 text-white'}`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
                <img src={project.image} alt={project.title} className="rounded-t-lg w-full h-full" />
                <div className="w-full h-full p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4 w-full">{project.description}</p>
                  <motion.a
                  href={`/project/${project.id}/details`}
                    className="w-32 bg-green-500 p-2 rounded flex items-center gap-1 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaPlus className="ml-2" /> View More
                  </motion.a>
                </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <motion.button
            className="bg-green-500 px-6 py-2 rounded text-black flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View More <FaArrowRight className="ml-2" />
          </motion.button>
        </div>
        <div className="absolute top-16 right-32 flex items-center justify-center overflow-hidden bg-transparent">
        <motion.div
          animate={{ scale: [1, 0.2, 1], borderRadius: ['100%', '50%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 bg-green-600 bg-opacity-20 rounded-full"
        />
      </div>
      <div className="absolute top-16 right-32 flex items-center justify-center overflow-hidden bg-transparent">
        <motion.div
          animate={{ scale: [1, 0.3, 1], borderRadius: ['100%', '50%', '100%'] }}
          transition={{ duration: 2.3, repeat: Infinity }}
          className="w-24 h-24 bg-green-600 bg-opacity-20 rounded-full"
        />
      </div>
      <div className="absolute bottom-16 left-32 flex items-center justify-center overflow-hidden bg-transparent">
        <motion.div
          animate={{ scale: [1, 0.2, 1], borderRadius: ['100%', '50%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 bg-green-600 bg-opacity-20 rounded-full"
        />
      </div>
      <div className="absolute bottom-16 left-32 flex items-center justify-center overflow-hidden bg-transparent">
        <motion.div
          animate={{ scale: [1, 0.3, 1], borderRadius: ['100%', '50%', '100%'] }}
          transition={{ duration: 2.3, repeat: Infinity }}
          className="w-24 h-24 bg-green-600 bg-opacity-20 rounded-full"
        />
      </div>
      </div>
    </div>
  );
};

export default Projects;
