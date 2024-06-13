import React from "react";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";
import Home from "./Component/Home";
import About from "./Component/About";
import Expriance from "./Component/Expriance";
import Skills from "./Component/Skills";
import FAQ from "./Component/FAQ";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";
  
const RootPage = ({
  aboutRef,
  experienceRef,
  skillsRef,
  projectsRef,
  faqRef,
  homeRef
}) => {
  const partyPoppers = (side) =>
    Array(10)
      .fill(0)
      .map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${side === "left" ? "left-4" : "right-4"}`}
          style={{
            top: 0,
            left: side === "left" ? 0 : "unset",
            right: side === "right" ? 0 : "unset",
          }}
          initial={{ y: -100 }}
          animate={{ y: "100vh", opacity: [1, 0.5, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 1,
          }}
        >
          <h1 className="text-green-400 text-2xl">|</h1>
        </motion.div>
      ));



  return (
    <div className="w-full h-screen pt-12">
      <div className="w-full relative">
        <div className="hidden sm:flex absolute top-0 bottom-0 left-4 z-10 flex-col justify-center items-start space-y-4 pl-2">
          {partyPoppers("left")}
        </div>

        <div className="hidden sm:flex absolute top-0 bottom-0 right-4 z-10 flex-col justify-center items-end space-y-4 pr-2">
          {partyPoppers("right")}
        </div>
      </div>
      <div ref={homeRef}>
      <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={experienceRef}>
        <Expriance />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default RootPage;
