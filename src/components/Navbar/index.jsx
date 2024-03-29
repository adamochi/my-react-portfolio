import {
  faEnvelopesBulk,
  faHouseChimneyWindow,
  faKitchenSet,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './index.scss';
import { NavLink, Link } from 'react-router-dom';
// import logo from "../../assets/images/space.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        {/* <img src={logo} alt="space" /> */}
      </Link>
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
          className="about-link"
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
  );
}

export default Navbar;
