import { PROJECT_NAME } from "../project";
import type { LanguageItem } from "@/types/language";

export interface FAQItemI18n {
  question: LanguageItem;
  answer: LanguageItem;
}

export interface FAQSectionI18n {
  title: LanguageItem;
  faqs: FAQItemI18n[];
}

export const faqSection: FAQSectionI18n = {
  title: {
    en: 'Frequently Asked Questions',
    zh: '疑问解答',
    ko: '자주 묻는 질문'
  },
  faqs: [
    {
      question: {
        en: 'How is this different from traditional anonymous reporting?',
        zh: '这和传统的匿名举报有什么区别？',
        ko: '이것이 기존의 익명 제보와 어떻게 다른가요?'
      },
      answer: {
        en: `Traditional channels rely heavily on centralized institutions, posing a fatal risk of identity exposure and lacking economic compensation for whistleblowers. ${PROJECT_NAME.full} achieves physical-level absolute invisibility through blockchain and TEE privacy computing, and innovatively uses "delayed disclosure premiums" to turn the maintenance of truth into a high-return security arbitrage.`,
        zh: `传统渠道严重依赖中心化机构，存在身份暴露的致命风险，且缺乏对吹哨人的经济补偿。${PROJECT_NAME.full} 通过区块链和 TEE 隐私计算实现了物理级别的绝对隐身，并创新性地利用“延迟披露溢价”，让维护真相变成一场高回报的安全套利。`,
        ko: `기존 채널은 중앙 집중식 기관에 크게 의존하여 신원 노출의 치명적인 위험을 초래하고 내부 고발자에 대한 경제적 보상이 부족합니다. ${PROJECT_NAME.full}은 블록체인 및 TEE 프라이버시 컴퓨팅을 통해 물리적 수준의 절대적인 비가시성을 달성하고, "지연 공개 프리미엄"을 혁신적으로 사용하여 진실 유지를 고수익 보안 차익 거래로 전환합니다.`
      }
    },
    {
      question: {
        en: 'Is it ethical to make money from criminal evidence?',
        zh: '依靠犯罪证据赚钱，这道德吗？',
        ko: '범죄 증거로 돈을 버는 것이 도덕적인가요?'
      },
      answer: {
        en: 'When bad actors can easily cover up the truth with money and power, pure morality is insufficient to combat systemic corruption. We do not rely on "innate human goodness" but break the deadlock with cold economic game theory. Countries around the world have practical cases of rewarding whistleblowers; in 2023, the SEC awarded over $279 million to whistleblowers. Interest-driven justice is the most efficient market law.',
        zh: '当坏人能够用金钱、权力轻易掩盖真相时，依靠纯粹的道德感难以对抗系统性的腐败。我们不依赖“人性本善”，而是用冷酷的经济博弈打破僵局。世界各国都有奖励吹哨人的实际案例，在2023年 SEC 向吹哨人发放的奖金就超 2.79 亿美元，利益驱动正义，是最高效的市场法则。',
        ko: '악의적인 행위자가 돈과 권력으로 진실을 쉽게 은폐할 수 있을 때, 순수한 도덕성만으로는 조직적인 부패에 맞서기에 부족합니다. 우리는 "인간의 타고난 선함"에 의존하지 않고 냉혹한 경제 게임 이론으로 교착 상태를 타개합니다. 전 세계 국가에는 내부 고발자에게 보상하는 실제 사례가 있습니다. 2023년에 SEC는 내부 고발자에게 2억 7,900만 달러 이상을 지급했습니다. 이익 중심의 정의는 가장 효율적인 시장 법칙입니다.'
      }
    },
    {
      question: {
        en: 'Do I need to register an account or provide personal identity information?',
        zh: '我需要注册账号或提供个人身份信息吗？',
        ko: '계정을 등록하거나 개인 신원 정보를 제공해야 하나요?'
      },
      answer: {
        en: `Not at all. The system discards the traditional centralized account system; you only need to connect a Web3 wallet. The underlying protocol generates a one-way privacy hash based on your wallet address, completely erasing all identity associations in the on-chain logs.`,
        zh: `完全不需要。系统抛弃了传统的中心化账户体系，您只需连接 Web3 钱包即可。底层协议会基于您的钱包地址生成单向隐私哈希，在链上日志中彻底抹除一切身份关联。`,
        ko: `전혀 그렇지 않습니다. 시스템은 기존의 중앙 집중식 계정 시스템을 버리고 Web3 지갑만 연결하면 됩니다. 기본 프로토콜은 지갑 주소를 기반으로 단방향 프라이버시 해시를 생성하여 온체인 로그의 모든 신원 연관성을 완전히 삭제합니다.`
      }
    },
    {
      question: {
        en: 'If law enforcement agencies request to forcibly obtain evidence, will you cooperate?',
        zh: '假如执法机构要求强制调取证据，你们会配合吗？',
        ko: '집법 기관에서 증거 강제 제출을 요청하면 협조할 것인가요?'
      },
      answer: {
        en: `The project is built on a censorship-resistant decentralized network. Not just external forces, but even the development team itself cannot interfere with the operation of smart contracts, cannot decrypt undisclosed evidence in advance, and cannot forcibly revoke triggered processes. Code is the final law.`,
        zh: `项目构建在抗审查的去中心化网络之上。不仅是外部力量，就连开发团队自己也无法干预智能合约的运行，无法提前解密未公开的证据，也无法强制撤销已被触发的流程。代码即最终法律。`,
        ko: `이 프로젝트는 검열에 저항하는 탈중앙화 네트워크를 기반으로 구축되었습니다. 외부 세력뿐만 아니라 개발 팀조차도 스마트 컨트랙트의 운영에 간섭할 수 없으며, 공개되지 않은 증거를 미리 해독할 수 없고, 트리거된 프로세스를 강제로 취소할 수 없습니다. 코드가 최종 법률입니다.`
      }
    },
    {
      question: {
        en: 'Will the evidence be covered up forever?',
        zh: '证据会不会永远被掩盖？',
        ko: '증거가 영원히 은폐될 수 있나요?'
      },
      answer: {
        en: `No, because this is a bottom line hard-coded into the smart contract. The covering party can only pay exponentially increasing protection fees to gain temporary buffer time. When the fees run out or payment stops, the code will automatically release the decryption key. No one can buy out the truth forever.`,
        zh: `不会，因为这是智能合约写死的底线。掩盖方只能支付呈指数级递增的保护费来换取暂时的缓冲时间。当费用耗尽或停止支付时，代码将自动释放解密密钥。没有任何人能永远买断真相。`,
        ko: `아니요, 이것은 스마트 컨트랙트에 하드 코딩된 마지노선이기 때문입니다. 은폐하는 측은 일시적인 완충 시간을 얻기 위해 기하급수적으로 증가하는 보호비를 지불할 수 있을 뿐입니다. 수수료가 소진되거나 지불이 중단되면 코드가 자동으로 복호화 키를 해제합니다. 누구도 영원히 진실을 매수할 수 없습니다.`
      }
    }
  ]
};
