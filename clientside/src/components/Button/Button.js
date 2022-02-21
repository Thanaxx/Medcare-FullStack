import React from 'react';
import './ButtonStyle.css'
import {Link} from 'react-router-dom'

const STYLE = ['btn--solid', 'btn--outline', 'btn--white'];
const SIZE = ['btn--small', 'btn--medium']

export const Button = ({children, type, onClick, buttonSize, buttonStyle}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return(
        <Link className="btn-mobile" to="/">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}


export const Profile = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return(
        <Link className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export const Doctors = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return(
        <Link className="btn-mobile" to="/doctor">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export const Appform = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return(
        <Link className="btn-mobile" to="/form">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export const ButtonMain = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return(
        <Link className="btn-mobile" to="/doctor">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}