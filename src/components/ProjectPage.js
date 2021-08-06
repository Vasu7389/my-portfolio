import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">projects</div>
      <div className="project-list">
        <div className="project">
          <p>E-commerce</p>
          <p>Gadgets</p>
          <p>
            <span>2021</span>
            <a href="https://gadgetsapp.herokuapp.com/">Tap to view</a>
          </p>
        </div>
        <div className="project">
          <p>Clock</p>
          <p>Stopwatch & Counter</p>
          <p>
            <span>2021</span>
            <a href="http://stopwatch-timer.herokuapp.com/">Tap to view</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
