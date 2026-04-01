
import React from 'react';

import { Features } from '@/components/sections/TechFeatures';
import { TechComparison } from '@/components/sections/TechComparison';
import { TechSecurity } from '@/components/sections/TechSecurity';

export default function Tech() {
    return (

        <div>
            <TechSecurity />
            <Features />
            <TechComparison />
        </div>

    );
}
