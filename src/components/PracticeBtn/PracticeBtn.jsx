/* eslint-disable react/prop-types */
import './index.scss';
import React from 'react';

function PracticeBtn({ text, clearAll }) {
  return (
    <div>
      <button type="button" onClick={clearAll} className="practice-btn">
        {text}
      </button>
    </div>
  );
}

export default PracticeBtn;
