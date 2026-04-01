import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Subtitle } from '../base/subtitle';
// import { Description } from '../base/description';
import { Paragraph } from '../base/paragraph';
import { twMerge } from 'tailwind-merge';

interface FeatureItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isCurrent: boolean;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon: Icon, isCurrent }) => {

  const transitionClass = isCurrent ? "transition-transform duration-300 bg-surface scale-105" : 'scale-95 bg-surface-low';

  const groupHoverClass = isCurrent ? 'bg-primary transition-all duration-300' : '';
  const groupHoverIconClass = isCurrent ? 'text-primary-dark' : '';
  const subtitleClass = isCurrent ? 'text-text-light transition-all duration-300 ' : 'text-text-dim ';
  const descriptionClass = isCurrent ? 'transition-all duration-300 ' : 'text-text-dark ';

  return (
    <div className={twMerge(
      "flex gap-2 md:gap-4 items-center",
      "rounded-lg px-4 py-2",
      transitionClass

    )}>
      <div className={twMerge(
        "flex-shrink-0 w-5 h-5 md:w-8 md:h-8 rounded-full ",
        "border border-primary/20 flex ",
        "items-center justify-center bg-primary/5 ",
        groupHoverClass
      )}>
        <Icon className={twMerge(
          "text-primary-dim w-3 h-3 md:w-5 md:h-5",
          groupHoverIconClass
        )} />
      </div>
      <div className="space-y-1">
        <Subtitle size='sm' className={twMerge(subtitleClass)}>{title}</Subtitle>
        <Paragraph size='xs' className={twMerge(descriptionClass)}>{description}</Paragraph>
      </div>
    </div>
  );
}
