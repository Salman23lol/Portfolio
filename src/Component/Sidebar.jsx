import React from 'react';
import { motion } from 'framer-motion';
import { AiFillHome, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useTheme } from '../Theme';

const Sidebar = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ x: '-100%', boxShadow: isOpen ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none' }}
      animate={{ x: isOpen ? 0 : '-100%', boxShadow: isOpen ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none' }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 h-full w-64 ${theme === 'light' ? 'bg-white text-gray-600' : 'bg-gray-700 text-white'} z-50 overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`flex items-center justify-between p-4 ${theme === 'light' ? 'border-b border-gray-400' : 'border-b border-gray-600'}`}
      >
        <h1 className="text-lg font-semibold">Sidebar</h1>
        <button onClick={onClose} className="focus:outline-none">
          <motion.svg
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 cursor-pointer ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </motion.svg>
        </button>
      </motion.div>
      <nav>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: isOpen ? 0.3 : 0 }}
          className="mt-4 space-y-2"
        >
          {[
            { Icon: AiFillHome, text: 'Home' },
            { Icon: AiOutlineUser, text: 'Profile' },
            { Icon: AiOutlineSetting, text: 'Settings' },
          ].map(({ Icon, text }) => (
            <motion.li
              key={text}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: isOpen ? 0.2 : 0 }}
              className={`mx-2 px-4 py-3 flex items-center space-x-3 cursor-pointer ${theme === 'light' ? 'hover:bg-gray-300 bg-gray-300 bg-opacity-40' : 'hover:bg-gray-800'}`}
            >
              <Icon className="text-xl" />
              <span>{text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: isOpen ? 0.7 : 0 }}
        className={`absolute bottom-0 left-0 p-4 w-full overflow-hidden border-t ${theme === 'light' ? 'border-gray-400' : 'border-gray-600'}`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-full px-4 py-3 flex items-center space-x-2 cursor-pointer ${theme === 'light' ? 'hover:bg-gray-300' : 'hover:bg-gray-800'}`}
        >
          <FiLogOut className="text-xl" />
          <span>Logout</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
