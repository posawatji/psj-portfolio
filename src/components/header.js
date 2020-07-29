import React from 'react'
import "./css/header.css";
import profile from "../assets/profileHeader.png";


export default function Headers() {

    return (
        <div className="header">
            
            <div className="profilePic-parent">
                <img id="child01-profileImg" src={profile} alt="Profile Header"></img>
                <div className="child02-profileDetail-parent">
                    <span className="NameHeader">Hi, I'm </span>
                    <span className="NameHeader">Posawat Jirawutworanat</span>
                    {/* <span className="NameHeader">Hi, I'm Posawat jirawutworanat</span> */}
                    <span className="PositionDetail">Web Developers.</span>
                </div>
            </div>

        </div>
    )
}
