import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopesBulk,
  faHouseChimneyWindow,
  faPaw,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import LightModeButton from "../LightModeButton";
import DropdownMenu from "../DropdownMenu";
import { NavLink, Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <Link className="name-nav" to="/">
        <FontAwesomeIcon icon={faPaw} />
        <span>Adam Sullivan</span>
      </Link>
      <div className="source-n-light">
        <div className="nav-bar">
          <nav>
            <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon
                className="more-awesome-icon"
                icon={faHouseChimneyWindow}
                color="var(--main-icon-colour)"
              />{" "}
              <span>Home</span>
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="top-nav-icon"
              to="/about"
            >
              <FontAwesomeIcon
                className="more-awesome-icon"
                icon={faUserAstronaut}
                color="var(--main-icon-colour)"
              />{" "}
              <span>About</span>
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="contact-link"
              to="/contact"
            >
              <FontAwesomeIcon
                className="more-awesome-icon"
                icon={faEnvelopesBulk}
                color="var(--main-icon-colour)"
              />{" "}
              <span>Contact</span>
            </NavLink>
          </nav>
        </div>
        <a className="top-nav-icon" href="https://github.com/adamochi">
          <FontAwesomeIcon
            className="awesome-icon"
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
