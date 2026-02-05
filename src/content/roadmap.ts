import { PROJECT_NAME } from './project';
import { Rocket, ShieldCheck, Landmark, Globe, Zap, Users, Lock, Radio } from 'lucide-react';
import { RoadmapCardProps } from '@/components/customer/RoadmapCard';

export const roadmapTitle = 'Development Roadmap'
export const roadmapDescription = `From Proof of Concept to the construction of a global truth network: the evolution of ${PROJECT_NAME.full}.`

export const roadmapPhases: RoadmapCardProps[] = [
    {
        phase: 'Phase 1',
        title: 'Genesis',
        quarter: 'Q3 2025',
        description: 'Completing the Minimum Viable Product (MVP) and validating core game theory logic.',
        alignment: 'left',
        status: 'completed',
        items: [
            'Proof of Concept (PoC): Completed game theory simulation for the privacy marketplace',
            'Established the "Increasing Secrecy Fee" mathematical model',
            'TruthBox core state machine development',
        ],
        icon: Rocket,
        color: 'primary',
    },
    {
        phase: 'Phase 2',
        title: 'Foundation',
        quarter: 'Q4 2025',
        description: 'Refining privacy technology and user experience, preparing for public beta.',
        alignment: 'right',
        status: 'completed',
        items: [
            'TEE Privacy Encryption: Data protection based on Oasis Sapphire',
            'SIWE Login: Introducing Sign-In with Ethereum for seamless authentication',
            'Gas Optimization: Slimming down contracts to reduce interaction costs',
        ],
        icon: ShieldCheck,
        color: 'blue',
    },
    {
        phase: 'Phase 3',
        title: 'Testing & Bounties',
        quarter: 'Q1 2026',
        description: 'Simulating real transactions in a testnet environment; development of bounty features.',
        alignment: 'left',
        status: 'active',
        items: [
            'Bounty System: More complex features with potential for compliance',
            'EIP-712: Off-chain signatures, on-chain execution',
            'Uniswap V3 Anchoring: Automated liquidity bootstrapping tests',
        ],
        icon: Zap,
        color: 'yellow',
    },
    {
        phase: 'Phase 4',
        title: 'Awakening & Validation',
        quarter: 'Q2 2026',
        description: 'Security audits, incentivized public beta, and validation of bounty features.',
        alignment: 'right',
        status: 'upcoming',
        items: [
            'Security Audit: Inviting top-tier firms (CertiK/SlowMist) for review',
            'Bug Bounty: Launching white-hat vulnerability bounty program',
            'Early Bird Event: Starting early incentive public beta program',
            'Bounty Validation: Contract validation for bounty features'
        ],
        icon: ShieldCheck,
        color: 'green',
    },
    {
        phase: 'Phase 5',
        title: 'Mainnet',
        quarter: 'Q3 2026',
        description: 'Official mainnet deployment and launch of token economics.',
        alignment: 'left',
        status: 'upcoming',
        items: [
            'Oasis Sapphire Mainnet Deployment',
            'Genesis Airdrop: Distributing WTRC to early contributors',
            'Liquidity Mining: Launching WTRC/ROSE pair incentives',
            'Official testing of bounty features'
        ],
        icon: Globe,
        color: 'primary',
    },
    {
        phase: 'Phase 6',
        title: 'Order',
        quarter: 'Q4 2026',
        description: 'Establishing DAO governance and arbitration mechanisms.',
        alignment: 'right',
        status: 'upcoming',
        items: [
            'DAO v1.0: Launching parameter adjustment voting system',
            'veToken: Introducing staking dividend model',
            'Arbitration Court: Building a decentralized dispute resolution mechanism',
            'Exploring official judicial collaborations'
        ],
        icon: Landmark,
        color: 'purple',
    },
    {
        phase: 'Phase 7',
        title: 'Expansion',
        quarter: 'Q1 2027',
        description: 'Breaking blockchain silos, introducing AI technology, and a broader ecosystem.',
        alignment: 'left',
        status: 'upcoming',
        items: [
            'Omnichain Interoperability: Integrating LayerZero/CCIP for cross-chain capabilities',
            'AI Forgery Detection: Introducing decentralized AI to detect Deepfakes',
            'Bounty Marketplace: Launching "demand-driven" evidence mining',
        ],
        icon: Radio,
        color: 'orange',
    },
    {
        phase: 'Phase 8',
        title: 'Ecosystem',
        quarter: 'Q2 2027',
        description: 'Building a global justice alliance, opening data and legal support.',
        alignment: 'right',
        status: 'upcoming',
        items: [
            'Legal Aid Fund: Utilizing treasury funds for offline support',
            'WikiTruth API: Opening data for third-party application integration',
            'Global Compliance: Exploring implementation in more jurisdictions',
        ],
        icon: Users,
        color: 'pink',
    },
]
