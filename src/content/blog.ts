import { BlogPost } from '@/components/customer/BlogCard';
import { Shield, Scale, FileText, Activity, Cpu, Globe, MessageSquare } from 'lucide-react';

export interface BlogContent {
  title: string
  subtitle: string
}

export const blogData: BlogContent = {
  title: 'Cases & Insights',
  subtitle: 'Real stories of whistleblowers, corruption, and the fight for truth.',
}

export const successStoriesTitle = 'Justice Pays: Whistleblower Rewards'

export const categories = ['All_Entries', 'News', 'Research', 'Success_Stories'];

// ========================Success Stories=====================

export const postsData: BlogPost[] = [
  {
      id: 1,
      title: 'The FBI and other agencies paid informants',
      href: 'https://www.forbes.com/sites/adamandrzejewski/2021/11/18/fbi-and-other-agencies-paid-informants-548-million-in-recent-years-with-many-committing-authorized-crimes/',
      excerpt:
          'The FBI and other agencies paid informants $548 million in recent years, with many committing authorized crimes.',
      img:
          './images/blog/fbi548m.png',
      date: 'Nov 18, 2021',
      category: 'Success_Stories',
      readTime: '5 Min',
      icon: Shield,
  },
  {
      id: 2,
      title: 'Serial Killer Connections Through Cold Cases',
      href: 'https://nij.ojp.gov/topics/articles/serial-killer-connections-through-cold-cases',
      excerpt:'According to a new report from the Federal Bureau of Investigation (FBI), about 40% of homicides in the U.S. went unsolved in 2017.',
      img:'./images/blog/fbi2017.jpg',
      date: 'June 15, 2020',
      category: 'Research',
      readTime: '10 Min',
      icon: FileText,
  },
  {
      id: 3,
      title: '33 Journalists Killed in 2025',
      href: 'https://cpj.org/data/killed/2025/?status=Killed&motiveConfirmed%5B%5D=Confirmed&type%5B%5D=Journalist&start_year=2025&end_year=2025&group_by=location',
      excerpt:'As of July 1, 2025, 33 journalists have been killed in 2025, with 26 of them killed while exposing the truth.',
      img: './images/blog/33killed.jpeg',
      date: 'July 1, 2025',
      category: 'News',
      readTime: '4 Min',
      icon: Activity,
  },
  {
      id: 4,
      title: 'Muddy Waters Uncovers the Truth Behind Accounting Practices',
      href: 'https://money.cnn.com/2012/11/27/investing/muddy-waters-olam-enron/index.html',
      excerpt:'Blocks firm, Muddy Waters, is known for spotting fraudulent accounting practices, primarily at Chinese companies.',
      img: './images/blog/muddyWaters.png',
      date: 'Nov 27, 2012',
      category: 'Research',
      readTime: '6 Min',
      icon: Scale,
  },
  {
      id: 5,
      title: 'The SEC awarded whistleblowers $2.79 billion in 2023.',
      href: 'https://www.sec.gov/enforcement-litigation/whistleblower-program',
      excerpt:'The SEC awarded whistleblowers $2.79 billion in 2023. Protecting whistleblowers\' privacy remains a top priority.',
      img: './images/blog/sec279m.png',
      date: 'May 15, 2023',
      category: 'Success_Stories',
      readTime: '8 Min',
      icon: Scale,
  },
  {
      id: 6,
      title: 'Former Deutsche Bank executive received $200M reward.',
      href: 'https://www.reuters.com/business/us-regulator-awards-whistleblower-200m-record-payout-over-benchmark-rigging-case-2021-10-21/',
      excerpt:'A former Deutsche Bank executive helped regulators investigate benchmark rigging, receiving a record reward.',
      img: './images/blog/bank.jpg',
      date: 'Oct 22, 2021',
      category: 'Success_Stories',
      readTime: '7 Min',
      icon: Shield,
  },
]

// ========================AI Research=====================

export const aiResearchData: BlogPost[] = [
    {
        id: 7,
        title: 'Moral Decision Mechanism of Artificial Intelligence',
        href: 'https://www.youtube.com/watch?v=goePYJ74Ydg&t=190s',
        excerpt: 'Exploring how AI handles moral dilemmas, perfect for demonstrating the core philosophy of our project.',
        img: '/images/aiReserch/01.jpg',
        date: 'January 2021',
        category: 'Research',
        readTime: '12 Min',
        icon: Cpu,
    }
]

// ========================News=====================

export const news: BlogPost[] = [
  {
    id: 8,
    title: 'Bitcoin: Financial Freedom and Human Rights',
    href: 'https://www.bedfordindependent.co.uk/opinion-how-a-bitcoin-conference-in-bedford-changed-the-way-i-see-financial-freedom-and-human-rights/',
    excerpt:'How a Bitcoin conference changed perspectives on financial freedom and human rights.',
    img:'./images/blog/bitcoinConference.jpg',
    date: 'April 13 2025',
    category: 'News',
    readTime: '5 Min',
    icon: Globe,
},
{
    id: 9,
    title: 'Vitalik Talks About Decentralization',
    href: 'https://www.youtube.com/watch?v=jznCAlGknIo',
    excerpt:'Vitalik challenges builders to focus on freedom, resilience, and true user empowerment in crypto design.',
    img:'./images/blog/vitalik.jpg',
    date: 'July 3 2025',
    category: 'News',
    readTime: '15 Min',
    icon: MessageSquare,
},
]