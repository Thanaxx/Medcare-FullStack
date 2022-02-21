import React, {useState} from 'react'
import { MessageContainer} from './ModalStyle';
import Modal from './Modal';
import { AiFillMessage } from "react-icons/ai";

function Messages() {

    const [showModal, setShowModal] = useState(false);
        
    const openModal = () => {
        setShowModal(prev => !prev)
    }



    return (
        <>
            <MessageContainer>

                    <button onClick={openModal}>
                        <AiFillMessage />
                    </button>
                    <Modal showModal={showModal} setShowModal={setShowModal}/>

            </MessageContainer>
        </>
    )
}

export default Messages;