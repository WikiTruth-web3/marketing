import type { LanguageItem } from "@/types/typesDapp/language";

export const incomeExchange = {
  title: {
    en: 'Transaction Income',
    zh: '证据交易收益',
    ko: '증거 거래 수익'
  },
  description: {
    en: 'Once a transaction is successfully completed, the whistleblower can receive up to 97% of the transaction price in a one-time payout.',
    zh: '买方（如受害者、机构等）购买证据后，吹哨人（Whistleblower）一次性最高可获得成交金额的 97%。',
    ko: '거래가 성공적으로 완료되면 제보자는 거래 가격의 최대 97%를 일시불로 받을 수 있습니다.'
  },
  ratio: '97%'
}

export const incomeDelay = {
  title: {
    en: 'Delay Fee Income',
    zh: '延迟公开费用（博弈收益）',
    ko: '공개 지연 수수료(게임 이론 수익)'
  },
  description: {
    en: 'For criminals to obtain longer confidentiality, they need to pay delay fees, which grow at a maximum rate of 200% per year.',
    zh: '被曝光方若试图延长证据的保密期，必须支付高昂的延迟公开费用，该费用每年最高以 200% 的速度递增，并转化为吹哨人的收益。',
    ko: '범죄자가 더 긴 기밀 유지를 원할 경우 지연 수수료를 지불해야 하며, 이 수수료는 연간 최대 200%의 비율로 증가합니다.'
  },
  ratio: '200%',
  map: [
    { label: { en: '1st year', zh: '第1年', ko: '1년차' }, value: 'x1' },
    { label: { en: '2nd year', zh: '第2年', ko: '2년차' }, value: 'x2' },
    { label: { en: '3rd year', zh: '第3年', ko: '3년차' }, value: 'x4' },
    { label: { en: '4th year', zh: '第4年', ko: '4년차' }, value: 'x8' },
  ]
}
