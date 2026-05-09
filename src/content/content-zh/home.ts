// import {
//   Shield,
//   AlertTriangle,
//   DollarSign,
//   Heart,
//   Users,
//   CreditCard,
//   Target,
//   Box,
//   LucideIcon,
//   EyeOff,

// } from "lucide-react";
// import { PROJECT_NAME } from "../project";
// import { routerLinks, socialLinks } from "../links";
// import { HomeHeroType } from "@/components/sections/HomeHero";
// import { WhyWorkItem } from "@/components/sections/WhyWeWork";

// // ========================Hero Area=====================

// export const heroData: HomeHeroType = {
//   title: PROJECT_NAME.full,
//   subtitle: '去中心化吹哨人激励与证据市场',
//   description: '打破“匿名无奖励，实名有危险”的死局。在绝对隐私的保护下，将犯罪证据转化为加密资产，让吹哨人的正义之举获得丰厚回报。',
//   features: [
//     {
//       icon: Shield,
//       text: '匿名',
//     },
//     {
//       icon: EyeOff,
//       text: '隐私',
//     },
//     {
//       icon: AlertTriangle,
//       text: '抗审查',
//     },
//     {
//       icon: DollarSign,
//       text: '激励',
//     },
//   ],
//   primaryCta: {
//     text: '进入市场',
//     link: routerLinks.app
//   },
//   secondaryCta: {
//     text: '了解更多',
//     link: routerLinks.docs, // open a new tab
//   },
// }

// // ========================两个核心产品=====================
// export const coreProductsSection = {
//   title: '两大核心市场，重塑正义经济学',
//   description: '不依赖道德说教，用真实的加密资产奖励每一个勇敢发声的人。',
//   products: [
//     {
//       id: 'truth-box',
//       icon: Box,
//       title: '真相盒子 (Truth Box)',
//       subtitle: '供吹哨人安全出售证据',
//       description: '将手中的内幕文件或犯罪证据转化为抗审查的加密资产。',
//       benefits: [
//         '自主定价：通过市场流通变现。',
//         '绝对匿名：零身份信息收集，消除现实被报复的风险。',
//         '公众募捐：即便不卖断，也能接受全网加密资产捐赠。'
//       ],
//     },
//     {
//       id: 'bounty-market',
//       icon: Target,
//       title: '悬赏市场 (Bounty Market)',
//       subtitle: '供需求方定向征集情报',
//       description: '用悬赏金撕开权力封锁的信息黑洞，获取决定性的内幕线索。',
//       benefits: [
//         '精准悬赏：定向针对某家公司或特定犯罪事件收集证据。',
//         '资金托管：赏金锁定在智能合约中，建立去信任的交易机制。',
//         '打破垄断：用经济手段获取传统监管渠道无法获取的真相。'
//       ],
//     }
//   ]
// };





// // ===========Statistics=====================
// import { CrimeDataType } from "@/components/sections/GlobalCrimeData";

// export const crimeStatsTitle = '被掩盖的犯罪黑洞'
// export const crimeStatsDescription = '\n每年，数以万亿美元计的黑金在全球流转，无数普通人的合法权益被剥夺。\n强权与利益集团筑起高墙掩盖真相，传统的监管渠道屡屡失效。\n如果真相没有价格，罪恶就不会停止。'

// export const crimeStats = [
//   {
//     icon: DollarSign,
//     value: "$3.1T",
//     label: "全球金融犯罪规模",
//     description: "纳斯达克 Verafin 2024 全球金融犯罪报告",
//     link: "https://www.nasdaq.com/global-financial-crime-report",
//     color: "text-red-400",
//     bgColor: "bg-red-500/10"
//   },
//   {
//     icon: Heart,
//     value: "$782.9B",
//     label: "毒品贩运",
//     description: "联合国全球毒品犯罪报告",
//     link: "https://www.unodc.org/unodc/en/frontpage/2025/June/wdr25.html",
//     color: "text-orange-400",
//     bgColor: "bg-orange-500/10"
//   },
//   {
//     icon: Users,
//     value: "$346.7B",
//     label: "人口贩运",
//     description: "联合国毒品和犯罪问题办公室关于人口贩运的全球报告",
//     link: "https://www.unodc.org/unodc/en/data-and-analysis/glotip.html",
//     color: "text-yellow-400",
//     bgColor: "bg-yellow-500/10"
//   },
//   {
//     icon: CreditCard,
//     value: "$485.6B",
//     label: "诈骗和银行欺诈",
//     description: "Verafin发布的全球欺诈交易和诈骗趋势报告",
//     link: "https://www.nasdaq.com/global-financial-crime-report",
//     color: "text-purple-400",
//     bgColor: "bg-purple-500/10"
//   }
// ] as CrimeDataType[]

