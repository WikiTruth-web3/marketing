// import React from 'react';
// import { thinking, thinkingLink } from '@/content/content-en/home';
// import { ArrowRight, Quote } from 'lucide-react';
// import { Container } from '../layout/Container';
// import { Section } from '../layout/Section';

// export const Thinking: React.FC = () => {
//   return (
//     <Section>
//       <Container>
//         <div className="relative inline-block">
//           <Quote className="absolute -top-8 -left-8 text-primary/30 w-16 h-16 rotate-180" />

//           <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-8 relative z-10">
//             {thinking.question}
//           </h2>

//           <p className="text-xl md:text-2xl text-white/80 font-serif italic mb-12 leading-relaxed">
//             "{thinking.answer}"
//           </p>

//           <div className="space-y-4">
//             <p className="text-lg md:text-xl text-white/60">
//               {thinking.thinking}
//             </p>
//             <p className="text-2xl font-bold text-primary animate-pulse">
//               {thinking.thinking2}
//             </p>
//           </div>
//         </div>
//         <a
//           href={thinkingLink.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             px-3 py-1.5
//             border border-white/10 rounded-full
//             hover:border-primary
//             inline-flex items-center gap-2 
//             text-white/60 hover:text-white/80 
//             transition-colors text-sm md:text-base
//             "
//         >
//           {thinkingLink.title} <ArrowRight size={14} />
//         </a>
//       </Container>
//     </Section>
//   );
// };
