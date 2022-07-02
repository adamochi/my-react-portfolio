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
      <div className="contact-page container">
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
            <h3>I have experience in:</h3>
            <ul>
              <li>
                Creating a browser app and a portfolio website using HTML, CSS
                and JavaScript
              </li>
              <li>
                Using GitHub and Visual Studio Code -
                https://github.com/adamochi
              </li>
              <li>
                Building and fixing computers - from building over a dozen
                entire systems to troubleshooting both software and hardware
                issues
              </li>
              <li>
                Soldering - almost every project at home; from building speaker
                crossovers and a microphone with a preamp -
                https://imgur.com/gallery/DcRzLNG - to changing out the switches
                inside computer mice
              </li>
              <li>
                Building speakers - from designing and assembling cabinets to
                designing and testing crossovers
              </li>
              <li>Sound engineering - at church for the past 3 years</li>
            </ul>
          </div>
          <span>projects</span>
          <span>experience</span>
          <span>education</span>
          <span>personal</span>
          <span>
            For furthering my Front End skills, I chose to learn the React JS
            framework based on it's maintainability
          </span>
        </div>
      </div>
    </>
  );
};

export default Resume;
