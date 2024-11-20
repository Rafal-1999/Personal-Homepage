import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const FooterBox = styled.div`
    margin-bottom: 30px;

    @media ${device.lg} {
        margin-bottom: 55px;
    }
`;

export const ContactLink = styled.a`
    margin: 12px 0;
    color: #252525;
    display: inline-block;
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
    transition: all 0.3s linear;
    word-break: break-all;

    &:hover,
    &:focus {
        color: #0366D6;
    }

    @media ${device.sm} {
        margin: 24px 0;
        font-size: 32px;
    }
`;

export const Text = styled.p`
    width: 100%;
    max-width: 670px;
    margin: 0;
    color: #252525;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.7px;

    @media ${device.sm} {
        font-size: 18px;
        line-height: 1.4;
        letter-spacing: 0.9px;
    }
`;

export const SocialMedia = styled.ul`
    margin: 40px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @media ${device.sm} {
        margin: 56px 0 0;
    }
`;

export const SocialMediaLink = styled.a`
    color: #252525;
    display: flex;
    font-size: 32px;
    text-decoration: none;
    transition: all 0.3s linear;

    &:hover,
    &:focus {
        color: #0366D6;
    }

    @media ${device.sm} {
        font-size: 48px;
    }
`;

export const Copyright = styled.span`
    margin-top: 12px;
    color: #252525;
    display: inline-block;
    font-size: 14px;
    letter-spacing: 0.7px;

    @media ${device.sm} {
        margin-top: 24px;
        font-size: 18px;
        letter-spacing: 0.9px;
    }
`;
