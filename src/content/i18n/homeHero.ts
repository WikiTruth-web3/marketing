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
  title: string
  subtitle: LanguageItem
  description: LanguageItem
  features: I18nHeroFeature[]
  primaryCta: I18nCTA
  secondaryCta: I18nCTA
}

export const heroData: I18nHomeHero = {
  title: PROJECT_NAME.full,
  subtitle: {
    en: 'Decentralized whistleblower bounty and crime evidence marketplace',
    zh: '去中心化吹哨人激励与证据市场',
    ko: '탈중앙화 증거 제보 및 증거 거래 시장'
  },
  description: {
    en: 'Transforming crime truths (evidence) into crypto assets, rewarding justice reporting through token economics.',
    zh: '打破“匿名无奖励，实名有危险”的死局。在绝对隐私的保护下，将犯罪证据转化为加密资产，让吹哨人的正义之举获得丰厚回报。',
    ko: '범죄의 진실(증거)을 암호화 자산으로 변환하고, 토큰 경제를 통해 정의로운 제보에 보상합니다.'
  },
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
