import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const ButtonAbout = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <NavLink onClick={scrollToTop} to={"/about"}>
        <button className="portfolio-btn">More about me ↵</button>
      </NavLink>
    </>
  );
};

export default ButtonAbout;
