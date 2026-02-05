import React from 'react';
import { ButtonBase } from '../base/buttonBase';

export const RoadmapCTA: React.FC = () => {
  return (
    <section className="max-w-6xl w-full px-4 pb-32">
      <div className="p-[1px] rounded-3xl bg-gradient-to-r from-primary/30 via-neon-blue/30 to-primary/30">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 rounded-3xl bg-background-dark p-12 lg:p-20 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-5 text-center lg:text-left">
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">Ready to join the future of finance?</h2>
            <p className="text-white/50 text-xl max-w-xl font-light">
                Download our technical whitepaper to learn more about the circuit protocol and our vision for a private, decentralized world.
            </p>
              </div>
          <div className="flex flex-col sm:flex-row gap-5 shrink-0 w-full lg:w-auto">
             <ButtonBase variant="primary">
                 View Whitepaper
             </ButtonBase>
             <ButtonBase variant="secondary">
                 Telegram Group
             </ButtonBase>
          </div>
        </div>
      </div>
    </section>
  );
};
