import { Shield, Scale, FileText, Activity, Cpu, Globe, MessageSquare } from 'lucide-react';
import type { LanguageItem } from '@/types/language';
export interface BlogContent {
    title: LanguageItem
    subtitle: LanguageItem
}

export const blogData: BlogContent = {
    title: { 
        en: 'Cases & Insights', 
        zh: '案例与见解', 
        ko: '케이스 & 인사이트' 
    },
    subtitle: { 
        en: 'Real stories of whistleblowers, corruption, and the fight for truth.', 
        zh: '真实记录了吹哨人、腐败以及为真相而战的故事。', 
        ko: '실제 내부 고발자, 부패, 진실을 향한 투쟁에 대한 이야기입니다.' 
    },
}

// export const successStoriesTitle = 'Justice Pays: Whistleblower Rewards'

