import React, {useState} from 'react'
import {LogContainer, LogBox, RegBox, LogLogo, InputForm, Inputs, TextInput, LogButton} from './Loginstyle'
// import axios to create a request and connect with our backend
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'

function Loginpage() {

    let history = useHistory();

    // input storage in create account
    const [usernameReg, setUsernameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")

    // input storage for login
    const [usernameLog, setUsernameLog] = useState("")
    const [emailLog, setEmailLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")

    // displaying the status
    const [loginStatus, setLoginStatus] = useState("")

    // when clicking the create account button
    const register = () => {
        Axios.post('http://localhost:3001/register', {
            userName: usernameReg,
            eMail: emailReg,
            passWord: passwordReg
        }).then((response) => {
            console.log(response)
        });
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

                    {/* login staus display */}
                    <h1>{loginStatus}</h1>

                    <LogButton>
                        <button className='login-btn' onClick={login}>Login</button>
                        <button className='create-btn'>Create an Account</button>
                    </LogButton>

                </LogBox>

                
                <RegBox>
                    <h1>Create an Account</h1>
                    <input 
                        type="text"
                        placeholder="username"
                        onChange={(e) => setUsernameReg(e.target.value)} 
                    />
                    
                    <input 
                        type="text" 
                        placeholder="email"
                        onChange={(e) => setEmailReg(e.target.value)}    
                    />

                    <input 
                        type="text" 
                        placeholder="password" 
                        onChange={(e) => setPasswordReg(e.target.value)}
                    />
                    <button onClick={register}>Sign up</button>
                </RegBox>
                
            </LogContainer>
        </>
        
    )
}

export default Loginpage
