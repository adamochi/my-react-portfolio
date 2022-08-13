import "./index.scss";
import React from "react";

const PracticeBtn = ({ text, clearAll }) => {
  return (
    <div>
      <button onClick={clearAll} className="practice-btn">
        {text}
      </button>
    </div>
  );
};

export default PracticeBtn;
