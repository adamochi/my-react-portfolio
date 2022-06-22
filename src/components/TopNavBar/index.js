import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCat, faPaw } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import LightModeButton from "../LightModeButton";

const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <div className="my-name">
        <FontAwesomeIcon icon={faPaw} size={"2x"} />
        <FontAwesomeIcon icon={faCat} />
        <span>Adam Sullivan</span>
      </div>
      <div className="source-n-light">
        <a className="top-nav-icon" href="https://github.com/adamochi">
          <FontAwesomeIcon
            className="github-icon"
            icon={faGithub}
            shake={true}
          />
          <span>Source</span>
        </a>
        <LightModeButton />
      </div>
      <div className="hamburger">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default TopNavBar;
