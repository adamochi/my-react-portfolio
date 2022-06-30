import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Nomad = () => {
  return (
    <a
      target={"_blank"}
      rel="noreferrer"
      href="https://nomadcoders.co/users/honeyrumballs"
    >
      <button className="nomad-btn">
        <FontAwesomeIcon icon={faLaptopCode} /> Nomad Coders ↵
      </button>
    </a>
  );
};

export default Nomad;
