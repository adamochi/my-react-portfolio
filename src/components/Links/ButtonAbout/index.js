import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const ButtonAbout = ({ banana, btnTxt }) => {
  // console.log(banana);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <NavLink onClick={scrollToTop} to={banana}>
        <button className="about-btn">{btnTxt}</button>
      </NavLink>
    </>
  );
};

export default ButtonAbout;
