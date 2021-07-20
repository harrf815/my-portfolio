
import React from 'react'

import Flippy, { FrontSide, BackSide } from 'react-flippy'

import ImageManageLite from './photos/managelite.png'
import ImageBrewProject from './photos/brewproject.png'
import ImageInstaRecipes from './photos/instarecipes.png'
import ImageComingSoon from './photos/comingsoon.png'

const Projects = () => {

    return (
        <div>
            <div>
                <h2>Projects</h2>
            </div>
            <br/>
            <div className="card" >
                <Flippy flipOnHover={true} style={{ width: '350px', height: '300px'}}>
                    <FrontSide className="front-side"style={{
                        backgroundImage: `url("${ImageComingSoon}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover"
                    }}>
                    </FrontSide>
                    <BackSide className="back-side">
                        <div className="back-side-text">
                            <h4> InstaRecipes2.0 </h4>
                            <h4> Node.js | React Hooks </h4>
                            <a className="github" href="https://github.com/harrf815/phase5-frontend">Github | </a>
                            <button className="button">Details</button>
                        </div>
                        
                    </BackSide>
                </Flippy>
            </div>

            <div className="card" >
                <Flippy flipOnHover={true} style={{ width: '350px', height: '300px'}}>
                    <FrontSide className="front-side"style={{
                        backgroundImage: `url("${ImageManageLite}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover"
                    }}> 
                    </FrontSide>
                    <BackSide className="back-side">
                        <div className="back-side-text">
                            <h4> Manage Lite </h4>
                            <h4> Ruby on Rails | React.js, Redux </h4>
                            <a className="github" href="https://github.com/harrf815/phase5-frontend">Github | </a>
                            <button className="button">Details</button>
                        </div>
                        
                    </BackSide>
                </Flippy>
            </div>

            <div className="card">
                <Flippy flipOnHover={true}  style={{ width: '350px', height: '300px'}}>
                    <FrontSide className="front-side"style={{
                        backgroundImage: `url("${ImageBrewProject}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}> 
                    </FrontSide>
                    <BackSide className="back-side">
                    <div className="back-side-text">
                            <h4> Brew Project </h4>
                            <h4> Ruby on Rails | React.js </h4>
                            <a className="github" href="https://github.com/harrf815/phase5-frontend">Github | </a>
                            <button className="button">Details</button>
                        </div>
                        
                    </BackSide>
                </Flippy>
            </div>

            <div className="card">
                <Flippy flipOnHover={true}  style={{ width: '350px', height: '300px'}}>
                    <FrontSide className="front-side"style={{
                        backgroundImage: `url("${ImageInstaRecipes}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}> 
                    </FrontSide>
                    <BackSide className="back-side">
                    <div className="back-side-text">
                            <h4> InstaRecipes </h4>
                            <h4> Ruby on Rails | JavaScript </h4>
                            <a className="github" href="https://github.com/harrf815/phase5-frontend">Github | </a>
                            <button className="button">Details</button>
                        </div>
                        
                    </BackSide>
                </Flippy>
            </div>
        </div>
    )
}

export default Projects; 