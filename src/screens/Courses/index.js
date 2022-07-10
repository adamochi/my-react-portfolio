import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

import PfData from "../../data/courses.json";

const Courses = () => {
  const Works = (courses) => {
    return (
      <div className="courses-page-box">
        {courses.map((course, id) => {
          return (
            <div className="course-box" key={id}>
              <h1>{course.title}</h1>
              <img src={course.cover} alt={course.name} />
              <p>{course.description}</p>
            </div>
          );
        })}
      </div>
    );
  };

  Works.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  };

  return (
    <>
      <div className="courses-page container">{Works(PfData.portfolio)}</div>
    </>
  );
};

export default Courses;
