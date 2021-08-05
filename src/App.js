import React from "react";
import "./App.css";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import SkillPage from "./components/SkillPage";

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
    </>
  );
}
