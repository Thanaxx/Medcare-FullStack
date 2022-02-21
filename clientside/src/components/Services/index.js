import React from 'react';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
import { ServiceContainer, ServiceTitle, ServicesName} from './ServiceStyle';
import SampleServices from './SampleServices';

function Services() {
    return (
        <>
            <ServiceContainer>
                <ServiceTitle>
                    <p>Connect with over <span>7,000</span> validated doctors nationwide with an extensive selection of specialties</p>
                </ServiceTitle>

                <ServicesName>
                        <SampleServices 
                            images="/images/services/Dermatology (2).svg"
                            path="/doctor"
                            text="Dermatology"
                        />

                        <SampleServices 
                            images="/images/services/Diabetology.svg"
                            path="/doctor"
                            text="Diabetology"
                        />

                        <SampleServices 
                            images="/images/services/Allergology (2).svg"
                            path="/doctor"
                            text="Allergology"
                        />

                        <SampleServices 
                            images="/images/services/Cardiology (2).svg"
                            path="/doctor"
                            text="Cardiology"
                        />

                        <SampleServices 
                            images="/images/services/Gastroenterology.svg"
                            path="/doctor"
                            text="Gastroenterology"
                        />

                        <SampleServices 
                            images="/images/services/InfectiousDisease.svg"
                            path="/doctor"
                            text="Infectious Disease"
                        />

                        <SampleServices 
                            images="/images/services/OB.svg"
                            path="/doctor"
                            text="OB-GYNE"
                        />

                        <SampleServices 
                            images="/images/services/pulmonology.svg"
                            path="/doctor"
                            text="Pulmonology"
                        />

                        <SampleServices 
                            images="/images/services/pediatrics.svg"
                            path="/doctor"
                            text="Pediatrics"
                        />

                        <SampleServices 
                            images="/images/services/urology.svg"
                            path="/doctor"
                            text="Urology"
                        />

                </ServicesName>

            </ServiceContainer>
        </>
    )
}

export default Services;