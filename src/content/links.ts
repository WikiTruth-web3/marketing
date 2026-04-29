


export const routerLinks = {
    website: 'https://wikitruth.xyz',
    appIpfs: 'https://app.wikitruth.eth.limo',
    // betaIpfs: 'https://beta.wikitruth.eth.limo',
    app: 'https://app.wikitruth.xyz',
    // beta: 'https://app.wikitruth.xyz',
    docs: 'https://docs.wikitruth.xyz',
    docsStatus: 'https://docs.wikitruth.xyz/status',
}

export const socialLinks = {
    twitter: 'https://x.com/WikiTruthLabs',
    telegram: 'https://t.me/+kKfEGJ6Ua2FhYjI1',
    github: 'https://github.com/WikiTruth-web3',
    discord: 'https://discord.gg/KVDs7CFSr2',
    email: 'mailto:wikitruth@proton.me',
    emailText: 'wikitruth@proton.me',
    mirror: 'https://paragraph.com/@wikitruth'
}

export const navLinks = [
    { name: "Home", href: "/" , target: "_self"},
    { name: "Tech", href: "/technology" , target: "_self"},
    { name: "Roadmap", href: "/roadmap" , target: "_self"},
    { name: "Blogs", href: "/blogs" , target: "_self"},
    { name: "Team", href: "/team" , target: "_self"},
    { name: "Docs", href: routerLinks.docs , target: "_blank"},
];

export const appLinks = {
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