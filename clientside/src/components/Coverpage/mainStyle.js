import styled from "styled-components";

export const MainWrapper = styled.div`
    min-height: 80vh;
    display: flex;

    @media screen and (max-width:940px){
        flex-direction: column;
    }

`;

export const RightTitle = styled.div`
    flex: 2;
    margin: auto;
    padding: 0 60px;

    @media screen and (max-width:940px){
        padding: 0 20px;
    }

    p{
        font-size: 18px;
        color: #4A90E2;
        font-weight: bolder;

        @media screen and (max-width:1050px){
            font-size: 17px;
        }
    }

    h1{
        font-size: 68px;
        font-weight: 900;
        color: rgba(0, 0, 0, 0.79);

        @media screen and (max-width:1050px){
            font-size: 45px;
        }

        @media screen and (max-width:850px){
            font-size: 40px;
            font-weight: 700;
        }
    }

    span{
        color: #4A90E2;
    }

    h2{
        font-size: 25px;
        font-weight: 400;
        color: #636363;

        @media screen and (max-width:1050px){
            font-size: 22px;
        }

        @media screen and (max-width:760px){
        
        }
    }

    Button{
        margin-top: 20px;
    }

`;

export const MainImage = styled.div`
    flex: 1;
    margin: auto;
    padding: 0px 50px;

    @media screen and (max-width:850px){
        padding: 20px;
    }
`;


