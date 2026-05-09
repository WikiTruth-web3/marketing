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
import { FeatureType } from "@/components/sections/TechFeatures";
import { PROJECT_NAME } from "../project";
import { securityTab } from '@/components/sections/TechSecurity';

// ========================================

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

export const features: FeatureType[] = [
  {
    title: 'Token Economics Driven',
    description: '(Criminals) purchasing evidence boosts token value, which in turn incentivizes more whistleblowers.',
    icon: Coins,
    color: 'origin',
    labels: ['BTC', 'ETH', 'USDT']
  },
  {
    title: 'Evidence Assetization',
    description: 'Transforming evidence into on-chain assets. A closed deal means profit; public disclosure means justice.',
    icon: DollarSign,
    color: 'cyan',
  },
  {
    title: 'Free Market',
    description: 'Like DeFi and NFT markets, it provides convenient trading and evidence value realization.',
    icon: Zap,
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


// =================================================
// TODO: Add a table comparison chart to enrich the page effect.
export const comparison = {
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

