import React from 'react'
import { ButtonMain } from '../Button/Button'
import  {AppointmentWrap} from './AppStyle'

function Appointment() {
    return (
        <>
            <AppointmentWrap>
                <h1>SET YOUR APPOINTMENT NOW!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur provident eius voluptatum esse repellat saepe, assumenda, quidem qui dolorem corrupti, commodi sunt labore. Deserunt a voluptatibus neque aperiam hic voluptas.</p>
                <ButtonMain buttonStyle='btn--white' buttonSize='btn--medium'>Find your Doctor</ButtonMain>
            </AppointmentWrap>  
        </>
    )
}

export default Appointment
