import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>experience</p>
        <p>
          <span>&</span>education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Software Developer</p>
          <p>Siemens Healthcare</p>
          <p>
            <span>Sept'19 - Present</span>
            <a href="/">
              <LocationOnIcon />
              Bangalore, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Post Gradute Diploma</p>
          <p>Center for Development of Advanced Computing</p>
          <p>
            <span>Feb'19 - Aug'19</span>
            <a href="/">
              <LocationOnIcon />
              Bangalore, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Bachelors of Engineering</p>
          <p>Global Engineering College</p>
          <p>
            <span>July'14 - June'18</span>
            <a href="/">
              <LocationOnIcon />
              Jabalpur, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Higher Secondary Education</p>
          <p>Kendriya Vidyalaya VFJ School</p>
          <p>
            <span>April'13 - March'14</span>
            <a href="/">
              <LocationOnIcon />
              Jabalpur, India
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
