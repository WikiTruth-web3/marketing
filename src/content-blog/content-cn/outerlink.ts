// Lucide icons are now handled by string IDs in BlogCard
import type { BlogPost } from '@/components/custom/blogCard';

// ========================Success Stories=====================

export const postsData: BlogPost[] = [
    {
        id: 1,
        title: 'FBI及其他机构向线人支付了5.48亿美元',
        href: 'https://www.forbes.com/sites/adamandrzejewski/2021/11/18/fbi-and-other-agencies-paid-informants-548-million-in-recent-years-with-many-committing-authorized-crimes/',
        excerpt:
            '近年来，联邦调查局（FBI）和其他机构向线人支付了5.48亿美元，其中许多线人实施了被授权的犯罪。',
        img:
            '/images/blog/fbi548m.png',
        date: 'Nov 18, 2021',
        category: 'SUCCESS_STORIES',
        readTime: '5 Min',
        icon: 'Shield',
        interlink:false
    },
    {
        id: 2,
        title: '通过冷案追踪连环杀手',
        href: 'https://nij.ojp.gov/topics/articles/serial-killer-connections-through-cold-cases',
        excerpt: '根据联邦调查局（FBI）的一份新报告，2017年美国约有40%的凶杀案未能侦破。',
        img: '/images/blog/fbi2017.jpg',
        date: 'June 15, 2020',
        category: 'RESEARCH',
        readTime: '10 Min',
        icon: 'FileText',
        interlink:false

    },
    {
        id: 3,
        title: '2025年33名记者被杀害',
        href: 'https://cpj.org/data/killed/2025/?status=Killed&motiveConfirmed%5B%5D=Confirmed&type%5B%5D=Journalist&start_year=2025&end_year=2025&group_by=location',
        excerpt: '截至2025年7月1日，2025年共有33名记者被杀害，其中26名是在揭露真相时被杀害。',
        img: '/images/blog/33killed.jpeg',
        date: 'July 1, 2025',
        category: 'NEWS',
        readTime: '4 Min',
        icon: 'Activity',
        interlink:false

    },
    {
        id: 4,
        title: '做空机构“浑水”揭露会计实务背后的真相',
        href: 'https://money.cnn.com/2012/11/27/investing/muddy-waters-olam-enron/index.html',
        excerpt: '做空机构“浑水”以揭露主要是中资公司的欺诈性会计行为而闻名，并通过做空股票获利。',
        img: '/images/blog/muddyWaters.png',
        date: 'Nov 27, 2012',
        category: 'RESEARCH',
        readTime: '6 Min',
        icon: 'Scale',
        interlink:false

    },
    {
        id: 5,
        title: '美国证监会向爆料人支付了27.9亿美元奖励。',
        href: 'https://www.sec.gov/enforcement-litigation/whistleblower-program',
        excerpt: '美国证监会向爆料人支付了27.9亿美元奖励。保护爆料人的隐私仍然是首要任务。',
        img: '/images/blog/sec279m.png',
        date: 'May 15, 2023',
        category: 'SUCCESS_STORIES',
        readTime: '8 Min',
        icon: 'Scale',
        interlink:false

    },
    {
        id: 6,
        title: '前德意志银行高管因揭露内幕获得2亿美元奖励。',
        href: 'https://www.reuters.com/business/us-regulator-awards-whistleblower-200m-record-payout-over-benchmark-rigging-case-2021-10-21/',
        excerpt: '一位前德意志银行高管协助监管机构调查基准利率操纵案，获得了创纪录的奖励。',
        img: '/images/blog/bank.jpg',
        date: 'Oct 22, 2021',
        category: 'SUCCESS_STORIES',
        readTime: '7 Min',
        icon: 'Shield',
        interlink:false

    },
]

// ========================AI Research=====================

export const aiResearchData: BlogPost[] = [
    {
        id: 7,
        title: '利己主义与利他主义的道德决策机制',
        href: 'https://www.youtube.com/watch?v=goePYJ74Ydg&t=190s',
        excerpt: '探讨了人工智能处理道德困境的方式，这对于展示我们项目的核心理念非常有启发性。',
        img: '/images/aiReserch/01.jpg',
        date: 'January 2021',
        category: 'RESEARCH',
        readTime: '12 Min',
        icon: 'Cpu',
        interlink:false

    }
]

// ========================News=====================

export const news: BlogPost[] = [
    {
        id: 8,
        title: '比特币：金融自由和人权',
        href: 'https://www.bedfordindependent.co.uk/opinion-how-a-bitcoin-conference-in-bedford-changed-the-way-i-see-financial-freedom-and-human-rights/',
        excerpt: '比特币会议如何改变了人们对金融自由和人权的看法。',
        img: '/images/blog/bitcoinConference.jpg',
        date: 'April 13 2025',
        category: 'NEWS',
        readTime: '5 Min',
        icon: 'Globe',
        interlink:false

    },
    {
        id: 9,
        title: 'Vitalik关于去中心化的思考',
        href: 'https://www.youtube.com/watch?v=jznCAlGknIo',
        excerpt: 'Vitalik 警示，开发者应该更加关注自由、去中心化和用户的权益，而不是盲目追求技术发展。',
        img: '/images/blog/vitalik.jpg',
        date: 'July 3 2025',
        category: 'NEWS',
        readTime: '15 Min',
        icon: 'MessageSquare',
        interlink:false

    },
]