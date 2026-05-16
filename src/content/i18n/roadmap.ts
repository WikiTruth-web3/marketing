import { Rocket, ShieldCheck, Landmark, Globe, Zap, Users, Radio } from 'lucide-react';
import { PROJECT_NAME } from '../project';
import type { LanguageItem } from "@/types/language";

export interface RoadmapPhaseI18n {
    phase: LanguageItem;
    title: LanguageItem;
    quarter: string;
    description: LanguageItem;
    alignment: 'left' | 'right';
    status: 'completed' | 'active' | 'upcoming';
    items: LanguageItem[];
    icon: any;
    color: 'primary' | 'blue' | 'green' | 'yellow' | 'orange' | 'purple' | 'pink' | 'red';
}

export const roadmapTitle: LanguageItem = {
    en: 'Development Roadmap',
    zh: '发展路线图',
    ko: '개발 로드맵'
};

export const roadmapDescription: LanguageItem = {
    en: `From Proof of Concept to the construction of a global evidence network: the evolution of ${PROJECT_NAME.full}.`,
    zh: `从概念验证到全球证据网络的构建：${PROJECT_NAME.full} 的演进之路。`,
    ko: `개념 증명에서 글로벌 증거 네트워크 구축까지: ${PROJECT_NAME.full}의 진화 과정.`
};

