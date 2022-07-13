import React, { useEffect, useState } from "react";
import "./index.scss";
import AnimatedLetters from "../../components/AnimatedLetters";
import Loader from "react-loaders";
import Chef from "../../assets/images/time.png";
import profile from "../../assets/images/jeju180.png";
import Computer from "../../components/Computer";
import ButtonPortfolio from "../../components/Links/ButtonPortfolio";
import ButtonAbout from "../../components/Links/ButtonAbout";
import Nomad from "../../components/Links/Nomad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import CoursesBtn from "../../components/Links/CoursesBtn";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <div className="homepage container">
        <Computer />

        <h4>
          Hello, I'm an aspiring Web Developer based in Brisbane, Australia!
        </h4>
        <div className="title-home">
          <div className="title">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"Adam Sullivan".split("")}
                idx={20}
              />
            </h1>
            <h5>Front-End Web Developer / Designer</h5>
          </div>
          <div className="profile-pic">
            <img src={profile} alt="Adam Sullivan" />
          </div>
        </div>
        <div className="paper-home">
          <div className="text-container">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"The Front End".split("")}
                idx={25}
              />
            </h1>
            <div className="the-front-end-p">
              <p>
                This year has been a turning point in my life as I have
                completely dedicated my time into becoming a Web Developer.
                Since starting my journey into learning how to code, I found
                myself enjoying it more and more each day.
              </p>
              <p>
                With <strong>600+</strong> hours of studying &amp; practicing
                writing code over the course of this year, I have gained a solid
                understanding of HTML, CSS, basic JavaScript. As well as the
                React JS framework which I have built this website on!
              </p>
            </div>
          </div>

          <ButtonPortfolio />

          <div className="text-container">
            <div className="text-section text-section-with-border">
              <h3>How did I make it this far by Self study?</h3>
              <div className="inner-xp-learn-div">
                <span className="year-span">2022</span>
                <p>
                  <strong>Online Courses and self-motivation</strong>
                  <br /> I have undertaken online courses at Nomad Coders For
                  the majority of the time I have been studying.
                  <br />
                  Here you can see the courses and bootcamps I've completed:
                </p>
              </div>
              <div className="nomad-link-div">
                <Nomad />
                <CoursesBtn />
                {/* <span>completed curriculum link goes here</span> */}
              </div>
            </div>
            <h3>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"The Back End".split("")}
                idx={25}
              />
            </h3>
            <div className="text-section">
              <h6>What I'm like:</h6>
              <p>
                I am the person that enjoys figuring out how things work and
                improving every aspect of what I am working on. I like to make
                every iteration better and faster.
                <br />
                Never giving up - I have the patience to keep going, even when I
                hit a blocker. I see it as a chance to learn. My character is
                the problem solver.
                <br />
              </p>
              <h6>What I get up to:</h6>
              <p>
                My everyday hobbies are listening to music, and coding. I am
                also a sound engineer at church every second Sunday.
                <br />
              </p>
              <h6>Life before coding;</h6>
              <p>
                In 2009 I Completed my Chef apprenticeship in Cairns, and
                continued cooking in dynamic and fast paced environments for
                many years to come.
                <br />
                Besides improving my cooking skills, I grew to be good under
                pressure and also developed my teamwork skills. Being good in a
                team and communicating well also meant becoming a good listener
                and someone that could take in the feedback from others and use
                it to improve any aspect of my work.
              </p>
            </div>
          </div>
          <ButtonAbout />
        </div>
        <div className="time-to-change">
          <img src={Chef} alt="adam chef" loading="lazy" />
          <span>
            <FontAwesomeIcon icon={faStopwatch} /> It's time for a career
            change!
          </span>
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Home;
