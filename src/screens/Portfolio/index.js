import React, { useEffect, useState } from "react";
import "./index.scss";
import Loader from "react-loaders";
import portfolioData from "../../data/portfolio.json";
import AnimatedLetters from "../../components/AnimatedLetters";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  });
  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <header className="page-title">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Works on the Web".split("")}
            idx={15}
          />
        </h1>
      </header>
      <div className="portfolio-page container">
        <div className="portfolio-images-container">
          {renderPortfolio(portfolioData.portfolio)}
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Portfolio;
