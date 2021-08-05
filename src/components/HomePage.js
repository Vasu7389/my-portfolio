import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./HomePage.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
        <div>Hello, I am Vasu,</div>
        <div>a software developer who loves to code.</div>
      </div>
      <div className="home-page-footer">
        <LinkedInIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default HomePage;
