
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FaReact, FaHtml5, FaAngular } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiNodeDotJs, SiRuby, SiPostgresql, SiCss3, SiMongodb } from 'react-icons/si'

import Me from './photos/me.JPG'

const About = () => {

    return (
        <div className="about-page">
            <div>
                <h1>About</h1>
            </div>
            <div>
                <div className="about">
                    <div className="about-image">
                        <img className="me" src={Me} alt="pic of me" />
                    </div>
                    <div className="about-text">
                        <h2>Harrf Akbar</h2>
                        <div className="about-icon">
                            <a id="about-icon" href="https://github.com/harrf815"><i className="github square icon"></i>GitHub </a>|
                            <a id="about-icon" href="https://www.linkedin.com/in/harrf-akbar-a99454172/"><i className="linkedin icon"></i>Linkedin </a>|
                            <a id="about-icon" href="https://harrf-akbar.medium.com"><i className="medium icon"></i>Medium</a>
                        </div>
                        <p> 
                        Hello! My name is Harrf Akbar. I'm a Software Engineer looking to join a stable company that 
                        offers an opportunity for growth while continuing to contribute my 
                        expertise and experience to benefit mutual growth and success. I have years 
                        of managerial experience and I excel at taking on new tasks and responsibilities 
                        and adapting them quickly to different environments. When I'm not working hard 
                        as a software engineer, I enjoy playing any kind of sports, traveling and being 
                        around my friends and family.
                        </p>
                    </div>
                </div>
            </div>
            <div className="skills-title">
                <h3><span className="underline">Technical Skills</span></h3>
            </div>
            <div className="skills">
                <div className="set-1">
                <IconContext.Provider value={{ color: '#F0DB4F' }}>
                    <div>
                        <p><SiJavascript/> Javascript </p>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#61DBFB' }}>
                    <div>
                        <p><FaReact/> React.js </p>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#764abc' }}>
                    <div>
                        <p><SiRedux/> Redux </p>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#68A063' }}>
                    <div>
                        <p><SiNodeDotJs/> Node.js </p>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#D51F06' }}>
                    <div>
                        <p><SiRuby/> Ruby on Rails </p>
                    </div>
                </IconContext.Provider>
                </div>
                <div className="set-2">

                <IconContext.Provider value={{ color: '#264de4 ' }}>
                    <div>
                        <p><SiCss3/> CSS </p>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#e34c26' }}>
                    <div>
                        <p><FaHtml5/> HTML </p>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#336791' }}>
                    <div>
                        <p><SiPostgresql/> PostgreSQL </p>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#4DB33D' }}>
                    <div>
                        <p><SiMongodb/> MongoDB </p>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#B52E31' }}>
                    <div>
                        <p><FaAngular/> Angular.js </p>
                    </div>
                </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default About; 