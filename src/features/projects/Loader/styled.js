import styled, { keyframes } from "styled-components";
import { device } from "../../../styles/breakpoints";

export const LoaderBox = styled.div`
    margin: 44px 0 70px;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ${device.lg} {
        margin: 88px 0 140px;
    }
`;

export const LoaderInfo = styled.p`
    margin: 0 0 24px;
    color: #252525;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: 0.8px;
    text-align: center;

    @media ${device.sm} {
        font-size: 20px;
        letter-spacing: 1px;
    }

    @media ${device.lg} {
        margin-bottom: 48px;
    }
`;

const loaderAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const StyledLoader = styled.div`
    width: 80px;
    height: 80px;
    border: 10px solid #D1D5DA4D;
    border-top-color: #0366D6;
    border-radius: 50%;
    animation-name: ${loaderAnimation};
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    @media ${device.lg} {
        width: 160px;
        height: 160px;
        animation-duration: 2s;
    }
`;
