import React from 'react';
import { Terminal } from 'lucide-react';
import { teamRecruitment } from '@/content/i18n/team';
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from '../base/button';
import type { LanguageType } from '@/types/language';
import { t } from '@/lib/i18nUtils';

export const JoinUs: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  return (
    <Section>
      <Container>
        <div className="mt-20 p-12 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4 uppercase">{t(teamRecruitment.title, lang)}</h2>
              <p className=" mb-6">{t(teamRecruitment.content, lang)}</p>

              {/* Needs List */}
              <div className="flex flex-wrap gap-3">
                {teamRecruitment.needs.map((need, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-widest">
                    {t(need, lang)}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${teamRecruitment.email}`}
            >
              <Button className='px-8 py-4 md:px-10 md:py-5'>
                APPLY_NOW
              </Button>
            </a>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-10 text-primary">
            <Terminal size={400} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

