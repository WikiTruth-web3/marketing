import {
  Box,
  Target,
} from "lucide-react";
import { routerLinks } from "../links";
import type { LanguageItem } from "@/types/typesDapp/language";

export const coreProductsSection = {
  title: {
    en: 'Two Core Markets, Reshaping the Economics of Justice',
    zh: '两大核心市场，重塑正义经济学',
    ko: '정의의 경제학을 재정립하는 두 개의 핵심 시장'
  },
  description: {
    en: 'Connecting whistleblowers and truth-seekers through a secure, decentralized infrastructure.',
    zh: '通过安全、去中心化的基础设施连接吹哨人与真相寻求者。',
    ko: '안전하고 탈중앙화된 인프라를 통해 제보자와 진실 추구자를 연결합니다.'
  },
  products: [
    {
      id: 'evidence-market',
      icon: Box,
      subtitle: { en: 'Evidence Box Market', zh: '证据箱市场', ko: '증거 상자 시장' },
      entry: [
        {
          description: { en: 'I have insider documents or evidence of crime.', zh: '我有内幕文件或犯罪证据。', ko: '나는 내부 문서나 범죄 증거를 가지고 있다.' },
          ctaText: { en: 'Create Evidence Box', zh: '创建证据盒子', ko: '증거 상자 생성' },
          ctaLink: routerLinks.createBox,
          disabled: false
        },
        {
          description: { en: 'My misconduct may be exposed?', zh: '会有我的犯罪证据吗？', ko: '나의 범죄 증거가 있을까?' },
          ctaText: { en: 'Query Now', zh: '立即查询', ko: '지금 조회' },
          ctaLink: routerLinks.app,
          disabled: false
        }
      ]
    },
    {
      id: 'bounty-market',
      icon: Target,
      subtitle: { en: 'Bounty Market', zh: '悬赏市场', ko: '바운티 시장' },
      entry: [
        {
          description: { en: 'I need evidence or intelligence on a crime.', zh: '我需要犯罪证据/情报。', ko: '범죄 증거/정보가 필요하다.' },
          ctaText: { en: 'Post Bounty', zh: '发布悬赏', ko: '바운티 게시' },
          ctaLink: routerLinks.app,
          disabled: true
        },
        {
          description: { en: 'I have crime intelligence or exclusive leads.', zh: '我有犯罪情报或独家猛料。', ko: '범죄 정보나 독점 제보가 있다.' },
          ctaText: { en: 'Provide Info & Earn', zh: '提供情报赚钱', ko: '정보 제공 및 수익 창출' },
          ctaLink: routerLinks.app,
          disabled: true
        }
      ]
    }
  ]
};

