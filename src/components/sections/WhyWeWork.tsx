import React from 'react';
import { whyWorkData, whyWorkTitle } from '@/content/home';
import { FeatureItem } from '../custom/featureItem';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Title } from '../base/title';
import { LucideIcon } from 'lucide-react';

export interface WhyWorkItem {
  title: string
  description: string
  icon: LucideIcon
  image?: string
}


export function WhyWeWork() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % whyWorkData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Container>
        {/* Content Left */}
        <Title className='text-text-light text-center '>{whyWorkTitle}</Title>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center ">

          <div className="space-y-2">
            {whyWorkData.map((feature, index) => (
              <FeatureItem
                key={`why-work-${index}`}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                isCurrent={current === index}
              />
            ))}
          </div>

          <div className="w-full rounded-xl overflow-hidden">
            <img src={whyWorkData[current].image} alt={whyWorkData[current].title} className="w-full object-cover" />
          </div>
        </div>

      </Container>
    </Section>
  );
}
