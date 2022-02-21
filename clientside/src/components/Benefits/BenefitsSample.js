import React from 'react';
import { BenefitsName } from './BenefitsStyle';

function BenefitsSample(props) {
    return (
        <>
            <BenefitsName>
                <img 
                    src={props.image} 
                    alt="Benefits" 
                />

                <h3>{props.label}</h3>
                <p>{props.text}</p>
            </BenefitsName>
        </>
    )
}

export default BenefitsSample;
