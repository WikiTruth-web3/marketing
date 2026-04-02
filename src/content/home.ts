import {

  Shield,
  AlertTriangle,
  DollarSign,
  Heart,
  Users,
  CreditCard,
  Target,
  LucideIcon,
  EyeOff,

} from "lucide-react";
import { HomeHeroType } from "@/components/sections/HomeHero";
import { CrimeDataType } from "@/types/crime";
import { PROJECT_NAME } from "./project";
import { routerLinks, socialLinks } from "./links";
import { WhyWorkItem } from "@/components/sections/WhyWeWork";


// ========================Hero Area=====================

export const heroData: HomeHeroType = {
  title: PROJECT_NAME.full,
  subtitle: 'Decentralized whistleblower bounty and crime evidence marketplace',
  description: 'Transforming crime truths (evidence) into crypto assets, rewarding justice reporting through token economics.',
  features: [
    {
      icon: Shield,
      text: 'Anonymous',
    },
    {
      icon: EyeOff,
      text: 'Privacy',
    },
    {
      icon: AlertTriangle,
      text: 'Censorship-Resistant',
    },
    {
      icon: DollarSign,
      text: 'Bounty',
    },
  ],
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

export const crimeDataTitle = 'Current Status of Crime Crisis'
export const crimeDataDescription = '\nIncreasingly serious criminal incidents bring huge losses to our world. \nEvery crime directly or indirectly causes us to lose our legitimate interests. \nCrime will not stop; we need to fight against crime for the long term!'

export const crimeData = [
  {
    icon: DollarSign,
    value: "$3.1T",
    label: "Global Financial Crime Scale",
    description: "Nasdaq Verafin 2024 Global Financial Crime Report",
    link: "https://www.nasdaq.com/global-financial-crime-report",
    color: "red-400",
  },
  {
    icon: Heart,
    value: "$782.9B",
    label: "Drug Trafficking",
    description: "UNODC World Drug Report",
    link: "https://www.unodc.org/unodc/en/frontpage/2025/June/wdr25.html",
    color: "orange-400",
  },
  {
    icon: Users,
    value: "$346.7B",
    label: "Human Trafficking",
    description: "UNODC Global Report on Trafficking in Persons",
    link: "https://www.unodc.org/unodc/en/data-and-analysis/glotip.html",
    color: "yellow-400",
  },
  {
    icon: CreditCard,
    value: "$485.6B",
    label: "Scams & Bank Fraud",
    description: "Verafin report on global fraudulent transactions and scam trends",
    link: "https://www.nasdaq.com/global-financial-crime-report",
    color: "purple-400",
  }
] as CrimeDataType[]

export const moreData = {
  title: 'More Data',
  website: 'Our World in Data',
  link: 'https://ourworldindata.org/',
}


// ========================Introduction Area=====================
export const thinking = {
  question: 'How does a society go bad?',
  answer: 'It starts with bad guys making money and good guys not making money.',
  thinking: 'Since people can lie and do evil for money',
  thinking2: 'why can\'t they tell the truth and fight crime for money?',

}

export const thinkingLink = {
  title: 'The SEC awarded whistleblowers $2.79 billion in 2023.',
  link: 'https://www.sec.gov/enforcement-litigation/whistleblower-program',
}


// ========================Carousel=====================

export const whyWorkTitle = 'Why We Work on This?'

export const whyWorkData: WhyWorkItem[] = [
  {
    title: "The Justice Crisis of Society",
    description: "The bad guys collude with each other, monopolize power and information, create lies, and cover up the truth.",
    icon: Shield,
    image: "/images/01.jpg"
  },
  {
    title: "The Bad Guys Fear the Truth",
    description: "No matter how powerful the bad guys are, they will become fragile in the face of truth.",
    icon: EyeOff,
    image: "/images/02.jpg"
  },
  {
    title: "Absolute Zero",
    description: "The bad guys will go to any lengths to eliminate the evidence.",
    icon: Target,
    image: "/images/03.jpg"
  },
  {
    title: "You Know, So You Are in Danger",
    description: `Uploading the evidence to ${PROJECT_NAME.full} can make you safer.`,
    icon: AlertTriangle,
    image: "/images/04.jpg"
  },
  {
    title: "No Money No Work",
    description: "Are police or judges free? Why should you be? If justice generates no value, people will avoid it.",
    icon: DollarSign,
    image: "/images/05.jpg"
  },
];


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
  description: 'For criminals to obtain longer confidentiality, they need to pay delay fees, which grow at a maximum rate of 200% per year.',
  ratio: '200%',
  map: [
    {
      label: '1st year',
      value: 'x1',
    },
    {
      label: '2nd year',
      value: 'x2',
    },
    {
      label: '3rd year',
      value: 'x4',
    },
    {
      label: '4th year',
      value: 'x8',
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

