import "./index.scss";
import React from "react";
import Loader from "react-loaders";
import Learning from "../learning";

const About = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <Learning />
      <Loader type="ball-clip-rotate-multiple" />
    </div>
  );
};

export default About;
