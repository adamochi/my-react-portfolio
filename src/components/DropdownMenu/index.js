import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

const DropdownMenu = () => {
  const [menuMode, setMenuMode] = useState(true);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
        console.dir(btnRef.current);
        setMenuMode(true);
      }
    };
    document.body.addEventListener("click", closeDropdown);
  }, []);

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
