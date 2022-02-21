import React from 'react';
import { MedAboutWrapper, AboutInfo, AboutLink, LearnMore, AboutImage} from './AboutStyle';

function MedAbout() {
    return (
        <>
            <MedAboutWrapper data-aos='zoom-out'>
                <AboutInfo>
                    <h2>The virtual clinic that conveniently and safely connects you with your Doctor</h2>
                    <p>Health, in humans, the extent of an individual's continuing physical, emotional, mental, and social ability to cope with his or her environment. Health.Health, in humans, the extent of an individual's continuing physical, emotional, mental, and social ability to cope with his or her environment. Health.Health, in humans, the extent of an individual's continuing physical, emotional, mental, and social ability to cope with his or her environment. Health.Health, in humans, the extent of an individual's continuing physical, emotional, mental, and social ability to cope with his or her environment. Health.Health, in humans, the extent of an individual's continuing physical, emotional, mental, and social ability to cope with his or her environment. Health.</p>
                </AboutInfo>

                <AboutImage>
                    <img src="/images/about.jpg" alt="" />
                </AboutImage>
            </MedAboutWrapper>
        </>
    )
}

export default MedAbout;
