import React from 'react'
import { Doctors } from '../Button/Button'
import { MainWrapper, RightTitle, MainImage} from './mainStyle'

function Coverpage() {
    return (
        <>
            <MainWrapper data-aos='zoom-out'>
                <RightTitle>
                    <p>EXCLUSSIVE ACCESS</p>
                    <h1>WE <span>MEDICALLY</span> CARE ABOUT YOUR HEALTH</h1>
                    <h2>Allow us to listen to all of your health concerns and find you a doctor that will match your needs.</h2>
                    <Doctors buttonStyle='btn--primary' buttonSize='btn--medium'>Find your Doctor </Doctors>
                </RightTitle>

                <MainImage>
                    <img src="/images/Cover.jpg" alt="doctor" />
                </MainImage>
            </MainWrapper>
        </>
    )   
}

export default Coverpage
