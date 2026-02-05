import React from 'react';
import { RoadmapHero } from '../components/sections/RoadmapHero';
import { RoadmapTimeline } from '../components/sections/RoadmapTimeline';
// import { RoadmapCTA } from '../components/sections/RoadmapCTA';

const Roadmap: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-background-dark text-white font-display">
      <div className="fixed inset-0 z-0 pointer-events-none matrix-bg"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <RoadmapHero />
        <RoadmapTimeline />
        {/* <RoadmapCTA /> */}
      </div>
    </div>
  );
};

export default Roadmap;