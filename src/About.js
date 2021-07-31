import React from "react"
import { IconContext } from "react-icons/lib"
import { FaReact, FaHtml5, FaAngular } from "react-icons/fa"
import {
   SiJavascript,
   SiRedux,
   SiNodeDotJs,
   SiRuby,
   SiPostgresql,
   SiCss3,
   SiMongodb,
} from "react-icons/si"

import Me from "./photos/me.JPG"

const About = () => {
   return (
      <div className="about-page">
         <div>
            <h1>About</h1>
         </div>
         <div className="about-s">
            <div className="about">
               <div className="about-image">
                  <img className="me" src={Me} alt="pic of me" />
               </div>
               <div className="about-text">
                  <h2 id="hello">Hello!</h2>
                  <h2 id="name-is">My name is </h2>
                  <h2 id="name">Harrf Akbar</h2>
                  <div className="about-icon">
                     <a id="about-icon" href="https://github.com/harrf815">
                        <i className="github square icon"></i>GitHub{" "}
                     </a>
                     |
                     <a id="about-icon" href="https://www.linkedin.com/in/harrf-akbar-a99454172/">
                        <i className="linkedin icon"></i>Linkedin{" "}
                     </a>
                     |
                     <a id="about-icon" href="https://harrf-akbar.medium.com">
                        <i className="medium icon"></i>Medium
                     </a>
                  </div>
                  <p>
                     I'm a Software Engineer looking to join a stable company that offers an
                     opportunity for growth while continuing to contribute my expertise and
                     experience to benefit mutual growth and success. I have years of managerial
                     experience and I excel at taking on new tasks and responsibilities and adapting
                     them quickly to different environments. When I'm not working hard as a software
                     engineer, I enjoy playing any kind of sports, traveling and being around my
                     friends and family.
                  </p>
               </div>
            </div>
         </div>
         <div className="skills-title">
            <h3>
               <span className="underline">Technical Skills</span>
            </h3>
         </div>
         <div className="skills">
            <div className="set-1">
               <IconContext.Provider value={{ color: "#F0DB4F" }}>
                  <div>
                     <p className="skill-icon1">
                        <SiJavascript /> Javascript{" "}
                     </p>
                  </div>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#61DBFB" }}>
                  <div>
                     <p className="skill-icon2">
                        <FaReact /> React.js{" "}
                     </p>
                  </div>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#764abc" }}>
                  <div>
                     <p className="skill-icon3">
                        <SiRedux /> Redux{" "}
                     </p>
                  </div>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#68A063" }}>
                  <div>
                     <p className="skill-icon4">
                        <SiNodeDotJs /> Node.js{" "}
                     </p>
                  </div>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#D51F06" }}>
                  <div>
                     <p className="skill-icon5">
                        <SiRuby /> Ruby on Rails{" "}
                     </p>
                  </div>
               </IconContext.Provider>
            </div>
            <div className="set-2">
               <IconContext.Provider value={{ color: "#264de4 " }}>
                  <div>
                     <p className="skill-icon6">
                        <SiCss3 /> CSS{" "}
                     </p>
                  </div>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#e34c26" }}>
                  <div>
                     <p className="skill-icon7">
                        <FaHtml5 /> HTML{" "}
                     </p>
                  </div>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#336791" }}>
                  <div>
                     <p className="skill-icon8">
                        <SiPostgresql /> PostgreSQL{" "}
                     </p>
                  </div>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#4DB33D" }}>
                  <div>
                     <p className="skill-icon9">
                        <SiMongodb /> MongoDB{" "}
                     </p>
                  </div>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#B52E31" }}>
                  <div>
                     <p className="skill-icon10">
                        <FaAngular /> Angular.js{" "}
                     </p>
                  </div>
               </IconContext.Provider>
            </div>
         </div>
      </div>
   )
}

export default About
