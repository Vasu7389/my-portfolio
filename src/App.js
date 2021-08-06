import React from "react";
import "./App.css";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import SkillPage from "./components/SkillPage";
import EducationPage from "./components/EducationPage";

export default function App() {
  return (
    <>
      <div className="app-section">
        <HomePage />
      </div>
      <div className="app-section">
        <AboutPage />
      </div>
      <div className="app-section">
        <SkillPage />
      </div>
      <div className="app-section-list">
        <ProjectPage />
      </div>
      <div className="app-section">
        <EducationPage />
      </div>
      <div className="app-section">
        <ContactPage />
      </div>
    </>
  );
}
