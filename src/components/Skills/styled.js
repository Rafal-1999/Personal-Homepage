import styled from "styled-components";
import { HeaderTwo } from "../../styles/headers";
import { device } from "../../styles/breakpoints";

export const ListBlock = styled.section`
    margin: 48px 0;
    padding: 16px;
    background: ${({ theme }) => theme.skills.background1};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 
        0px 16px 58px 0px ${({ theme }) => theme.skills.shadow2}, 
        0px -2px 50px 0px ${({ theme }) => theme.skills.shadow1};
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media ${device.sm} {
        padding: 32px;
    }

    @media ${device.md} {
        margin: 72px 0;
    }
`;

export const ListTitle = styled(HeaderTwo)`
    margin: 0 0 12px 0;
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.skills.border};

    @media ${device.sm} {
        margin-bottom: 32px;
        padding-bottom: 15px;
    }
`;

export const Icon = styled.img`
    height: 21px;
    margin-left: 12px;

    @media ${device.sm} {
        height: 25px;
        margin-left: 16px;
    }
`;

export const List = styled.ul`
    margin: 0;
    padding-left: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;

    @media ${device.sm} {
        grid-template-columns: repeat(auto-fit, minmax(292px, 1fr));
    }
`;

export const ListItem = styled.li`
    padding-left: 14px;
    color: ${({ theme }) => theme.skills.color};
    font-size: 14px;
    font-weight: 400;
    position: relative;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    &::before {
        content: "";
        width: 6px;
        height: 6px;
        margin: auto 0;
        background: ${({ theme }) => theme.skills.background2};
        border-radius: 50%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        transition: all ${({ theme }) => theme.transitionDuration} linear;
    }

    @media ${device.sm} {
        padding-left: 25px;
        font-size: 18px;

        &::before {
            width: 9px;
            height: 9px;
        }
    }
`;
