import React, {useState} from 'react';
import { NavWrapper, NavLogo, NavLogoLink, NavSideBarIcon, NavMenu, NavLinks } from './NavBarStyle';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logout from '../LogoutDropdown';

function Navbar() {

    const [click, setClick] = useState(false);

    const HandleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <NavWrapper>

                <NavLogo>
                    <NavLogoLink to="/home" onClick={closeMobileMenu}>
                        <img src="/images/medLogo.png" alt="" />
                    </NavLogoLink>
                </NavLogo>

                <NavSideBarIcon onClick={HandleClick}>
                    { click ? <FaTimes/> : <FaBars/> }
                </NavSideBarIcon>

                <NavMenu>
                    <li className={click ? 'NavMenuActive' : 'NavMenu'}>
                        <NavLinks to="/doctor" onClick={closeMobileMenu}>
                            Find your Doctor
                        </NavLinks>

                        <NavLinks to="/services" onClick={closeMobileMenu}>
                            Services
                        </NavLinks>

                        <NavLinks to="/news" onClick={closeMobileMenu}>
                            MedNews
                        </NavLinks>

                        <NavLinks to="/about" onClick={closeMobileMenu}>
                            About Us
                        </NavLinks>
                        
                        <Logout />
                    </li>
                </NavMenu>

            </NavWrapper>
        </>
    )
}

export default Navbar;