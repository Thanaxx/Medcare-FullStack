import styled from "styled-components";

export const NewsContainer = styled.div`
    min-height: 100vh;
    padding: 10px 170px;

    @media screen and (max-width:1050px){
        padding: 10px 20px;
    }

`;

export const NewsFilter = styled.div`
    display: flex;
    cursor: pointer;
    padding: 30px 10px 10px 10px;

    @media screen and (max-width:760px){
        flex-wrap: wrap;
    }

    button{
        padding: 7px 20px;
        margin-right: 20px;
        font-size: 13px;
        border: 1px solid #B7B7B7;
        outline: none;
        background-color: transparent;
        color: #3F3D56;
        cursor: pointer;
        border-radius: 4px;
        width: 130px;
        color: gray;

        @media screen and (max-width:760px){
            margin: 5px;
        }

        :hover{
            border: 1px solid #4A90E2;
            color: #4A90E2;
        }


        :nth-child(1){
            background-color: #3D5877;
            color: white;
            border: none;
            outline: none;

            :hover{
                border: 1px solid #B7B7B7;
                color: #3F3D56;
                background-color: transparent;
            }
        }
    }

`;

export const NewsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0;

    @media screen and (max-width:760px){
        flex-direction: column;
    }
`;

export const NewsList = styled.div`
    width: 31%;
    margin: auto;
    margin-bottom: 20px;

    @media screen and (max-width:760px){
        width: 100%;
        margin-bottom: 40px;
    }

    img{
        width: 100%;
    }

    h3{
        font-size: 13px;
        color: gray;
    }

    p{
        color: grey;
        font-size: 15px;

        :nth-child(odd){
            color: #4A90E2;
        }
    }

    a{
        text-decoration: none;
    }
`;