// export const moreData = {
//   title: '更多数据',
//   website: 'Our World in Data',
//   link: 'https://ourworldindata.org/',
// }


// // ========================Introduction Area=====================
// export const thinking = {
//   question: '社会是怎么变坏的？',
//   answer: '从好人赚不到钱，而黑金却源源不断流入坏人腰包开始。',
//   thinking: '既然作恶者可以为了利益无恶不作，',
//   thinking2: '为什么好人不能在伸张正义的同时，获得应有的丰厚回报？',

// }

// export const thinkingLink = {
//   title: '2023年SEC（美国证券交易委员会）奖励给金融犯罪吹哨人超过2.79亿美金',
//   link: 'https://www.sec.gov/enforcement-litigation/whistleblower-program',
// }


// // ========================Why Work=====================

// export const whyWorkTitle = '为什么我们要做这个?'

// export const whyWorkData: WhyWorkItem[] = [
//   {
//     title: "打破信息与权力的垄断",
//     description: "作恶者相互勾结，利用权力和资金垄断信息，制造谎言，将真相深埋。",
//     icon: Shield,
//     image: '/images/1.jpg',
//   },
//   {
//     title: "坏人最害怕真相",
//     description: "无论多么强大的坏人，在真相面前都会变得脆弱。",
//     icon: EyeOff,
//     image: '/images/2.jpg',
//   },
//   {
//     title: "证据即生命线",
//     description: "坏人会不惜一切代价消除证据。",
//     icon: Target,
//     image: '/images/3.jpg'
//   },
//   {
//     title: "匿名是你最强的护盾",
//     description: `实名举报意味着被报复。使用 Web3 密码学将证据上传至 ${PROJECT_NAME.full}，在绝对匿名中获得最强保护。`,
//     icon: AlertTriangle,
//     image: '/images/4.jpg'
//   },
//   {
//     title: "为正义赋予商业价值",
//     description: "如果作恶能暴富，举报却要倾家荡产，正义就会缺席。唯有让正义产生经济价值，才能吸引更多人揭露黑暗。",
//     icon: DollarSign,
//     image: '/images/5.jpg'
//   },
// ];




// export const incomeExchange = {

//   title: '证据交易收益',
//   description: '买方（如受害者、机构等）购买证据后，吹哨人（Whistleblower）一次性最高可获得成交金额的 97%。',
//   ratio: '97%'
// }

// export const incomeDelay = {
//   title: '延迟公开费用（博弈收益）',
//   description: '被曝光方若试图延长证据的保密期，必须支付高昂的延迟公开费用，该费用每年最高以 200% 的速度递增，并转化为吹哨人的收益。',
//   ratio: '200%',
//   map: [
//     {
//       label: '1st year',
//       value: 'x1',
//     },
//     {
//       label: '2nd year',
//       value: 'x2',
//     },
//     {
//       label: '3rd year',
//       value: 'x4',
//     },
//     {
//       label: '4th year',
//       value: 'x8',
//     },
//   ]

// }


// export const vision = {
//   title1: '开启“正义即服务” (JaaS) 的 Web3 时代',
//   description1: '我们设想这样一个世界：每一份核心证据都不可篡改，每一位吹哨人都受密码学绝对保护，正义成为不可被强权掩盖的必然结果。',
//   description2: '我们不依赖于“人性本善”的乌托邦幻想，而是秉持 Web3 的核心原则：让作恶在经济上不划算。',
// }

