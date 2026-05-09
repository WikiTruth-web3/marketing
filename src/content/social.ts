import { socialLinks as links } from "./links";
import {FaTelegramPlane} from 'react-icons/fa';
import { AiOutlineDiscord, AiOutlineX, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';


export const socialLinkData = [
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
