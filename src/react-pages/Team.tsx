
// import React from 'react';
import { TeamHero } from '@/components/sections/TeamHero';
import { JoinUs } from '@/components/sections/JoinUs';
import type { LanguageType } from '@/types/typesDapp/language';

export default function Team({ lang = 'en' }: { lang?: LanguageType }) {
    return (
        <div>
            {/* Background Glows */}
            <TeamHero lang={lang} />
            <JoinUs lang={lang} />
        </div>

    );
}

