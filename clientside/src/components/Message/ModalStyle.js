import styled from "styled-components";

export const MessageContainer = styled.div`
    position: fixed;
    top: 85vh;
    left: 2vh;

    button{
        cursor: pointer;
        border: none;
        outline: none;
        padding: 10px;
        font-size: 70px;
        background-color: transparent;
        color: #3A4C62;
    }
`;

export const ModalMessage = styled.div`
    height: auto;
    width: 400px;
    background-color: #333333;
    padding: 30px 20px;
    margin: 160px 60px;

    h3{
        text-align: center;
        font-size: 20px;
        color: white;
        font-weight: lighter;

        span{
            color: #4A90E2;
            font-size: 23px;
        }
    }

    input, textarea{
        width: 93%;
        padding: 8px 10px;
        margin: 10px 0;
        border: 1px solid #B6B6B6;
        border-radius: 3px;
        background-color: #333333;
        outline: none;

        ::placeholder{
            color: #C0C0C0;
        }
    }

    button{
        width: 98%;
        background-color: #4A90E2;
        border: none;
        outline: none;
        color: white;
        border-radius: 3px;
        margin: 20px 0;
        font-size: 18px;
        font-weight: lighter;
    }

`;

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: transparent;
    /* background-color: rgba(56, 56, 56, 0.62); */
`;

export const CloseModal = styled.div`
    float: right;
    font-size: 30px;
    color: #4A90E2;
    cursor: pointer;
`;