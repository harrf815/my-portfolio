import React, { useCallback, useRef, useEffect } from "react"
import styled from "styled-components"

import { MdClose } from "react-icons/md"

import MGphoto1 from "./photos/Screen Shot 2021-07-30 at 5.47.18 PM.png"
import MGphoto2 from "./photos/Screen Shot 2021-07-30 at 5.47.55 PM.png"
import MGphoto3 from "./photos/Screen Shot 2021-07-30 at 5.48.08 PM.png"
import BWphoto1 from "./photos/Screen Shot 2021-07-30 at 5.23.15 PM.png"
import BWphoto2 from "./photos/Screen Shot 2021-07-30 at 5.23.37 PM.png"

const Background = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   display: flex;
   justify-content: center;
`

const ModalWrapper = styled.div`
   width: 1050px;
   height: 850px;
   text-align: center;
   margin-left: 800px;
   background: #fff;
   color: #000;
   display: grid;
   grid-template-rows: 1fr 1fr;
   position: absolute;
   z-index: 10;
   border-radius: 15px;
   box-shadow: 2px 5px 10px #888888;
`

// const ModalImg = styled.img`
//   width: 100%;
//   height: 50%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   line-height: 1.8;
   color: #141414;
`

const CloseModalButton = styled(MdClose)`
   cursor: pointer;
   position: absolute;
   top: 20px;
   right: 20px;
   width: 32px;
   height: 32px;
   padding: 0;
   z-index: 10;
   background: #fff;
   border: none;
   font-size: 25px;
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
               <div>
                  <h1>InstaRecipes2.0</h1>
               </div>
               <br />
               <div>
                  <h3>
                     Community based application that brings all the foodies to one place and share
                     the same experience together. InstaReciepes allows the user to post their well
                     known recipes to share with the community. User can simply fill out a form that
                     requires a name, the recipe, and an image for the user to share their favorite
                     dish. With 2.0 users are able to create an account to post their recipes and
                     even edit their recipes.
                  </h3>
               </div>
               <div>
                  <h4>
                     Technology: Javascript | React Hooks | Node.js | MongoDB | Express |
                     Mongoose | Bcrypt | JWT | Semantic-UI
                  </h4>
               </div>
               <ul>
                  <li>
                     Utilized JSON Web Tokens and MongoDB to store encrypted user information
                     on the server side.
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
                  <h1>Manage Lite</h1>
               </div>
               <br />
               <div>
                  <img className="modal-images" src={MGphoto1} alt="managelite" />
                  <img className="modal-images" src={MGphoto2} alt="managelite" />
                  <img className="modal-images" src={MGphoto3} alt="managelite" />
               </div>
               <div>
                  <h3>
                     Welcome to Manage Lite an application for business owners. The purpose of this
                     application is to make a manager/owner known as admins management exoerince a
                     lot easier. This application help the user to make a schedule and post on the
                     site that always the employees to sign up on the application and view their
                     schedules online. The admin is also able to calculate an employees's hour to
                     determine their pay for the week. Employees are able to commuicate with their
                     colleagues, post messages to see if someone can cover a shift or even letting
                     their manager know what days they are available.
                  </h3>
               </div>
               <div>
                  <h4>
                     Technology: Javascript | React Hooks | Redux | Ruby on Rails | ActiveRecords |
                     PostgreSQL | Bcrypt | JWT | Semantic-UI
                  </h4>
               </div>
               <ul>
                  <li>
                     Utilized JSON Web Tokens and localStorage to store encrypted user information
                     client-side.
                  </li>
                  <li>
                     Developed a calendar to allow the user to create schedules for their employees
                  </li>
                  <li>Technology used react, redux, ruby on rails, and hooks</li>
                  <li>
                     Implemented a design to develop a design strategy that provides a user friendly
                     experience
                  </li>
               </ul>
            </div>
         )
      } else if (detail === "brewproject") {
         return (
            <div>
               <div>
                  <h1>Brew Project</h1>
               </div>
               <div>
                  <img className="modal-images" src={BWphoto1} alt="brew project" />
                  <img className="modal-images" src={BWphoto2} alt="brew project" />
               </div>
               <br />
               <div>
                  <h3>
                     Brew Project is a search application. That allows the user to explore hundreds
                     of brewies from all over the United States, brought by the opne brewery
                     database API. A user can view all by state, search using one of the search
                     bars, or find one on the map-box provided map. As a user you can even drop a
                     review after visiting so other users know what's up!
                  </h3>
               </div>
               <div>
                  <h4>
                     Technology: Javascript | React.js | Ruby on Rails | ActiveRecords | PostgreSQL
                     | Bcrypt | JWT | Semantic-UI
                  </h4>
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
               <div>
                  <h1>InstaRecipes</h1>
               </div>
               <br />
               <div>
                  <h3>
                     Community based application that brings all the foodies to one place and share the
                     same experience together. InstaReciepes allows the user to post their well known recipes to share with
                     the community. User can simply fill out a form that requires a name, the recipe, and an image
                     for the user to share their favorite dish.
                  </h3>
               </div>
               <div>
                  <h4>Technology: Javascript | Ruby on Rails | ActiveRecords | PostgreSQL | Semantic-UI </h4>
               </div>
               <div>
                  <ul>
                     <li>
                        Implemented a design to develop UI and UX design strategy that provides a
                        seamless user experience
                     </li>
                     <li>
                        Engineered user interface using Javascript as the front-end and
                        Rails, Active Record as back-end
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
               
                  <ModalWrapper>
                     <ModalContent>
                        {renderModal()}
                        <CloseModalButton
                           onClick={() => setShowModal((prev) => !prev)}
                        ></CloseModalButton>
                     </ModalContent>
                  </ModalWrapper>
               
            </Background>
         ) : null}
      </>
   )
}

export default Modal
