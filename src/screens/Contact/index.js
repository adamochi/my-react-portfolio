import React, { useState, useEffect, useRef } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "@emailjs/browser";

import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../../components/AnimatedLetters";

const Contact = () => {
  // const position = [-27.46087, 153.02676];
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_if028an",
        "template_6l04vrq",
        form.current,
        "A2Ov2HBhsCtRdKh3G"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <header className="page-title">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Contact Me".split("")}
            idx={10}
          />
        </h1>
      </header>
      <div className="contact-page container">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="name-div">
              <input type="text" placeholder="Name" name="from-name" required />
              <input
                placeholder="Email"
                type="email"
                name="user_email"
                required
              />
            </div>
            <div className="subject-div">
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </div>
            <div className="message-div">
              <textarea
                className="text-area"
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>
            <div className="send-div">
              <input
                type="submit"
                className="contact-send-button"
                value="SEND"
              />
            </div>
          </form>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Contact;
