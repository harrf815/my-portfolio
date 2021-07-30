import React, { useCallback, useRef, useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { MdClose } from "react-icons/md"

const Background = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   display: flex;
   justify-content: center;
`

const ModalWrapper = styled.div`
   width: 1000px;
   height: 800px;
   text-align: center;
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

   const animation = useSpring({
      config: {
         duration: 250,
      },
      opacity: showModal ? 1 : 0,
      //   transform: showModal ? `translateY(0%)` : `translateY(-100%)`
   })

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
         return <div>Coming Soon</div>
      } else if (detail === "managelite") {
         return (
            <div>
               <div>
                  <h1>Manage Lite</h1>
               </div>
               <br />
               <div>
                  <h3>
                     Keep track of employees schedules or create a schedule, calculate employee’s
                     pay, and post content
                  </h3>
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
               <br />
               <div>
                  <h3>
                     Brewery search application, equipped with geolocation and with a searchable
                     listings of the breweries
                  </h3>
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
                        using a few characters
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
                     An application that allowed users to post their favorite recipes to share with
                     the community
                  </h3>
               </div>
               <div>
                  <ul>
                     <li>
                        Implemented a design to develop UI and UX design strategy that provides a
                        seamless user experience
                     </li>
                     <li>
                        Engineered user interface using vanilla Javascript as the front-end and
                        Rails, Active Record as back-end
                     </li>
                     <li></li>
                     <li></li>
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
               <animated.div style={animation}>
                  <ModalWrapper>
                     <ModalContent>
                        {renderModal()}
                        <CloseModalButton
                           onClick={() => setShowModal((prev) => !prev)}
                        ></CloseModalButton>
                     </ModalContent>
                  </ModalWrapper>
               </animated.div>
            </Background>
         ) : null}
      </>
   )
}

export default Modal
