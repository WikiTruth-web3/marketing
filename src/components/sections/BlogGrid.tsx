// import React, { useState } from 'react';
// import { BlogPost, BlogCard } from '../custom/blogCard';
// import { Container } from '../layout/Container';
// import { Section } from '../layout/Section';
// import { CategoryFilter } from '@/components/custom/categoryFilter';
// import { postsData, aiResearchData, news, categories } from '@/content/blog';
// import { Pagination } from '@/components/base/pagination';


// export const BlogGrid: React.FC = () => {
//   const [activeCat, setActiveCat] = useState('All_Entries');

//   const posts = [...postsData, ...aiResearchData, ...news];
//   return (
//     <Section className='py-5 md:py-10'>
//       <Container>
//         <div className='flex flex-row justify-between items-center mb-10 border-b border-white/10 pb-10'>

//           <CategoryFilter
//             categories={categories}
//             activeCategory={activeCat}
//             onSelect={setActiveCat}
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((post) => (
//             <BlogCard key={post.id} post={post} />
//           ))}
//         </div>
//         <Pagination />
//       </Container>
//     </Section>
//   );
// };
