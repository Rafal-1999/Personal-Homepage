import {
    Box,
    BoxItemOne,
    BoxItemTwo,
    Image,
    BoxItemThree,
    Text,
    Mail
} from "./styled";
import { SubTitle, HeaderOne } from "../../styles/headers";
import profileImage from "../../assets/images/profile.png";

const BusinessCard = ({ extraContent }) => (
    <Box>
        <BoxItemOne>
            <Image
                width="384"
                height="384"
                src={profileImage}
                alt=""
            />
        </BoxItemOne>
        {extraContent && (
            <BoxItemTwo>
                {extraContent}
            </BoxItemTwo>
        )}
        <BoxItemThree>
            <SubTitle>This is</SubTitle>
            <HeaderOne>Rafał Chudy</HeaderOne>
            <Text>
                🙂💻 I am a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </Text>
            <Mail href="#">Hire Me</Mail>
        </BoxItemThree>
    </Box>
);

export default BusinessCard;
