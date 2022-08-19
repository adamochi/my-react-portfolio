import React, { useState, useEffect } from "react";
import "./index.scss";
import AnimatedLetters from "components/AnimatedLetters";
import courses from "data/courses.json";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const course = courses.courses;

const Curriculum = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4500);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <header className="page-title">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Under Construction".split("")}
            idx={15}
          />{" "}
          <FontAwesomeIcon icon={faHammer} />
        </h1>
      </header>
      <div className="curriculum-page container">
        {course.map((course, index) => (
          <div className="course-div" key={index}>
            <div className="window-top-header-bar">
              <FontAwesomeIcon icon={faComputer} />
              {course.title}
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
            <div className="menu-bar-xp">
              <div className="menu-bar-with-logo">
                <div className="using-div">
                  {course.languages.map((i, idx) => (
                    <div className="using" key={idx}>
                      {i}
                    </div>
                  ))}
                </div>
                <div className="windows-icon-div">
                  <FontAwesomeIcon icon={faWindows} />
                </div>
              </div>
              <div className="curriculum-links-div">
                <div className="back-n-forward">
                  <Link to={"/"}>
                    <FontAwesomeIcon
                      className="back-svg"
                      icon={faArrowAltCircleLeft}
                    />
                    back ▾
                  </Link>
                </div>
                <div className="back-n-forward forward">
                  <FontAwesomeIcon icon={faArrowAltCircleRight} /> ▾
                </div>
                <a
                  className="xp-a-links"
                  target="_blank"
                  rel="noreferrer"
                  href={course.url}
                >
                  🔎 {course.linktext}
                </a>
                {course.linktexttwo !== "" && (
                  <a
                    className="xp-a-links"
                    target="_blank"
                    rel="noreferrer"
                    href={course.urltwo}
                  >
                    {course.linktexttwo}
                  </a>
                )}
              </div>
            </div>

            <div className="map-party">
              <div>
                <h3>Components:</h3>
                {course.description.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </div>
              <div>
                <h3>What was used:</h3>
                {course.packages.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </div>
              <div>
                <h3>What I made:</h3>
                {course.achieved.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Curriculum;
