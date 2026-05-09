import { socialLinks } from "../links";
import { TeamMemberProps } from "@/components/custom/teamMemberCard";
export const introductionTeam = {
  label: { en: 'In Anonymity We Advance', zh: '在匿名中前行', ko: '익명성 속에서 전진하다' },
  title: { en: 'About Us', zh: '关于我们', ko: '회사 소개' },
  subtitle: { 
    en: 'We are a group of people who do not want to make peace with the darkness.', 
    zh: '我们是一群不愿与黑暗妥协的人。', 
    ko: '우리는 어둠과 타협하고 싶지 않은 사람들의 모임입니다.' 
  },
  description: { 
    en: 'Because our project may face pressure from the traditional world, we have chosen to develop anonymously, but we will choose to reveal our identities once the project has stabilized.', 
    zh: '考虑到项目可能会面临来自传统世界的压力，我们选择了匿名开发，但在项目稳定后，我们会选择公开身份。', 
    ko: '우리 프로젝트가 전통적인 세계로부터 압력을 받을 수 있기 때문에 익명으로 개발하기로 선택했지만, 프로젝트가 안정되면 신원을 공개할 것입니다.' 
  }
}

export const teamMembers: TeamMemberProps[] = [
  {
    name:'Jacob Boy',
    role:'Founder & Developer',
    type: 'purple',
    img: '/images/avatar/1-1.png',
  },
  {
    name: 'Wen',
    role: 'Social Media Manager',
    type: 'green',
    img: '/images/avatar/2-1.jpg',
  },
]

export const teamRecruitment = {
  title: { en: 'Ready to Join Us?', zh: '准备好加入我们了吗?', ko: '우리와 함께할 준비가 되셨나요?' },
  content: { 
    en: 'We are looking for like-minded partners to drive the development of Web3 justice. If you are interested in our mission, please contact us.', 
    zh: '我们正在寻找志同道合的伙伴，共同推动 Web3 正义的发展。如果您对我们的使命感兴趣，请联系我们。', 
    ko: '우리는 Web3 정의의 발전을 추진할 뜻이 같은 파트너를 찾고 있습니다. 우리의 사명에 관심이 있으시면 연락주십시오.' 
  },
  needs: [
    { en: 'Developers', zh: '开发人员', ko: '개발자' },
    { en: 'Lawyers', zh: '法律服务', ko: '변호사' },
    { en: 'Community Manager', zh: '社区经理', ko: '커뮤니티 매니저' },
    { en: 'Media Operator', zh: '媒体运营', ko: '미디어 운영자' },
  ],
  email: socialLinks.emailText
}
