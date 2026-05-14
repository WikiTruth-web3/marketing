import { File, Lock, ShieldCheck, EyeOff, Coins, DollarSign, Zap, TrendingUp, Eye } from "lucide-react";
import { PROJECT_NAME } from "../project";
import type { LanguageItem } from "@/types/typesDapp/language";

export const securityTitle: LanguageItem = {
    en: 'Security & Privacy',
    zh: '安全与隐私',
    ko: '보안 및 프라이버시'
};

export const securityDescription: LanguageItem = {
    en: 'Based on the Oasis Sapphire privacy blockchain, implementing storage, encryption, and private transactions to ensure your identity is never exposed.',
    zh: '基于 Oasis Sapphire 隐私公链，实现存储、加密与隐私交易，确保你的身份永远不会暴露。',
    ko: 'Oasis Sapphire 프라이버시 블록체인을 기반으로 저장, 암호화 및 프라이빗 트랜잭션을 구현하여 신원이 노출되지 않도록 보장합니다.'
};

export const securityData = [
  {
    id: 'file-save',
    icon: File,
    title: { en: 'File Shredding & Storage', zh: '文件粉碎与存储', ko: '파일 분쇄 및 저장' },
    description: { 
      en: 'Evidence files are first shredded and then uploaded to decentralized storage networks like IPFS and Arweave.', 
      zh: '证据文件首先会被粉碎处理，上传至 IPFS 和 Arweave 去中心化存储网络。', 
      ko: '증거 파일은 먼저 분쇄 처리된 후 IPFS 및 Arweave와 같은 탈중앙화 저장 네트워크에 업로드됩니다.' 
    },
  },
  {
    id: 'local-encryption',
    icon: Lock,
    title: { en: 'AES256 + ECDH', zh: 'AES256 + ECDH', ko: 'AES256 + ECDH' },
    description: { 
      en: 'Using AES256 + ECDH symmetric encryption, one of the most secure encryption algorithms to date.', 
      zh: '采用 AES256 + ECDH 对称加密，这是目前为止最安全的加密算法之一。', 
      ko: '현재까지 가장 안전한 암호화 알고리즘 중 하나인 AES256 + ECDH 대칭 암호화를 사용합니다.' 
    },
  },
  {
    id: 'sapphire-tee',
    icon: ShieldCheck,
    title: { en: 'Oasis Sapphire TEE', zh: 'Oasis Sapphire TEE', ko: 'Oasis Sapphire TEE' },
    description: { 
      en: 'Confidential data is stored in the Oasis Sapphire network\'s TEE (Trusted Execution Environment), based on Intel SGX technology for hardware-level security.', 
      zh: '机密数据存储在 Oasis Sapphire 网络 TEE（可信执行环境）中，基于英特尔的 SGX 技术，具备硬件级安全。', 
      ko: '기밀 데이터는 인텔 SGX 기술을 기반으로 한 하드웨어 수준의 보안인 Oasis Sapphire 네트워크의 TEE(신뢰 실행 환경)에 저장됩니다.' 
    },
  },
  {
    id: 'anonymous-privacy',
    icon: EyeOff,
    title: { en: 'ERC2771 Meta Transactions', zh: 'ERC2771元交易', ko: 'ERC2771 메타 트랜잭션' },
    description: { 
      en: 'Through ERC2771 standard meta transactions, the relay proxy contract achieves on-chain non-record and untraceable status, ensuring the absolute anonymity and privacy of whistleblowers.', 
      zh: '通过ERC2771标准元交易，中继代理合约实现链上无记录、不可追踪，保证吹哨人的绝对匿名和隐私。', 
      ko: 'ERC2771 표준 메타 트랜잭션을 통해 릴레이 프록시 컨트랙트는 온체인 기록이 남지 않아 추적이 불가능한 상호작용을 가능하게 하여 제보자의 절대적인 익명성과 프라이버시를 보장합니다.' 
    },
    color: 'blue',
  },
];

