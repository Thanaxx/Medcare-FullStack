import React, {useState} from 'react'
import { Appform, Profile } from '../Button/Button';
import ApptDetails from './ApptDetails';
import {DoctorAbout, Info, Details, MoreDetails} from './SpecialistStyle'

function Doctorspage({image, name, label, specialty, rate, clinic, hospital, address, sched, professionalFee, medCert, medClearance, medAbstract}) {
    

    const [modal, setModal] = useState(false)

    const openAppt = () => {
        setModal(prev => !prev)
    }
    
    return (
        <>
            <DoctorAbout>
                <Info>
                    <img 
                        src={image}
                        alt="Doctor"
                    />

                    <MoreDetails>
                        <button className='view' onClick={openAppt} >View Doctors Profile</button>
                        <Appform buttonStyle='btn--primary'>Set an appointment !</Appform>
                    </MoreDetails>
                </Info>

                <Details>
                    <h2>{name}</h2>
                    <p>{label}</p>
                    <p>Specialty: {specialty}</p>
                    <p>Appointment Response Rate: {rate}</p>
                    <p>Clinics: {clinic}</p>
                </Details>
            </DoctorAbout>

            <ApptDetails modal={modal} setModal={setModal} image={image} name={name} specialty={specialty} 
                        hospital={hospital} address={address} sched={sched} professionalFee={professionalFee}
                        medCert={medCert} medClearance={medClearance} medAbstract={medAbstract}
            />
        </>
    )
}

export default Doctorspage
