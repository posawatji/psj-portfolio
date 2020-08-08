import React from 'react';
import './App.css';
import Headers  from "./components/header";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Contact from "./components/contact";
import Education from "./components/education";
import Intern from "./components/intern";
import Skills from "./components/skills";
import About from "./components/about";
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="tittlePage">Portfolio</div>
     
        <Section
          // title="Section 1"
          subtitle={<Headers />}
          dark={false}
          id="section1"
        />
        <Fade bottom>
        <Section
          title="About"
          subtitle={<About />}
          dark={true}
          id="section2"
        />
        </Fade>
        <Fade bottom>
        <Section
          title="Education"
          subtitle={<Education />}
          dark={false}
          id="section3"
        />
        </Fade>
        <Fade bottom>
        <Section
          title="Intern"
          subtitle={<Intern />}
          dark={true}
          id="section4"
        />
        </Fade>
        <Fade bottom>
        <Section
          title="Skills"
          subtitle={<Skills/>}
          dark={false}
          id="section5"
        />
        </Fade>
        <Fade bottom>
        <Section
          title="Contact"
          subtitle={<Contact />}
          dark={true}
          id="section6"
        />
        </Fade>
        
    </div>
  );
}

export default App;
