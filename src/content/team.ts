import { socialLinks} from "./links";
import { TeamMemberProps } from "@/components/customer/TeamMember";
// export interface TeamMemberProps {
//   name: string
//   role: string
//   type: 'blue' | 'green' | 'cyan'
//   img: string
//   github?: string
//   twitter?: string
//   telegram?: string
// }

export const team= {

 title:'Our Team',
 subtitle:'We are a group of people who do not want to make peace with the darkness.',
 description:'Because our project may face pressure from the traditional world, we have chosen to develop anonymously, but we will choose to reveal our identities once the project has stabilized.'
}

export const teamMembers: TeamMemberProps[] = [
  {
    name: 'Liu',
    role: 'Founder & Developer',
    type: 'purple',
    img: '/images/avatar/1-1.png',
    github: '',
    twitter: '',
    telegram: '',
  },
  {
    name: 'Wen',
    role: 'Social Media Manager',
    type: 'green',
    img: '/images/avatar/2-1.jpg',
    github: '',
    twitter: '',
    telegram: '',
  },
]



// ========================Join Us=====================
export const teamRecruitment= {
  title:'Ready to Join Us?',
  content:'We are looking for like-minded partners to drive the development of Web3 justice. \
  If you are interested in our mission, please contact us.',
  needs: [
    'Developers',
    'Lawyers',
    'Community Manager',
    'Media Operator',
  ],
  email:socialLinks.emailText
}
