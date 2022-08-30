import React, { useEffect, useState } from "react";
import "./index.scss";
import AnimatedLetters from "components/AnimatedLetters";
import Loader from "react-loaders";
import Chef from "assets/images/time.png";
import profile from "assets/images/jeju180.png";
import Computer from "components/Computer";
import ButtonPortfolio from "components/Links/ButtonPortfolio";
import ButtonAbout from "components/Links/ButtonAbout";
import Nomad from "components/Links/Nomad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import CoursesBtn from "components/Links/CoursesBtn";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="homepage container">
        <Computer />

        <h4>
          Hello, I&apos;m an aspiring Web Developer based in Brisbane,
          Australia!
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
            <h5>Front-End Web Developer</h5>
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
                As far back as I can remember, I have been fascinated with
                computers. I have always had a strong interest to learn and to
                make things work. Since starting my journey into learning how to
                code, I&apos;ve found myself enjoying it more and more each day
                as I solve new challenges and build upon my skills.
              </p>
              <br />
              <p>
                From studying &amp; practicing writing code over the course of
                this year, I have gained a solid understanding of JavaScript ES6
                and React which I have built multiple applications with. Now I
                am looking to start my new career as a front end web developer
              </p>
            </div>
          </div>
          <ButtonPortfolio />
          <div className="text-container">
            <div className="text-section text-section-with-border">
              <h3>Where I studied</h3>
              <div className="inner-xp-learn-div">
                <span className="year-span">2022</span>
                <p>
                  <strong>Online at Nomad Coders</strong>
                  <br />
                  This year I began my study online and have completed eight
                  courses, including two bootcamps, that have rewarded me with a
                  greater proficiency in React, JavaScript, HTML5, and CSS3. As
                  well as many other tools.
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
              <h6>More about me:</h6>
              <p>
                Although I wasn&apos;t able to follow this path when I graduated
                high school, I had this goal to change my career when I got
                older. This year has been that turning point in my life as I
                have completely dedicated my time into becoming a Web Developer.
              </p>
              <h6>Life before coding:</h6>
              <p>
                In 2009 I Completed my Chef apprenticeship in Cairns, and
                continued cooking in dynamic and fast paced environments for
                many years to come.
                <br />
                Besides improving my cooking skills, I grew to be good under
                pressure and developed my teamwork skills. Being good in a team
                and communicating well also meant becoming a good listener and
                someone that could take in the feedback from others and use it
                to improve any aspect of my work.
              </p>
            </div>
          </div>
          <ButtonAbout banana="/resume" btnTxt="Resume ↵" />
        </div>
        <div className="time-to-change">
          <img src={Chef} alt="adam chef" loading="lazy" />
          <span>
            <FontAwesomeIcon icon={faStopwatch} /> It&apos;s time for a career
            change!
          </span>
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Home;
