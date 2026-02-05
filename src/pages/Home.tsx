import React from 'react';
import { HomeHero } from '../components/sections/HomeHero';
import { HomeStats } from '../components/sections/HomeStats';
import { HomeIntro } from '../components/sections/HomeIntro';
import { HomeCarousel } from '../components/sections/HomeCarousel';
import { HomeSecurity } from '../components/sections/HomeSecurity';
import { HomeRevenue } from '../components/sections/HomeRevenue';
import { HomeRevenueDelay } from '../components/sections/HomeRevenue2';
import { HomeComparison } from '../components/sections/HomeComparison';
import { HomeFeatures } from '../components/sections/HomeFeatures';
import { HomePartners } from '../components/sections/HomePartners';
import { HomeVisionSection } from '../components/sections/HomeVisionSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <HomeHero />
      <div className="mt-10">
        <HomeStats />
      </div>
      <HomeIntro />
      <HomeCarousel />
      <HomeSecurity />
      <HomeRevenue />
      <HomeRevenueDelay />
      <HomeComparison />
      <HomeFeatures />
      <HomePartners />
      <HomeVisionSection />
    </div>
  );
};

export default Home;