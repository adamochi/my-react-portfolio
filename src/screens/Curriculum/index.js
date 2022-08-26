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
  faLaptopCode,
  faPlusSquare,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const course = courses.courses;

// const map1 = new Map([course[0].images]);
// const map2 = new Map([course[0].achieved]);
// const newmap = new Map([...map1, ...map2]);

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
      <header className="curriculum-title">
        <h1>
          <FontAwesomeIcon icon={faLaptopCode} />{" "}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"My Completed Studies".split("")}
            idx={15}
          />
        </h1>
      </header>
      <div className="curriculum-page container">
        {course.map((course, index) => (
          <div className="course-div" key={index}>
            <div className="window-top-header-bar">
              <div>
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
              <div className="my-computer-file-system">
                <div className="linesss"></div>
                <div className="divider-linesss"></div>
                <div className="Components-file-system">
                  <FontAwesomeIcon icon={faComputer} />
                  <h3>Components (course)</h3>
                </div>
                <div className="minus-div-parent">
                  <div className="minus-div">-</div>
                  <FontAwesomeIcon icon={faLaptopCode} />
                  <h4> Coding</h4>
                </div>
                <ul>
                  {course.description.map((item, key) => (
                    <li key={key}>
                      <FontAwesomeIcon icon={faPlusSquare} />
                      {item.length > 20 ? `${item.substring(0, 20)}...` : item}
                    </li>
                  ))}
                </ul>
                <div className="minus-div-parent">
                  <div className="minus-div">-</div>
                  <FontAwesomeIcon icon={faTools} />
                  <h4>System Tools:</h4>
                </div>
                <ul>
                  {course.packages.map((item, key) => (
                    <li key={key}>
                      <FontAwesomeIcon icon={faPlusSquare} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="files-with-images">
                {course.achieved.map((item, key) => (
                  <div key={key}>
                    <img src={course.image} alt="img" />
                    <span>{item}.png</span>
                  </div>
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
