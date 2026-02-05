import { socialLinks as links } from "./links";
import {FaTelegramPlane} from 'react-icons/fa';
import {PROJECT_NAME} from "./project";
import { AiOutlineDiscord, AiOutlineX, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';


export const socialLinks = [
    {
        name: 'twitter',
        icon: AiOutlineX,
        href: links.twitter,
        label: 'Twitter'
    },
    {
        name: 'telegram',
        icon: FaTelegramPlane,
        href: links.telegram,
        label: 'Telegram'
    },
    {
        name: 'github',
        icon: AiOutlineGithub,
        href: links.github,
        label: 'GitHub'
    },
    {
        name: 'discord',
        icon: AiOutlineDiscord,
        href: links.discord,
        label: 'Discord'
    },
    {
        name: 'email',
        icon: AiOutlineMail,
        href: links.email,
        label: 'Email'
    },
];


export const introInSocial = {
    description: `${PROJECT_NAME.full} is a decentralized "whistleblower bounty" and "crime evidence" trading market. Here, you can buy and sell evidence of crimes, and earn rewards for providing valuable information.`,
}