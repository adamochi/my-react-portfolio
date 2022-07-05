import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

import PfData from "../../data/portfolio.json";

const Courses = () => {
  const Works = (portfolio) => {
    return (
      <div className="courses-page-box">
        {portfolio.map((poop, id) => {
          return (
            <div className="course-box" key={id}>
              <h1>{poop.title}</h1>
              <img src={poop.cover} alt={poop.name} />
              <p>{poop.description}</p>
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
