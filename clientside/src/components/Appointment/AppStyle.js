import styled from "styled-components";

export const AppointmentWrap = styled.div`
    min-height: auto;
    background-color: #4A90E2;
    padding: 70px 20px;
    color: white;
    text-align: center;

    h1{
        font-size: 45px;

        @media screen and (max-width: 1051px){
            font-size: 35px;
        }
    }

    p{
        width: 75%;
        font-size: 25px;
        margin: auto;
        font-weight: 300;

        @media screen and (max-width: 1051px){
            width: 100%;
            font-size: 18px;
        }
    }

`;