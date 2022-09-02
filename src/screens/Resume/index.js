import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faJsSquare,
  faNodeJs,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faServer } from "@fortawesome/free-solid-svg-icons";
// import { faCode } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="resume-page container">
        <div className="paper">
          <h1>Adam Sullivan</h1>
          <h4>Spring Hill QLD 4000</h4>
          <h4>Ph: 0409 051 595</h4>
          <h4>E-mail: honeyrumballs@gmail.com</h4>
          <h4>
            GitHub:{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://github.com/adamochi"
            >
              adamochi
            </a>
          </h4>
          <h4>
            Linkedin:{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://www.linkedin.com/in/adam-sullivan87/"
            >
              adam-sullivan87
            </a>
          </h4>
          <div className="bordered-box">
            <div className="bordered-box_inner-box three-left">
              <div className="bordered-box_skills-div">
                <h3>Skills</h3>
              </div>
              <div className="ul-div_bordered-box">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faReact} /> React
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faJsSquare} /> JavaScript ES6
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHtml5} /> HTML5
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCss3} /> CSS3
                  </li>
                </ul>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faGithubAlt} /> Git/GitHub
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faNodeJs} /> Node JS
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faServer} /> MongoDB
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faSass} /> SCSS
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="i-have-xp-div">
            <div className="ul-div">
              <ul>
                <h3>Coding Projects</h3>
                <li>
                  Green Bean Woodsmith -{" "}
                  <a
                    href="https://greenbean-woodsmith.netlify.app/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </li>
                <li>
                  Momentum App -{" "}
                  <a
                    href="https://adamochi.github.io/vanilla-js-2022/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </li>
                <li>
                  My first portfolio -{" "}
                  <a
                    href="https://eloquent-kashata-64e9a1.netlify.app"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </li>
                <li>
                  JavaScript Number Game -{" "}
                  <a
                    href="https://eloquent-kashata-64e9a1.netlify.app/numbergame/index.html"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </li>
              </ul>
              <ul>
                <h3>Other Projects</h3>
                <li>
                  <strong>Building speakers</strong> - from designing and
                  assembling cabinets to designing and testing crossovers
                </li>
                <li>
                  <strong>Sound engineering</strong> - at church for the past 3
                  years
                </li>
                <li>
                  <strong>DIY mic</strong> - a condenser microphone project for
                  my home PC -{" "}
                  <a
                    href="https://imgur.com/gallery/DcRzLNG"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="i-have-xp-div">
            <div className="ul-div-XP">
              <ul>
                <h3>I have experience in</h3>
                <li>
                  Creating a browser app and portfolio websites using HTML, CSS,
                  JavaScript and the React JS Framework.
                </li>
                <li>
                  Using Three.js to implement a 3D model, which I created using
                  MagicaVoxel and Blender, into my portfolio website.
                </li>
                <li>
                  Using GitHub and Visual Studio Code -
                  https://github.com/adamochi
                </li>
                <li>
                  Building and Fixing Computers - from building over a dozen
                  entire systems to troubleshooting both software and hardware
                  issues.
                </li>
                <li>
                  Soldering - almost every project at home; from building
                  speaker crossovers and a microphone with a preamp -
                  https://imgur.com/gallery/DcRzLNG - to changing out the
                  switches inside computer mice &amp; keyboards.
                </li>
                <li>
                  Building Speakers - from designing and assembling cabinets to
                  soldering and testing different crossover configurations.
                </li>
                <li>Sound Engineering - at church for the past 3 years.</li>
              </ul>
            </div>
          </div>

          <div className="i-have-xp-div education-box">
            <h3>Education</h3>
            <h5>2022</h5>
            <h2>https://nomadcoders.co/</h2>
            <p>
              This year I began my study online and have completed eight
              courses, including 2 bootcamps! This journey has rewarded me with
              a greater understanding of HTML, CSS, JavaScript, and React Js.
              <Link
                className="studies-resume-link"
                onClick={scrollToTop}
                to={"/curriculum"}
              >
                {" "}
                - Completed Courses ↵
              </Link>
            </p>
            <h5>2005 - 2009</h5>
            <h2>Certificate III Commercial Cookery, TAFE</h2>
            <p>
              After graduating high school in 2004 I moved back to Cairns and
              started my chef apprenticeship that was completed in 2009.
            </p>
          </div>
          <div className="i-have-xp-div more-about-div">
            <h3>More About Me</h3>
            <p>
              I am a qualified Chef that has been cooking full-time in
              restaurants for seventeen years, mostly in the Cairns region, the
              past four years have been here in Brisbane at George's Paragon. I
              have enjoyed working in these fast-paced environments, putting my
              skills and experience to use, teaching others and working as a
              team. But I feel it is time for change, and the thing that has
              motivated me is my enjoyment of coding every day.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
