import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = () => {
  const checkMenu = localStorage.getItem("menu");
  const menuState = JSON.parse(checkMenu);
  const [menuMode, setMenuMode] = useState(menuState);

  if (menuState === null) {
    localStorage.setItem("menu", false);
  }

  if (menuState === true) {
    localStorage.setItem("menu", true);
  }
  const menuClick = () => {
    setMenuMode((current) => !current);
    const menu = document.querySelector(".dropdown-menu-div");
    if (menuMode === false) {
      localStorage.setItem("menu", true);
      menu.classList.add("hidden");
      console.log("menu close");
    }
    if (menuMode === true) {
      menu.classList.remove("hidden");
      console.log("menu open");
    }
  };

  return (
    <div className="hamburger">
      <button className="burger" onClick={menuClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="dropdown-menu-div hidden">
        <h5>Menu</h5>
        <ul className="dropdown-menu-list">
          <li>About Me</li>
          <li>Works</li>
          <li>Contact</li>
          <li>Old Website</li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
