import "./index.scss";
import Loader from "react-loaders";
import React, { useEffect, useState } from "react";
import backgroundImg from "../../assets/images/nexen.png";
import AnimatedLetters from "../../components/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faComputer } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <header className="about-title">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"About".split("")}
            idx={18}
          />
        </h1>
      </header>
      <div className="about-page container">
        <div className="text-container-about">
          <div className="story-title-div">
            <FontAwesomeIcon icon={faFloppyDisk} />
            <h3>A little back story</h3>
          </div>
          <p>
            Since my earliest memory of using a computer, I have always been
            drawn to technology. And thinking back to that time in the country
            town I grew up in, it was quite natural for me to start interacting
            and learning how to use a computer.
          </p>
          <div className="story-title-div">
            <h2>A new era begins</h2>
            <FontAwesomeIcon icon={faComputer} />
          </div>
          <p>
            After attending a dozen different schools and graduating year 12, I
            started cooking, I had grown up loving to cook, and I think that is
            because I come from a large family. At the age of 18 (and although I
            would go on to work as a chef for 17 years), I had my first real
            experience with computers . My friend from school helped me build a
            custom PC for my dad. It became the household PC and that is when I
            really got into computers. If I wasn&apos;t out skateboarding on my
            day off work, I was messing around with the computer. Either playing
            music, playing games or even modding them. I was always resourceful
            at solving my computer needs either by finding information online or
            at the library. If I couldn&apos;t find a way, I would troubleshoot
            through trial and error until something finally worked. Editing code
            and adding mods to games and applications bacame a 2nd hobby along
            with the dozen computers I would build and repair over the following
            years for not only myself but for family and others around me.
          </p>
          <p>
            Since starting my journey to become a programmer, I have found
            myself loving to write code and solve the challenges I&apos;ve faced
            in taking this journey.
          </p>
          <p>
            I continue to study and practice writing code everyday and hope to
            find the right job to kickstart my career asap!
          </p>
        </div>
        <div className="nexen-img-div">
          <img className="background-img" src={backgroundImg} alt="nexen" />
          <span className="photo-text">
            Nexen Computer Museum, Jeju Isand (South Korea) March 2022
          </span>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
