import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <i className="fa-brands fa-connectdevelop"></i>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/my works">My Works</Link>
      </nav>
    </div>
  );
};

export default Header;
