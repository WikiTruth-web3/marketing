import { PROJECT_NAME } from "../project";
import type { FAQSectionI18n } from "./faq-home";

export const faqSection: FAQSectionI18n = {
  title: {
    en: 'Demo Q&A',
    zh: '演示问答',
    ko: '데모 Q&A'
  },
  faqs: [
    {
      question: {
        en: 'What does "two types of income" refer to?',
        zh: '两笔收入是指什么？',
        ko: '"두 가지 수입"이란 무엇입니까?'
      },
      answer: {
        en: `As a whistleblower, you will receive: 1. The base price for the evidence buyout; 2. Ongoing revenue from delay fees. As a buyer, you can: 1. View the evidence in advance; 2. Pay delay fees to postpone the public release of the evidence.`,
        zh: `作为吹哨人，您将收获：1. 证据被买断的底价；2. 延迟费的持续收益。作为买家，您可以：1. 提前查看证据；2. 支付延迟费延迟证据公开时间。`,
        ko: `내부 고발자로서 귀하는 다음을 받게 됩니다: 1. 증거 매입을 위한 기본 가격; 2. 지연 수수료로 인한 지속적인 수익. 구매자로서 귀하는 다음을 수행할 수 있습니다: 1. 증거를 미리 봅니다. 2. 지연 수수료를 지불하여 증거의 공개 공개를 연기합니다.`
      }
    },
    {
      question: {
        en: 'How are the "base price" and "initial delay fee" in the Evidence Box set?',
        zh: '证据箱中的“底价”和“首期延迟费”是如何设定的？',
        ko: '증거 상자의 "기본 가격"과 "초기 지연 수수료"는 어떻게 설정되나요?'
      },
      answer: {
        en: `As a whistleblower (evidence creator), you can independently set the "base price" for buying out the box. When a buyer pays the base price and attempts to cover up the truth, the "initial delay fee" is the transaction amount, which will grow exponentially (200%) over time.`,
        zh: `作为吹哨人（证据创建者），您可以自主设定买断该盲盒的“底价”。当买方支付了底价并试图掩盖真相时，“首期延迟费”就是成交金额，这笔费用将随着时间呈指数级（200%）增长。`,
        ko: `내부 고발자(증거 생성자)는 상자 매입을 위한 "기본 가격"을 독립적으로 설정할 수 있습니다. 구매자가 기본 가격을 지불하고 진실을 은폐하려고 시도할 때 "초기 지연 수수료"는 거래 금액이며, 시간이 지남에 따라 기하급수적으로(200%) 증가합니다.`
      }
    },
    {
      question: {
        en: 'Can a buyer choose to destroy the Evidence Box immediately after purchasing it?',
        zh: '买方购买了证据箱，可以选择立刻销毁它吗？',
        ko: '구매자가 증거 상자를 구매한 후 즉시 파괴하도록 선택할 수 있나요?'
      },
      answer: {
        en: `No. No one can destroy it. The high fees paid by the buyer are only for "advance access rights" and "buffer time for non-disclosure."`,
        zh: `不可以。没有任何人可以将其销毁。买方支付高额费用，购买的仅仅是“提前查看的访问权”和“暂不公开的缓冲时间”。`,
        ko: `아니요. 누구도 파괴할 수 없습니다. 구매자가 지불하는 높은 수수료는 "사전 액세스 권한"과 "비공개를 위한 완충 시간"에 대한 것일 뿐입니다.`
      }
    },
    {
      question: {
        en: 'What happens when the delay fees run out and the time lock countdown ends?',
        zh: '当延迟费耗尽，时间锁倒计时结束会发生什么？',
        ko: '지연 수수료가 소진되고 타임락 카운트다운이 종료되면 어떻게 되나요?'
      },
      answer: {
        en: `When the buyer stops paying delay fees, the countdown will reach zero. At this point, the smart contract will automatically execute the disclosure logic, completely releasing the decryption key. Everyone can view and download the disclosed evidence for free.`,
        zh: `当买方停止支付延迟费，倒计时将归零。此时，智能合约会自动执行公开逻辑，彻底释放解密密钥。所有人都可以免费查看和下载这份被公开的证据。`,
        ko: `구매자가 지연 수수료 지불을 중단하면 카운트다운이 0이 됩니다. 이 시점에서 스마트 컨트랙트는 자동으로 공개 로직을 실행하여 복호화 키를 완전히 해제합니다. 누구나 공개된 증거를 무료로 보고 다운로드할 수 있습니다.`
      }
    },
    {
      question: {
        en: 'Why would a buyer purchase an Evidence Box?',
        zh: '买家为什么会购买证据箱？',
        ko: '구매자가 왜 증거 상자를 구매하나요?'
      },
      answer: {
        en: `This involves a complex series of criminal psychology, sociology, and interest trade-offs. In short, based on real-world cases, the motivations for buyers to purchase evidence are diverse. As long as information asymmetry exists, greed and fear will continuously drive transactions.`,
        zh: `这个就要涉及一系列复杂的犯罪心理学、社会学、利益权衡，总之从现实世界的案例来看，买家购买证据箱的动机是多样的。只要存在信息不对称，贪婪与恐惧就会源源不断地驱动交易。`,
        ko: `여기에는 범죄 심리학, 사회학 및 이해관계 상충에 대한 복잡한 일련의 과정이 포함됩니다. 간단히 말해, 실제 사례를 바탕으로 구매자가 증거를 구매하는 동기는 다양합니다. 정보 비대칭이 존재하는 한 탐욕과 공포는 지속적으로 거래를 유도할 것입니다.`
      }
    },
    {
      question: {
        en: 'What if there are no buyers?',
        zh: '如果没有买家怎么办？',
        ko: '구매자가 없으면 어떻게 하나요?'
      },
      answer: {
        en: `Our original intention is to let the truth be discovered. Even if no one buys it, the truth will eventually be made public, which in itself is a meaningful thing.`,
        zh: `我们的初衷是为了让真相被发掘，哪怕没有人买，最终真相也会公之于众，这本身就是一件有意义的事情。`,
        ko: `우리의 본래 의도는 진실이 발견되도록 하는 것입니다. 아무도 사지 않더라도 결국 진실은 공개될 것이며, 그 자체로 의미 있는 일입니다.`
      }
    }
  ]
};
