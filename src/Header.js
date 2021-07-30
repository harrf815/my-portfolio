import React from "react"

const Header = () => {
   return (
      <div id="header" className="ui secondary menu">
         <p className="title item">Hello</p>
         <div className="right menu">
            <a className="title item" href="#about">
               About Me
            </a>
            <a className="title item" href="#project">
               Projects
            </a>
            <a className="title item" href="#work">
               Work
            </a>
            <a className="title item" href="#contact">
               Contact
            </a>
            {/* <a
               className="title item"
               href="https://docs.google.com/document/d/1IU8IxXcVD7Y5TU27aCucCI_gqIOKKY7cPJmpuVhoeYY/edit?usp=sharing"
            >
               Resume
            </a> */}
         </div>
      </div>
   )
}

export default Header
