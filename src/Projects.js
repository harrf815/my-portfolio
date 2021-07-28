
import React, { useState } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import styled from 'styled-components'

import ImageManageLite from './photos/managelite.png'
import ImageBrewProject from './photos/brewproject.png'
import ImageInstaRecipes from './photos/instarecipes.png'
import ImageComingSoon from './photos/comingsoon.png'
import Modal from './Modal'


const Button = styled.a`
    min-width: 100px;
    border: none;
    padding-left: 5px;
    color: #888888;
    cursor: pointer;
`

const Projects = () => {

    const [showModal, setShowModal] = useState(false)
    const [detail, setDetail] = useState('')

    return (
        <div>
            <div>
                <h2>Projects</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="card" >
            <Modal showModal={showModal} setShowModal={setShowModal} detail={detail} />
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
                            <a className="github" href="https://github.com/harrf815/phase5-frontend"><i className="github square icon"></i> Github </a><span>|</span>
                            <Button onClick={() => {
                                setShowModal(true)
                                setDetail('instarecpies2.0')
                            }} >Details</Button>
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
                            <a className="github" href="https://github.com/harrf815/phase5-frontend"><i className="github square icon"></i>Github </a><span>|</span>
                            <Button onClick={() => {
                                setDetail('managelite')
                                setShowModal(true)
                            }}>Details</Button>
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
                            <a className="github" href="https://github.com/harrf815/phase5-frontend"><i className="github square icon"></i>Github </a><span>|</span>
                            <Button onClick={() => {
                                setDetail('brewproject')
                                setShowModal(true)
                            }}>Details</Button>
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
                            <a className="github" href="https://github.com/harrf815/phase5-frontend"><i className="github square icon"></i>Github </a><span>|</span>
                            <Button onClick={() => {
                                setDetail('instarecipes')
                                setShowModal(true)
                            }}>Details</Button>
                        </div>
                        
                    </BackSide>
                </Flippy>
            </div>
            
        </div>
    )
}

export default Projects; 