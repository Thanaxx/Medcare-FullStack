import React from 'react';
import { BenefitsWrapper, BenefitsTitle, BenefitsImages} from './BenefitsStyle';
import BenefitsSample from './BenefitsSample';

function Benefits() {
    return (
        <>
            <BenefitsWrapper>
                <BenefitsTitle>
                    <h1>OFFERS</h1>
                    
                    <p>
                        Connect with validated doctors nationwide with an extensive selection of specialties.
                    </p>
                </BenefitsTitle>

                <BenefitsImages>
                    <BenefitsSample 
                        image="/images/Benefits/Schedule.svg"
                        label="Schedule Appointments"
                        text="Select preferred date, time, and type of consultation"
                    />

                    <BenefitsSample 
                        image="/images/Benefits/Doctor.svg"
                        label="Medical Consultation Online"
                        text="Consult your doctor from the safety of your home"
                    />

                    <BenefitsSample 
                        image="/images/Benefits/Alert.svg"
                        label="Receive Realtime Alerts"
                        text="Keep track of appointments through SMS notifications and HIP inbox"
                    />

                    <BenefitsSample 
                        image="/images/Benefits/Transaction.svg"
                        label="Online Transaction"
                        text="Pay direct to doctor's account and upload proof of payment"
                    />
                </BenefitsImages>
            </BenefitsWrapper>
        </>
    )
}

export default Benefits;
