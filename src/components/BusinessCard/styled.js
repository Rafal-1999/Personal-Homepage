import styled from "styled-components";
import { HeaderOne } from "../../styles/headers";
import { device } from "../../styles/breakpoints";

export const Box = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "boxItemTwo"
        "boxItemOne"
        "boxItemThree";
    row-gap: 16px;

    @media ${device.xs} {
        grid-template-columns: auto;
        grid-template-areas:
            "boxItemOne boxItemTwo"
            "boxItemThree boxItemThree";
    }

    @media ${device.sm} {
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        grid-template-areas:
            "boxItemOne boxItemTwo"
            "boxItemOne boxItemThree";
        gap: 19px 36px;
    }

    @media ${device.lg} {
        margin-top: 120px;
        gap: 38px 72px;
    }
`;

export const BoxItemOne = styled.div`
    grid-area: boxItemOne;
`;

export const BoxItemTwo = styled.div`
    grid-area: boxItemTwo;
`;

export const BoxItemThree = styled.div`
    grid-area: boxItemThree;
`;

export const Image = styled.img`
    width: 35vw;
    min-width: 128px;
    max-width: 384px;
    height: auto;
    background: #8C8D7E;
    border-radius: 50%;
`;

export const MainTitle = styled(HeaderOne)`
    margin: 8px 0 16px;
    text-transform: capitalize;

    @media ${device.sm} {
        margin: 12px 0 20px;
    }

    @media ${device.md} {
        margin: 12px 0 35px;
    }
`;

export const Text = styled.p`
    color: #6E7E91;
    width: 100%;
    max-width: 635px;
    margin: 0;
    font-size: 17px;
    font-weight: 400;

    @media ${device.sm} {
        font-size: 20px;
    }
`;

export const Mail = styled.a`
    color: #FFF;
    background: #0366D6;
    margin-top: 24px;
    padding: 12px 16px;
    display: inline-block;
    border: 1px solid #D1D5DA4D;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    text-decoration: none;
    transition: all 0.3s linear;

    &:hover,
    &:focus {
        box-shadow: 
            -2px -2px 0px 0px #8CC2FF,
            2px 2px 0px 0px #8CC2FF,
            -2px 2px 0px 0px #8CC2FF,
            2px -2px 0px 0px #8CC2FF;
    }

    &:active {
        box-shadow: 0px 2px 0px 0px #14462033 inset;
    }

    @media ${device.sm} {
        font-size: 20px;
    }

    @media ${device.lg} {
        margin-top: 32px;
    }
`;

export const Icon = styled.i`
    margin-right: 14px;
    font-size: 14px;
    vertical-align: middle;

    @media ${device.sm} {
        margin-right: 18px;
        font-size: 17px;
    }
`;
