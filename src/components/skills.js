import React from 'react'
import "./css/skills.css";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import JS from "../assets/js.svg";
import ReactPic from "../assets/react.svg";
import SQL from "../assets/mysql.svg";

export default function skills() {
    return (
        <div className="skills">

            <img className="child01-skillImg" src={HTML} alt="Education Header"></img>
            <img className="child01-skillImg" src={CSS} alt="skills Header"></img>
            <img className="child01-skillImg" src={JS} alt="skills Header"></img>
            <img className="child01-skillImg" src={ReactPic} alt="skills Header"></img>
            <img className="child01-skillImg" src={SQL} alt="skills Header"></img>

        </div>
    )
}
