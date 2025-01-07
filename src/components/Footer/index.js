import {
    FooterBox,
    ContactLink,
    Text,
    SocialMedia,
    SocialMediaLink,
    Copyright
} from "./styled";
import { SubTitle } from "../../styles/headers";
import { VisuallyHidden } from "../../styles/links";
import { email } from "../../constants";
import { socialMedia } from "../../data/socialMedia";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterBox>
            <SubTitle>Let's talk!</SubTitle>
            <div>
                <ContactLink
                    href={`mailto:${email}`}
                    title={`Wyślij wiadomość na adres e-mail ${email}`}
                    aria-label={`Wyślij wiadomość na adres email ${email}`}
                >
                    {email}
                </ContactLink>
            </div>
            <Text>
                I'm always open to new projects whenever I have the time. If you have a website, dashboard or
                mobile app in mind and need some help to make your ideas come to life, feel free to contact me ☝️
            </Text>
            <SocialMedia>
                {socialMedia.map(item => (
                    item.link !== "" && (
                        <li key={item.name}>
                            <SocialMediaLink
                                href={item.link}
                                target="_blank"
                                title={`Przejdź do profilu w serwisie ${item.name}`}
                                rel="noopener nofollow noreferrer"
                            >
                                <i className={item.icon} aria-hidden="true" />
                                <VisuallyHidden>{item.name}</VisuallyHidden>
                            </SocialMediaLink>
                        </li>
                    )
                ))}
            </SocialMedia>
            <Copyright>Copyright &copy; 2024 - {currentYear} All rights reserved</Copyright>
        </FooterBox>
    )
};

export default Footer;
