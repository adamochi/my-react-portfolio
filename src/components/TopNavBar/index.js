import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import LightModeButton from "../LightModeButton";

const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <div className="my-name">
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
        <FontAwesomeIcon icon={faHamburger} />
      </div>
    </div>
  );
};

export default TopNavBar;
