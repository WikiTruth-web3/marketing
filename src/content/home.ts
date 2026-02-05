import { 
  ChevronLeft, 
  ChevronRight, 
  Shield, 
  Eye, 
  AlertTriangle, 
  DollarSign,
  CheckCircle,
  ShieldCheck,
  Globe,
  Heart,
  TrendingUp,
  Users,
  Lock,
  Coins,
  ArrowRight,
  Zap,
  CreditCard,
  Target,
  BarChart3,
  Clock,
  LucideIcon,
  EyeOff,
  EyeIcon,
  File
} from "lucide-react";
import { PROJECT_NAME } from "./project";
import { routerLinks,socialLinks } from "./links";

export interface TruthBoxStep {
  label: string
  desc: string
}


// ========================Hero Area=====================
export interface CTA {
  text: string
  link: string
}

export interface Hero {
  title: string
  subtitle: string
  description: string
  features: string[]
  primaryCta: CTA
  secondaryCta: CTA
}

export const heroData: Hero = {
  title: PROJECT_NAME.full,
  subtitle: 'The world\'s first decentralized whistleblower bounty and crime evidence marketplace',
  description: 'Rewarding justice reporting through token economics, transforming crime truths (evidence) into crypto assets, turning abstract justice into gold coins.',
  features: ['Anonymous', 'Privacy', 'Censorship-Resistant', 'Security'],
  primaryCta: {
    text: 'Marketplace',
    link: routerLinks.app
  },
  secondaryCta: {
    text: 'Learn more',
    link: socialLinks.mirror, // open a new tab
  },
}


// ===========Statistics=====================
export interface CrimeStatData {
  icon: any
  label: string
  value: string
  source: string
  description: string
  link: string
  color: string
  bgColor: string
}

export const crimeStatsTitle = 'Current Status of Crime Crisis'
export const crimeStatsDescription = '\nIncreasingly serious criminal incidents bring huge losses to our world. \nEvery crime directly or indirectly causes us to lose our legitimate interests. \nCrime will not stop; we need to fight against crime for the long term!'

export const crimeStats = [
    {
        icon: DollarSign,
        value: "$3.1T",
        label: "Global Financial Crime Scale",
        description: "Nasdaq Verafin 2024 Global Financial Crime Report",
        link: "https://www.nasdaq.com/global-financial-crime-report",
        color: "text-red-400",
        bgColor: "bg-red-500/10"
    },
    {
        icon: Heart,
        value: "$782.9B",
        label: "Drug Trafficking",
        description: "UNODC World Drug Report",
        link: "https://www.unodc.org/unodc/en/frontpage/2025/June/wdr25.html",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10"
    },
    {
        icon: Users,
        value: "$346.7B",
        label: "Human Trafficking",
        description: "UNODC Global Report on Trafficking in Persons",
        link: "https://www.unodc.org/unodc/en/data-and-analysis/glotip.html",
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/10"
    },
    {
        icon: CreditCard,
        value: "$485.6B",
        label: "Scams & Bank Fraud",
        description: "Verafin report on global fraudulent transactions and scam trends",
        link: "https://www.nasdaq.com/global-financial-crime-report",
        color: "text-purple-400",
        bgColor: "bg-purple-500/10"
    }
]as CrimeStatData[]

export const moreData = {
  title: 'More Data',
  website: 'Our World in Data',
  link: 'https://ourworldindata.org/',
}


// ========================Introduction Area=====================
export const thinking = {
  question: 'How does a society go bad?',
  answer:'It starts with bad guys making money and good guys not making money.',
  thinking: 'Since people can lie and do evil for money',
  thinking2: 'why can\'t they tell the truth and fight crime for money?',

}

export const thinkingLink = {
  title: 'The SEC awarded whistleblowers $2.79 billion in 2023.',
  link: 'https://www.sec.gov/enforcement-litigation/whistleblower-program',
}


// ========================Carousel=====================
export interface CarouselItem {
  title: string
  description: string
  icon: LucideIcon
}

export const carouselTitle = 'Why We Work on This?'

export const carouselData: CarouselItem[] = [
  {
    title: "The Justice Crisis of Society",
    description: "Our society is facing a severe crisis of justice. Bad actors collude to monopolize power and information, create lies, commit crimes, and conceal the truth.",
    icon: Shield,
  },
  {
    title: "The Bad Guys Fear the Truth",
    description: "The strength of villains stems from the fact that the truth is unknown. No matter how powerful a villain is, they become fragile in the face of truth.",
    icon: EyeOff,
  },
  {
    title: "Absolute Zero",
    description: "The fear of judicial trial forces bad actors to go to any length to reduce the possibility of evidence existing to zero.",
    icon: Target,
  },
  {
    title: "You Know, So You Are in Danger",
    description: `Possessing evidence of a crime is extremely dangerous, even for accomplices. Uploading the truth to ${PROJECT_NAME.full} is also a safety insurance policy for yourself.`,
    icon: AlertTriangle,
  },
  {
    title: "No Money No Work",
    description: "Are police or judges free? Why should you be? Money is the foundation of survival. If justice generates no value, people will avoid it.",
    icon: DollarSign,
  },
];



