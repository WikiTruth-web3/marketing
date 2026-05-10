import type { LanguageItem } from "@/types/typesDapp/language";

export const homeSolution = {
    title: {
        en: 'A New Infrastructure For Truth',
        zh: '真相的新型基础设施',
        ko: '진실을 위한 새로운 인프라'
    },
    subtitle: {
        en: 'Evidence Market creates a decentralized market where encrypted evidence can be safely managed.',
        zh: 'Evidence Market 建立了一个去中心化市场，让加密证据能够得到安全管理。',
        ko: 'Evidence Market은 암호화된 증거를 안전하게 관리할 수 있는 탈중앙화 시장을 만듭니다.'
    },
    features: [
        { en: 'Submitted anonymously', zh: '匿名提交', ko: '익명 제출' },
        { en: 'Locked inside secure Evidence Boxes', zh: '锁入安全的证据箱 (Evidence Boxes)', ko: '보안 증거 상자(Evidence Boxes)에 잠금' },
        { en: 'Traded through smart contracts', zh: '通过智能合约交易', ko: '스마트 컨트랙트를 통한 거래' },
        { en: 'Protected by delayed disclosure mechanisms', zh: '受延迟披露机制保护', ko: '지연 공개 메커니즘으로 보호' },
        { en: 'Automatically revealed if suppression fails', zh: '若压制失败则自动公开', ko: '억압 실패 시 자동 공개' }
    ],
    authority: {
        title: {
            en: 'No central authority controls the flow of information.',
            zh: '没有任何中心化机构可以控制信息流。',
            ko: '어떤 중앙 권력도 정보의 흐름을 통제할 수 없습니다.'
        },
        list: [
            { en: 'Not governments', zh: '不是政府', ko: '정부도 아닙니다' },
            { en: 'Not corporations', zh: '不是企业', ko: '기업도 아닙니다' },
            { en: 'Not even Evidence Market itself', zh: '甚至不是 Evidence Market 自身', ko: 'Evidence Market 자신도 아닙니다' }
        ]
    }
};