export const features = [
  {
    title: { en: 'Token Economics Driven', zh: '代币经济驱动', ko: '토큰 경제 기반' },
    description: { 
      en: '(Criminals) purchasing evidence boosts token value, which in turn incentivizes more whistleblowers.', 
      zh: '（罪犯）购买证据提升代币价值，代币价值增长又激励更多吹哨人。', 
      ko: '(범죄자) 증거 구매는 토큰 가치를 높이고, 이는 다시 더 많은 제보자에게 인센티브를 제공합니다.' 
    },
    icon: Coins,
    color: 'origin',
    labels: ['BTC', 'ETH', 'USDT']
  },
  {
    title: { en: 'Evidence Assetization', zh: '证据资产化', ko: '증거 자산화' },
    description: { 
      en: 'Transforming evidence into on-chain assets. A closed deal means profit; public disclosure means justice.', 
      zh: '将证据转化为链上资产。成交获得收益，公开伸张正义。', 
      ko: '증거를 온체인 자산으로 변환합니다. 거래 성사는 수익을, 공개는 정의를 의미합니다.' 
    },
    icon: DollarSign,
    color: 'cyan',
  },
  {
    title: { en: 'Free Market', zh: '自由市场', ko: '자유 시장' },
    description: { 
      en: 'Like DeFi and NFT markets, it provides convenient trading and evidence value realization.', 
      zh: '像 DeFi 和 NFT 市场一样，便捷的交易和证据价值变现。', 
      ko: 'DeFi 및 NFT 시장과 마찬가지로 편리한 거래와 증거 가치 실현을 제공합니다.' 
    },
    icon: Zap,
    color: 'cyan',
  },
  {
    title: { en: 'Delay Premium', zh: '延时溢价', ko: '지연 할증료' },
    description: { 
      en: 'To conceal the truth long-term, delay fees must be paid, representing an infinitely growing cost.', 
      zh: '想长期掩盖真相，必须支付延时费用，这将是无限增长的成本。', 
      ko: '진실을 장기적으로 은폐하려면 지연 수수료를 지불해야 하며, 이는 무한히 증가하는 비용을 의미합니다.' 
    },
    icon: TrendingUp,
    color: 'cyan',
  },
  {
    title: { en: 'Inevitable Disclosure', zh: '必然公开', ko: '필연적 공개' },
    description: { 
      en: 'If delay fees cannot be paid, the evidence content will be automatically disclosed.', 
      zh: '一旦无力支付延时费用，则将自动公开证据内容。', 
      ko: '지연 수수료를 지불할 수 없게 되면 증거 내용이 자동으로 공개됩니다.' 
    },
    icon: Eye,
    color: 'cyan',
  },
];

export const comparison = {
  title: { en: `Why Choose ${PROJECT_NAME.full}?`, zh: `为什么选择 ${PROJECT_NAME.full}？`, ko: `왜 ${PROJECT_NAME.full}를 선택해야 하나요?` },
  subtitle: { 
    en: `Compared to traditional reporting channels, ${PROJECT_NAME.full} offers a more convenient monetization path and more diverse options.`,
     zh: `相比传统举报渠道，${PROJECT_NAME.full} 提供更便捷的变现渠道和更多样化的选择。`, 
     ko: `전통적인 제보 채널과 비교하여 ${PROJECT_NAME.full}는 더 편리한 수익 창출 경로와 더 다양한 옵션을 제공합니다.` 
    },
  comparisons: [
    {
      aspect: { en: "Process Transparency", zh: "流程透明度", ko: "프로세스 투명성" },
      traditional: { en: "Potential for back-door dealings", zh: "有可能存在暗箱操作", ko: "뒷거래 가능성" },
      evidenceMarket: { 
        en: "Executed by smart contracts, fully transparent", 
        zh: "由智能合约执行，完全透明", 
        ko: "스마트 컨트랙트에 의해 실행되어 완벽하게 투명함" 
      },
    },
    {
      aspect: { en: "Revenue Distribution", zh: "收益分配", ko: "수익 분배" },
      traditional: { en: "Determined by officials, usually 10-30%", zh: "官方决定，通常 10-30%", ko: "당국에 의해 결정됨, 보통 10-30%" },
      evidenceMarket: { en: "Minters receive 90~97%", zh: "Minter 获得 90~97%", ko: "민터가 90~97% 수령" },
    },
    {
      aspect: { en: "Processing Time", zh: "处理时间", ko: "처리 시간" },
      traditional: { en: "Months to years", zh: "数月到数年", ko: "수개월에서 수년" },
      evidenceMarket: { en: "Instant transaction", zh: "即时成交", ko: "즉각적인 거래" },
    },
    {
      aspect: { en: "Entry Barrier", zh: "使用门槛", ko: "진입 장벽" },
      traditional: { 
        en: "Requires some governmental knowledge, or even hiring professional lawyers", 
        zh: "需要具备一定的政务知识，甚至还需要聘请专业律师", 
        ko: "어느 정도의 행정 지식이 필요하거나 전문 변호사 고용이 필요할 수도 있음" 
      },
      evidenceMarket: { 
        en: "Access the website to upload evidence", 
        zh: "访问网站即可上传证据", 
        ko: "웹사이트 방문만으로 증거 업로드 가능" },
    },
    {
      aspect: { en: "Diversity Support", zh: "多样性支持", ko: "다양성 지원" },
      traditional: { 
        en: "Only offers rewards for specific cases", 
        zh: "仅对特定的案件发布奖赏", 
        ko: "특정 사건에 대해서만 보상 제공" },
      evidenceMarket: { en: "You can sell any evidence you wish to", zh: "可以出售任何你想出售的证据", ko: "원하는 어떤 증거도 판매 가능" },
    },
  ]
};
