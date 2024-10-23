import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Projects = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media ${device.md} {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }
`;

export const ProjectsItem = styled.div`
    padding: 18px;
    background: #FFF;
    border: 6px solid #D1D5DA4D;
    border-radius: 4px;
    box-shadow: 0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305;
    transition: all 0.3s linear;

    &:hover,
    &:focus-within {
        border-color: #0366D633;
    }

    @media ${device.lg} {
        padding: 50px;
    }
`;

export const ProjectTitle = styled.h3`
    margin: 0;
    color: #0366D6;
    font-size: 16px;
    font-weight: 700;

    @media ${device.sm} {
        font-size: 24px;
    }
`;

export const ProjectDescription = styled.p`
    margin: 16px 0 0;
    color: #6E7E91;
    font-size: 14px;
    font-weight: 400;

    @media ${device.sm} {
        margin-top: 24px;
        font-size: 18px;
    }
`;

export const Links = styled.dl`
    margin: 16px 0 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;

    @media ${device.sm} {
        margin: 24px 0 0;
    }
`;

export const LinkTitle = styled.strong`
    color: #6E7E91;
    font-size: 14px;
    font-weight: 400;

    @media ${device.sm} {
        font-size: 18px;
    }
`;

export const LinksItem = styled.dd`
    margin: 0;
`;

export const Link = styled.a`
    color: #0366D6;
    border-bottom: 1px solid #0366D633;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: all 0.3s linear;
    word-break: break-all;

    &:hover,
    &:focus {
        border-color: #0366D6CC;
    }

    @media ${device.sm} {
        font-size: 18px;
    }
`;
