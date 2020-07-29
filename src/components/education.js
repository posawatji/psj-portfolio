import React from 'react';
import './css/education.css';
import Swu from "../assets/swu.png"

function Education() {
  return (
    <div className="education">
      <div className="educationPic-parent">
      <a className="child01-swuImg" href="https://www.swu.ac.th/">
        <img className="child01-swuImg" src={Swu} alt="Education Header"></img>
      </a>
        <div className="child02-educationDetail-parent">
          <span className="educationHeader">I graduated with a bachelor’s degree in Computer Engineering.</span>
          <hr className="hrEducation" />
          <a href="https://www.swu.ac.th/" className="swuEducation">Srinakharinwirot University</a>
        </div>
      </div>
    </div>
  );
}

export default Education;
