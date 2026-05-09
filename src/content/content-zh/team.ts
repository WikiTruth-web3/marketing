import { socialLinks } from "../links";
import { TeamMemberProps } from "@/components/custom/teamMember";


export const team = {
  label: '在匿名中前行',
  title: '关于我们',
  subtitle: 'We are a group of people who do not want to make peace with the darkness.',
  description: 'Because our project may face pressure from the traditional world, we have chosen to develop anonymously, but we will choose to reveal our identities once the project has stabilized.'
}

export const teamMembers: TeamMemberProps[] = [
  {
    name: 'Jacob Boy',
    role: '创始人&开发者',
    type: 'purple',
    img: '/images/avatar/1-1.png',
    github: '',
    twitter: '',
    telegram: '',
  },
  {
    name: '温',
    role: '运营&社区',
    type: 'green',
    img: '/images/avatar/2-1.jpg',
    github: '',
    twitter: '',
    telegram: '',
  },
]



// ========================Join Us=====================
export const teamRecruitment = {
  title: '准备好加入我们了吗?',
  content: '我们正在寻找志同道合的伙伴，共同推动Web3正义的发展。\
  如果您对我们的使命感兴趣，请联系我们。',
  needs: [
    '开发人员',
    '法律服务',
    '社区经理',
    '媒体运营',
  ],
  email: socialLinks.emailText
}
