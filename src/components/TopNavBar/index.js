import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCat, faPaw } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import LightModeButton from "../LightModeButton";
import DropdownMenu from "../DropdownMenu";

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
      <DropdownMenu />
    </div>
  );
};

export default TopNavBar;
