import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-wrapper">
      <div>
        <i className="fa-brands fa-connectdevelop"></i>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/my works">My Works</Link>
        <Link to="/about me">About Me</Link>
      </nav>
    </div>
  );
};

export default Header;
