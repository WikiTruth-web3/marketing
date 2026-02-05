import React from 'react';
import { createPortal } from 'react-dom';
import { X as CloseIcon, LayoutGrid, Globe, Rocket, ShieldCheck } from 'lucide-react';
import { appLinks } from '@/content/navbar';

interface LaunchAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LaunchAppModal: React.FC<LaunchAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal View */}
      <div className="relative w-full max-w-lg bg-surface border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col gap-1">
             <div className="flex items-center gap-2 text-white">
                <Rocket size={20} className="text-primary" />
                <h3 className="font-bold text-xl">Launch App</h3>
             </div>
             <p className="text-white/40 text-sm max-w-sm">
                {appLinks.description}
             </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Options Grid */}
        <div className="flex flex-col gap-4">
            {/* Main App */}
            <a
               href={appLinks.app.href}
               target="_blank"
               rel="noopener noreferrer"
               className={`
                 group relative overflow-hidden
                 flex items-start gap-4 p-5 rounded-xl 
                 border border-white/10 bg-white/5 
                 hover:bg-primary/5 hover:border-primary/50 
                 transition-all duration-300
                 ${appLinks.app.disabled ? 'opacity-50 pointer-events-none grayscale' : ''}
               `}
            >
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-primary/20 text-white/60 group-hover:text-primary transition-colors">
                    <LayoutGrid size={24} />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-lg group-hover:text-primary transition-colors">{appLinks.app.name}</span>
                        <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/40">{appLinks.app.phone}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed font-light">
                        {appLinks.app.description}
                    </p>
                </div>
            </a>

            {/* IPFS App */}
            <a
               href={appLinks.appIpfs.href}
               target="_blank"
               rel="noopener noreferrer"
               className={`
                 group relative overflow-hidden
                 flex items-start gap-4 p-5 rounded-xl 
                 border border-white/10 bg-white/5 
                 hover:bg-cyan-400/5 hover:border-cyan-400/50 
                 transition-all duration-300
                 ${appLinks.appIpfs.disabled ? 'opacity-50 pointer-events-none grayscale' : ''}
               `}
            >
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-cyan-400/20 text-white/60 group-hover:text-cyan-400 transition-colors">
                    <ShieldCheck size={24} />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">{appLinks.appIpfs.name}</span>
                        <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/40">{appLinks.appIpfs.phone}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed font-light">
                        {appLinks.appIpfs.description}
                    </p>
                </div>
            </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default LaunchAppModal;
