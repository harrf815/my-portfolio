
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FaReact, FaHtml5, FaAngular } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiNodeDotJs, SiRuby, SiPostgresql, SiCss3, SiMongodb } from 'react-icons/si'

const About = () => {

    return (
        <div>
            <div>
                <h2>About</h2>
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