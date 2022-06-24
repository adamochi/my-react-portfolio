import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCat,
  faEnvelopesBulk,
  faHouseChimneyWindow,
  faKitchenSet,
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
                icon={faHouseChimneyWindow}
                color="var(--main-icon-colour)"
              />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="top-nav-icon"
              to="/about"
            >
              <FontAwesomeIcon
                icon={faUserAstronaut}
                color="var(--main-icon-colour)"
              />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="contact-link"
              to="/contact"
            >
              <FontAwesomeIcon
                icon={faEnvelopesBulk}
                color="var(--main-icon-colour)"
              />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="portfolio-link"
              to="/portfolio"
            >
              <FontAwesomeIcon
                icon={faKitchenSet}
                color="var(--main-icon-colour)"
              />
            </NavLink>
          </nav>
        </div>
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
