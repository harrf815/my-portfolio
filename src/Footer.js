import React from "react"

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer-details">
            <div>
               <h2>Harrf Akbar</h2>
               <p>harrf_akbar@yahoo.com</p>
            </div>
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
         </div>
      </div>
   )
}

export default Footer
