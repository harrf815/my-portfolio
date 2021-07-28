
import React, { useCallback, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring';


const Background = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  display: flex;
  justify-content: center;

`;

const ModalWrapper = styled.div`
  width: 1000px;
  height: 800px;

  background: #fff;
  color: #000;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

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
  
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  background: #fff;
`;


const Modal = ({ showModal, setShowModal, detail }) => {

    const modalRef = useRef();

    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      
    });
    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      };
      const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false);
          }
        },
        [setShowModal, showModal]
      );
      useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );

      const renderModal = () => {
        console.log(detail)
        if(detail === 'instarecpies2.0'){
            return (
             <div>
               Hello
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
                             <CloseModalButton onClick={() => setShowModal(prev => !prev)}>X</CloseModalButton>
                         </ModalContent>
                     </ModalWrapper>
                     </animated.div>
                 </Background>
                ) : null}
          
        </>
    )
}

export default Modal; 