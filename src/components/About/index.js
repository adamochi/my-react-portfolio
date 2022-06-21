import "./index.scss";
import React from "react";
import Loader from "react-loaders";

const About = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <Loader type="ball-clip-rotate-multiple" />
    </div>
  );
};

export default About;
