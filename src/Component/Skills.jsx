import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../Theme';
import { MdArrowRight } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', level: 'Advanced', experience: 86 },
  { name: 'CSS', level: 'Advanced', experience: 77 },
  { name: 'HTML', level: 'Advanced', experience: 92 },
  { name: 'React', level: 'Advanced', experience: 89 },
  { name: 'Next.js', level: 'Advanced', experience: 85 },
  { name: 'Node.js', level: 'Intermediate', experience: 82 },
  { name: 'MongoDB', level: 'Advanced', experience: 81 },
  { name: 'Tailwind-CSS', level: 'Mastered', experience: 95 },
  { name: 'Framer-Motion', level: 'Beginner', experience: 40 },
  { name: 'TypeScript', level: 'Advanced', experience: 80 },
  { name: 'Firebase', level: 'Intermediate', experience: 45 },
  { name: 'Supa-Base', level: 'Beginner', experience: 20 },
  { name: 'Express', level: 'Advanced', experience: 67 },
];

const Skills = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const totalPages = Math.ceil(skills.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedSkills = skills.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={`h-[660px] p-10 relative overflow-hidden ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <div className="absolute top-16 right-64 w-full h-full flex items-center justify-center z-0">
        <motion.div
          className="w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h1
          className={`text-4xl font-medium mb-12 text-center ${theme === 'light' ? 'text-black' : 'text-white'}`}
        >
          SKILLS
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br p-6 rounded-lg ${theme === 'light' ? 'bg-green-500 bg-opacity-50 text-black' : 'bg-gray-800 bg-opacity-50'} relative`}
            >
              <h2 className="text-2xl font-semibold">{skill.name}</h2>
              <p className="text-md">{skill.level}</p>
              <div className="h-3 bg-gray-600 rounded-full overflow-hidden mt-2">
                <motion.div
                  className="h-full bg-green-400 relative"
                  style={{ width: `${skill.experience}%` }}
                >
                </motion.div>
                <span className="absolute top-0 right-0 px-2 py-1">{skill.experience}%</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-green-500 bg-opacity-60 text-white rounded disabled:opacity-50"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-green-500 bg-opacity-60 text-white rounded disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