export const roadmapPhases: RoadmapPhaseI18n[] = [
    {
        phase: { en: 'Phase 1', zh: '阶段 1', ko: '1단계' },
        title: { en: 'Genesis', zh: '创世', ko: '제네시스' },
        quarter: 'Q3 2025',
        description: { 
            en: 'Completing the Minimum Viable Product (MVP) and validating core game theory logic.', 
            zh: '完成最小可行性产品 (MVP)，验证核心博弈逻辑。', 
            ko: '최소 기능 제품(MVP) 완성 및 핵심 게임 이론 로직 검증.' 
        },
        alignment: 'left',
        status: 'completed',
        items: [
            { 
                en: 'Proof of Concept (PoC): Completed game theory simulation for the privacy marketplace', 
                zh: '概念验证 (PoC): 完成隐私交易市场的博弈论推演', 
                ko: '개념 증명(PoC): 프라이버시 마켓플레이스를 위한 게임 이론 시뮬레이션 완료' 
            },
            { 
                en: 'Established the "Increasing Secrecy Fee" mathematical model', 
                zh: '确定"递增保密费"数学模型', 
                ko: '"비밀 유지 비용 증액" 수학적 모델 수립' 
            },
            { 
                en: 'Evidence Blind Box core state machine development', 
                zh: 'Evidence Blind Box 核心状态机开发', 
                ko: 'Evidence Blind Box 핵심 상태 머신 개발' 
            },
        ],
        icon: Rocket,
        color: 'primary',
    },
    {
        phase: { en: 'Phase 2', zh: '阶段 2', ko: '2단계' },
        title: { en: 'Foundation', zh: '基石', ko: '파운데이션' },
        quarter: 'Q4 2025',
        description: { 
            en: 'Refining privacy technology and user experience, preparing for public beta.', 
            zh: '完善隐私技术与用户体验，准备进入公测。', 
            ko: '프라이버시 기술 및 사용자 경험 개선, 공개 베타 준비.' 
        },
        alignment: 'right',
        status: 'completed',
        items: [
            { 
                en: 'TEE Privacy Encryption: Data protection based on Oasis Sapphire', 
                zh: 'TEE 隐私加密: 基于 Oasis Sapphire 实现数据保护', 
                ko: 'TEE 프라이버시 암호화: Oasis Sapphire 기반 데이터 보호' 
            },
            { 
                en: 'SIWE Login: Introducing Sign-In with Ethereum for seamless authentication', 
                zh: 'SIWE 登录: 引入以太坊登录实现无感认证', 
                ko: 'SIWE 로그인: 원활한 인증을 위해 Sign-In with Ethereum 도입' 
            },
            { 
                en: 'Gas Optimization: Slimming down contracts to reduce interaction costs', 
                zh: 'Gas 优化: 合约瘦身以降低交互成本', 
                ko: '가스 최적화: 상호작용 비용 절감을 위한 컨트랙트 경량화' 
            },
        ],
        icon: ShieldCheck,
        color: 'blue',
    },
    {
        phase: { en: 'Phase 3', zh: '阶段 3', ko: '3단계' },
        title: { en: 'Testing & Bounties', zh: '测试与悬赏功能', ko: '테스트 및 바운티' },
        quarter: 'Q1 2026',
        description: { 
            en: 'Simulating real transactions in a testnet environment; development of bounty features.', 
            zh: '在测试网环境中模拟真实交易，悬赏功能开发。', 
            ko: '테스트넷 환경에서의 실제 거래 시뮬레이션; 바운티 기능 개발.' 
        },
        alignment: 'left',
        status: 'active',
        items: [
            { 
                en: 'Bounty System: More complex features with potential for compliance', 
                zh: '悬赏功能: 更加复杂并且具备合规潜力的悬赏功能', 
                ko: '바운티 시스템: 규제 준수 가능성이 있는 복잡한 기능' 
            },
            { 
                en: 'EIP-712: Off-chain signatures, on-chain execution', 
                zh: 'EIP-712: 实现链下签名、链上执行', 
                ko: 'EIP-712: 오프체인 서명, 온체인 실행' 
            },
            { 
                en: 'Uniswap V3 Anchoring: Automated liquidity bootstrapping tests', 
                zh: 'Uniswap V3 挂钩: 自动化流动性引导测试', 
                ko: 'Uniswap V3 앵커링: 자동화된 유동성 부트스트래핑 테스트'
            },
        ],
        icon: Zap,
        color: 'yellow',
    },
    {
        phase: { en: 'Phase 4', zh: '阶段 4', ko: '4단계' },
        title: { en: 'Awakening & Validation', zh: '觉醒与悬赏验证', ko: '각성 및 검증' },
        quarter: 'Q2 2026',
        description: { 
            en: 'Security audits, incentivized public beta, and validation of bounty features.', 
            zh: '安全审计与激励公测，并且实现悬赏功能验证。', 
            ko: '보안 감사, 보상형 공개 베타 및 바운티 기능 검증.' 
        },
        alignment: 'right',
        status: 'upcoming',
        items: [
            { 
                en: 'Security Audit: Inviting top-tier firms (CertiK/SlowMist) for review', 
                zh: '安全审计: 邀请头部机构(CertiK/SlowMist)审查', 
                ko: '보안 감사: 최상위 업체(CertiK/SlowMist) 리뷰 초대' 
            },
            { 
                en: 'Bug Bounty: Launching white-hat vulnerability bounty program', 
                zh: 'Bug Bounty: 开启白帽子漏洞赏金计划', 
                ko: '버그 바운티: 화이트햇 취약점 바운티 프로그램 런칭' 
            },
            { 
                en: 'Early Bird Event: Starting early incentive public beta program', 
                zh: '早鸟活动: 启动早期激励公测活动', 
                ko: '얼리버드 이벤트: 조기 보상형 공개 베타 프로그램 시작' 
            },
            { 
                en: 'Bounty Validation: Contract validation for bounty features', 
                zh: '悬赏验证：悬赏功能的合约验证', 
                ko: '바운티 검증: 바운티 기능을 위한 컨트랙트 검증' 
            }
        ],
        icon: ShieldCheck,
        color: 'green',
    },
    {
        phase: { en: 'Phase 5', zh: '阶段 5', ko: '5단계' },
        title: { en: 'Mainnet', zh: '主网', ko: '메인넷' },
        quarter: 'Q3 2026',
        description: { 
            en: 'Official mainnet deployment and launch of token economics.', 
            zh: '正式部署主网，开启代币经济。', 
            ko: '공식 메인넷 배포 및 토큰 경제 런칭.' 
        },
        alignment: 'left',
        status: 'upcoming',
        items: [
            { 
                en: 'Oasis Sapphire Mainnet Deployment', 
                zh: 'Oasis Sapphire 主网部署', 
                ko: 'Oasis Sapphire 메인넷 배포' 
            },
            { 
                en: 'Genesis Airdrop: Distributing EMC to early contributors', 
                zh: '创世空投: 向早期贡献者分发 EMC', 
                ko: '제네시스 에어드랍: 초기 기여자에게 EMC 배포' 
            },
            { 
                en: 'Liquidity Mining: Launching EMC/ROSE pair incentives', 
                zh: '流动性挖矿: 开启 EMC/ROSE 交易对激励', 
                ko: '유동성 마이닝: EMC/ROSE 페어 인센티브 런칭' 
            },
            { 
                en: 'Official testing of bounty features', 
                zh: '悬赏功能正式测试', 
                ko: '바운티 기능 공식 테스트' 
            }
        ],
        icon: Globe,
        color: 'primary',
    },
    {
        phase: { en: 'Phase 6', zh: '阶段 6', ko: '6단계' },
        title: { en: 'Order', zh: '秩序', ko: '오더' },
        quarter: 'Q4 2026',
        description: { 
            en: 'Establishing DAO governance and arbitration mechanisms.', 
            zh: '建立 DAO 治理与仲裁机制。', 
            ko: 'DAO 거버넌스 및 중재 메커니즘 구축.' 
        },
        alignment: 'right',
        status: 'upcoming',
        items: [
            { 
                en: 'DAO v1.0: Launching parameter adjustment voting system', 
                zh: 'DAO v1.0: 上线参数调整投票系统', 
                ko: 'DAO v1.0: 파라미터 조정 투표 시스템 런칭' 
            },
            { 
                en: 'veToken: Introducing staking dividend model', 
                zh: 'veToken: 引入质押分红模型', 
                ko: 'veToken: 스테이킹 배당 모델 도입' 
            },
            { 
                en: 'Arbitration Court: Building a decentralized dispute resolution mechanism', 
                zh: '仲裁法庭: 建立去中心化争议解决机制', 
                ko: '중재 법원: 탈중앙화 분쟁 해결 메커니즘 구축' 
            },
            { 
                en: 'Exploring official judicial collaborations', 
                zh: '官方司法合作探索', 
                ko: '공식 사법 협력 모색' 
            }
        ],
        icon: Landmark,
        color: 'purple',
    },
    {
        phase: { en: 'Phase 7', zh: '阶段 7', ko: '7단계' },
        title: { en: 'Expansion', zh: '扩张', ko: '익스팬션' },
        quarter: 'Q1 2027',
        description: { 
            en: 'Breaking blockchain silos, introducing AI technology, and a broader ecosystem.', 
            zh: '打破公链孤岛，引入 AI 技术与更广泛的生态。', 
            ko: '블록체인 사일로 타파, AI 기술 및 더 넓은 생태계 도입.' 
        },
        alignment: 'left',
        status: 'upcoming',
        items: [
            { 
                en: 'Omnichain Interoperability: Integrating LayerZero/CCIP for cross-chain capabilities', 
                zh: '全链互操作: 集成 LayerZero/CCIP 实现跨链', 
                ko: '옴니체인 상호운용성: 크로스체인 기능을 위한 LayerZero/CCIP 통합' 
            },
            { 
                en: 'AI Forgery Detection: Introducing decentralized AI to detect Deepfakes', 
                zh: 'AI 鉴伪: 引入去中心化 AI 检测 Deepfake', 
                ko: 'AI 위조 감지: 딥페이크 감지를 위한 탈중앙화 AI 도입' 
            },
            { 
                en: 'Bounty Token: Launching "demand-driven" evidence mining', 
                zh: '悬赏令牌: 上线"需求端"驱动的证据挖掘', 
                ko: '바운티 토큰: "수요 중심" 증거 마이닝 런칭' 
            },
        ],
        icon: Radio,
        color: 'orange',
    },
    {
        phase: { en: 'Phase 8', zh: '阶段 8', ko: '8단계' },
        title: { en: 'Ecosystem', zh: '生态', ko: '에코시스템' },
        quarter: 'Q2 2027',
        description: { 
            en: 'Building a global justice alliance, opening data and legal support.', 
            zh: '构建全球性正义联盟，开放数据与法律支持。', 
            ko: '글로벌 정의 연맹 구축, 데이터 및 법적 지원 개방.' 
        },
        alignment: 'right',
        status: 'upcoming',
        items: [
            { 
                en: 'Legal Aid Fund: Utilizing treasury funds for offline support', 
                zh: '法律援助基金: 利用国库资金提供线下支持', 
                ko: '법률 구조 기금: 오프라인 지원을 위한 재무 자금 활용' 
            },
            { 
                en: 'Evidence Market API: Opening data for third-party application integration', 
                zh: 'Evidence Market API: 开放数据供第三方应用接入', 
                ko: 'Evidence Market API: 제3자 애플리케이션 통합을 위한 데이터 개방' 
            },
            { 
                en: 'Global Compliance: Exploring implementation in more jurisdictions', 
                zh: '全球合规: 探索更多司法管辖区的落地', 
                ko: '글로벌 컴플라이언스: 더 많은 관할권에서의 구현 모색' 
            },
        ],
        icon: Users,
        color: 'pink',
    },
];

export const roadmapCTA = {
    title: {
        en: 'Ready to join the future of truth?',
        zh: '准备好加入真相的未来了吗？',
        ko: '진실의 미래에 동참할 준비가 되셨나요?'
    },
    description: {
        en: 'Download our technical whitepaper to learn more about the circuit protocol and our vision for a private, decentralized world.',
        zh: '下载我们的技术白皮书，深入了解协议机制以及我们对去中心化正义世界的愿景。',
        ko: '회로 프로토콜과 개인적이고 탈중앙화된 세상에 대한 우리의 비전에 대해 자세히 알아보려면 기술 백서를 다운로드하십시오.'
    },
    whitepaper: {
        en: 'View Whitepaper',
        zh: '查看白皮书',
        ko: '백서 보기'
    },
    telegram: {
        en: 'Telegram Group',
        zh: 'Telegram 群组',
        ko: '텔레그램 그룹'
    }
}

