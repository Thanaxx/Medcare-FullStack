import React, {useState} from 'react'
import {RegContainer, RegBox, InputForm, Inputs, TextInput, RegButton} from './Regstyle'
import Axios from 'axios'
import {FaUser} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import { useHistory } from 'react-router-dom'

function Register({showModal, setShowModal}) {

    let history = useHistory();

    // input storage in create account
    const [usernameReg, setUsernameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")

        // when clicking the create account button
    const register = () => {
        Axios.post('http://localhost:3001/register', {
            userName: usernameReg,
            eMail: emailReg,
            passWord: passwordReg
        }).then((response) => {
            console.log(response)
        });

        setShowModal(prev => !prev)
    }

    return (
        <>
            {showModal ?
            
                <RegContainer>
                    <img className='backG' src="/images/login_bg.png" alt="register bg" />

                    <RegBox>

                        <p>STAY CONNECTED WITH US BY <br /> CREATING AN ACCOUNT.</p>

                        <InputForm>
                            <Inputs>
                                <label htmlFor="username">Username</label>

                                <TextInput>
                                    <FaUser />
                                    <input 
                                        type="text"
                                        name='username'
                                        onChange={(e) => setUsernameReg(e.target.value)} 
                                    />
                                </TextInput>
                            </Inputs>

                            <Inputs>
                                <label htmlFor="email">Email</label>

                                <TextInput>
                                    <MdEmail />
                                    <input 
                                        type="text" 
                                        name='email'
                                        onChange={(e) => setEmailReg(e.target.value)}    
                                    />
                                </TextInput>
                            </Inputs>

                            
                            <Inputs>
                                <label htmlFor="password">Password</label>

                                <TextInput>
                                    <RiLockPasswordFill />
                                    <input 
                                        type="password" 
                                        name='password'
                                        onChange={(e) => setPasswordReg(e.target.value)}
                                    />
                                </TextInput>
                            </Inputs>
                        </InputForm>

                        <RegButton>
                            <button className='reg-btn' onClick={register}>Create an Account</button>
                            <button className='cancel-btn' onClick={() => setShowModal(prev => !prev)}>Cancel</button>
                        </RegButton>
                       
                    </RegBox>
                </RegContainer> : null
            }
        </>
    )
}

export default Register
