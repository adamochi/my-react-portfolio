import {
  faInfinity,
  faPanorama,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const DropdownMenu = () => {
  const [menuMode, setMenuMode] = useState(true);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
        setMenuMode(true);
      }
    };
    document.body.addEventListener("click", closeDropdown);
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="hamburger">
      <button
        ref={btnRef}
        className="burger"
        onClick={() => setMenuMode((prev) => !prev)}
      >
        📁
      </button>
      <div className={"dropdown-menu-div hidden" + (menuMode ? "" : "hidden")}>
        <h5>Menu</h5>
        <div className="dropdown-links">
          <Link
            onClick={scrollToTop}
            className="dropdown-link-item"
            to="/about"
          >
            <FontAwesomeIcon icon={faInfinity} />
            <span>About me</span>
          </Link>{" "}
          <Link
            onClick={scrollToTop}
            className="dropdown-link-item"
            to="/contact"
          >
            <FontAwesomeIcon icon={faPaw} />
            <span>Contact me</span>
          </Link>{" "}
          <Link
            onClick={scrollToTop}
            className="dropdown-link-item"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faPanorama} />
            <span>Portfolio</span>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
