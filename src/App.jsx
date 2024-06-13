import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { ThemeProvider } from "./Theme";
import RootPage from "./RootPage";
import ProjectDetails from "./RouteCompo/ProjectDetails";
import Login from "./UserCompo/Login";

const MainApp = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const faqRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <ThemeProvider>
      <div className="w-full h-screen relative">
        <Router>
          <div className="w-full fixed z-[99]">
            <Navbar
              aboutRef={aboutRef}
              experienceRef={experienceRef}
              skillsRef={skillsRef}
              projectsRef={projectsRef}
              faqRef={faqRef}
              homeRef={homeRef}
            />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <RootPage
                  aboutRef={aboutRef}
                  experienceRef={experienceRef}
                  skillsRef={skillsRef}
                  projectsRef={projectsRef}
                  faqRef={faqRef}
                  homeRef={homeRef}
                />
              }
            />
            <Route
              path="/project/:id/details"
              element={
                <ProjectDetails />
              }
            />
            <Route
              path="/salman/login"
              element={
                <Login />
              }
              />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default MainApp;
