import styled from "styled-components";
import { device } from "./breakpoints";

export const FilledLink = styled.a`
    color: ${({ theme }) => theme.filledLink.color};
    background: ${({ theme }) => theme.filledLink.background};
    margin-top: 24px;
    padding: 12px 16px;
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.filledLink.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.9px;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    &:hover,
    &:focus {
        box-shadow: 
            -2px -2px 0px 0px ${({ theme }) => theme.filledLink.shadow}, 
            2px 2px 0px 0px ${({ theme }) => theme.filledLink.shadow}, 
            -2px 2px 0px 0px ${({ theme }) => theme.filledLink.shadow}, 
            2px -2px 0px 0px ${({ theme }) => theme.filledLink.shadow};
    }

    &:active {
        box-shadow: 0px 2px 0px 0px ${({ theme }) => theme.filledLink.activeShadow} inset;
    }

    @media ${device.sm} {
        font-size: 20px;
        letter-spacing: 1px;
    }

    @media ${device.lg} {
        margin-top: 32px;
    }
`;

export const VisuallyHidden = styled.span`
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0, 0, 0, 0);
`;
