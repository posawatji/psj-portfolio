import React from 'react';
import './css/intern.css';
import Swu from "../assets/blueseasLogo.svg"

export default function intern() {
    return (
        <div className="intern">
            <div className="internPic-parent">
                <a className="child01-blueseasImg" href="https://www.facebook.com/blueseasenterprise/">
                    <img className="child01-blueseasImg" src={Swu} alt="Intern Header"></img>
                </a>
                <div className="child02-internDetail-parent">
                    <div className="interHeader">My previous experience,I interned at Blue sea enterprise in web development department.
At that time, I learnt to work as a team and improved my skill in JAVASCRIPT and React.</div>
                    <hr className="hrBluesea" />
                    <a href="https://www.facebook.com/blueseasenterprise/" className="blueSeaHeader">BlueSeas Enterprise Co., Ltd.</a>
                </div>
            </div>
        </div>
    )
}
