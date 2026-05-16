import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

interface BlogHeaderProps {
  title: string;
  subtitle: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({ title, subtitle }) => {
  return (
    <Section>
      <Container className='mt-20'>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase tracking-tighter">
          {title}
        </h1>
        <p className="text-white/50 flex items-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          {subtitle}
        </p>


      </Container>
    </Section>
  );
};
