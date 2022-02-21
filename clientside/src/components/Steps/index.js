import React from 'react';
import StepsSample from './StepsSample';
import { StepsWrapper, StepsTitle, StepsImages } from './StepsStyle';

function Steps() {
    return (
        <>
            <StepsWrapper>
                <StepsTitle>
                    <p>How To Find your Doctor in <span>3 EASY STEPS</span></p>    
                </StepsTitle>  

                <StepsImages>
                    <StepsSample 
                        image="/images/Steps/step1.png"
                        label="CREATE AN ACCOUNT"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, neque. consectetur adipisicing elit. Recusandae, neque"
                    />

                    <StepsSample 
                        image="/images/Steps/step2.png"
                        label="SELECT TYPE OF SERVICE"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, neque. consectetur adipisicing elit. Recusandae, neque"
                    />

                    <StepsSample 
                        image="/images/Steps/step3.png"
                        label="SET AN APPOINTMENT"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, neque. consectetur adipisicing elit. Recusandae, neque"
                    />
                </StepsImages>
            </StepsWrapper>  
        </>
    )
}

export default Steps;
