import styled from "styled-components";

export const ProfileWrapper = styled.div`
    min-height: 100vh;
    padding: 50px 100px;

    @media screen and (max-width:1050px){
        padding: 50px 10px;
    }
`;

export const ProfileMain = styled.div`
    display: flex;

    @media screen and (max-width:1050px){
        flex-direction: column;
    }
`;

export const ProfileImage = styled.div`
    margin: 15px 20px;
    text-align: center;
    line-height: 10px;

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
    margin: 0px 20px;
`;

export const Schedule = styled.div`
    h1{
        background-color: #4A90E2;
        color: white;
        font-size: 21px;
        padding: 10px;
        font-weight: lighter;
    }
`;

export const Fee = styled.div`
    h1{
        background-color: #4A90E2;
        color: white;
        font-size: 21px;
        padding: 10px;
        font-weight: lighter;
    }
`;

export const Request = styled.div`
    h1{
        background-color: #4A90E2;
        color: white;
        font-size: 21px;
        padding: 10px;
        font-weight: lighter;
    }
`;
