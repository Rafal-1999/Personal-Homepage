import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    html {
        box-sizing: inherit;
        scroll-behavior: smooth;
    }

    body {
        font-family: "Inter", sans-serif;
    }
`;

export const ThemeBox = styled.div`
    background: ${({ theme }) => theme.body.background};
    transition: background ${({ theme }) => theme.transitionDuration} linear;
`;
