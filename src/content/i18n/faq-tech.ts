import { PROJECT_NAME } from "../project";
import type { FAQSectionI18n } from "./faq-home";

export const faqSection: FAQSectionI18n = {
  title: {
    en: 'Technical Architecture Q&A',
    zh: '技术架构问答',
    ko: '기술 아키텍처 Q&A'
  },
  faqs: [
    {
      question: {
        en: 'How does the system ensure that a whistleblower\'s network traces cannot be tracked?',
        zh: '系统如何保证吹哨人的网络痕迹无法被追踪？',
        ko: '시스템은 내부 고발자의 네트워크 흔적을 추적할 수 없도록 어떻게 보장합니까?'
      },
      answer: {
        en: `We use Oasis Sapphire's TEE (Trusted Execution Environment) for privacy computing. All on-chain interactions are completed through ERC2771 relay proxies (Meta Transactions), meaning the user's real wallet address will not appear in the smart contract's caller records at all, physically blocking the tracking path from the network and consensus layers.`,
        zh: `我们采用了 Oasis Sapphire 的 TEE (可信执行环境) 进行隐私计算。所有的链上交互均通过 ERC2771 中继代理完成（Meta Transactions），这意味着用户的真实钱包地址根本不会出现在智能合约的调用者记录中，从网络层和共识层物理阻断了追踪路径。`,
        ko: `오아시스 사파이어의 TEE(Trusted Execution Environment)를 프라이버시 컴퓨팅에 사용합니다. 모든 온체인 상호 작용은 ERC2771 릴레이 프록시(Meta Transactions)를 통해 완료되므로 사용자의 실제 지갑 주소가 스마트 컨트랙트의 호출자 기록에 전혀 나타나지 않아 네트워크 및 합의 계층에서 추적 경로를 물리적으로 차단합니다.`
      }
    },
    {
      question: {
        en: 'Can TEE (Trusted Execution Environment) prevent internal malicious acts?',
        zh: 'TEE (可信执行环境) 能够防得住内部作恶吗？',
        ko: 'TEE(Trusted Execution Environment)가 내부의 악의적인 행위를 방지할 수 있나요?'
      },
      answer: {
        en: `Yes. Once evidence is packaged into Sapphire's TEE, its decryption is entirely taken over by smart contracts running within hardware-level isolated areas. No external personnel, node validators, or even the ${PROJECT_NAME.full} development team can extract private keys or tamper with data before the time lock conditions are met.`,
        zh: `能够。证据一旦被打包进入 Sapphire 的 TEE，其解密操作完全由运行在硬件级隔离区域内的智能合约接管。任何外部人员、节点验证者，甚至 ${PROJECT_NAME.full} 开发团队，都无法在时间锁条件触发之前提取私钥或篡改数据。`,
        ko: `예. 증거가 사파이어의 TEE에 패키징되면 복호화는 하드웨어 수준의 격리된 영역 내에서 실행되는 스마트 컨트랙트에 의해 전적으로 인계됩니다. 외부 인원, 노드 검증자 또는 ${PROJECT_NAME.full} 개발 팀조차도 타임락 조건이 충족되기 전에 개인 키를 추출하거나 데이터를 변조할 수 없습니다.`
      }
    },
    {
      question: {
        en: 'Why introduce Zcash as a privacy payment option?',
        zh: '为什么要引入 Zcash 作为隐私支付选项？',
        ko: '왜 Zcash를 프라이버시 결제 옵션으로 도입했나요?'
      },
      answer: {
        en: `Although the application layer hides user addresses, if users pay Gas or transaction fees using mainnet native tokens, their source of funds might still be traced through on-chain graphs. Introducing Zcash Shielded Pools as an anonymous payment layer completely cuts the link between fund flows and order requests.`,
        zh: `虽然应用层隐藏了用户地址，但若用户使用主网原生代币支付 Gas 或交易费用，其资金来源仍可能通过链上图谱被溯源。引入 Zcash 屏蔽池 (Shielded Pool) 作为匿名支付层，彻底切断了资金流向与订单请求之间的关联。`,
        ko: `애플리케이션 레이어에서 사용자 주소를 숨기더라도 사용자가 메인넷 네이티브 토큰을 사용하여 가스비나 거래 수수료를 지불하면 온체인 그래프를 통해 자금 출처가 추적될 수 있습니다. Zcash 실드 풀(Shielded Pool)을 익명 결제 레이어로 도입하면 자금 흐름과 주문 요청 간의 연결이 완전히 끊어집니다.`
      }
    },
    {
      question: {
        en: 'How are evidence files stored?',
        zh: '证据文件是如何存储的？',
        ko: '증거 파일은 어떻게 저장되나요?'
      },
      answer: {
        en: `Evidence files are first shredded into fragments, then encrypted and stored on decentralized storage networks IPFS and Arweave. All hashes are symmetrically encrypted using AES256 + ECDH, with private keys stored within the TEE.`,
        zh: `证据文件首先被粉碎切片，然后被加密并存储在去中心化的存储网络 IPFS 和 Arweave 上，所有的哈希都被采用AES256 + ECDH对称加密，私钥存储在TEE之中。`,
        ko: `증거 파일은 먼저 조각으로 분쇄된 다음 암호화되어 탈중앙화 저장 네트워크인 IPFS 및 Arweave에 저장됩니다. 모든 해시는 AES256 + ECDH를 사용하여 대칭적으로 암호화되며 개인 키는 TEE 내에 저장됩니다.`
      }
    },
    {
      question: {
        en: 'Will the files I upload be leaked?',
        zh: '我上传的文件会被泄露吗？',
        ko: '내가 업로드한 파일이 유출될 수 있나요?'
      },
      answer: {
        en: `Even looking forward for a long time, the possibility of Intel SGX-based TEE execution environments being breached is very small, so the likelihood of file leakage is extremely low.`,
        zh: `即便是未来很长一段时间来看，基于英特尔的SGX硬件底层的TEE可执行运行环境，被攻破的可能性都很小，所以文件被泄露的可能性极小。`,
        ko: `장기적으로 보더라도 인텔 SGX 기반 TEE 실행 환경이 침해될 가능성은 매우 낮으므로 파일 유출 가능성은 극히 낮습니다.`
      }
    },
    {
      question: {
        en: 'If the underlying public chain is attacked, will the Evidence Boxes still be disclosed?',
        zh: '假如底层公链遭遇攻击，真相盒子还会被公开吗？',
        ko: '기본 퍼블릭 체인이 공격을 받으면 증거 상자가 여전히 공개되나요?'
      },
      answer: {
        en: `Although cracking technology is advancing rapidly, encryption technology always stays ahead, which is the cornerstone of the stable operation of human society. Oasis Sapphire will continuously update and upgrade the technology of the underlying public chain, so the possibility of secret data being intercepted due to an attack on the public chain is minimal.`,
        zh: `虽然破解技术在飞速进步，但是加密技术始终领先破解技术，这是人类社会稳定运行的基石，Oasis Sapphire会一直更新升级底层公链的技术，所以公链遭遇攻击导致机密数据被截取的可能性微乎其微。`,
        ko: `해킹 기술이 빠르게 발전하고 있지만, 암호화 기술은 항상 앞서 있으며 이는 인류 사회의 안정적인 운영의 초석입니다. 오아시스 사파이어는 기본 퍼블릭 체인의 기술을 지속적으로 업데이트하고 업그레이드하므로 퍼블릭 체인에 대한 공격으로 인해 기밀 데이터가 가로채질 가능성은 최소화됩니다.`
      }
    },
    {
      question: {
        en: 'How to deal with the potential threat of quantum computing?',
        zh: '如何应对量子计算的潜在威胁？',
        ko: '양자 컴퓨팅의 잠재적 위협에 어떻게 대응하나요?'
      },
      answer: {
        en: `We have reserved upgrade plans for post-quantum cryptography. Although current mainstream quantum computers do not yet pose a practical threat to AES-256 and ECDH, once a turning point occurs, the system can seamlessly switch to quantum-resistant algorithms through the modular design of smart contracts, ensuring long-term security.`,
        zh: `我们已经预留了后量子密码学的升级方案。虽然当前主流量子计算机尚未对 AES-256 和 ECDH 构成实际威胁，但一旦出现转折点，系统可通过智能合约的模块化设计，无缝切换至抗量子算法，确保长期安全。`,
        ko: `우리는 양자 내성 암호에 대한 업그레이드 계획을 예약해 두었습니다. 현재 주류 양자 컴퓨터가 아직 AES-256 및 ECDH에 실질적인 위협을 가하지는 않지만, 전환점이 발생하면 시스템은 스마트 컨트랙트의 모듈식 설계를 통해 양자 내성 알고리즘으로 원활하게 전환하여 장기적인 보안을 보장할 수 있습니다.`
      }
    }
  ]
};