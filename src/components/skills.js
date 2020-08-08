import React from 'react'
import "./css/skills.css";

import { DiGit, DiReact, DiJavascript1, DiMysql, DiCss3Full, DiHtml5 } from "react-icons/di";

export default function skills() {
    return (
        <div className="skills-container">
            <div className="skills-items"><p className="skillLogo"><DiHtml5 /></p><h3>HTML</h3></div>
            <div className="skills-items"><p className="skillLogo"><DiCss3Full /></p><h3>CSS</h3></div>
            <div className="skills-items"><p className="skillLogo"><DiJavascript1 /></p><h3>JAVASCRIPT</h3></div>
            <div className="skills-items"><p className="skillLogo"><DiReact /></p><h3>REACT</h3></div>
            <div className="skills-items"><p className="skillLogo"><DiMysql /></p><h3>MYSQL</h3></div>
            <div className="skills-items"><p className="skillLogo"><DiGit /></p><h3>GIT</h3></div>
        </div>
    )
}
