import React, { useState } from 'react';
import { easeInOut, motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTheme } from "../Theme";

const FAQPage = () => {
  const { theme } = useTheme();

  const faqData = [
    {
      id: 1,
      question: 'How long have you been working?',
      answer: 'I have been working for 5 years now!',
    },
    {
      id: 2,
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in React, Node.js, and Python.',
    },
    {
      id: 3,
      question: 'Can you work remotely?',
      answer: 'Yes, I am experienced in remote work setups and can work effectively from anywhere.',
    }
  ];

  const [isOpenIndex, setIsOpenIndex] = useState(null);
  const [formData, setFormData] = useState({ email: '', message: '' });

  const toggleAccordion = (index) => {
    setIsOpenIndex(index === isOpenIndex ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
    // Reset form fields after submission
    setFormData({ email: '', message: '' });
  };

  return (
    <div className={`w-full h-auto relative p-10 ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold pb-6 text-center">Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <motion.div
            key={faq.id}
            className={`mb-4 shadow-md rounded-md p-3 cursor-pointer ${theme === 'light' ? 'bg-green-600 text-gray-800 bg-opacity-60' : 'bg-green-500 bg-opacity-50 text-white'}`}
            whileHover={{ scale: 1.02 }}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-md font-semibold">{faq.question}</h2>
              {isOpenIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isOpenIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className={`mt-4 border-t ${theme === 'light' ? 'border-gray-400' : 'border-gray-300'} p-2`}
              >
                <motion.p
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
                  className="text-[15px]"
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <h1 className="text-xl font-semibold pb-2">Ask Your Question</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full p-2 outline-none rounded-md placeholder:text-white ${theme === 'light' ? 'bg-green-700 bg-opacity-60 text-black' : 'bg-green-500 bg-opacity-50 text-white'}`}
                  placeholder="Your message"
                  rows="4"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-2 outline-none rounded-md placeholder:text-white ${theme === 'light' ? 'bg-green-700 bg-opacity-60 text-black' : 'bg-green-500 bg-opacity-50 text-white'}`}
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className={`w-full px-4 py-2 rounded-md outline-none ${theme === 'light' ? 'bg-green-700 bg-opacity-60 hover:bg-green-600 text-white' : 'bg-green-500 hover:bg-green-600 bg-opacity-50 text-white'}`}
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
