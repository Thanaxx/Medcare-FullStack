import React from 'react';
import { StepsName } from './StepsStyle';

function StepsSample(props) {
    return (
        <>
            <StepsName>
              <img 
                src={props.image} 
                alt="Steps"
              />

              <h3>{props.label}</h3>
              <p>{props.text}</p>
            </StepsName>  
        </>
    )
}

export default StepsSample
