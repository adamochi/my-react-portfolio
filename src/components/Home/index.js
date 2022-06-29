import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import profile from "../../assets/images/nexen.png";
import Computer from "../Computer";
import ButtonPortfolio from "../Links/ButtonPortfolio";

const Home = () => {
  return (
    <>
      <div className="homepage container">
        <Computer />

        <h4>
          Hello, I'm an aspiring Web Developer based in Brisbane, Australia!
        </h4>
        <div className="title-home">
          <div className="title">
            <h1>Adam Sullivan</h1>
            <h5>Front-End Web Developer / Designer</h5>
          </div>
          <div className="profile-pic">
            <img src={profile} alt="Adam Sullivan" />
          </div>
        </div>
        <div className="text-container">
          <h3>Latest</h3>
          <p>
            This year has been a turning point in my life as I have been
            completely focused on the career path I wish I had been able to
            choose earlier in my life. And that happens to be coding. Over the
            past few months, I have undertaken 3 courses and 2 bootcamps.
          </p>
        </div>

        <ButtonPortfolio />

        <div className="text-container">
          <h3>Bio</h3>
          <div className="text-section">
            <span>1987</span>
            <p>Born in Ipswich Australia</p>
          </div>
          <div className="text-section">
            <span>2009</span>
            <p>
              Completed my Chef apprenticeship in Cairns, and continued cooking
              in dynamic and fast paced environments for many years to come
            </p>
          </div>
          <div className="text-section">
            <span>2022</span>
            <p>
              a leap into something I have truly become passionate about
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets
            </p>
          </div>
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Home;
