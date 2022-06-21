import React, { useState } from "react";
import "./index.scss";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LightModeButton = () => {
  const [lightMode, setLightMode] = useState(false);
  const checkLight = localStorage.getItem("light");

  const lightButton = () => {
    setLightMode((current) => !current);
    console.log(lightMode);
    if (lightMode === false || checkLight === null) {
      localStorage.setItem("light", true);
      document.body.classList = "dark";
    }
    if (lightMode === true) {
      localStorage.setItem("light", false);
      document.body.classList = "";
    }
  };

  return (
    <button
      onClick={lightButton}
      aria-label="toggle dark mode"
      id="light-mode-button"
    >
      <FontAwesomeIcon className="moon-icon" icon={faMoon} color="#0e2964" />
    </button>
  );
};

export default LightModeButton;
