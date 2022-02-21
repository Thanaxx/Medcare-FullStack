import styled from "styled-components";

export const SearchContainer = styled.div`
    background-color: #4A90E2;
    padding: 12px 0;
`;

export const SearchBox = styled.div`
    background-color: white;
    padding: 4px 8px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    margin: auto;
    width: 50%;

    @media screen and (max-width: 1050px){
        width: 90%;
    }

    input{
        border: none;
        outline: none;
        width: 100%;
    }

    button{
        border: 1px solid #4A90E2;
        outline: none;
        color: white;
        padding: 5px 0;
        width: 15%;
        background-color: #4A90E2;
        cursor: pointer;
        border-radius: 4px;
    }
`;  

export const DoctorsContainer = styled.div`
    min-height: 100vh;
    margin: 50px 80px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width:1050px){
        margin: 0px 20px;
    }
`;


export const DoctorAbout = styled.div`
    margin: auto;
    width: 44%;
    padding: 50px 30px;
    display: flex;

    @media screen and (max-width:1050px){
        padding: 30px 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width:760px){
        padding: 50px 10px;
    }
`;

export const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:1050px){
        margin: auto;
    }

    img{
        width: 200px;
    }

    Button{
        margin: 5px 0;
    }
`;

export const Details = styled.div`
    flex: 1;

    @media screen and (max-width:1050px){
        text-align: center;
    }
`;

export const MoreDetails = styled.div`
    margin-top: 20px;

    .view{
        color: #4A90E2;
        outline: none;
        border: 1px solid var(--main);
        font-size: 17px;
        border-radius: 5px;
        cursor: pointer;
        background-color: transparent;
        padding: 6px 19px;

        :hover{
            background-color: #4A90E2;
            color: white;
        }
    }

    @media screen and (max-width: 1050px){
        display: flex;
        flex-direction: column;
    }
`;

//PROFILE--
export const ProfileWrapper = styled.div`
    background-color: white;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
        width: 0;
    }


    @media screen and (max-width:1050px){
        padding: 50px 10px;
    }
`;

export const ProfileMain = styled.div`
    display: flex;
    padding: 70px 0;

    @media screen and (max-width:1050px){
        padding: 10px 0;
    }

    @media screen and (max-width:1050px){
        flex-direction: column;
    }

    h1{
        background-color: #4A90E2;
        color: white;
        padding: 10px;
        font-weight: 600;
        font-size: 19px;
        border-radius: 3px;
        margin-top: 30px;
    }
`;

export const ProfileImage = styled.div`
    margin: 15px 20px;
    text-align: center;
    line-height: 10px;
    flex: 1;

    img{
        width: 300px;
    }

    h2{
        font-size: 30px;
        letter-spacing: 1px;
        color: #232323;
    }

    p{
        font-weight: bold;
    }
`;

export const ProfileInfo = styled.div`
    margin: 0px 50px;
    flex: 2;
`;

export const Schedule = styled.div`

`;

export const Fee = styled.div`

`;

export const Request = styled.div`

`;

export const CloseProfile = styled.div`
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 40px;
    cursor: pointer;
`;
