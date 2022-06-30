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
            <div className="bordered-box_inner-box one">
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
          <span>skills</span>
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
