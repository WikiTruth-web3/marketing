import { Shield, EyeOff, Target, AlertTriangle, DollarSign } from "lucide-react";
import { PROJECT_NAME } from "../project";
import type { LanguageItem } from "@/types/typesDapp/language";

export interface WhyWorkItemI18n {
    title: LanguageItem;
    description: LanguageItem;
    icon: any;
    image: string;
}

export const whyWorkTitle: LanguageItem = {
    en: 'Why We Work on This?',
    zh: '为什么我们要做这个?',
    ko: '우리가 이 일을 하는 이유는?'
};

export const whyWorkData: WhyWorkItemI18n[] = [
    {
        title: {
            en: "The Justice Crisis of Society",
            zh: "打破信息与权力的垄断",
            ko: "정보와 권력의 독점 타파"
        },
        description: {
            en: "The bad guys collude with each other, monopolize power and information, create lies, and cover up the truth.",
            zh: "作恶者相互勾结，利用权力和资金垄断信息，制造谎言，将真相深埋。",
            ko: "악당들은 서로 결탁하여 권력과 정보를 독점하고 거짓을 만들어내며 진실을 은폐합니다."
        },
        icon: Shield,
        image: "/images/01.jpg"
    },
    {
        title: {
            en: "The Bad Guys Fear the Truth",
            zh: "坏人最害怕真相",
            ko: "악당들이 가장 두려워하는 것은 진실"
        },
        description: {
            en: "The bad guys will go to any lengths to eliminate the evidence.",
            zh: "坏人会不惜一切代价消除证据。",
            ko: "악당들은 증거를 없애기 위해 어떤 수단도 가리지 않을 것입니다."
        },
        icon: Target,
        image: "/images/04.jpg"
    },
    {
        title: {
            en: "You Know, So You Are in Danger",
            zh: "匿名是你最强的护盾",
            ko: "익명성은 당신의 가장 강력한 방패"
        },
        description: {
            en: `Uploading the evidence to ${PROJECT_NAME.full} can make you safer.`,
            zh: `实名举报意味着被报复。使用 Web3 密码学将证据上传至 ${PROJECT_NAME.full}，在绝对匿名中获得最强保护。`,
            ko: `실명 제보는 보복을 의미합니다. Web3 암호기술을 사용하여 ${PROJECT_NAME.full}에 증거를 업로드하고 절대적인 익명성 속에서 보호를 받으세요.`
        },
        icon: AlertTriangle,
        image: "/images/02.jpg"
    },
    {
        title: {
            en: "No Money No Work",
            zh: "为正义赋予商业价值",
            ko: "정의에 상업적 가치 부여"
        },
        description: {
            en: "Are police or judges free? Why should you be? If justice generates no value, people will avoid it.",
            zh: "如果作恶能暴富，举报却要倾家荡产，正义就会缺席。唯有让正义产生经济价值，才能吸引更多人揭露黑暗。",
            ko: "악행으로 벼락부자가 될 수 있는데 제보로 전 재산을 탕진해야 한다면 정의는 사라질 것입니다. 정의가 경제적 가치를 창출할 때만 더 많은 사람들이 어둠을 폭로하도록 끌어들일 수 있습니다."
        },
        icon: DollarSign,
        image: "/images/05.jpg"
    },
];
