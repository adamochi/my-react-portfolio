import React, { useState, useEffect } from "react";
import "./index.scss";
import AnimatedLetters from "../../components/AnimatedLetters";

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
            strArray={"Courses & Components Covered".split("")}
            idx={15}
          />
        </h1>
      </header>
      <div className="curriculum-page container">
        <div>
          <h2>Course Name</h2>
          <div>
            <h3>component</h3>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
