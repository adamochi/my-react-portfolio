import React, { useState, useRef, useEffect } from "react";
import "./index.scss";

const LightModeButton = () => {
  const checkLight = localStorage.getItem("dark mode");
  const saved = JSON.parse(checkLight);
  const [lightMode, setLightMode] = useState(false);
  const light = useRef();

  const changeIcon = () => {
    if (light.current.innerText === "💡") {
      light.current.innerText = "🌙";
    } else {
      light.current.innerText = "💡";
    }
  };

  useEffect(() => {
    const lightBtn = document.getElementById("light-mode-button");
    if (saved === null) {
      localStorage.setItem("dark mode", false);
    } else if (saved === true) {
      document.body.classList = "dark";
      lightBtn.innerText = "💡";
    } else {
      return;
    }
  });

  const lightButton = () => {
    setLightMode((current) => !current);
    changeIcon();
    if (lightMode === false) {
      localStorage.setItem("dark mode", true);
      document.body.classList = "dark";
    } else {
      localStorage.setItem("dark mode", false);
      document.body.classList = "";
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
