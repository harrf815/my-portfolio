import React, { useCallback, useRef, useEffect } from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"
import { MdClose } from "react-icons/md"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import MGphoto1 from "./photos/Screen Shot 2021-07-30 at 5.47.18 PM.png"
import MGphoto2 from "./photos/Screen Shot 2021-07-30 at 5.47.55 PM.png"
import MGphoto3 from "./photos/Screen Shot 2021-07-30 at 5.48.08 PM.png"
import BWphoto1 from "./photos/Screen Shot 2021-07-30 at 5.23.15 PM.png"
import BWphoto2 from "./photos/Screen Shot 2021-07-30 at 5.23.37 PM.png"
import INphoto1 from "./photos/Screen Shot 2021-07-31 at 9.56.50 PM.png"
import INphoto2 from "./photos/Screen Shot 2021-07-31 at 9.57.07 PM.png"

const Background = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   display: flex;
   min-width: 300px;
`

const ModalWrapper = styled.div`
   width: 750px;
   height: 800px;
   
   text-align: left; 
   background: #fff;
   color: #000;
   display: grid;
   grid-template-rows: 1fr 1fr;
   position: relative;
   z-index: 10;
   box-shadow: 0px 0px 10px #888888;
   font-size: 12px;
`

const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   line-height: 1.8;
   color: #141414;
`

const CloseModalButton = styled(MdClose)`
   cursor: pointer;
   position: absolute;
   bottom: 20px;
   right: 20px;
   width: 32px;
   height: 32px;
   padding: 0;
   z-index: 10;
   background: #fff;
   border: none;
   font-size: 25px;
   color: #888888;
`

