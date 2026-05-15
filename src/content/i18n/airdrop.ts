import { Globe, ShieldOff, LockKeyholeOpen } from 'lucide-react';
import type { LanguageItem } from "@/types/typesDapp/language";

export const airdropContent = {
    tag: {
        en: 'Testnet airdrop',
        zh: '测试网空投',
        ko: '테스트넷 에어드랍'
    },
    title: {
        en: 'Airdrop Campaign!',
        zh: '空投活动开始！',
        ko: '에어드랍 캠페인!'
    },
    subtitle: {
        en: 'Sapphire testnet · try the product',
        zh: 'Sapphire 测试网 · 体验产品',
        ko: 'Sapphire 테스트넷 · 제품 체험'
    },
    description: {
        en: 'Use Oasis Sapphire testnet only. Grab TEST from the official faucet, then create an Evidence Blind Box and complete a trade. No verification and no staking — we have not published any additional rules yet.',
        zh: '仅限 Oasis Sapphire 测试网。从官方水龙头领取 TEST 代币，然后创建一个证据盲盒并完成一笔交易。无需验证，无需质押 —— 我们尚未发布任何额外规则。',
        ko: 'Oasis Sapphire 테스트넷만 사용하십시오. 공식 수도꼭지에서 TEST를 받고 증거 블라인드 박스를 생성하여 거래를 완료하십시오. 인증이나 스테이킹이 필요하지 않습니다. 아직 추가 규칙은 발표되지 않았습니다.'
    },
    rules: [
        {
            en: 'Campaign runs on Oasis Sapphire testnet.',
            zh: '活动在 Oasis Sapphire 测试网上运行。',
            ko: '캠페인은 Oasis Sapphire 테스트넷에서 진행됩니다.'
        },
        {
            en: 'Everyone can participate.',
            zh: '所有人都可以参与。',
            ko: '누구나 참여할 수 있습니다.'
        },
        {
            en: 'Claim Sapphire testnet TEST from the Oasis faucet, then create an Evidence Blind Box and complete a trade on the app.',
            zh: '从 Oasis 水龙头领取 Sapphire 测试网 TEST 代币，然后在应用中创建证据盲盒并完成交易。',
            ko: 'Oasis 수도꼭지에서 Sapphire 테스트넷 TEST를 수령한 후, 앱에서 증거 블라인드 박스를 생성하고 거래를 완료하세요.'
        }
    ],
    stats: [
        { 
            icon: Globe, 
            label: { en: 'Network', zh: '网络', ko: '네트워크' }, 
            value: { en: 'Oasis Sapphire testnet', zh: 'Oasis Sapphire 测试网', ko: 'Oasis Sapphire 테스트넷' } 
        },
        { 
            icon: ShieldOff, 
            label: { en: 'Verification', zh: '验证', ko: '인증' }, 
            value: { en: 'Not required', zh: '不需要', ko: '필요 없음' } 
        },
        { 
            icon: LockKeyholeOpen, 
            label: { en: 'Staking', zh: '质押', ko: '스테이킹' }, 
            value: { en: 'Not required', zh: '不需要', ko: '필요 없음' } 
        },
    ],
    cta: {
        en: 'Claim test tokens',
        zh: '领取测试代币',
        ko: '테스트 토큰 받기'
    }
}
