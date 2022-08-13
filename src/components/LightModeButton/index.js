import React, { useState, useRef, useEffect } from "react";
import "./index.scss";

const LightModeButton = () => {
  const light = useRef();

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
      light.current.innerText = "💡";
    } else if (lightMode === false) {
      localStorage.setItem("dark mode", false);
      document.body.classList.remove("dark");
      light.current.innerText = "🌙";
    }
  }, [lightMode]);

  return (
    <button
      ref={light}
      onClick={mode}
      aria-label="toggle dark mode"
      id="light-mode-button"
    >
      🌙
    </button>
  );
};

export default LightModeButton;
