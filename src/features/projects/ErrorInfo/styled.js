import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const ErrorInfoBox = styled.div`
    margin: 44px 0 70px;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ${device.lg} {
        margin: 88px 0 140px;
    }
`;

export const ErrorIcon = styled.i`
    color: ${({ theme }) => theme.projects.textColor1};
    font-size: 32px;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media ${device.sm} {
        font-size: 37px;
    }
`;

export const ErrorTitle = styled.span`
    margin-top: 16px;
    color: ${({ theme }) => theme.projects.textColor1};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.9px;
    text-align: center;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media ${device.sm} {
        font-size: 24px;
        letter-spacing: 1.2px;
    }
`;

export const ErrorText = styled.p`
    max-width: 430px;
    margin: 16px 0 0;
    color: ${({ theme }) => theme.projects.textColor1};
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: 0.8px;
    text-align: center;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media ${device.sm} {
        margin: 32px 0 0;
        font-size: 20px;
        letter-spacing: 1px;
    }
`;
