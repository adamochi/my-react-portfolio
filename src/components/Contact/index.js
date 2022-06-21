import React from "react";
import "./index.scss";
import Loader from "react-loaders";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact</h1>;
      <Loader type="ball-clip-rotate-multiple" />
    </div>
  );
};

export default Contact;
