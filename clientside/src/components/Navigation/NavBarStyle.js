import styled from "styled-components";
import { Link } from 'react-router-dom'; 

export const NavWrapper = styled.nav`
    width: 100%;
    height: 80px;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    z-index: 999;
`;

export const NavLogo = styled.div`
    margin-left: 20px;
`;

export const NavLogoLink = styled(Link)`
    font-size: 30px;
    color: #4A90E2;
    font-weight: bolder;
    text-decoration: none;
    position: absolute;
    top: 22px;
    left: 20px;

    img{
        width: 70%;
    }
`;

export const NavSideBarIcon = styled.div`
    display: none;

    @media screen and (max-width: 1050px){
        padding: 0 20px;
        font-size: 33px;
        color: #424242;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        top: 22px;
        right: 0px;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    li{
        list-style-type: none;
        
        @media screen and (min-width: 1051px){
            display: flex;
            align-items: center;
            justify-content: space-round;
        }
    }

    @media screen and (max-width:1050px){

        .NavMenuActive{
            background-color: white;
            position: fixed;
            top: 80px;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 90vh;
            transition: all 0.5s ease;
        }

        .NavMenu{
            left: -100%;
            transition: all 0.5s ease;
            opacity: 0;
            position: fixed;
            top: 80px;
        }
    }
`;


export const NavLinks = styled(Link)`
    text-decoration: none;
    margin: 0 1.2em;
    font-size: 17px;
    color: #424242;

    :hover{
        color: #4A90E2;
    }

    @media screen and (max-width:1055px){
        font-size: 15px;
        margin: 0 1em;
    }

    @media screen and (max-width:1050px){
        display: block;
        text-align: center;
        padding: 20px 0;
        margin: 2.5em 0;
        font-size: 15px;

        :hover{
            background-color: #F1EDED;
        }
    }
`;


