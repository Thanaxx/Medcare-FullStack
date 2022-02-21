import styled from "styled-components";

export const StepsWrapper = styled.div`
    min-height: 85vh;
    margin: 100px 50px;

    
    @media screen and (max-width:940px){
        margin: 0px 20px;
    }
`;

export const StepsTitle = styled.div`
    padding: 30px 0;
    display: flex;
    justify-content: center;

    p{
        width: 60%;
        text-align: center;
        font-size: 30px;
        color: #1E1E1E;

        @media screen and (max-width:940px){
            width: 100%;
            font-size: 30px;
        }
    }

    span{
        font-weight: bolder;
        color: #4A90E2;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 30px;
    }

`;

export const StepsImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 20px;

    @media screen and (max-width:850px){
        margin: 0;
    }
`;

export const StepsName = styled.div`
    margin: auto;
    width: 30%;
    margin: 0 20px;
    text-align: center;

    @media screen and (max-width: 940px){
        width: 100%;
        margin: 20px;
    }

    h3{
        color: #4A90E2;
        font-size: 25px;

        @media screen and (max-width: 940px){
            font-size: 22px;
        }
    }

    p{
        color: rgba(86, 86, 86, 0.79);
        font-size: 18px;

        @media screen and (max-width: 940px){
            font-size: 17px;
        }
    }
`;


