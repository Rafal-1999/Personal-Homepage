import styled from "styled-components";
import { device } from "./breakpoints";

export const HeaderOne = styled.h1`
    color: #252525;
    font-size: 22px;
    font-weight: 900;
    line-height: 1;

    @media ${device.sm} {
        font-size: 38px;
    }
`;

export const HeaderTwo = styled.h2`
    font-size: 18px;
    font-weight: 900;

    @media ${device.sm} {
        font-size: 30px;
    }
`;

export const HeaderThree = styled.h3`
    font-size: 15px;

    @media ${device.sm} {
        font-size: 18px;
    }
`;

export const SubTitle = styled.span`
    color: #6E7E91;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
`;
