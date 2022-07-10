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
      <div className="curriculum-page container"></div>
    </>
  );
};

export default Curriculum;
