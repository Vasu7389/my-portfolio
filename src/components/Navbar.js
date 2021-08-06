import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">vasu.awasthi</div>
      <div className="navbar-right-options">
        <Link to="home" spy={true} smooth={true} duration={500}>
          home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          about
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          skills
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          projects
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
