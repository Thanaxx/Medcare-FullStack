import React from 'react'
// import {useSpring, animated} from 'react-spring'
import {useSpring, animated} from 'react-spring'
import { ModalMessage, ModalWrapper, CloseModal } from './ModalStyle';
import { MdClose } from 'react-icons/md'

function Modal({showModal, setShowModal}) {

        // animation part

        const animation = useSpring({
            config: {
                duration: 250
            },
            opacity: showModal ? 1 : 0,
            transform: showModal ? `translateY(0%)` : `translateY(-100%)`
        });


    return (
        
        <>
            {showModal ? 
                
                <ModalWrapper showModal={showModal}>
                    <animated.div style={animation}>
                        <ModalMessage>
                            <CloseModal onClick={() => setShowModal(prev => !prev)}><MdClose/></CloseModal>
                            <h3>Get in touch with <span>MEDCARE !</span></h3>

                            <form action="">
                                <input type="text" name="text" placeholder="Enter your name" />
                                <input type="email" name="email" placeholder="Enter Email" />
                                <textarea name="message" cols="30" rows="5" placeholder="Message"></textarea>
                                <button>Send message</button>
                            </form>
                        </ModalMessage>
                    </animated.div>
                </ModalWrapper> : null
            }
        </>
    )
}

export default Modal;
