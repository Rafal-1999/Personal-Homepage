import { createGlobalStyle } from "styled-components";

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
        background: ${({ theme }) => theme.body.background};
        font-family: "Inter", sans-serif;
        transition: background ${({ theme }) => theme.transitionDuration} linear;
    }
`;
