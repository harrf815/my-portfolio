import React from "react"
import './contact.css'

import Blog from './Blog'
import Email from './Email'

const Contact = () => {

   return (
      <div className="contact-p">
         <Blog />
         <div className="contact-page">
            <h1 className="contact-title">CONTACT</h1>
            <div className="line"></div>
         <Email />
         </div>
      </div>
   )
}
export default Contact
