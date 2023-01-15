/* eslint-disable react/prop-types */
import './index.scss';
import React from 'react';

function AnimatedLetters({ letterClass, strArray, idx }) {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={`char${i + 1}`} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedLetters;
