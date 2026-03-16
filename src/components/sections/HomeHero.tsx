import React, { useState, useEffect } from 'react';
import { ArrowRight} from 'lucide-react';
import { ButtonBase } from '../base/buttonBase';
import { heroData } from '@/content/home';
import TruthBoxCard from '../customer/truthBoxCard';

export const HomeHero: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const mockBoxData = {
    boxId: "8888",
    title: "Global Financial System Integrity Evidence: Transaction Records & Communications",
    nftImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    boxImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
    country: "Global",
    state: "Cyberspace",
    eventDate: "2024-03-16",
    price: "50,000",
    status: "Selling",
    tokenSymbol: "USDT",
    tokenDecimals: 6,
    precision: 2,
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background glow effects - inspired by Hero.jsx */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-screen h-[60%] bg-[radial-gradient(ellipse,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(34,197,94,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid pattern overlay - using w-full to ensure it covers the desktop properly */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Text content */}
        <div 
          className={`transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-8 uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            LIVE TRUTH MARKETPLACE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            {heroData.title}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              for Justice
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-white/80 mb-8 leading-relaxed max-w-xl">
            {heroData.subtitle}
          </h2>

          <p className="text-white/50 text-base md:text-lg mb-10 leading-relaxed max-w-lg">
            {heroData.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <ButtonBase 
              variant="primary" 
              onClick={() => window.open(heroData.primaryCta.link, '_blank')}
              className="w-full sm:w-auto px-8 py-4 text-base shadow-[0_8px_30px_rgba(99,102,241,0.3)]"
            >
              {heroData.primaryCta.text} <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonBase>
            <ButtonBase 
              variant="secondary" 
              onClick={() => window.open(heroData.secondaryCta.link, '_blank')}
              className="w-full sm:w-auto px-8 py-4 text-base backdrop-blur-sm"
            >
              {heroData.secondaryCta.text}
            </ButtonBase>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap gap-8 items-center border-t border-white/5 pt-10">
            {heroData.features.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/40 text-sm font-medium">
                <div className="text-emerald-500/70">
                    <item.icon size={18} />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: TruthBoxCard */}
        <div 
          className={`relative transition-all duration-1000 delay-200 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {/* Background card glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-30 animate-pulse" />
            
            <div className={`relative z-10 w-full max-w-[400px] mx-auto ${visible ? 'animate-float' : ''}`}>
                <TruthBoxCard 
                    data={mockBoxData}
                    className="!bg-[#1A1B23]/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-[0.9] origin-center"
                />
                
                {/* Floating decor elements - matching Hero.jsx aesthetic */}
                {/* <div className="absolute -top-6 -right-6 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md hidden sm:block">
                    <div className="text-[10px] text-white/40 uppercase tracking-tighter mb-1">Market Status</div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> High Demand
                    </div>
                </div>
                
                <div className="absolute -bottom-10 -left-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-md hidden sm:block">
                    <div className="text-[10px] text-white/40 uppercase tracking-tighter mb-1">Privacy Tier</div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        Tier 0 - Absolute
                    </div>
                </div> */}
            </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};
