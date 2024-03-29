import React from 'react';
import './index.scss';
import Loader from 'react-loaders';
import me from 'assets/images/jeju-resume.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faCloudDownload,
  faDice,
  faEarthOceania,
  faLaptopCode,
  faPhoneSquareAlt,
  faRectangleList,
  faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import hat from '../../assets/images/chefhat.png';

function Resume() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="resume-page container">
        <div className="paper">
          <div className="resume-download">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1_fEhnCWQuI-Pzcb1lOhHsmUiYAfid9tH/view?usp=sharing"
            >
              <FontAwesomeIcon icon={faCloudDownload} />
              {' '}
              <span>Download Resume</span>
            </a>
          </div>
          <div className="left-panel-div">
            <div className="profile-pic">
              <img src={me} alt="profile-pic" />
            </div>
            <div className="contact-panel">
              <h3>Contact</h3>

              <Link onClick={scrollToTop} to="/contact">
                <div>
                  <FontAwesomeIcon icon={faPhoneSquareAlt} />
                  <span>0409 051 595</span>
                </div>

                <div>
                  <FontAwesomeIcon icon={faSquareEnvelope} />
                  <span>honeyrumballs@gmail.com</span>
                </div>

                <div>
                  <FontAwesomeIcon icon={faEarthOceania} />
                  <span>Spring Hill, QLD 4000</span>
                </div>
              </Link>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/adamochi"
              >
                <div>
                  <FontAwesomeIcon icon={faGithub} />
                  <span>github.com/adamochi</span>
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/adam-sullivan87/"
              >
                <div>
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>linkedin.com/in/adam-sullivan87/</span>
                </div>
              </a>
              <h3>Skills</h3>
              <span className="confidence">My Confidence %</span>
            </div>
            <div className="skills-visual-resume">
              <ul>
                <li>React</li>
                <div className="range-party">
                  <input readOnly type="range" max="100" value="75" />
                  <span>75%</span>
                </div>
                <li>JavaScript ES6</li>
                <div className="range-party">
                  <input readOnly type="range" max="100" value="75" />
                  <span>75%</span>
                </div>
                <li>HTML5</li>
                <div className="range-party">
                  <input readOnly type="range" max="100" value="90" />
                  <span>90%</span>
                </div>
                <li>CSS3, SCSS</li>
                <div className="range-party">
                  <input readOnly type="range" max="100" value="90" />
                  <span>90%</span>
                </div>
                <li>Git / GitHub</li>
                <div className="range-party">
                  <input readOnly type="range" max="100" value="80" />
                  <span>80%</span>
                </div>
                <li>Node Js</li>
                <div className="range-party">
                  <input readOnly type="range" max="100" value="50" />
                  <span>50%</span>
                </div>
                <li>MongoDB</li>
                <div className="range-party">
                  <input readOnly type="range" max="100" value="60" />
                  <span>60%</span>
                </div>
                <li>Express</li>
                <div className="range-party">
                  <input readOnly type="range" max="100" value="60" />
                  <span>60%</span>
                </div>
                <li>Three.js</li>
                <div className="range-party">
                  <input readOnly type="range" max="100" value="60" />
                  <span>60%</span>
                </div>
              </ul>
              <h3 className="projects-h3">Projects</h3>
              <ul className="projects-list">
                <li>
                  <FontAwesomeIcon icon={faBookOpen} />
                  <a
                    href="https://bible.newdreamchurch.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Bible Translation App</span>
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faRectangleList} />
                  <Link onClick={scrollToTop} to="/todo">
                    <span>Todo-list app</span>
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faDice} />
                  <a href="https://eloquent-kashata-64e9a1.netlify.app/numbergame/index.html">
                    JS Number Game
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLaptopCode} />
                  <a href="https://adamochi.github.io/vanilla-js-2022/">
                    Momentum App
                  </a>
                </li>
                <li>
                  <img src={hat} alt="chef hat" />
                  <Link onClick={scrollToTop} to="/">
                    <span>3D Chef</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="right-panel-div">
            <h1>ADAM SULLIVAN</h1>
            <h2>Frontend Web Developer</h2>
            <div className="document-party">
              <div className="about-and-education-div">
                <div className="about-me-resume">
                  <h4>About</h4>
                  <p>
                    I&apos;m a tech-savvy person and as far back as I can remember, I
                    have been fascinated with computers. I have always had a
                    strong interest to learn and to make things work. As someone
                    that has been working for 17 years in busy kitchens, I have
                    developed skills that i can bring into my new career such
                    as:
                  </p>
                  <ul>
                    <li>
                      <strong>Team-work</strong>
                      {' '}
                      spirit will help working with
                      multiple members of an organisation to ensure goals are
                      being met.
                    </li>
                    <li>
                      <strong>Love of learning</strong>
                      {' '}
                      spirit will help working
                      with multiple members of an organisation to ensure goals
                      are being met.
                    </li>
                    <li>
                      <strong>Patience</strong>
                      {' '}
                      - no matter the challenge, I am
                      the type of person that can untangle fishing line
                    </li>
                    <li>
                      <strong>Problem Solving</strong>
                      {' '}
                      - there are many
                      unexpected things happening everyday in a kitchen, and I
                      always find the solution being met.
                    </li>
                    <li>
                      <strong>Good under pressure</strong>
                      {' '}
                      - relating to problem
                      solving, it has always been a high pressure situation when
                      I needed to come up with the solution.
                    </li>
                  </ul>
                </div>
                <h4>Work Experience</h4>
                <div className="work-exp-div">
                  <div>
                    <span style={{ fontSize: '32px' }}>Clinials</span>
                  </div>
                  <span>
                    <strong>Web Developer Internship</strong>
                  </span>
                  <span style={{ marginBottom: '10px' }}>
                    Oct 2022 - Jan 2023
                  </span>
                  <span className="certificate-span">
                    During my three-month internship as a web developer with
                    Clinials, I had the privilege of working with a talented and
                    compassionate startup team. This opportunity allowed me to
                    not only improve my coding skills, but also to understand
                    the planning and strategy that goes into creating effective
                    solutions.
                    <br />
                    <br />
                    I learned the value of writing clean and readable code
                    through practices such as refactoring and gained hands-on
                    experience with content management systems including Prismic
                    and Sanity. In addition, I had the chance to work on
                    implementing new designs and enhance the usability for
                    recruiting participants. Overall, this was an incredibly
                    rewarding and educational experience that has greatly
                    benefited my growth as a web developer.
                  </span>
                  <br />
                  <br />
                  <span>
                    Some of the main roles and key take aways from my time at
                    Clinials include:
                  </span>
                  <ul>
                    <li>
                      Collaborating with Development team using Bitbucket for
                      version control
                    </li>
                    <li>
                      Experienced working with Docker for containerization of
                      applications
                    </li>
                    <li>
                      Improved coding skills through learning best practices
                      from an experienced team
                    </li>
                    <li>
                      Platform improvements made through design implementation
                      and usability enhancements
                    </li>
                    <li>Learning the importance of clean and readable code</li>
                    <li>
                      Using Confluence for project planning and document
                      collaboration
                    </li>
                    <li>Managing tasks and project progress through Jira</li>
                  </ul>
                </div>

                <br />
                <div className="education-div-resume">
                  <h4>Education</h4>
                  <span className="nomad-span">
                    <strong>Nomad Coders - </strong>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nomadcoders.co/users/adamochi"
                    >
                      nomadcoders.co/users/adamochi
                    </a>
                  </span>
                  <br />
                  <span>
                    <strong>Courses</strong>
                  </span>
                  <ul className="courses-links-ul">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nomadcoders.co/certs/0e213613-c4dd-47de-8ead-0919f40d532d"
                    >
                      <li>
                        <strong>Vanilla JS</strong>
                        {' '}
                        - 2 Weeks Completion Class
                      </li>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nomadcoders.co/certs/7fd93c7c-ddeb-453a-b940-b8517449ab81"
                    >
                      <li>
                        Creating a Movie Web Service with
                        {' '}
                        <strong>React JS</strong>
                      </li>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nomadcoders.co/certs/d84653b9-4d77-4e3a-97c8-476a8430e917"
                    >
                      <li>
                        <strong>React Native</strong>
                        {' '}
                        101 for beginners
                      </li>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nomadcoders.co/certs/a03ccb24-67d2-43d7-bb3e-3d7d02c83ef9"
                    >
                      <li>
                        <strong>CSS</strong>
                        {' '}
                        - Kakao Clone - 2 Weeks Completion
                        Class
                      </li>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nomadcoders.co/certs/85fa8edd-482d-478c-8f42-3ae140f61872"
                    >
                      <li>
                        <strong>Git &amp; Github</strong>
                        {' '}
                        for Everyone
                      </li>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nomadcoders.co/certs/4a2d28a6-14bc-49d0-966c-74c3c5e7e2c2"
                    >
                      <li>
                        <strong>Redux</strong>
                        {' '}
                        101 for Beginners
                      </li>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nomadcoders.co/certs/7ee57b63-2484-474f-ad7a-a953d24264cc"
                    >
                      <li>
                        10 Practical
                        {' '}
                        <strong>React Hooks</strong>
                      </li>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nomadcoders.co/certs/212a5f67-d43d-4949-99a7-7c6b8662208d"
                    >
                      <li>
                        Create a drawing app with
                        {' '}
                        <strong>Vanilla JS</strong>
                      </li>
                    </a>
                  </ul>
                  <span>
                    <strong>Achievement</strong>
                    <ul className="achievement-ul">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://nomadcoders.co/community/thread/5459"
                      >
                        <li>
                          <strong>Internship with Clinials</strong>
                          {' '}
                          - After having spent the majority of 2022 studying and practicing writing
                          code, it was time to get real world experience.
                        </li>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://nomadcoders.co/community/thread/5866"
                      >
                        <li>
                          <strong>A top student</strong>
                          {' '}
                          - From over 200 applicants, and only 39 graduates, I was chosen as one of
                          the top 2 students for the YouTube Clone Challenge 6wk completion class!
                        </li>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://nomadcoders.co/community/thread/5459"
                      >
                        <li>
                          <strong>A top student</strong>
                          {' '}
                          - Out of 1037
                          applicants, and only 197 graduates, I was chosen as
                          one of the top 15 students for the Vanilla JS 2wk
                          completion class!
                        </li>
                      </a>
                    </ul>
                  </span>
                </div>
                <h4>Life Before Coding</h4>
                <div className="work-exp-div">
                  <span>
                    <strong>CHEF</strong>
                  </span>
                  <span>2009 - 2022</span>
                  <span className="certificate-span">
                    Certificate III Commercial Cookery &#40;TAFE 2005 -
                    2009&#41;
                  </span>
                  <ul>
                    <li>
                      <strong>George&apos;s Paragon</strong>
                      {' '}
                      - Brisbane
                    </li>
                    <li>
                      <strong>Dundee&apos;s</strong>
                      {' '}
                      on the Waterfront - Cairns
                    </li>
                    <li>
                      <strong>Fuller Sports</strong>
                      {' '}
                      - Edmonton
                    </li>
                    <li>
                      <strong>Pesci&apos;s Restaurant</strong>
                      {' '}
                      - Cairns
                    </li>
                  </ul>
                  <p>
                    <strong>Responsibilities:</strong>
                    {' '}
                    Pastry section CDP,
                    Creating new desserts, Pans section, Larder section, Seafood
                    section, Grill, Food preparation, Receiving of goods, Stock
                    rotation, Cleaning, Ordering from suppliers, Food
                    stocktaking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Resume;
