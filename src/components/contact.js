import React from 'react'
import "./css/contact.css"
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="contactPSJ">
             <h3>Email: posawatji@gmail.com</h3>
             <a href="https://www.facebook.com/jamesboy888" style={{"margin-left":"4rem" }}><FaFacebookSquare color="#fff" size="3rem" /></a>
             <a href="https://github.com/jamesboy888" style={{"margin-left":"1rem" }}><FaGithubSquare color="#fff" size="3rem" /></a>
             <a href="https://www.linkedin.com/in/posawat-jirawutworanat-29451019b/" style={{"margin-left":"1rem"}}><FaLinkedin color="#fff" size="3rem" /></a>
              
        </div>
    )
}
