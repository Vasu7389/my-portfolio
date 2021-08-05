import React from "react";
import "./SkillPage.css";

const SkillPage = () => {
  return (
    <div className="skill-container">
      <div className="skill-header">skills</div>
      <div className="skill-info">
        <div className="skill-left">
          <div id="myCanvasContainer">
            <canvas width="600" height="400" id="myCanvas"></canvas>
          </div>
          <div id="tags">
            <ul>
              <li>
                <a href="/skills">javascript</a>
              </li>
              <li>
                <a href="/skills">react</a>
              </li>
              <li>
                <a href="/skills">html</a>
              </li>
              <li>
                <a href="/skills">css</a>
              </li>
              <li>
                <a href="/skills">redux</a>
              </li>
              <li>
                <a href="/skills">github</a>
              </li>
              <li>
                <a href="/skills">vs code</a>
              </li>
              <li>
                <a href="/skills">website</a>
              </li>
              <li>
                <a href="/skills">cypress</a>
              </li>
              <li>
                <a href="/skills">jest</a>
              </li>
              <li>
                <a href="/skills">development</a>
              </li>
              <li>
                <a href="/skills">react-routing</a>
              </li>
              <li>
                <a href="/skills">react</a>
              </li>
              <li>
                <a href="/skills">es6+</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-right">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;