import {routerLinks} from "./links";
import { LinkItem } from "@/components/customer/link";

export const mainLink: LinkItem[] = [
    { name: "Home", href: "/" , target: "_self"},
    { name: "Roadmap", href: "/roadmap" , target: "_self"},
    { name: "Blog", href: "/blog" , target: "_self"},
    { name: "Team", href: "/team" , target: "_self"},
    { name: "Docs", href: routerLinks.docs , target: "_blank"},
];

export const appLink = {
    description: "We deploy the App on both DNS and IPFS gateway, you can choose the entry according to your needs.",
    app: { 
        name:"App.xyz", 
        phone: ".xyz", 
        href: routerLinks.app ,
        description: "Fast, smooth, stable and reliable, deployed on Cloudflare CDN.",
        disabled: false,
    },
    appIpfs: {
        name:"App.eth",
        phone: ".eth",
        href: routerLinks.appIpfs,
        description: "Deployed on IPFS gateway, decentralized deployment, more secure.",
        disabled: false,
    },
}