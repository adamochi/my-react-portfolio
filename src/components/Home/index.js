import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import profile from "../../assets/images/nexen.png";
import Computer from "../Computer";
import ButtonPortfolio from "../Links/ButtonPortfolio";
import ButtonAbout from "../Links/ButtonAbout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="homepage container">
        <Computer />

        <h4>
          Hello, I'm an aspiring Web Developer based in Brisbane, Australia!
        </h4>
        <div className="title-home">
          <div className="title">
            <h1>Adam Sullivan</h1>
            <h5>Front-End Web Developer / Designer</h5>
          </div>
          <div className="profile-pic">
            <img src={profile} alt="Adam Sullivan" />
          </div>
        </div>
        <div className="text-container">
          <h3>The Front End</h3>
          <div className="the-front-end-p">
            <p>
              This year has been a turning point in my life as I have completely
              dedicated my time into becoming a Web Developer. Since starting my
              journey into learning how to code, I found myself enjoying it more
              and more each day.
            </p>
            <p>
              With 800+ hours of studying &amp; practicing writing code over the
              course of this year, I have gained a solid understanding of HTML,
              CSS, basic JavaScript. As well as the React JS framework which I
              have built this website on!
            </p>
          </div>
        </div>

        <ButtonPortfolio />

        <div className="text-container ">
          <h3>Education and How I Learned</h3>
          <div className="text-section text-section-with-border">
            <span>2022</span>
            <p>
              <strong>How did I make it this far by Self study?</strong>
              <br /> For the majority of the time I have been studying, I have
              undertaken online courses at Nomad Coders.
              <br />
              Here you can see the formal studying I've completed
            </p>
          </div>
          <div className="nomad-div">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://nomadcoders.co/users/honeyrumballs"
            >
              <button className="nomad-coders-link">
                <FontAwesomeIcon icon={faLaptopCode} /> Nomad Coders ↵
              </button>
            </a>
          </div>
          <h3>The Back End</h3>
          <div className="text-section">
            <p>
              <strong>Things I like:</strong>
              <br />
              My everyday hobbies are listening to music, coding, &amp; cooking.
              <br />
              <strong>What I get up to:</strong>
              <br />I am a sound engineer at church. I have had a passion for
              good audio for many years. And even considered a career path in
              the audio world.
              <br />
              <strong>Life before coding;</strong>
              <br />
              In 2009 I Completed my Chef apprenticeship in Cairns, and
              continued cooking in dynamic and fast paced environments for many
              years to come undertaken 3 courses and 2 bootcamps. A leap into
              something I have truly become more passionate about remaining
              essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets If there is one thing i have learnt
              form working in the kitchen, it's communication and organisatinoal
              skills. skills from kitchen i can use
            </p>
          </div>
        </div>
        <ButtonAbout />
      </div>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Home;
