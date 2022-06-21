import React, { useState } from "react";
import "./index.scss";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LightModeButton = () => {
  const checkLight = localStorage.getItem("dark mode");
  const saved = JSON.parse(checkLight);
  const [lightMode, setLightMode] = useState(saved);

  if (saved === null) {
    localStorage.setItem("dark mode", false);
  }

  if (saved === true) {
    document.body.classList = "dark";
  }
  const lightButton = () => {
    setLightMode((current) => !current);
    if (lightMode === false) {
      localStorage.setItem("dark mode", true);
      document.body.classList = "dark";
      console.log(lightMode);
    }
    if (lightMode === true) {
      localStorage.setItem("dark mode", false);
      document.body.classList = "";
      console.log(lightMode);
    }
  };

  return (
    <button
      onClick={lightButton}
      aria-label="toggle dark mode"
      id="light-mode-button"
    >
      <FontAwesomeIcon
        className="moon-icon"
        icon={faMoon}
        color="var(--main-background-colour)"
      />
    </button>
  );
};

export default LightModeButton;
