import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopesBulk,
  faHouseChimneyWindow,
  faPaw,
  faUserAstronaut,
  faIcons,
  faFileLines,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import LightModeButton from "../LightModeButton";
import DropdownMenu from "../DropdownMenu";
import { NavLink, Link } from "react-router-dom";

const TopNavBar = () => {
  const [size, setSize] = useState();
  const sizer = () => {
    const widthOfWindow = window.window.innerWidth;
    setSize(widthOfWindow);
  };

  useEffect(() => {
    window.addEventListener("resize", sizer);
    return () => window.removeEventListener("resize", sizer);
  }, [size]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="top-navbar">
      <Link onClick={scrollToTop} className="name-nav" to="/">
        <FontAwesomeIcon icon={faPaw} />
        <span>Adam Sullivan</span>
      </Link>
      <div className="source-n-light">
        <div className="nav-bar">
          <nav>
            <NavLink
              onClick={scrollToTop}
              exact="true"
              activeclassname="active"
              to="/"
            >
              <FontAwesomeIcon
                className="more-awesome-icon"
                icon={faHouseChimneyWindow}
                color="var(--main-icon-colour)"
              />
              <span>Home</span>
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              exact="true"
              activeclassname="active"
              className="top-nav-icon"
              to="/about"
            >
              <FontAwesomeIcon
                className="more-awesome-icon"
                icon={faUserAstronaut}
                color="var(--main-icon-colour)"
              />
              <span>About</span>
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              exact="true"
              activeclassname="active"
              className="contact-link"
              to="/contact"
            >
              <FontAwesomeIcon
                className="more-awesome-icon"
                icon={faEnvelopesBulk}
                color="var(--main-icon-colour)"
              />
              <span>Contact</span>
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              exact="true"
              activeclassname="active"
              className="contact-link"
              to="/resume"
            >
              <FontAwesomeIcon icon={faFileLines} />
              <span>Resume</span>
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              exact="true"
              activeclassname="active"
              className="contact-link"
              to="/works"
            >
              <FontAwesomeIcon
                className="more-awesome-icon"
                icon={faIcons}
                color="var(--main-icon-colour)"
              />
              <span>Works</span>
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              exact="true"
              activeclassname="active"
              className="contact-link"
              to="/curriculum"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              <span>Studies</span>
            </NavLink>
          </nav>
        </div>
        <a
          className="top-nav-icon"
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/adamochi/my-react-portfolio"
        >
          <FontAwesomeIcon
            className="awesome-icon"
            icon={faGithub}
            shake={true}
          />
          <span>Source</span>
        </a>
        {size > 600 ? (
          <>
            <DropdownMenu />
            <LightModeButton />
          </>
        ) : (
          <>
            <LightModeButton />
            <DropdownMenu />
          </>
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
