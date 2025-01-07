import styled from "styled-components";
import { HeaderTwo } from "../../styles/headers";
import { device } from "../../styles/breakpoints";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderIcon = styled.i`
    color: ${({ theme }) => theme.projects.iconColor};
    font-size: 32px;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media ${device.sm} {
        font-size: 40px;
    }
`;

export const HeaderTitle = styled(HeaderTwo)`
    margin: 12px 0 0;
    letter-spacing: 0.9px;

    @media ${device.sm} {
        letter-spacing: 1.5px;
    }
`;

export const HeaderDescription = styled.p`
    margin: 16px 0 0;
    color: ${({ theme }) => theme.projects.textColor1};
    text-align: center;
    letter-spacing: 0.8px;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media ${device.sm} {
        margin-top: 8px;
        letter-spacing: 1px;
    }
`;
