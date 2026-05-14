// import type { LanguageItem } from "@/types/typesDapp/language";

export const homeHowItWorks = {
    title: {
        en: 'How Evidence Market Works',
        zh: 'Evidence Market 如何运作',
        ko: 'Evidence Market 작동 방식'
    },
    steps: [
        {
            number: '1',
            title: { en: 'Anonymous Submission', zh: '匿名提交', ko: '익명 제출' },
            description: { 
                en: 'Users upload encrypted evidence through privacy-preserving infrastructure. No account identity is required.', 
                zh: '用户通过隐私保护基础设施上传加密证据。无需账户身份。', 
                ko: '사용자는 프라이버시 보호 인프라를 통해 암호화된 증거를 업로드합니다. 계정 신원이 필요하지 않습니다.' 
            }
        },
        {
            number: '2',
            title: { en: 'Evidence Box Creation', zh: '创建证据箱', ko: '증거 상자 생성' },
            description: { 
                en: 'The evidence is sealed inside an encrypted “Evidence Box.” Metadata and access are protected using Trusted Execution Environment (TEE) technology.', 
                zh: '证据被密封在加密的“证据箱”中。元数据和访问受可信执行环境 (TEE) 技术保护。', 
                ko: '증거는 암호화된 "증거 상자" 안에 봉인됩니다. 메타데이터와 액세스는 신뢰 실행 환경(TEE) 기술을 사용하여 보호됩니다.' 
            }
        },
        {
            number: '3',
            title: { en: 'Buyout & Delay Market', zh: '买断与延迟市场', ko: '매수 및 지연 시장' },
            description: { 
                en: 'Interested parties can purchase exclusive disclosure rights or pay recurring delay premiums to prevent immediate public release.', 
                zh: '相关方可以购买独家披露权，或支付经常性延迟保费以防止立即向公众发布。', 
                ko: '관심 있는 당사자는 독점 공개 권한을 구매하거나 정기적인 지연 할증료를 지불하여 즉각적인 공개를 방지할 수 있습니다.' 
            }
        },
        {
            number: '4',
            title: { en: 'Automatic Disclosure', zh: '自动披露', ko: '자동 공개' },
            description: { 
                en: 'If delay payments stop, the evidence is automatically released to the public. Truth becomes economically difficult to suppress forever.', 
                zh: '如果延迟支付停止，证据将自动向公众发布。真相在经济上变得难以永远被压制。', 
                ko: '지연 결제가 중단되면 증거가 대중에게 자동으로 공개됩니다. 진실을 영원히 억압하는 것은 경제적으로 어려워집니다.' 
            }
        }
    ]
};
