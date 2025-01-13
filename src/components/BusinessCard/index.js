import {
    Box,
    BoxItemOne,
    BoxItemTwo,
    Image,
    BoxItemThree,
    MainTitle,
    Text,
    Icon
} from "./styled";
import { SubTitle } from "../../styles/headers";
import { FilledLink } from "../../styles/links";
import profilePng from "../../assets/images/profile.png";
import profileWebp from "../../assets/images/profile.webp";
import { email } from "../../constants";

const BusinessCard = ({ extraContent }) => (
    <Box>
        <BoxItemOne>
            <picture>
                <source srcSet={profileWebp} type="image/webp" />
                <Image
                    width="384"
                    height="384"
                    src={profilePng}
                    alt="Rafał Chudy - programista Frontend Deweloper"
                />
            </picture>
        </BoxItemOne>
        {extraContent && (
            <BoxItemTwo>
                {extraContent}
            </BoxItemTwo>
        )}
        <BoxItemThree>
            <SubTitle>This is</SubTitle>
            <MainTitle>Rafał Chudy</MainTitle>
            <Text>
                🙂💻 I am a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </Text>
            <FilledLink
                href={`mailto:${email}`}
                title={`Wyślij wiadomość na adres e-mail ${email}`}
                aria-label={`Wyślij wiadomość na adres email ${email}`}
            >
                <Icon className="icon-message" aria-hidden="true" />
                Hire Me
            </FilledLink>
        </BoxItemThree>
    </Box>
);

export default BusinessCard;
