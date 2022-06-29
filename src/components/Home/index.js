import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import profile from "../../assets/images/nexen.png";
import Computer from "../Computer";
import ButtonPortfolio from "../Links/ButtonPortfolio";
import ButtonAbout from "../Links/ButtonAbout";

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
          <h3>The Front End</h3>
          <p>
            This year has been a turning point in my life as I have completely
            dedicated my time into becoming a Web Developer. Since starting this
            journey into learning how to code, I found myself enjoying it more
            and more as I learnt new things and solved problems. I became
            addicted to coding!
            <br />
            With an average of 10 hours per day studying over the course of this
            year, I have undertaken 3 courses and 2 bootcamps. Gaining
            understanding of HTML, CSS, basic JavaScript as well as the React JS
            framework which I have built this website on!
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
              A leap into something I have truly become more passionate about
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets
            </p>
            <p>
              If there is one thing i have learnt form working in the kitchen,
              it's communication and organisatinoal skills. skills from kitchen
              i can use
            </p>
          </div>
        </div>
        <ButtonAbout />
      </div>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Home;
