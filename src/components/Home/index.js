import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import profile from "../../assets/images/nexen.png";
import Computer from "../Computer";

const Home = () => {
  return (
    <>
      <div className="homepage container">
        <Computer />

        <h4>Hello, I'm an aspiring Web Developer based in Australia!</h4>
        <div className="title-home">
          <div className="title">
            <h1>Adam Sullivan</h1>
            <h5>Front-End Web Developer / Designer</h5>
          </div>
          <div className="profile-pic">
            <img src={profile} alt="Adam Sullivan" />
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Home;
