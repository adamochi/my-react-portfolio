import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
// import { faCode } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <>
      <div className="resume-page container">
        <div className="paper">
          <h1>Adam Sullivan</h1>
          <h4>Spring Hill QLD 4000</h4>
          <h4>Ph: 0409 051 595</h4>
          <h4>E-mail: sullivanadam@bigpond.com</h4>
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
          <div className="bordered-box">
            <div className="bordered-box_inner-box three-left">
              <h3>Coding Languages</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHtml5} /> HTML
                </li>
                <li>
                  <FontAwesomeIcon icon={faCss3} /> CSS
                </li>
                <li>
                  <FontAwesomeIcon icon={faSass} /> SCSS
                </li>
              </ul>
            </div>
            <div className="bordered-box_inner-box two">
              <h3>Programming Language</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faJsSquare} /> JavaScript
                </li>
              </ul>
            </div>
            <div className="bordered-box_inner-box one">
              <h3>Framework</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faReact} /> React JS
                </li>
              </ul>
            </div>
          </div>

          <div className="i-have-xp-div">
            <div className="ul-div">
              <ul>
                <h3>Coding Projects</h3>
                <li>React Website</li>
                <li>Momentum App</li>
                <li>My first portfolio</li>
                <li>JavaScript Number Game</li>
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
                  my home PC
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
                  Using GitHub and Visual Studio Code -
                  https://github.com/adamochi
                </li>
                <li>
                  For furthering my Front End skills, I chose to learn the React
                  JS framework
                </li>
                <li>
                  Building and fixing computers - from building over a dozen
                  entire systems to troubleshooting both software and hardware
                  issues
                </li>
                <li>
                  Soldering - almost every project at home; from building
                  speaker crossovers and a microphone with a preamp -
                  https://imgur.com/gallery/DcRzLNG - to changing out the
                  switches inside computer mice
                </li>
                <li>
                  Building speakers - from designing and assembling cabinets to
                  designing and testing crossovers
                </li>
                <li>Sound engineering - at church for the past 3 years</li>
              </ul>
            </div>
          </div>

          <div className="i-have-xp-div education-box">
            <h3>Education</h3>
            <h5>2022</h5>
            <h2>https://nomadcoders.co/</h2>
            <p>
              This year I started to study online and have completed three
              courses and 2 bootcamps that have rewarded me with a greater
              understanding of the basics of HTML, CSS, JavaScript, and now
              studying React Js. Here is a link to my profile which shows which
              courses I have completed and the badges acquired through the
              bootcamp challenges - https://nomadcoders.co/users/honeyrumballs
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
