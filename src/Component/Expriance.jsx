import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaSchool, FaBriefcase } from "react-icons/fa";
import { useTheme } from "../Theme";

const items = [
  {
    id: 1,
    title: "UI/UX Designer",
    period: "2018 - 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    type: "experience",
  },
  {
    id: 2,
    title: "UI/UX Developer",
    period: "2022 - 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    type: "experience",
  },
  {
    id: 3,
    title: "MERN Developer",
    period: "2023 - 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    type: "experience",
  },
  {
    id: 4,
    title: "High School Degree",
    period: "2013 - 2017",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    type: "education",
  },
  {
    id: 5,
    title: "Collage DPS Lahore",
    period: "2015 - 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    type: "education",
  },
];

const Experience = () => {
  const { theme } = useTheme();

  const renderItems = useMemo(
    () =>
      items.map((item) => (
        <motion.div
          key={item.id}
          className={`${
            theme === "light"
              ? "bg-green-400 bg-opacity-30"
              : "bg-gray-700 bg-opacity-50"
          } backdrop-blur-md p-4 mb-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
        >
          <div className="flex items-center mb-4">
            {item.type === "education" ? (
              <FaSchool className="text-3xl text-green-400 mr-6" />
            ) : (
              <FaBriefcase className="text-3xl text-green-400 mr-6" />
            )}
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-medium">{item.title}</h2>
              <h3 className="text-xl">{item.period}</h3>
            </div>
          </div>
          <p className="text-sm">{item.description}</p>
        </motion.div>
      )),
    [theme]
  );

  return (
    <div
      className={`h-auto p-6 relative overflow-hidden ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-6xl mx-auto relative z-10 py-4"
      >
        <div className="w-full flex items-center justify-between py-10">
          <h1 className="text-4xl font-medium">EDUCATION</h1>
          <h1 className="text-4xl font-medium">EXPERIENCE</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="w-full sm:w-1/2">{renderItems.filter(item => item.props.children.type === FaSchool)}</div>
          <div className="w-full sm:w-1/2">{renderItems.filter(item => item.props.children.type === FaBriefcase)}</div>
        </div>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
        <motion.div
          className="w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
    </div>
  );
};

export default Experience;
