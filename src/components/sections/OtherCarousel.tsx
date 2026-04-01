// import React from 'react';
// import {
//   LucideIcon,
// } from "lucide-react";
// import { Container } from '../layout/Container';
// import { Section } from '../layout/Section';
// import { Subtitle } from '../base/subtitle';
// import { Description } from '../base/description';

// export interface CarouselItem {
//   title: string
//   description: string
//   icon: LucideIcon
//   image?: string
// }


// export const HomeCarousel: React.FC = () => {
//   return (
//     <Section>
//       <Container>
//         <div className="text-center mb-16">
//           <Subtitle>{carouselTitle}</Subtitle>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {carouselData.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div key={index} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary-dim transition-all duration-300 hover:-translate-y-1 group">
//                 <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors">
//                   <Icon className="text-primary-dim w-6 h-6" />
//                 </div>

//                 <Subtitle className="text-lg md:text-xl mb-4">
//                   {item.title}
//                 </Subtitle>

//                 <Description className='text-sm md:text-base font-light'>
//                   {item.description}
//                 </Description>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </Section>
//   );
// };
