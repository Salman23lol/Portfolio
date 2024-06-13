// Navbar.js
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa"; // Import moon and sun icons for theme toggle
import Sidebar from "./Sidebar"; // Import Sidebar component
import { useTheme } from "../Theme";

const Navbar = ({ aboutRef, experienceRef, skillsRef, projectsRef, faqRef, homeRef }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white z-10"
      }`}
    >
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-between items-center px-4 py-3"
      >
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleSidebar}
            className="text-xl focus:outline-none"
          >
            <MdMenu />
          </button>
          <h1 className="hidden sm:flex  text-lg md:text-xl lg:text-[18px]">SSH.</h1>
        </div>
        <h1 className="flex sm:hidden text-lg md:text-xl lg:text-[18px]">SSH.</h1>
        <nav className="hidden sm:flex items-center justify-center gap-8">
          <motion.div whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo(homeRef)}
              href="/"
              className={`flex items-center font-medium animated-border ${theme === 'light' ? 'hover:text-black':'hover:text-white'}`}
            >
              Home
            </motion.a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo(aboutRef)}
              className={`flex items-center font-medium animated-border ${theme === 'light' ? 'hover:text-black':'hover:text-white'}`}
            >
              About
            </motion.a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo(experienceRef)}
              className={`flex items-center font-medium animated-border ${theme === 'light' ? 'hover:text-black':'hover:text-white'}`}
            >
              Experience
            </motion.a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo(skillsRef)}
              className={`flex items-center font-medium animated-border ${theme === 'light' ? 'hover:text-black':'hover:text-white'}`}
            >
              Skills
            </motion.a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo(projectsRef)}
              className={`flex items-center font-medium animated-border ${theme === 'light' ? 'hover:text-black':'hover:text-white'}`}
            >
              Projects
            </motion.a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo(faqRef)}
              className={`flex items-center font-medium animated-border ${theme === 'light' ? 'hover:text-black':'hover:text-white'}`}
            >
              FAQ
            </motion.a>
          </motion.div>
        </nav>
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, rotate: 220 }}
          whileTap={{ scale: 0.9 }}
          className="text-xl focus:outline-none"
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Navbar;
