import React, { useState, useEffect } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../../components/AnimatedLetters";

const Contact = () => {
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
            strArray={"Contact Me".split("")}
            idx={15}
          />
        </h1>
      </header>
      <div className="contact-page container"></div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Contact;
