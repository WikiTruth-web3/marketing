import {
  Shield,
  AlertTriangle,
  DollarSign,
  EyeOff,
} from "lucide-react";
import { PROJECT_NAME } from "../project";
import { routerLinks, socialLinks } from "../links";
import type { LanguageItem } from "@/types/typesDapp/language";

export interface I18nCTA {
  text: LanguageItem
  link: string
}

export interface I18nHeroFeature {
  icon: any // Using any for LucideIcon to avoid circular deps or complex typing here
  text: LanguageItem
}

export interface I18nHomeHero {
  headline: LanguageItem
  subheadline: LanguageItem
  description: LanguageItem[]
  features: I18nHeroFeature[]
  primaryCta: I18nCTA
  secondaryCta: I18nCTA
}

export const heroData: I18nHomeHero = {
  headline: {
    en: 'Decentralized whistleblower bounty and crime evidence marketplace',
    zh: '去中心化吹哨人激励与证据市场',
    ko: '탈중앙화 증거 제보 및 증거 거래 시장'
  },
  subheadline: {
    en: 'Anonymous whistleblowing, encrypted evidence trading, and unstoppable disclosure infrastructure powered by Web3',
    zh: '由 Web3 驱动的匿名举报、加密证据交易和不可阻挡的信息披露基础设施',
    ko: '익명 제보, 암호화된 증거 거래, 그리고 막을 수 없는 정보 공개 인프라가 웹3.0 기반으로 구현됩니다'
  },
  description: [{
    en: 'Enables anyone to anonymously submit, protect, trade, and disclose high-impact evidence without trusting a centralized platform',
    zh: '任何人都能匿名提交、保护、交易和披露具有重大影响的证据，而无需信任中心化平台',
    ko: '은 중앙 집중식 플랫폼을 신뢰하지 않고도 누구나 익명으로 영향력 있는 증거를 제출, 보호, 거래 및 공개할 수 있도록 지원합니다'
  }, {
    en: 'Built for whistleblowers, journalists, researchers, investigators, and truth seekers.',
    zh: '专为吹哨人、记者、研究人员、调查员和寻求真相者而建。',
    ko: '내부 고발자, 언론인, 연구원, 조사관 및 진실 추구자를 위해 제작되었습니다.'
  }],
  features: [
    {
      icon: Shield,
      text: { en: 'Anonymous', zh: '匿名', ko: '익명' },
    },
    {
      icon: EyeOff,
      text: { en: 'Privacy', zh: '隐私', ko: '개인정보 보호' },
    },
    {
      icon: AlertTriangle,
      text: { en: 'Censorship-Resistant', zh: '抗审查', ko: '검열 저항성' },
    },
    {
      icon: DollarSign,
      text: { en: 'Bounty', zh: '激励', ko: '현상금' },
    },
  ],
  primaryCta: {
    text: { en: 'Marketplace', zh: '进入市场', ko: '마켓플레이스' },
    link: routerLinks.app
  },
  secondaryCta: {
    text: { en: 'Learn more', zh: '了解更多', ko: '더 알아보기' },
    link: socialLinks.mirror,
  },
}
