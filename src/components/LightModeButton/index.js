import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./index.scss";

const LightModeButton = () => {
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    const checkLight = localStorage.getItem("dark mode");
    const saved = JSON.parse(checkLight);
    setLightMode(saved);
    if (saved === null) {
      document.body.classList = "";
      localStorage.setItem("dark mode", false);
    } else if (saved === true) {
      document.body.classList = "dark";
    }
  }, []);

  const mode = () => {
    setLightMode((current) => !current);
  };

  useEffect(() => {
    if (lightMode === true) {
      localStorage.setItem("dark mode", true);
      document.body.classList = "dark";
      // light.current.innerText = "💡";
    } else if (lightMode === false) {
      localStorage.setItem("dark mode", false);
      document.body.classList.remove("dark");
      // light.current.innerText = "🌙";
    }
  }, [lightMode]);

  return (
    <>
      <div className="light-div">
        <FontAwesomeIcon
          style={{
            animation: lightMode
              ? "fadeInLeft 0.3s ease-in-out forwards"
              : "fadeOutRight 0.3s ease-in-out forwards",
            right: lightMode ? "0" : "",
            left: lightMode ? "" : "0",
            display: lightMode ? "" : "none",
            transition: "forwards",
          }}
          onClick={mode}
          id="light-mode-button"
          icon={faLightbulb}
        />
        <FontAwesomeIcon
          style={{
            transition: "0.3s",
            animation: lightMode
              ? "fadeOutLeft 0.3s ease-in-out forwards"
              : "fadeInRight 0.3s ease-in-out forwards",
            left: lightMode ? "" : "0",
            right: lightMode ? "0" : "",
            display: lightMode ? "none" : "",
          }}
          onClick={mode}
          id="light-mode-button"
          icon={faMoon}
        />
      </div>
    </>
  );
};

export default LightModeButton;

/*
  <button
    ref={light}
    onClick={mode}
    aria-label="toggle dark mode"
    id="light-mode-button"
    >
    🌙
  </button>
*/
