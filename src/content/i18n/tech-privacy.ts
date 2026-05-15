import { File, Lock, ShieldCheck, EyeOff, Coins, DollarSign, Zap, TrendingUp, Eye, User } from "lucide-react";
import { PROJECT_NAME } from "../project";
import type { LanguageItem } from "@/types/typesDapp/language";

export const privacyTitle: LanguageItem = {
    en: 'How to Ensure the Privacy and Security of Users?',
    zh: '如何保证用户隐私安全？',
    ko: '사용자 프라이버시를 어떻게 보호하나요?'
};

export const privacyDescription: LanguageItem = {
    en: 'Privacy is our core DNA. Through various underlying protocol architectures, we completely sever any potential link between your identity, fund flows, and on-chain evidence.',
    zh: '隐私是我们的核心基因。我们通过多种底层协议架构，彻底切断了您的身份、资金流向与链上证据之间的任何潜在关联。',
    ko: '프라이버시는 우리의 핵심 유전자입니다. 다양한 기본 프로토콜 아키텍처를 통해 귀하의 신원, 자금 흐름 및 온체인 증거 간의 잠재적인 연결을 완전히 차단합니다.'
};

export const privacyData = [
  {
    id: 'anonymous-privacy',
    icon: EyeOff,
    title: { en: 'ERC2771 Meta Transactions', zh: 'ERC2771元交易', ko: 'ERC2771 메타 트랜잭션' },
    description: { 
      en: 'Utilizing ERC2771 meta transactions via relay proxies to physically sever the direct link between user wallets and smart contracts, achieving truly untraceable on-chain interactions.', 
      zh: '通过 ERC2771 标准元交易由中继代理执行，从物理层面切断了用户钱包与智能合约的直接关联，实现真正的链上无痕交互。', 
      ko: 'ERC2771 표준 메타 트랜잭션을 활용하여 릴레이 프록시를 통해 거래를 실행함으로써, 사용자 지갑과 스마트 컨트랙트 간의 직접적인 연결을 물리적으로 차단하고 진정한 온체인 무흔적 상호작용을 실현합니다.' 
    },

    color: 'blue',
  },
  {
    id: 'random-id',
    icon: User,
    title: { en: 'Random Hash Identity', zh: '随机哈希身份', ko: '랜덤 해시 신원' },
    description: { 
      en: 'A random hash-generated UserId replaces the wallet address, making it impossible to map on-chain activity back to a real-world identity.', 
      zh: '采用随机哈希生成的 UserId 替代钱包地址，使得链上活动无法映射回任何现实世界的身份。', 
      ko: '지갑 주소 대신 랜덤 해시로 생성된 UserId를 사용하여 온체인 활동을 실제 신원과 매핑할 수 없도록 합니다.' 
    },
  },
  {
    id: 'eip712-privacy',
    icon: Zap,
    title: { en: 'EIP-712 Privacy Signature', zh: 'EIP-712 隐私签名', ko: 'EIP-712 프라이버시 서명' },
    description: { 
      en: 'Leveraging EIP-712 authorized signatures for transactions, leaving no interaction history or fund flow information on the public ledger.', 
      zh: '采用 EIP-712 授权签名进行交易支付，不会在链上留下任何交互记录或资金流转的公开信息。', 
      ko: 'EIP-712 인증 서명을 거래 결제에 활용하여 공개 원장에 상호 작용 기록이나 자금 흐름 정보를 남기지 않습니다.' 
    },
  },
  {
    id: 'zcash-shield',
    icon: ShieldCheck,
    title: { en: 'Zcash Privacy Integration', zh: 'Zcash 隐私集成', ko: 'Zcash 프라이버시 통합' },
    description: { 
      en: 'Integrated Zcash privacy token payments, utilizing zero-knowledge proof technology to provide the highest level of financial anonymity.', 
      zh: '引入了 Zcash 隐私代币支付，利用零知识证明技术带来行业顶级的财务匿名性。', 
      ko: '제로 지식 증명 기술을 활용하여 최고 수준의 재정적 익명성을 제공하는 Zcash 프라이버시 토큰 결제를 통합했습니다.' 
    },
  },
];

