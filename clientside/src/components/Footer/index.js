import React from 'react';
import { FooterWrapper, FooterTitle, FooterIcons } from './FooterStyle';

function Footer() {
    return (
        <>
            <FooterWrapper>
                <FooterTitle>
                    <p>© MEDCARE 2020 All Rights Reserved.</p>
                </FooterTitle>

                <FooterIcons>
                    <img src="/images/social-icons/facebook.svg" alt="facebook" />
                    <img src="/images/social-icons/instagram.svg" alt="facebook" />
                    <img src="/images/social-icons/twitter.svg" alt="facebook" />
                </FooterIcons>
            </FooterWrapper>
        </>
    )
}

export default Footer;
