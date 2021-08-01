import React from "react"
import emailjs from "emailjs-com"

import './email.css'

class Email extends React.Component {
   sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm("service_kgdvhmw", "template_o9hmz3m", e.target, "user_sTstz4w3zah8jfP0wHZ57")
         .then(
            function (response) {
               console.log("SUCCESS!", response.status, response.text)
            },
            function (error) {
               console.log("FAILED...", error)
            }
         )

      e.target.reset()
   }

   render() {
      return (
         <div>
            <div className="container">
               <form onSubmit={this.sendEmail}>
                  <div className="email-form">
                     <div>
                        <input
                           type="textarea"
                           className="form-control"
                           placeholder="Name"
                           name="name"
                        />
                     </div>
                     <div>
                        <input
                           type="textarea"
                           className="form-control"
                           placeholder="Email Address"
                           name="email"
                        />
                     </div>
                     <div>
                        <input
                           type="textarea"
                           className="form-control"
                           placeholder="Subject"
                           name="subject"
                        />
                     </div>
                     <div>
                        <textarea
                           type="textarea"
                           className="form-control message"
                           placeholder="Message"
                           name="message"
                        />
                     </div>
                     <div>
                        <input type="submit" className="email-button" value="Send Message" />
                     </div>
                     
                  </div>
               </form>
            </div>
         </div>
      )
   }
}
export default Email; 
