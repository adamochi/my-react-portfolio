/* eslint-disable no-alert */
import './index.scss';
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/AnimatedLetters';

function Contact() {
  const position = [-27.46087, 153.02676];
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_if028an',
        'template_6l04vrq',
        form.current,
        'A2Ov2HBhsCtRdKh3G',
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        },
      );
  };

  return (
    <>
      <div className="contact-page container">
        <div className="contact-form">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact Me'.split('')}
              idx={10}
            />
          </h1>
          <p>
            E-mail: sullivanadam@bigpond.com
            <br />
            Ph: 0409 051 595
            <br />
            Spring Hill QLD 4000
          </p>

          <p>
            I am also interested in freelance opportunities - especially
            ambitious or large projects to kickstart my new career.
            <br />
            {' '}
            If you have any other requests or questions, don&apos;t hesitate
            to contact me using the form below!
          </p>
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
              />
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
        <div className="map-wrap">
          <MapContainer center={position} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Adam lives here,
                {' '}
                <br />
                {' '}
                come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Contact;
