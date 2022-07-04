import React, { useState, useRef, useEffect } from "react";
import "./index.scss";

const LightModeButton = () => {
  const checkLight = localStorage.getItem("dark mode");
  const saved = JSON.parse(checkLight);
  const light = useRef();
  const [lightMode, setLightMode] = useState(saved);

  const changeIcon = () => {
    if (light.current.innerText === "🌙") {
      light.current.innerText = "💡";
    } else {
      light.current.innerText = "🌙";
    }
  };

  if (saved === null) {
    localStorage.setItem("dark mode", false);
  }

  if (saved === true) {
    document.body.classList = "dark";
    changeIcon();
  }

  const lightButton = () => {
    setLightMode((current) => !current);
    if (lightMode === false) {
      localStorage.setItem("dark mode", true);
      document.body.classList = "dark";
      changeIcon();
    }
    if (lightMode === true) {
      localStorage.setItem("dark mode", false);
      document.body.classList = "";
      changeIcon();
    }
  };

  return (
    <button
      ref={light}
      onClick={lightButton}
      aria-label="toggle dark mode"
      id="light-mode-button"
    >
      🌙
    </button>
  );
};

export default LightModeButton;