// ========================================
export interface securityTab {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export const securityTitle = 'Security & Privacy'
export const securityDescription = 'Based on the Oasis Sapphire privacy blockchain, implementing storage, encryption, and private transactions to ensure your identity is never exposed.'

export const securityData = [
  {
    id: 'file-save',
    icon: File,
    title: 'File Shredding & Storage',
    description: 'Evidence files are first shredded and then uploaded to decentralized storage networks like IPFS and Arweave.',
  },
  {
    id: 'local-encryption',
    icon: Lock,
    title: 'AES256 + ECDH',
    description: 'Using AES256 + ECDH symmetric encryption, one of the most secure encryption algorithms to date.',
  },
  {
    id: 'sapphire-tee',
    icon: ShieldCheck,
    title: 'Oasis Sapphire TEE',
    description: 'Confidential data is stored in the Oasis Sapphire network\'s TEE (Trusted Execution Environment), based on Intel SGX technology for hardware-level security.',
  },
    {
    title: 'Anonymous Privacy',
    icon: EyeOff,
    description: 'Relay proxy contracts enable interactions with no on-chain records and untraceability, ensuring absolute anonymity and privacy for whistleblowers.',
    color: 'blue',
  },
] as securityTab[]


// =============================================
export const data = {
  title: 'Features',
  description: '',
  
}


export interface Feature {
  title: string
  description: string
  icon: LucideIcon
  color: string
}

export const features: Feature[] = [
    {
    title: 'Token Economics Driven',
    description: '(Criminals) purchasing evidence boosts token value, which in turn incentivizes more whistleblowers.',
    icon: Coins,
    color: 'origin',
  },
  {
    title: 'Evidence Assetization',
    description: 'Transforming evidence into on-chain assets. A closed deal means profit; public disclosure means justice.',
    icon: DollarSign,
    color: 'cyan',
  },
  {
    title: 'Delay Premium',
    description: 'To conceal the truth long-term, delay fees must be paid, representing an infinitely growing cost.',
    icon: TrendingUp,
    color: 'cyan',
  },
  {
    title: 'Inevitable Disclosure',
    description: 'If delay fees cannot be paid, the evidence content will be automatically disclosed.',
    icon: Eye,
    color: 'cyan',
  },

]

// =======================================================


// TODO: Add a pie chart to enrich the page effect.
export const incomeExchange = {
  title: 'Transaction Income',
  description: 'Once a transaction is successfully completed, the whistleblower can receive up to 97% of the transaction price in a one-time payout.',
  ratio: '97%'
}

// TODO: Add a bar chart to enrich the page effect.
export const incomeDelay = {
  title: 'Delay Fee Income',
  description: 'Delay fees grow exponentially every year, providing the whistleblower with a second stream of income.',
  ratio: '100%~200%',
  map:[
    {
      label: '1st year',
      value: '$1 million',
    },
    {
      label: '2nd year',
      value: '$2 million',
    },
    {
      label: '3rd year',
      value: '$4 million',
    },
    {
      label: '4th year',
      value: '$8 million',
    },
  ]

}



// =================================================
// TODO: Add a table comparison chart to enrich the page effect.
export const marketAdvantages = {
    title: `Why Choose ${PROJECT_NAME.full}?`,
    subtitle: `Compared to traditional reporting channels, ${PROJECT_NAME.full} offers a more convenient monetization path and more diverse options.`,
    comparisons: [
        {
            aspect: "Process Transparency",
            traditional: "Potential for back-door dealings",
            wikitruth: "Executed by smart contracts, fully transparent",
        },
        {
            aspect: "Revenue Distribution",
            traditional: "Determined by officials, usually 10-30%",
            wikitruth: "Minters receive 90~97%",
        },
        {
            aspect: "Processing Time",
            traditional: "Months to years",
            wikitruth: "Instant transaction",
        },
        {
            aspect: "Entry Barrier",
            traditional: "Requires some governmental knowledge, or even hiring professional lawyers",
            wikitruth: "Only requires creating a Web3 wallet",
        },
        {
            aspect: "Diversity Support",
            traditional: "Only offers rewards for specific cases",
            wikitruth: "You can sell any evidence you wish to",
        },

    ]
}


// =================================================
export const vision = {
    title1: 'Constructing a Decentralized',
    title2: 'Truth Network',
    description1: 'We envision a world where evidence is immutable, whistleblowers are shielded by cryptography, and justice is an inevitable result of transparency. ',
    description2: 'Join us in building the infrastructure for the next generation of truth.',
}

