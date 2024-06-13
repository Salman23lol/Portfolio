import React from 'react';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';
import { useTheme } from '../Theme'; // Make sure to import your theme hook

const Login = () => {
  const { theme } = useTheme(); // Assuming you have a custom hook for theme

  const handleLogin = async () => {
    try {
      console.log('Successfully logged in:');
    } catch (error) {
      console.error('Error logging in:' );
    }
  };

  return (
    <div className={`${theme === 'light' ? 'bg-white text-gray-600' : 'bg-gray-900 text-gray-100'} flex items-center justify-center h-screen`}>
      <div className="w-[90%] mx-auto sm:w-1/2 h-auto p-5 bg-green-500 bg-opacity-50 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center pb-2">Login</h2>
        <div className="flex items-center mb-4  ">
          <FaLock className="text-2xl mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-md outline-none text-green-500"
          />
        </div>
        <div className="flex items-center mb-6">
          <FaLock className="text-2xl mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-md outline-none text-green-500"
          />
        </div>
        <motion.button
          className="w-full bg-green-400 bg-opacity-50 px-4 py-2 rounded-md hover:bg-opacity-90 duration-200"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLogin}
        >
          Login
        </motion.button>
      </div>
    </div>
  );
};

export default Login;