const Modal = ({ showModal, setShowModal, detail }) => {
   const modalRef = useRef()



   const closeModal = (e) => {
      if (modalRef.current === e.target) {
         setShowModal(false)
      }
   }

   const keyPress = useCallback(
      (e) => {
         if (e.key === "Escape" && showModal) {
            setShowModal(false)
         }
      },
      [setShowModal, showModal]
   )

   useEffect(() => {
      document.addEventListener("keydown", keyPress)
      return () => document.removeEventListener("keydown", keyPress)
   }, [keyPress])

   const renderModal = () => {
      console.log(detail)
      if (detail === "instarecpies2.0") {
         return (
            <div>
               <div className="slide">
                  <Carousel
                     autoPlay={true}
                     axis="horizontal"
                     infiniteLoop={true}
                     showThumbs={false}
                     showStatus={false}
                     showIndicators={false}
                  >
                     <div>
                        <img className="modal-images" src="" alt="managelite" />
                     </div>
                     <div>
                        <img className="modal-images" src="" alt="managelite" />
                     </div>
                     <div>
                        <img className="modal-images" src="" alt="managelite" />
                     </div>
                  </Carousel>
               </div>
               <div>
                  <h5
                     style={{
                        fontSize: "20px",
                        float: "left",
                        padding: "15px 0px 0px 15px",
                        marginRight: "600px",
                     }}
                  >
                     InstaRecipes2.0
                  </h5>
               </div>
               <br />
               <div>
                  <div>
                     <p
                        style={{
                           float: "left",
                           padding: "3px 15px 5px 15px",
                           fontWeight: "bold",
                           marginRight: "50px",
                        }}
                     >
                        {" "}
                        <span className="underline">
                           Technology: Javascript | React Hooks | Node.js | MongoDB | Express |
                           Mongoose | Bcrypt | JWT | Semantic-UI
                        </span>
                     </p>
                  </div>
                  <p style={{ padding: "0px 15px 0px 15px" }}>
                     Community based application that brings all the foodies to one place and share
                     the same experience together. InstaReciepes allows the user to post their well
                     known recipes to share with the community. User can simply fill out a form that
                     requires a name, the recipe, and an image for the user to share their favorite
                     dish. With 2.0 users are able to create an account to post their recipes and
                     even edit or delete their recipes.
                  </p>
               </div>
               <ul>
                  <li>
                     Utilized JSON Web Tokens and MongoDB to store encrypted user information on the
                     server side.
                  </li>
                  <li>Engineered a search engine that filters through different types of dishes</li>
                  <li>
                     Implemented a design to develop a design strategy that provides a user friendly
                     experience
                  </li>
               </ul>
            </div>
         )
      } else if (detail === "managelite") {
         return (
            <div>
               <div>
                  <div className="slide">
                     <Carousel
                        autoPlay={true}
                        axis="horizontal"
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                     >
                        <div>
                           <img className="modal-images" src={MGphoto1} alt="managelite" />
                        </div>
                        <div>
                           <img className="modal-images" src={MGphoto2} alt="managelite" />
                        </div>
                        <div>
                           <img className="modal-images" src={MGphoto3} alt="managelite" />
                        </div>
                     </Carousel>
                  </div>
                  <div>
                     <h5
                        style={{
                           fontSize: "20px",
                           float: "left",
                           padding: "15px 0px 0px 15px",
                           marginRight: "600px",
                        }}
                     >
                        Manage Lite
                     </h5>
                  </div>
               </div>
               <br />
               <div>
                  <p style={{ float: "left", padding: "3px 15px 5px 15px" }}>
                     <span className="underline">
                        Technology: Javascript | React Hooks | Redux | Ruby on Rails | ActiveRecords
                        | PostgreSQL | Bcrypt | JWT | Semantic-UI
                     </span>
                  </p>
               </div>
               <div>
                  <div>
                     <p style={{ padding: "0px 15px 0px 15px" }}>
                        Welcome to Manage Lite an application for business owners. The purpose of
                        this application is to help reduce the workload of a manager. This applicationm
                        helps the user to make schedules
                        and post it on the site. The app also allows the employees to sign up on the application
                        and view their schedules online. The admin is also able to calculate an
                        employees's hour to determine their pay for the week. Employees are able to
                        commuicate with their colleagues, post messages to see if someone can cover
                        a shift or even letting their manager know what days they are available.
                     </p>
                  </div>
                  <ul>
                     <li>
                        Utilized JSON Web Tokens and localStorage to store encrypted user
                        information client-side.
                     </li>
                     <li>
                        Developed a calendar to allow the user to create schedules for their
                        employees
                     </li>
                     <li>Technology used react, redux, ruby on rails, and hooks</li>
                     <li>
                        Implemented a design to develop a design strategy that provides a user
                        friendly experience
                     </li>
                  </ul>
               </div>
            </div>
         )
      } else if (detail === "brewproject") {
         return (
            <div>
               <div className="slide">
                  <Carousel
                     autoPlay={true}
                     axis="horizontal"
                     infiniteLoop={true}
                     showThumbs={false}
                     showStatus={false}
                     showIndicators={false}
                  >
                     <div>
                        <img className="modal-images" src={BWphoto1} alt="brew project" />
                     </div>
                     <div>
                        <img className="modal-images" src={BWphoto2} alt="brew project" />
                     </div>
                  </Carousel>
               </div>
               <div>
                  <h5
                     style={{
                        fontSize: "20px",
                        float: "left",
                        padding: "15px 0px 0px 15px",
                        marginRight: "600px",
                     }}
                  >
                     Brew Project
                  </h5>
               </div>
               <div>
                  <p
                     style={{
                        float: "left",
                        padding: "3px 15px 5px 15px",
                        fontWeight: "bold",
                        marginRight: "50px",
                     }}
                  >
                     <span className="underline">
                        Technology: Javascript | React.js | Ruby on Rails | ActiveRecords |
                        PostgreSQL | Bcrypt | JWT | Semantic-UI
                     </span>
                  </p>
               </div>

               <br />
               <div>
                  <p style={{ padding: "0px 15px 0px 15px" }}>
                     Brew Project is a search application. That allows the user to explore hundreds
                     of breweries from all over the United States, brought by the an open brewery
                     database API. A user can view all by state, search using one of the search
                     bars, or find one on the map-box provided map. As a user you can even drop a
                     review after visiting so other users know what's up!
                  </p>
               </div>

               <div>
                  <ul>
                     <li>
                        Authenticated users at login by encrypting identifying account information
                        via JWT
                     </li>
                     <li>
                        Implemented Geolocation to show all the breweries located around the user’s
                        location
                     </li>
                     <li>
                        Developed Javascript, React front-end and Rails, Active Records, Postgres
                        back-end applications
                     </li>
                     <li>
                        Engineered a search engine that filters through every brewery in the US by
                        using a few characters or by state
                     </li>
                  </ul>
               </div>
            </div>
         )
      } else if (detail === "instarecipes") {
         return (
            <div>
               <div className="slide">
                  <Carousel
                     autoPlay={true}
                     axis="horizontal"
                     infiniteLoop={true}
                     showThumbs={false}
                     showStatus={false}
                     showIndicators={false}
                  >
                     <div>
                        <img className="modal-images" src={INphoto1} alt="instarecipes" />
                     </div>
                     <div>
                        <img className="modal-images" src={INphoto2} alt="instarecipes" />
                     </div>
                  </Carousel>
               </div>
               <div>
                  <h5
                     style={{
                        fontSize: "20px",
                        float: "left",
                        padding: "15px 0px 0px 15px",
                        marginRight: "600px",
                     }}
                  >
                     InstaRecipes
                  </h5>
               </div>
               <br />
               <div>
                  <div>
                     <p
                        style={{
                           float: "left",
                           padding: "3px 15px 5px 15px",
                           fontWeight: "bold",
                           marginRight: "150px",
                        }}
                     >
                        <span className="underline">
                        Technology: Javascript | Ruby on Rails | ActiveRecords | PostgreSQL |
                           Semantic-UI{" "}
                           </span>
                     </p>
                  </div>
                  <p style={{ padding: "0px 15px 0px 15px" }}>
                     Community based application that brings all the foodies to one place and share
                     the same experience together. InstaReciepes allows the user to post their well
                     known recipes to share with the community. User can simply fill out a form that
                     requires a name, the recipe, and an image for the user to share their favorite
                     dish.
                  </p>
               </div>
               <div>
                  <ul>
                     <li>
                        Implemented a design to develop UI and UX design strategy that provides a
                        seamless user experience
                     </li>
                     <li>
                        Engineered user interface using Javascript as the front-end and Rails,
                        Active Record as back-end
                     </li>
                     <li>Developed an application strictly using vanilla Javascript</li>
                  </ul>
               </div>
            </div>
         )
      }
   }

   return (
      <>
         {showModal ? (
            <Background onClick={closeModal} ref={modalRef}>
               <div style={{ textAlign: "center", marginRight: "auto", marginLeft: "auto" }} >
                  <ModalWrapper>
                     <ModalContent>
                        {renderModal()}
                        <CloseModalButton
                           onClick={() => setShowModal((prev) => !prev)}
                        ></CloseModalButton>
                     </ModalContent>
                  </ModalWrapper>
               </div>
            </Background>
         ) : null}
      </>
   )
}

export default Modal
