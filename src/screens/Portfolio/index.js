import "./index.scss";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../../components/AnimatedLetters";
import portfolioData from "../../data/portfolio.json";
const portData = portfolioData.portfolio;

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

  return (
    <>
      <header className="works-title">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Works on the Web".split("")}
            idx={10}
          />
        </h1>
      </header>
      <div className="portfolio-page container">
        {portData.map((course, index) => (
          <div className="course-div" key={index}>
            <div className="window-top-header-bar">
              <div className="window-top-icon">
                <FontAwesomeIcon icon={faComputer} />
                {course.title}
              </div>
              <div className="window-close-div">
                <div>
                  <div className="minimise"></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div className="x-div">X</div>
              </div>
            </div>

            <div className="map-party">
              <div className="images-container">
                <div className="image-box">
                  <img
                    src={course.cover}
                    className="portfolio-image"
                    alt="portfolio"
                  />
                  <div className="content">
                    <p className="title">{course.title}</p>
                    <h4 className="description">{course.description}</h4>
                    <button
                      className="btn"
                      onClick={() => window.open(course.url)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Portfolio;
