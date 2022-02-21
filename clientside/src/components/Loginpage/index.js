import React, {useState} from 'react'
import {LogContainer, LogBox, LogLogo, InputForm, Inputs, TextInput, LogButton} from './Loginstyle'
// import axios to create a request and connect with our backend
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import Register from '../Registerpage'

function Loginpage() {

    let history = useHistory();

    // input storage for login
    const [usernameLog, setUsernameLog] = useState("")
    const [emailLog, setEmailLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")

    // displaying the status
    const [loginStatus, setLoginStatus] = useState("")

    // displaying the modal create an account
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }


    // when clicking the login button
    const login = () => {
        Axios.post('http://localhost:3001/login', {
            userName: usernameLog,
            eMail: emailLog,
            passWord: passwordLog
        }).then((response) => {
            //.data - make messgae dispaly in the console only to be use to display the status message after logging in
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username)
                history.push("/home") //to redirect to the homepage
            }
        });
    }

    return (
        <>
            <LogContainer>
                <img className='backG' src="/images/login_bg.png" alt="Backgroundimage"/>

                <LogBox>
                    
                    <LogLogo>
                        <img src="/images/medLogo.png" alt="Medcare Logo" />
                    </LogLogo>
                    
                    <p>We aim to provide out patients a health service where we connect the patients with the Doctors around the globe instantly.</p>
                    
                    <InputForm>
                        {/* login staus display */}
                        <p>{loginStatus}</p>

                        <Inputs>
                            <label htmlFor="username">Username</label>
                            
                            <TextInput>
                                <FaUser />
                                <input 
                                    type="text"
                                    name='username'
                                    onChange={(e) => setUsernameLog(e.target.value)}
                                />
                            </TextInput>
                        </Inputs>

                        <Inputs>
                            <label htmlFor="email">Email</label>

                            <TextInput>
                                <MdEmail />
                                <input 
                                    type="text" 
                                    onChange={(e) => setEmailLog(e.target.value)}
                                />
                            </TextInput>
                        </Inputs>

                        <Inputs>
                            <label htmlFor="password">Password</label>

                            <TextInput>
                                <RiLockPasswordFill />
                                <input 
                                    type="password" 
                                    onChange={(e) => setPasswordLog(e.target.value)}    
                                />
                            </TextInput>
                        </Inputs>
                    </InputForm>

                    <LogButton>
                        <button className='login-btn' onClick={login}>Login</button>
                        <button className='create-btn' onClick={openModal}>Create an Account</button>
                    </LogButton>

                </LogBox>
            </LogContainer>

            <Register showModal={showModal} setShowModal={setShowModal} />
        </>
        
    )
}

export default Loginpage
