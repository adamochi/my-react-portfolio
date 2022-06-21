import React from "react";
import "./index.scss";
import Loader from "react-loaders";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1>Portfolio</h1>
      <Loader type="ball-clip-rotate-multiple" />
    </div>
  );
};

export default Portfolio;
