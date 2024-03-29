import {
  faComments,
  faFileCode,
  faFileLines,
  faFolder,
  faFolderOpen,
  faInfinity,
  faPanorama,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function DropdownMenu() {
  const [menuMode, setMenuMode] = useState(true);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      // console.log(e.path[0]);
      // console.log(e.composed);
      // console.log(btnRef.current);
      if (e.path[0] !== btnRef.current) {
        setMenuMode(true);
      }
    };
    document.body.addEventListener('click', closeDropdown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const folderClick = () => {
    setMenuMode((prev) => !prev);
  };

  return (
    <div className="hamburger">
      <button type="button" ref={btnRef} id="burger" onClick={folderClick}>
        {menuMode ? (
          <FontAwesomeIcon icon={faFolder} />
        ) : (
          <FontAwesomeIcon icon={faFolderOpen} />
        )}
      </button>

      <div className={`dropdown-menu-div hidden${menuMode ? '' : 'hidden'}`}>
        <h5>Menu</h5>
        <div className="dropdown-links">
          <Link
            onClick={scrollToTop}
            className="dropdown-link-item"
            to="/works"
          >
            <FontAwesomeIcon icon={faPanorama} />
            <span>Works</span>
          </Link>
          <Link
            onClick={scrollToTop}
            className="dropdown-link-item"
            to="/curriculum"
          >
            <FontAwesomeIcon icon={faFileCode} />
            <span>Studies</span>
          </Link>
          <Link
            onClick={scrollToTop}
            className="dropdown-link-item"
            to="/resume"
          >
            <FontAwesomeIcon icon={faFileLines} />
            <span>Resume</span>
          </Link>
          <Link
            onClick={scrollToTop}
            className="dropdown-link-item"
            to="/about"
          >
            <FontAwesomeIcon icon={faInfinity} />
            <span>About me</span>
          </Link>
          <Link
            onClick={scrollToTop}
            className="dropdown-link-item"
            to="/contact"
          >
            <FontAwesomeIcon icon={faComments} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
