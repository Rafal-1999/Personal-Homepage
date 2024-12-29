import styled, { css } from "styled-components";
import { device } from "../../styles/breakpoints";

export const Box = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
`;

export const Text = styled.span`
    color: #6E7E91;
    font-size: 12px;
    font-weight: 700;
    visibility: hidden;
    text-transform: uppercase;
    transition: color 0.5s linear;

    @media ${device.sm} {
        visibility: visible;
    }
`;

export const StyledThemeToggle = styled.button`
    width: 48px;
    height: 26px;
    padding: 0;
    background: #D1D5DA4D;
    display: block;
    border: 1px solid #6E7E91;
    border-radius: 50px;
    flex-shrink: 0;
    position: relative;
    transition: all 0.5s linear;
    z-index: 1;
    cursor: pointer;

    &::before {
        content: "\\e900";
        width: 20px;
        height: 20px;
        margin: auto 0;
        color: #FFF;
        background: #6E7E91;
        border-radius: 50%;
        font-family: icomoon;
        line-height: 20px;
        position: absolute;
        top: 0;
        left: 3px;
        bottom: 0;
        transition: all 0.5s linear;
        ${({ $currentTheme }) => $currentTheme === "dark" && css`
            left: calc(100% - 23px);
        `}
    }
`;
