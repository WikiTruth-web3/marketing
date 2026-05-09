import { routerLinks } from "../links";


export const navLinks = [
    { name: "Home", href: "/" , target: "_self"},
    { name: "Tech", href: "/technology" , target: "_self"},
    { name: "Roadmap", href: "/roadmap" , target: "_self"},
    { name: "Team", href: "/team" , target: "_self"},
    { name: "Blogs", href: routerLinks.blogs , target: "_blank"},
    { name: "Docs", href: routerLinks.docs , target: "_blank"},
];

// export const appLinks = {
//     description: "We deploy the App on both DNS and IPFS gateway, you can choose the entry according to your needs.",
//     app: { 
//         name:"App.xyz", 
//         phone: ".xyz", 
//         href: routerLinks.app ,
//         description: "Fast, smooth, stable and reliable, deployed on Cloudflare CDN.",
//         disabled: false,
//     },
//     appIpfs: {
//         name:"App.eth",
//         phone: ".eth",
//         href: routerLinks.appIpfs,
//         description: "Deployed on IPFS gateway, decentralized deployment, more secure.",
//         disabled: false,
//     },
// }