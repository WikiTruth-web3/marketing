import React from 'react';
import { TeamMember } from '../customer/TeamMember';
import { teamMembers } from '@/content/team';

export const TeamGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};
