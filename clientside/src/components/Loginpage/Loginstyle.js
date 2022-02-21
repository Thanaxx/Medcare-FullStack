import styled from 'styled-components'

export const LogContainer = styled.div`
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

export const LogBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width:1050px){
        top: 25%;
        left: 0%;
        transform: translate(0%, -25%);
    }

    p{
        font-size: 20px;
        text-align: center;
        color: white;
        font-weight: 300;
    }
`;

export const LogLogo = styled.div`
    text-align: center;

    img{
        width: 230px;
    }
`;

export const InputForm = styled.div`
    margin-top: 20px;

    p{
        color: #B0C0D3;
        font-size: 14px;
        font-weight: bold;
        text-decoration: underline;
    }
`;

export const Inputs = styled.div`
    width: 65%;
    margin: 8px auto;

    @media screen and (max-width:1050px){
        width: 85%;
    }

    label{
        color: white;
        font-size: 13px;
    }
`;

export const TextInput = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 10px;
    background-color: rgba(74, 144, 226, 0.31);
    color: white;
    margin-top: 10px;
    border-radius: 3px;

    input{
        width: 100%;
        padding: 5px 0;
        font-size: 16px;
        margin-left: 10px;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
    }
`;

export const LogButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    button{
        padding: 10px;
        color: white;
        outline: none;
        cursor: pointer;
        width: 65%;
        margin: 10px auto;

        @media screen and (max-width:1050px){
            width: 85%;
        }
    }

    .login-btn{
        background-color: #4A90E2;
        border: 1px solid transparent;
    }

    .create-btn{
        background-color: transparent;
        border: 1px solid #4A90E2;
    }
`;

