import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
`;

export const FooterTitle = styled.div`

    p{
        color: #303030;

        @media screen and (max-width: 1051px){
            font-size: 15px;
        }
    }
`;

export const FooterIcons = styled(Link)`
    img{
        width: 30px;
        padding: 0px 10px;

        @media screen and (max-width: 1051px){
            width: 23px;
        }
    }
`;