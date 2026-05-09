import React, { useMemo } from 'react';
import { RoadmapCard } from '@/components/custom/roadmapCard';
import { roadmapPhases } from '@/content/i18n/roadmap';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import type { LanguageType } from '@/types/typesDapp/language';
import { t } from '@/lib/i18nUtils';

export const RoadmapTimeline: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  // Find the progress indicator
  const activeIndex = useMemo(() => {
    const activeIdx = roadmapPhases.findIndex(p => p.status === 'active');
    if (activeIdx !== -1) return activeIdx;
    // If no active, find the last completed
    const lastCompleted = [...roadmapPhases].reverse().findIndex(p => p.status === 'completed');
    if (lastCompleted !== -1) return roadmapPhases.length - 1 - lastCompleted;
    return -1;
  }, []);

  const progressPercentage = useMemo(() => {
    if (activeIndex === -1) return 0;
    // We want the line to reach at least the middle of the active node
    return (activeIndex / (roadmapPhases.length - 1)) * 100;
  }, [activeIndex]);

  return (
    <Section className="relative ">

      <Container className="relative">
        {/* Continuous Vertical Line (Desktop only) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-20 bottom-20 w-[2px] hidden lg:block">
          {/* Base Gray Line */}
          <div className="absolute inset-0 bg-white/10 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.05)]"></div>

          {/* Active Colored Line */}
          <div
            className="absolute top-0 w-full bg-gradient-to-b from-primary via-blue-500 to-yellow-500 rounded-full transition-all duration-[2000ms] cubic-bezier(0.34, 1.56, 0.64, 1) shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
            style={{ height: `calc(${progressPercentage}% + 40px)` }}
          >
            {/* Lead Glow Point */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 blur-sm rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative z-10 space-y-24 lg:space-y-32">
          {roadmapPhases.map((phase, index) => (
            <div key={index} className="relative">
              <RoadmapCard
                {...phase}
                phase={t(phase.phase, lang)}
                title={t(phase.title, lang)}
                description={t(phase.description, lang)}
                items={phase.items.map(item => t(item, lang))}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

