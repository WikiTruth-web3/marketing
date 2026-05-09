import { DollarSign, Heart, Users, CreditCard } from "lucide-react";
import type { LanguageItem } from "@/types/typesDapp/language";

export const crimeDataTitle: LanguageItem = {
    en: 'Current Status of Crime Crisis',
    zh: '被掩盖的犯罪黑洞',
    ko: '범죄 위기의 현재 상태'
};

export const crimeDataDescription: LanguageItem = {
    en: 'Increasingly serious criminal incidents bring huge losses to our world. Every crime directly or indirectly causes us to lose our legitimate interests.',
    zh: '每年，数以万亿美元计的黑金在全球流转，无数普通人的合法权益被剥夺。强权与利益集团筑起高墙掩盖真相。',
    ko: '점점 더 심각해지는 범죄 사건들은 우리 세상에 막대한 손실을 가져옵니다. 모든 범죄는 직간접적으로 우리의 정당한 이익을 잃게 만듭니다.'
};

export const crimeData = [
  {
    icon: DollarSign,
    value: "$3.1T",
    label: { en: "Global Financial Crime Scale", zh: "全球金融犯罪规模", ko: "글로벌 금융 범죄 규모" },
    description: { en: "Nasdaq Verafin 2024 Global Financial Crime Report", zh: "纳斯达克 Verafin 2024 全球金融犯罪报告", ko: "Nasdaq Verafin 2024 글로벌 금융 범죄 보고서" },
    link: "https://www.nasdaq.com/global-financial-crime-report",
    color: "red-400",
  },
  {
    icon: Heart,
    value: "$782.9B",
    label: { en: "Drug Trafficking", zh: "毒品贩运", ko: "마약 밀매" },
    description: { en: "UNODC World Drug Report", zh: "联合国全球毒品犯罪报告", ko: "UNODC 세계 마약 보고서" },
    link: "https://www.unodc.org/unodc/en/frontpage/2025/June/wdr25.html",
    color: "orange-400",
  },
  {
    icon: Users,
    value: "$346.7B",
    label: { en: "Human Trafficking", zh: "人口贩运", ko: "인신매매" },
    description: { en: "UNODC Global Report on Trafficking in Persons", zh: "联合国关于人口贩运的全球报告", ko: "UNODC 글로벌 인신매매 보고서" },
    link: "https://www.unodc.org/unodc/en/data-and-analysis/glotip.html",
    color: "yellow-400",
  },
  {
    icon: CreditCard,
    value: "$485.6B",
    label: { en: "Scams & Bank Fraud", zh: "诈骗和银行欺诈", ko: "사기 및 은행 사기" },
    description: { en: "Verafin report on global fraudulent transactions", zh: "Verafin发布的全球欺诈交易报告", ko: "Verafin 글로벌 사기 거래 보고서" },
    link: "https://www.nasdaq.com/global-financial-crime-report",
    color: "purple-400",
  }
];

export const moreData = {
  title: { en: 'More Data', zh: '更多数据', ko: '추가 데이터' },
  website: 'Our World in Data',
  link: 'https://ourworldindata.org/',
};
