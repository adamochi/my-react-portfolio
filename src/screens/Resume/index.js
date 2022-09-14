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
import {
  faCloudDownload,
  faEarthOceania,
  faPhoneSquareAlt,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  return (
    <>
      <div className="resume-page container">
        <div className="paper">
          <div className="resume-download">
            <a href="https://drive.google.com/file/d/1GC_FrfULQ3bJd5NFrtpww2ZCy3N80Bc7/view?usp=sharing">
              <FontAwesomeIcon icon={faCloudDownload} />{" "}
              <span>Download Resume</span>
            </a>
          </div>
          <div className="left-panel-div">
            <div className="profile-pic">
              <img src={me} alt="profile-pic" />
            </div>

            <div className="contact-panel">
              <h3>Contact</h3>
              <div>
                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                <span>0409 051 595</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faSquareEnvelope} />
                <span>honeyrumballs@gmail.com</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faEarthOceania} />
                <span>Spring Hill, QLD 4000</span>
              </div>
              <h3>Skills</h3>
            </div>
            <div className="skills-visual-resume">
              <ul>
                <li>React</li>
                <div className="range-party">
                  <input type="range" max="100" value="75" />
                  <span>75%</span>
                </div>
                <li>JavaScript ES6</li>
                <div className="range-party">
                  <input type="range" max="100" value="75" />
                  <span>75%</span>
                </div>
                <li>HTML5</li>
                <div className="range-party">
                  <input type="range" max="100" value="90" />
                  <span>90%</span>
                </div>
                <li>CSS3, SCSS</li>
                <div className="range-party">
                  <input type="range" max="100" value="90" />
                  <span>90%</span>
                </div>
                <li>Git / GitHub</li>
                <div className="range-party">
                  <input type="range" max="100" value="80" />
                  <span>80%</span>
                </div>
                <li>Node Js</li>
                <div className="range-party">
                  <input type="range" max="100" value="50" />
                  <span>50%</span>
                </div>
                <li>MongoDB</li>
                <div className="range-party">
                  <input type="range" max="100" value="60" />
                  <span>60%</span>
                </div>
                <li>Express</li>
                <div className="range-party">
                  <input type="range" max="100" value="60" />
                  <span>60%</span>
                </div>
                <li>Three.js</li>
                <div className="range-party">
                  <input type="range" max="100" value="60" />
                  <span>60%</span>
                </div>
                <li>Visual Studio Code</li>
                <div className="range-party">
                  <input type="range" max="100" value="80" />
                  <span>80%</span>
                </div>
              </ul>
            </div>
          </div>

          <div className="right-panel-div">
            <h1>ADAM SULLIVAN</h1>
            <h2>Frontend Web Developer</h2>
            <div className="document-party">
              <div className="about-and-education-div">
                <div className="about-me-resume">
                  <h4>ABOUT</h4>
                  <p>
                    I'm a tech-savvy person and as far back as I can remember, I
                    have been fascinated with computers. I have always had a
                    strong interest to learn and to make things work. As someone
                    that has been working for 17 years in busy kitchens, I have
                    developed skills that i can bring into my new career such
                    as:
                  </p>
                  <ul>
                    <li>
                      <strong>Team-work</strong> spirit will help working with
                      multiple members of an organisation to ensure goals are
                      being met.
                    </li>
                    <li>
                      <strong>Love of learning</strong> spirit will help working
                      with multiple members of an organisation to ensure goals
                      are being met.
                    </li>
                    <li>
                      <strong>Patience</strong> - no matter the challenge, I am
                      the type of person that can untangle fishing line
                    </li>
                    <li>
                      <strong>Problem Solving</strong> - there are many
                      unexpected things happening everyday in a kitchen, and I
                      always find the solution being met.
                    </li>
                    <li>
                      <strong>Good under pressure</strong> - relating to problem
                      solving, it has always been a high pressure situation when
                      I needed to come up with the solution.
                    </li>
                  </ul>
                </div>
                <div className="education-div-resume">
                  <h4>EDUCATION</h4>
                  <span>
                    <strong>Nomad Coders</strong> -
                    nomadcoders.co/users/adamochi
                  </span>
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
