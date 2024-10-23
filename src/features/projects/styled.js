import styled from "styled-components";
import { HeaderTwo } from "../../styles/headers";
import { device } from "../../styles/breakpoints";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderIcon = styled.i`
    color: #0366D6;
    font-size: 32px;

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
    color: #252525;
    text-align: center;
    letter-spacing: 0.8px;

    @media ${device.sm} {
        margin-top: 8px;
        letter-spacing: 1px;
    }
`;
