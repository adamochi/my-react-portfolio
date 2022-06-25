import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import profile from "../../assets/images/nexen.png";
import Computer from "../Computer";

const Home = () => {
  return (
    <div className="homepage container">
      <Computer />

      <h4>Hello, I'm an aspiring Web Developer based in Australia!</h4>
      <h1>Adam Sullivan</h1>
      <img className="profile-pic" src={profile} alt="Adam Sullivan" />
      <Loader type="ball-clip-rotate-multiple" />
    </div>
  );
};

export default Home;
