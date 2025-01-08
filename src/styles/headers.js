import styled from "styled-components";
import { device } from "./breakpoints";

export const HeaderOne = styled.h1`
    color: ${({ theme }) => theme.h1.color};
    font-size: 22px;
    font-weight: 900;
    line-height: 1;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media ${device.sm} {
        font-size: 38px;
    }
`;

export const HeaderTwo = styled.h2`
    color: ${({ theme }) => theme.h2.color};
    font-size: 18px;
    font-weight: 900;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media ${device.sm} {
        font-size: 30px;
    }
`;

export const SubTitle = styled.span`
    color: ${({ theme }) => theme.body.color};
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
`;
