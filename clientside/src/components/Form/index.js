import React, {useState, useEffect} from 'react';
import { ButtonMain } from '../Button/Button';
import { FormWrapper, FormHeader, FormBody, FormContainer, ApptBtn, Forms, Appointments } from './FileStyle';
import Axios from 'axios'

function Form() {

    // input data of the user
    const [appFname, setAppFname] = useState("")
    const [appLname, setAppLname] = useState("")
    const [appNumber, setAppNumber] = useState("")
    const [appGender, setAppGender] = useState("")
    const [appBirthday, setAppBirthday] = useState("")
    const [appHealth, setAppHealth] = useState("")
    const [appAddress, setAppAddress] = useState("")
    const [appEmail, setAppEmail] = useState("")

    const [appList, setAppList] = useState([]) //list of appointments in the db

    //submit appointment
    const send = () => {
        Axios.post('http://localhost:3001/api/insert', {
            appFname: appFname,
            appLname: appLname,
            appNumber: appNumber,
            appGender: appGender,
            appBirthday: appBirthday,
            appHealth: appHealth,
            appAddress: appAddress,
            appEmail: appEmail
        })
            // alert("successful insert");
            //when added, no more refresh
        setAppList([
            ...appList,
            {appFname: appFname, appLname: appLname, appNumber: appNumber, appGender: appGender, appBirthday: appBirthday, appHealth: appHealth, appAddress: appAddress, appEmail: appEmail},
        ]);
    };

    // display appointment
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setAppList(response.data);
        })
    }, []);

    //delete data when button is clicked
    const deleteAppt = (id) => {
        Axios.delete(`http://localhost:3001/api/delete/${id}`)
    }

    return (
        <>
            <FormWrapper>
                <FormContainer>
                    <FormHeader>
                        <h1>Appointment Form</h1>
                    </FormHeader>

                    <FormBody>
                        <Forms>
                            <input type="text" 
                                placeholder="Patient's First Name"
                                onChange={(e) => setAppFname(e.target.value)}    
                            />

                            <input type="text" 
                                placeholder="Patient's Last Name"
                                onChange={(e) => setAppLname(e.target.value)}
                            />

                            <input type="number"
                                placeholder="Mobile number (e.g. 639983853265)"
                                onChange={(e) => setAppNumber(e.target.value)}
                            />
                            <select
                                onChange={(e) => setAppGender(e.target.value)}
                            > Gender
                                
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>

                            <input type="date"
                                placeholder="Birthday"
                                onChange={(e) => setAppBirthday(e.target.value)}
                            />
                            
                            <input type="text"
                                placeholder="Health Condition"
                                onChange={(e) => setAppHealth(e.target.value)}
                            />
                            <input type="address"
                                placeholder="Address"
                                onChange={(e) => setAppAddress(e.target.value)}
                            />
                            <input type="email"
                                placeholder="Email(required)"
                                onChange={(e) => setAppEmail(e.target.value)}
                            />
        
                            <ApptBtn>
                                <button onClick={send}>SEND</button>
                                <ButtonMain buttonStyle="btn--primary">CANCEL</ButtonMain>
                            </ApptBtn>
                        </Forms>
                    </FormBody>
                </FormContainer>
            </FormWrapper>

            
        </>

    )
}

export default Form;
