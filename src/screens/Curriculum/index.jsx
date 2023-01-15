import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from 'components/AnimatedLetters';
import Loader from 'react-loaders';
import {
  faJsSquare,
  faWindows,
  faReact,
  faGithub,
  faCss3,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComputer,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faLaptopCode,
  faPlusSquare,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import courseData from 'data/courses.json';

const course = courseData.courses;

function Curriculum() {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4500);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <header className="curriculum-title">
        <h1>
          <FontAwesomeIcon icon={faLaptopCode} />
          {' '}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'My Completed Studies'.split('')}
            idx={15}
          />
        </h1>
      </header>
      <div className="curriculum-page container">
        {course.map((detail, index) => (
          <div className="course-div" key={`course${index + 1}`}>
            <div className="window-top-header-bar">
              <div className="window-top-icon">
                {detail.react === 'faReact' && (
                  <FontAwesomeIcon icon={faReact} />
                )}
                {detail.react === 'js' && <FontAwesomeIcon icon={faJsSquare} />}
                {detail.react === 'git' && <FontAwesomeIcon icon={faGithub} />}
                {detail.react === 'css' && <FontAwesomeIcon icon={faCss3} />}
                {detail.title}
              </div>
              <div className="window-close-div">
                <div>
                  <div className="minimise" />
                </div>
                <div>
                  <div />
                </div>
                <div className="x-div">X</div>
              </div>
            </div>
            <div className="menu-bar-xp">
              <div className="menu-bar-with-logo">
                <div className="using-div">
                  {detail.languages.map((i, idx) => (
                    <div className="using" key={`lang${idx + 1}`}>
                      {i}
                    </div>
                  ))}
                </div>
                <div className="windows-icon-div">
                  <FontAwesomeIcon icon={faWindows} />
                </div>
              </div>
              <div className="curriculum-links-div">
                <div className="back-n-forward">
                  <Link to="/">
                    <FontAwesomeIcon
                      className="back-svg"
                      icon={faArrowAltCircleLeft}
                    />
                    back ▾
                  </Link>
                </div>
                <div className="back-n-forward forward">
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  {' '}
                  ▾
                </div>
                <a
                  className="xp-a-links"
                  target="_blank"
                  rel="noreferrer"
                  href={detail.url}
                >
                  🔎
                  {' '}
                  {detail.linktext}
                </a>
                {detail.linktexttwo !== '' && (
                  <a
                    className="xp-a-links"
                    target="_blank"
                    rel="noreferrer"
                    href={detail.urltwo}
                  >
                    {detail.linktexttwo}
                  </a>
                )}
              </div>
            </div>

            <div className="map-party">
              <div className="my-computer-file-system">
                <div className="linesss" />
                <div className="divider-linesss" />
                <div className="Components-file-system">
                  <FontAwesomeIcon icon={faComputer} />
                  <h3>Components (course)</h3>
                </div>
                <div className="minus-div-parent">
                  <div className="minus-div">-</div>
                  <FontAwesomeIcon icon={faLaptopCode} />
                  <h4> Coding</h4>
                </div>
                <ul>
                  {detail.description.map((item, key) => (
                    <li key={`description${key + 1}`}>
                      <FontAwesomeIcon icon={faPlusSquare} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="minus-div-parent">
                  <div className="minus-div">-</div>
                  <FontAwesomeIcon icon={faTools} />
                  <h4>System Tools:</h4>
                </div>
                <ul>
                  {detail.packages.map((item, key) => (
                    <li key={`package${key + 1}`}>
                      <FontAwesomeIcon icon={faPlusSquare} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="files-with-images">
                {detail.achieved.map((item, key) => (
                  <div key={`achieved${key + 1}`}>
                    <img src={detail.image} alt="img" />
                    <span>
                      {item}
                      .png
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Curriculum;
