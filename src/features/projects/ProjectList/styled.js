import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Projects = styled.div`
    margin: 24px 0 48px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media ${device.md} {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }

    @media ${device.lg} {
        margin: 24px 0 120px;
    }
`;

export const ProjectsItem = styled.div`
    padding: 18px;
    background: ${({ theme }) => theme.projects.itemBackground};
    border: 6px solid ${({ theme }) => theme.projects.itemBorder};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 
        0px 16px 58px 0px ${({ theme }) => theme.projects.itemShadow2}, 
        0px -2px 50px 0px ${({ theme }) => theme.projects.itemShadow1};
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    &:hover,
    &:focus-within {
        border-color: ${({ theme }) => theme.projects.hoverItemBorder};
        transition-duration: 0.5s;
    }

    @media ${device.lg} {
        padding: 50px;
    }
`;

export const ProjectTitle = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.projects.titleColor};
    font-size: 16px;
    font-weight: 700;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
    word-break: break-all;

    @media ${device.sm} {
        font-size: 24px;
    }
`;

export const ProjectDescription = styled.p`
    margin: 16px 0 0;
    color: ${({ theme }) => theme.projects.textColor2};
    font-size: 14px;
    font-weight: 400;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

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
    color: ${({ theme }) => theme.projects.textColor2};
    font-size: 14px;
    font-weight: 400;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media ${device.sm} {
        font-size: 18px;
    }
`;

export const LinksItem = styled.dd`
    margin: 0;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.projects.linkColor};
    border-bottom: 1px solid ${({ theme }) => theme.projects.linkDecorationColor};
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
    word-break: break-all;

    &:hover,
    &:focus {
        border-color: ${({ theme }) => theme.projects.hoverLinkDecorationColor};
    }

    @media ${device.sm} {
        font-size: 18px;
    }
`;
