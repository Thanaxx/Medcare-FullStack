import React from 'react';
import {ProfileWrapper, ProfileMain, ProfileImage, ProfileInfo, Schedule, Fee, Request} from './ProfileStyle';

function Profiles() {
    return (
        <>
            <ProfileWrapper data-aos='zoom-out'>
                <ProfileMain>

                    <ProfileImage>
                        <img src="/images/profile.jpg" alt="doctor" />
                        <h2>Roe Villanueva, MD </h2>
                        <p>OB-GYNE</p>
                    </ProfileImage>

                    <ProfileInfo>
                        <Schedule>
                            <h1>HOSPITALS/SCHEDULE/TYPE</h1>
                            <h3>Fatima University Medical Center</h3>
                            <p>120 Mc Arthur Highway Marulas Valenzuela <br />
                               Tue Thu
                               Face to Face
                            </p>

                            <h3>OB Gyn Online</h3>
                            <p>Concepcion, Malabon <br />                         
                               Tue Fri
                               TeleMedicine
                            </p>
                        </Schedule>

                        <Fee>
                            <h1>PROFESSIONAL FEE (NOT APPLICABLE FOR HMO CONSULTATIONS)</h1>
                            <p>Professional Fee: 400.00</p>
                        </Fee>

                        <Request>
                            <h1>ADDITIONAL REQUEST FEE (REQUESTS NOT COVERED BY HMO WILL BE CHARGED TO PATIENT)</h1>
                            <p>Medical Certificate Fee: 500.00 <br />
                               Medical Clearance Fee: 1000.00 <br />
                               Medical Abstract Fee: 1000.00
                            </p>
                        </Request>
                    </ProfileInfo>
                    
                </ProfileMain>
            </ProfileWrapper>
        </>
    )
}

export default Profiles;
