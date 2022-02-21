import React from 'react'
import {ProfileWrapper, ProfileMain, ProfileImage, ProfileInfo, Schedule, Fee, Request, CloseProfile} from './SpecialistStyle';
import {MdClose} from 'react-icons/md'

function ApptDetails({modal, setModal, name, image, specialty, hospital, address, sched, professionalFee, medCert, medClearance, medAbstract }) {
    return (
        <>
        {modal ?
            <ProfileWrapper>

                <CloseProfile onClick={() => setModal(false)}>
                    <MdClose />
                </CloseProfile>

                <ProfileMain>

                    <ProfileImage>
                        <img src={image} alt="doctor" />
                        <h2>{name}</h2>
                        <p>{specialty}</p>
                    </ProfileImage>

                    <ProfileInfo>
                        <Schedule>
                            <h1>HOSPITALS / SCHEDULE</h1>
                            <h3>{hospital}</h3>
                            <p> {address} <br />
                               {sched}
                            </p>
                        </Schedule>

                        <Fee>
                            <h1>PROFESSIONAL FEE (NOT APPLICABLE FOR HMO CONSULTATIONS)</h1>
                            <p>Professional Fee: {professionalFee}</p>
                        </Fee>

                        <Request>
                            <h1>ADDITIONAL REQUEST FEE (REQUESTS NOT COVERED BY HMO WILL BE CHARGED TO PATIENT)</h1>
                            <p>Medical Certificate Fee: {medCert} </p>
                            <p>Medical Clearance Fee: {medClearance}</p>
                            <p>Medical Abstract Fee: {medAbstract}</p>
                        </Request>
                        
                    </ProfileInfo>
                    
                </ProfileMain>
            </ProfileWrapper> : null
        }
        </>
    )
}

export default ApptDetails