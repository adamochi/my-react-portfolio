import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const ButtonPortfolio = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <NavLink onClick={scrollToTop} to={"/portfolio"}>
        <button className="portfolio-btn">My Portfolio ↵</button>
      </NavLink>
    </>
  );
};

export default ButtonPortfolio;
