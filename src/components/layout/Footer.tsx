import React from 'react';
import { Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-dim border-t border-white/10 w-full py-16 px-8 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto relative z-10">
        <div className="col-span-1 md:col-span-1">
          <div className="text-lg font-bold font-headline mb-6">
            OBSIDIAN PULSE
          </div>
          <p className="font-body text-xs uppercase tracking-widest text-[#C3CAAC] leading-relaxed">
            © 2024 Obsidian Pulse Prop Firm. High-velocity trading for the modern era.
          </p>
        </div>

        <div className="space-y-4">
          <h5 className="text-on-background font-bold text-sm tracking-tight mb-4 uppercase">Platforms</h5>
          <nav className="flex flex-col gap-3 font-body text-xs uppercase tracking-widest text-[#C3CAAC]">
            <a className="hover:text-[#BFFF00] transition-opacity duration-300" href="#mt5">MetaTrader 5</a>
            <a className="hover:text-[#BFFF00] transition-opacity duration-300" href="#ctrader">cTrader</a>
            <a className="hover:text-[#BFFF00] transition-opacity duration-300" href="#dxtrade">DXTrade</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h5 className="text-on-background font-bold text-sm tracking-tight mb-4 uppercase">Company</h5>
          <nav className="flex flex-col gap-3 font-body text-xs uppercase tracking-widest text-[#C3CAAC]">
            <a className="hover:text-[#BFFF00] transition-opacity duration-300" href="#privacy">Privacy Policy</a>
            <a className="hover:text-[#BFFF00] transition-opacity duration-300" href="#terms">Terms of Service</a>
            <a className="hover:text-[#BFFF00] transition-opacity duration-300" href="#risk">Risk Disclosure</a>
            <a className="hover:text-[#BFFF00] transition-opacity duration-300" href="#contact">Contact Support</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h5 className="text-on-background font-bold text-sm tracking-tight mb-4 uppercase">Newsletter</h5>
          <div className="flex gap-2">
            <input
              className="bg-container-highest border-none rounded-lg text-[10px] w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-container/40 text-on-surface placeholder:text-on-variant/50"
              placeholder="EMAIL"
              type="email"
            />
            <button className="bg-primary-container text-on-primary-container p-2 rounded-lg hover:opacity-90 transition-opacity">
              <Send size={16} />
            </button>
          </div>
          <p className="text-[10px] text-on-variant/40 mt-2">Get weekly market insights and firm updates.</p>
        </div>
      </div>
    </footer>
  );
}
