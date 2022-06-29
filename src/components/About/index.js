import "./index.scss";
import Loader from "react-loaders";
import React, { useEffect, useState } from "react";
import backgroundImg from "../../assets/images/nexen.png";
import AnimatedLetters from "../AnimatedLetters";
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
      <header className="page-title">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"About".split("")}
            idx={15}
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
            fascinated with them. And thinking back to that time in the country
            town I was living in, it was such a natural thing for me to start
            interacting and learning what a computer is. It was one of the most
            influential moments for me to type in commands to start a program
            that was saved onto a 5.25 Floppy Disk.
          </p>
          <div className="story-title-div">
            <h2>A new era begins</h2>
            <FontAwesomeIcon icon={faComputer} />
          </div>
          <p>
            After attending a dozen different schools and graduating year 12, I
            started cooking, I had grown up loving to cook and I think that is
            because i come from a large family. And although I would go on to
            work as a chef for 17 years, I also had my first real experience
            with computers at the age of 18. My friend from school helped me
            build a custom PC for my dad. It became the household PC and that is
            when I really got into computers. If I wasn't out skateboarding on
            my day off work, I was messing around with the computer. Either
            playing music, playing games or even modding them. I was always
            resourceful at solving my computer needs either by finding
            information online or at the library. If I couldn't find a way, I
            would troubleshoot through trial and error. Editing code and adding
            mods to games and applications bacame a 2nd hobby along with the
            dozen computers I had built and repaired over the following years.
          </p>
          <p>
            Since starting my journey to become a programmer, I have found
            myself loving to write code and solve the real world problems i've
            faced in taking this journey
          </p>
          <p>
            So here I am, over a decade has passed from the most influential
            moment in my life and I have built over a dozen PCs for not just
            myself, but also the family and friends around me.
          </p>
        </div>
        <div className="nexen-img-div">
          <img className="background-img" src={backgroundImg} alt="nexen" />
          <span className="photo-text">
            Nexen Computer Museum, Jeju Isand (South Korea) March 2022
          </span>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default About;
