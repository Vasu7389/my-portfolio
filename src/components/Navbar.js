import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">vasu.awasthi</div>
      <div className="navbar-right-options">
        <p>home</p>
        <p>about</p>
        <p>skills</p>
        <p>projects</p>
        <p>resume</p>
        <p>contact</p>
      </div>
    </div>
  );
};

export default Navbar;
