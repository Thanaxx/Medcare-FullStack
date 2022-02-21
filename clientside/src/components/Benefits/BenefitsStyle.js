import styled from "styled-components";

export const BenefitsWrapper = styled.div`
    margin: 100px 50px;

    @media screen and (max-width: 1050px){
        margin: 0 20px;
    }
`;

export const BenefitsTitle = styled.div`
    padding: 30px 0;
    align-items: center;
    text-align: center;

    h1{
        color: #4A90E2;
        font-size: 45px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 1050px){
            font-size: 35px;
        }
    }

    p{
        width: 80%;
        align-items: center;
        font-size: 30px;
        margin: auto;
        color: #6A6A6A;

        @media screen and (max-width: 900px){
            width: 100%;
            font-size: 22px;
        }
    }
`;

export const BenefitsImages = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const BenefitsName = styled.div`
    width: 40%;
    text-align: center;
    margin: auto;
    padding: 30px 20px;
    background: #ECECEC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 28px;
    margin-bottom: 40px;

    @media screen and (max-width: 1050px){
        width: 100%;
    }

    h3{
        color: #4A90E2;
        font-size: 22px;

        @media screen and (max-width: 1050px){
            font-size: 20px;
        }
    }

    p{
        color: rgba(86, 86, 86, 0.79);
    }

`;

