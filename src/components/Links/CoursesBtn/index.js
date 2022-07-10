import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const CoursesBtn = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <NavLink onClick={scrollToTop} to={"/courses"}>
        <button className="courses-btn">Course Curriculum ↵</button>
      </NavLink>
    </>
  );
};
export default CoursesBtn;
