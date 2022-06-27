import "./index.scss";
import React from "react";
import Loader from "react-loaders";

const About = () => {
  return (
    <>
      <div className="about-page container">
        <h1>About</h1>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default About;
