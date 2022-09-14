import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const CoursesBtn = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <NavLink onClick={scrollToTop} to={"/curriculum"}>
        <button className="courses-btn">My Completed Studies</button>
      </NavLink>
    </>
  );
};
export default CoursesBtn;
