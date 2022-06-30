import React from "react";
import "./index.scss";

const Resume = () => {
  return (
    <>
      <div className="contact-page container">
        <div className="paper">
          <h1>Adam Sullivan</h1>
          <h4>Brisbane QLD 4000</h4>
          <h4>Ph: 0409 051 595</h4>
          <h4>E-mail: sullivanadam@bigpond.com</h4>
          <h4>
            GitHub: <a href="https://github.com/adamochi">adamochi</a>
          </h4>

          <div className="bordered-box">
            <div className="bordered-box_inner-box">
              <h3>coding languages</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div className="bordered-box_inner-box">
              <h3>programming language</h3>
              <ul>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="bordered-box_inner-box">
              <h3>framework</h3>
              <ul>
                <li>React JS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
