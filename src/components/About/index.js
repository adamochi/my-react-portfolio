import "./index.scss";
import Loader from "react-loaders";
import React, { useEffect, useState } from "react";

import AnimatedLetters from "../AnimatedLetters";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

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
            strArray={"About".split("")}
            idx={15}
          />
        </h1>
      </header>
      <div className="about-page container"></div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default About;
