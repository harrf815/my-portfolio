
import React from 'react';


import Work from './Work'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

const Home = () => {

    return (
        <div>
            <div id="about" className="sections">
                <About />
            </div>
       
            <div id="project" className="sections">
                <Projects />
            </div>
            <br/>
           
            <div id="work" className="sections">
                <Work />
            </div>
            <div id="contact" className="sections">
                <Contact />
            </div>
        </div>

        
    )
}

export default Home; 