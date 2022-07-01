import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import Chef from "../../assets/images/time.png";
import profile from "../../assets/images/jeju.png";
import Computer from "../Computer";
import ButtonPortfolio from "../Links/ButtonPortfolio";
import ButtonAbout from "../Links/ButtonAbout";
import Nomad from "../Links/Nomad";
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
        <div className="paper-home">
          <div className="text-container">
            <h3>The Front End</h3>
            <div className="the-front-end-p">
              <p>
                This year has been a turning point in my life as I have
                completely dedicated my time into becoming a Web Developer.
                Since starting my journey into learning how to code, I found
                myself enjoying it more and more each day.
              </p>
              <p>
                With 600+ hours of studying &amp; practicing writing code over
                the course of this year, I have gained a solid understanding of
                HTML, CSS, basic JavaScript. As well as the React JS framework
                which I have built this website on!
              </p>
            </div>
          </div>

          <ButtonPortfolio />

          <div className="text-container ">
            <div className="text-section text-section-with-border">
              <h3>How did I make it this far by Self study?</h3>
              <div className="inner-xp-learn-div">
                <span>2022</span>
                <p>
                  <strong>Online Courses and self-motivation</strong>
                  <br /> I have undertaken online courses at Nomad Coders For
                  the majority of the time I have been studying.
                  <br />
                  Here you can see the formal courses I've completed
                </p>
                <Nomad />
              </div>
            </div>
            <div className="nomad-div">
              <h2>completed courses link goes here</h2>
            </div>
            <h3>The Back End</h3>
            <div className="text-section">
              <p>
                <strong>Things I like:</strong>
                <br />
                My everyday hobbies are listening to music, coding, &amp;
                cooking.
                <br />
                <strong>What I get up to:</strong>
                <br />I am a sound engineer at church. I have had a passion for
                good audio for many years. And even considered a career path in
                the audio world.
                <br />
                <strong>Life before coding;</strong>
                <br />
                In 2009 I Completed my Chef apprenticeship in Cairns, and
                continued cooking in dynamic and fast paced environments for
                many years to come.
              </p>
            </div>
          </div>
          <ButtonAbout />
        </div>
        <div className="time-to-change">
          <img src={Chef} alt="adam" />
          <span>It's time to change!</span>
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Home;
