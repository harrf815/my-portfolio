import React from "react"
import { IconContext } from "react-icons/lib"
import { MdEmail } from "react-icons/md"
import { ImFacebook2, ImTwitter, ImGithub } from "react-icons/im"
import { RiInstagramFill } from "react-icons/ri"
import { FaLinkedin } from "react-icons/fa"

const Contact = () => {

   return (
      <div>
         <div className="contact-page">
            <h1>Contact</h1>
         </div>
         <div className="contact-icons">
            <IconContext.Provider value={{ color: "black" }}>
               <a id="c-icon" href="mailto:harrf_akbar@yahoo.com">
                  <MdEmail /> Email
               </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#4267B2" }}>
               <a id="c-icon" href="https://www.facebook.com/harrf.akbar/">
                  <ImFacebook2 /> Facebook
               </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#1DA1F2" }}>
               <a id="c-icon" href="https://twitter.com/harrfakbar">
                  <ImTwitter /> Twitter
               </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#833AB4" }}>
               <a id="c-icon" href="https://www.instagram.com/harrfakbar/">
                  <RiInstagramFill /> Instagram
               </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#211F1F" }}>
               <a id="c-icon" href="https://github.com/harrf815">
                  <ImGithub />
               </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#0e76a8" }}>
               <a id="c-icon" href="https://www.linkedin.com/in/harrf-akbar-a99454172/">
                  <FaLinkedin />
               </a>
            </IconContext.Provider>
         </div>
         <div>
            <h2 className="thank-you"> Thank You for Visiting!</h2>
         </div>
      </div>
   )
}
export default Contact
