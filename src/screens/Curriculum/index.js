import React, { useState, useEffect } from "react";
import "./index.scss";
import AnimatedLetters from "../../components/AnimatedLetters";
import courses from "../../data/courses.json";
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
            strArray={"This page under construction".split("")}
            idx={15}
          />
        </h1>
      </header>
      <div className="curriculum-page container">
        {course.map((course, index) => (
          <div className="course-div" key={index}>
            <h2>{course.title}</h2>
            <div className="curriculum-links-div">
              <a target="_blank" rel="noreferrer" href={course.url}>
                {course.linktext}
              </a>
              {course.linktexttwo !== "" && (
                <a target="_blank" rel="noreferrer" href={course.urltwo}>
                  {course.linktexttwo}
                </a>
              )}
            </div>
            <div className="using-div">
              {course.languages.map((i, idx) => (
                <div className="using" key={idx}>
                  {i}
                </div>
              ))}
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
