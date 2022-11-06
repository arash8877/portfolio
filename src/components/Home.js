import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-wrapper">
      <div className="home-left">
        <p className="home-left-top">Hello, I'm</p>
        <p className="home-left-middle">Arash</p>
        <p className="home-left-bottom">
          Front end developer. I love building web pages and make product that
          outstanding the companies
        </p>
      </div>
      <div className="home-right">
        <div>
          <i className="fa-brands fa-react"></i>
        </div>
        <div>
          <i className="fa-brands fa-js"></i>
        </div>
        <div>
          <i className="fa-brands fa-css3-alt"></i>
        </div>
        <div>
          <i className="fa-brands fa-html5"></i>
        </div>
        <div>
          <i className="fa-brands fa-html5"></i>
        </div>
        <div>
          <i className="fa-brands fa-html5"></i>
        </div>
      </div>
    </section>
  );
};

export default Home;
