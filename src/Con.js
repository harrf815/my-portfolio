import React from "react"
import emailjs from "emailjs-com"

class Contact extends React.Component {
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
                  <div>
                     <div>
                        <input
                           type="text"
                           className="form-contorl"
                           placeholder="Name"
                           name="name"
                        />
                     </div>
                     <div>
                        <input
                           type="text"
                           className="form-contorl"
                           placeholder="Email Address"
                           name="email"
                        />
                     </div>
                     <div>
                        <input
                           type="text"
                           className="form-contorl"
                           placeholder="Subject"
                           name="subject"
                        />
                     </div>
                     <div>
                        <input
                           type="text"
                           className="form-contorl"
                           placeholder="Message"
                           name="message"
                        />
                     </div>
                     <div>
                        <input type="submit" className="btn btn-info" value="Send Message" />
                     </div>
                     <div>
                        <a href="mailto:harrf_akbar@yahoo.com">Email Me</a>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      )
   }
}
export default Contact
