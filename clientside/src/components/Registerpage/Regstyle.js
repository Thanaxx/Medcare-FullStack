import styled from "styled-components";

export const RegContainer = styled.div`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    position: fixed;
    width: 100%;

    .backG{
        width: 100%;
        height: 100vh;
    }
`;


export const RegBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px 30px;

    @media screen and (max-width:1050px){
        top: 25%;
        left: 25%;
        transform: translate(-25%, -25%);
    }

    p{
        font-size: 25px;
        text-align: center;
        color: #4A90E2;
        font-weight: 500;
    }
`;

export const InputForm = styled.div`
    margin-top: 20px;
`;

export const Inputs = styled.div`
    width: 100%;
    margin: 8px auto;

    label{
        color: #343434;
        font-size: 13px;
    }
`;

export const TextInput = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 10px;
    background-color: white;
    color: #4A90E2;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid #4A90E2;

    input{
        width: 100%;
        padding: 5px 0;
        font-size: 16px;
        margin-left: 10px;
        background-color: white;
        border: none;
        outline: none;
        color: #242424;
    }
`;

export const RegButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    button{
        padding: 10px;
        color: white;
        outline: none;
        cursor: pointer;
        width: 100%;
        margin: 10px auto;
    }

    .reg-btn{
        background-color: #4A90E2;
        border: 1px solid transparent;
    }

    .cancel-btn{
        background-color: transparent;
        border: 1px solid #4A90E2;
        color: #4A90E2;
    }
`;


