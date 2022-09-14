import React from "react";
import "./index.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faReact,
//   faHtml5,
//   faCss3,
//   faSass,
//   faJsSquare,
//   faNodeJs,
//   faGithubAlt,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";
// import { faServer } from "@fortawesome/free-solid-svg-icons";
// import { faCode } from "@fortawesome/free-solid-svg-icons";
import me from "assets/images/jeju-resume.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  return (
    <>
      <div className="resume-page container">
        <div className="paper">
          <div className="resume-download">
            <a href="https://drive.google.com/file/d/1sODbJTtXTKmw8hWWZkbTrwkb5mZsbEwy/view?usp=sharing">
              <FontAwesomeIcon icon={faCloudDownload} />{" "}
              <span>Download Resume</span>
            </a>
          </div>
          <div className="contact-bubble">
            <div>
              <span>Phone</span>
              <span>0409 051 595</span>
              <div className="triangle"></div>
            </div>
            <div className="middle-div_contact-bubble">
              <span>Email</span>
              <span>honeyrumballs@gmail.com</span>
              <div className="divider-1"></div>
              <div className="divider-2"></div>
            </div>
            <div>
              <span>Address</span>
              <span>Spring Hill, QLD 4000</span>
            </div>
          </div>
          <header>
            <div className="profile-pic">
              <img src={me} alt="profile-pic" />
            </div>
            <div className="header-name-div">
              <h1>Adam Sullivan</h1>
              <div className="header-underline"></div>
              <h4>Frontend Developer</h4>
            </div>
          </header>

          <div className="document-party">
            <div className="left-div">
              <div className="about-me-resume">
                <h4>About</h4>
                <p>
                  I'm a tech-savvy person and as far back as I can remember, I
                  have been fascinated with computers. I have always had a
                  strong interest to learn and to make things work.
                  transferrable skills As someone that has spent 17 years
                  working in busy kitchens. I have developed many skills that
                  will accelerate my transitioning to becoming a Web Developer.
                  My team work spirit will help working with multiple members of
                  an organisation to ensure goals are being met. My love of
                  learning - there is no end to learning and that motivates me
                  even more to grow as a developer! Patience - no matter the
                  challenge, I am the type of person that can untangle fishing
                  line! Problem Solving - there are many unexpected things
                  happening everyday in a kitchen, and I always find the
                  solution. Good under pressure - relating to problem solving,
                  it has always been a high pressure situation when I needed to
                  come up with the solution.
                </p>
              </div>
            </div>
            <div className="right-div">
              <div className="education-div-resume">
                <h4>Education</h4>
                <span>Nomad Coders - nomadcoders.co/users/adamochi</span>
                <ul>
                  <li>Vanilla JS - 2 Weeks Completion Class</li>
                  <li>Creating a Movie Web Service with React JS</li>
                  <li>React Native 101 for beginners</li>
                  <li>Kakao Clone - 2 Weeks Completion Class</li>
                  <li>Git &amp; Github for Everyone</li>
                  <li>Redux 101 for Beginners</li>
                  <li>10 Practical React Hooks</li>
                  <li>Create a drawing app with vanilla JS</li>
                </ul>
                <h4>Skills</h4>
                <div className="skills-visual-resume">
                  <ul>
                    <li>React</li>
                    <div className="range-party">
                      <input type="range" max="20" value="16" />
                      <span>85%</span>
                    </div>
                    <li>JavaScript ES6</li>
                    <div className="range-party">
                      <input type="range" max="20" value="16" />
                      <span>85%</span>
                    </div>
                    <li>HTML5</li>
                    <div className="range-party">
                      <input type="range" max="20" value="16" />
                      <span>85%</span>
                    </div>
                    <li>CSS3, SCSS</li>
                    <div className="range-party">
                      <input type="range" max="20" value="16" />
                      <span>85%</span>
                    </div>
                  </ul>
                  <ul>
                    <li>Git / GitHub</li>
                    <div className="range-party">
                      <input type="range" max="20" value="16" />
                      <span>85%</span>
                    </div>
                    <li>Node Js</li>
                    <div className="range-party">
                      <input type="range" max="20" value="16" />
                      <span>85%</span>
                    </div>
                    <li>MongoDB</li>
                    <div className="range-party">
                      <input type="range" max="20" value="16" />
                      <span>85%</span>
                    </div>
                    <li>Express</li>
                    <div className="range-party">
                      <input type="range" max="20" value="16" />
                      <span>85%</span>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
