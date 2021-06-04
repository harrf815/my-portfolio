
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Projects from './Projects'
import Work from './Work'
import Contact from './Contact'

const App = () => {

    return (
        <>
            <BrowserRouter>
                <div>
                    <div className=" main ui container">
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/work" exact component={Work} /> 
                        <Route path="/contact" exact component={Contact} /> 
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App; 