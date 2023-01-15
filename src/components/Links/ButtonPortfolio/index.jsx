import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

function ButtonPortfolio() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavLink onClick={scrollToTop} to="/works">
      <button type="button" className="portfolio-btn">My Works ↵</button>
    </NavLink>
  );
}

export default ButtonPortfolio;
