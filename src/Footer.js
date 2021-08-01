import React from "react"

import { IconContext } from "react-icons/lib"
import { MdEmail } from "react-icons/md"
import { ImFacebook2, ImTwitter, ImGithub } from "react-icons/im"
import { RiInstagramFill } from "react-icons/ri"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer-details">
            <div className="contact-icons">
               <IconContext.Provider value={{ color: "#f5f5f5", backgroundColor: "black" }}>
                  <a id="c-icon" href="mailto:harrf_akbar@yahoo.com">
                     <MdEmail />
                  </a>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#f5f5f5" }}>
                  <a id="c-icon" href="https://www.facebook.com/harrf.akbar/">
                     <ImFacebook2 />
                  </a>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#f5f5f5" }}>
                  <a id="c-icon" href="https://twitter.com/harrfakbar">
                     <ImTwitter />
                  </a>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#f5f5f5" }}>
                  <a id="c-icon" href="https://www.instagram.com/harrfakbar/">
                     <RiInstagramFill />
                  </a>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#f5f5f5" }}>
                  <a id="c-icon" href="https://github.com/harrf815">
                     <ImGithub />
                  </a>
               </IconContext.Provider>
               <IconContext.Provider value={{ color: "#f5f5f5" }}>
                  <a id="c-icon" href="https://www.linkedin.com/in/harrf-akbar-a99454172/">
                     <FaLinkedin />
                  </a>
               </IconContext.Provider>
            </div>
            <div>
               <p style={{ color: "#8f9aa7", marginTop: "10px" }}>
                  Harrf Akbar <span style={{ color: "#0f84f1" }}> ©2021</span>
               </p>
            </div>
         </div>
      </div>
   )
}

export default Footer
