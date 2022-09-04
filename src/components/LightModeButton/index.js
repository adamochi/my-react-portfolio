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
    if (lightMode) {
      localStorage.setItem("dark mode", true);
      document.body.classList = "dark";
    } else if (!lightMode) {
      localStorage.setItem("dark mode", false);
      document.body.classList.remove("dark");
    }
  }, [lightMode]);

  return (
    <>
      <div className="light-div">
        {lightMode ? (
          <FontAwesomeIcon
            onClick={mode}
            id="light-mode-button"
            icon={faLightbulb}
            style={{
              animation:
                lightMode && "rotateInDownLeft 0.3s ease-in-out forwards",
            }}
          />
        ) : (
          <FontAwesomeIcon
            onClick={mode}
            id="light-mode-button"
            icon={faMoon}
            style={{
              transition: "0.3s",
              animation:
                !lightMode && "rotateInDownRight 0.3s ease-in-out forwards",
            }}
          />
        )}
      </div>
    </>
  );
};

export default LightModeButton;
