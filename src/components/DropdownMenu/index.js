import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const DropdownMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menu = document.querySelector(".dropdown-menu-div");

  const MenuClick = () => {
    setOpenMenu((current) => !current);

    menu.classList.toggle("hidden");
    console.log(openMenu);
  };

  return (
    <div className="hamburger">
      <div className="burger" onClick={MenuClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="dropdown-menu-div hidden">
        <h5>Menu</h5>
        <ul className="dropdown-menu-ul">
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
