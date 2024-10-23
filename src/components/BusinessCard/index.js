import {
    Box,
    BoxItemOne,
    BoxItemTwo,
    Image,
    BoxItemThree,
    MainTitle,
    Text,
    Mail,
    Icon
} from "./styled";
import { SubTitle } from "../../styles/headers";
import profileImage from "../../assets/images/profile.png";

const BusinessCard = ({ extraContent }) => (
    <Box>
        <BoxItemOne>
            <Image
                width="384"
                height="384"
                src={profileImage}
                alt="Rafał Chudy - programista Frontend Deweloper"
            />
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
            <Mail href="mailto:rafalchu5@gmail.com">
                <Icon className="icon-message" aria-hidden="true" />
                Hire Me
            </Mail>
        </BoxItemThree>
    </Box>
);

export default BusinessCard;
